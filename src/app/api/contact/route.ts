import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { renderContactConfirmationEmail } from "@/lib/email/contactConfirmationTemplate";
import { renderPortfolioInquiryEmail } from "@/lib/email/portfolioInquiryTemplate";
import type { ContactEmailPayload } from "@/lib/email/types";

const contactEmail = process.env.CONTACT_EMAIL?.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fromEmail = process.env.SMTP_FROM_EMAIL?.trim() ?? process.env.SMTP_USER?.trim();
const githubUrl = process.env.GITHUB_URL?.trim();
const linkedinUrl = process.env.LINKEDIN_URL?.trim();
const portfolioUrl = process.env.PORTFOLIO_URL?.trim();
const smtpHost = process.env.SMTP_HOST?.trim();
const smtpPass = process.env.SMTP_PASS?.trim();
const smtpPort = Number(process.env.SMTP_PORT ?? 587);
const smtpSecure = process.env.SMTP_SECURE === "true";
const smtpUser = process.env.SMTP_USER?.trim();

type ContactRequestBody = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  subject?: unknown;
};

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getMissingEmailConfig() {
  return [
    ["SMTP_HOST", smtpHost],
    ["SMTP_PORT", Number.isFinite(smtpPort) ? String(smtpPort) : ""],
    ["SMTP_USER", smtpUser],
    ["SMTP_PASS", smtpPass],
    ["SMTP_FROM_EMAIL", fromEmail],
    ["CONTACT_EMAIL", contactEmail],
    ["PORTFOLIO_URL", portfolioUrl],
    ["LINKEDIN_URL", linkedinUrl],
    ["GITHUB_URL", githubUrl],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactRequestBody | null;
  const name = cleanField(body?.name);
  const email = cleanField(body?.email).toLowerCase();
  const subject = cleanField(body?.subject);
  const message = cleanField(body?.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Full name, email address, subject, and message are required." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const missingConfig = getMissingEmailConfig();

  if (missingConfig.length > 0) {
    console.error("Contact SMTP configuration is incomplete", { missingConfig });

    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 503 },
    );
  }

  const emailConfig = {
    contactEmail: contactEmail as string,
    fromEmail: fromEmail as string,
    githubUrl: githubUrl as string,
    linkedinUrl: linkedinUrl as string,
    portfolioUrl: portfolioUrl as string,
    smtpHost: smtpHost as string,
    smtpPass: smtpPass as string,
    smtpPort,
    smtpSecure,
    smtpUser: smtpUser as string,
  };

  try {
    const transporter = nodemailer.createTransport({
      auth: {
        pass: emailConfig.smtpPass,
        user: emailConfig.smtpUser,
      },
      host: emailConfig.smtpHost,
      port: emailConfig.smtpPort,
      secure: emailConfig.smtpSecure,
    });

    const payload: ContactEmailPayload = {
      contactEmail: emailConfig.contactEmail,
      email,
      githubUrl: emailConfig.githubUrl,
      linkedinUrl: emailConfig.linkedinUrl,
      message,
      name,
      portfolioUrl: emailConfig.portfolioUrl,
      subject,
    };

    const [adminResult, confirmationResult] = await Promise.allSettled([
      transporter.sendMail({
        from: emailConfig.fromEmail,
        html: renderPortfolioInquiryEmail(payload),
        replyTo: email,
        subject: `Portfolio inquiry: ${subject}`,
        to: emailConfig.contactEmail,
      }),
      transporter.sendMail({
        from: emailConfig.fromEmail,
        html: renderContactConfirmationEmail(payload),
        replyTo: emailConfig.contactEmail,
        subject: "Thank You for Contacting Me",
        to: email,
      }),
    ]);

    const adminNotificationSent = adminResult.status === "fulfilled";
    const confirmationSent = confirmationResult.status === "fulfilled";

    if (!adminNotificationSent || !confirmationSent) {
      console.error("Contact SMTP delivery failed", {
        adminError: adminResult.status === "rejected" ? adminResult.reason : null,
        adminNotificationSent,
        confirmationError:
          confirmationResult.status === "rejected" ? confirmationResult.reason : null,
        confirmationSent,
      });

      return NextResponse.json(
        {
          adminNotificationSent,
          confirmationSent,
          error: "Unable to complete the contact email workflow right now.",
          success: false,
        },
        { status: 502 },
      );
    }

    console.info("Contact SMTP workflow completed", {
      adminMessageId: adminResult.value.messageId,
      confirmationMessageId: confirmationResult.value.messageId,
    });

    return NextResponse.json({
      adminNotificationSent: true,
      confirmationSent: true,
      success: true,
    });
  } catch (error) {
    console.error("Contact SMTP workflow crashed", error);

    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}

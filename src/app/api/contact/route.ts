import { NextResponse } from "next/server";
import { Resend } from "resend";
import { personal } from "@/data/personal";
import { renderContactConfirmationEmail } from "@/lib/email/contactConfirmationTemplate";
import { renderPortfolioInquiryEmail } from "@/lib/email/portfolioInquiryTemplate";
import type { ContactEmailPayload } from "@/lib/email/types";

const contactEmail = process.env.CONTACT_EMAIL?.trim();
const resendKey = process.env.RESEND_API_KEY?.trim();
const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isResendTestingSender = fromEmail?.includes("onboarding@resend.dev") ?? false;

type ContactRequestBody = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  subject?: unknown;
};

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
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

  if (!resendKey || !contactEmail || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet. Add RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_EMAIL to enable the contact form.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(resendKey);
    const portfolioUrl =
      process.env.NEXT_PUBLIC_PORTFOLIO_URL ??
      request.headers.get("origin") ??
      "http://localhost:3000";
    const payload: ContactEmailPayload = {
      contactEmail,
      email,
      githubUrl: personal.github,
      linkedinUrl: personal.linkedin,
      message,
      name,
      portfolioUrl,
      subject,
    };

    const inquiryResult = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio inquiry: ${subject}`,
      html: renderPortfolioInquiryEmail(payload),
    });

    if (inquiryResult.error) {
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again later." },
        { status: 502 },
      );
    }

    if (isResendTestingSender && email !== contactEmail.toLowerCase()) {
      return NextResponse.json({
        confirmationSent: false,
        success: true,
        warning:
          "Your message was received. Confirmation emails to visitors require a verified Resend domain.",
      });
    }

    const confirmationResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: contactEmail,
      subject: "Thank You for Contacting Me",
      html: renderContactConfirmationEmail(payload),
    });

    if (confirmationResult.error) {
      return NextResponse.json({
        confirmationSent: false,
        success: true,
        warning:
          confirmationResult.error.statusCode === 403
            ? "Your message was received. Confirmation emails to visitors require a verified Resend domain."
            : "Your message was received, but the confirmation email could not be delivered.",
      });
    }

    return NextResponse.json({ confirmationSent: true, success: true });
  } catch (error) {
    console.error("Contact form delivery failed", error);

    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}

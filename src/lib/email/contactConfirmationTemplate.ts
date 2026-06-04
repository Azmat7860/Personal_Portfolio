import type { ContactEmailPayload } from "./types";
import { escapeHtml } from "./html";

export function renderContactConfirmationEmail(payload: ContactEmailPayload) {
  const name = escapeHtml(payload.name);
  const contactEmail = escapeHtml(payload.contactEmail);
  const portfolioUrl = escapeHtml(payload.portfolioUrl);
  const linkedinUrl = escapeHtml(payload.linkedinUrl);
  const githubUrl = escapeHtml(payload.githubUrl);

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thank You for Contacting Me</title>
      </head>
      <body style="margin:0;background:#050712;padding:0;font-family:Arial,Helvetica,sans-serif;color:#eef4ff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#050712;padding:32px 14px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;overflow:hidden;border:1px solid rgba(125,211,252,0.2);border-radius:24px;background:#0b1020;">
                <tr>
                  <td style="padding:34px 30px;background:linear-gradient(135deg,rgba(14,165,233,0.24),rgba(139,92,246,0.2));">
                    <p style="margin:0 0 10px;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#7dd3fc;">Azmat Khan Portfolio</p>
                    <h1 style="margin:0;font-size:30px;line-height:1.2;color:#ffffff;">Thank you for reaching out</h1>
                    <p style="margin:14px 0 0;font-size:15px;line-height:1.7;color:#dbeafe;">Your message has been received successfully.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px;">
                    <p style="margin:0 0 18px;font-size:17px;line-height:1.8;color:#e5edff;">Hi ${name},</p>
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#cbd5e1;">Thank you for reaching out through my portfolio website.</p>
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#cbd5e1;">I have successfully received your message and appreciate your interest. I will review your inquiry and get back to you as soon as possible.</p>
                    <div style="margin:26px 0;padding:22px;border:1px solid rgba(125,211,252,0.22);border-radius:18px;background:rgba(14,165,233,0.08);">
                      <p style="margin:0 0 8px;color:#7dd3fc;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Urgent matter?</p>
                      <p style="margin:0;color:#dbeafe;font-size:16px;line-height:1.7;">You can contact me directly at <a href="mailto:${contactEmail}" style="color:#7dd3fc;text-decoration:none;">${contactEmail}</a>.</p>
                    </div>
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.8;color:#cbd5e1;">Meanwhile, feel free to explore more of my work and connect with me through the links below.</p>
                    <table role="presentation" cellspacing="0" cellpadding="0" style="margin:22px 0 26px;">
                      <tr>
                        <td style="padding:0 10px 10px 0;"><a href="${portfolioUrl}" style="display:inline-block;border-radius:999px;background:#7dd3fc;color:#050712;font-weight:bold;text-decoration:none;padding:12px 18px;">Portfolio</a></td>
                        <td style="padding:0 10px 10px 0;"><a href="${linkedinUrl}" style="display:inline-block;border-radius:999px;border:1px solid rgba(125,211,252,0.35);color:#e0f2fe;text-decoration:none;padding:11px 18px;">LinkedIn</a></td>
                        <td style="padding:0 0 10px 0;"><a href="${githubUrl}" style="display:inline-block;border-radius:999px;border:1px solid rgba(125,211,252,0.35);color:#e0f2fe;text-decoration:none;padding:11px 18px;">GitHub</a></td>
                      </tr>
                    </table>
                    <p style="margin:0 0 6px;font-size:16px;line-height:1.8;color:#cbd5e1;">Thank you again for your message.</p>
                    <p style="margin:0;font-size:16px;line-height:1.8;color:#ffffff;">Best Regards,<br />Azmat Khan<br /><span style="color:#94a3b8;">Senior Full Stack Developer</span></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px 30px;border-top:1px solid rgba(148,163,184,0.12);color:#94a3b8;font-size:13px;line-height:1.7;">
                    This confirmation was sent automatically from Azmat Khan's portfolio website. If you did not submit this message, you can ignore this email.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}


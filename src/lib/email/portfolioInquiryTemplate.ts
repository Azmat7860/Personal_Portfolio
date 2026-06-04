import type { ContactEmailPayload } from "./types";
import { escapeHtml, nl2br } from "./html";

export function renderPortfolioInquiryEmail(payload: ContactEmailPayload) {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const subject = escapeHtml(payload.subject);
  const message = nl2br(payload.message);
  const portfolioUrl = escapeHtml(payload.portfolioUrl);

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New Portfolio Inquiry</title>
      </head>
      <body style="margin:0;background:#050712;padding:0;font-family:Arial,Helvetica,sans-serif;color:#eef4ff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#050712;padding:32px 14px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;overflow:hidden;border:1px solid rgba(125,211,252,0.18);border-radius:24px;background:#0b1020;">
                <tr>
                  <td style="padding:34px 30px;background:linear-gradient(135deg,rgba(14,165,233,0.22),rgba(139,92,246,0.18));">
                    <p style="margin:0 0 10px;font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#7dd3fc;">Azmat Khan Portfolio</p>
                    <h1 style="margin:0;font-size:30px;line-height:1.2;color:#ffffff;">New portfolio inquiry</h1>
                    <p style="margin:14px 0 0;font-size:15px;line-height:1.7;color:#cbd5e1;">A visitor submitted the contact form from ${portfolioUrl}.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 12px;">
                      <tr>
                        <td style="width:140px;color:#7dd3fc;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Name</td>
                        <td style="color:#ffffff;font-size:16px;">${name}</td>
                      </tr>
                      <tr>
                        <td style="width:140px;color:#7dd3fc;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Email</td>
                        <td style="color:#ffffff;font-size:16px;"><a href="mailto:${email}" style="color:#7dd3fc;text-decoration:none;">${email}</a></td>
                      </tr>
                      <tr>
                        <td style="width:140px;color:#7dd3fc;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Subject</td>
                        <td style="color:#ffffff;font-size:16px;">${subject}</td>
                      </tr>
                    </table>
                    <div style="margin-top:26px;padding:22px;border:1px solid rgba(148,163,184,0.16);border-radius:18px;background:rgba(255,255,255,0.04);">
                      <p style="margin:0 0 12px;color:#7dd3fc;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Message</p>
                      <p style="margin:0;color:#dbeafe;font-size:16px;line-height:1.8;">${message}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px 30px;border-top:1px solid rgba(148,163,184,0.12);color:#94a3b8;font-size:13px;line-height:1.6;">
                    Reply directly to this email to continue the conversation with ${name}.
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


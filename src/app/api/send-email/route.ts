import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { APP_NAME } from "@/lib/config";

type FlooringQuotePayload = {
  formType?: string;
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  size?: string;
  postalCode?: string;
  /** Aliases for flexibility */
  service?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value: string, muted = false) {
  const bg = muted ? "background-color:#f4f7fb;" : "background-color:#ffffff;";
  return `
    <tr>
      <td style="padding:14px 18px;border-bottom:1px solid #e8edf3;${bg}">
        <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#6b7a90;font-weight:700;margin-bottom:4px;">
          ${escapeHtml(label)}
        </div>
        <div style="font-size:15px;color:#0a1018;font-weight:600;line-height:1.4;">
          ${escapeHtml(value)}
        </div>
      </td>
    </tr>
  `;
}

function buildFlooringQuoteEmail(data: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  size: string;
  postalCode: string;
}) {
  const brand = "#0d7fe8";
  const ink = "#0a1018";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Flooring Quote Request</title>
  </head>
  <body style="margin:0;padding:0;background-color:#eef2f7;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f7;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #dce3ec;">
            <tr>
              <td style="background:linear-gradient(135deg, ${ink} 0%, #152033 100%);padding:28px 24px;text-align:left;">
                <div style="display:inline-block;padding:6px 10px;border-radius:999px;background-color:rgba(13,127,232,0.18);border:1px solid rgba(13,127,232,0.45);color:${brand};font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">
                  ${escapeHtml(APP_NAME)}
                </div>
                <h1 style="margin:14px 0 8px;color:#ffffff;font-size:24px;line-height:1.25;font-weight:700;">
                  New Epoxy Flooring Quote
                </h1>
                <p style="margin:0;color:rgba(255,255,255,0.72);font-size:14px;line-height:1.5;">
                  A visitor submitted the homepage quote form. Reply promptly to lock in the project.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 18px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8edf3;border-radius:12px;overflow:hidden;">
                  ${row("Full Name", data.name)}
                  ${row("Email", data.email, true)}
                  ${row("Phone", data.phone)}
                  ${row("Project Type", data.projectType, true)}
                  ${row("Approximate Size", data.size)}
                  ${row("Postal Code", data.postalCode, true)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 18px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#f0f7ff;border:1px solid #cfe4fb;border-radius:12px;padding:16px 18px;">
                      <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${ink};">
                        Quick actions
                      </p>
                      <p style="margin:0;font-size:13px;line-height:1.55;color:#3d4b5f;">
                        Call <a href="tel:${escapeHtml(data.phone.replace(/[^+\d]/g, ""))}" style="color:${brand};text-decoration:none;font-weight:700;">${escapeHtml(data.phone)}</a>
                        or reply to
                        <a href="mailto:${escapeHtml(data.email)}" style="color:${brand};text-decoration:none;font-weight:700;">${escapeHtml(data.email)}</a>.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background-color:#f8fafc;border-top:1px solid #e8edf3;padding:16px 22px;text-align:center;">
                <p style="margin:0;font-size:12px;color:#7a8799;line-height:1.5;">
                  Sent from the ${escapeHtml(APP_NAME)} website flooring quote form.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as FlooringQuotePayload;

    const formType = body.formType ?? "flooring";
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const projectType = (body.projectType ?? body.service ?? "").trim();
    const size = body.size?.trim() ?? "";
    const postalCode = body.postalCode?.trim() ?? "";

    if (formType !== "flooring" && formType !== "quote") {
      return NextResponse.json(
        { success: false, error: "Unsupported form type" },
        { status: 400 },
      );
    }

    if (!name || !email || !phone || !projectType || !size || !postalCode) {
      return NextResponse.json(
        { success: false, error: "Missing required flooring quote fields" },
        { status: 400 },
      );
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SEND_TO) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${APP_NAME} Quotes" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SEND_TO,
      subject: `New Flooring Quote — ${projectType} (${postalCode})`,
      text: [
        `New epoxy flooring quote from ${name}`,
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Project Type: ${projectType}`,
        `Approximate Size: ${size}`,
        `Postal Code: ${postalCode}`,
      ].join("\n"),
      html: buildFlooringQuoteEmail({
        name,
        email,
        phone,
        projectType,
        size,
        postalCode,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}

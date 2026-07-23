import nodemailer from "nodemailer";

type WaitlistRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
  socket?: {
    remoteAddress?: string;
  };
};

type WaitlistResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => WaitlistResponse;
  json: (body: unknown) => void;
};

type WaitlistPayload = {
  email?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const readEnv = (name: string) => process.env[name]?.trim() ?? "";

const parseBody = (body: unknown): WaitlistPayload => {
  if (!body) {
    return {};
  }

  if (typeof body === "string") {
    try {
      return JSON.parse(body) as WaitlistPayload;
    } catch {
      return {};
    }
  }

  if (typeof body === "object") {
    return body as WaitlistPayload;
  }

  return {};
};

const getForwardedFor = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value?.split(",")[0]?.trim() ?? "";
};

export default async function handler(req: WaitlistRequest, res: WaitlistResponse) {
  res.setHeader("Allow", "POST");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const body = parseBody(req.body);
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!emailPattern.test(email)) {
    return res.status(400).json({ ok: false, message: "Invalid email" });
  }

  const host = readEnv("SMTP_HOST");
  const portValue = readEnv("SMTP_PORT");
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  const from = readEnv("WAITLIST_FROM_EMAIL") || user;
  const to = readEnv("WAITLIST_TO_EMAIL") || "info@brokrapp.se";
  const secure = readEnv("SMTP_SECURE") === "true" || portValue === "465";
  const port = Number(portValue || "587");

  if (!host || !port || !user || !pass || !from || !to) {
    return res.status(500).json({ ok: false, message: "Email transport not configured" });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: "[Brokr Waitlist] New signup",
      text: [
        "New Brokr waitlist signup",
        "",
        `Email: ${email}`,
        `Submitted at: ${new Date().toISOString()}`,
        `Origin: ${typeof req.headers?.origin === "string" ? req.headers.origin : "unknown"}`,
        `IP: ${getForwardedFor(req.headers?.["x-forwarded-for"]) || req.socket?.remoteAddress || "unknown"}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f1711;">
          <h2 style="margin-bottom: 16px;">New Brokr waitlist signup</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
          <p><strong>Origin:</strong> ${typeof req.headers?.origin === "string" ? req.headers.origin : "unknown"}</p>
          <p><strong>IP:</strong> ${getForwardedFor(req.headers?.["x-forwarded-for"]) || req.socket?.remoteAddress || "unknown"}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("waitlist email failed", error);
    return res.status(500).json({ ok: false, message: "Unable to send waitlist email" });
  }
}

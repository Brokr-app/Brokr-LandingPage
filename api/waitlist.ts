import nodemailer from "nodemailer";

export type WaitlistRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
  socket?: {
    remoteAddress?: string;
  };
};

export type WaitlistResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => WaitlistResponse;
  json: (body: unknown) => void;
};

type WaitlistPayload = {
  email?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxRequests = 5;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

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

const escapeHtml = (value: string) =>
  value.replace(/[&<>"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    };

    return entities[character];
  });

const consumeRateLimit = (key: string, now = Date.now()) => {
  const current = rateLimits.get(key);

  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= rateLimitMaxRequests) {
    return { allowed: false, retryAfter: Math.ceil((current.resetAt - now) / 1000) };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
};

export default async function handler(req: WaitlistRequest, res: WaitlistResponse) {
  res.setHeader("Allow", "POST");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const body = parseBody(req.body);
  const email = typeof body.email === "string" ? body.email.trim() : "";
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

  const ip = getForwardedFor(req.headers?.["x-forwarded-for"]) || req.socket?.remoteAddress || "unknown";
  const ipRateLimit = consumeRateLimit(`ip:${ip}`);
  const normalizedEmail = email.toLowerCase();
  const emailRateLimit = consumeRateLimit(`email:${normalizedEmail}`);
  const rateLimit = !ipRateLimit.allowed ? ipRateLimit : emailRateLimit;

  if (!rateLimit.allowed) {
    res.setHeader("Retry-After", String(rateLimit.retryAfter));
    return res.status(429).json({ ok: false, message: "Too many requests" });
  }

  const submittedAt = new Date().toISOString();
  const origin = typeof req.headers?.origin === "string" ? req.headers.origin : "unknown";

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
        `Submitted at: ${submittedAt}`,
        `Origin: ${origin}`,
        `IP: ${ip}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f1711;">
          <h2 style="margin-bottom: 16px;">New Brokr waitlist signup</h2>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
          <p><strong>Origin:</strong> ${escapeHtml(origin)}</p>
          <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("waitlist email failed", error);
    return res.status(500).json({ ok: false, message: "Unable to send waitlist email" });
  }
}

import { kv } from '@vercel/kv';

const EMAIL_SET_KEY = 'convolution:notify:emails';
const EMAIL_META_PREFIX = 'convolution:notify:meta:';
// Basic RFC-5322-ish check. Kept intentionally simple.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const config = {
  runtime: 'edge',
};

type SubscribeResponse =
  | { ok: true; alreadySubscribed: boolean }
  | { ok: false; error: string };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON body' }, 400);
  }

  const rawEmail =
    body && typeof body === 'object' && 'email' in body
      ? (body as { email: unknown }).email
      : null;

  if (typeof rawEmail !== 'string') {
    return json({ ok: false, error: 'Missing email' }, 400);
  }

  const email = rawEmail.trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return json({ ok: false, error: 'Invalid email' }, 400);
  }

  try {
    // sadd returns the number of NEW elements added (0 if already present).
    const added = await kv.sadd(EMAIL_SET_KEY, email);
    const alreadySubscribed = added === 0;

    if (!alreadySubscribed) {
      // Store lightweight metadata per email (timestamp, UA, IP) for auditing.
      const meta = {
        email,
        createdAt: new Date().toISOString(),
        ua: req.headers.get('user-agent') ?? null,
        ip:
          req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
          req.headers.get('x-real-ip') ??
          null,
      };
      await kv.set(`${EMAIL_META_PREFIX}${email}`, meta);
    }

    return json({ ok: true, alreadySubscribed }, 200);
  } catch (err) {
    console.error('subscribe: kv error', err);
    return json({ ok: false, error: 'Storage error' }, 500);
  }
}

function json(payload: SubscribeResponse, status: number): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

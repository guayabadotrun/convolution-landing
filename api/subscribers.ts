import { kv } from '@vercel/kv';

const EMAIL_SET_KEY = 'convolution:notify:emails';
const EMAIL_META_PREFIX = 'convolution:notify:meta:';

export const config = {
  runtime: 'edge',
};

type Meta = {
  email: string;
  createdAt: string;
  ua: string | null;
  ip: string | null;
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const expected = process.env.SUBSCRIBERS_EXPORT_TOKEN;
  if (!expected) {
    return new Response('Export not configured', { status: 503 });
  }

  const url = new URL(req.url);
  const provided =
    req.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ??
    url.searchParams.get('token') ??
    '';

  if (!timingSafeEqual(provided, expected)) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const emails = await kv.smembers<string[]>(EMAIL_SET_KEY);
    const sorted = [...emails].sort();
    const format = url.searchParams.get('format') ?? 'csv';

    if (format === 'json') {
      const metas = await Promise.all(
        sorted.map((e) => kv.get<Meta>(`${EMAIL_META_PREFIX}${e}`)),
      );
      const rows = sorted.map((email, i) => metas[i] ?? { email, createdAt: null, ua: null, ip: null });
      return new Response(JSON.stringify({ count: rows.length, subscribers: rows }, null, 2), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    }

    // CSV (default). Fetch metadata for richer export.
    const metas = await Promise.all(
      sorted.map((e) => kv.get<Meta>(`${EMAIL_META_PREFIX}${e}`)),
    );
    const header = 'email,createdAt,ip,userAgent\n';
    const body = sorted
      .map((email, i) => {
        const m = metas[i];
        return [email, m?.createdAt ?? '', m?.ip ?? '', m?.ua ?? '']
          .map(csvEscape)
          .join(',');
      })
      .join('\n');
    return new Response(header + body + '\n', {
      status: 200,
      headers: {
        'content-type': 'text/csv; charset=utf-8',
        'content-disposition': `attachment; filename="convolution-subscribers-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err) {
    console.error('subscribers: kv error', err);
    return new Response('Storage error', { status: 500 });
  }
}

function csvEscape(v: string): string {
  if (v === '' || v == null) return '';
  if (/[",\n\r]/.test(v)) return `"${v.replace(/"/g, '""')}"`;
  return v;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

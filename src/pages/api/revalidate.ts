// Strapi-webhook hits hier. Wij triggeren on-demand revalidate van alle
// publieke routes door per route te fetchen met de Vercel bypass-token,
// zodat Vercel de cache invalideert en de volgende request fresh SSR doet.
//
// URL die Strapi moet aanroepen:
//   https://demo-klarijn.vercel.app/api/revalidate?secret=<REVALIDATE_TOKEN>

import type { APIRoute } from 'astro';

export const prerender = false;

const PUBLIC_PATHS = [
  '/',
  '/home',
  '/oplossingen',
  '/over-ons',
  '/werkwijze',
  '/abonnement',
  '/contact',
  '/kantoor-zwolle',
  '/mandje',
  '/mijn-voortgang',
  '/product',
  '/franchise',
  '/franchise/aanpak',
  '/franchise/vergoedingen',
  '/franchise/beslisboom',
  '/franchise/contact',
];

async function handle(request: Request, url: URL) {
  const token = process.env.REVALIDATE_TOKEN;
  if (!token) {
    return new Response('REVALIDATE_TOKEN not configured', { status: 500 });
  }
  const provided =
    url.searchParams.get('secret') ||
    request.headers.get('x-revalidate-secret') ||
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (provided !== token) {
    return new Response('Unauthorized', { status: 401 });
  }

  const origin = `${url.protocol}//${url.host}`;
  const results = await Promise.allSettled(
    PUBLIC_PATHS.map(async (path) => {
      const target = `${origin}${path}`;
      const res = await fetch(target, {
        headers: { 'x-prerender-revalidate': token },
        cache: 'no-store',
      });
      return { path, status: res.status };
    }),
  );

  const ok = results.filter((r) => r.status === 'fulfilled').length;
  const failed = results.length - ok;

  return new Response(
    JSON.stringify({
      revalidated: ok,
      failed,
      paths: PUBLIC_PATHS,
      results: results.map((r, i) =>
        r.status === 'fulfilled' ? r.value : { path: PUBLIC_PATHS[i], error: String(r.reason) },
      ),
    }),
    { status: 200, headers: { 'content-type': 'application/json' } },
  );
}

export const POST: APIRoute = ({ request, url }) => handle(request, url);
export const GET: APIRoute = ({ request, url }) => handle(request, url);

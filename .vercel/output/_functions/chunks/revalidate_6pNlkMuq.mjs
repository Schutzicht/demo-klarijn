const prerender = false;
const PUBLIC_PATHS = [
  "/",
  "/home",
  "/oplossingen",
  "/over-ons",
  "/werkwijze",
  "/abonnement",
  "/contact",
  "/kantoor-zwolle",
  "/mandje",
  "/mijn-voortgang",
  "/product",
  "/franchise",
  "/franchise/aanpak",
  "/franchise/vergoedingen",
  "/franchise/beslisboom",
  "/franchise/contact"
];
async function handle(request, url) {
  const token = process.env.REVALIDATE_TOKEN;
  if (!token) {
    return new Response("REVALIDATE_TOKEN not configured", { status: 500 });
  }
  const provided = url.searchParams.get("secret") || request.headers.get("x-revalidate-secret") || request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (provided !== token) {
    return new Response("Unauthorized", { status: 401 });
  }
  const origin = `${url.protocol}//${url.host}`;
  const results = await Promise.allSettled(
    PUBLIC_PATHS.map(async (path) => {
      const target = `${origin}${path}`;
      const res = await fetch(target, {
        headers: { "x-prerender-revalidate": token },
        cache: "no-store"
      });
      return { path, status: res.status };
    })
  );
  const ok = results.filter((r) => r.status === "fulfilled").length;
  const failed = results.length - ok;
  return new Response(
    JSON.stringify({
      revalidated: ok,
      failed,
      paths: PUBLIC_PATHS,
      results: results.map(
        (r, i) => r.status === "fulfilled" ? r.value : { path: PUBLIC_PATHS[i], error: String(r.reason) }
      )
    }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}
const POST = ({ request, url }) => handle(request, url);
const GET = ({ request, url }) => handle(request, url);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, n as Fragment, u as unescapeHTML, m as maybeRenderHead } from './entrypoint_Dgli_rsY.mjs';
import { $ as $$Layout } from './Layout_B3OnaIBi.mjs';
import { $ as $$PageHero } from './PageHero_DyUF12K1.mjs';
import { $ as $$ProductCard } from './ProductCard_BlsNAlGI.mjs';
import { a as getProducts } from './content_DZ4RoU1h.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Oplossingen = createComponent(async ($$result, $$props, $$slots) => {
  const products = await getProducts();
  const ldList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Standaardproducten Klarijn",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Service", name: p.title, description: p.description }
    }))
  };
  const tags = Array.from(new Set(products.map((p) => p.tag)));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Oplossingen - Klarijn", "active": "Oplossingen", "description": "Vaste juridische producten met heldere prijzen." }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Standaardproducten<br/>met vaste prijzen.", "lead": "Tien praktische producten die de meest gestelde juridische vragen van ondernemers oplossen. Voeg toe aan je lijst en wij maken er een passende offerte van. Geen webshop - wel een gesprek.", "crumbs": [{ label: "Home", href: "/home" }, { label: "Oplossingen" }] })} ${maybeRenderHead()}<section class="section-y"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="flex gap-2 flex-wrap mb-10"> ${tags.map((t) => renderTemplate`<span class="tag">${t}</span>`)} </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${products.map((p) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": p, "href": p.slug === "arbeidscontract" ? "/product" : "#" })}`)} </div> <div class="text-center mt-14"> <p class="text-ink-soft mb-5">Niet helemaal je vraag? Stel hem direct.</p> <a href="/contact" class="btn btn-primary">Vraag het Klarijn <span class="arrow">→</span></a> </div> </div> </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(ldList))) })}` })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/oplossingen.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/oplossingen.astro";
const $$url = "/oplossingen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Oplossingen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

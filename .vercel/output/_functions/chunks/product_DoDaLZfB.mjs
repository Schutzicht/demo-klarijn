import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, l as renderComponent, n as Fragment, h as addAttribute, u as unescapeHTML } from './entrypoint_Dgli_rsY.mjs';
import { $ as $$Layout } from './Layout_B3OnaIBi.mjs';
import { $ as $$PageHero, a as $$Stamp } from './PageHero_DyUF12K1.mjs';
import { a as $$ProductIcon, $ as $$ProductCard } from './ProductCard_BlsNAlGI.mjs';
import { k as klarijnAnswerer, e as getProductBySlug, a as getProducts } from './content_DZ4RoU1h.mjs';

const $$DirkVraagtInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DirkVraagtInline;
  const { title, eyebrow = "Vraag het Klarijn", pairs } = Astro2.props;
  const NAME_TO_PHOTO = {
    sander: "/img/stock/p14.jpg",
    // man kale kop met baard - praktisch (metaal)
    esther: "/img/stock/p13.jpg",
    // vrouw business 35 - manager familiebedrijf
    eline: "/img/stock/p11.jpg",
    // vrouw casual ~30
    dirk: "/img/stock/p14.jpg",
    joris: "/img/stock/p6.jpg",
    // man bril pak - mkb directeur
    sandra: "/img/stock/p16.jpg",
    // vrouw vrolijk ~30
    kees: "/img/stock/p3.jpg",
    // oudere man bril
    mariska: "/img/stock/p9.jpg",
    // vrouw vrolijk ~25-30
    rik: "/img/stock/p15.jpg",
    femke: "/img/stock/p2.jpg",
    tim: "/img/stock/p7.jpg"
  };
  const askerImg = (p) => p.img || NAME_TO_PHOTO[p.who.toLowerCase()] || "/img/stock/p1.jpg";
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-card p-7 md:p-10 shadow-sm"> <span class="eyebrow">${eyebrow}</span> ${title && renderTemplate`<h3 class="text-2xl md:text-3xl font-semibold text-aubergine mt-1 mb-6">${title}</h3>`} ${pairs.map((p) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`  <div class="flex items-start justify-end gap-3 my-3"> <div class="flex-1 max-w-[85%] flex flex-col items-end min-w-0"> <strong class="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1.5 text-right">${p.who} · ${p.role}</strong> <div class="bg-paper-2 px-5 py-4 rounded-tr-md rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"> <p class="m-0 text-base leading-relaxed">${p.q}</p> </div> </div> <span class="relative w-12 h-12 rounded-full overflow-hidden border-[3px] border-white shrink-0 shadow-md"> <img${addAttribute(askerImg(p), "src")}${addAttribute(`Foto van ${p.who}`, "alt")} loading="lazy" class="w-full h-full object-cover"> </span> </div>  <div class="flex items-start gap-3 my-3 mb-6"> <span class="relative w-12 h-12 rounded-full overflow-hidden border-[3px] border-white shrink-0 shadow-md ring-2 ring-magenta/30"> <img${addAttribute(klarijnAnswerer.img, "src")} alt="Klarijn antwoordt" loading="lazy" class="w-full h-full object-cover object-top scale-[1.6] origin-top"> </span> <div class="flex-1 max-w-[85%] min-w-0"> <strong class="block text-xs font-bold uppercase tracking-wider text-magenta mb-1.5">Klarijn antwoordt</strong> <div class="bg-aubergine text-white px-5 py-4 rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"> <p class="m-0 text-base leading-relaxed">${p.a}</p> </div> </div> </div> ` })}`)} </div>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/DirkVraagtInline.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Product = createComponent(async ($$result, $$props, $$slots) => {
  const product = await getProductBySlug("arbeidscontract");
  const products = await getProducts();
  products.filter((p) => ["handboek-fake", "avg-scan", "uwv"].includes(p.slug) || p.slug === "avg-scan" || p.slug === "uwv").slice(0, 3);
  const samen = products.filter((p) => ["avg-scan", "uwv", "algemene-voorwaarden"].includes(p.slug));
  const ldService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: product.title,
    description: "Volledig en houdbaar arbeidscontract, helder geschreven, cao-conform en geënt op jouw werkwijze.",
    provider: { "@type": "LegalService", name: "Klarijn" },
    serviceType: "Arbeidsrecht - Contract opstellen",
    areaServed: "NL",
    offers: { "@type": "Offer", price: "595", priceCurrency: "EUR" }
  };
  const ldFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Hoe lang duurt het voor we een contract hebben?", acceptedAnswer: { "@type": "Answer", text: "Standaard binnen 5 werkdagen na aanleveren van de gegevens." } },
      { "@type": "Question", name: "Wat als de cao verandert?", acceptedAnswer: { "@type": "Answer", text: "Voor abonnementsklanten: gratis update. Voor losse klanten: tegen meerprijs." } },
      { "@type": "Question", name: "Werkt dit voor zzp'ers ook?", acceptedAnswer: { "@type": "Answer", text: "Voor zzp'ers maken we juist een opdracht-overeenkomst." } }
    ]
  };
  const dvPairs = [
    { who: "Sander", role: "eigenaar metaalbedrijf · Tilburg", q: "Mijn vorige contracten waren van een uitzendbureau. Nu groei ik en wil ik mensen vast in dienst. Werkt dat hetzelfde?", a: "Nee, een uitzendcontract is een driepartijen-contract - die kun je niet zomaar omzetten. We maken voor jouw vaste mensen een nieuw contract op maat. Belangrijk: cao Metalektro is van toepassing, dus we nemen die mee. Als ze al langer voor je werken, telt die historie mee voor de ketenregeling." },
    { who: "Esther", role: "manager familiebedrijf · Veenendaal", q: "Ik wil een concurrentiebeding voor mijn nieuwe verkoper. Mag dat eigenlijk wel?", a: "Mag, maar de regels zijn per 2025 strenger. In een contract voor onbepaalde tijd kan het, in een tijdelijk contract alleen met zwaarwegende motivatie. We kijken samen wat realistisch standhoudt - een te breed beding houdt later voor de rechter geen stand. Liever iets duidelijks dat wél werkt." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${product.title} - Klarijn`, "active": "Oplossingen" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "PageHero", $$PageHero, { "title": `${product.title}.`, "lead": "Een volledig arbeidscontract, helder geschreven, cao-conform en geënt op jouw werkwijze. Geen template van internet - eentje die houdbaar is en die je begrijpt.", "crumbs": [{ label: "Home", href: "/home" }, { label: "Oplossingen", href: "/oplossingen" }, { label: product.title }], "eyebrow": "Standaardproduct · Arbeid", "stamps": [{ text: "Vaste prijs · € 595", variant: "gold", rotate: 6 }] })} ${maybeRenderHead()}<section class="section-y"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="grid lg:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-16 items-start"> <!-- Sticky visual + video --> <div class="lg:sticky lg:top-28" data-reveal> <div class="relative"> <div class="aspect-[4/5] bg-aubergine rounded-jumbo overflow-hidden shadow-2xl"> ${renderComponent($$result2, "ProductIcon", $$ProductIcon, { "icon": product.icon })} </div> <div class="absolute -top-4 -right-3 z-10"> ${renderComponent($$result2, "Stamp", $$Stamp, { "text": "In 5 dagen", "rotate": 10, "variant": "magenta" })} </div> </div> <div class="mt-5 bg-white rounded-card p-5 flex items-center gap-4 cursor-pointer transition-all hover:bg-aubergine hover:text-white group shadow-sm" tabindex="0" role="button"> <div class="w-14 h-14 rounded-full bg-magenta grid place-items-center shrink-0 text-white"> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"></polygon></svg> </div> <div> <strong class="block text-base font-semibold">Bekijk: hoe maken we een contract?</strong> <span class="text-sm opacity-70 group-hover:opacity-90">2:14 - Eline legt uit</span> </div> </div> </div> <div data-reveal data-reveal-delay="1"> <span class="eyebrow">Wat krijg je?</span> <h2 class="display-2 mt-3 mb-5">Een contract dat past<br>bij <span class="brush--soft">hoe jij werkt</span>.</h2> <p class="text-ink-soft text-lg leading-relaxed mb-6">
De meeste arbeidscontracten zijn óf zo'n template van internet (en dus juridisch wankel), óf zo'n monster van 14 pagina's geschreven door een advocaat (en dus onleesbaar voor de mensen die hem moeten ondertekenen). Wij doen het anders.
</p> <ul class="list-none p-0 my-6 space-y-3"> ${[
    "Volledig arbeidscontract - onbepaalde tijd, bepaalde tijd of oproepbasis",
    "Cao-conform: we checken voor jouw branche",
    "Concurrentie- en relatiebeding (waar dat juridisch standhoudt)",
    "Geheimhouding & intellectueel eigendom",
    "Beoordeeld in plain Nederlands - geen advocatenjargon",
    "Inclusief begeleidende infosheet voor je medewerker"
  ].map((li) => renderTemplate`<li class="flex items-start gap-3 pb-3 border-b border-ink/10"> <span class="mt-1 w-5 h-5 rounded-full bg-magenta shrink-0 grid place-items-center"> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> </span> <span class="text-base">${li}</span> </li>`)} </ul> <div class="grid grid-cols-3 gap-2 sm:gap-3 my-8"> ${[
    { v: "5 dagen", l: "Doorlooptijd" },
    { v: "€ 595", l: "Vaste prijs" },
    { v: "1 jaar", l: "Update-recht" }
  ].map((s) => renderTemplate`<div class="bg-paper-2 rounded-2xl p-4 text-center"> <strong class="block font-display text-3xl text-aubergine leading-none mb-1">${s.v}</strong> <span class="text-xs font-semibold uppercase tracking-wider text-ink-soft">${s.l}</span> </div>`)} </div> <div class="flex gap-3 flex-wrap mt-6 mb-12"> <button class="btn btn-primary add-btn"${addAttribute(product.slug, "data-slug")}${addAttribute(product.title, "data-title")}${addAttribute(product.tagline, "data-tagline")} data-stamp="Genoteerd!"> <span class="add-btn__label">Voeg toe aan mijn lijst</span> <span class="arrow">→</span> </button> <a href="/contact" class="btn btn-ghost">Heb je nog vragen?</a> </div> ${renderComponent($$result2, "DirkVraagtInline", $$DirkVraagtInline, { "title": "Wat ondernemers ons vroegen over arbeidscontracten", "pairs": dvPairs })} <h3 class="text-2xl font-semibold text-aubergine mt-12 mb-4">Hoe het werkt</h3> <ol class="list-none p-0 space-y-3"> ${[
    "Je voegt het product toe aan je lijst en stuurt je gegevens.",
    "Een vaste jurist uit jouw rayon plant een korte intake (telefoon of video).",
    "We sturen een eerste concept binnen 5 werkdagen.",
    "Eén feedbackronde inbegrepen, dan jouw definitieve contract."
  ].map((step, i) => renderTemplate`<li class="flex items-start gap-4 pb-3 border-b border-ink/10"> <span class="font-display text-3xl text-magenta leading-none shrink-0 w-10">${String(i + 1).padStart(2, "0")}</span> <span class="text-base mt-1">${step}</span> </li>`)} </ol> <h3 class="text-2xl font-semibold text-aubergine mt-12 mb-4">Veelgestelde vragen</h3> <div class="grid gap-2.5"> ${[
    { q: "Hoe lang duurt het voor we een contract hebben?", a: "Standaard binnen 5 werkdagen na aanleveren van de gegevens. Spoed kan, dan binnen 48 uur tegen een spoedtoeslag." },
    { q: "Wat als de cao verandert?", a: "Voor abonnementsklanten: gratis update. Voor losse klanten: tegen meerprijs. We monitoren actief de relevante cao's." },
    { q: "Werkt dit voor zzp'ers ook?", a: "Voor zzp'ers maken we juist een opdracht-overeenkomst - vergelijkbaar product, vermijdt schijnzelfstandigheid. Vraag het ons als je twijfelt." },
    { q: "Kan ik dit contract zelf nog aanpassen?", a: "Ja. Je krijgt het in Word én PDF. Voor grote wijzigingen kun je altijd opnieuw bij ons aankloppen - als abonnementsklant gratis voor kleine aanpassingen." }
  ].map((f) => renderTemplate`<details class="faq-item"> <summary>${f.q}</summary> <div class="px-6 pb-5 text-ink-soft leading-relaxed">${f.a}</div> </details>`)} </div> </div> </div> </div> </section> <section class="section-y bg-paper-2"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="mb-10"> <span class="eyebrow">Combineer & Bespaar</span> <h2 class="display-2 mt-3">Vaak samen gevraagd.</h2> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${samen.map((p) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": p, "href": "#" })}`)} </div> </div> </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(ldService)), unescapeHTML(JSON.stringify(ldFaq))) })}` })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/product.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/product.astro";
const $$url = "/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Product,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

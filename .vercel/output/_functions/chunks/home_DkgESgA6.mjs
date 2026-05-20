import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, n as Fragment, u as unescapeHTML } from './entrypoint_Dgli_rsY.mjs';
import { $ as $$Layout } from './Layout_B3OnaIBi.mjs';
import { $ as $$ProductCard } from './ProductCard_BlsNAlGI.mjs';
import { $ as $$AnimatedNumber, a as $$DirkVraagtPanel } from './AnimatedNumber_BzPbCnXl.mjs';
import 'clsx';
import { r as renderScript } from './script_Cdv6jpD9.mjs';
import { k as klarijnAnswerer, a as getProducts, b as getHomepageContent } from './content_DZ4RoU1h.mjs';
import { $ as $$SectionDivider } from './SectionDivider_eVuRMp4h.mjs';

const $$HeroAsk = createComponent(($$result, $$props, $$slots) => {
  const segments = [
    {
      id: "personeel",
      label: "Personeel & arbeidsrecht",
      answer: "Van arbeidscontract tot ontslag, of een dossier bij UWV. We pakken het op met een vaste prijs vooraf, geen verrassingen.",
      actions: [
        { title: "Arbeidscontract op maat", desc: "Vaste prijs, 5 dagen.", href: "/product" },
        { title: "Stel je vraag direct", desc: "Antwoord binnen 1 werkdag.", kind: "ask", prefill: "Ik heb een vraag over personeel of arbeidsrecht" }
      ]
    },
    {
      id: "incasso",
      label: "Onbetaalde facturen",
      answer: "No-cure-no-pay incasso. Aanmaning, sommatie, en zo nodig kort geding. In 9 van 10 zaken al opgelost na de eerste brief.",
      actions: [
        { title: "Incasso pakket", desc: "No-cure-no-pay basis.", href: "/oplossingen" },
        { title: "Direct advies", desc: "Schets je situatie.", kind: "ask", prefill: "Mijn klant betaalt al langere tijd niet, kunnen jullie helpen?" }
      ]
    },
    {
      id: "contracten",
      label: "Contracten & voorwaarden",
      answer: "Algemene voorwaarden of een contract op maat. Branchespecifiek, juridisch waterdicht, in plain Nederlands. Geen template.",
      actions: [
        { title: "Algemene Voorwaarden", desc: "Vaste prijs.", href: "/oplossingen" },
        { title: "Laat dit checken", desc: "Reactie binnen 1 werkdag.", kind: "ask", prefill: "Ik wil een contract laten beoordelen" }
      ]
    },
    {
      id: "overdracht",
      label: "Bedrijfsovername",
      answer: "Drie sporen tegelijk: structuur, fiscaal, en de menselijke kant. Tijdslijn van 18 maanden zodat je niets vergeet.",
      actions: [
        { title: "Familieoverdracht", desc: "Volledig 18-maanden traject.", href: "/oplossingen" },
        { title: "Eerst even sparren", desc: "Geen verkooppraat.", kind: "ask", prefill: "We willen de zaak overdragen, waar moeten we beginnen?" }
      ]
    },
    {
      id: "anders",
      label: "Iets anders",
      answer: "Veel vragen passen niet binnen vaste hokjes. Stuur jouw situatie en je krijgt binnen 1 werkdag een eerste duiding.",
      actions: [
        { title: "Stel je vraag", desc: "Geen formulier-bureaucratie.", kind: "ask", prefill: "" },
        { title: "Bel ons direct", desc: "Ma-Vr 08.30 - 17.30.", href: "tel:0651180138" }
      ]
    }
  ];
  const klarijnImg = klarijnAnswerer.img;
  return renderTemplate`${maybeRenderHead()}<div class="hero-ask bg-white rounded-jumbo p-6 md:p-8 shadow-[0_20px_50px_-12px_rgba(94,31,92,0.18)] relative" data-hero-ask data-astro-cid-l6cegsz2> <!-- Topic chips - direct zichtbaar, geen extra header (sectie heeft eigen titel) --> <div class="flex flex-wrap gap-2 mb-6" data-astro-cid-l6cegsz2> ${segments.map((seg) => renderTemplate`<button type="button" class="ask-chip group bg-paper border-[1.5px] border-ink/10 rounded-full px-4 py-2.5 text-sm font-medium text-aubergine hover:border-magenta hover:bg-magenta hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer data-[active]:bg-magenta data-[active]:border-magenta data-[active]:text-white"${addAttribute(seg.id, "data-ask-id")} data-astro-cid-l6cegsz2>${seg.label}</button>`)} </div> <!-- Antwoord-bubble: verschijnt bij selecteren --> <div data-ask-result data-astro-cid-l6cegsz2> <!-- Empty state --> <div class="flex items-center gap-3 pt-5 border-t border-ink/8" data-ask-empty data-astro-cid-l6cegsz2> <span class="relative w-10 h-10 rounded-full overflow-hidden border-[2px] border-white shrink-0 shadow-sm ring-2 ring-magenta/25" data-astro-cid-l6cegsz2> <img${addAttribute(klarijnImg, "src")} alt="" aria-hidden="true" class="w-full h-full object-cover object-top scale-[1.6] origin-top" data-astro-cid-l6cegsz2> </span> <p class="text-ink-soft text-sm m-0" data-astro-cid-l6cegsz2>Klik een onderwerp aan voor Klarijn's eerste duiding.</p> </div> ${segments.map((seg) => renderTemplate`<div class="ask-content hidden border-t border-ink/8 pt-5"${addAttribute(seg.id, "data-ask-content")} data-astro-cid-l6cegsz2> <!-- Klarijn antwoord-bubble in Dirk-vraagt-stijl --> <div class="flex items-start gap-3" data-astro-cid-l6cegsz2> <span class="relative w-9 h-9 rounded-full overflow-hidden border-[2px] border-white shrink-0 shadow-sm ring-2 ring-magenta/25" data-astro-cid-l6cegsz2> <img${addAttribute(klarijnImg, "src")} alt="" aria-hidden="true" class="w-full h-full object-cover object-top scale-[1.6] origin-top" data-astro-cid-l6cegsz2> </span> <div class="flex-1 min-w-0" data-astro-cid-l6cegsz2> <div class="bg-paper-2 px-4 py-3 rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" data-astro-cid-l6cegsz2> <div class="text-[.65rem] font-bold uppercase tracking-wider text-magenta mb-1" data-astro-cid-l6cegsz2>Klarijn antwoordt</div> <p class="text-sm md:text-[.95rem] text-ink leading-relaxed m-0" data-astro-cid-l6cegsz2>${seg.answer}</p> </div> </div> </div> <!-- Vervolg-acties (geen indent op narrow mobile) --> <div class="grid sm:grid-cols-2 gap-2 mt-3 sm:ml-12" data-astro-cid-l6cegsz2> ${seg.actions.map((act) => act.href ? renderTemplate`<a${addAttribute(act.href, "href")} class="group flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-paper border border-ink/8 hover:bg-white hover:border-magenta hover:shadow-md transition-all" data-astro-cid-l6cegsz2> <div class="min-w-0" data-astro-cid-l6cegsz2> <h4 class="font-sans font-bold text-aubergine text-xs m-0 truncate" data-astro-cid-l6cegsz2>${act.title}</h4> <p class="text-[.7rem] text-ink-soft mt-0.5 m-0 truncate" data-astro-cid-l6cegsz2>${act.desc}</p> </div> <span class="w-6 h-6 rounded-full bg-white shrink-0 flex items-center justify-center border border-ink/10 group-hover:bg-magenta group-hover:border-magenta group-hover:text-white transition-colors text-ink-soft" data-astro-cid-l6cegsz2> <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-l6cegsz2><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-l6cegsz2></path></svg> </span> </a>` : renderTemplate`<button type="button"${addAttribute(act.prefill || "", "data-ask-prefill")} class="group w-full text-left flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-magenta text-white border border-magenta hover:bg-magenta-deep hover:shadow-md transition-all" data-astro-cid-l6cegsz2> <div class="min-w-0" data-astro-cid-l6cegsz2> <h4 class="font-sans font-bold text-white text-xs m-0 truncate" data-astro-cid-l6cegsz2>${act.title}</h4> <p class="text-[.7rem] text-white/85 mt-0.5 m-0 truncate" data-astro-cid-l6cegsz2>${act.desc}</p> </div> <span class="w-6 h-6 rounded-full bg-white shrink-0 flex items-center justify-center text-magenta" data-astro-cid-l6cegsz2> <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-l6cegsz2><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-l6cegsz2></path></svg> </span> </button>`)} </div> </div>`)} </div> </div>  ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/HeroAsk.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/HeroAsk.astro", void 0);

const $$WhatWeDontDo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-y bg-paper relative overflow-hidden"> <div class="ambient-blob absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none" style="background: radial-gradient(circle, var(--color-magenta-soft) 0%, transparent 70%);"></div> <div class="max-w-[1240px] mx-auto px-4 md:px-8 relative"> <div class="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center"> <div data-reveal> <span class="eyebrow">Onze positionering</span> <h2 class="display-2 mt-3">Wat doen we<br><em class="not-italic">níet</em>?</h2> <p class="text-lg text-ink-soft leading-relaxed mt-5">
De juridische sector hangt vol gewoonten die ondernemers in de weg zitten. Klarijn is opgebouwd door iets van die gewoonten consequent te weigeren.
</p> </div> <ul class="grid sm:grid-cols-2 gap-3" data-reveal data-reveal-delay="2"> ${[
    { strike: "Uurtje-factuurtje", alt: "Vaste prijzen vooraf" },
    { strike: "Wisselende juristen", alt: "Eén vast aanspreekpunt" },
    { strike: "Juridisch jargon", alt: "Plain Nederlands" },
    { strike: "Open-einde offertes", alt: "Heldere afspraken" },
    { strike: "Glanzende kantoren", alt: "Voeten in de klei" },
    { strike: "Verplichte intake", alt: "Direct antwoord" }
  ].map((item) => renderTemplate`<li class="bg-white rounded-card p-5 shadow-sm hover:shadow-lg transition-all"> <span class="strike-through font-display text-xl md:text-2xl block leading-tight mb-1">${item.strike}</span> <span class="text-aubergine font-semibold text-base">→ ${item.alt}</span> </li>`)} </ul> </div> </div> </section>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/WhatWeDontDo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const products = await getProducts();
  const featured = products.slice(0, 6);
  const hp = await getHomepageContent();
  const heroLines = hp.heroTitle.split("\n");
  const heroFirst = heroLines[0] ?? "";
  const heroSecond = heroLines[1] ?? "";
  const ldOrg = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Klarijn",
    alternateName: "Vraag het Klarijn",
    description: "Helderheid in juridische oplossingen. Voor mkb, familiebedrijven en maakindustrie.",
    url: "https://klarijn.nl",
    slogan: "Vraag het Klarijn",
    areaServed: "NL",
    knowsLanguage: "nl",
    priceRange: "€€"
  };
  const ldFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Wat is het verschil tussen Klarijn en een advocatenkantoor?", acceptedAnswer: { "@type": "Answer", text: "Wij zijn juristen, geen advocaten. Voor 90% van wat een ondernemer juridisch tegenkomt, hoef je geen advocaat te hebben." } },
      { "@type": "Question", name: "Werken jullie met vaste prijzen?", acceptedAnswer: { "@type": "Answer", text: "Voor onze standaardproducten: ja, altijd." } },
      { "@type": "Question", name: "Wat zit er in het abonnement?", acceptedAnswer: { "@type": "Answer", text: "Onbeperkt korte vragen, een vaste jurist als aanspreekpunt, en 30% korting op alle standaardproducten." } }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Klarijn - Vraag het Klarijn. Helderheid in juridische oplossingen.", "description": "Klarijn brengt helderheid in juridische oplossingen. Voor mkb, familiebedrijven en de maakindustrie.", "active": "Home" }, { "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative bg-paper pt-10 md:pt-16 lg:pt-20 pb-20 md:pb-28 overflow-hidden"> <!-- Soft ambient backgrounds (klant) --> <div class="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-25 pointer-events-none blur-3xl" style="background: radial-gradient(circle, var(--color-magenta-soft) 0%, transparent 70%);"></div> <div class="absolute top-1/2 -left-72 w-[640px] h-[640px] rounded-full opacity-15 pointer-events-none blur-3xl" style="background: radial-gradient(circle, var(--color-aubergine-soft) 0%, transparent 70%);"></div> <div class="max-w-[1240px] mx-auto px-4 md:px-8 relative z-10"> <div class="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-center"> <div> <span class="eyebrow" data-reveal>Voor mkb · familiebedrijven · maakindustrie</span> <h1 class="display-1 mt-4 mb-8 text-balance text-aubergine" data-reveal data-reveal-delay="1"> ${heroFirst}${heroSecond && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`<br><span class="brush">${heroSecond}</span>` })}`} </h1> <p class="text-lg md:text-xl text-ink-soft max-w-[48ch] mb-8 leading-relaxed" data-reveal data-reveal-delay="2"> ${hp.heroLead} </p> <div class="flex gap-3 flex-wrap" data-reveal data-reveal-delay="3"> <a class="btn btn-primary"${addAttribute(hp.heroCtaPrimaryHref, "href")}>${hp.heroCtaPrimaryLabel} <span class="arrow">→</span></a> <a class="btn btn-ghost"${addAttribute(hp.heroCtaSecondaryHref, "href")}>${hp.heroCtaSecondaryLabel}</a> </div> </div> <!-- Hero rechterkolom: foto Eibert met VRAAG HET pop-up bubble --> <div class="relative max-w-[520px] mx-auto w-full" data-reveal data-reveal-delay="2"> <div class="aspect-[4/5] photo-blob shadow-[0_30px_60px_-12px_rgba(94,31,92,0.25)]"> <img src="/img/eibert.webp" alt="Eibert Lijnbach, mede-oprichter Klarijn" width="800" height="1000" fetchpriority="high" loading="eager" decoding="async" class="w-full h-full object-cover"> </div> <img src="/img/vraag-het-bubble.webp" alt="" aria-hidden="true" loading="eager" class="absolute -left-[6%] bottom-[6%] w-[36%] z-20 animate-bubble-float" style="filter: drop-shadow(0 18px 40px rgba(224, 39, 122, .42));"> </div> </div> </div> </section>  <div class="bg-magenta text-white py-3 md:py-4 overflow-hidden border-y border-magenta-deep" aria-hidden="true"> <div class="flex gap-8 md:gap-12 whitespace-nowrap animate-ticker font-display text-xl md:text-3xl"> ${[...Array(2)].map(() => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${hp.marqueeItems.map((m) => renderTemplate`<span class="inline-flex items-center gap-12">${m}<span class="inline-block w-1.5 h-1.5 bg-white/55 rounded-full"></span></span>`)}` })}`)} </div> </div>  <section class="section-y bg-paper-2"> <div class="max-w-[1240px] mx-auto px-4 md:px-8" data-reveal> <div class="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start"> <div> <span class="eyebrow">Direct een eerste duiding</span> <h2 class="display-2 mt-3 mb-4">Waar gaat<br>je vraag over?</h2> <p class="text-lg text-ink-soft leading-relaxed max-w-[40ch]">
Klik een onderwerp aan en je krijgt direct Klarijn's eerste duiding plus de bijpassende vervolgstap. Geen gedoe, geen formulier-bureaucratie.
</p> </div> ${renderComponent($$result2, "HeroAsk", $$HeroAsk, {})} </div> </div> </section>  <section class="py-14 md:py-16 bg-paper"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center"> ${[
    { v: 847, suf: "+", l: "Klanten" },
    { v: 14, l: "Vaste juristen" },
    { v: 96, suf: "%", l: "Antwoord <24u" },
    { v: 12, l: "Specialismen" }
  ].map((s, i) => renderTemplate`<div data-reveal${addAttribute(i + 1, "data-reveal-delay")}> <span class="block font-display text-5xl md:text-7xl text-aubergine leading-none"> ${renderComponent($$result2, "AnimatedNumber", $$AnimatedNumber, { "value": s.v, "suffix": s.suf || "" })} </span> <span class="block text-xs md:text-sm font-semibold uppercase tracking-wider text-ink-soft mt-3">${s.l}</span> </div>`)} </div> </div> </section>  <section class="section-y bg-paper" id="werkwijze"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="grid lg:grid-cols-2 gap-8 items-end mb-12" data-reveal> <div> <span class="eyebrow">Wat mag je verwachten</span> <h2 class="display-2 mt-3">De aanpak van<br><span class="brush--soft">Klarijn</span>.</h2> </div> <p class="text-lg md:text-xl text-ink-soft lg:justify-self-end max-w-[44ch]">
Wat hebben we gemeen met onze klanten? We werken op resultaat. Geen lege beloftes, geen wollig taalgebruik.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"> ${[
    { t: "Snelle reactie", d: "Bel of mail ons gerust. Voor een korte vraag krijg je dezelfde dag antwoord. Op uitgebreide vragen reageren we binnen 1 werkdag.", icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
    { t: "Eenvoud boven alles", d: "In alles wat we doen is het belangrijk dat de opdrachtgever weet hoe het zit. We spreken jouw taal, niet de onze.", icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>' },
    { t: "Zakelijke blik", d: "We snappen de juridische issues van jou als ondernemer. We houden je een eerlijke spiegel voor.", icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { t: "Duidelijke route", d: "In onze samenwerking zorgen we ervoor dat je altijd begrijpt waar we naartoe gaan en welke stappen we daarbij nemen.", icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
    { t: "Oplossing", d: "Hoe lastig de situatie ook lijkt, er is altijd een oplossing. We nemen je mee in de mogelijkheden, risico's en kansen.", icon: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>' },
    { t: "Netwerk van specialisten", d: "We weten wanneer aanvullende specialisten nodig zijn - IE, fiscaal, AVG. Jij merkt niets van de inzet, je hebt contact met Klarijn.", icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' }
  ].map((f, i) => renderTemplate`<article class="bg-white rounded-card p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all" data-reveal${addAttribute(i % 3 + 1, "data-reveal-delay")}> <div class="w-12 h-12 rounded-xl text-magenta grid place-items-center mb-4" style="background-color: rgba(224, 39, 122, 0.12);"> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${unescapeHTML(f.icon)}</svg> </div> <h3 class="text-xl font-semibold text-ink mb-2">${f.t}</h3> <p class="text-ink-soft text-sm leading-relaxed mb-0">${f.d}</p> </article>`)} </div> </div> </section>  ${renderComponent($$result2, "WhatWeDontDo", $$WhatWeDontDo, {})} ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "variant": "curve-down", "from": "var(--color-paper)", "to": "var(--color-paper-2)" })}  <section class="section-y bg-paper-2"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-center"> <div data-reveal> <span class="eyebrow">Vraag het Klarijn</span> <h2 class="display-2 mt-3 mb-4">Andere ondernemers<br>vroegen ons dit.</h2> <p class="text-lg text-ink-soft max-w-[50ch] mb-6 leading-relaxed">
Echte vragen, echte antwoorden. Op de productpagina's vind je nog meer voorbeelden - en uiteraard: stel je eigen vraag wanneer je maar wilt.
</p> <div class="flex gap-3 flex-wrap"> <a href="/contact" class="btn btn-primary">Stel je vraag <span class="arrow">→</span></a> <a href="/oplossingen" class="btn btn-ghost">Bekijk oplossingen</a> </div> </div> <div data-reveal data-reveal-delay="2"> ${renderComponent($$result2, "DirkVraagtPanel", $$DirkVraagtPanel, {})} </div> </div> </div> </section> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "variant": "curve", "from": "var(--color-paper-2)", "to": "var(--color-paper)" })}  <section class="section-y bg-paper"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="flex justify-between items-end flex-wrap gap-4 mb-10" data-reveal> <div> <span class="eyebrow">Standaardproducten</span> <h2 class="display-2 mt-3">Vaste prijs.<br>Vaste oplossing.</h2> </div> <a href="/oplossingen" class="btn btn-ghost">Alle 10 oplossingen <span class="arrow">→</span></a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${featured.map((p, i) => renderTemplate`<div data-reveal${addAttribute(i % 3 + 1, "data-reveal-delay")}> ${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": p, "href": p.slug === "arbeidscontract" ? "/product" : "#" })} </div>`)} </div> </div> </section>  <section class="section-y bg-paper"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="relative bg-aubergine text-white rounded-jumbo p-8 md:p-14 grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-center overflow-hidden" data-reveal> <div class="absolute -top-32 -right-28 w-96 h-96 pointer-events-none rounded-full opacity-30" style="background: radial-gradient(circle, var(--color-magenta) 0%, transparent 70%);"></div> <div class="relative z-10"> <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-magenta-soft mb-3 before:content-[''] before:w-6 before:h-0.5 before:bg-magenta-soft">Het abonnement</span> <h2 class="text-white display-2 mt-3 mb-4">Eén vaste jurist.<br>De hele werkweek bereikbaar.</h2> <p class="text-white/85 text-lg max-w-[50ch] leading-relaxed">
Het Klarijn-abonnement is wat de huisarts is voor je gezondheid: één aanspreekpunt, zonder dat je voor elke vraag een dossier opent. Bel, app of mail. Wij regelen het of duiden het.
</p> <div class="flex gap-3 flex-wrap mt-6"> <a href="/abonnement" class="btn btn-primary">Lees meer over het abonnement <span class="arrow">→</span></a> <a href="/contact" class="btn btn-ghost-light">Bel mij terug</a> </div> </div> <div class="relative z-10 bg-white text-ink rounded-card p-7"> <small class="text-xs font-semibold uppercase tracking-[.12em] text-ink-soft">Klarijn Mkb-abonnement</small> <strong class="block font-display text-5xl text-aubergine mt-2 leading-none">€ 145<span class="text-base font-sans font-normal text-ink-soft">/mnd</span></strong> <ul class="list-none p-0 my-4 space-y-2.5"> ${["Onbeperkt korte juridische vragen", "Vaste jurist uit jouw rayon", "30% korting op standaardproducten", "Maandelijks opzegbaar"].map((li) => renderTemplate`<li class="flex items-start gap-2.5 pb-2.5 border-b border-ink/10 last:border-0 text-sm"> <span class="mt-0.5 w-5 h-5 rounded-full bg-magenta shrink-0 grid place-items-center"> <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> </span> ${li} </li>`)} </ul> <a href="/abonnement" class="btn btn-purple w-full justify-center">Probeer een maand <span class="arrow">→</span></a> </div> </div> </div> </section> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "variant": "wave", "from": "var(--color-paper)", "to": "var(--color-paper-2)" })}  <section class="py-14 md:py-20 bg-paper-2"> <div class="max-w-[1240px] mx-auto px-4 md:px-8" data-reveal> <div class="grid sm:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-center bg-white p-7 md:p-12 rounded-jumbo shadow-sm"> <div class="relative"> <div class="photo-blob aspect-square shrink-0 max-sm:w-44 max-sm:mx-auto"> <img src="/img/stock/p3.jpg" alt="Portret Dirk-Jan van der Velde" loading="lazy" class="w-full h-full object-cover"> </div> <!-- Mini "moment" thumbnail: handshake — context van het gesprek met Klarijn --> <div class="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg"> <img src="/img/stock/scene-handshake.jpg" alt="" aria-hidden="true" loading="lazy" class="w-full h-full object-cover"> </div> </div> <div> <blockquote class="m-0 text-2xl md:text-3xl font-semibold leading-snug text-ink relative pl-12 max-sm:text-center max-sm:pl-0"> <span class="absolute left-0 -top-3 font-display text-8xl text-magenta leading-none max-sm:hidden">"</span>
Ik bel Klarijn als ik twijfel. Geen "even afspraak inplannen", geen dossiernummer. Gewoon antwoord. Voor mij scheelt dat een hoop tijd én onrust.
</blockquote> <cite class="block not-italic text-sm text-ink-soft mt-6 pl-12 max-sm:pl-0 max-sm:text-center"> <strong class="block text-ink font-bold text-base">Dirk-Jan van der Velde</strong>
Eigenaar Bouwbedrijf Van der Velde · Apeldoorn
</cite> </div> </div> </div> </section> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "variant": "curve-down", "from": "var(--color-paper-2)", "to": "var(--color-paper)" })}  <section class="section-y bg-paper"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="relative text-white rounded-jumbo p-8 md:p-14 grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-center overflow-hidden" style="background-color: #14080F;" data-reveal> <div class="relative z-10"> <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-magenta mb-3 before:content-[''] before:w-6 before:h-0.5 before:bg-magenta">Voor juristen - Franchise</span> <h2 class="text-white display-2 mt-3 mb-4">Een eigen praktijk.<br>Met een sterke ploeg achter je.</h2> <p class="text-white/85 text-lg max-w-[55ch] leading-relaxed">
In 2026 rolt Klarijn de franchiseformule landelijk uit. Voor juristen die ondernemend zijn, met de voeten in de klei willen staan, en samen sterk willen werken - met een backoffice die marketing, automatisering en specialisme regelt.
</p> <div class="flex gap-3 flex-wrap mt-6"> <a href="/franchise" class="btn btn-primary">Ontdek de franchise <span class="arrow">→</span></a> <a href="/franchise/beslisboom" class="btn btn-ghost-light">Doe de match-test</a> </div> </div> <!-- Compact rayon mini-card: clean typography ipv abstracte map --> <div class="relative z-10 bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-card p-5 md:p-6 max-w-[340px] mx-auto"> <div class="flex items-baseline justify-between mb-3"> <span class="font-display text-xl text-white leading-none">Rayons</span> <span class="text-[.62rem] font-bold uppercase tracking-[.18em] text-magenta">Landelijke dekking</span> </div> <div class="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm"> <span class="inline-flex items-center gap-2 text-magenta font-semibold"> <span class="relative flex w-1.5 h-1.5"> <span class="animate-ping absolute inset-0 rounded-full bg-magenta opacity-70"></span> <span class="relative w-1.5 h-1.5 rounded-full bg-magenta"></span> </span>
Zwolle <span class="text-white/50 text-xs">· pilot</span> </span> ${["Rotterdam", "Eindhoven", "Amsterdam", "Groningen", "Maastricht", "Breda", "Utrecht"].map((c) => renderTemplate`<span class="text-white/85">${c}</span>`)} <span class="text-white/55">+ 6 anderen</span> </div> </div> </div> </div> </section>  <section class="section-y bg-paper"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="bg-paper-2 rounded-card p-7 md:p-8 flex flex-wrap justify-between items-center gap-6" data-reveal> <div> <span class="eyebrow">Klant bij Klarijn?</span> <h3 class="text-2xl font-semibold text-aubergine mt-1 mb-1">Bekijk de voortgang van je dossier</h3> <p class="text-ink-soft m-0">Direct naar het klantportaal - beheerd door Klarijn.</p> </div> <a href="/mijn-voortgang" class="btn btn-purple">Mijn Voortgang <span class="arrow">→</span></a> </div> </div> </section> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_a || (_a = __template([' <link rel="preload" as="image" href="/img/eibert.webp" fetchpriority="high"> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(ldOrg)), unescapeHTML(JSON.stringify(ldFaq))) })}` })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/home.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/home.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

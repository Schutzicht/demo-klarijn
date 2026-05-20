import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { h as addAttribute, r as renderTemplate, m as maybeRenderHead, l as renderComponent, n as Fragment, p as renderSlot, o as renderHead } from './entrypoint_Dgli_rsY.mjs';
import { r as renderScript } from './script_Cdv6jpD9.mjs';
/* empty css                 */
import 'clsx';

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/node_modules/astro/components/ClientRouter.astro", void 0);

const $$BrandLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BrandLogo;
  const {
    href = "/",
    theme = "light",
    class: cls = "",
    bubbleClass = "w-14 h-auto shrink-0",
    showTag = true
  } = Astro2.props;
  const wordmarkColor = theme === "dark" ? "text-white" : "text-aubergine";
  const tagColor = theme === "dark" ? "text-white/75" : "text-ink-soft";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(["inline-flex items-center gap-3 no-underline group", cls], "class:list")} aria-label="Klarijn - naar home"> <img src="/img/vraag-het-bubble.webp" alt="" aria-hidden="true" loading="eager"${addAttribute([bubbleClass, "transition-transform duration-300 group-hover:rotate-[-6deg]"], "class:list")}> <span class="leading-none"> <span${addAttribute(["block font-display text-2xl md:text-3xl uppercase tracking-wide", wordmarkColor], "class:list")}>Klarijn</span> ${showTag && renderTemplate`<span${addAttribute(["hidden sm:block text-[.6rem] md:text-[.62rem] font-semibold uppercase tracking-[0.14em] mt-1", tagColor], "class:list")}>
Helderheid in juridische oplossingen
</span>`} </span> </a>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/BrandLogo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { active = "", variant = "klant" } = Astro2.props;
  const klantNav = [
    { label: "Werkwijze", href: "/werkwijze" },
    { label: "Oplossingen", href: "/oplossingen" },
    { label: "Abonnement", href: "/abonnement" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" }
  ];
  const franchiseNav = [
    { label: "De aanpak", href: "/franchise/aanpak" },
    { label: "Vergoedingen", href: "/franchise/vergoedingen" },
    { label: "Match-test", href: "/franchise/beslisboom" },
    { label: "Contact", href: "/franchise/contact" }
  ];
  const items = variant === "franchise" ? franchiseNav : klantNav;
  const otherSideHref = variant === "franchise" ? "/home" : "/franchise";
  const otherSideLabel = variant === "franchise" ? "← Klant-website" : "Voor juristen";
  const homeHref = variant === "franchise" ? "/franchise" : "/home";
  const isFranchise = variant === "franchise";
  const bgClass = isFranchise ? "group-data-[scrolled]/hdr:bg-[rgba(20,12,18,0.85)] group-data-[scrolled]/hdr:border-white/10 group-data-[scrolled]/hdr:shadow-[0_4px_24px_rgba(0,0,0,0.3)]" : "group-data-[scrolled]/hdr:bg-[rgba(250,246,242,0.85)] group-data-[scrolled]/hdr:border-ink/10 group-data-[scrolled]/hdr:shadow-[0_4px_24px_rgba(94,31,92,0.05)]";
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 group/hdr" data-header${addAttribute(variant, "data-variant")}> <!-- Translucent background - invisible at top, glass-blur on scroll --> <div${addAttribute([
    "absolute inset-0 -z-10 transition-all duration-300",
    "group-data-[scrolled]/hdr:backdrop-blur-xl group-data-[scrolled]/hdr:backdrop-saturate-150 group-data-[scrolled]/hdr:border-b",
    bgClass
  ], "class:list")} aria-hidden="true"></div> <div class="max-w-[1240px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4 lg:gap-6 transition-[height] duration-300 h-[88px] group-data-[scrolled]/hdr:h-[68px]"> ${renderComponent($$result, "BrandLogo", $$BrandLogo, { "href": homeHref, "theme": isFranchise ? "dark" : "light", "bubbleClass": "w-12 md:w-14 lg:w-[58px] h-auto shrink-0 transition-[width] duration-300 group-data-[scrolled]/hdr:w-10 md:group-data-[scrolled]/hdr:w-12" })} <button type="button"${addAttribute([
    "lg:hidden border rounded-full px-4 py-2 text-xs font-semibold cursor-pointer transition-all",
    isFranchise ? "bg-white/8 hover:bg-white hover:text-aubergine border-white/25 text-white" : "bg-aubergine/8 hover:bg-aubergine hover:text-white border-aubergine/15 text-aubergine"
  ], "class:list")} data-menu-toggle aria-expanded="false" aria-controls="primary-nav">Menu</button> <nav id="primary-nav"${addAttribute([
    "hidden lg:flex items-center gap-1 [&[data-open]]:flex",
    "max-lg:[&[data-open]]:absolute max-lg:[&[data-open]]:top-full max-lg:[&[data-open]]:left-0 max-lg:[&[data-open]]:right-0",
    "max-lg:[&[data-open]]:flex-col max-lg:[&[data-open]]:items-stretch max-lg:[&[data-open]]:p-4 max-lg:[&[data-open]]:gap-1 max-lg:[&[data-open]]:shadow-lg",
    isFranchise ? "max-lg:[&[data-open]]:bg-aubergine max-lg:[&[data-open]]:border-t max-lg:[&[data-open]]:border-b max-lg:[&[data-open]]:border-white/10" : "max-lg:[&[data-open]]:bg-paper max-lg:[&[data-open]]:border-t max-lg:[&[data-open]]:border-b max-lg:[&[data-open]]:border-ink/10"
  ], "class:list")} aria-label="Hoofdnavigatie"> ${items.map((item) => {
    const isActive = active === item.label;
    if (isFranchise) {
      return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
        "no-underline text-sm font-medium px-3.5 py-2 rounded-full transition-colors",
        isActive ? "bg-white/15 text-white" : "text-white/85 hover:text-white hover:bg-white/8"
      ], "class:list")}>${item.label}</a>`;
    }
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
      "no-underline text-sm font-medium px-3.5 py-2 rounded-full transition-colors",
      isActive ? "bg-aubergine/10 text-aubergine" : "text-ink hover:text-magenta hover:bg-aubergine/5"
    ], "class:list")}>${item.label}</a>`;
  })} <span${addAttribute(["hidden lg:inline-block w-px h-5 mx-1", isFranchise ? "bg-white/20" : "bg-ink/15"], "class:list")} aria-hidden="true"></span> <a${addAttribute(otherSideHref, "href")}${addAttribute([
    "no-underline text-xs font-semibold rounded-full px-4 py-2 border whitespace-nowrap transition-all",
    isFranchise ? "text-white border-white/30 hover:bg-magenta hover:text-white hover:border-magenta" : "text-ink border-aubergine/20 hover:bg-aubergine hover:text-white hover:border-aubergine"
  ], "class:list")}> ${variant === "klant" ? renderTemplate`<span aria-hidden="true">→ </span>` : ""}${otherSideLabel} </a> </nav> </div> </header> ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { variant = "klant" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-aubergine text-white/85 pt-16 md:pt-20 pb-6 mt-0"> <div class="max-w-[1240px] mx-auto px-4 md:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"> <div> ${renderComponent($$result, "BrandLogo", $$BrandLogo, { "href": variant === "franchise" ? "/franchise" : "/", "theme": "dark" })} <p class="text-white/70 text-sm max-w-[30ch] mt-4"> ${variant === "franchise" ? "Franchise voor juristen die willen ondernemen." : "Helderheid in juridische oplossingen. Voor mkb, familiebedrijven en de maakindustrie."} </p> </div> ${variant === "klant" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div> <h4 class="text-white font-semibold text-base mb-4">Snel naar</h4> <ul class="list-none p-0 m-0 space-y-2"> <li><a href="/home" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Home</a></li> <li><a href="/werkwijze" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Onze werkwijze</a></li> <li><a href="/oplossingen" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Onze oplossingen</a></li> <li><a href="/abonnement" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Het abonnement</a></li> <li><a href="/contact" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Contact</a></li> </ul> </div> <div> <h4 class="text-white font-semibold text-base mb-4">Klarijn</h4> <ul class="list-none p-0 m-0 space-y-2"> <li><a href="/over-ons" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Over ons</a></li> <li><a href="/kantoor-zwolle" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Onze kantoren</a></li> <li><a href="/franchise" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Franchise (voor juristen)</a></li> <li><a href="/mijn-voortgang" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Mijn Voortgang →</a></li> </ul> </div> <div> <h4 class="text-white font-semibold text-base mb-4">Contact</h4> <ul class="list-none p-0 m-0 space-y-2"> <li><a href="tel:0651180138" class="text-white/80 hover:text-magenta-soft no-underline text-sm">06 – 51 18 01 38</a></li> <li><a href="tel:0610903140" class="text-white/80 hover:text-magenta-soft no-underline text-sm">06 – 10 90 31 40</a></li> <li><a href="mailto:vraaghet@klarijn.nl" class="text-white/80 hover:text-magenta-soft no-underline text-sm">vraaghet@klarijn.nl</a></li> <li><a href="mailto:eibert@klarijn.nl" class="text-white/80 hover:text-magenta-soft no-underline text-sm">eibert@klarijn.nl</a></li> <li><a href="mailto:william@klarijn.nl" class="text-white/80 hover:text-magenta-soft no-underline text-sm">william@klarijn.nl</a></li> </ul> </div> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div> <h4 class="text-white font-semibold text-base mb-4">Franchise</h4> <ul class="list-none p-0 m-0 space-y-2"> <li><a href="/franchise" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Overzicht</a></li> <li><a href="/franchise/aanpak" class="text-white/80 hover:text-magenta-soft no-underline text-sm">De aanpak</a></li> <li><a href="/franchise/vergoedingen" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Vergoedingen</a></li> <li><a href="/franchise/beslisboom" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Match-test</a></li> </ul> </div> <div> <h4 class="text-white font-semibold text-base mb-4">Contact</h4> <ul class="list-none p-0 m-0 space-y-2"> <li><a href="/franchise/contact" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Word franchisenemer</a></li> <li><a href="tel:0651180138" class="text-white/80 hover:text-magenta-soft no-underline text-sm">06 – 51 18 01 38</a></li> <li><a href="mailto:franchise@klarijn.nl" class="text-white/80 hover:text-magenta-soft no-underline text-sm">franchise@klarijn.nl</a></li> </ul> </div> <div> <h4 class="text-white font-semibold text-base mb-4">Klarijn</h4> <ul class="list-none p-0 m-0 space-y-2"> <li><a href="/home" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Klant-website</a></li> <li><a href="/over-ons" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Over ons</a></li> <li><a href="/werkwijze" class="text-white/80 hover:text-magenta-soft no-underline text-sm">Werkwijze</a></li> </ul> </div> ` })}`} </div> <div class="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60"> <span>© 2026 Klarijn${variant === "franchise" ? " Franchise B.V." : " · KvK 12345678"}</span> <span> <a href="#" class="text-white/60 hover:text-white no-underline">Algemene voorwaarden</a>
·
<a href="#" class="text-white/60 hover:text-white no-underline">Privacyverklaring</a> </span> </div> </div> </footer>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/Footer.astro", void 0);

const $$BasketFab = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/mandje" class="basket-fab fixed right-4 md:right-8 bottom-4 md:bottom-8 z-[60] inline-flex items-center gap-2.5 bg-magenta text-white border-0 px-4 sm:px-5 py-3.5 rounded-full font-semibold text-sm cursor-pointer no-underline transition-all duration-300 hover:-translate-y-0.5 hover:text-white opacity-0 translate-y-3 pointer-events-none data-[active]:opacity-100 data-[active]:translate-y-0 data-[active]:pointer-events-auto" style="box-shadow: 0 12px 30px rgba(224, 39, 122, 0.35);" aria-label="Mijn lijst openen" data-basket-fab> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M3 6h2l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-9H6"></path> <circle cx="9" cy="20" r="1.5"></circle> <circle cx="17" cy="20" r="1.5"></circle> </svg> <span class="hidden sm:inline">Mijn lijst</span> <span class="bg-white text-magenta w-7 h-7 rounded-full grid place-items-center text-sm font-bold leading-none" data-basket-count data-count="0">0</span> </a>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/BasketFab.astro", void 0);

const $$VraagHetCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="button" class="vraaghet-fab fixed left-4 md:left-8 bottom-4 md:bottom-8 z-[60] border-0 cursor-pointer bg-transparent p-0 group" data-vraaghet-open aria-label="Vraag het Klarijn"> <span class="relative inline-block transition-transform duration-300 group-hover:-translate-y-1"> <!-- Eibert avatar - alleen het hoofd (zit bovenin de afbeelding) --> <span class="block w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-[3px] border-white shadow-[0_8px_24px_rgba(94,31,92,0.35)]"> <img src="/img/eibert.webp" alt="" aria-hidden="true" class="w-full h-full object-cover object-top scale-[1.6] origin-top"> </span> <!-- Speech bubble - hoog boven Eibert, recht in rust, draait bij hover --> <img src="/img/vraag-het-bubble.webp" alt="" aria-hidden="true" class="absolute -top-12 -right-6 md:-top-14 md:-right-7 w-12 md:w-14 h-auto rotate-0 transition-transform duration-300 group-hover:rotate-[14deg] drop-shadow-[0_8px_20px_rgba(224,39,122,0.5)]"> </span> </button> <div class="modal-backdrop" data-vraaghet-modal role="dialog" aria-modal="true" aria-labelledby="vh-title"> <div class="modal-panel" data-modal-panel> <button type="button" class="absolute right-4 top-4 w-9 h-9 rounded-full bg-paper-2 hover:bg-magenta hover:text-white grid place-items-center text-xl cursor-pointer border-0 transition-all" data-vraaghet-close aria-label="Sluiten">×</button> <div class="flex items-start gap-5 mb-5"> <span class="relative shrink-0 mt-2"> <span class="block w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[3px] border-white shadow-[0_4px_14px_rgba(94,31,92,0.2)]"> <img src="/img/eibert.webp" alt="" aria-hidden="true" class="w-full h-full object-cover object-top scale-[1.6] origin-top"> </span> <img src="/img/vraag-het-bubble.webp" alt="" aria-hidden="true" class="absolute -top-10 -right-7 md:-top-12 md:-right-8 w-14 md:w-16 h-auto rotate-0"> </span> <div> <h2 id="vh-title" class="font-display text-2xl md:text-3xl text-aubergine mt-1 mb-1 leading-tight">Vraag het Eibert.</h2> <p class="text-ink-soft text-sm m-0">Antwoord binnen 1 werkdag, vaak sneller.</p> </div> </div> <form class="grid gap-3.5" data-vraaghet-form> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <label class="form-label">Naam<input class="form-input" required name="naam"></label> <label class="form-label">Bedrijf<input class="form-input" name="bedrijf"></label> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <label class="form-label">E-mail<input class="form-input" required type="email" name="email"></label> <label class="form-label">Telefoon<input class="form-input" type="tel" name="telefoon"></label> </div> <label class="form-label">Je vraag<textarea class="form-input min-h-28 resize-y" required name="vraag" placeholder="Wat is er aan de hand? In 2-3 zinnen is genoeg." data-vraaghet-textarea></textarea></label> <button type="submit" class="btn btn-primary w-full justify-center">Verstuur <span class="arrow">→</span></button> <p class="text-center text-xs text-ink-soft m-0">Bij voorkeur antwoord per:
<label class="inline-flex items-center gap-1 ml-2"><input type="radio" name="contact_via" value="bel" checked class="accent-magenta"> bellen</label> <label class="inline-flex items-center gap-1 ml-3"><input type="radio" name="contact_via" value="mail" class="accent-magenta"> mailen</label> </p> </form> </div> </div> ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/VraagHetCTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/VraagHetCTA.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Helderheid in juridische oplossingen. Voor mkb, familiebedrijven en de maakindustrie.",
    variant = "klant",
    active = "",
    showBasket = true,
    showVraagHet = true,
    hideHeader = false
  } = Astro2.props;
  const isFranchise = variant === "franchise";
  const themeColor = isFranchise ? "#14080F" : "#5E1F5C";
  return renderTemplate`<html lang="nl"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="theme-color"${addAttribute(themeColor, "content")}><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 110'%3E%3Cpath d='M50 5C24 5 5 24 5 47c0 20 14 37 34 43L32 105 56 90c24-2 39-20 39-43C95 24 76 5 50 5z' fill='%23E0277A'/%3E%3C/svg%3E"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Async font load: media=print swap to all on load - non-render-blocking --><link href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></noscript>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body${addAttribute([isFranchise && "is-franchise"], "class:list")}> ${isFranchise && renderTemplate`<div class="bg-aubergine-deep text-white/90 text-center px-4 py-2.5 text-xs font-medium">
Klarijn Franchise · <a href="/home" class="text-gold underline underline-offset-4 hover:text-white">→ Terug naar de klant-website</a> </div>`} ${!hideHeader && renderTemplate`${renderComponent($$result, "Header", $$Header, { "active": active, "variant": variant })}`} <main id="main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "variant": variant })} ${showBasket && !isFranchise && renderTemplate`${renderComponent($$result, "BasketFab", $$BasketFab, {})}`} ${showVraagHet && renderTemplate`${renderComponent($$result, "VraagHetCTA", $$VraagHetCTA, {})}`} <!-- Global scripts: scroll reveal + basket --> ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

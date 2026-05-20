import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { m as maybeRenderHead, o as renderHead, r as renderTemplate } from './entrypoint_Dgli_rsY.mjs';
import 'clsx';
/* empty css                 */

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="nl"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Demo - Klarijn voorstel</title><meta name="description" content="Een demonstratie van een mogelijke nieuwe Klarijn-website."><meta name="theme-color" content="#5E1F5C"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 110'%3E%3Cpath d='M50 5C24 5 5 24 5 47c0 20 14 37 34 43L32 105 56 90c24-2 39-20 39-43C95 24 76 5 50 5z' fill='%23E0277A'/%3E%3C/svg%3E"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></noscript>${renderHead()}</head> <body class="min-h-screen bg-paper text-ink overflow-x-hidden"> <!-- Sfeer-blobs (klant-stijl) --> <div class="fixed -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-25 pointer-events-none blur-3xl" style="background: radial-gradient(circle, var(--color-magenta-soft) 0%, transparent 70%);" aria-hidden="true"></div> <div class="fixed top-1/3 -left-72 w-[640px] h-[640px] rounded-full opacity-15 pointer-events-none blur-3xl" style="background: radial-gradient(circle, var(--color-aubergine-soft) 0%, transparent 70%);" aria-hidden="true"></div> <main class="relative z-10 min-h-screen flex items-center justify-center px-4 py-12 md:py-16"> <div class="max-w-[760px] w-full text-center"> <!-- Demo-badge --> <div class="inline-flex items-center gap-2 bg-magenta/10 border border-magenta/25 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-magenta mb-8"> <span class="w-1.5 h-1.5 rounded-full bg-magenta animate-pulse"></span>
Demo voorstel
</div> <h1 class="font-display uppercase leading-[0.95] tracking-tight font-normal text-balance text-aubergine mb-6" style="font-size: clamp(2.4rem, 7vw, 5.5rem);">
Je gaat zo<br> <span class="brush">een demo</span> bekijken.
</h1> <p class="text-lg md:text-xl text-ink-soft max-w-[58ch] mx-auto leading-relaxed mb-4">
Dit is een werkende demonstratie van een mogelijke nieuwe Klarijn-website. Klikbaar, scrollbaar, mobiel-getest, op een echte URL.
</p> <p class="text-base md:text-lg text-ink-soft/85 max-w-[58ch] mx-auto leading-relaxed mb-10">
Wat hier staat is geen definitief voorstel: alle teksten, foto's, prijzen en functionaliteiten zijn voorbeelden om de richting, structuur en sfeer te laten zien. Tijdens een uitwerking vullen we dit samen verder in.
</p> <!-- Wat je gaat zien --> <div class="grid sm:grid-cols-3 gap-3 max-w-[680px] mx-auto mb-12 text-left"> <div class="bg-white border border-ink/8 rounded-card p-5 shadow-sm"> <div class="w-9 h-9 rounded-full bg-magenta/10 text-magenta grid place-items-center mb-3"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> </div> <h3 class="text-sm font-bold text-ink mb-1">Klant-website</h3> <p class="text-xs text-ink-soft m-0 leading-relaxed">15 paginas, abonnement, productcatalogus en offerte-mandje.</p> </div> <div class="bg-white border border-ink/8 rounded-card p-5 shadow-sm"> <div class="w-9 h-9 rounded-full bg-magenta/10 text-magenta grid place-items-center mb-3"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> </div> <h3 class="text-sm font-bold text-ink mb-1">Franchise-zijde</h3> <p class="text-xs text-ink-soft m-0 leading-relaxed">Aparte donkere variant met match-test en eigen routes.</p> </div> <div class="bg-white border border-ink/8 rounded-card p-5 shadow-sm"> <div class="w-9 h-9 rounded-full bg-magenta/10 text-magenta grid place-items-center mb-3"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> </div> <h3 class="text-sm font-bold text-ink mb-1">Vraag het Klarijn</h3> <p class="text-xs text-ink-soft m-0 leading-relaxed">Het rode draadje door de hele site, in elke sectie zichtbaar.</p> </div> </div> <!-- CTAs --> <div class="flex gap-3 flex-wrap justify-center items-center"> <a href="/home" class="btn btn-primary text-base">Start de demo <span class="arrow">→</span></a> <a href="/franchise" class="btn btn-ghost text-base">Direct naar franchise-zijde</a> </div> <p class="text-xs text-ink-soft/70 mt-10 max-w-[48ch] mx-auto leading-relaxed">
Demo is responsive, AVG-proof en zonder tracking. Geen formulieren of betalingen zijn live.
</p> </div> </main> </body></html>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/index.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

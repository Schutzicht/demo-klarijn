import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, n as Fragment, u as unescapeHTML } from './entrypoint_Dgli_rsY.mjs';
import 'clsx';

const $$Stamp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Stamp;
  const { text, variant = "magenta", rotate = -8, class: cls = "" } = Astro2.props;
  const variantClass = variant === "gold" ? "stamp--gold" : variant === "purple" ? "stamp--purple" : "";
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["stamp", variantClass, cls], "class:list")}${addAttribute(`transform: rotate(${rotate}deg);`, "style")}>${text}</span>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/Stamp.astro", void 0);

const $$PageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageHero;
  const { title, lead, crumbs = [], eyebrow, stamps = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-aubergine text-white relative overflow-hidden"> <div class="ambient-blob absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none blur-2xl" style="background: radial-gradient(circle, rgba(224,39,122,.32) 0%, transparent 70%);"></div> <div class="ambient-blob absolute -top-32 -left-20 w-96 h-96 rounded-full pointer-events-none blur-3xl" style="background: radial-gradient(circle, rgba(232,180,71,.15) 0%, transparent 70%);"></div> <!-- Decorative speech bubble in corner --> <img src="/img/vraag-het-bubble.webp" alt="" aria-hidden="true" class="absolute right-8 top-8 w-20 md:w-24 h-auto opacity-25 hidden md:block rotate-12"> ${stamps.length > 0 && stamps.map((s, i) => renderTemplate`<div${addAttribute(`absolute z-20 hidden lg:block ${i === 0 ? "top-12 right-[8%]" : i === 1 ? "bottom-16 right-[20%]" : "bottom-12 left-[40%]"}`, "class")}> ${renderComponent($$result, "Stamp", $$Stamp, { "text": s.text, "rotate": s.rotate ?? -8, "variant": s.variant ?? "magenta" })} </div>`)} <div class="max-w-[1240px] mx-auto px-4 md:px-8 py-14 md:py-24 relative z-10"> ${crumbs.length > 0 && renderTemplate`<nav class="text-xs font-medium text-white/70 mb-8 md:mb-10" aria-label="Kruimelpad"> ${crumbs.map((c, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${c.href ? renderTemplate`<a${addAttribute(c.href, "href")} class="text-white/70 hover:text-white no-underline">${c.label}</a>` : renderTemplate`<span class="text-white">${c.label}</span>`}${i < crumbs.length - 1 && renderTemplate`<span class="mx-2 opacity-60">/</span>`}` })}`)} </nav>`} ${eyebrow && renderTemplate`<span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-magenta-soft mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-magenta-soft">${eyebrow}</span>`} <h1 class="text-white display-1 mb-5 text-balance" data-reveal>${unescapeHTML(title)}</h1> ${lead && renderTemplate`<p class="text-white/85 text-lg md:text-xl max-w-[56ch] leading-relaxed" data-reveal data-reveal-delay="1">${lead}</p>`} </div> </section>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/PageHero.astro", void 0);

export { $$PageHero as $, $$Stamp as a };

import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_Dgli_rsY.mjs';
import 'clsx';
import { r as renderScript } from './script_Cdv6jpD9.mjs';
import { c as getFranchiseVragen, d as getKlantVragen, k as klarijnAnswerer } from './content_DZ4RoU1h.mjs';

const $$DirkVraagtPanel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DirkVraagtPanel;
  const { variant = "klant" } = Astro2.props;
  const items = variant === "franchise" ? await getFranchiseVragen() : await getKlantVragen();
  const data = JSON.stringify(items);
  const klarijnImg = klarijnAnswerer.img;
  return renderTemplate`${maybeRenderHead()}<article class="relative bg-white rounded-jumbo p-6 md:p-9 shadow-2xl overflow-hidden" data-dv-panel${addAttribute(data, "data-dv-data")}${addAttribute(klarijnImg, "data-dv-klarijn-img")}> <span class="absolute top-0 right-0 w-1.5 h-full bg-magenta" aria-hidden="true"></span> <!-- Vraag-rij: asker rechts uitgelijnd (chat-stijl) --> <div class="flex items-start justify-end gap-3 md:gap-3.5 mb-5"> <div class="flex-1 max-w-[85%] flex flex-col items-end min-w-0"> <div class="text-xs font-semibold uppercase tracking-wider text-ink-soft mb-1.5 text-right" data-dv-name>-</div> <div class="bg-paper-2 px-5 py-4 rounded-tr-md rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"> <p class="font-sans font-semibold text-aubergine leading-snug text-base md:text-lg m-0 min-h-[2.5em]" data-dv-q></p> </div> </div> <span class="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-[3px] border-white shrink-0 shadow-md"> <img alt="" aria-hidden="true" class="w-full h-full object-cover" data-dv-asker-img> </span> </div> <!-- Antwoord-rij: Klarijn links uitgelijnd --> <div class="flex items-start gap-3 md:gap-3.5 mb-6"> <span class="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-[3px] border-white shrink-0 shadow-md ring-2 ring-magenta/30"> <img${addAttribute(klarijnImg, "src")} alt="Klarijn antwoordt" aria-hidden="true" class="w-full h-full object-cover object-top scale-[1.6] origin-top"> </span> <div class="flex-1 max-w-[85%] min-w-0"> <div class="text-xs font-bold uppercase tracking-wider text-magenta mb-1.5">Klarijn antwoordt</div> <div class="bg-aubergine text-white px-5 py-4 rounded-tl-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"> <p class="leading-relaxed text-sm md:text-base m-0" data-dv-a></p> </div> </div> </div> <footer class="flex items-center justify-between gap-4"> <div class="flex gap-1.5" data-dv-dots></div> <div class="flex gap-1.5"> <button class="w-9 h-9 rounded-full bg-paper text-aubergine border-[1.5px] border-ink/10 cursor-pointer grid place-items-center text-xl hover:bg-magenta hover:text-white hover:border-magenta transition-all" data-dv-prev aria-label="Vorige">‹</button> <button class="w-9 h-9 rounded-full bg-paper text-aubergine border-[1.5px] border-ink/10 cursor-pointer grid place-items-center text-xl hover:bg-magenta hover:text-white hover:border-magenta transition-all" data-dv-next aria-label="Volgende">›</button> </div> </footer> </article> ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/DirkVraagtPanel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/DirkVraagtPanel.astro", void 0);

const $$AnimatedNumber = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AnimatedNumber;
  const { value, prefix = "", suffix = "", duration = 1400, class: cls = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["inline-block tabular-nums", cls], "class:list")} data-counter${addAttribute(value, "data-target")}${addAttribute(duration, "data-duration")}${addAttribute(prefix, "data-prefix")}${addAttribute(suffix, "data-suffix")}> ${prefix}0${suffix} </span> ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/AnimatedNumber.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/AnimatedNumber.astro", void 0);

export { $$AnimatedNumber as $, $$DirkVraagtPanel as a };

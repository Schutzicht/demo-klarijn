import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_Dgli_rsY.mjs';
import 'clsx';

const $$SectionDivider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SectionDivider;
  const { from = "transparent", to = "transparent", variant = "curve" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="block leading-none -mb-px"${addAttribute(`background: ${from};`, "style")}> ${variant === "wave" && renderTemplate`<svg viewBox="0 0 1440 80" preserveAspectRatio="none" class="block w-full h-12 md:h-20" aria-hidden="true"> <path${addAttribute(`M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z`, "d")}${addAttribute(to, "fill")}></path> </svg>`} ${variant === "curve" && renderTemplate`<svg viewBox="0 0 1440 100" preserveAspectRatio="none" class="block w-full h-10 md:h-16" aria-hidden="true"> <path d="M0,0 Q720,120 1440,0 L1440,100 L0,100 Z"${addAttribute(to, "fill")}></path> </svg>`} ${variant === "curve-down" && renderTemplate`<svg viewBox="0 0 1440 100" preserveAspectRatio="none" class="block w-full h-10 md:h-16" aria-hidden="true"> <path d="M0,100 Q720,-20 1440,100 L1440,100 L0,100 Z"${addAttribute(to, "fill")}></path> </svg>`} </div>`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/SectionDivider.astro", void 0);

export { $$SectionDivider as $ };

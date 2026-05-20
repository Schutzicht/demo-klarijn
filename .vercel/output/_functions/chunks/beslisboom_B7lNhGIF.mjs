import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent, n as Fragment } from './entrypoint_Dgli_rsY.mjs';
import { $ as $$Layout } from './Layout_B3OnaIBi.mjs';
import { $ as $$PageHero } from './PageHero_DyUF12K1.mjs';
import 'clsx';
import { r as renderScript } from './script_Cdv6jpD9.mjs';
import { g as getDecisionQuestions, m as matchThreshold } from './content_DZ4RoU1h.mjs';

const $$DecisionTree = createComponent(async ($$result, $$props, $$slots) => {
  const questions = await getDecisionQuestions();
  const data = JSON.stringify({ questions, matchThreshold });
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-jumbo p-6 md:p-10 shadow-2xl relative" data-tree${addAttribute(data, "data-tree-data")}> <div class="flex gap-1 mb-7" data-tree-progress></div> <div data-tree-body></div> </div> ${renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/DecisionTree.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/components/DecisionTree.astro", void 0);

const $$Beslisboom = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Match-test - Klarijn Franchise", "description": "In 10 vragen weten of het Klarijn-franchisemodel bij jou past.", "variant": "franchise", "active": "Match-test" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "Past Klarijn bij jou?", "lead": "10 vragen, 3 minuten. Aan het eind weet je - en wij ook - of het zinvol is om verder te praten.", "crumbs": [{ label: "Franchise", href: "/franchise" }, { label: "Match-test" }] })} ${maybeRenderHead()}<section class="section-y"> <div class="max-w-[780px] mx-auto px-4 md:px-8"> ${renderComponent($$result2, "DecisionTree", $$DecisionTree, {})} <p class="text-center mt-8 text-xs font-semibold tracking-wider text-ink-soft">
Geen gegevens worden bewaard. We slaan pas iets op als je daadwerkelijk je gegevens invult na een match.
</p> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <meta name="robots" content="noindex"> ` })}` })}`;
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/franchise/beslisboom.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/franchise/beslisboom.astro";
const $$url = "/franchise/beslisboom";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Beslisboom,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

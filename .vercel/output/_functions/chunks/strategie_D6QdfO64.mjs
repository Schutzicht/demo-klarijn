import { c as createComponent } from './astro-component_D9APovc3.mjs';
import 'piccolore';
import { r as renderTemplate, u as unescapeHTML, o as renderHead } from './entrypoint_Dgli_rsY.mjs';
import 'clsx';
import { r as renderScript } from './script_Cdv6jpD9.mjs';
/* empty css                 */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Strategie = createComponent(async ($$result, $$props, $$slots) => {
  const seed = {
    v: 11,
    meta: { titel: "Strategiesessie Klarijn" },
    boards: [
      {
        id: "vragen",
        nummer: "01",
        label: "Aftrap",
        vraag: "Praktische punten om eerst af te tikken.",
        type: "qa",
        questions: [
          { q: "Wat is de deadline voor live-gang?", a: "" },
          { q: "Wie is verantwoordelijk voor welke content?", a: "" },
          { q: "Productstructuur: hoe richten we de offerte-flow in?", a: "" },
          { q: "Welke analytics zijn gewenst en wat is er al?", a: "" },
          { q: "AI-koppeling: zijn er plannen of ideeen?", a: "" },
          { q: "Concurrenten of vergelijkbare platformen om van te leren?", a: "" }
        ]
      },
      {
        id: "doelstellingen",
        nummer: "02",
        label: "Doelstellingen",
        vraag: "Wat moet de website concreet bereiken?",
        groups: [
          {
            id: "conversie",
            label: "Klant in beweging krijgen",
            hint: "Acties die we willen dat een bezoeker doet.",
            notes: [
              { text: "Bellen of mailen", c: 0 },
              { text: "Offerte aanvragen", c: 1 },
              { text: "Abonnement nemen", c: 2 },
              { text: "Franchise-test invullen", c: 3 }
            ]
          },
          {
            id: "vindbaarheid",
            label: "Gevonden worden in Google",
            hint: "Zoekvragen waarop Klarijn moet verschijnen.",
            notes: [
              { text: "Vindbaar op concrete vragen", c: 2 },
              { text: "Vindbaar per regio", c: 4 },
              { text: "Resultaten met rijke previews", c: 3 },
              { text: "Geen tracking-cookies", c: 0 }
            ]
          },
          {
            id: "positionering",
            label: "Anders dan andere kantoren",
            hint: "Hoe Klarijn zich onderscheidt op de site.",
            notes: [
              { text: "Niet als advocatenkantoor", c: 1 },
              { text: "Begrijpelijk Nederlands", c: 0 },
              { text: "Voor ondernemers met de voeten in de klei", c: 4 },
              { text: "Klant en jurist apart", c: 3 }
            ]
          },
          {
            id: "beheer",
            label: "Praktisch en toekomstbestendig",
            hint: "Beheerbaarheid en techniek achter de schermen.",
            notes: [
              { text: "Beheer door eigen team", c: 2 },
              { text: "Werkt goed op mobiel", c: 1 },
              { text: "Snel laden", c: 0 },
              { text: "Live voor de zomer", c: 4 }
            ]
          }
        ]
      },
      {
        id: "doelgroepen",
        nummer: "03",
        label: "Doelgroepen",
        vraag: "Wie willen we bereiken?",
        groups: [
          {
            id: "klant",
            label: "Ondernemers met een vraag",
            hint: "MKB en familiebedrijven die juridische hulp nodig hebben.",
            notes: [
              { text: "Aannemer met geschil", c: 1 },
              { text: "Familiebedrijf in overdracht", c: 4 },
              { text: "Cateraar of horeca", c: 0 },
              { text: "Webshop met merken-vraag", c: 2 },
              { text: "Directeur middelgroot bedrijf", c: 3 },
              { text: "Loonwerker", c: 1 },
              { text: "Winkel met huurprobleem", c: 4 }
            ]
          },
          {
            id: "franchise",
            label: "Juristen die overwegen mee te doen",
            hint: "Mensen die nadenken over een Klarijn-praktijk.",
            notes: [
              { text: "Bedrijfsjurist op zoek naar verandering", c: 3 },
              { text: "Advocaat overweegt overstap", c: 2 },
              { text: "Jurist met specialisme", c: 0 },
              { text: "Jurist klaar met groot kantoor", c: 1 }
            ]
          },
          {
            id: "secundair",
            label: "Goed om mee te nemen",
            hint: "Doelgroepen die de site ook bezoeken, maar niet de hoofdfocus.",
            notes: [
              { text: "Sollicitanten", c: 4 },
              { text: "Pers en journalisten", c: 2 },
              { text: "Accountants en makelaars", c: 3 },
              { text: "Bestaande klanten", c: 0 }
            ]
          }
        ]
      },
      {
        id: "demo-vs",
        nummer: "04",
        label: "Demo vs eindresultaat",
        vraag: "Wat moet anders dan in de huidige demo?",
        groups: [
          {
            id: "visueel",
            label: "Visueel en sfeer",
            hint: "Kleuren, foto's, typografie, algemene uitstraling.",
            notes: [
              { text: "Kleur magenta houden?", c: 1 },
              { text: "Echte foto's i.p.v. stock", c: 4 }
            ]
          },
          {
            id: "inhoud",
            label: "Inhoud en teksten",
            hint: "Copy, productnamen, voorbeelden, woordkeuze.",
            notes: [
              { text: "Productnamen kloppen?", c: 2 },
              { text: "Voorbeeld-quotes herzien", c: 3 }
            ]
          },
          {
            id: "functionaliteit",
            label: "Functionaliteit",
            hint: "Welke onderdelen moeten anders werken of zijn extra nodig.",
            notes: [
              { text: "Offerte-mandje uitbreiden?", c: 0 },
              { text: "Match-test goed zo?", c: 1 }
            ]
          },
          {
            id: "behouden",
            label: "Behouden zoals het is",
            hint: "Onderdelen uit de demo waar Klarijn blij mee is.",
            notes: [
              { text: "Twee zijden klant/franchise", c: 3 },
              { text: "Vraag het Klarijn als rode draad", c: 2 }
            ]
          }
        ]
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(['<html lang="nl"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Strategiesessie Klarijn</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Caveat:wght@500;600&display=swap" rel="stylesheet">', '</head> <body> <header class="topbar no-print"> <div class="topbar-inner"> <div class="brand"> <img src="/agensea-logo.png" alt="" width="20" height="20" style="border-radius: 4px"> <span class="brand-text">Agensea</span> <span class="brand-sep">/</span> <span class="brand-client">Klarijn</span> </div> <div class="toolbar-actions"> <button type="button" data-action="reset" class="btn btn-ghost">Reset</button> <button type="button" data-action="share" class="btn btn-ghost"> <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>\nDeel sessie\n</button> <button type="button" data-action="print" class="btn btn-primary">Export PDF</button> </div> </div> </header> <section class="hero"> <div class="hero-eyebrow">Strategiesessie · 90 minuten</div> <h1 class="hero-title">Klarijn website <span class="accent">2.0</span></h1> <p class="hero-lead">\nTwee onderdelen, elk opgedeeld in een aantal categorieen. Plak per inzicht een post-it, één regel volstaat. De link is deelbaar zodat de sessie ook na afloop kan worden aangevuld.\n</p> </section> <div class="toast" id="toast"></div> <main id="boards"></main> <footer class="footer no-print"> <span class="footer-text">Automatisch opgeslagen in deze browser.</span> <div style="display:flex; align-items:center; gap:6px; font-size:12px; color: var(--ink-muted);"> <img src="/agensea-logo.png" alt="" width="14" height="14" style="border-radius: 3px"> <span>Agensea sessietool</span> </div> </footer> <div class="modal-backdrop no-print" id="share-modal"> <div class="modal"> <h3>Sessie delen</h3> <p>Deze link bevat alle huidige post-its. Stuur naar de klant of collega, zij zien bij openen exact wat hier staat en kunnen zelf bijplakken.</p> <div style="display:flex; gap:8px; margin-bottom:12px"> <input id="share-url" class="modal-input" type="text" readonly> <button id="share-copy" type="button" class="btn btn-primary">Kopieer</button> </div> <p style="margin-bottom:0">Wijzigingen aan hun kant zijn pas zichtbaar wanneer zij hun bijgewerkte link terugsturen.</p> <button type="button" data-close-modal class="modal-close">Sluiten</button> </div> </div> <script type="application/json" id="seed">', "<\/script> ", " </body> </html>"])), renderHead(), unescapeHTML(JSON.stringify(seed)), renderScript($$result, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/strategie.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/strategie.astro", void 0);

const $$file = "/Users/jorikschut/Documents/Projecten-sites/Demo Klarijn/src/pages/strategie.astro";
const $$url = "/strategie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
      __proto__: null,
      default: $$Strategie,
      file: $$file,
      url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

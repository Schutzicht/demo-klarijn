# Demo Klarijn

Concept-website voor Klarijn — juridisch advies voor mkb, familiebedrijven en maakindustrie. Gemaakt op basis van [`Offerteaanvraag Klarijn website.pdf`](./Offerteaanvraag%20Klarijn%20website.pdf).

> Werk je verder aan deze demo na de strategiesessie? Lees eerst [`SESSIE-STATUS.md`](./SESSIE-STATUS.md): wat is aangepast, wat staat nog open, en wat we nog van Klarijn nodig hebben.

## Stack

- **[Astro 6](https://astro.build/)** — static site generator met view transitions
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first met `@theme`-tokens
- **TypeScript** strict mode
- **Vanilla JS** voor mandje, beslisboom en Dirk-vraagt carrousel (geen framework-overhead)

## Lokaal draaien

```bash
npm install
npm run dev          # dev server op http://localhost:4321
npm run build        # statische export naar dist/
npm run preview      # preview van de productie-build
```

## Structuur

```
public/
├── img/                          Echte Klarijn foto's (Eibert, William, werkomgeving, bubble)
├── favicon.svg

src/
├── layouts/
│   └── Layout.astro              Globale shell, header/footer/floating CTAs
├── components/
│   ├── BrandLogo.astro           VRAAG HET tekstballon + KLARIJN-wordmark
│   ├── Header.astro              Sticky glass-blur header (light theme)
│   ├── Footer.astro              Aubergine footer met kolommen
│   ├── PageHero.astro            Sub-page hero (paarse band met breadcrumbs)
│   ├── ProductCard.astro         Productkaart
│   ├── ProductIcon.astro         10 SVG illustraties per producttype
│   ├── DirkVraagtPanel.astro     Carrousel ("Dirk vraagt Klarijn")
│   ├── DirkVraagtInline.astro    Statische Q&A op productpagina's
│   ├── DecisionTree.astro        10-vragen franchise match-test
│   ├── BasketFab.astro           Sticky offerte-mandje (rechtsonder)
│   ├── VraagHetCTA.astro         Drijvende contactknop + modal (linksonder)
│   ├── WhatWeDontDo.astro        Striking "wat we niet doen" sectie
│   ├── Stamp.astro               Decoratieve "stempel" badge
│   ├── SectionDivider.astro      Curved SVG-overgang tussen secties
│   └── AnimatedNumber.astro      Number counter met scroll trigger
├── data/
│   ├── products.ts               10 standaardproducten
│   ├── dirkVraagt.ts             Klant + franchise carrousel content
│   └── decisionTree.ts           10 vragen + scoring
├── scripts/
│   └── basket.ts                 LocalStorage mandje + XML-output
├── styles/
│   └── global.css                @theme tokens + componentlaag
└── pages/
    ├── index.astro               Homepage
    ├── werkwijze.astro
    ├── oplossingen.astro
    ├── product.astro             Voorbeeld productpagina
    ├── abonnement.astro
    ├── over-ons.astro
    ├── contact.astro
    ├── mandje.astro
    ├── kantoor-zwolle.astro
    └── franchise/
        ├── index.astro
        ├── aanpak.astro
        ├── vergoedingen.astro
        ├── beslisboom.astro      Match-test
        └── contact.astro
```

## Brand tokens

| Token | Hex | Gebruik |
|-------|-----|---------|
| `--color-aubergine` | `#5E1F5C` | Primair paars |
| `--color-aubergine-deep` | `#3D0F3B` | Donkerste paars |
| `--color-magenta` | `#E0277A` | Accent (speech bubble, CTA's) |
| `--color-magenta-soft` | `#F2A4C9` | Soft pink highlights |
| `--color-paper` | `#FAF6F2` | Off-white achtergrond |
| `--color-ink` | `#2A1530` | Tekstkleur donker |
| `--color-gold` | `#E8B447` | Franchise accent |

Fonts: **Anton** (display) + **Poppins** (body).

## Briefing-coverage

- ✅ "Vraag het Klarijn"-methodiek als rode draad — carrousel + drijvende CTA + inline Q&A
- ✅ Twee duidelijke zijden: klant-website + franchise-omgeving met eigen kleuraccent (goud)
- ✅ Productcatalogus met "Voeg toe aan mijn lijst"-mandje + stempel-animatie
- ✅ Checkout-formulier dat naar `bestelling@klarijn.nl` stuurt (gestructureerde XML in payload)
- ✅ "Mijn Voortgang" als externe link (eenvoudig te beheren)
- ✅ Beslisboom: 10 vragen, native (geen plugin), Match → contactformulier
- ✅ Schema.org / JSON-LD / semantische HTML voor SEO + GEO (LLM-leesbaar)
- ✅ Privacy: geen tracking-cookies, alleen localStorage voor het mandje
- ✅ Echte Klarijn-foto's en officiële "VRAAG HET" tekstballon
- ✅ Mobiel volledig responsief (geoptimaliseerd vanaf iPhone SE-breedte)
- ✅ View transitions tussen pagina's (geen full reload)
- ✅ Glass-blur sticky header met scroll-shrink

## Status

Demo / pitch-versie. Standaardproducten en prijzen zijn voorbeeldwaarden tot Klarijn ze aanlevert.

---

🎨 De eerste statische demo (vóór Astro+Tailwind migratie) staat in [`_static-demo/`](./_static-demo) als referentie voor de design-iteratie.

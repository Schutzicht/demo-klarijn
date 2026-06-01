# Klarijn demo, status na de strategiesessie

Dit document houdt bij wat er na de strategiesessie met Klarijn (2 uur, 1 februari 2026)
is aangepast en wat nog open staat. Bedoeld als handoff: pull de repo, lees dit, ga verder.

Laatst bijgewerkt: 1 juni 2026.

## Context

- **Stack:** Astro 6 + Tailwind v4 (TypeScript), server-mode met Vercel ISR. Strapi v5 CMS in `cms/`
  als beheerlaag, met fallback naar `src/data/*` via `src/lib/content.ts`. Zonder `STRAPI_URL` (env)
  draait de site volledig op de lokale fallback-data, zo draait de demo nu.
- **Draaien:** `npm run dev` (poort 4400). De demo zelf staat op `/home`; `/` is de intro-landing.
- **Repo:** Schutzicht/demo-klarijn, branch `main`. Vercel auto-deployt vanaf `main`.
- **Voorbeeldwaarden:** alle prijzen, strippenkaart-bundels en cijfers zijn voorbeelden tot Klarijn
  de definitieve aanlevert. Niet als feit presenteren.
- **Transcripten:** de sessie-notulen stonden in `public/` maar zijn nu in `.gitignore` gehouden
  (vertrouwelijk: namen, omzetcijfers). Ze worden dus NIET meegepulld. Vraag ze bij Jorik als nodig.
- **Relevante commits:** `2d6510d`, `2498423`, `152ba94`.

## Wat is aangepast (klaar en live)

### Abonnement, weg, strippenkaart erin
Klarijn heeft het abonnement grotendeels geschrapt. Verdienmodel is nu strippenkaart (bundels uren)
+ losse uren / regiebasis, met 1 klein abonnement als bijzaak. Nooit afrekenen via de site.
- `/abonnement` is herschreven tot een **Tarieven**-pagina, strippenkaart voorop. Route en CMS
  single-type heten nog `abonnement`; nav- en footer-label zijn "Tarieven".
- Homepage: groot euro-145-blok vervangen door een "Zo reken je af"-blok.
- `werkwijze.astro`, "drie modellen": het abonnement-model is nu de strippenkaart.
- Files: `src/pages/abonnement.astro`, `src/pages/home.astro`, `src/pages/werkwijze.astro`,
  `src/components/Header.astro`, `src/components/Footer.astro`, `src/lib/content.ts`.

### Offerte-mandje, drempel lager
- Vestigingsplaats-veld verwijderd (Arne: zo min mogelijk invullen).
- Copy weg van auto-woonplaats-routing: aanvragen gaan naar 1 centraal adres, interne verdeling.
- Het mandje is en blijft een lijstje om het gesprek te starten, geen kassa.
- Files: `src/pages/mandje.astro`, `src/scripts/basket.ts` (logica ongewijzigd).

### Cijfers en ticker weg
- Marquee-ticker verwijderd ("AI-ding").
- Opgeklopte cijfers (klanten, juristen, 96 procent) weg op home en over-ons (Eibert: "verzonnen, pochen").
- Vervangen door een bescheiden "greep uit onze klanten" sector-band op de homepage, zonder verzonnen
  bedrijfsnamen. Echte klant-logo's volgen met toestemming.

### Positionering en copy
- "Wat doen we niet" omgevormd naar "Wat doen we anders" (positieve framing, contrast behouden).
  Tegels toegevoegd: "tijd schrijven per belletje" en "procederen als reflex".
- Over ons: secties "Oplossen, niet winnen" (wat is het je waard de relatie te behouden, twee
  verliezers bij procederen), "Voor doeners" (makers/maakindustrie, instelling boven branche),
  juridische huisarts die doorverwijst zonder opslag, "weloverwogen en degelijk".
- Doelgroep is B2B: het product "echtscheiding" is gecorrigeerd naar "Zakelijke Scheiding".
- Jargon-labels begrijpelijker: "AVG-Scan" en tag "Merken & ideeen".
- Files: `src/components/WhatWeDontDo.astro`, `src/pages/over-ons.astro`, `src/data/products.ts`.

### Contact-hierarchie
- Telefoonnummer prominent in de header: tap-to-call-icoon op mobiel, zichtbaar nummer op desktop
  (alleen de klant-variant). Bellen/mailen eerst, formulier als alternatief (was al zo op de
  contactpagina). Files: `src/components/Header.astro`, `src/pages/contact.astro`.

### Franchise
- Donkere, geinverteerde look is goedgekeurd, behouden.
- Cijfer-band naar eerlijke waarden (geen euro-145-abonnement, geen verzonnen "100+ klanten/rayon").
- Expliciet contrast met LegalTree: "geen eigen broek ophouden", plus een klant-trustsignaal op de
  home-teaser (ook als klant zie je wie er achter Klarijn staat).
- Files: `src/pages/franchise/index.astro`, `src/pages/home.astro`.

### Vraag-popup per product (idee Arne)
- Elke productkaart heeft een info-icoon rechtsboven, opent een native `<dialog>` met de bijpassende
  ondernemersvraag plus antwoord. Data in `products.ts` (`vraag`), component `ProductCard.astro`.

### Landingspagina per oplossing (SEO)
- Nieuwe route `src/pages/oplossing/[slug].astro`, prerendered, 10 statische pagina's.
- Per oplossing: wat krijg je (`includes`), de praktijkvraag, hoe het werkt, prijs en toevoegen-aan-lijst.
- Producten uitgebreid met `lead` en `includes`. Alle productkaarten linken nu naar
  `/oplossing/{slug}` (was `#`). Arbeidscontract houdt zijn rijkere showcase op `/product`.

### Beslisboom (franchise match-test) herzien
- 10 vragen in een betere volgorde, afgestemd op de Klarijn-mentaliteit: na de harde drempels
  (ervaring, ondernemerschap) draait het om oplossen-boven-winnen, loskomen van het juridische
  gereedschap, relationeel denken en plain Nederlands. Daarna backoffice/franchise, tijd, regio.
- Drempel: 10 van maximaal 18. Data in `src/data/decisionTree.ts`, component `DecisionTree.astro` is generiek.

### Doeners-merkbeeld
- `public/img/doeners-puntschoenen.webp` (AI-gegenereerd: afgezaagde nette schoenen met vonken in een
  werkplaats) als banner op Over ons: "Voeten in de klei. Geen puntschoenen."

## Bewust NIET gedaan

- **AI-portret van Eibert.** Een gegenereerd portret zou een verzonnen gezicht zijn dat we als de echte
  mede-oprichter labelen. Misleidend, en precies wat Eibert niet wilde. Dit blijft een echte reshoot.

## Nog te doen, wacht op Klarijn (de aanleverlijst)

- **Echte fotografie** i.p.v. stock op alle pagina's. Een energieke portretfoto van Eibert (huidige
  is "vermoeide kop"). Wij denken graag per pagina mee welke foto's nodig zijn.
- **Producten:** welke kloppen, welke erbij/eraf, welke circa 6 uitlichten op de homepage, en of de
  namen, prijzen en omschrijvingen kloppen (nu voorbeeld).
- **Strippenkaart:** definitieve bundels en prijzen, losse-uur- en regietarief, en hoe het ene
  resterende abonnement eruit moet zien.
- **Use cases per oplossing:** 1 of 2 echte (mag anonieme) voorbeelden van opgeloste zaken.
- **Teksten:** de teksten die Klarijn met een bureau schreef, om door te nemen en te hergebruiken.
- **SEO/migratie:** lijst met bestaande blog-/artikel-URL's van de huidige site die mee moeten;
  inzicht of er nu analytics op de huidige site zit; concrete zoekvragen per onderwerp en regio.
- **Cookies/analytics, keuze nodig:** geen cookies (transparantie) of toch pixels om te kunnen
  adverteren? Agensea levert een paar opties (transparante eigen banner of URL-shortener-tracking).
- **Rayons:** naar welk centraal e-mailadres gaan aanvragen, wie volgt op, welke locaties tonen we nu
  en wat is de groeiplanning richting circa 62.
- **Deadline** voor live-gang en het vaste aanspreekpunt voor content (Arne, of Arne en Eibert).

## Concept/later (sessie: niet nu)

- "Klarijn Intelligentie": lichte service, laat je AI-gemaakte voorwaarden door Klarijn checken.
- AI in de FAQ/chatbot die naar persoonlijk contact stuurt ("zullen we je even bellen?").
- Rayon-/regiopagina's, schaalbaar naar circa 62, met een verhaal per persoon.
- Blog/artikel-layout (nette diepgang, geen lap tekst).
- WhatsApp-knop bij "Vraag het Klarijn", zodra iemand de telefoon bemant.
- Social/video-campagne als aparte track na de site.

## Technische aandachtspunten voor de volgende dev

- **CMS-fallback:** zonder `STRAPI_URL` draait alles op `src/data/*`. De content-getters staan in
  `src/lib/content.ts` (Strapi-first, lokaal als fallback). Nieuwe velden moeten daar worden
  doorgegeven (zie hoe `vraag`, `lead`, `includes` op producten zijn toegevoegd).
- **Tarieven-pagina:** de route is nog `/abonnement` en de CMS single-type heet `page-abonnement`;
  alleen de labels en content zijn "Tarieven". Niet hernoemen zonder redirects.
- **Landingspagina's** (`/oplossing/[slug].astro`) zijn `prerender = true` met `getStaticPaths` over
  alle producten. Nieuwe producten verschijnen automatisch.
- **Voorbeeld-productpagina** `/product` is een losse, rijkere showcase voor arbeidscontract en wordt
  apart onderhouden.

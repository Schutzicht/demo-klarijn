# Klarijn CMS (Strapi v5)

Headless CMS voor de Klarijn-demo. Astro fetcht hier content vanaf bij `npm run build`.
Strapi NIET draaiend? Geen probleem - Astro valt automatisch terug op de lokale data in `../src/data/*` en `../src/lib/content.ts`.

## Lokaal draaien

```bash
cd cms
npm install   # alleen de eerste keer
npm run develop
```

De admin staat op http://localhost:1337/admin.

Bij de eerste start worden automatisch alle content-types geseed met demo-data (producten, team, rayons, Q&A, testimonials, beslisboom-vragen, kantoor, site-settings, homepage-content). Daarna zijn alle endpoints publiek leesbaar.

Eerste admin-account maak je aan op de admin-pagina (vraag wordt eenmalig gesteld).

## Content-types

| Singular           | Plural                | Type        | Beheer in CMS                 |
|--------------------|-----------------------|-------------|-------------------------------|
| product            | products              | collection  | Productcatalogus              |
| team-member        | team-members          | collection  | Juristen / support            |
| dirk-vraagt        | dirk-vraagts          | collection  | Vraag-Klarijn Q&A pairs       |
| rayon              | rayons                | collection  | Franchise-rayons              |
| testimonial        | testimonials          | collection  | Klant-quotes                  |
| decision-question  | decision-questions    | collection  | Match-test vragen             |
| office             | offices               | collection  | Kantoorpaginas                |
| site-setting       | -                     | single      | Prijs, contactgegevens, URLs  |
| homepage           | -                     | single      | Hero-tekst + marquee + stats  |

## Astro koppelen aan Strapi

In de root van het Astro-project:

```bash
cp .env.example .env
# Open .env en zet:
# STRAPI_URL=http://localhost:1337
```

Daarna haalt `npm run build` de content uit Strapi i.p.v. de lokale fallback-files.

## Productie deployment

Strapi heeft een eigen server-process nodig (niet Vercel). Aanbevolen gratis tier opties:
- **Railway** (gratis ~500 uur/mnd)
- **Render** (gratis, sleeps na inactiviteit)
- **Fly.io**

Stappen voor Vercel + remote Strapi:

1. Deploy `cms/` naar Railway met Postgres DB (`DATABASE_CLIENT=postgres`).
2. Verkrijg de publieke Strapi-URL.
3. In Vercel project settings: voeg env var toe: `STRAPI_URL=https://cms-klarijn.up.railway.app`.
4. Optioneel: maak in Strapi admin een Read-only API token en zet die als `STRAPI_TOKEN` voor extra zekerheid.
5. Vercel triggert een rebuild bij elke push - de Astro-paginas krijgen dan de actuele content.

Voor instant updates kun je een Strapi webhook (Settings > Webhooks) naar Vercel's Deploy Hook URL sturen, zodat content-wijzigingen direct een nieuwe deploy starten.

## Seed-data resetten

```bash
rm cms/.tmp/data.db
npm run develop
```

De bootstrap detecteert een lege DB en re-seedt automatisch.

## Architectuur

```
Astro frontend             Strapi CMS (deze folder)
-----------------          -------------------------
src/lib/strapi.ts    ->    REST API /api/...
src/lib/content.ts   ->    Getters met fallback
src/data/*.ts        ->    Lokale fallback-data
```

`src/lib/content.ts` is de enige plek waar paginas content vandaan halen. Of dat uit Strapi komt of uit de fallback is transparant voor de templates.

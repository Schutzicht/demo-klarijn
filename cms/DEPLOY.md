# Strapi naar Railway deployen (~10 min)

Eenmalig: account op https://railway.com — gratis trial van $5, daarna **Hobby plan $5/mnd** = Strapi container + Postgres + volume, altijd-aan, custom domein gratis.

## 1. Railway CLI installeren + inloggen

```bash
brew install railway   # of: npm install -g @railway/cli
railway login          # opent browser, eenmalig
```

## 2. Project initialiseren

In de repo-root (NIET in cms/):

```bash
railway init
# Kies "Empty Project", geef het naam "klarijn-cms"
```

## 3. Postgres-service toevoegen

```bash
# In Railway dashboard (browser):
# 1. Klik op het project klarijn-cms
# 2. + New > Database > PostgreSQL
# Railway maakt een DATABASE_URL aan en koppelt die automatisch
```

## 4. Strapi-service toevoegen

```bash
cd cms
railway link              # koppel deze folder aan het Railway project
railway up                # deploy via Dockerfile
```

Eerste deploy duurt ~5 minuten (npm install + admin build).

## 5. Environment variables zetten

In het Railway dashboard, klik je Strapi-service > **Variables tab** > voeg toe:

```
NODE_ENV=production
DATABASE_CLIENT=postgres
DATABASE_SSL=true
DATABASE_SSL_REJECT_UNAUTHORIZED=false
HOST=0.0.0.0
APP_KEYS=<<run: openssl rand -base64 16 | xargs -I{} echo "{},{},{},{}">>
API_TOKEN_SALT=<<openssl rand -base64 16>>
ADMIN_JWT_SECRET=<<openssl rand -base64 16>>
TRANSFER_TOKEN_SALT=<<openssl rand -base64 16>>
JWT_SECRET=<<openssl rand -base64 16>>
ENCRYPTION_KEY=<<openssl rand -base64 16>>
CLIENT_URL=https://klarijn.nl
```

Railway zet `DATABASE_URL` en `PORT` automatisch. **Klik na invoer op Deploy.**

## 6. Persistent volume voor uploads

```bash
# In Railway dashboard > Strapi-service > Settings > Volumes:
# Mount Path: /opt/app/public/uploads
# Naam: strapi-uploads
```

Anders ben je geüploade foto's kwijt bij elke redeploy.

## 7. Publieke URL testen

Dashboard > Strapi-service > **Settings** > Networking > **Generate Domain**.
Je krijgt iets als `klarijn-cms-production.up.railway.app`. Open `/admin` en
maak je eerste admin-account aan (dit is een verse Postgres, dus geen seed-data
gemigreerd — die wordt automatisch geseed bij de eerste boot).

## 8. Vercel koppelen aan productie-Strapi

In Vercel project settings > Environment Variables:

```
STRAPI_URL=https://klarijn-cms-production.up.railway.app
```

Trigger een rebuild. Astro fetcht nu live content uit Railway-Strapi.

## 9. Webhook voor auto-rebuild bij content-wijzigingen

**Vercel:** Project Settings > Git > Deploy Hooks > Create:
- Naam: "strapi-content-update"
- Branch: main
Kopieer de URL die je krijgt.

**Strapi admin:** Settings > Webhooks > Create new webhook:
- Naam: "Vercel rebuild"
- URL: (de Vercel deploy hook URL)
- Events: `entry.publish`, `entry.update`, `entry.unpublish`, `entry.delete`

Resultaat: Klarijn drukt op Publish → Vercel rebuilt automatisch → wijziging
staat binnen ~30 sec live.

## 10. Custom domein (later)

Wanneer Klarijn-DNS beschikbaar is:

```
# In Railway dashboard > Strapi-service > Settings > Networking:
# Add Custom Domain > cms.klarijn.nl
# Railway geeft een CNAME-target
# Klarijn voegt CNAME-record toe op klarijn.nl DNS
# SSL is automatisch via Let's Encrypt
```

Daarna in Vercel: update `STRAPI_URL` naar `https://cms.klarijn.nl`.

---

## Backups (Railway)

Postgres-service > Settings > Backups: zet **Daily** aan.
Railway bewaart 30 dagen rolling backups. Voor uploads-volume: handmatige
snapshots via dashboard, of `railway run pg_dump` in een cron.

## Kosten-schatting

| Item | Maand |
|------|-------|
| Strapi container (512MB RAM, sleepless) | ~$3 |
| Postgres (1GB, daily backups) | ~$2 |
| Uploads volume (1GB) | $0.25 |
| **Totaal** | **~$5-6** |

Bij meer traffic schaalt het lineair. Voor Klarijn-schaal is dit ruim voldoende.

## Troubleshooting

**"DATABASE_URL not found"** — Railway koppelt Postgres niet automatisch. In Strapi-service Variables tab: voeg toe `DATABASE_URL=${{Postgres.DATABASE_URL}}` (Railway template syntax).

**Admin laadt niet, alleen API** — `npm run build` faalde stiekem. Logs checken via `railway logs`.

**500 op uploads** — volume mount-path is verkeerd. Moet `/opt/app/public/uploads` zijn (matchend met Strapi default).

**Cors errors van Astro** — voeg toe in Strapi `config/middlewares.ts`:
```
{ name: 'strapi::cors', config: { origin: ['https://klarijn.nl', 'http://localhost:4400'] } }
```

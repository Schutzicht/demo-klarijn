import type { Core } from '@strapi/strapi';
import {
  products,
  teamMembers,
  dirkVraagts,
  rayons,
  testimonials,
  decisionQuestions,
  offices,
  siteSettings,
  homepageContent,
  pageWerkwijze,
  pageOverOns,
  pageAbonnement,
  pageFranchise,
} from './seed/data';

// Lijst van content-types die publiek leesbaar moeten zijn (vanuit Astro).
const PUBLIC_READ_TYPES = [
  'api::product.product',
  'api::team-member.team-member',
  'api::dirk-vraagt.dirk-vraagt',
  'api::rayon.rayon',
  'api::testimonial.testimonial',
  'api::decision-question.decision-question',
  'api::office.office',
  'api::site-setting.site-setting',
  'api::homepage.homepage',
  'api::page-werkwijze.page-werkwijze',
  'api::page-over-ons.page-over-ons',
  'api::page-abonnement.page-abonnement',
  'api::page-franchise.page-franchise',
];

async function setPublicReadPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });
  if (!publicRole) return;

  for (const uid of PUBLIC_READ_TYPES) {
    for (const action of ['find', 'findOne']) {
      const actionId = `${uid}.${action}`;
      const existing = await strapi.query('plugin::users-permissions.permission').findOne({
        where: { action: actionId, role: publicRole.id },
      });
      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: { action: actionId, role: publicRole.id },
        });
      }
    }
  }
  strapi.log.info('[seed] Public read permissions ensured for all content-types.');
}

async function seedCollection<T extends Record<string, any>>(
  strapi: Core.Strapi,
  uid: any,
  items: T[],
) {
  const existing = await strapi.documents(uid).count({});
  if (existing > 0) return false;
  for (const item of items) {
    await strapi.documents(uid).create({ data: item as any, status: 'published' });
  }
  strapi.log.info(`[seed] Seeded ${items.length} ${uid}`);
  return true;
}

async function seedSingle(strapi: Core.Strapi, uid: any, data: Record<string, any>) {
  const existing = await strapi.documents(uid).findFirst();
  if (existing) return false;
  await strapi.documents(uid).create({ data, status: 'published' });
  strapi.log.info(`[seed] Seeded single ${uid}`);
  return true;
}

// Zorgt dat de Vercel revalidate-webhook altijd bestaat en up-to-date is.
// Triggert op alle content-events zodat publish/update/delete -> Vercel
// cache wordt geinvalideerd (ISR + bypassToken).
async function ensureVercelWebhook(strapi: Core.Strapi) {
  // Voorkeur: nieuwe REVALIDATE_WEBHOOK_URL. Fallback: oude VERCEL_DEPLOY_HOOK
  // (voor backward compat, mocht die nog ergens staan).
  const url = process.env.REVALIDATE_WEBHOOK_URL || process.env.VERCEL_DEPLOY_HOOK;
  if (!url) {
    strapi.log.info('[seed] REVALIDATE_WEBHOOK_URL niet gezet - skip webhook');
    return;
  }
  const desiredName = 'Vercel revalidate';
  const events = [
    'entry.create',
    'entry.update',
    'entry.delete',
    'entry.publish',
    'entry.unpublish',
    'media.create',
    'media.update',
    'media.delete',
  ];
  try {
    const store = (strapi as any).get?.('webhookStore') ?? (strapi as any).webhookStore;
    if (!store) {
      strapi.log.warn('[seed] webhookStore niet beschikbaar');
      return;
    }
    const all = await store.findWebhooks();
    // Vind bestaande met oude OF nieuwe naam
    const existing = all.find((w: any) => w.name === desiredName || w.name === 'Vercel rebuild');
    if (existing) {
      // Update als URL of naam afwijkt
      if (existing.url !== url || existing.name !== desiredName) {
        await store.updateWebhook({
          ...existing,
          name: desiredName,
          url,
          headers: {},
          events,
          enabled: true,
        });
        strapi.log.info('[seed] Vercel webhook ge-update naar nieuwe revalidate-URL');
      } else {
        strapi.log.info('[seed] Vercel webhook bestaat al en is up-to-date');
      }
      return;
    }
    await store.createWebhook({
      name: desiredName,
      url,
      headers: {},
      events,
      enabled: true,
    });
    strapi.log.info('[seed] Vercel revalidate-webhook aangemaakt');
  } catch (err) {
    strapi.log.warn('[seed] Vercel webhook setup faalde:', err);
  }
}

// === Klarijn-redacteur rol + permissies ===
// Beheert dagelijkse content (homepage, producten, team, testimonials, rayons,
// site-settings, kantoorpaginas). Mag publiceren. Mag NIET: webhooks, users,
// roles, API tokens, plugins-config zien.
//
// CRUD = lezen, aanmaken, wijzigen, verwijderen, publiceren
// READ_ONLY = alleen lezen (hier nuttig voor Q&A's en match-test, om
// referentie te kunnen checken zonder dat ze de site-logica breken)
const EDITOR_ROLE_NAME = 'Klarijn-redacteur';
const EDITOR_ROLE_CODE = 'strapi-klarijn-editor';

const CRUD_TYPES = [
  'api::homepage.homepage',
  'api::page-werkwijze.page-werkwijze',
  'api::page-over-ons.page-over-ons',
  'api::page-abonnement.page-abonnement',
  'api::page-franchise.page-franchise',
  'api::product.product',
  'api::team-member.team-member',
  'api::testimonial.testimonial',
  'api::rayon.rayon',
  'api::site-setting.site-setting',
  'api::office.office',
];

const READ_ONLY_TYPES = [
  'api::dirk-vraagt.dirk-vraagt',
  'api::decision-question.decision-question',
];

const CRUD_ACTIONS = [
  'plugin::content-manager.explorer.create',
  'plugin::content-manager.explorer.read',
  'plugin::content-manager.explorer.update',
  'plugin::content-manager.explorer.delete',
  'plugin::content-manager.explorer.publish',
];

const READ_ACTIONS = [
  'plugin::content-manager.explorer.read',
];

// Plus toegang tot uploads (foto's beheren) en single-types/collection-types UI
const EXTRA_ACTIONS = [
  'plugin::upload.read',
  'plugin::upload.assets.create',
  'plugin::upload.assets.update',
  'plugin::upload.assets.download',
  'plugin::upload.assets.copy-link',
];

// Maakt een redacteur-user aan op basis van env vars zodat we kunnen inloggen
// als 'Klarijn-redacteur' om de admin-view vanuit hun perspectief te bekijken.
// Idempotent: bestaande user wordt niet overschreven.
async function ensureRedacteurUser(strapi: Core.Strapi) {
  const email = process.env.REDACTEUR_EMAIL;
  const password = process.env.REDACTEUR_PASSWORD;
  const firstname = process.env.REDACTEUR_FIRSTNAME || 'Redacteur';
  const lastname = process.env.REDACTEUR_LASTNAME || '';
  if (!email || !password) {
    strapi.log.info('[seed] REDACTEUR_EMAIL/PASSWORD niet gezet - skip redacteur-user');
    return;
  }
  try {
    const existing = await strapi.db.query('admin::user').findOne({ where: { email } });
    if (existing) {
      strapi.log.info(`[seed] Redacteur-user ${email} bestaat al`);
      return;
    }
    const role = await strapi.db.query('admin::role').findOne({
      where: { code: EDITOR_ROLE_CODE },
    });
    if (!role) {
      strapi.log.warn('[seed] Klarijn-redacteur rol niet gevonden, skip user');
      return;
    }
    // Strapi v5 admin user service hashed password automatisch
    await (strapi as any).service('admin::user').create({
      email,
      firstname,
      lastname,
      password,
      isActive: true,
      preferedLanguage: 'nl',
      roles: [role.id],
    });
    strapi.log.info(`[seed] Redacteur-user ${email} aangemaakt met rol Klarijn-redacteur`);
  } catch (err) {
    strapi.log.warn('[seed] ensureRedacteurUser faalde:', err);
  }
}

// Zet voor alle bestaande admin-users de voorkeurstaal op NL (één keer).
async function setAdminLanguageToDutch(strapi: Core.Strapi) {
  try {
    const users = await strapi.db.query('admin::user').findMany({});
    let updated = 0;
    for (const user of users) {
      if (user.preferedLanguage !== 'nl') {
        await strapi.db.query('admin::user').update({
          where: { id: user.id },
          data: { preferedLanguage: 'nl' },
        });
        updated++;
      }
    }
    if (updated > 0) {
      strapi.log.info(`[seed] ${updated} admin-user(s) voorkeurstaal op NL gezet`);
    }
  } catch (err) {
    strapi.log.warn('[seed] setAdminLanguageToDutch faalde:', err);
  }
}

// Plain-NL labels per content-type veld. Strapi gebruikt deze in de edit-view
// boven elk veld in plaats van de attribute-naam (heroTitle -> Hoofdtitel).
const FIELD_LABELS: Record<string, Record<string, string>> = {
  'api::homepage.homepage': {
    heroTitle: 'Hoofdtitel',
    heroLead: 'Subtekst',
    heroCtaPrimaryLabel: 'Knop 1 — tekst',
    heroCtaPrimaryHref: 'Knop 1 — link',
    heroCtaSecondaryLabel: 'Knop 2 — tekst',
    heroCtaSecondaryHref: 'Knop 2 — link',
    marqueeItems: 'Marquee (lopende tekstbanner onder de hero)',
    stats: 'Cijfers-blok',
  },
  'api::product.product': {
    title: 'Naam',
    tagline: 'Korte omschrijving (sub-titel)',
    description: 'Volledige beschrijving',
    tag: 'Categorie',
    price: 'Prijs',
    priceLabel: 'Toelichting bij prijs',
    icon: 'Icoon',
    featured: 'Op homepage tonen',
    displayOrder: 'Volgorde',
    slug: 'URL-deel',
  },
  'api::team-member.team-member': {
    name: 'Naam',
    role: 'Functie',
    photo: 'Foto',
    bio: 'Bio',
    email: 'E-mail',
    location: 'Vestiging',
    type: 'Rolcategorie',
    displayOrder: 'Volgorde',
    photoUrl: 'Foto (technische fallback)',
  },
  'api::testimonial.testimonial': {
    quote: 'Quote',
    author: 'Naam',
    role: 'Functie + bedrijf',
    location: 'Plaats',
    photo: 'Portretfoto',
    scenePhoto: 'Sfeerfoto (optioneel)',
    featured: 'Op homepage tonen',
    displayOrder: 'Volgorde',
    photoUrl: 'Portret (technische fallback)',
    scenePhotoUrl: 'Sfeer (technische fallback)',
  },
  'api::rayon.rayon': {
    city: 'Stad',
    status: 'Status',
    displayOrder: 'Volgorde',
  },
  'api::office.office': {
    name: 'Naam kantoor',
    city: 'Stad',
    address: 'Adres',
    postalCode: 'Postcode',
    phone: 'Telefoon',
    email: 'E-mail',
    hours: 'Openingstijden',
    serviceAreas: 'Servicegebied (welke plaatsen)',
    intro: 'Introductietekst',
    quote: 'Quote rayonhouder',
    quoteAuthorName: 'Naam onder de quote',
    slug: 'URL-deel',
  },
  'api::site-setting.site-setting': {
    abonnementPriceMonthly: 'Abonnementsprijs per maand (€)',
    contactPhonePrimary: 'Hoofdtelefoonnummer',
    contactPhoneSecondary: 'Tweede telefoonnummer',
    contactEmailMain: 'Algemeen e-mailadres',
    contactEmailBestelling: 'E-mail voor offerte-aanvragen',
    mijnVoortgangUrl: '"Mijn Voortgang" externe URL',
    companySlogan: 'Slogan',
    companyDescription: 'Bedrijfsomschrijving (SEO)',
  },
  'api::dirk-vraagt.dirk-vraagt': {
    who: 'Voornaam vragensteller',
    role: 'Functie + plaats',
    question: 'Vraag',
    answer: 'Antwoord',
    variant: 'Soort (klant of franchise)',
    photo: 'Foto',
    displayOrder: 'Volgorde',
    photoUrl: 'Foto (technische fallback)',
  },
  'api::decision-question.decision-question': {
    question: 'Vraag',
    answerOptions: 'Antwoorden (met score)',
    displayOrder: 'Volgorde',
  },
  'api::page-werkwijze.page-werkwijze': {
    heroTitle: 'Hoofdtitel',
    heroLead: 'Subtekst',
    introCopy: 'Inleidende tekst boven de stappen',
  },
  'api::page-over-ons.page-over-ons': {
    heroTitle: 'Hoofdtitel',
    heroLead: 'Subtekst',
    originStory: 'Ontstaansverhaal',
    valuesIntro: 'Tekst boven de waarden',
  },
  'api::page-abonnement.page-abonnement': {
    heroTitle: 'Hoofdtitel',
    heroLead: 'Subtekst',
    perksIntro: 'Tekst boven de voordelen',
  },
  'api::page-franchise.page-franchise': {
    heroTitle: 'Hoofdtitel',
    heroLead: 'Subtekst',
    pillarsIntro: 'Tekst boven de drie pijlers',
  },
};

// Schrijft per content-type een metadatas-config in de content-manager store
// zodat de admin UI Nederlandse labels en placeholders toont in plaats van
// de attribute-namen.
async function ensureFieldLabels(strapi: Core.Strapi) {
  try {
    for (const [uid, labels] of Object.entries(FIELD_LABELS)) {
      const storeKey = `plugin_content_manager_configuration_content_types::${uid}`;
      const store = (strapi as any).store({
        type: 'plugin',
        name: 'content_manager',
        key: storeKey,
      });
      const current = (await store.get()) || {};
      const metadatas: any = current.metadatas || {};

      // Begin met de bestaande attribute-namen, vul aan vanuit FIELD_LABELS
      const ct: any = (strapi as any).contentTypes?.[uid];
      if (!ct?.attributes) continue;
      for (const attrName of Object.keys(ct.attributes)) {
        const niceLabel = labels[attrName] ?? attrName;
        const existing = metadatas[attrName] || {};
        const edit = existing.edit || {};
        const list = existing.list || {};
        metadatas[attrName] = {
          edit: {
            ...edit,
            label: niceLabel,
            description: edit.description ?? '',
            placeholder: edit.placeholder ?? '',
            visible: edit.visible ?? true,
            editable: edit.editable ?? true,
          },
          list: {
            ...list,
            label: niceLabel,
            searchable: list.searchable ?? true,
            sortable: list.sortable ?? true,
          },
        };
      }

      await store.set({
        value: {
          ...current,
          metadatas,
        },
      });
    }
    strapi.log.info('[seed] Veld-labels in NL gezet voor alle content-types');
  } catch (err) {
    strapi.log.warn('[seed] ensureFieldLabels faalde:', err);
  }
}

// Bouwt de field-list voor een content-type. Strapi v5 vereist dat read/update/create
// permissies een expliciete velden-whitelist hebben, anders krijgt de redacteur
// 'Geen rechten om dit veld te bekijken' bij elk attribuut.
function getFieldsForUid(strapi: Core.Strapi, uid: string): string[] {
  const ct: any = (strapi as any).contentTypes?.[uid];
  if (!ct?.attributes) return [];
  return Object.keys(ct.attributes).filter((name) => {
    // Skip de standaard timestamps/private fields die Strapi zelf beheert
    return !['createdAt', 'updatedAt', 'publishedAt', 'createdBy', 'updatedBy', 'locale', 'localizations'].includes(name);
  });
}

async function ensureEditorRole(strapi: Core.Strapi) {
  try {
    // 1) Vind of maak de rol
    let role: any = await strapi.db.query('admin::role').findOne({
      where: { code: EDITOR_ROLE_CODE },
    });
    if (!role) {
      role = await strapi.db.query('admin::role').create({
        data: {
          name: EDITOR_ROLE_NAME,
          code: EDITOR_ROLE_CODE,
          description: 'Beheert dagelijkse content: homepage, producten, team, testimonials, rayons, site-settings en kantoorpaginas.',
        },
      });
      strapi.log.info(`[seed] Rol "${EDITOR_ROLE_NAME}" aangemaakt`);
    }

    // 2) Verwijder alle bestaande permissies van deze rol zodat we een schone
    //    state krijgen (voorkomt conflicten met oude permissies zonder velden).
    await strapi.db.query('admin::permission').deleteMany({
      where: { role: role.id },
    });

    // 3) Genereer permissies MET velden-whitelist per content-type
    const NEEDS_FIELDS = new Set([
      'plugin::content-manager.explorer.read',
      'plugin::content-manager.explorer.create',
      'plugin::content-manager.explorer.update',
    ]);

    let added = 0;
    const createPerm = async (action: string, subject: string | null, fields?: string[]) => {
      const properties: any = {};
      if (fields && fields.length && NEEDS_FIELDS.has(action)) {
        properties.fields = fields;
      }
      await strapi.db.query('admin::permission').create({
        data: { action, subject, role: role.id, properties, conditions: [] },
      });
      added++;
    };

    // CRUD types: alle acties + alle velden
    for (const uid of CRUD_TYPES) {
      const fields = getFieldsForUid(strapi, uid);
      for (const action of CRUD_ACTIONS) {
        await createPerm(action, uid, fields);
      }
    }
    // Read-only types: alleen lezen
    for (const uid of READ_ONLY_TYPES) {
      const fields = getFieldsForUid(strapi, uid);
      for (const action of READ_ACTIONS) {
        await createPerm(action, uid, fields);
      }
    }
    // Extra (uploads etc): geen subject, geen velden
    for (const action of EXTRA_ACTIONS) {
      await createPerm(action, null);
    }

    strapi.log.info(`[seed] Rol "${EDITOR_ROLE_NAME}" opnieuw opgebouwd met ${added} permissies (incl. velden-whitelist)`);
  } catch (err) {
    strapi.log.warn('[seed] ensureEditorRole faalde:', err);
  }
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      await seedCollection(strapi, 'api::product.product', products);
      await seedCollection(strapi, 'api::team-member.team-member', teamMembers);
      await seedCollection(strapi, 'api::dirk-vraagt.dirk-vraagt', dirkVraagts);
      await seedCollection(strapi, 'api::rayon.rayon', rayons);
      await seedCollection(strapi, 'api::testimonial.testimonial', testimonials);
      await seedCollection(strapi, 'api::decision-question.decision-question', decisionQuestions);
      await seedCollection(strapi, 'api::office.office', offices);
      await seedSingle(strapi, 'api::site-setting.site-setting', siteSettings);
      await seedSingle(strapi, 'api::homepage.homepage', homepageContent);
      await seedSingle(strapi, 'api::page-werkwijze.page-werkwijze', pageWerkwijze);
      await seedSingle(strapi, 'api::page-over-ons.page-over-ons', pageOverOns);
      await seedSingle(strapi, 'api::page-abonnement.page-abonnement', pageAbonnement);
      await seedSingle(strapi, 'api::page-franchise.page-franchise', pageFranchise);
      await setPublicReadPermissions(strapi);
      await ensureVercelWebhook(strapi);
      await ensureEditorRole(strapi);
      await ensureFieldLabels(strapi);
      await setAdminLanguageToDutch(strapi);
      await ensureRedacteurUser(strapi);
    } catch (err) {
      strapi.log.error('[seed] Bootstrap seed failed:', err);
    }
  },
};

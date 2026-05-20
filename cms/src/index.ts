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

    // 2) Bouw lijst van gewenste permissies
    const desired: Array<{ action: string; subject: string }> = [];
    for (const uid of CRUD_TYPES) {
      for (const action of CRUD_ACTIONS) desired.push({ action, subject: uid });
    }
    for (const uid of READ_ONLY_TYPES) {
      for (const action of READ_ACTIONS) desired.push({ action, subject: uid });
    }
    for (const action of EXTRA_ACTIONS) desired.push({ action, subject: null as any });

    // 3) Vergelijk met bestaande permissies van de rol, voeg ontbrekende toe
    const existing = await strapi.db.query('admin::permission').findMany({
      where: { role: role.id },
    });
    const existingKey = (p: any) => `${p.action}|${p.subject ?? ''}`;
    const have = new Set(existing.map(existingKey));

    let added = 0;
    for (const p of desired) {
      if (have.has(existingKey(p))) continue;
      await strapi.db.query('admin::permission').create({
        data: {
          action: p.action,
          subject: p.subject,
          role: role.id,
          properties: {},
          conditions: [],
        },
      });
      added++;
    }
    if (added) {
      strapi.log.info(`[seed] ${added} permissies toegevoegd aan rol "${EDITOR_ROLE_NAME}"`);
    } else {
      strapi.log.info(`[seed] Rol "${EDITOR_ROLE_NAME}" permissies up-to-date`);
    }
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
      await setPublicReadPermissions(strapi);
      await ensureVercelWebhook(strapi);
      await ensureEditorRole(strapi);
      await setAdminLanguageToDutch(strapi);
    } catch (err) {
      strapi.log.error('[seed] Bootstrap seed failed:', err);
    }
  },
};

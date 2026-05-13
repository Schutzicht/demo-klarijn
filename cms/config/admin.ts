import type { Core } from '@strapi/strapi';

// Mapping: welke UID -> welke URL op de site (voor live preview)
const PREVIEW_ROUTES: Record<string, string> = {
  'api::homepage.homepage': '/home',
  'api::site-setting.site-setting': '/home',
  'api::product.product': '/oplossingen',
  'api::team-member.team-member': '/over-ons',
  'api::testimonial.testimonial': '/home',
  'api::dirk-vraagt.dirk-vraagt': '/home',
  'api::rayon.rayon': '/franchise',
  'api::decision-question.decision-question': '/franchise/beslisboom',
  'api::office.office': '/kantoor-zwolle',
};

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', false),
    promoteEE: env.bool('FLAG_PROMOTE_EE', false),
  },
  // Live preview - toont een iframe van de Astro-site naast het edit-formulier.
  // De Astro dev server moet draaien op CLIENT_URL (default http://localhost:4321).
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('CLIENT_URL', 'http://localhost:4321')],
      async handler(uid: string) {
        const clientUrl = env('CLIENT_URL', 'http://localhost:4321');
        const path = PREVIEW_ROUTES[uid] ?? '/home';
        return `${clientUrl}${path}`;
      },
    },
  },
});

export default config;

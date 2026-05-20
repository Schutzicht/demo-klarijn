import type { StrapiApp } from '@strapi/strapi/admin';
import logo from './logo.png';
import favicon from './favicon.png';

// Agensea Hub white-label voor Klarijn CMS.
// Klarijn is een hosting-klant; de admin draagt onze branding (indigo + cream).
export default {
  config: {
    // Alleen NL beschikbaar in de language-switcher.
    locales: ['nl'],
    auth: { logo },
    head: { favicon },
    menu: { logo },
    notifications: {
      releases: false,
    },
    tutorials: false,
    translations: {
      nl: {
        'app.components.LeftMenu.navbrand.title': 'Agensea Hub',
        'app.components.LeftMenu.navbrand.workplace': 'Klarijn beheer',
        'Auth.form.welcome.title': 'Welkom bij Agensea Hub',
        'Auth.form.welcome.subtitle': 'Beheer de Klarijn-website.',
        'Settings.application.title': 'Hub-instellingen',
        'HomePage.helloWorld': 'Welkom terug',
        'HomePage.welcome': 'Welkom bij Agensea Hub',
        'HomePage.welcome.again': 'Welkom terug bij Agensea Hub',
        'HomePage.welcomeBlock.content.again': 'Beheer hier de content van de Klarijn-website. Wijzigingen zijn binnen 5 seconden zichtbaar op klarijn.nl na publiceren.',
        'HomePage.welcomeBlock.content': 'Hier beheer je alle content van de Klarijn-website. Wijzigingen zijn binnen 5 seconden live op klarijn.nl na publiceren.',
      },
      en: {
        'app.components.LeftMenu.navbrand.title': 'Agensea Hub',
        'app.components.LeftMenu.navbrand.workplace': 'Klarijn workspace',
        'Auth.form.welcome.title': 'Welcome to Agensea Hub',
        'Auth.form.welcome.subtitle': 'Manage the Klarijn website.',
      },
    },
    theme: {
      light: {
        colors: {
          primary100: '#e8eafe',
          primary200: '#c5cbfb',
          primary500: '#4f5ef7',
          primary600: '#2d3fe0',
          primary700: '#1f2bb8',
          danger700: '#dc2626',
          neutral0: '#ffffff',
          neutral100: '#faf9f6',
          neutral150: '#f0ede8',
          neutral200: '#e8e6e1',
          neutral300: '#cfccc4',
          neutral400: '#b5b0a8',
          neutral500: '#6b6b6b',
          neutral600: '#4a4a4a',
          neutral700: '#2a2a2a',
          neutral800: '#1c1c1c',
          neutral900: '#0d0d0d',
        },
      },
      dark: {
        colors: {
          primary100: '#1a1f4f',
          primary200: '#2d3fe0',
          primary500: '#4f5ef7',
          primary600: '#6c7bff',
          primary700: '#8a96ff',
        },
      },
    },
  },
  bootstrap(app: StrapiApp) {
    if (typeof document !== 'undefined') {
      document.title = 'Agensea Hub - Klarijn';
      try {
        localStorage.setItem('strapi-admin-language', 'nl');
      } catch {}

      // Verberg irrelevante sidebar-items en promo-banners (Marketplace,
      // Strapi Cloud, AI-features, etc). Strapi Community heeft hier geen
      // config-toggle voor, dus we doen het via CSS injectie.
      const css = `
        /* Marketplace sidebar item */
        a[href$="/marketplace"],
        a[href*="/marketplace"] { display: none !important; }

        /* Strapi Cloud / hosting nudges */
        a[href*="strapi.io/cloud"],
        a[href*="cloud.strapi.io"] { display: none !important; }

        /* AI feature promo-blokken */
        [data-strapi-ai-promo],
        [class*="AiSection"],
        [class*="ai-promo"] { display: none !important; }

        /* Tutorials/release-notes/get-started karren */
        [class*="HelperPluginContent"],
        [data-feature-name="releases"] [class*="upgrade"],
        [class*="ReleasesPromo"] { display: none !important; }

        /* Documentation link in sidebar (vaak verwarrend voor end-users) */
        a[href*="docs.strapi.io"] { display: none !important; }
      `;
      const style = document.createElement('style');
      style.setAttribute('data-agensea-hide', '1');
      style.textContent = css;
      document.head.appendChild(style);
    }
  },
};

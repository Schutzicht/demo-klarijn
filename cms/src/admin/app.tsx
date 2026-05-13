import type { StrapiApp } from '@strapi/strapi/admin';
import logo from './logo.png';
import favicon from './favicon.png';

// Agensea Hub white-label voor Klarijn CMS.
// Klarijn is een hosting-klant; de admin draagt onze branding (indigo + cream).
export default {
  config: {
    locales: ['nl'],
    auth: {
      logo,
    },
    head: {
      favicon,
    },
    menu: {
      logo,
    },
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
  bootstrap() {
    // White-label aanpassingen die niet via config kunnen
    if (typeof document !== 'undefined') {
      document.title = 'Agensea Hub - Klarijn';
    }
  },
};

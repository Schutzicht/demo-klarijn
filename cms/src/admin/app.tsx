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
        // Brand chrome
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

        // Content-manager sidebar groupings
        'content-manager.components.LeftMenu.collection-types': 'Lijst-content',
        'content-manager.components.LeftMenu.single-types': 'Vaste paginas',
        'content-manager.components.LeftMenu.empty.collection-type': 'Geen lijst-content',
        'content-manager.components.LeftMenu.empty.single-type': 'Geen vaste paginas',

        // Algemeen rondom content
        'global.content-types.entry': 'item',
        'global.content-types.entries': 'items',
        'content-manager.containers.ListPage.table-headers.id': 'Nummer',
        'content-manager.containers.List.addAnEntry': 'Item toevoegen',
        'content-manager.containers.List.addAnEntry.cta': '+ Item toevoegen',
        'content-manager.HeaderLayout.button.label-add-entry': '+ Item toevoegen',
        'content-manager.containers.Edit.addAnItem': '+ Toevoegen',
        'content-manager.containers.Edit.publish': 'Live zetten',
        'content-manager.containers.Edit.unpublish': 'Offline halen',
        'content-manager.containers.Edit.save': 'Opslaan',
        'content-manager.containers.Edit.draft': 'Concept',
        'content-manager.containers.Edit.publish-confirmation': 'Wil je dit live zetten?',
        'content-manager.containers.Edit.confirmation-publish': 'Wil je dit item live zetten?',
        'content-manager.containers.Edit.confirmation-unpublish': 'Wil je dit item offline halen?',
        'content-manager.containers.Edit.confirmation-delete': 'Wil je dit item verwijderen?',
        'content-manager.containers.Edit.unsaved-changes': 'Niet-opgeslagen wijzigingen',
        'content-manager.containers.Edit.discard': 'Wijzigingen weggooien',
        'content-manager.containers.Edit.cancel': 'Annuleren',
        'app.utils.publish': 'Live zetten',
        'app.utils.unpublish': 'Offline halen',
        'app.utils.draft': 'Concept',
        'app.utils.delete': 'Verwijderen',
        'app.utils.duplicate': 'Dupliceren',
        'app.utils.save': 'Opslaan',
        'app.utils.edit': 'Bewerken',

        // Status badges
        'content-manager.containers.List.published': 'Live',
        'content-manager.containers.List.draft': 'Concept',
        'content-manager.containers.List.modified': 'Gewijzigd',
        'content-manager.components.Status.published': 'Live',
        'content-manager.components.Status.draft': 'Concept',
        'content-manager.components.Status.modified': 'Gewijzigd',

        // Configure-view
        'content-manager.containers.SettingPage.configurations.title': 'Weergave aanpassen',
        'content-manager.popUpWarning.button.confirm': 'Bevestigen',
        'content-manager.popUpWarning.button.cancel': 'Annuleren',

        // Filters / search
        'content-manager.components.Search.placeholder': 'Zoek...',
        'content-manager.components.FilterPicker.PluginHeader.title-1': 'Filters',
        'content-manager.containers.List.search.title': 'Zoeken',

        // Counts ("X entries found")
        'content-manager.pagination.entries-found': '{number} items gevonden',
        'content-manager.pagination.entries-published': '{number} items live',

        // Field-types
        'components.Input.error.validation.required': 'Verplicht veld',

        // Settings sidebar groups
        'Settings.webhooks.title': 'Webhooks',
        'Settings.application.description': 'Bekijk gegevens over jouw Agensea Hub.',
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

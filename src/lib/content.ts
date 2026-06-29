// Centrale content-getters: Strapi-first, lokaal als fallback.
// In Astro frontmatter: `const products = await getProducts();`
// - STRAPI_URL gezet -> haalt uit Strapi
// - Geen STRAPI_URL of fetch faalt -> gebruikt src/data/*

import { fetchCollection, fetchSingle, isStrapiEnabled, mediaUrl } from './strapi';

import { products as localProducts, type Product } from '../data/products';
import { klantVragen as localKlantVragen, franchiseVragen as localFranchiseVragen, klarijnAnswerer } from '../data/dirkVraagt';
import { questions as localDecisionQuestions, matchThreshold } from '../data/decisionTree';

// ---------- Products ----------
export async function getProducts(): Promise<Product[]> {
  const data = await fetchCollection<any>('products');
  if (!data) return localProducts;
  return data.map((d) => ({
    slug: d.slug,
    title: d.title,
    tag: d.tag,
    tagline: d.tagline,
    price: d.price,
    priceLabel: d.priceLabel,
    description: d.description,
    icon: d.icon,
    vraag: d.vraag,
    lead: d.lead,
    includes: d.includes,
  })) as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getProducts();
  return all.find((p) => p.slug === slug);
}

// ---------- Dirk Vraagt ----------
export type DirkVraag = {
  who: string;
  role: string;
  q: string;
  a: string;
  img: string;
};

function mapDirkVraagt(d: any): DirkVraag {
  return { who: d.who, role: d.role, q: d.question, a: d.answer, img: mediaUrl(d.photo) || d.photoUrl };
}

export async function getKlantVragen(): Promise<DirkVraag[]> {
  const data = await fetchCollection<any>('dirk-vraagts', { 'filters[variant][$eq]': 'klant' });
  if (!data) return localKlantVragen;
  return data.map(mapDirkVraagt);
}

export async function getFranchiseVragen(): Promise<DirkVraag[]> {
  const data = await fetchCollection<any>('dirk-vraagts', { 'filters[variant][$eq]': 'franchise' });
  if (!data) return localFranchiseVragen;
  return data.map(mapDirkVraagt);
}

export { klarijnAnswerer };

// ---------- Decision questions ----------
export type DecisionQuestion = {
  q: string;
  a: { label: string; score: number }[];
};

export async function getDecisionQuestions(): Promise<DecisionQuestion[]> {
  const data = await fetchCollection<any>('decision-questions');
  if (!data) return localDecisionQuestions;
  return data.map((d) => ({
    q: d.question,
    a: Array.isArray(d.answerOptions)
      ? d.answerOptions.map((o: any) => ({ label: o.label, score: Number(o.score) || 0 }))
      : [],
  }));
}

export { matchThreshold };

// ---------- Team members ----------
export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  email?: string;
  location?: string;
  type?: 'oprichter' | 'senior' | 'jurist' | 'support' | 'rayonhouder';
  photoUrl?: string;
};

const LOCAL_TEAM: TeamMember[] = [
  { name: 'Eibert Lijnbach', role: 'Mede-oprichter · Arbeidsrecht', bio: 'Ex-bedrijfsjurist in de bouw. Bouwt liever een goed contract dan dat hij er een procedeert.', email: 'eibert@klarijn.nl', location: 'Zwolle', type: 'oprichter', photoUrl: '/img/eibert.webp' },
  { name: 'William Beurskens', role: 'Mede-oprichter · Ondernemingsrecht', bio: 'Werkte 12 jaar als bedrijfsjurist bij familiebedrijven. Specialist in opvolging.', email: 'william@klarijn.nl', location: 'Zwolle', type: 'oprichter', photoUrl: '/img/william.jpg' },
  { name: 'Eline Munnik', role: 'Senior · Contracten / IE', bio: 'Heeft een verleden bij een groot advocatenkantoor en is daar weggegaan om dezelfde reden als jij dit leest.', location: 'Zwolle', type: 'senior', photoUrl: '/img/stock/p2.jpg' },
  { name: 'Joost de Bruijn', role: 'Senior · AVG / IT', bio: 'Vertaalt Europese regelgeving naar checklists die zelfs jouw boekhouder begrijpt.', location: 'Zwolle', type: 'senior', photoUrl: '/img/stock/p5.jpg' },
  { name: 'Sven Krijnen', role: 'Senior · Contracten', location: 'Zwolle', type: 'senior', photoUrl: '/img/william.jpg' },
  { name: 'Yvonne van Dam', role: 'Office manager', location: 'Zwolle', type: 'support', photoUrl: '/img/stock/p16.jpg' },
];

export async function getTeamMembers(location?: string): Promise<TeamMember[]> {
  const query: Record<string, any> = {};
  if (location) query['filters[location][$eq]'] = location;
  const data = await fetchCollection<any>('team-members', query);
  if (!data) {
    return location ? LOCAL_TEAM.filter((m) => m.location === location) : LOCAL_TEAM;
  }
  return data.map((d) => ({
    name: d.name,
    role: d.role,
    bio: d.bio,
    email: d.email,
    location: d.location,
    type: d.type,
    photoUrl: mediaUrl(d.photo) || d.photoUrl,
  }));
}

// ---------- Rayons ----------
export type Rayon = { city: string; status: 'actief' | 'pilot' | 'beschikbaar' | 'voorbereiding' };

const LOCAL_RAYONS: Rayon[] = [
  { city: 'Zwolle', status: 'pilot' },
  { city: 'Rotterdam', status: 'beschikbaar' },
  { city: 'Eindhoven', status: 'beschikbaar' },
  { city: 'Amsterdam', status: 'beschikbaar' },
  { city: 'Groningen', status: 'beschikbaar' },
  { city: 'Maastricht', status: 'beschikbaar' },
  { city: 'Breda', status: 'beschikbaar' },
  { city: 'Utrecht', status: 'beschikbaar' },
  { city: 'Den Haag', status: 'beschikbaar' },
  { city: 'Arnhem', status: 'beschikbaar' },
  { city: 'Tilburg', status: 'beschikbaar' },
  { city: 'Apeldoorn', status: 'voorbereiding' },
  { city: 'Leeuwarden', status: 'voorbereiding' },
  { city: 'Nijmegen', status: 'voorbereiding' },
];

export async function getRayons(): Promise<Rayon[]> {
  const data = await fetchCollection<any>('rayons');
  if (!data) return LOCAL_RAYONS;
  return data.map((d) => ({ city: d.city, status: d.status }));
}

// ---------- Testimonials ----------
export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  location?: string;
  photoUrl?: string;
  scenePhotoUrl?: string;
  featured?: boolean;
};

const LOCAL_TESTIMONIALS: Testimonial[] = [
  { quote: 'Ik bel Klarijn als ik twijfel. Geen "even afspraak inplannen", geen dossiernummer. Gewoon antwoord. Voor mij scheelt dat een hoop tijd én onrust.', author: 'Dirk-Jan van der Velde', role: 'Eigenaar Bouwbedrijf Van der Velde', location: 'Apeldoorn', photoUrl: '/img/stock/p3.jpg', scenePhotoUrl: '/img/stock/scene-handshake.jpg', featured: true },
  { quote: "Vroeger zocht ik op Google en hoopte op het beste. Nu app ik m'n jurist en heb ik binnen het uur antwoord. Ik heb afgelopen jaar twee keer een fout voorkomen die me tonnen had gekost.", author: 'Marjon Verstegen', role: 'Directeur Verstegen Verpakkingen', location: 'Roermond', photoUrl: '/img/stock/scene-laughing.jpg', featured: true },
];

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchCollection<any>('testimonials');
  if (!data) return LOCAL_TESTIMONIALS;
  return data.map((d) => ({
    quote: d.quote,
    author: d.author,
    role: d.role,
    location: d.location,
    photoUrl: mediaUrl(d.photo) || d.photoUrl,
    scenePhotoUrl: mediaUrl(d.scenePhoto) || d.scenePhotoUrl,
    featured: d.featured,
  }));
}

// ---------- Site settings ----------
export type SiteSettings = {
  abonnementPriceMonthly: number;
  contactPhonePrimary: string;
  contactPhoneSecondary?: string;
  contactEmailMain: string;
  contactEmailBestelling?: string;
  mijnVoortgangUrl?: string;
  companySlogan: string;
  companyDescription: string;
};

const LOCAL_SETTINGS: SiteSettings = {
  abonnementPriceMonthly: 145,
  contactPhonePrimary: '06-51180138',
  contactPhoneSecondary: '06-10903140',
  contactEmailMain: 'vraaghet@klarijn.nl',
  contactEmailBestelling: 'bestelling@klarijn.nl',
  mijnVoortgangUrl: 'https://portal.klarijn.nl',
  companySlogan: 'Vraag het Klarijn',
  companyDescription: 'Helderheid in juridische oplossingen. Voor mkb, familiebedrijven en de maakindustrie.',
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await fetchSingle<any>('site-setting');
  if (!data) return LOCAL_SETTINGS;
  return {
    abonnementPriceMonthly: Number(data.abonnementPriceMonthly) || LOCAL_SETTINGS.abonnementPriceMonthly,
    contactPhonePrimary: data.contactPhonePrimary || LOCAL_SETTINGS.contactPhonePrimary,
    contactPhoneSecondary: data.contactPhoneSecondary,
    contactEmailMain: data.contactEmailMain || LOCAL_SETTINGS.contactEmailMain,
    contactEmailBestelling: data.contactEmailBestelling,
    mijnVoortgangUrl: data.mijnVoortgangUrl,
    companySlogan: data.companySlogan || LOCAL_SETTINGS.companySlogan,
    companyDescription: data.companyDescription || LOCAL_SETTINGS.companyDescription,
  };
}

// ---------- Homepage content ----------
export type HomepageContent = {
  heroTitle: string;
  heroLead: string;
  heroCtaPrimaryLabel: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryLabel: string;
  heroCtaSecondaryHref: string;
  marqueeItems: string[];
  stats: { value: string; label: string }[];
};

const LOCAL_HOMEPAGE: HomepageContent = {
  heroTitle: 'Vraag het\nKlarijn',
  heroLead: 'Praktisch juridisch advies voor ondernemers met de voeten in de klei. Geen ivoren toren, wel heldere antwoorden van een vaste jurist die jouw zaak kent.',
  heroCtaPrimaryLabel: 'Bekijk oplossingen',
  heroCtaPrimaryHref: '/oplossingen',
  heroCtaSecondaryLabel: 'Direct contact',
  heroCtaSecondaryHref: '/contact',
  marqueeItems: [
    'Vraag het Klarijn',
    'Helderheid in juridische oplossingen',
    'Voor doeners, niet voor advocaten',
    'Geen jargon. Wel resultaat.',
  ],
  stats: [
    { value: '14', label: 'Vaste juristen' },
    { value: '847', label: 'Klanten' },
    { value: '12', label: 'Specialismen' },
  ],
};

export async function getHomepageContent(): Promise<HomepageContent> {
  const data = await fetchSingle<any>('homepage');
  if (!data) return LOCAL_HOMEPAGE;
  return {
    heroTitle: data.heroTitle || LOCAL_HOMEPAGE.heroTitle,
    heroLead: data.heroLead || LOCAL_HOMEPAGE.heroLead,
    heroCtaPrimaryLabel: data.heroCtaPrimaryLabel || LOCAL_HOMEPAGE.heroCtaPrimaryLabel,
    heroCtaPrimaryHref: data.heroCtaPrimaryHref || LOCAL_HOMEPAGE.heroCtaPrimaryHref,
    heroCtaSecondaryLabel: data.heroCtaSecondaryLabel || LOCAL_HOMEPAGE.heroCtaSecondaryLabel,
    heroCtaSecondaryHref: data.heroCtaSecondaryHref || LOCAL_HOMEPAGE.heroCtaSecondaryHref,
    marqueeItems: Array.isArray(data.marqueeItems)
      ? data.marqueeItems.map((m: any) => (typeof m === 'string' ? m : m.text)).filter(Boolean)
      : LOCAL_HOMEPAGE.marqueeItems,
    stats: Array.isArray(data.stats)
      ? data.stats.map((s: any) => ({ value: s.value, label: s.label }))
      : LOCAL_HOMEPAGE.stats,
  };
}

// ---------- Pagina-content (Werkwijze, Over ons, Abonnement, Franchise) ----------
// Per pagina alleen de teksten die de redacteur kan wijzigen. Layout en
// structurele blokken blijven in de Astro-template.
type PageHeroFields = {
  heroTitle?: string;
  heroLead?: string;
};

export type PageWerkwijze = PageHeroFields & { introCopy?: string };
export type PageOverOns = PageHeroFields & { originStory?: string; valuesIntro?: string };
export type PageAbonnement = PageHeroFields & { perksIntro?: string };
export type PageFranchise = PageHeroFields & { pillarsIntro?: string };

const LOCAL_PAGE_WERKWIJZE: PageWerkwijze = {
  heroTitle: 'Hoe wij werken.<br/>Vakmanschap, geen toneel.',
  heroLead: 'Geen lege beloftes en geen 14-pagina-tellende intakefase. We werken zoals onze klanten werken: handen uit de mouwen, helder, en op resultaat.',
  introCopy: 'Vier stappen, geen drempels. Bij Klarijn weet je altijd waar je staat.',
};
const LOCAL_PAGE_OVER_ONS: PageOverOns = {
  heroTitle: 'Voor doeners.<br/>Door doeners.',
  heroLead: 'Klarijn is opgericht door juristen die genoeg hadden van de standaard juridische uitstraling: glanzende kantoren, dure suits, uurtjes-factuurtjes. Wij doen het anders.',
  originStory: 'We werkten allemaal in de juridische advieswereld toen we steeds vaker dezelfde gesprekken hadden. Een ondernemer met een vraag. Een advocaat met een offerte voor een uitgebreid traject. Geen match. Veel ondernemers gingen daarna gewoon op Google zoeken en hoopten op het beste.',
  valuesIntro: 'Drie dingen die we niet doen, die andere kantoren wel doen.',
};
const LOCAL_PAGE_ABONNEMENT: PageAbonnement = {
  heroTitle: 'Heldere tarieven.<br/>Geen verrassingen achteraf.',
  heroLead: 'Geen uurtje-factuurtje-verrassingen. Voor vaste producten ken je de prijs van tevoren, voor de rest kies je een strippenkaart of losse uren. Altijd op basis van afspraken, en je rekent nooit af via de site.',
  perksIntro: 'Drie manieren om met Klarijn af te rekenen.',
};
const LOCAL_PAGE_FRANCHISE: PageFranchise = {
  heroTitle: 'Een eigen praktijk.<br/>Met een sterke ploeg achter je.',
  heroLead: 'In 2026 rolt Klarijn de franchiseformule landelijk uit. Voor juristen die ondernemend zijn, met de voeten in de klei willen staan, en samen sterk willen werken.',
  pillarsIntro: 'Drie redenen om je aan te sluiten.',
};

function mapPage<T extends PageHeroFields>(d: any, fallback: T): T {
  if (!d) return fallback;
  const out: any = { ...fallback };
  for (const key of Object.keys(fallback)) {
    if (d[key] !== undefined && d[key] !== null && d[key] !== '') out[key] = d[key];
  }
  return out;
}

export async function getPageWerkwijze(): Promise<PageWerkwijze> {
  return mapPage(await fetchSingle<any>('page-werkwijze'), LOCAL_PAGE_WERKWIJZE);
}
export async function getPageOverOns(): Promise<PageOverOns> {
  return mapPage(await fetchSingle<any>('page-over-ons'), LOCAL_PAGE_OVER_ONS);
}
export async function getPageAbonnement(): Promise<PageAbonnement> {
  return mapPage(await fetchSingle<any>('page-abonnement'), LOCAL_PAGE_ABONNEMENT);
}
export async function getPageFranchise(): Promise<PageFranchise> {
  return mapPage(await fetchSingle<any>('page-franchise'), LOCAL_PAGE_FRANCHISE);
}

// Re-export for callers who want to check
export { isStrapiEnabled };

const STRAPI_URL = (process.env.STRAPI_URL || "").replace(/\/$/, "");
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || "";
function resolveMediaUrl(url) {
  if (!url) return void 0;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/uploads/")) return STRAPI_URL ? `${STRAPI_URL}${url}` : url;
  return url;
}
function mediaUrl(field) {
  if (!field) return void 0;
  if (typeof field === "string") return resolveMediaUrl(field);
  if (field?.url) return resolveMediaUrl(field.url);
  if (field?.data?.attributes?.url) return resolveMediaUrl(field.data.attributes.url);
  return void 0;
}
function buildQuery(q = {}) {
  const parts = [];
  for (const [k, v] of Object.entries(q)) {
    if (v === void 0 || v === null) continue;
    parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
  }
  return parts.length ? `?${parts.join("&")}` : "";
}
async function strapiFetch(path, query = {}) {
  if (!STRAPI_URL) return null;
  const url = `${STRAPI_URL}/api${path}${buildQuery(query)}`;
  try {
    const res = await fetch(url, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}
    });
    if (!res.ok) {
      console.warn(`[strapi] ${res.status} on ${path}, falling back to local data`);
      return null;
    }
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn(`[strapi] fetch failed for ${path}, falling back to local data`, err);
    return null;
  }
}
async function fetchCollection(pluralName, query = {}) {
  const data = await strapiFetch(`/${pluralName}`, {
    "pagination[pageSize]": 100,
    "sort[0]": "displayOrder:asc",
    populate: "*",
    ...query
  });
  return data;
}
async function fetchSingle(singularName, query = {}) {
  return strapiFetch(`/${singularName}`, { populate: "*", ...query });
}

const products = [
  {
    slug: "arbeidscontract",
    title: "Arbeidscontract Op Maat",
    tag: "Arbeid",
    tagline: "Volledig en cao-conform",
    price: "€ 595",
    priceLabel: "vaste prijs",
    description: "Volledig contract, helder geschreven, rekening houdend met cao en jouw werkwijze.",
    icon: "contract"
  },
  {
    slug: "incasso",
    title: "Incasso Pakket",
    tag: "Geschillen",
    tagline: "No-cure-no-pay incasso",
    price: "NCNP",
    priceLabel: "no-cure-no-pay",
    description: "Aanmaning, sommatie en zo nodig kort geding. No-cure-no-pay basis.",
    icon: "gavel"
  },
  {
    slug: "overdracht",
    title: "Bedrijfsoverdracht Familie",
    tag: "Bedrijf",
    tagline: "Opvolgingstraject 18 maanden",
    price: "vanaf € 2.450",
    priceLabel: "traject van 18 mnd",
    description: "Alles geregeld voor opvolging: structuur, fiscaal, en de menselijke kant.",
    icon: "briefcase"
  },
  {
    slug: "algemene-voorwaarden",
    title: "Algemene Voorwaarden",
    tag: "Contracten",
    tagline: "Branchespecifiek + jaar update",
    price: "€ 1.150",
    priceLabel: "incl. update-recht 1 jaar",
    description: "Op maat voor jouw branche. Niet zo'n template van internet - eentje die houdbaar is.",
    icon: "document"
  },
  {
    slug: "avg-scan",
    title: "AVG Compliance Scan",
    tag: "Privacy",
    tagline: "Praktische scan + actieplan",
    price: "€ 875",
    priceLabel: "incl. actieplan",
    description: "Wat moet je écht regelen voor de AVG? Een praktische scan zonder wollig taalgebruik.",
    icon: "shield"
  },
  {
    slug: "huurovereenkomst",
    title: "Huurovereenkomst Bedrijfsruimte",
    tag: "Vastgoed",
    tagline: "ROZ-model of maatwerk",
    price: "€ 745",
    priceLabel: "vaste prijs",
    description: "ROZ-model? Of toch maatwerk? We checken je positie en zetten een sterk contract.",
    icon: "house"
  },
  {
    slug: "merk",
    title: "Merkregistratie Benelux/EU",
    tag: "IE / Merken",
    tagline: "Vooronderzoek + registratie + bewaking",
    price: "€ 1.295",
    priceLabel: "incl. depotkosten",
    description: "Beschermen wat je opbouwt. Inclusief vooronderzoek, registratie en bewaking.",
    icon: "star"
  },
  {
    slug: "aandeelhoudersovereenkomst",
    title: "Aandeelhoudersovereenkomst",
    tag: "Bedrijf",
    tagline: "Structuur + exit-scenario's",
    price: "€ 1.450",
    priceLabel: "incl. structuuradvies",
    description: "Wat als? Vastleggen wat er gebeurt bij ziekte, ruzie, exit of doorpakken.",
    icon: "handshake"
  },
  {
    slug: "scheiding",
    title: "Echtscheiding Ondernemer",
    tag: "Familie",
    tagline: "Met oog voor mensen én bedrijf",
    price: "vanaf € 1.950",
    priceLabel: "volledig traject",
    description: "Apart, zonder dat de zaak in de problemen komt. Met oog voor mensen én bedrijf.",
    icon: "family"
  },
  {
    slug: "uwv",
    title: "Ontslagdossier UWV",
    tag: "Arbeid",
    tagline: "Compleet dossier UWV",
    price: "€ 1.395",
    priceLabel: "vaste prijs",
    description: "Compleet dossier voor ontslagaanvraag bij langdurige ziekte of bedrijfseconomisch.",
    icon: "folder"
  }
];

const klarijnAnswerer = {
  img: "/img/eibert.webp"
};
const px = (n) => `/img/stock/p${n}.jpg`;
const klantVragen = [
  {
    who: "Dirk",
    role: "Aannemer · Apeldoorn",
    q: "Mijn opdrachtgever betaalt al 4 maanden de factuur niet. Wat doe ik?",
    a: "Begin met een formele aanmaning met termijn van 14 dagen. Werkt dat niet, dan starten wij een incassoprocedure op no-cure-no-pay basis. Je hebt binnen 6 weken duidelijkheid.",
    img: px(14)
  },
  {
    who: "Eline",
    role: "Cateraar · Goes",
    q: "Een medewerker is langdurig ziek. Mag ik na 2 jaar ontslag aanvragen?",
    a: "Ja, dat kan via UWV. Maar er moet wél een goed re-integratiedossier liggen. We checken samen of jullie alles correct hebben vastgelegd, anders is een ontslagaanvraag kansloos.",
    img: px(11)
  },
  {
    who: "Joris",
    role: "Mkb-directeur · Zwolle",
    q: "Ik wil mijn zaak overdragen aan mijn dochter. Waar moet ik aan denken?",
    a: "Drie sporen: bedrijfsstructuur (BV/holding), fiscale faciliteiten (BOR) en de menselijke kant. We maken een tijdslijn van 18 maanden zodat je niets vergeet.",
    img: px(6)
  },
  {
    who: "Sandra",
    role: "Schoonheidsspecialiste · Breda",
    q: "Ik huur een pand maar de verhuurder wil mijn huur fors verhogen. Mag dat?",
    a: "Niet zomaar. Voor middenstandsbedrijfsruimte gelden strikte regels. We checken je contract, peilen de markthuur en onderhandelen. In 80% van de gevallen vinden we ruimte.",
    img: px(16)
  },
  {
    who: "Kees",
    role: "Loonwerker · Friesland",
    q: "Mijn compagnon wil eruit stappen. Hoe regel ik dat zonder ruzie?",
    a: "Met een uittredingsregeling op basis van wat in jullie aandeelhoudersovereenkomst staat, of, als die er niet is, een nieuwe afspraak. We zorgen dat de waardering klopt.",
    img: px(3)
  },
  {
    who: "Mariska",
    role: "Webshop-eigenaar · Tilburg",
    q: "Een concurrent gebruikt mijn productfoto's. Wat zijn mijn opties?",
    a: "Auteursrecht is sterk in Nederland. We sturen een sommatie met schadebedrag. Werkt vaak direct. Zo niet, dan kort geding, in 9 van 10 keren is het na de brief al opgelost.",
    img: px(9)
  }
];
const franchiseVragen = [
  {
    who: "Rik",
    role: "Jurist · momenteel in dienst",
    q: "Wat verdien ik ongeveer in jaar 1 met een nieuw rayon?",
    a: "Onze pilot in Zwolle haalde in jaar 1 ~70k aan abonnementen + ~120k aan losse opdrachten. Na fee & backoffice blijft ~120-150k netto. Geen garantie, wel realistisch — we lopen samen door de cijfers.",
    img: px(15)
  },
  {
    who: "Femke",
    role: "Advocaat · 9 jaar arbeidsrecht",
    q: "Mag ik vanuit Klarijn ook procederen?",
    a: "Ja, voor zover je toga draagt of een advocaat in je rayon-team hebt. Voor onderdelen waar geen advocatuur nodig is (~80%) doen we het natuurlijk gewoon zelf.",
    img: px(2)
  },
  {
    who: "Tim",
    role: "Bedrijfsjurist · familiebedrijf",
    q: "Ik wil een eigen praktijk maar geen risico van een eenmansbedrijf. Hoe pak je dat?",
    a: "Dat is precies waar Klarijn op is gebouwd. Je krijgt een rayon, een merk, leadgeneratie en software. Geen eigen branding bedenken, geen eigen CRM kiezen. Wel ondernemen.",
    img: px(7)
  }
];

const questions = [
  {
    q: "Heb je minimaal 3 jaar werkervaring als jurist of bedrijfsjurist?",
    a: [
      { label: "Ja", score: 1 },
      { label: "Nog niet, maar wel verwante ervaring", score: 0 },
      { label: "Nee", score: -2 }
    ]
  },
  {
    q: "Wat past het beste bij jou?",
    a: [
      { label: "Ik wil ondernemen, mijn eigen praktijk opbouwen", score: 2 },
      { label: "Ik wil zelfstandig werken, maar liever zonder de hele last", score: 1 },
      { label: "Ik werk liever in loondienst", score: -2 }
    ]
  },
  {
    q: "Hoeveel uur per week wil je in je praktijk steken?",
    a: [
      { label: "32+ uur (volwaardig)", score: 2 },
      { label: "20–32 uur", score: 1 },
      { label: "Minder dan 20 uur", score: -1 }
    ]
  },
  {
    q: "Welke werkwijze spreekt jou aan?",
    a: [
      { label: "Praktisch, direct, no-nonsense", score: 2 },
      { label: "Gemixt - soms strategisch, soms uitvoerend", score: 1 },
      { label: "Vooral procederen en juridische geschillen", score: -1 }
    ]
  },
  {
    q: "Hoe sta je tegenover een franchiseformule?",
    a: [
      { label: "Top: gedeelde merknaam, eigen rayon, samen sterk", score: 2 },
      { label: "Open, mits ik genoeg vrijheid hou", score: 1 },
      { label: "Liever volledig onafhankelijk", score: -2 }
    ]
  },
  {
    q: "Heb je affiniteit met ondernemers in mkb / familiebedrijven / maakindustrie?",
    a: [
      { label: "Ja, mijn voorkeursdoelgroep", score: 2 },
      { label: "Beetje, ik werk breder", score: 1 },
      { label: "Niet echt", score: -1 }
    ]
  },
  {
    q: "Wat vind je van marketing & acquisitie?",
    a: [
      { label: "Leuk, daar draai ik graag aan", score: 1 },
      { label: "Niet mijn favoriet - graag ondersteuning", score: 1 },
      { label: "Heb er geen affiniteit mee", score: -1 }
    ]
  },
  {
    q: "Heb je interesse in een specialisatie naast generieke ondernemerszaken?",
    a: [
      { label: "Ja: arbeidsrecht / contracten / IE / privacy", score: 2 },
      { label: "Misschien - eerst breed beginnen", score: 1 },
      { label: "Geen sterke voorkeur", score: 0 }
    ]
  },
  {
    q: "Hoe sta je tegenover een vaste backoffice voor automatisering en ondersteuning?",
    a: [
      { label: "Onmisbaar - daar wil ik mijn tijd niet aan kwijt", score: 2 },
      { label: "Handig, mits ik er invloed op heb", score: 1 },
      { label: "Liever zelf alles regelen", score: -1 }
    ]
  },
  {
    q: "In welke regio wil je een rayon opbouwen?",
    a: [
      { label: "Ik heb een specifieke regio voor ogen", score: 2 },
      { label: "Ik ben flexibel", score: 1 },
      { label: "Weet ik nog niet", score: 0 }
    ]
  }
];
const matchThreshold = 8;

async function getProducts() {
  const data = await fetchCollection("products");
  if (!data) return products;
  return data.map((d) => ({
    slug: d.slug,
    title: d.title,
    tag: d.tag,
    tagline: d.tagline,
    price: d.price,
    priceLabel: d.priceLabel,
    description: d.description,
    icon: d.icon
  }));
}
async function getProductBySlug(slug) {
  const all = await getProducts();
  return all.find((p) => p.slug === slug);
}
function mapDirkVraagt(d) {
  return { who: d.who, role: d.role, q: d.question, a: d.answer, img: mediaUrl(d.photo) || d.photoUrl };
}
async function getKlantVragen() {
  const data = await fetchCollection("dirk-vraagts", { "filters[variant][$eq]": "klant" });
  if (!data) return klantVragen;
  return data.map(mapDirkVraagt);
}
async function getFranchiseVragen() {
  const data = await fetchCollection("dirk-vraagts", { "filters[variant][$eq]": "franchise" });
  if (!data) return franchiseVragen;
  return data.map(mapDirkVraagt);
}
async function getDecisionQuestions() {
  const data = await fetchCollection("decision-questions");
  if (!data) return questions;
  return data.map((d) => ({
    q: d.question,
    a: Array.isArray(d.answerOptions) ? d.answerOptions.map((o) => ({ label: o.label, score: Number(o.score) || 0 })) : []
  }));
}
const LOCAL_HOMEPAGE = {
  heroTitle: "Vraag het\nKlarijn",
  heroLead: "Praktisch juridisch advies voor ondernemers met de voeten in de klei. Geen ivoren toren, wel heldere antwoorden van een vaste jurist die jouw zaak kent.",
  heroCtaPrimaryLabel: "Bekijk oplossingen",
  heroCtaPrimaryHref: "/oplossingen",
  heroCtaSecondaryLabel: "Direct contact",
  heroCtaSecondaryHref: "/contact",
  marqueeItems: [
    "Vraag het Klarijn",
    "Helderheid in juridische oplossingen",
    "Voor doeners, niet voor advocaten",
    "Geen jargon. Wel resultaat."
  ],
  stats: [
    { value: "14", label: "Vaste juristen" },
    { value: "847", label: "Klanten" },
    { value: "12", label: "Specialismen" }
  ]
};
async function getHomepageContent() {
  const data = await fetchSingle("homepage");
  if (!data) return LOCAL_HOMEPAGE;
  return {
    heroTitle: data.heroTitle || LOCAL_HOMEPAGE.heroTitle,
    heroLead: data.heroLead || LOCAL_HOMEPAGE.heroLead,
    heroCtaPrimaryLabel: data.heroCtaPrimaryLabel || LOCAL_HOMEPAGE.heroCtaPrimaryLabel,
    heroCtaPrimaryHref: data.heroCtaPrimaryHref || LOCAL_HOMEPAGE.heroCtaPrimaryHref,
    heroCtaSecondaryLabel: data.heroCtaSecondaryLabel || LOCAL_HOMEPAGE.heroCtaSecondaryLabel,
    heroCtaSecondaryHref: data.heroCtaSecondaryHref || LOCAL_HOMEPAGE.heroCtaSecondaryHref,
    marqueeItems: Array.isArray(data.marqueeItems) ? data.marqueeItems.map((m) => typeof m === "string" ? m : m.text).filter(Boolean) : LOCAL_HOMEPAGE.marqueeItems,
    stats: Array.isArray(data.stats) ? data.stats.map((s) => ({ value: s.value, label: s.label })) : LOCAL_HOMEPAGE.stats
  };
}

export { getProducts as a, getHomepageContent as b, getFranchiseVragen as c, getKlantVragen as d, getProductBySlug as e, getDecisionQuestions as g, klarijnAnswerer as k, matchThreshold as m };

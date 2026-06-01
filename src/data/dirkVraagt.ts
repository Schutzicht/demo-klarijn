export type DirkVraag = {
  who: string;
  role: string;
  q: string;
  a: string;
  /** Foto van de vragensteller. Stock placeholder via i.pravatar.cc met stabiele seed. */
  img: string;
};

/** Foto van Klarijn-zijde (de antwoordgever). Eibert is mede-oprichter. */
export const klarijnAnswerer = {
  name: 'Eibert',
  role: 'Klarijn',
  img: '/img/eibert.webp',
};

// Lokale stock portretten in /public/img/stock/. Visueel geverifieerd dat
// elke foto past bij de naam + functie (geen pravatar random meer).
const px = (n: number) => `/img/stock/p${n}.jpg`;

export const klantVragen: DirkVraag[] = [
  {
    who: 'Dirk',
    role: 'Aannemer · Apeldoorn',
    q: 'Mijn opdrachtgever betaalt al 4 maanden de factuur niet. Wat doe ik?',
    a: 'Begin met een formele aanmaning met termijn van 14 dagen. Werkt dat niet, dan starten wij een incassoprocedure op no-cure-no-pay basis. Je hebt binnen 6 weken duidelijkheid.',
    img: px(14),
  },
  {
    who: 'Eline',
    role: 'Cateraar · Goes',
    q: 'Een medewerker is langdurig ziek. Mag ik na 2 jaar ontslag aanvragen?',
    a: 'Ja, dat kan via UWV. Maar er moet wél een goed re-integratiedossier liggen. We checken samen of jullie alles correct hebben vastgelegd, anders is een ontslagaanvraag kansloos.',
    img: px(11),
  },
  {
    who: 'Joris',
    role: 'Mkb-directeur · Zwolle',
    q: 'Ik wil mijn zaak overdragen aan mijn dochter. Waar moet ik aan denken?',
    a: 'Drie sporen: bedrijfsstructuur (BV/holding), fiscale faciliteiten (BOR) en de menselijke kant. We maken een tijdslijn van 18 maanden zodat je niets vergeet.',
    img: px(6),
  },
  {
    who: 'Sandra',
    role: 'Schoonheidsspecialiste · Breda',
    q: 'Ik huur een pand maar de verhuurder wil mijn huur fors verhogen. Mag dat?',
    a: 'Niet zomaar. Voor middenstandsbedrijfsruimte gelden strikte regels. We checken je contract, peilen de markthuur en onderhandelen. In 80% van de gevallen vinden we ruimte.',
    img: px(16),
  },
  {
    who: 'Kees',
    role: 'Loonwerker · Friesland',
    q: 'Mijn compagnon wil eruit stappen. Hoe regel ik dat zonder ruzie?',
    a: 'Met een uittredingsregeling op basis van wat in jullie aandeelhoudersovereenkomst staat, of, als die er niet is, een nieuwe afspraak. We zorgen dat de waardering klopt.',
    img: px(3),
  },
  {
    who: 'Mariska',
    role: 'Webshop-eigenaar · Tilburg',
    q: "Een concurrent gebruikt mijn productfoto's. Wat zijn mijn opties?",
    a: 'Auteursrecht is sterk in Nederland. We sturen een sommatie met schadebedrag. Werkt vaak direct. Zo niet, dan kort geding, in 9 van 10 keren is het na de brief al opgelost.',
    img: px(9),
  },
];

export const franchiseVragen: DirkVraag[] = [
  {
    who: 'Rik',
    role: 'Jurist · momenteel in dienst',
    q: 'Wat verdien ik ongeveer in jaar 1 met een nieuw rayon?',
    a: 'Onze pilot in Zwolle haalde in jaar 1 ~70k aan vaste klanten en strippenkaarten plus ~120k aan losse opdrachten. Na fee en backoffice blijft ~120-150k netto. Geen garantie, wel realistisch, we lopen samen door de cijfers.',
    img: px(15),
  },
  {
    who: 'Femke',
    role: 'Advocaat · 9 jaar arbeidsrecht',
    q: 'Mag ik vanuit Klarijn ook procederen?',
    a: 'Ja, voor zover je toga draagt of een advocaat in je rayon-team hebt. Voor onderdelen waar geen advocatuur nodig is (~80%) doen we het natuurlijk gewoon zelf.',
    img: px(2),
  },
  {
    who: 'Tim',
    role: 'Bedrijfsjurist · familiebedrijf',
    q: 'Ik wil een eigen praktijk maar geen risico van een eenmansbedrijf. Hoe pak je dat?',
    a: 'Dat is precies waar Klarijn op is gebouwd. Je krijgt een rayon, een merk, leadgeneratie en software. Geen eigen branding bedenken, geen eigen CRM kiezen. Wel ondernemen.',
    img: px(7),
  },
];

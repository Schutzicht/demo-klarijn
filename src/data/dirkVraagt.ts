export type DirkVraag = {
  who: string;
  role: string;
  q: string;
  a: string;
};

export const klantVragen: DirkVraag[] = [
  {
    who: 'Dirk',
    role: 'Aannemer · Apeldoorn',
    q: 'Mijn opdrachtgever betaalt al 4 maanden de factuur niet. Wat doe ik?',
    a: 'Begin met een formele aanmaning met termijn van 14 dagen. Werkt dat niet, dan starten wij een incassoprocedure op no-cure-no-pay basis. Je hebt binnen 6 weken duidelijkheid.',
  },
  {
    who: 'Eline',
    role: 'Cateraar · Goes',
    q: 'Een medewerker is langdurig ziek. Mag ik na 2 jaar ontslag aanvragen?',
    a: 'Ja, dat kan via UWV. Maar er moet wél een goed re-integratiedossier liggen. We checken samen of jullie alles correct hebben vastgelegd, anders is een ontslagaanvraag kansloos.',
  },
  {
    who: 'Joris',
    role: 'Mkb-directeur · Zwolle',
    q: 'Ik wil mijn zaak overdragen aan mijn dochter. Waar moet ik aan denken?',
    a: 'Drie sporen: bedrijfsstructuur (BV/holding), fiscale faciliteiten (BOR) en de menselijke kant. We maken een tijdslijn van 18 maanden zodat je niets vergeet.',
  },
  {
    who: 'Sandra',
    role: 'Schoonheidsspecialiste · Breda',
    q: 'Ik huur een pand maar de verhuurder wil mijn huur fors verhogen. Mag dat?',
    a: 'Niet zomaar. Voor middenstandsbedrijfsruimte gelden strikte regels. We checken je contract, peilen de markthuur en onderhandelen. In 80% van de gevallen vinden we ruimte.',
  },
  {
    who: 'Kees',
    role: 'Loonwerker · Friesland',
    q: 'Mijn compagnon wil eruit stappen. Hoe regel ik dat zonder ruzie?',
    a: 'Met een uittredingsregeling op basis van wat in jullie aandeelhoudersovereenkomst staat — of, als die er niet is, een nieuwe afspraak. We zorgen dat de waardering klopt.',
  },
  {
    who: 'Mariska',
    role: 'Webshop-eigenaar · Tilburg',
    q: "Een concurrent gebruikt mijn productfoto's. Wat zijn mijn opties?",
    a: 'Auteursrecht is sterk in Nederland. We sturen een sommatie met schadebedrag. Werkt vaak direct. Zo niet, dan kort geding — maar in 9 van 10 keren is het na de brief al opgelost.',
  },
];

export const franchiseVragen: DirkVraag[] = [
  {
    who: 'Rik',
    role: 'Jurist · momenteel in dienst',
    q: 'Wat verdien ik ongeveer in jaar 1 met een nieuw rayon?',
    a: 'Onze pilot in Zwolle haalde in jaar 1 ~70k aan abonnementen + ~120k aan losse opdrachten. Na fee & backoffice blijft ~120-150k netto. Geen garantie, wel realistisch — we lopen samen door de cijfers.',
  },
  {
    who: 'Femke',
    role: 'Advocaat · 9 jaar arbeidsrecht',
    q: 'Mag ik vanuit Klarijn ook procederen?',
    a: 'Ja, voor zover je toga draagt of een advocaat in je rayon-team hebt. Voor onderdelen waar geen advocatuur nodig is (~80%) doen we het natuurlijk gewoon zelf.',
  },
  {
    who: 'Tim',
    role: 'Bedrijfsjurist · familiebedrijf',
    q: 'Ik wil een eigen praktijk maar geen risico van een eenmansbedrijf. Hoe pak je dat?',
    a: 'Dat is precies waar Klarijn op is gebouwd. Je krijgt een rayon, een merk, leadgeneratie en software. Geen eigen branding bedenken, geen eigen CRM kiezen. Wel ondernemen.',
  },
];

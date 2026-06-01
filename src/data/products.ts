export type Product = {
  slug: string;
  title: string;
  tag: string;
  tagline: string;
  price: string;
  priceLabel: string;
  description: string;
  icon: 'contract' | 'gavel' | 'briefcase' | 'document' | 'shield' | 'house' | 'star' | 'handshake' | 'family' | 'folder';
  /** Bijpassende ondernemersvraag, getoond via het vraag-icoon op de productkaart. */
  vraag?: { q: string; a: string };
  /** Korte hero-lead op de landingspagina (valt terug op description). */
  lead?: string;
  /** Wat krijg je, getoond op de landingspagina. */
  includes?: string[];
};

export const products: Product[] = [
  {
    slug: 'arbeidscontract',
    title: 'Arbeidscontract Op Maat',
    tag: 'Arbeid',
    tagline: 'Volledig en cao-conform',
    price: '€ 595',
    priceLabel: 'vaste prijs',
    description: 'Volledig contract, helder geschreven, rekening houdend met cao en jouw werkwijze.',
    icon: 'contract',
    vraag: {
      q: 'Mag ik een concurrentiebeding in een tijdelijk contract zetten?',
      a: 'Alleen met een schriftelijke motivering van zwaarwegende bedrijfsbelangen, anders is het ongeldig. Wij schrijven die motivering zo dat hij ook bij een rechter overeind blijft.',
    },
    lead: 'Een volledig arbeidscontract, helder geschreven en cao-conform. Geen template van internet, eentje die houdbaar is en die je begrijpt.',
    includes: [
      'Onbepaalde tijd, bepaalde tijd of oproepbasis',
      'Cao-conform: we checken voor jouw branche',
      'Concurrentie- en relatiebeding waar dat standhoudt',
      'Geheimhouding en intellectueel eigendom',
      'In Word en PDF, plus uitleg voor je medewerker',
    ],
  },
  {
    slug: 'incasso',
    title: 'Incasso Pakket',
    tag: 'Geschillen',
    tagline: 'No-cure-no-pay incasso',
    price: 'NCNP',
    priceLabel: 'no-cure-no-pay',
    description: 'Aanmaning, sommatie en zo nodig kort geding. No-cure-no-pay basis.',
    icon: 'gavel',
    vraag: {
      q: 'Mijn opdrachtgever betaalt al 4 maanden de factuur niet. Wat doe ik?',
      a: 'Begin met een formele aanmaning met een termijn van 14 dagen. Werkt dat niet, dan starten wij een incassoprocedure op no-cure-no-pay basis. Binnen 6 weken heb je duidelijkheid.',
    },
    lead: 'Je geld binnenhalen zonder eindeloze procedure. Aanmaning, sommatie en zo nodig kort geding, op no-cure-no-pay basis.',
    includes: [
      'Formele aanmaning met heldere betaaltermijn',
      'Sommatie namens Klarijn',
      'Zo nodig een kort geding',
      'No-cure-no-pay: je betaalt bij succes',
      'Binnen 6 weken duidelijkheid',
    ],
  },
  {
    slug: 'overdracht',
    title: 'Bedrijfsoverdracht Familie',
    tag: 'Bedrijf',
    tagline: 'Opvolgingstraject 18 maanden',
    price: 'vanaf € 2.450',
    priceLabel: 'traject van 18 mnd',
    description: "Alles geregeld voor opvolging: structuur, fiscaal, en de menselijke kant.",
    icon: 'briefcase',
    vraag: {
      q: 'Ik wil mijn zaak overdragen aan mijn dochter. Waar moet ik aan denken?',
      a: 'Drie sporen: bedrijfsstructuur (BV/holding), fiscale faciliteiten (BOR) en de menselijke kant. We maken een tijdslijn van 18 maanden zodat je niets vergeet.',
    },
    lead: 'Je bedrijf overdragen aan familie of een opvolger, zonder dat er iets blijft liggen. Structuur, fiscaal en de menselijke kant.',
    includes: [
      'Bedrijfsstructuur (BV of holding)',
      'Fiscale faciliteiten zoals de BOR',
      'Afspraken over zeggenschap en timing',
      'Aandacht voor de menselijke kant',
      'Een tijdslijn van circa 18 maanden',
    ],
  },
  {
    slug: 'algemene-voorwaarden',
    title: 'Algemene Voorwaarden',
    tag: 'Contracten',
    tagline: 'Branchespecifiek + jaar update',
    price: '€ 1.150',
    priceLabel: 'incl. update-recht 1 jaar',
    description: "Op maat voor jouw branche. Niet zo'n template van internet - eentje die houdbaar is.",
    icon: 'document',
    vraag: {
      q: 'Kan ik niet gewoon een template van internet gebruiken?',
      a: 'Dat kan, tot er een geschil komt en blijkt dat ze niet goed ter hand zijn gesteld of niet bij jouw branche passen. Wij maken er een die houdbaar is, met een jaar updaterecht.',
    },
    lead: "Algemene voorwaarden die houdbaar zijn voor jouw branche. Niet zo'n template van internet die het laat afweten als het erop aankomt.",
    includes: [
      'Op maat voor jouw branche',
      'Juridisch houdbaar en goed ter hand gesteld',
      'Inclusief updaterecht in het eerste jaar',
      'In begrijpelijk Nederlands',
      'Klaar om direct te gebruiken',
    ],
  },
  {
    slug: 'avg-scan',
    title: 'AVG-Scan',
    tag: 'Privacy',
    tagline: 'Praktische scan + actieplan',
    price: '€ 875',
    priceLabel: 'incl. actieplan',
    description: 'Wat moet je écht regelen voor de AVG? Een praktische scan zonder wollig taalgebruik.',
    icon: 'shield',
    vraag: {
      q: 'Wat moet ik nou écht regelen voor de AVG?',
      a: 'Vaak minder dan je denkt, maar wel de juiste dingen: verwerkersovereenkomsten, een register en een paar processen. Onze scan geeft je een actieplan zonder wollig taalgebruik.',
    },
    lead: 'Wat moet je écht regelen voor de AVG? Een praktische scan met een concreet actieplan, zonder wollig taalgebruik.',
    includes: [
      'Praktische doorlichting van je verwerkingen',
      'Verwerkersovereenkomsten en register',
      'Concreet actieplan met prioriteiten',
      'Uitleg in gewoon Nederlands',
      'Vervolgcheck mogelijk',
    ],
  },
  {
    slug: 'huurovereenkomst',
    title: 'Huurovereenkomst Bedrijfsruimte',
    tag: 'Vastgoed',
    tagline: 'ROZ-model of maatwerk',
    price: '€ 745',
    priceLabel: 'vaste prijs',
    description: 'ROZ-model? Of toch maatwerk? We checken je positie en zetten een sterk contract.',
    icon: 'house',
    vraag: {
      q: 'Mijn verhuurder wil de huur fors verhogen. Mag dat?',
      a: 'Niet zomaar. Voor middenstandsbedrijfsruimte gelden strikte regels. We checken je contract, peilen de markthuur en onderhandelen. Vaak vinden we ruimte.',
    },
    lead: 'Een sterk huurcontract voor bedrijfsruimte. ROZ-model of maatwerk, we checken eerst je positie.',
    includes: [
      'Check van je huidige positie',
      'ROZ-model of maatwerk',
      'Aandacht voor termijn, indexatie en opzegging',
      'Onderhandeling waar dat ruimte geeft',
      'Helder uitgelegd, zonder verrassingen',
    ],
  },
  {
    slug: 'merk',
    title: 'Merkregistratie Benelux/EU',
    tag: 'Merken & ideeën',
    tagline: 'Vooronderzoek + registratie + bewaking',
    price: '€ 1.295',
    priceLabel: 'incl. depotkosten',
    description: 'Beschermen wat je opbouwt. Inclusief vooronderzoek, registratie en bewaking.',
    icon: 'star',
    vraag: {
      q: 'Een ander gebruikt mijn merknaam. Wat kan ik doen?',
      a: 'Met een geregistreerd merk sta je sterk: een sommatie lost het vaak direct op, en zo nodig kunnen we naar de rechter. Daarom raden we aan eerst te registreren, mét vooronderzoek.',
    },
    lead: 'Bescherm wat je opbouwt. Merkregistratie in de Benelux of EU, inclusief vooronderzoek en bewaking.',
    includes: [
      'Vooronderzoek op bestaande merken',
      'Registratie in Benelux of EU',
      'Bewaking tegen inbreuk',
      'Advies over je merkstrategie',
      'Inclusief depotkosten',
    ],
  },
  {
    slug: 'aandeelhoudersovereenkomst',
    title: 'Aandeelhoudersovereenkomst',
    tag: 'Bedrijf',
    tagline: "Structuur + exit-scenario's",
    price: '€ 1.450',
    priceLabel: 'incl. structuuradvies',
    description: 'Wat als? Vastleggen wat er gebeurt bij ziekte, ruzie, exit of doorpakken.',
    icon: 'handshake',
    vraag: {
      q: 'We hebben er nooit iets over op papier gezet. Is dat erg?',
      a: 'Aan het begin niet, als het nog gezellig is. Maar juist dan leg je de vervelende vragen het makkelijkst vast: ziekte, ruzie, uittreden, doorpakken. Dat voorkomt later een hoop gedoe.',
    },
    lead: 'Vastleggen wat er gebeurt bij ziekte, ruzie, exit of doorpakken. Juist nu het nog goed gaat.',
    includes: [
      'Zeggenschap en besluitvorming',
      "Exit- en uittredingsscenario's",
      'Waardering en aandelenoverdracht',
      'Regeling bij ziekte of overlijden',
      'Inclusief structuuradvies',
    ],
  },
  {
    slug: 'scheiding',
    title: 'Zakelijke Scheiding',
    tag: 'Bedrijf',
    tagline: 'Compagnon of partner uittreden',
    price: 'vanaf € 1.950',
    priceLabel: 'volledig traject',
    description: 'Uit elkaar als ondernemers, zonder dat de zaak in de problemen komt. Met oog voor waardering, voortzetting en de mensen.',
    icon: 'family',
    vraag: {
      q: 'Mijn compagnon wil eruit stappen. Hoe regel ik dat zonder ruzie?',
      a: 'Met een uittredingsregeling op basis van wat in jullie aandeelhoudersovereenkomst staat, of, als die er niet is, een nieuwe afspraak. We zorgen dat de waardering klopt en de onderneming door kan.',
    },
    lead: 'Uit elkaar als ondernemers, zonder dat de zaak in de problemen komt. Met oog voor waardering, voortzetting en de mensen.',
    includes: [
      'Uittredingsregeling voor de vertrekkende partner',
      'Waardering van de onderneming',
      'Afspraken over voortzetting',
      'Aandacht voor de onderlinge relatie',
      'Begeleiding van begin tot eind',
    ],
  },
  {
    slug: 'uwv',
    title: 'Ontslagdossier UWV',
    tag: 'Arbeid',
    tagline: 'Compleet dossier UWV',
    price: '€ 1.395',
    priceLabel: 'vaste prijs',
    description: 'Compleet dossier voor ontslagaanvraag bij langdurige ziekte of bedrijfseconomisch.',
    icon: 'folder',
    vraag: {
      q: 'Een medewerker is langdurig ziek. Mag ik na 2 jaar ontslag aanvragen?',
      a: 'Ja, dat kan via UWV. Maar er moet wél een goed re-integratiedossier liggen. We checken samen of alles correct is vastgelegd, anders is een ontslagaanvraag kansloos.',
    },
    lead: 'Een compleet ontslagdossier voor het UWV, bij langdurige ziekte of bedrijfseconomisch ontslag.',
    includes: [
      'Complete dossieropbouw',
      'Toets op re-integratieverplichtingen',
      'UWV-aanvraag voorbereid en ingediend',
      'Advies over kansen en risico\'s',
      'Vaste prijs vooraf',
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

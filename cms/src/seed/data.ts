// Seed data voor de Klarijn demo - mirrort wat in de Astro-codebase staat.
// Wordt bij eerste boot in Strapi geladen via src/index.ts bootstrap().

export const products = [
  { slug: 'arbeidscontract', title: 'Arbeidscontract Op Maat', tag: 'Arbeid', tagline: 'Volledig en cao-conform', price: '€ 595', priceLabel: 'vaste prijs', description: 'Volledig contract, helder geschreven, rekening houdend met cao en jouw werkwijze.', icon: 'contract', featured: true, displayOrder: 1 },
  { slug: 'incasso', title: 'Incasso Pakket', tag: 'Geschillen', tagline: 'No-cure-no-pay incasso', price: 'NCNP', priceLabel: 'no-cure-no-pay', description: 'Aanmaning, sommatie en zo nodig kort geding. No-cure-no-pay basis.', icon: 'gavel', featured: true, displayOrder: 2 },
  { slug: 'overdracht', title: 'Bedrijfsoverdracht Familie', tag: 'Bedrijf', tagline: 'Opvolgingstraject 18 maanden', price: 'vanaf € 2.450', priceLabel: 'traject van 18 mnd', description: "Alles geregeld voor opvolging: structuur, fiscaal, en de menselijke kant.", icon: 'briefcase', featured: true, displayOrder: 3 },
  { slug: 'algemene-voorwaarden', title: 'Algemene Voorwaarden', tag: 'Contracten', tagline: 'Branchespecifiek + jaar update', price: '€ 1.150', priceLabel: 'incl. update-recht 1 jaar', description: "Op maat voor jouw branche. Niet zo'n template van internet - eentje die houdbaar is.", icon: 'document', featured: true, displayOrder: 4 },
  { slug: 'avg-scan', title: 'AVG Compliance Scan', tag: 'Privacy', tagline: 'Praktische scan + actieplan', price: '€ 875', priceLabel: 'incl. actieplan', description: 'Wat moet je écht regelen voor de AVG? Een praktische scan zonder wollig taalgebruik.', icon: 'shield', featured: true, displayOrder: 5 },
  { slug: 'huurovereenkomst', title: 'Huurovereenkomst Bedrijfsruimte', tag: 'Vastgoed', tagline: 'ROZ-model of maatwerk', price: '€ 745', priceLabel: 'vaste prijs', description: 'ROZ-model? Of toch maatwerk? We checken je positie en zetten een sterk contract.', icon: 'house', featured: true, displayOrder: 6 },
  { slug: 'merk', title: 'Merkregistratie Benelux/EU', tag: 'IE / Merken', tagline: 'Vooronderzoek + registratie + bewaking', price: '€ 1.295', priceLabel: 'incl. depotkosten', description: 'Beschermen wat je opbouwt. Inclusief vooronderzoek, registratie en bewaking.', icon: 'star', displayOrder: 7 },
  { slug: 'aandeelhoudersovereenkomst', title: 'Aandeelhoudersovereenkomst', tag: 'Bedrijf', tagline: "Structuur + exit-scenario's", price: '€ 1.450', priceLabel: 'incl. structuuradvies', description: 'Wat als? Vastleggen wat er gebeurt bij ziekte, ruzie, exit of doorpakken.', icon: 'handshake', displayOrder: 8 },
  { slug: 'scheiding', title: 'Echtscheiding Ondernemer', tag: 'Familie', tagline: 'Met oog voor mensen én bedrijf', price: 'vanaf € 1.950', priceLabel: 'volledig traject', description: 'Apart, zonder dat de zaak in de problemen komt. Met oog voor mensen én bedrijf.', icon: 'family', displayOrder: 9 },
  { slug: 'uwv', title: 'Ontslagdossier UWV', tag: 'Arbeid', tagline: 'Compleet dossier UWV', price: '€ 1.395', priceLabel: 'vaste prijs', description: 'Compleet dossier voor ontslagaanvraag bij langdurige ziekte of bedrijfseconomisch.', icon: 'folder', displayOrder: 10 },
];

export const teamMembers = [
  { name: 'Eibert Lijnbach', role: 'Mede-oprichter · Arbeidsrecht', bio: 'Ex-bedrijfsjurist in de bouw. Bouwt liever een goed contract dan dat hij er een procedeert.', email: 'eibert@klarijn.nl', location: 'Zwolle', type: 'oprichter', photoUrl: '/img/eibert.webp', displayOrder: 1 },
  { name: 'William Beurskens', role: 'Mede-oprichter · Ondernemingsrecht', bio: 'Werkte 12 jaar als bedrijfsjurist bij familiebedrijven. Specialist in opvolging.', email: 'william@klarijn.nl', location: 'Zwolle', type: 'oprichter', photoUrl: '/img/william.jpg', displayOrder: 2 },
  { name: 'Eline Munnik', role: 'Senior · Contracten / IE', bio: 'Heeft een verleden bij een groot advocatenkantoor en is daar weggegaan om dezelfde reden als jij dit leest.', location: 'Zwolle', type: 'senior', photoUrl: '/img/stock/p2.jpg', displayOrder: 3 },
  { name: 'Joost de Bruijn', role: 'Senior · AVG / IT', bio: 'Vertaalt Europese regelgeving naar checklists die zelfs jouw boekhouder begrijpt.', location: 'Zwolle', type: 'senior', photoUrl: '/img/stock/p5.jpg', displayOrder: 4 },
  { name: 'Sven Krijnen', role: 'Senior · Contracten', location: 'Zwolle', type: 'senior', photoUrl: '/img/william.jpg', displayOrder: 5 },
  { name: 'Yvonne van Dam', role: 'Office manager', location: 'Zwolle', type: 'support', photoUrl: '/img/stock/p16.jpg', displayOrder: 6 },
];

export const dirkVraagts = [
  // Klant
  { who: 'Dirk', role: 'Aannemer · Apeldoorn', question: 'Mijn opdrachtgever betaalt al 4 maanden de factuur niet. Wat doe ik?', answer: 'Begin met een formele aanmaning met termijn van 14 dagen. Werkt dat niet, dan starten wij een incassoprocedure op no-cure-no-pay basis. Je hebt binnen 6 weken duidelijkheid.', variant: 'klant', photoUrl: '/img/stock/p14.jpg', displayOrder: 1 },
  { who: 'Eline', role: 'Cateraar · Goes', question: 'Een medewerker is langdurig ziek. Mag ik na 2 jaar ontslag aanvragen?', answer: 'Ja, dat kan via UWV. Maar er moet wél een goed re-integratiedossier liggen. We checken samen of jullie alles correct hebben vastgelegd, anders is een ontslagaanvraag kansloos.', variant: 'klant', photoUrl: '/img/stock/p11.jpg', displayOrder: 2 },
  { who: 'Joris', role: 'Mkb-directeur · Zwolle', question: 'Ik wil mijn zaak overdragen aan mijn dochter. Waar moet ik aan denken?', answer: 'Drie sporen: bedrijfsstructuur (BV/holding), fiscale faciliteiten (BOR) en de menselijke kant. We maken een tijdslijn van 18 maanden zodat je niets vergeet.', variant: 'klant', photoUrl: '/img/stock/p6.jpg', displayOrder: 3 },
  { who: 'Sandra', role: 'Schoonheidsspecialiste · Breda', question: 'Ik huur een pand maar de verhuurder wil mijn huur fors verhogen. Mag dat?', answer: 'Niet zomaar. Voor middenstandsbedrijfsruimte gelden strikte regels. We checken je contract, peilen de markthuur en onderhandelen. In 80% van de gevallen vinden we ruimte.', variant: 'klant', photoUrl: '/img/stock/p16.jpg', displayOrder: 4 },
  { who: 'Kees', role: 'Loonwerker · Friesland', question: 'Mijn compagnon wil eruit stappen. Hoe regel ik dat zonder ruzie?', answer: 'Met een uittredingsregeling op basis van wat in jullie aandeelhoudersovereenkomst staat, of, als die er niet is, een nieuwe afspraak. We zorgen dat de waardering klopt.', variant: 'klant', photoUrl: '/img/stock/p3.jpg', displayOrder: 5 },
  { who: 'Mariska', role: 'Webshop-eigenaar · Tilburg', question: "Een concurrent gebruikt mijn productfoto's. Wat zijn mijn opties?", answer: 'Auteursrecht is sterk in Nederland. We sturen een sommatie met schadebedrag. Werkt vaak direct. Zo niet, dan kort geding, in 9 van 10 keren is het na de brief al opgelost.', variant: 'klant', photoUrl: '/img/stock/p9.jpg', displayOrder: 6 },
  // Franchise
  { who: 'Rik', role: 'Jurist · momenteel in dienst', question: 'Wat verdien ik ongeveer in jaar 1 met een nieuw rayon?', answer: 'Onze pilot in Zwolle haalde in jaar 1 ~70k aan abonnementen + ~120k aan losse opdrachten. Na fee & backoffice blijft ~120-150k netto. Geen garantie, wel realistisch - we lopen samen door de cijfers.', variant: 'franchise', photoUrl: '/img/stock/p15.jpg', displayOrder: 1 },
  { who: 'Femke', role: 'Advocaat · 9 jaar arbeidsrecht', question: 'Mag ik vanuit Klarijn ook procederen?', answer: 'Ja, voor zover je toga draagt of een advocaat in je rayon-team hebt. Voor onderdelen waar geen advocatuur nodig is (~80%) doen we het natuurlijk gewoon zelf.', variant: 'franchise', photoUrl: '/img/stock/p2.jpg', displayOrder: 2 },
  { who: 'Tim', role: 'Bedrijfsjurist · familiebedrijf', question: 'Ik wil een eigen praktijk maar geen risico van een eenmansbedrijf. Hoe pak je dat?', answer: 'Dat is precies waar Klarijn op is gebouwd. Je krijgt een rayon, een merk, leadgeneratie en software. Geen eigen branding bedenken, geen eigen CRM kiezen. Wel ondernemen.', variant: 'franchise', photoUrl: '/img/stock/p7.jpg', displayOrder: 3 },
];

export const rayons = [
  { city: 'Zwolle', status: 'pilot', displayOrder: 1 },
  { city: 'Rotterdam', status: 'beschikbaar', displayOrder: 2 },
  { city: 'Eindhoven', status: 'beschikbaar', displayOrder: 3 },
  { city: 'Amsterdam', status: 'beschikbaar', displayOrder: 4 },
  { city: 'Groningen', status: 'beschikbaar', displayOrder: 5 },
  { city: 'Maastricht', status: 'beschikbaar', displayOrder: 6 },
  { city: 'Breda', status: 'beschikbaar', displayOrder: 7 },
  { city: 'Utrecht', status: 'beschikbaar', displayOrder: 8 },
  { city: 'Den Haag', status: 'beschikbaar', displayOrder: 9 },
  { city: 'Arnhem', status: 'beschikbaar', displayOrder: 10 },
  { city: 'Tilburg', status: 'beschikbaar', displayOrder: 11 },
  { city: 'Apeldoorn', status: 'voorbereiding', displayOrder: 12 },
  { city: 'Leeuwarden', status: 'voorbereiding', displayOrder: 13 },
  { city: 'Nijmegen', status: 'voorbereiding', displayOrder: 14 },
];

export const testimonials = [
  { quote: 'Ik bel Klarijn als ik twijfel. Geen "even afspraak inplannen", geen dossiernummer. Gewoon antwoord. Voor mij scheelt dat een hoop tijd én onrust.', author: 'Dirk-Jan van der Velde', role: 'Eigenaar Bouwbedrijf Van der Velde', location: 'Apeldoorn', photoUrl: '/img/stock/p3.jpg', scenePhotoUrl: '/img/stock/scene-handshake.jpg', featured: true },
  { quote: "Vroeger zocht ik op Google en hoopte op het beste. Nu app ik m'n jurist en heb ik binnen het uur antwoord. Ik heb afgelopen jaar twee keer een fout voorkomen die me tonnen had gekost.", author: 'Marjon Verstegen', role: 'Directeur Verstegen Verpakkingen', location: 'Roermond', photoUrl: '/img/stock/scene-laughing.jpg', featured: true },
  { quote: 'Ik ben zelf opgegroeid op een melkveebedrijf. Voor de buren zonder bedrijfsjurist was er nooit ruimte om bij een advocaat aan te kloppen. Daar zit voor mij de drive achter Klarijn: praktische juridische hulp die echt landt in de schuur - niet alleen op papier.', author: 'Eibert Lijnbach', role: 'Rayonhouder Klarijn Zwolle', location: 'Zwolle', photoUrl: '/img/eibert.webp', featured: false },
];

export const decisionQuestions = [
  { question: 'Heb je minimaal 3 jaar werkervaring als jurist of bedrijfsjurist?', answerOptions: [{ label: 'Ja', score: 1 }, { label: 'Nog niet, maar wel verwante ervaring', score: 0 }, { label: 'Nee', score: -2 }], displayOrder: 1 },
  { question: 'Wat past het beste bij jou?', answerOptions: [{ label: 'Ik wil ondernemen, mijn eigen praktijk opbouwen', score: 2 }, { label: 'Ik wil zelfstandig werken, maar liever zonder de hele last', score: 1 }, { label: 'Ik werk liever in loondienst', score: -2 }], displayOrder: 2 },
  { question: 'Hoeveel uur per week wil je in je praktijk steken?', answerOptions: [{ label: '32+ uur (volwaardig)', score: 2 }, { label: '20-32 uur', score: 1 }, { label: 'Minder dan 20 uur', score: -1 }], displayOrder: 3 },
  { question: 'Welke werkwijze spreekt jou aan?', answerOptions: [{ label: 'Praktisch, direct, no-nonsense', score: 2 }, { label: 'Gemixt - soms strategisch, soms uitvoerend', score: 1 }, { label: 'Vooral procederen en juridische geschillen', score: -1 }], displayOrder: 4 },
  { question: 'Hoe sta je tegenover een franchiseformule?', answerOptions: [{ label: 'Top: gedeelde merknaam, eigen rayon, samen sterk', score: 2 }, { label: 'Open, mits ik genoeg vrijheid hou', score: 1 }, { label: 'Liever volledig onafhankelijk', score: -2 }], displayOrder: 5 },
  { question: 'Heb je affiniteit met ondernemers in mkb / familiebedrijven / maakindustrie?', answerOptions: [{ label: 'Ja, mijn voorkeursdoelgroep', score: 2 }, { label: 'Beetje, ik werk breder', score: 1 }, { label: 'Niet echt', score: -1 }], displayOrder: 6 },
  { question: 'Wat vind je van marketing & acquisitie?', answerOptions: [{ label: 'Leuk, daar draai ik graag aan', score: 1 }, { label: 'Niet mijn favoriet - graag ondersteuning', score: 1 }, { label: 'Heb er geen affiniteit mee', score: -1 }], displayOrder: 7 },
  { question: 'Heb je interesse in een specialisatie naast generieke ondernemerszaken?', answerOptions: [{ label: 'Ja: arbeidsrecht / contracten / IE / privacy', score: 2 }, { label: 'Misschien - eerst breed beginnen', score: 1 }, { label: 'Geen sterke voorkeur', score: 0 }], displayOrder: 8 },
  { question: 'Hoe sta je tegenover een vaste backoffice voor automatisering en ondersteuning?', answerOptions: [{ label: 'Onmisbaar - daar wil ik mijn tijd niet aan kwijt', score: 2 }, { label: 'Handig, mits ik er invloed op heb', score: 1 }, { label: 'Liever zelf alles regelen', score: -1 }], displayOrder: 9 },
  { question: 'In welke regio wil je een rayon opbouwen?', answerOptions: [{ label: 'Ik heb een specifieke regio voor ogen', score: 2 }, { label: 'Ik ben flexibel', score: 1 }, { label: 'Weet ik nog niet', score: 0 }], displayOrder: 10 },
];

export const offices = [
  { name: 'Klarijn Zwolle', city: 'Zwolle', address: 'Voorbeeldstraat 12', postalCode: '8011 AB', phone: '038 222 00 00', email: 'zwolle@klarijn.nl', hours: 'Ma-Do · 08.30 - 17.30\nVrijdag · 08.30 - 16.00\nOp afspraak ook \'s avonds', serviceAreas: [{ city: 'Zwolle' }, { city: 'Kampen' }, { city: 'Apeldoorn' }, { city: 'Hattem' }, { city: 'Deventer' }], intro: 'Het Klarijn-kantoor Zwolle bedient ondernemers in IJsselland, Veluwe en Salland. Op afspraak ontvangen we je op kantoor; veel werk doen we online of telefonisch. We rijden ook graag de provincie in als dat handig is.', quote: 'Ik ben zelf opgegroeid op een melkveebedrijf. Voor de buren zonder bedrijfsjurist was er nooit ruimte om bij een advocaat aan te kloppen. Daar zit voor mij de drive achter Klarijn: praktische juridische hulp die echt landt in de schuur - niet alleen op papier.', quoteAuthorName: 'Eibert Lijnbach' },
];

export const siteSettings = {
  abonnementPriceMonthly: 145,
  contactPhonePrimary: '06-51180138',
  contactPhoneSecondary: '06-10903140',
  contactEmailMain: 'vraaghet@klarijn.nl',
  contactEmailBestelling: 'bestelling@klarijn.nl',
  mijnVoortgangUrl: 'https://portal.klarijn.nl',
  companySlogan: 'Vraag het Klarijn',
  companyDescription: 'Helderheid in juridische oplossingen. Voor mkb, familiebedrijven en de maakindustrie.',
};

export const homepageContent = {
  heroTitle: 'Vraag het\nKlarijn',
  heroLead: 'Praktisch juridisch advies voor ondernemers met de voeten in de klei. Geen ivoren toren, wel heldere antwoorden van een vaste jurist die jouw zaak kent.',
  heroCtaPrimaryLabel: 'Bekijk oplossingen',
  heroCtaPrimaryHref: '/oplossingen',
  heroCtaSecondaryLabel: 'Direct contact',
  heroCtaSecondaryHref: '/contact',
  marqueeItems: [
    { text: 'Vraag het Klarijn' },
    { text: 'Helderheid in juridische oplossingen' },
    { text: 'Voor doeners, niet voor advocaten' },
    { text: 'Geen jargon. Wel resultaat.' },
  ],
  stats: [
    { value: '14', label: 'Vaste juristen' },
    { value: '847', label: 'Klanten' },
    { value: '12', label: 'Specialismen' },
  ],
};

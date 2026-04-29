export type Product = {
  slug: string;
  title: string;
  tag: string;
  tagline: string;
  price: string;
  priceLabel: string;
  description: string;
  icon: 'contract' | 'gavel' | 'briefcase' | 'document' | 'shield' | 'house' | 'star' | 'handshake' | 'family' | 'folder';
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
  },
  {
    slug: 'algemene-voorwaarden',
    title: 'Algemene Voorwaarden',
    tag: 'Contracten',
    tagline: 'Branchespecifiek + jaar update',
    price: '€ 1.150',
    priceLabel: 'incl. update-recht 1 jaar',
    description: "Op maat voor jouw branche. Niet zo'n template van internet — eentje die houdbaar is.",
    icon: 'document',
  },
  {
    slug: 'avg-scan',
    title: 'AVG Compliance Scan',
    tag: 'Privacy',
    tagline: 'Praktische scan + actieplan',
    price: '€ 875',
    priceLabel: 'incl. actieplan',
    description: 'Wat moet je écht regelen voor de AVG? Een praktische scan zonder wollig taalgebruik.',
    icon: 'shield',
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
  },
  {
    slug: 'merk',
    title: 'Merkregistratie Benelux/EU',
    tag: 'IE / Merken',
    tagline: 'Vooronderzoek + registratie + bewaking',
    price: '€ 1.295',
    priceLabel: 'incl. depotkosten',
    description: 'Beschermen wat je opbouwt. Inclusief vooronderzoek, registratie en bewaking.',
    icon: 'star',
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
  },
  {
    slug: 'scheiding',
    title: 'Echtscheiding Ondernemer',
    tag: 'Familie',
    tagline: 'Met oog voor mensen én bedrijf',
    price: 'vanaf € 1.950',
    priceLabel: 'volledig traject',
    description: 'Apart, zonder dat de zaak in de problemen komt. Met oog voor mensen én bedrijf.',
    icon: 'family',
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
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

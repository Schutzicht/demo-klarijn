export type Answer = {
  label: string;
  score: number;
};
export type Question = {
  q: string;
  a: Answer[];
};

export const questions: Question[] = [
  {
    q: 'Heb je minimaal 3 jaar werkervaring als jurist of bedrijfsjurist?',
    a: [
      { label: 'Ja', score: 1 },
      { label: 'Nog niet, maar wel verwante ervaring', score: 0 },
      { label: 'Nee', score: -2 },
    ],
  },
  {
    q: 'Wat past het beste bij jou?',
    a: [
      { label: 'Ik wil ondernemen, mijn eigen praktijk opbouwen', score: 2 },
      { label: 'Ik wil zelfstandig werken, maar liever zonder de hele last', score: 1 },
      { label: 'Ik werk liever in loondienst', score: -2 },
    ],
  },
  {
    q: 'Hoeveel uur per week wil je in je praktijk steken?',
    a: [
      { label: '32+ uur (volwaardig)', score: 2 },
      { label: '20–32 uur', score: 1 },
      { label: 'Minder dan 20 uur', score: -1 },
    ],
  },
  {
    q: 'Welke werkwijze spreekt jou aan?',
    a: [
      { label: 'Praktisch, direct, no-nonsense', score: 2 },
      { label: 'Gemixt - soms strategisch, soms uitvoerend', score: 1 },
      { label: 'Vooral procederen en juridische geschillen', score: -1 },
    ],
  },
  {
    q: 'Hoe sta je tegenover een franchiseformule?',
    a: [
      { label: 'Top: gedeelde merknaam, eigen rayon, samen sterk', score: 2 },
      { label: 'Open, mits ik genoeg vrijheid hou', score: 1 },
      { label: 'Liever volledig onafhankelijk', score: -2 },
    ],
  },
  {
    q: 'Heb je affiniteit met ondernemers in mkb / familiebedrijven / maakindustrie?',
    a: [
      { label: 'Ja, mijn voorkeursdoelgroep', score: 2 },
      { label: 'Beetje, ik werk breder', score: 1 },
      { label: 'Niet echt', score: -1 },
    ],
  },
  {
    q: 'Wat vind je van marketing & acquisitie?',
    a: [
      { label: 'Leuk, daar draai ik graag aan', score: 1 },
      { label: 'Niet mijn favoriet - graag ondersteuning', score: 1 },
      { label: 'Heb er geen affiniteit mee', score: -1 },
    ],
  },
  {
    q: 'Heb je interesse in een specialisatie naast generieke ondernemerszaken?',
    a: [
      { label: 'Ja: arbeidsrecht / contracten / IE / privacy', score: 2 },
      { label: 'Misschien - eerst breed beginnen', score: 1 },
      { label: 'Geen sterke voorkeur', score: 0 },
    ],
  },
  {
    q: 'Hoe sta je tegenover een vaste backoffice voor automatisering en ondersteuning?',
    a: [
      { label: 'Onmisbaar - daar wil ik mijn tijd niet aan kwijt', score: 2 },
      { label: 'Handig, mits ik er invloed op heb', score: 1 },
      { label: 'Liever zelf alles regelen', score: -1 },
    ],
  },
  {
    q: 'In welke regio wil je een rayon opbouwen?',
    a: [
      { label: 'Ik heb een specifieke regio voor ogen', score: 2 },
      { label: 'Ik ben flexibel', score: 1 },
      { label: 'Weet ik nog niet', score: 0 },
    ],
  },
];

export const matchThreshold = 8;

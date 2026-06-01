export type Answer = {
  label: string;
  score: number;
};
export type Question = {
  q: string;
  a: Answer[];
};

// Match-test voor franchise-juristen. Volgorde en vragen herzien op basis van de
// strategiesessie: na de harde drempels (ervaring, ondernemerschap) draait het om
// de Klarijn-mentaliteit, oplossen boven winnen, loskomen van het juridische
// gereedschap, relationeel denken en gewoon Nederlands. Daarna pas de praktische
// punten (backoffice/franchise, tijd, regio).
export const questions: Question[] = [
  {
    q: 'Heb je minimaal 3 jaar werkervaring als jurist of bedrijfsjurist?',
    a: [
      { label: 'Ja', score: 1 },
      { label: 'Nog niet, maar wel verwante ervaring', score: 0 },
      { label: 'Nee', score: -3 },
    ],
  },
  {
    q: 'Wat past het beste bij jou?',
    a: [
      { label: 'Ik wil ondernemen en een eigen praktijk opbouwen', score: 2 },
      { label: 'Zelfstandig werken, maar zonder de hele rompslomp', score: 1 },
      { label: 'Ik werk liever in loondienst', score: -3 },
    ],
  },
  {
    q: 'Een klant heeft een conflict. Wat is je eerste reflex?',
    a: [
      { label: 'Vragen wat hij écht wil bereiken, procederen is het laatste middel', score: 2 },
      { label: 'Het hangt van de zaak af', score: 1 },
      { label: 'Meteen de juridische strijd aangaan en winnen', score: -2 },
    ],
  },
  {
    q: 'Hoe sta je tegenover je eigen vakkennis bij een nieuwe vraag?',
    a: [
      { label: 'Ik kijk eerst breed: wat heeft deze ondernemer nodig?', score: 2 },
      { label: 'Ik begin juridisch, maar sta open voor andere wegen', score: 1 },
      { label: 'Ik grijp meteen naar mijn juridische gereedschap', score: -1 },
    ],
  },
  {
    q: 'Wat geeft jou meer energie?',
    a: [
      { label: 'Langdurige klantrelaties opbouwen en meegroeien', score: 2 },
      { label: 'Een mix van vaste klanten en losse zaken', score: 1 },
      { label: 'Het liefst zaak voor zaak, zonder binding', score: -1 },
    ],
  },
  {
    q: 'Heb je affiniteit met doeners: mkb, familiebedrijven en maakindustrie?',
    a: [
      { label: 'Ja, dat is mijn wereld', score: 2 },
      { label: 'Een beetje, ik werk breder', score: 1 },
      { label: 'Niet echt', score: -1 },
    ],
  },
  {
    q: 'Kun je juridische zaken in gewoon Nederlands uitleggen?',
    a: [
      { label: 'Ja, dat is juist mijn kracht', score: 2 },
      { label: 'Meestal wel, ik let erop', score: 1 },
      { label: 'Ik blijf eerlijk gezegd liever bij vaktaal', score: -1 },
    ],
  },
  {
    q: 'Hoe sta je tegenover een gedeeld merk met een backoffice die marketing, IT en administratie regelt?',
    a: [
      { label: 'Top: eigen rayon, samen sterk, ik focus op het werk', score: 2 },
      { label: 'Open, mits ik genoeg vrijheid en invloed hou', score: 1 },
      { label: 'Liever volledig onafhankelijk, alles zelf', score: -2 },
    ],
  },
  {
    q: 'Hoeveel uur per week wil je in je praktijk steken?',
    a: [
      { label: '32+ uur (volwaardig)', score: 2 },
      { label: '20 tot 32 uur', score: 1 },
      { label: 'Minder dan 20 uur', score: -1 },
    ],
  },
  {
    q: 'Heb je een regio voor ogen om een rayon op te bouwen?',
    a: [
      { label: 'Ja, ik weet al waar', score: 1 },
      { label: 'Ik ben flexibel', score: 1 },
      { label: 'Weet ik nog niet', score: 0 },
    ],
  },
];

// Maximaal haalbaar is 18. Vanaf 10 spreken we van een duidelijke match.
export const matchThreshold = 10;

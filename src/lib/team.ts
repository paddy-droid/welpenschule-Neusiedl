const WK = 'https://www.willenskraft.co.at';

export interface TeamMember {
  name: string;
  role: string;
  region: string;
  image: string;
  bio: string;
  href: string;
  /** true = Jessy (lokale Trainerin dieser Seite) */
  local?: boolean;
  /** true = Gründerin */
  founder?: boolean;
}

/** Das öffentliche Trainer:innen-Team der Hundeschule Willenskraft (+ Gründerin). */
export const team: TeamMember[] = [
  {
    name: 'Bianca Oriana Willen',
    role: 'Gründerin & Inhaberin · CBATI-KSA',
    region: 'Österreichweit & Online-Hundeschule',
    image: `${WK}/wp-content/uploads/2026/07/willenskraft-bianca-oriana-willen-profil-300x300.jpg`,
    bio: 'Gründete Willenskraft und bildet heute selbst Hundetrainer:innen aus. Begleitet seit über 15 Jahren Mensch-Hund-Teams — gewaltfrei, wissenschaftlich fundiert, nach dem LIFE-Modell. Ihre Hunde: Viola & Venice.',
    href: `${WK}/bianca-willen-hundeschule/`,
    founder: true,
  },
  {
    name: 'Ing. Jessy Pusch',
    role: 'Hundetrainerin — Neusiedl am See & Nordburgenland',
    region: 'Bezirk Neusiedl am See, Bruck & Nordburgenland',
    image: `${WK}/wp-content/uploads/2025/06/Jessica-Pusch-Hundeschule-Wien-Niederoesterreich.webp`,
    bio: 'Deine Trainerin vor Ort. Mobile Hundetrainerin für den Bezirk Neusiedl am See — Biochemikerin (Ing.), Willenskraft-zertifiziert und Akademie-Dozentin. Sie kommt zum Training direkt zu dir nach Hause.',
    href: '/kontakt',
    local: true,
  },
  {
    name: 'Martha Verena Höhr',
    role: 'Hundetrainerin · Standort Graz',
    region: 'Graz & Steiermark',
    image: `${WK}/wp-content/uploads/2025/02/Martha-Hoehr-Hundeschule-Willenskraft-Sachkundenachweis.webp`,
    bio: 'Leitet den Standort Graz. Studierte Ökologin, Willenskraft-Ausbildung mit Auszeichnung. Ihr Schwerpunkt: Welpen, Junghunde und Tierschutzhunde.',
    href: `${WK}/graz-und-umgebung-martha-hoehr/`,
  },
  {
    name: 'Katrin Ladler',
    role: 'Hundetrainerin & Tierkommunikatorin',
    region: 'Donauregion — Tulln, St. Pölten, Krems',
    image: `${WK}/wp-content/uploads/2026/06/katrin-ladler-mobiles-hundetraining-wagram-tulln.jpg`,
    bio: 'Leitet den Standort Donauregion rund um Tulln und den Wagram — gewaltfrei nach dem LIFE-Modell, zusätzlich als Tierkommunikatorin.',
    href: 'https://hundeschule-tulln.at',
  },
];

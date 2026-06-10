import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/andau';

export const metadata: Metadata = {
  title: 'Hundeschule Andau | Mobil im Seewinkel-Süden',
  description:
    'Hundeschule Andau ✓ wir kommen zu dir nach Hause ✓ pannonische Stille an der Grenze ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Andau', 'Hundetrainer Andau', 'Mobiles Hundetraining Andau', 'Welpenkurs Andau Burgenland'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Andau | Mobil im Seewinkel-Süden',
    description: 'Hundeschule Andau ✓ Andauer Brücke & Grenzwege ✓ mobil & gewaltfrei ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function AndauLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

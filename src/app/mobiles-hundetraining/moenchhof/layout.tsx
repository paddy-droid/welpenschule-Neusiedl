import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/moenchhof';

export const metadata: Metadata = {
  title: 'Hundeschule Mönchhof | Mobiles Training im Heideboden',
  description:
    'Hundeschule Mönchhof ✓ wir kommen zu dir nach Hause ✓ Heideboden & Dorfmuseum ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Mönchhof', 'Hundetrainer Mönchhof', 'Mobiles Hundetraining Mönchhof', 'Welpentraining Mönchhof Seewinkel'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Mönchhof | Mobiles Training im Heideboden',
    description: 'Hundeschule Mönchhof ✓ mobil bei dir zuhause ✓ Heideboden & Riedwege ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function MoenchhofLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

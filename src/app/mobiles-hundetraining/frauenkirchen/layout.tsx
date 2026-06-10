import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/frauenkirchen';

export const metadata: Metadata = {
  title: 'Hundeschule Frauenkirchen | Mobil & gewaltfrei',
  description:
    'Hundeschule Frauenkirchen ✓ wir kommen zu dir nach Hause ✓ Heideboden & Wallfahrtsort ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Frauenkirchen', 'Hundetrainer Frauenkirchen', 'Mobiles Hundetraining Frauenkirchen', 'Welpenkurs Frauenkirchen'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Frauenkirchen | Mobil & gewaltfrei',
    description: 'Hundeschule Frauenkirchen ✓ Heideboden & Wallfahrtsort ✓ mobil & gewaltfrei ✓ Willenskraft.',
    url,
    type: 'website',
  },
};

export default function FrauenkirchenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

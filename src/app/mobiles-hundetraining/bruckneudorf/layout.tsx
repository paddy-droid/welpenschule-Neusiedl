import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/bruckneudorf';

export const metadata: Metadata = {
  title: 'Hundeschule Bruckneudorf | Mobil & gewaltfrei',
  description:
    'Hundeschule Bruckneudorf ✓ wir kommen zu dir nach Hause ✓ Leitha-Auen & Parndorfer Platte ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Bruckneudorf', 'Hundetrainer Bruckneudorf', 'Mobiles Hundetraining Bruckneudorf', 'Hundeschule Bruck an der Leitha Umgebung'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Bruckneudorf | Mobil & gewaltfrei',
    description: 'Hundeschule Bruckneudorf ✓ mobil bei dir zuhause ✓ Leitha-Auen & Heide ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function BruckneudorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/pamhagen';

export const metadata: Metadata = {
  title: 'Hundeschule Pamhagen | Mobil im Süd-Seewinkel',
  description:
    'Hundeschule Pamhagen ✓ wir kommen zu dir nach Hause ✓ Hanság-Wiesen & Steppentierpark ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Pamhagen', 'Hundetrainer Pamhagen', 'Mobiles Hundetraining Pamhagen', 'Welpentraining Pamhagen Seewinkel'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Pamhagen | Mobil im Süd-Seewinkel',
    description: 'Hundeschule Pamhagen ✓ mobil bei dir zuhause ✓ Hanság & Grenzwege ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function PamhagenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

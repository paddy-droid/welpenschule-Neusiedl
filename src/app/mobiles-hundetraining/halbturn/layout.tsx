import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/halbturn';

export const metadata: Metadata = {
  title: 'Hundeschule Halbturn | Mobil im Schlossort',
  description:
    'Hundeschule Halbturn ✓ wir kommen zu dir nach Hause ✓ Schlosspark, Weingärten & Heideboden ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Halbturn', 'Hundetrainer Halbturn', 'Mobiles Hundetraining Halbturn', 'Welpentraining Halbturn Seewinkel'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Halbturn | Mobil im Schlossort',
    description: 'Hundeschule Halbturn ✓ mobil bei dir zuhause ✓ Schloss & Heideboden ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function HalbturnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

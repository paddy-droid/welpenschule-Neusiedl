import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/kittsee';

export const metadata: Metadata = {
  title: 'Hundeschule Kittsee | Mobil im Dreiländereck',
  description:
    'Hundeschule Kittsee ✓ wir kommen zu dir nach Hause ✓ Marillengärten, Schlosspark & Bratislava-Nähe ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Kittsee', 'Hundetrainer Kittsee', 'Mobiles Hundetraining Kittsee', 'Welpentraining Kittsee Burgenland'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Kittsee | Mobil im Dreiländereck',
    description: 'Hundeschule Kittsee ✓ mobil bei dir zuhause ✓ Marillengärten & Schlosspark ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function KittseeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

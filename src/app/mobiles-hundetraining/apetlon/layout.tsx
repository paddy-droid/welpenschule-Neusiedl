import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/apetlon';

export const metadata: Metadata = {
  title: 'Hundeschule Apetlon | Nationalpark & Lange Lacke',
  description:
    'Hundeschule Apetlon ✓ wir kommen zu dir nach Hause ✓ Lange Lacke & Nationalpark Seewinkel ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Apetlon', 'Hundetrainer Apetlon', 'Mobiles Hundetraining Apetlon', 'Welpentraining Apetlon Seewinkel'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Apetlon | Nationalpark & Lange Lacke',
    description: 'Hundeschule Apetlon ✓ mobil bei dir zuhause ✓ Lange Lacke & Hutweiden ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function ApetlonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

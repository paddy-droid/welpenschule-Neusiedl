import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/st-andrae-am-zicksee';

export const metadata: Metadata = {
  title: 'Hundeschule St. Andrä am Zicksee | Mobil & gewaltfrei',
  description:
    'Hundeschule St. Andrä am Zicksee ✓ wir kommen zu dir nach Hause ✓ Zicksee-Rundweg & Seewinkel ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule St. Andrä am Zicksee', 'Hundetrainer St. Andrä', 'Mobiles Hundetraining St. Andrä am Zicksee', 'Welpentraining Zicksee'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule St. Andrä am Zicksee | Mobil & gewaltfrei',
    description: 'Hundeschule St. Andrä ✓ mobil bei dir zuhause ✓ Zicksee & Seewinkel ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function StAndraeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/winden-am-see';

export const metadata: Metadata = {
  title: 'Hundeschule Winden am See | Mobil & gewaltfrei',
  description:
    'Hundeschule Winden am See ✓ wir kommen zu dir nach Hause ✓ Kirschblütenort am Leithagebirge ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Winden am See', 'Hundetrainer Winden am See', 'Mobiles Hundetraining Winden', 'Welpentraining Winden am See'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Winden am See | Mobil & gewaltfrei',
    description: 'Hundeschule Winden am See ✓ mobil bei dir zuhause ✓ Leithagebirge & Kellergassen ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function WindenAmSeeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/podersdorf-am-see';

export const metadata: Metadata = {
  title: 'Hundeschule Podersdorf am See | Mobil & gewaltfrei',
  description:
    'Hundeschule Podersdorf am See ✓ wir kommen zu dir nach Hause ✓ Leuchtturm, Strandbad & Hutweide ✓ mobiles 1:1-Training ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Podersdorf am See', 'Hundetrainer Podersdorf', 'Mobiles Hundetraining Podersdorf', 'Welpentraining Podersdorf am See'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Podersdorf am See | Mobil & gewaltfrei',
    description: 'Hundeschule Podersdorf ✓ mobil bei dir zuhause ✓ Leuchtturm & Hutweide ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function PodersdorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/parndorf';

export const metadata: Metadata = {
  title: 'Hundeschule Parndorf | Mobiles Training Burgenland',
  description:
    'Hundeschule Parndorf ✓ wir kommen zu dir nach Hause ✓ Parndorfer Platte & Outlet ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Parndorf', 'Hundetrainer Parndorf', 'Mobiles Hundetraining Parndorf', 'Welpenkurs Parndorf Burgenland'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Parndorf | Mobiles Training Burgenland',
    description: 'Hundeschule Parndorf ✓ Parndorfer Platte & Outlet ✓ mobil & gewaltfrei ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function ParndorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

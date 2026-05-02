import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/illmitz';

export const metadata: Metadata = {
  title: 'Hundeschule Illmitz | Nationalpark Seewinkel',
  description:
    'Hundeschule Illmitz ✓ Nationalpark Neusiedler See ✓ Lacken-Landschaft ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Illmitz', 'Hundetrainer Illmitz', 'Mobiles Hundetraining Seewinkel', 'Welpenkurs Illmitz'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Illmitz | Nationalpark Seewinkel',
    description: 'Hundeschule Illmitz ✓ Nationalpark & Lacken ✓ mobil & gewaltfrei ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function IllmitzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

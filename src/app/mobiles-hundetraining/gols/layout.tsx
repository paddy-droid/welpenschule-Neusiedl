import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/gols';

export const metadata: Metadata = {
  title: 'Hundeschule Gols | Mobil & gewaltfrei am Weingolf',
  description:
    'Hundeschule Gols ✓ Burgenlands Weinhauptort ✓ Weinberge & Heideboden ✓ mobiles 1:1-Training ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Gols', 'Hundetrainer Gols', 'Mobiles Hundetraining Gols', 'Welpenkurs Gols Burgenland'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Gols | Mobil & gewaltfrei am Weingolf',
    description: 'Hundeschule Gols ✓ Weinberge & Heideboden ✓ mobil & gewaltfrei ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function GolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

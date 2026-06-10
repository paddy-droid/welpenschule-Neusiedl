import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/jois';

export const metadata: Metadata = {
  title: 'Hundeschule Jois | Mobiles Training am Leithagebirge',
  description:
    'Hundeschule Jois ✓ wir kommen zu dir nach Hause ✓ Weinriede, Hackelsberg & Seeblick ✓ mobiles 1:1-Hundetraining ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Jois', 'Hundetrainer Jois', 'Mobiles Hundetraining Jois', 'Welpentraining Jois Burgenland'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Jois | Mobiles Training am Leithagebirge',
    description: 'Hundeschule Jois ✓ mobil bei dir zuhause ✓ Weinriede & Hackelsberg ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function JoisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

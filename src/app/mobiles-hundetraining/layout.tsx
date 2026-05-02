import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining';

export const metadata: Metadata = {
  title: 'Hundeschule Neusiedl am See | Welpenkurs & mobil',
  description:
    'Hundeschule Neusiedl am See ✓ Welpenkurs ab 195€ ✓ mobiles 1:1-Training am UNESCO-Welterbe ✓ Willenskraft. ☎ +43 664 3903673',
  keywords: [
    'Hundeschule Neusiedl am See',
    'Hundetrainer Neusiedl',
    'Welpenkurs Neusiedl am See',
    'Mobiles Hundetraining Burgenland',
    'Welpenschule Neusiedl',
    'Willenskraft Neusiedl',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Neusiedl am See | Welpenkurs & mobil',
    description:
      'Hundeschule Neusiedl am See ✓ Welpenkurs ab 195€ ✓ mobiles Training am UNESCO-Welterbe ✓ Willenskraft.',
    url,
    type: 'website',
  },
};

export default function MobileTrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

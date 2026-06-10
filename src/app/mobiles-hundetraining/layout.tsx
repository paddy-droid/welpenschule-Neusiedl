import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Neusiedl am See | Hundetrainer Willenskraft',
  description:
    'Mobiles Hundetraining & Hundetrainer Neusiedl am See ✓ wir kommen zu dir nach Hause ✓ Einzeltraining, Welpentraining & Verhaltensberatung ✓ Willenskraft. ☎ +43 664 3903673',
  keywords: [
    'Mobiles Hundetraining Neusiedl am See',
    'Hundetrainer Neusiedl am See',
    'Hundeschule Neusiedl am See',
    'Mobiles Hundetraining Burgenland',
    'Mobile Hundeschule Seewinkel',
    'Willenskraft Neusiedl',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Mobiles Hundetraining Neusiedl am See | Hundetrainer Willenskraft',
    description:
      'Mobiles Hundetraining Neusiedl am See ✓ wir kommen zu dir nach Hause ✓ gewaltfrei & ganzheitlich ✓ Willenskraft.',
    url,
    type: 'website',
  },
};

export default function MobileTrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

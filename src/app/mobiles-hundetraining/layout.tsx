import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining';

const title = 'Mobiles Hundetraining Neusiedl am See | Willenskraft';
const description =
  'Mobiles Hundetraining Neusiedl am See: Einzeltraining bei dir zuhause ✓ Welpe bis Senior ✓ gewaltfrei ✓ Anfahrt gratis. ☎ 0664 3903673';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'Mobiles Hundetraining Neusiedl am See',
    'Hundetrainer Neusiedl am See',
    'Hundeschule Neusiedl am See',
    'Mobiles Hundetraining Burgenland',
    'Mobile Hundeschule Seewinkel',
    'Willenskraft Neusiedl',
  ],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function MobileTrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

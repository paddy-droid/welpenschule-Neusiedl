import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/apetlon';
const title = 'Hundeschule Apetlon – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Apetlon: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Lange Lacke. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Apetlon', 'Hundetrainer Apetlon', 'Mobiles Hundetraining Apetlon', 'Welpentraining Apetlon Seewinkel'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function ApetlonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

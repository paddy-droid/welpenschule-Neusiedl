import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/andau';
const title = 'Hundeschule Andau – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Andau: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Stille & Grenzwege. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Andau', 'Hundetrainer Andau', 'Mobiles Hundetraining Andau', 'Welpentraining Andau Seewinkel'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function AndauLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/moenchhof';
const title = 'Hundeschule Mönchhof – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Mönchhof: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Heideboden & Riede. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Mönchhof', 'Hundetrainer Mönchhof', 'Mobiles Hundetraining Mönchhof', 'Welpentraining Mönchhof Seewinkel'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function MoenchhofLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

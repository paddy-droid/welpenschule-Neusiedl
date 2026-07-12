import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/illmitz';
const title = 'Hundeschule Illmitz – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Illmitz: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Nationalpark Seewinkel. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Illmitz', 'Hundetrainer Illmitz', 'Mobiles Hundetraining Seewinkel', 'Welpentraining Illmitz'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function IllmitzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

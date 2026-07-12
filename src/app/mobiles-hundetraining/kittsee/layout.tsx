import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/kittsee';
const title = 'Hundeschule Kittsee – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Kittsee: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Dreiländereck. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Kittsee', 'Hundetrainer Kittsee', 'Mobiles Hundetraining Kittsee', 'Welpentraining Kittsee Burgenland'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function KittseeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

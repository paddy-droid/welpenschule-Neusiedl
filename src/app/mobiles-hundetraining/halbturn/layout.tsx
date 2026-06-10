import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/halbturn';
const title = 'Hundeschule Halbturn – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Halbturn: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Schloss & Steppe. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Halbturn', 'Hundetrainer Halbturn', 'Mobiles Hundetraining Halbturn', 'Welpentraining Halbturn Seewinkel'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function HalbturnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

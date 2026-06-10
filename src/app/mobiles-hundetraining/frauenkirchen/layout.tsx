import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/frauenkirchen';
const title = 'Hundeschule Frauenkirchen – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Frauenkirchen: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Heideboden. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Frauenkirchen', 'Hundetrainer Frauenkirchen', 'Mobiles Hundetraining Frauenkirchen', 'Welpentraining Frauenkirchen'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function FrauenkirchenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

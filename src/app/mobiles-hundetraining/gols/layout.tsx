import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/gols';
const title = 'Hundeschule Gols – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Gols: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Weinberge & Heideboden. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Gols', 'Hundetrainer Gols', 'Mobiles Hundetraining Gols', 'Welpentraining Gols Burgenland'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function GolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/weiden-am-see';
const title = 'Hundeschule Weiden am See – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Weiden am See: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Seeufer & Riede. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Weiden am See', 'Hundetrainer Weiden am See', 'Mobiles Hundetraining Weiden', 'Welpentraining Weiden am See'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function WeidenAmSeeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

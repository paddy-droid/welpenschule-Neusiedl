import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/winden-am-see';
const title = 'Hundeschule Winden am See – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Winden am See: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Kirschblütenort. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Winden am See', 'Hundetrainer Winden am See', 'Mobiles Hundetraining Winden', 'Welpentraining Winden am See'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function WindenAmSeeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/jois';
const title = 'Hundeschule Jois – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Jois: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Leithagebirge & Riede. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Jois', 'Hundetrainer Jois', 'Mobiles Hundetraining Jois', 'Welpentraining Jois Burgenland'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function JoisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/podersdorf-am-see';
const title = 'Hundeschule Podersdorf am See – mobil | Willenskraft';
const description =
  'Hundeschule Podersdorf am See: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Hundestrand! ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Podersdorf am See', 'Hundetrainer Podersdorf', 'Mobiles Hundetraining Podersdorf', 'Hundestrand Podersdorf'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function PodersdorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

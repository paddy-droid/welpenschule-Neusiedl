import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/parndorf';
const title = 'Hundeschule Parndorf – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Parndorf: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Platte & Outlet. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Parndorf', 'Hundetrainer Parndorf', 'Mobiles Hundetraining Parndorf', 'Welpentraining Parndorf'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function ParndorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

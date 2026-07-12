import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/bruckneudorf';
const title = 'Hundeschule Bruckneudorf – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Bruckneudorf: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Leitha-Auen. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Bruckneudorf', 'Hundetrainer Bruckneudorf', 'Mobiles Hundetraining Bruckneudorf', 'Hundeschule Bruck an der Leitha Umgebung'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function BruckneudorfLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

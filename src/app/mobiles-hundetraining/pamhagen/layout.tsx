import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/pamhagen';
const title = 'Hundeschule Pamhagen – wir kommen zu dir | Willenskraft';
const description =
  'Hundeschule Pamhagen: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Hanság-Stille. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule Pamhagen', 'Hundetrainer Pamhagen', 'Mobiles Hundetraining Pamhagen', 'Welpentraining Pamhagen Seewinkel'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

export default function PamhagenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

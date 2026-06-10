import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/st-andrae-am-zicksee';
const title = 'Hundeschule St. Andrä am Zicksee – mobil | Willenskraft';
const description =
  'Hundeschule St. Andrä am Zicksee: Jessy kommt zu dir nach Hause ✓ gewaltfrei ✓ Welpe bis Senior ✓ Anfahrt gratis ✓ Zicksee. ☎ 0664 3903673';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Hundeschule St. Andrä am Zicksee', 'Hundetrainer St. Andrä', 'Mobiles Hundetraining St. Andrä am Zicksee', 'Welpentraining Zicksee'],
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
};

export default function StAndraeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

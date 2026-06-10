import type { Metadata } from 'next';

const url = 'https://welpenschule-neusiedl.at/mobiles-hundetraining/weiden-am-see';

export const metadata: Metadata = {
  title: 'Hundeschule Weiden am See | Strandbad & Schilfgürtel',
  description:
    'Hundeschule Weiden am See ✓ wir kommen zu dir nach Hause ✓ Strandbad & Weinberge ✓ mobil & gewaltfrei ✓ Willenskraft. Erstberatung 95€.',
  keywords: ['Hundeschule Weiden am See', 'Hundetrainer Weiden am See', 'Mobiles Hundetraining Weiden', 'Welpenkurs Weiden am See'],
  alternates: { canonical: url },
  openGraph: {
    title: 'Hundeschule Weiden am See | Strandbad & Schilfgürtel',
    description: 'Hundeschule Weiden am See ✓ Strandbad & Weinberge ✓ mobil & gewaltfrei ✓ Willenskraft. 95€.',
    url,
    type: 'website',
  },
};

export default function WeidenAmSeeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

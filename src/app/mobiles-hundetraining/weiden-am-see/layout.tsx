import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Weiden am See | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Weiden am See. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function WeidenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Parndorf | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Parndorf. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function ParndorfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
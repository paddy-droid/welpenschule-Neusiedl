import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Gols | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Gols. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function GolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
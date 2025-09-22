import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Andau | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Andau. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function AndauLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
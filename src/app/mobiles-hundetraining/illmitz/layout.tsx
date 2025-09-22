import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Illmitz | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Illmitz. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function IllmitzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
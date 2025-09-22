import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiles Hundetraining Frauenkirchen | Hundeschule Willenskraft',
  description: 'Flexibles & individuelles Hundetraining in Frauenkirchen. Wir kommen zu dir nach Hause. Hundeschule Willenskraft - Dein Partner für mobiles Hundetraining.',
};

export default function FrauenkirchenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
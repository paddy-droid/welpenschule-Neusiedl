import { WillenskraftContent } from '../types';
import { defaultWillenskraftContent } from './defaultContent';
import { regionData } from '@/lib/regionData';

/**
 * Erzeugt den ortsspezifischen Willenskraft-Abschnitt für jeden Einsatzort
 * der mobilen Hundeschule — automatisch für alle Orte aus regionData.
 */
const buildLocationContent = (ortName: string): WillenskraftContent => ({
  ...defaultWillenskraftContent,
  subtitle: `Willkommen bei der Hundeschule Willenskraft in ${ortName} – Dein ganzheitlicher Wegbegleiter für ein harmonisches Leben mit Hund. Wir stehen für tierschutzkonformes & modernes Hundetraining – mobil bei dir zuhause in ${ortName} und Umgebung, online im eigenen Tempo oder als zertifizierte Ausbildung für angehende Hundetrainer:innen.`,
  description: `Die Hundeschule Willenskraft & Akademie bietet ganzheitliches, bedürfnisorientiertes und tierschutzkonformes Hundetraining für ${ortName} — mobil, direkt bei dir zuhause. Seit über 10 Jahren bilden wir Hundetrainer aus. Mit mobilen Trainings vor Ort in ${ortName}, einer Online-Hundeschule mit Videos und Begleitung sowie einer zertifizierten Ausbildung zum Hundetrainer unterstützen wir Mensch-Hund-Teams dabei, eine faire, respektvolle und klare Beziehung aufzubauen. Unsere Expertise umfasst Welpen, Junghunde, Tierschutzhunde, Medical Training, Begegnungstraining, Trennungsstress, Dummytraining und Alltagstraining.`,
});

export const getLocationConfig = (location: string): WillenskraftContent => {
  const region = regionData[location];
  if (!region) return defaultWillenskraftContent;
  return buildLocationContent(region.name);
};

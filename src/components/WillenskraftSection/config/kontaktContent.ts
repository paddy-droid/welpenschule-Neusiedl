import { WillenskraftContent } from '../types';
import { defaultWillenskraftContent } from './defaultContent';

/**
 * Willenskraft-Section speziell für die Kontaktseite.
 * Stellt die Mutter-Marke vor und verlinkt u. a. die Online-Hundeschule
 * und die Hundetrainer-Ausbildung.
 */
export const kontaktWillenskraftContent: WillenskraftContent = {
  title: 'Hinter Jessy steht die Hundeschule Willenskraft & Akademie',
  subtitle:
    'Die Welpenschule Neusiedl ist der regionale Ableger eines großen Ganzen: der Hundeschule Willenskraft & Akademie. Mobil bei dir vor Ort, online im eigenen Tempo oder als zertifizierte Ausbildung für angehende Hundetrainer:innen — gewaltfrei, ganzheitlich und seit über 10 Jahren.',
  description: defaultWillenskraftContent.description,
  images: defaultWillenskraftContent.images,
  buttons: [
    {
      text: 'Zur Hundeschule Willenskraft',
      href: 'https://www.willenskraft.co.at/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      text: 'Online-Hundeschule entdecken',
      href: 'https://www.willenskraft.co.at/online-hundeschule/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      text: 'Ausbildung zum Hundetrainer',
      href: 'https://www.willenskraft.co.at/hundetrainer-ausbildung/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ],
};

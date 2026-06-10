export interface RegionFAQ {
  question: string;
  answer: string;
}

export interface RegionPillar {
  title: string;
  description: string;
}

export interface RegionProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface RegionNearby {
  name: string;
  slug: string;
}

export interface RegionHighlight {
  title: string;
  description: string;
  icon: 'lake' | 'reed' | 'wine' | 'national-park' | 'historic' | 'field' | 'bird' | 'cycle' | 'border' | 'cellar' | 'church';
}

export interface RegionTableRow {
  trainingsort: string;
  entfernung: string;
  besonderheit: string;
  trainingsart: string;
}

export interface RegionData {
  name: string;
  slug: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  detailsTitle: string;
  detailsText: string;
  targetTitle: string;
  targetText: string;
  pillars: RegionPillar[];
  processSteps: RegionProcessStep[];
  faqs: RegionFAQ[];
  nearbyLocations: RegionNearby[];
  localDescription: string;
  localFeatures: string[];
  contactTitle: string;
  contactText: string;
  regionSectionTitle: string;
  regionSectionIntro: string;
  regionHighlights: RegionHighlight[];
  regionTableRows: RegionTableRow[];
  regionCtaText: string;
}

const commonProcessSteps: Omit<RegionProcessStep, 'description'>[] = [
  { step: 1, title: 'Kontaktaufnahme & Erstgespräch' },
  { step: 2, title: 'Individueller Trainingsplan' },
  { step: 3, title: 'Training vor Ort & Begleitung' },
];

const allLocations: RegionNearby[] = [
  { name: 'Neusiedl am See', slug: 'neusiedl-am-see' },
  { name: 'Gols', slug: 'gols' },
  { name: 'Parndorf', slug: 'parndorf' },
  { name: 'Weiden am See', slug: 'weiden-am-see' },
  { name: 'Jois', slug: 'jois' },
  { name: 'Winden am See', slug: 'winden-am-see' },
  { name: 'Podersdorf am See', slug: 'podersdorf-am-see' },
  { name: 'Frauenkirchen', slug: 'frauenkirchen' },
  { name: 'Mönchhof', slug: 'moenchhof' },
  { name: 'Halbturn', slug: 'halbturn' },
  { name: 'St. Andrä am Zicksee', slug: 'st-andrae-am-zicksee' },
  { name: 'Illmitz', slug: 'illmitz' },
  { name: 'Apetlon', slug: 'apetlon' },
  { name: 'Andau', slug: 'andau' },
  { name: 'Pamhagen', slug: 'pamhagen' },
  { name: 'Kittsee', slug: 'kittsee' },
  { name: 'Bruckneudorf', slug: 'bruckneudorf' },
];

/** Alle Einsatzorte der mobilen Hundeschule — für Navigation, Footer, Sitemap & interne Verlinkung. */
export const serviceLocations: RegionNearby[] = allLocations;

/** Ortskoordinaten (Gemeindezentren) für lokale GeoCoordinates im Schema jeder Landingpage. */
export const regionCoords: Record<string, { lat: number; lng: number }> = {
  'neusiedl-am-see': { lat: 47.9479, lng: 16.8404 },
  gols: { lat: 47.8967, lng: 16.9119 },
  parndorf: { lat: 47.9986, lng: 16.8603 },
  'weiden-am-see': { lat: 47.9258, lng: 16.8686 },
  jois: { lat: 47.9617, lng: 16.7961 },
  'winden-am-see': { lat: 47.9469, lng: 16.7503 },
  'podersdorf-am-see': { lat: 47.855, lng: 16.8417 },
  frauenkirchen: { lat: 47.8367, lng: 16.9281 },
  moenchhof: { lat: 47.8783, lng: 16.94 },
  halbturn: { lat: 47.8697, lng: 16.9744 },
  'st-andrae-am-zicksee': { lat: 47.785, lng: 16.9342 },
  illmitz: { lat: 47.7628, lng: 16.7983 },
  apetlon: { lat: 47.7411, lng: 16.8294 },
  andau: { lat: 47.7744, lng: 17.0317 },
  pamhagen: { lat: 47.7097, lng: 16.9028 },
  kittsee: { lat: 48.0908, lng: 17.0636 },
  bruckneudorf: { lat: 48.0231, lng: 16.7856 },
};

function getNearby(currentSlug: string, priority: string[]): RegionNearby[] {
  const ordered = priority
    .map((slug) => allLocations.find((l) => l.slug === slug))
    .filter((l): l is RegionNearby => l !== undefined && l.slug !== currentSlug);
  const rest = allLocations.filter((l) => l.slug !== currentSlug && !priority.includes(l.slug));
  return [...ordered, ...rest];
}

const commonPillars = (region: string): RegionPillar[] => [
  { title: 'Individuelles Training', description: `In ${region} gehen wir gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge.` },
  { title: 'Training in gewohnter Umgebung', description: `Dein Hund lernt dort, wo das Gelernte sitzen muss: in seinem Alltag, bei dir zuhause in ${region}.` },
  { title: 'Flexible Termine', description: `Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir nach ${region}.` },
  { title: 'Alltagsnahe Lösungen', description: 'Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten an konkreten Herausforderungen.' },
  { title: 'Stärkung der Bindung', description: `Gemeinsames Training in vertrauter Atmosphäre festigt die Beziehung zwischen dir und deinem Hund.` },
];

const commonSteps = (region: string): RegionProcessStep[] => [
  { ...commonProcessSteps[0], description: `Ruf uns an oder schreib uns. Wir besprechen deine Situation und welche Themen dir und deinem Hund in ${region} am wichtigsten sind.` },
  { ...commonProcessSteps[1], description: `Basierend auf dem Gespräch erstellen wir einen maßgeschneiderten Trainingsplan für dich und deinen Hund in ${region}.` },
  { ...commonProcessSteps[2], description: `Wir kommen zu dir nach ${region} und arbeiten gemeinsam Schritt für Schritt an euren individuellen Zielen.` },
];

export const regionData: Record<string, RegionData> = {
  'neusiedl-am-see': {
    name: 'Neusiedl am See',
    slug: 'neusiedl-am-see',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining direkt am Neusiedlersee — flexibel bei dir zuhause oder am Seeufer.',
    introTitle: 'Du wohnst in Neusiedl am See und suchst Hundetraining mit Tiefgang?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser Hundetraining in Neusiedl am See die perfekte Lösung. Wir kombinieren mobile 1:1-Trainings bei dir zuhause mit Einheiten am Seeufer und im Seewinkel – ganz nach deinen Bedürfnissen.',
    detailsTitle: 'Dein Vorteil: Training am Neusiedlersee',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Neusiedl oder auf euren gewohnten Spazierrunden am Seeufer und im Schilfgürtel. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen — von Leinenführigkeit auf der Promenade bis zu entspannten Begegnungen am Strandbad.',
    targetTitle: 'Für wen ist mobiles Training in Neusiedl geeignet?',
    targetText: 'Mobiles Hundetraining in Neusiedl am See eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung am See zu festigen.',
    pillars: commonPillars('Neusiedl am See'),
    processSteps: commonSteps('Neusiedl am See'),
    faqs: [
      { question: 'Wo findet das Training in Neusiedl am See statt?', answer: 'Wir trainieren bei dir zuhause in Neusiedl, am Seeufer (Strandbad, Promenade), im Schilfgürtel oder rund um die Stadtweinberge. Die Trainings­orte richten sich nach deinen Zielen und dem Charakter deines Hundes.' },
      { question: 'Was kostet Hundetraining in Neusiedl am See?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ und enthält eine umfassende Analyse, Zielbesprechung und einen individuellen Trainingsplan. Folge-Einzelstunden buchst du flexibel nach Bedarf für 55€.' },
      { question: 'Eignet sich der Schilfgürtel für Welpentraining?', answer: 'Bedingt. Im Schilfgürtel gibt es viele Geräusche (Vögel, Wind, Wasser) — das ist ideal für fortgeschrittene Reiz-Sozialisierung, aber für ganz junge Welpen oft zu intensiv. Wir starten lieber in ruhigeren Bereichen rund um den Tabor oder die Stadtweinberge.' },
      { question: 'Mein Hund jagt Vögel — könnt ihr helfen?', answer: 'Ja, das ist am Neusiedlersee mit seiner enormen Vogelvielfalt ein häufiges Thema. Wir arbeiten mit Impulskontrolle, Alternativ­verhalten und im fortgeschrittenen Stadium mit kontrollierten Sichtungen — immer ohne Druck und mit positiver Verstärkung.' },
      { question: 'Trainiert ihr auch im Strandbad-Bereich?', answer: 'Im Sommer ist das Strandbad sehr belebt — ideal für Begegnungs­training mit fortgeschrittenen Hunden. Außerhalb der Saison nutzen wir die ruhige Promenade oft für Leinenführigkeit und Rückruf.' },
      { question: 'Wie lange braucht eine Verhaltensänderung?', answer: 'Für Grundsignale rechnen wir mit 4–8 Wochen regelmäßigem Üben. Verhaltens­auffälligkeiten wie Leinenaggression brauchen meist 3–6 Sitzungen plus konsequentes Alltagstraining. Du bekommst nach jeder Einheit konkrete Hausaufgaben.' },
    ],
    nearbyLocations: getNearby('neusiedl-am-see', ['weiden-am-see', 'gols', 'parndorf']),
    localDescription: 'Neusiedl am See ist die Bezirkshauptstadt des gleichnamigen Bezirks im nördlichen Burgenland mit rund 8.500 Einwohnern. Die Stadt liegt am Nordufer des Neusiedlersees — Mitteleuropas größtem Steppensee und seit 2001 UNESCO-Welterbe. Mit ihren historischen Tabor-Resten, der pulsierenden Seepromenade, dem Strandbad und den umliegenden Stadtweinbergen vereint Neusiedl pannonische Lebensart mit hervorragenden Trainings­bedingungen für Hunde aller Altersklassen.',
    localFeatures: [
      'Direkter Seezugang mit Promenade & Strandbad',
      'Schilfgürtel für reizvolle Naturerlebnisse',
      'Stadtweinberge als ruhige Trainingskulisse',
      'UNESCO-Welterbe-Region mit Nationalpark-Nähe',
    ],
    contactTitle: 'Interesse am Hundetraining in Neusiedl am See?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund am Neusiedlersee.',
    regionSectionTitle: 'Neusiedl am See – Wo der Steppensee zum Trainings­paradies wird',
    regionSectionIntro: 'Neusiedl am See ist mehr als eine Bezirksstadt — es ist das pulsierende Tor zum UNESCO-Welterbe Neusiedlersee. Stell dir vor: Du gehst mit deinem Hund am Seeufer entlang, der pannonische Wind streichelt das Schilf, im Hintergrund kreisen Graugänse — und dein Hund läuft entspannt und aufmerksam an deiner Seite. Genau diese Vision machen wir in Neusiedl zur Realität. Vom historischen Tabor über die Stadtweinberge bis zur belebten Promenade bietet die Stadt eine seltene Vielfalt an Trainings­orten — alle innerhalb weniger Minuten erreichbar.',
    regionHighlights: [
      { title: 'Seepromenade', description: 'Über 3 km gepflegte Uferpromenade mit Spaziergängern, Radfahrern und anderen Hunden — ideal für realistisches Begegnungs­training.', icon: 'lake' },
      { title: 'Schilfgürtel', description: 'Pannonisches Wahrzeichen mit Vogel­geräuschen, Wind und Wassergeruch — das perfekte Naturreiz-Training für fortgeschrittene Hunde.', icon: 'reed' },
      { title: 'Stadtweinberge', description: 'Ruhige Hügellandschaft mit Sichtweite und kaum Verkehr — der Goldstandort für Rückruf­training und Signalaufbau.', icon: 'wine' },
    ],
    regionTableRows: [
      { trainingsort: 'Seepromenade Neusiedl', entfernung: '0–5 Min.', besonderheit: 'Belebte Uferpromenade mit hohem Reizniveau', trainingsart: 'Leinenführigkeit, Begegnungstraining' },
      { trainingsort: 'Schilfgürtel & Steg', entfernung: '5 Min.', besonderheit: 'UNESCO-Welterbe mit Wildreizen', trainingsart: 'Impulskontrolle, Reiztraining' },
      { trainingsort: 'Tabor & Altstadt', entfernung: '0 Min.', besonderheit: 'Historischer Stadtkern, Cafés, Kopfsteinpflaster', trainingsart: 'Alltagstraining, Habituation' },
      { trainingsort: 'Stadtweinberge', entfernung: '8 Min.', besonderheit: 'Ruhige Weinberg-Wege mit weiter Sicht', trainingsart: 'Rückruf, Freilauf, Signalaufbau' },
      { trainingsort: 'Wohngebiet', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Verhaltensberatung' },
    ],
    regionCtaText: 'Bereit, mit deinem Hund am Neusiedlersee aufzublühen? Wir starten genau dort, wo dein Alltag stattfindet.',
  },

  gols: {
    name: 'Gols',
    slug: 'gols',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining mitten im pannonischen Weinland — flexibel bei dir zuhause in Gols.',
    introTitle: 'Du kommst aus Gols und suchst individuelles Hundetraining?',
    introText: 'Perfekt! Unser mobiles Hundetraining kommt direkt zu dir nach Gols. Wir unterstützen dich dabei, eine harmonische Beziehung zu deinem Hund aufzubauen und alltagsnahe Herausforderungen in der einzigartigen Weinland-Umgebung zu meistern.',
    detailsTitle: 'Dein Vorteil: Training in den Golser Weinbergen',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Gols oder auf euren gewohnten Spazierrunden durch die Weinberge und Kellergassen. Gols ist Burgenlands Weinhauptort — die ruhigen Hügellagen rund um den Ort sind ein Geschenk für konzentriertes Hundetraining.',
    targetTitle: 'Für wen ist mobiles Training in Gols geeignet?',
    targetText: 'Mobiles Hundetraining in Gols eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Besonders ideal: Halter, die ihren Hund an die ruhige, ländliche Umgebung des Weinlandes anpassen möchten — kein Verkehrslärm, dafür Wildgerüche, Trecker und gelegentliche Reh-Sichtungen.',
    pillars: commonPillars('Gols'),
    processSteps: commonSteps('Gols'),
    faqs: [
      { question: 'Wie weit ist Gols von Neusiedl entfernt?', answer: 'Gols liegt nur etwa 8 Minuten Autofahrt von Neusiedl am See entfernt. Wir kommen ohne Probleme zu dir nach Hause. Die Anfahrt ist für dich völlig kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Gols?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse der Situation, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel nach Bedarf.' },
      { question: 'Können wir in den Weinbergen trainieren?', answer: 'Absolut. Die Golser Weinberge sind perfekt für Rückruf- und Freilauf­training: weitläufig, ruhig, mit wenig Ablenkung. In der Erntezeit (August–Oktober) sprechen wir vorher Trainings­zeiten ab, um den Winzern nicht in die Quere zu kommen.' },
      { question: 'Mein Hund hat Angst vor Treckern — könnt ihr helfen?', answer: 'Ja, das ist in Weinbau-Gemeinden wie Gols ein häufiges Thema. Wir desensibilisieren schrittweise mit Distanz-Training und positiver Gegenkonditionierung. Innerhalb von 3–5 Sitzungen sehen die meisten Halter deutliche Fortschritte.' },
      { question: 'Sind Hunde in den Buschenschänken erlaubt?', answer: 'Die meisten Golser Buschenschänken sind hundefreundlich (Außenbereich). Wir trainieren auch hier — Liegenbleiben unter dem Tisch, Ruhe trotz Essensgerüchen und entspannte Begegnungen mit Gästen.' },
      { question: 'Wie viele Sitzungen brauche ich?', answer: 'Das hängt von den individuellen Zielen ab. Nach der Erstberatung erstellen wir gemeinsam einen Plan. Manche Themen sind in 2–3 Sitzungen gelöst, andere benötigen mehr Zeit. Du buchst immer nur die Sitzungen, die du tatsächlich brauchst.' },
    ],
    nearbyLocations: getNearby('gols', ['neusiedl-am-see', 'weiden-am-see', 'frauenkirchen']),
    localDescription: 'Gols ist mit rund 3.700 Einwohnern Burgenlands „Weinhauptort" und einer der bekanntesten Weinbau­orte Österreichs. Eingebettet zwischen Heideboden, Parndorfer Platte und Neusiedlersee, prägen Weinberge, Kellergassen und sanfte Hügel das Ortsbild. Die Lage am Goldenen Weingolf bietet hervorragende Trainings­bedingungen: ruhige Wirtschaftswege, klimatisch mild dank pannonischen Einflusses und nur ein paar Minuten zum Seeufer.',
    localFeatures: [
      'Burgenlands Weinhauptort mit ruhiger Kulisse',
      'Sanfte Hügellandschaft & Wirtschaftswege',
      'Etwa 8 Min. von Neusiedl am See',
      'Goldener Weingolf als Naherholungsgebiet',
    ],
    contactTitle: 'Interesse am mobilen Training in Gols?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Gols.',
    regionSectionTitle: 'Gols – Wo Weinberge zur Trainings­akademie werden',
    regionSectionIntro: 'Gols ist ein Geschenk für Hundetraining: Endlose Weinhügel, kaum befahrene Wirtschaftswege und ein milder, sonniger pannonischer Klimaraum mit über 300 Sonnentagen im Jahr. Stell dir vor, dein Hund läuft konzentriert neben dir durch eine Reihe von Welschriesling-Reben, der Wind trägt das Sirren der Heuschrecken, und du arbeitest entspannt am Rückruf — ohne Verkehrslärm, ohne andere Hunde, ohne Stress. Genau das machen wir in Gols.',
    regionHighlights: [
      { title: 'Weinberge & Kellergassen', description: 'Über 1.800 Hektar Weinbau­fläche — ruhige Wirtschaftswege ohne Verkehr, perfekt für Rückruf und Signalaufbau.', icon: 'wine' },
      { title: 'Heideboden-Felder', description: 'Weite, ebene Steppen­landschaft mit hervorragender Sichtweite — der Traum für Distanz- und Freilauf­training.', icon: 'field' },
      { title: 'Goldener Weingolf', description: 'Beliebte Wander- und Radroute — ideal für Begegnungs­training mit anderen Hunden, Radfahrern und Wanderern.', icon: 'cycle' },
    ],
    regionTableRows: [
      { trainingsort: 'Weinberge Gols', entfernung: '0–3 Min.', besonderheit: 'Ruhige Wirtschaftswege ohne Verkehr', trainingsart: 'Signalaufbau, Rückruf, Freilauf' },
      { trainingsort: 'Kellergasse', entfernung: '0 Min.', besonderheit: 'Historisches Ortsbild, gelegentliche Begegnungen', trainingsart: 'Leinenführigkeit, Alltagstraining' },
      { trainingsort: 'Heideboden', entfernung: '5 Min.', besonderheit: 'Weite Steppen­landschaft mit Sichtweite', trainingsart: 'Distanztraining, Rückruf' },
      { trainingsort: 'Wohngebiet Gols', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Verhaltensberatung' },
      { trainingsort: 'Neusiedlersee Ufer', entfernung: '10 Min.', besonderheit: 'Schilf, Vögel, hoher Reiz', trainingsart: 'Reiz­training, Impulskontrolle' },
    ],
    regionCtaText: 'Die Weinberge warten auf euch. Lass uns in Gols mit ruhigem Kopf an deinen Trainings­zielen arbeiten.',
  },

  frauenkirchen: {
    name: 'Frauenkirchen',
    slug: 'frauenkirchen',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im historischen Wallfahrtsort — flexibel bei dir zuhause in Frauenkirchen.',
    introTitle: 'Du kommst aus Frauenkirchen und willst dein Mensch-Hund-Team auf das nächste Level bringen?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Frauenkirchen die perfekte Lösung. Wir kommen direkt zu dir – egal ob ins Wohngebiet, an die Wallfahrtskirche oder ins angrenzende Seewinkel-Gebiet.',
    detailsTitle: 'Dein Vorteil: Training in der Heideboden-Ebene',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Frauenkirchen oder auf euren gewohnten Spazierrunden durch den Heideboden. Die ruhige Marktgemeinde mit ihrem berühmten Wallfahrts­ort bietet einen einzigartigen Mix aus historischem Stadtflair und weiten, offenen Naturflächen.',
    targetTitle: 'Für wen ist mobiles Training in Frauenkirchen geeignet?',
    targetText: 'Mobiles Hundetraining in Frauenkirchen eignet sich für Hunde jeden Alters. Besonders profitieren Halter, die ihren Hund an die Mischung aus historischem Ortskern (Pilger, Touristen, Glocken) und ruhiger Heideboden-Landschaft gewöhnen möchten.',
    pillars: commonPillars('Frauenkirchen'),
    processSteps: commonSteps('Frauenkirchen'),
    faqs: [
      { question: 'Wie weit kommt ihr zu mir nach Frauenkirchen?', answer: 'Frauenkirchen liegt nur etwa 12 Minuten Autofahrt von Neusiedl am See entfernt. Wir kommen ohne Probleme zu dir nach Hause. Die Anfahrt ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Frauenkirchen?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Folge-Einzelstunden buchst du flexibel für 55€ pro Einheit nach Bedarf.' },
      { question: 'Mein Hund reagiert auf Glocken — könnt ihr helfen?', answer: 'In einem Wallfahrtsort wie Frauenkirchen ist das ein wichtiges Thema. Wir arbeiten mit Geräusch-Habituation: kontrollierte Distanz, positive Verknüpfung, schrittweise Annäherung. Die meisten Hunde sind nach 4–6 Sitzungen entspannt.' },
      { question: 'Trainieren wir auch in der Pilgersaison?', answer: 'Gerade in der Pilgersaison (Mai–Oktober) ist Frauenkirchen ein hervorragender Trainingsort: viele neue Menschen, ungewohnte Geräusche, große Reizvielfalt. Für sensible Hunde wählen wir bewusst ruhigere Tage.' },
      { question: 'Eignet sich der Heideboden für Welpentraining?', answer: 'Der Heideboden ist ideal für junge Welpen — weitläufig, ruhig, kaum Ablenkung durch Verkehr. Wir nutzen ihn für die ersten Rückrufübungen, Sozialisierungs­spaziergänge und kontrollierte Begegnungen.' },
      { question: 'Bietet ihr auch Beratung bei Tierschutzhunden?', answer: 'Ja, sehr gerne. Tierschutzhunde aus dem Ausland brauchen oft besonderen Vertrauensaufbau. Wir kommen zu dir nach Frauenkirchen und begleiten den Eingewöhnungs­prozess Schritt für Schritt.' },
    ],
    nearbyLocations: getNearby('frauenkirchen', ['gols', 'andau', 'illmitz']),
    localDescription: 'Frauenkirchen ist eine Marktgemeinde mit rund 3.000 Einwohnern und Österreichs bekanntestem Wallfahrtsort im Burgenland. Die historische Basilika Maria Heimsuchung zieht jährlich tausende Pilger an. Geographisch liegt Frauenkirchen im Heideboden — der weiten, offenen Steppenebene zwischen Neusiedlersee und der ungarischen Grenze. Diese Mischung aus pulsierender Wallfahrts­kultur und stiller Heideboden-Natur macht den Ort zu einem einzigartigen Trainings­standort.',
    localFeatures: [
      'Berühmter Wallfahrtsort mit historischer Basilika',
      'Direkter Zugang zum Heideboden-Naturraum',
      'Ca. 12 Min. von Neusiedl am See',
      'Mischung aus Stadtflair und ländlicher Ruhe',
    ],
    contactTitle: 'Interesse am mobilen Training in Frauenkirchen?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Frauenkirchen.',
    regionSectionTitle: 'Frauenkirchen – Wo Wallfahrtsort &amp; Heideboden zusammentreffen',
    regionSectionIntro: 'Frauenkirchen ist einer der spannendsten Trainings­orte im Seewinkel: Hier prallt das pulsierende Leben eines Wallfahrtsortes auf die meditative Stille der pannonischen Heideboden-Steppe. Stell dir vor: Vormittags trainierst du mit deinem Hund Begegnungen mit Pilgergruppen am Basilika-Vorplatz, nachmittags arbeitest du an seinem Rückruf in der weiten Heide-Ebene Richtung Andau. Diese Vielfalt ist ein Alleinstellungsmerkmal von Frauenkirchen — und genau das nutzen wir für nachhaltige Lernerfolge.',
    regionHighlights: [
      { title: 'Basilika &amp; Pilgerplatz', description: 'Historischer Wallfahrtsort mit Pilgern, Glocken und vielfältigen Reizen — ideal für fortgeschrittene Begegnungs- und Reizübungen.', icon: 'church' },
      { title: 'Heideboden-Ebene', description: 'Weite, offene Steppen­landschaft Richtung Andau — perfekt für Rückruf, Distanz­training und Freilauf.', icon: 'field' },
      { title: 'Marktgemeinde-Alltag', description: 'Ruhige Wohngebiete mit Nachbarschafts­charakter — ideal für Welpensozialisierung und entspanntes Alltagstraining.', icon: 'historic' },
    ],
    regionTableRows: [
      { trainingsort: 'Basilika &amp; Hauptplatz', entfernung: '0 Min.', besonderheit: 'Historisches Zentrum mit Pilgern und Cafés', trainingsart: 'Leinenführigkeit, Begegnungen, Habituation' },
      { trainingsort: 'Heideboden', entfernung: '5 Min.', besonderheit: 'Offene Steppe Richtung Andau', trainingsart: 'Rückruf, Freilauf, Distanz­training' },
      { trainingsort: 'Wohngebiete Frauenkirchen', entfernung: '0 Min.', besonderheit: 'Ruhige Nachbarschaft', trainingsart: 'Welpentraining, Einzeltraining' },
      { trainingsort: 'Wirtschaftswege', entfernung: '3 Min.', besonderheit: 'Kaum Verkehr, weite Sicht', trainingsart: 'Signalaufbau, Geländetraining' },
      { trainingsort: 'Neusiedl am See', entfernung: '12 Min.', besonderheit: 'Seezugang &amp; Stadtleben', trainingsart: 'Reiz­training, Sozialisierung' },
    ],
    regionCtaText: 'Frauenkirchen vereint zwei Welten — und genau das macht euer Training hier so kraftvoll. Lass uns starten.',
  },

  parndorf: {
    name: 'Parndorf',
    slug: 'parndorf',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining auf der Parndorfer Platte — flexibel bei dir zuhause in Parndorf.',
    introTitle: 'Du wohnst in Parndorf und suchst Hundetraining mit Substanz?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Parndorf die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen — egal ob im Wohnort oder draußen am Heideboden.',
    detailsTitle: 'Dein Vorteil: Training auf der Parndorfer Platte',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Parndorf oder auf euren gewohnten Spazierrunden über die Parndorfer Platte. Diese weite Heide-Ebene bietet einzigartige Trainings­bedingungen — viel Sichtweite, kaum Verkehr und großzügige Freilauf­möglichkeiten.',
    targetTitle: 'Für wen ist mobiles Training in Parndorf geeignet?',
    targetText: 'Mobiles Hundetraining in Parndorf eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Besonders ideal für Pendler, die zwischen A4-Berufsverkehr und ruhigem Wohnen pendeln und einen Hund brauchen, der mit beiden Welten souverän umgeht.',
    pillars: commonPillars('Parndorf'),
    processSteps: commonSteps('Parndorf'),
    faqs: [
      { question: 'Wie weit ist Parndorf von Neusiedl entfernt?', answer: 'Parndorf liegt etwa 8 Minuten Autofahrt von Neusiedl am See entfernt, direkt über die A4 erreichbar. Die Anfahrt ist für dich völlig kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Parndorf?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€.' },
      { question: 'Stört das Designer Outlet beim Training?', answer: 'Im Gegenteil — der Bereich rund ums Outlet eignet sich perfekt für fortgeschrittenes Begegnungs­training: viele Menschen, Einkaufstüten, Kinder. Wir arbeiten dort gezielt mit Hunden, die im Alltag souveräner werden sollen.' },
      { question: 'Mein Hund reagiert auf Autobahnlärm — was tun?', answer: 'Die A4-Nähe bringt eine konstante Geräuschkulisse. Wir desensibilisieren mit Distanz-Training: zuerst weit weg, dann schrittweise näher heran — immer mit positiver Gegenkonditionierung. Innerhalb von 4–6 Wochen sehen wir bei den meisten Hunden deutliche Erfolge.' },
      { question: 'Eignet sich die Parndorfer Platte für Welpen?', answer: 'Sehr gut sogar. Die ruhigen Heide-Wege außerhalb des Ortskerns bieten ideale Bedingungen für die ersten Sozialisierungs­spaziergänge — ohne Verkehrsstress, dafür mit interessanten Naturreizen.' },
      { question: 'Trainiert ihr auch im Winter?', answer: 'Ja, ganzjährig. Die Parndorfer Platte ist im Winter besonders schön zum Trainieren — klar, kalt, wenig Ablenkung. Wir achten auf Pfotenpflege bei Streusalz und passen die Einheiten an die Witterung an.' },
    ],
    nearbyLocations: getNearby('parndorf', ['neusiedl-am-see', 'weiden-am-see', 'gols']),
    localDescription: 'Parndorf ist eine Marktgemeinde im Bezirk Neusiedl am See mit rund 4.500 Einwohnern. Bekannt durch das Designer Outlet Parndorf und die verkehrsgünstige Lage an der A4 und A6, verbindet Parndorf wirtschaftliche Dynamik mit dem Charme der pannonischen Tiefebene. Die berühmte Parndorfer Platte — eine der größten Steppenlandschaften Mitteleuropas — beginnt direkt vor der Haustür und bietet einzigartige Trainings­möglichkeiten.',
    localFeatures: [
      'Parndorfer Platte als Steppenlandschaft',
      'Etwa 8 Min. von Neusiedl am See',
      'A4/A6-Anbindung für Pendler',
      'Designer Outlet als Trainings-Hotspot für Begegnungen',
    ],
    contactTitle: 'Interesse am mobilen Training in Parndorf?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Parndorf.',
    regionSectionTitle: 'Parndorf – Pannonische Weite trifft Pendler-Alltag',
    regionSectionIntro: 'Parndorf ist ein Hund-Trainings-Paradox: Auf der einen Seite die endlose Parndorfer Platte mit ihren weiten Heide-Wegen, auf der anderen das pulsierende Outlet-Center mit Tausenden von Reizen pro Tag. Diese Spannung ist ein Geschenk fürs Training — denn dein Hund lernt hier in einer Umgebung, die alle Facetten des modernen Lebens abdeckt: Stille und Trubel, Natur und Konsum, ländlich und urban. Genau das macht in Parndorf trainierte Hunde so souverän.',
    regionHighlights: [
      { title: 'Parndorfer Platte', description: 'Eine der größten Steppen­ebenen Mitteleuropas — endlose Heide-Wege ohne Verkehrsablenkung, perfekt für Distanz­training.', icon: 'field' },
      { title: 'Outlet-Bereich', description: 'Hochfrequente Begegnungszone — ideal für fortgeschrittenes Reizmanagement und Alltags-Souveränität.', icon: 'historic' },
      { title: 'A4-Korridor', description: 'Wer hier ruhig bleibt, bleibt überall ruhig — gezieltes Geräusch-Habituations-Training für moderne Hundealltag.', icon: 'cycle' },
    ],
    regionTableRows: [
      { trainingsort: 'Parndorfer Platte', entfernung: '3 Min.', besonderheit: 'Weite Heide-Ebene ohne Verkehr', trainingsart: 'Rückruf, Freilauf, Distanz­training' },
      { trainingsort: 'Wohngebiet Parndorf', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Outlet-Umgebung', entfernung: '5 Min.', besonderheit: 'Hohe Frequenz von Menschen und Hunden', trainingsart: 'Begegnungstraining, Reizmanagement' },
      { trainingsort: 'Wirtschaftswege', entfernung: '0–3 Min.', besonderheit: 'Ruhige Feldwege', trainingsart: 'Leinenführigkeit, Signalaufbau' },
      { trainingsort: 'Neusiedlersee', entfernung: '8 Min.', besonderheit: 'Schilf, Wasser, Vögel', trainingsart: 'Reiz­training, Sozialisierung' },
    ],
    regionCtaText: 'Parndorf bietet alles, was dein Hund fürs moderne Leben braucht. Lass uns gemeinsam an seiner Souveränität arbeiten.',
  },

  'weiden-am-see': {
    name: 'Weiden am See',
    slug: 'weiden-am-see',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining direkt am Seeufer — flexibel bei dir zuhause in Weiden am See.',
    introTitle: 'Du wohnst in Weiden am See und suchst Hundetraining mit Seeblick?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Weiden am See die perfekte Lösung. Wir kombinieren Trainings bei dir zuhause mit Einheiten am Seezugang und in den umliegenden Naturflächen.',
    detailsTitle: 'Dein Vorteil: Training mit Neusiedlersee-Blick',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Weiden am See oder auf euren gewohnten Spazierrunden am Seeufer und im Schilfgebiet. Weiden ist eine der wenigen Gemeinden mit direktem Seezugang — diese Lage nutzen wir für besonders eindrucksvolle Trainings­einheiten.',
    targetTitle: 'Für wen ist mobiles Training in Weiden geeignet?',
    targetText: 'Mobiles Hundetraining in Weiden am See eignet sich für Hunde jeden Alters. Ideal für Halter, die ihren Hund an die spezifischen See-Reize gewöhnen möchten — Wasservögel, Wind in den Schilf­halmen, Bootslärm und Strandgäste in der Saison.',
    pillars: commonPillars('Weiden am See'),
    processSteps: commonSteps('Weiden am See'),
    faqs: [
      { question: 'Wie weit ist Weiden am See von Neusiedl entfernt?', answer: 'Weiden am See grenzt direkt an Neusiedl — wir sind in nur 5–8 Minuten bei dir. Die Anfahrt ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Weiden?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€.' },
      { question: 'Mein Hund will ständig ins Wasser — ist das ok?', answer: 'Schwimmen ist gesund und macht Spaß — aber unkontrolliertes Hineinrennen ist gefährlich (steile Stellen, Boote, Algen im Sommer). Wir bauen ein klares "Erlaubnis-Signal" auf, damit dein Hund nur ins Wasser geht, wenn du es freigibst.' },
      { question: 'Trainiert ihr auch im Strandbad?', answer: 'In der Saison (Mai–September) ist das Strandbad sehr belebt — perfekt für fortgeschrittene Hunde-Begegnungen. Außerhalb der Saison nutzen wir es oft für entspannte 1:1-Sessions am Wasser.' },
      { question: 'Was tun bei jagdlich ambitionierten Hunden am See?', answer: 'Der Schilfgürtel mit seinen Wasservögeln ist eine echte Herausforderung. Wir arbeiten mit Impulskontrolle, kontrollierten Sichtungen und schrittweiser Entspannung in der Reizsituation. Ohne Druck, mit positiver Verstärkung.' },
      { question: 'Eignet sich Weiden für Welpentraining?', answer: 'Sehr gut. Wir starten in ruhigen Wohngebieten und führen den Welpen schrittweise an Seeumgebung, Wasser und Natur­reize heran — ein perfektes Trainings­curriculum.' },
    ],
    nearbyLocations: getNearby('weiden-am-see', ['neusiedl-am-see', 'gols', 'illmitz']),
    localDescription: 'Weiden am See ist eine Marktgemeinde mit rund 2.700 Einwohnern direkt am Nordufer des Neusiedlersees. Die Gemeinde ist berühmt für ihren großzügigen Seezugang, das beliebte Strandbad mit Campingplatz und die einzigartige Mischung aus Seebad-Atmosphäre und Weinbau-Tradition. Mit ihrer geschützten Lage und dem milden pannonischen Klima ist Weiden ein Lieblings­urlaubsort und gleichzeitig ein hervorragender Trainings­standort.',
    localFeatures: [
      'Direkter Zugang zum Neusiedlersee',
      'Beliebtes Strandbad mit Camping',
      'Mischung aus Seebad und Weinbau',
      'Etwa 5–8 Min. von Neusiedl am See',
    ],
    contactTitle: 'Interesse am mobilen Training in Weiden am See?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Weiden am See.',
    regionSectionTitle: 'Weiden am See – Wo Strandbad &amp; Seenland zur Trainings­bühne werden',
    regionSectionIntro: 'Weiden am See ist eine Sonderstellung im Bezirk: Direkt am Wasser gelegen, mit dem größten Strandbad der Region und einer einzigartigen Mischung aus Tourismus, Weinbau und Wohngebiet. Für dein Hundetraining bedeutet das Vielfalt pur: Eine Trainings­einheit kann am stillen Schilfgürtel beginnen, im belebten Strandbad fortgesetzt und in den ruhigen Weinbergen abgeschlossen werden — alles innerhalb von 10 Minuten Fahrzeit. Perfekt für Hunde, die in der modernen Welt souverän sein wollen.',
    regionHighlights: [
      { title: 'Strandbad &amp; Hafen', description: 'Größter Seezugang der Region — perfekt für Wasser­training, Begegnungen und Souveränitäts­aufbau in der Saison.', icon: 'lake' },
      { title: 'Schilfgürtel-Pfade', description: 'Stille Holzstege durch das UNESCO-Welterbe-Schilf — ideal für ruhiges Konzentrations­training mit Naturreizen.', icon: 'reed' },
      { title: 'Weinberge Weiden', description: 'Ruhige Hügellage mit Sichtweite — der Klassiker für Rückruf und Signalaufbau.', icon: 'wine' },
    ],
    regionTableRows: [
      { trainingsort: 'Strandbad Weiden', entfernung: '0–5 Min.', besonderheit: 'Größter Seezugang der Region', trainingsart: 'Wasser­training, Begegnungen' },
      { trainingsort: 'Schilfgürtel-Steg', entfernung: '3 Min.', besonderheit: 'UNESCO-Welterbe mit Wildreizen', trainingsart: 'Impulskontrolle, Konzentrations­training' },
      { trainingsort: 'Wohngebiet Weiden', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Verhaltensberatung' },
      { trainingsort: 'Weinberge Weiden', entfernung: '5 Min.', besonderheit: 'Ruhige Hügellage', trainingsart: 'Rückruf, Freilauf, Signalaufbau' },
      { trainingsort: 'Neusiedl am See', entfernung: '8 Min.', besonderheit: 'Stadtleben &amp; Promenade', trainingsart: 'Reiz­training, Habituation' },
    ],
    regionCtaText: 'Vom Strandbad bis zum Weinberg — Weiden bietet dir die ganze Pannonia in 10 Minuten. Lass uns starten.',
  },

  illmitz: {
    name: 'Illmitz',
    slug: 'illmitz',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im Nationalpark-Hauptort — flexibel bei dir zuhause in Illmitz.',
    introTitle: 'Du wohnst in Illmitz und willst dein Training auf das Nationalpark-Niveau heben?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Illmitz die perfekte Lösung. Wir kommen direkt zu dir – egal ob ins Wohngebiet oder an die Lacken-Landschaft des Seewinkels.',
    detailsTitle: 'Dein Vorteil: Training im Nationalpark-Eingangstor',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Illmitz oder auf euren gewohnten Spazierrunden durch den Seewinkel. Illmitz ist Eingangstor zum Nationalpark Neusiedler See – Seewinkel und damit umgeben von einer der wildreichsten Naturlandschaften Österreichs. Diese Bedingungen sind anspruchsvoll — und genau deshalb so wertvoll fürs Training.',
    targetTitle: 'Für wen ist mobiles Training in Illmitz geeignet?',
    targetText: 'Mobiles Hundetraining in Illmitz eignet sich besonders für Halter, deren Hund an Wildbegegnungen, Vogelreize und weiträumige Naturflächen gewöhnt werden soll. Vom Welpen bis zum Senior — wir passen das Training individuell an dein Tier und die Nationalpark-Regeln an.',
    pillars: commonPillars('Illmitz'),
    processSteps: commonSteps('Illmitz'),
    faqs: [
      { question: 'Wie weit ist Illmitz von Neusiedl entfernt?', answer: 'Illmitz liegt etwa 25 Minuten Autofahrt von Neusiedl am See entfernt, am Südufer des Sees. Die Anfahrt ist für dich völlig kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Illmitz?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Darin enthalten ist eine umfassende Analyse, Besprechung deiner Ziele und ein individueller Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€.' },
      { question: 'Dürfen Hunde in den Nationalpark?', answer: 'Im Nationalpark Neusiedler See – Seewinkel gelten Leinenpflicht und besondere Schutzbestimmungen. Wir trainieren auf den ausgewiesenen Wanderwegen und in der Pufferzone — das ist sogar ideal, weil Leinenführigkeit dort intensiv geübt werden kann.' },
      { question: 'Mein Hund jagt Vögel — was tun?', answer: 'Im Vogelparadies Seewinkel ist das ein zentrales Thema. Wir arbeiten mit Impulskontrolle und Alternativ­verhalten, ohne Druck. Innerhalb 4–8 Sitzungen sehen die meisten Halter deutliche Fortschritte. Schlüssel: Konsequenz im Alltag, nicht nur im Training.' },
      { question: 'Was sind die Lacken und kann man dort trainieren?', answer: 'Die Lacken sind kleine, salzhaltige Steppenseen, die für den Seewinkel charakteristisch sind. Manche dürfen mit Hund (an der Leine) betreten werden — das ist ideal für ruhiges Reiztraining und Naturwahrnehmung.' },
      { question: 'Trainieren wir auch in der Tourismus-Hauptsaison?', answer: 'Ja. Im Sommer ist Illmitz beliebt bei Radfahrern und Vogelbeobachtern — ideal für Begegnungs­training. Im Frühjahr und Herbst sind die Bedingungen ruhiger, perfekt für Welpen und sensible Hunde.' },
    ],
    nearbyLocations: getNearby('illmitz', ['andau', 'weiden-am-see', 'frauenkirchen']),
    localDescription: 'Illmitz ist eine Marktgemeinde mit rund 2.500 Einwohnern und Hauptort des Nationalparks Neusiedler See – Seewinkel. Die Gemeinde liegt am Südufer des Sees inmitten einer der bedeutendsten Vogel-Schutzgebiete Mitteleuropas. Mit den charakteristischen Lacken (Steppenseen), weiten Schilfflächen und der einzigartigen Salzsteppen-Vegetation ist Illmitz ein Naturwunder — und für Hundebesitzer ein anspruchsvoller, aber äußerst lohnender Trainings­standort.',
    localFeatures: [
      'Hauptort Nationalpark Neusiedler See – Seewinkel',
      'UNESCO-Welterbe-Region',
      'Lacken-Landschaft (Steppenseen)',
      'Höchste Vogel-Diversität Österreichs',
    ],
    contactTitle: 'Interesse am mobilen Training in Illmitz?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Illmitz.',
    regionSectionTitle: 'Illmitz – Wo Hundetraining auf Nationalpark-Niveau wird',
    regionSectionIntro: 'Illmitz ist die Königsklasse für Hundetraining in Burgenland. Hier, am Eingang zum Nationalpark Neusiedler See – Seewinkel, lebst du mit Vogelschwärmen, Salzsteppen, Schilfgürteln und Lacken Tür an Tür. Diese Naturkulisse ist anspruchsvoll: Dein Hund wird hier mit mehr Naturreizen konfrontiert als an fast jedem anderen Ort Österreichs. Wenn er hier souverän bleibt, bleibt er überall souverän. Genau das machen wir in Illmitz möglich — mit Geduld, Plan und positiver Verstärkung.',
    regionHighlights: [
      { title: 'Nationalpark Seewinkel', description: 'UNESCO-Welterbe und eines der bedeutendsten Vogelparadiese Europas — Trainings­szenarien auf höchstem Niveau.', icon: 'national-park' },
      { title: 'Lacken-Landschaft', description: 'Charakteristische Salz-Steppenseen — ideal für ruhiges Konzentrations­training mit dezentem Naturreiz.', icon: 'lake' },
      { title: 'Vogel-Beobachtungs­warte', description: 'Beliebte Treffpunkte für Naturfreunde — perfekt für Begegnungs­training mit Fernglas-Trägern und ruhigen Menschen.', icon: 'bird' },
    ],
    regionTableRows: [
      { trainingsort: 'Nationalpark-Wanderwege', entfernung: '5 Min.', besonderheit: 'Leinenpflicht, hohe Wildvogel-Präsenz', trainingsart: 'Leinenführigkeit, Impulskontrolle' },
      { trainingsort: 'Lacken-Umgebung', entfernung: '3 Min.', besonderheit: 'Salz-Steppenseen mit Wildreizen', trainingsart: 'Konzentrations­training, Reiz­training' },
      { trainingsort: 'Wohngebiet Illmitz', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Schilfgürtel-Stege', entfernung: '5 Min.', besonderheit: 'UNESCO-Welterbe', trainingsart: 'Reiz­training, Habituation' },
      { trainingsort: 'Neusiedl am See', entfernung: '25 Min.', besonderheit: 'Stadtleben &amp; Promenade', trainingsart: 'Reiz­training, Sozialisierung' },
    ],
    regionCtaText: 'Wer in Illmitz souverän ist, bleibt überall souverän. Lass uns gemeinsam dieses Niveau erarbeiten.',
  },

  andau: {
    name: 'Andau',
    slug: 'andau',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining an der ungarischen Grenze — flexibel bei dir zuhause in Andau.',
    introTitle: 'Du kommst aus Andau und suchst Hundetraining auf Augenhöhe?',
    introText: 'Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Andau die perfekte Lösung. Wir kommen direkt zu dir – egal ob ins Dorf, ans Brückendenkmal oder in den Heideboden Richtung Grenze.',
    detailsTitle: 'Dein Vorteil: Training in der pannonischen Stille',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Andau oder auf euren gewohnten Spazierrunden durch den südlichen Seewinkel. Andau ist eine der ruhigsten Gemeinden der Region — kaum Verkehr, weite Felder, historische Stille am Brückendenkmal. Diese Bedingungen sind ein Geschenk für konzentriertes Lernen.',
    targetTitle: 'Für wen ist mobiles Training in Andau geeignet?',
    targetText: 'Mobiles Hundetraining in Andau eignet sich für Hunde jeden Alters. Besonders profitieren sensible Hunde, die in ruhiger Umgebung am besten lernen — und Tierschutzhunde, die einen ruhigen Vertrauensaufbau brauchen.',
    pillars: commonPillars('Andau'),
    processSteps: commonSteps('Andau'),
    faqs: [
      { question: 'Wie weit ist Andau von Neusiedl entfernt?', answer: 'Andau liegt etwa 30 Minuten Autofahrt von Neusiedl am See entfernt, ganz im Süden des Bezirks an der ungarischen Grenze. Die Anfahrt ist für dich völlig kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Andau?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€. Folge-Einzelstunden buchst du flexibel für 55€ pro Einheit nach Bedarf.' },
      { question: 'Was bedeutet das Brückendenkmal für Hundetraining?', answer: 'Das Andauer Brückendenkmal ist ein historischer Ort und beliebtes Ausflugsziel — ideal für Begegnungs­training mit Touristen, Radfahrern und Wanderern. Da der Bereich oft besucht wird, bietet er kontrollierbare Reizdichte.' },
      { question: 'Mein Hund hat Trennungsangst — könnt ihr in Andau helfen?', answer: 'Ja. Trennungs­angst ist ein Schwerpunkt unserer Arbeit. In der ruhigen Andauer Umgebung können wir besonders gut an Bindung, Sicherheit und schrittweisem Allein-bleiben arbeiten — ohne Stressfaktoren von außen.' },
      { question: 'Trainiert ihr auch grenznahe Bereiche?', answer: 'Ja. Die Wirtschaftswege Richtung ungarischer Grenze sind teilweise völlig menschenleer — perfekt für Rückruf­training, Freilauf und sensible Hunde, die in lauten Umgebungen nicht lernen können.' },
      { question: 'Bietet Andau besondere Naturreize?', answer: 'Definitiv. Die Salzlacken Richtung Apetlon, der Wechsel zwischen Heideboden und Anbauflächen sowie die ungarische Puszta-Atmosphäre an der Grenze sind einzigartig in Österreich.' },
    ],
    nearbyLocations: getNearby('andau', ['frauenkirchen', 'illmitz', 'gols']),
    localDescription: 'Andau ist eine Marktgemeinde mit rund 2.300 Einwohnern im südlichen Seewinkel — direkt an der österreichisch-ungarischen Grenze. Berühmt durch die Andauer Brücke (Fluchthilfe-Denkmal von 1956) und die Lage in der weiten pannonischen Tiefebene, vereint Andau Geschichte, Stille und Natur. Die Salzlacken Richtung Apetlon, die Steppen­landschaft und die kaum befahrenen Grenzwege sind ein Privileg für Hundehalter, die Ruhe für ihr Training suchen.',
    localFeatures: [
      'Andauer Brücke (Fluchthilfe-Denkmal)',
      'Direkt an der ungarischen Grenze',
      'Salzlacken-Landschaft Richtung Apetlon',
      'Eine der ruhigsten Gemeinden im Seewinkel',
    ],
    contactTitle: 'Interesse am mobilen Training in Andau?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Andau.',
    regionSectionTitle: 'Andau – Wo Stille &amp; Geschichte zum Trainings­fundament werden',
    regionSectionIntro: 'Andau ist ein Geheimtipp für Hundehalter mit Anspruch. Hier, im südlichsten Zipfel des Seewinkels direkt an der ungarischen Grenze, herrscht eine Stille, die in Mitteleuropa selten geworden ist. Zwischen historischer Andauer Brücke, weiten Heide-Feldern und der Puszta-Atmosphäre der Grenzregion finden sensible und tierschutzgerettete Hunde optimale Lernbedingungen. Wer hier mit ruhigem Kopf arbeitet, baut ein Trainings-Fundament, das in jedem anderen Kontext trägt.',
    regionHighlights: [
      { title: 'Andauer Brücke', description: 'Historisches Fluchthilfe-Denkmal mit Wandererfrequenz — kontrollierbare Begegnungs­situationen mit ruhigen Menschen.', icon: 'border' },
      { title: 'Grenzwege', description: 'Wirtschaftswege Richtung ungarischer Grenze — oft menschenleer, ideal für Rückruf und sensible Hunde.', icon: 'field' },
      { title: 'Salzlacken-Steppe', description: 'Weite, offene Naturlandschaft — der perfekte Ort für ruhiges Konzentrations­training mit dezenten Naturreizen.', icon: 'reed' },
    ],
    regionTableRows: [
      { trainingsort: 'Andauer Brücke', entfernung: '5 Min.', besonderheit: 'Historisches Denkmal, Wanderfrequenz', trainingsart: 'Begegnungstraining, Habituation' },
      { trainingsort: 'Grenzwege', entfernung: '3 Min.', besonderheit: 'Menschenleere Wirtschaftswege', trainingsart: 'Rückruf, Freilauf, sensibles Training' },
      { trainingsort: 'Wohngebiet Andau', entfernung: '0 Min.', besonderheit: 'Sehr ruhige Nachbarschaft', trainingsart: 'Welpentraining, Tierschutzhunde' },
      { trainingsort: 'Salzlacken-Steppe', entfernung: '5 Min.', besonderheit: 'Pannonische Naturlandschaft', trainingsart: 'Konzentrations­training, Naturreize' },
      { trainingsort: 'Neusiedl am See', entfernung: '30 Min.', besonderheit: 'Stadtleben &amp; Promenade', trainingsart: 'Reiz­training, Sozialisierung' },
    ],
    regionCtaText: 'In Andau bauen wir auf Stille auf. Lass uns gemeinsam ein Fundament schaffen, das überall trägt.',
  },

  'podersdorf-am-see': {
    name: 'Podersdorf am See',
    slug: 'podersdorf-am-see',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im bekanntesten Badeort am See — mobil bei dir zuhause in Podersdorf.',
    introTitle: 'Du wohnst in Podersdorf am See und suchst Hundetraining, das zu eurem Alltag passt?',
    introText: 'Ob Einheimische oder Gastgeber mit Hund: In Podersdorf treffen Strandbad-Trubel, Radweg-Verkehr und stille Hutweide direkt aufeinander. Unser mobiles Hundetraining kommt zu dir nach Hause und arbeitet genau mit den Reizen, die euren Alltag prägen — vom Leuchtturm bis zur Seewinkel-Steppe.',
    detailsTitle: 'Dein Vorteil: Training zwischen Leuchtturm und Hutweide',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Podersdorf oder auf euren gewohnten Runden — an der Promenade beim Leuchtturm, am Radweg B10 oder draußen auf der Hutweide. Podersdorf hat den einzigen weitgehend schilffreien Seezugang am Ostufer; kaum ein Ort bietet so viele unterschiedliche Reizlevel auf so engem Raum.',
    targetTitle: 'Für wen ist mobiles Training in Podersdorf geeignet?',
    targetText: 'Mobiles Hundetraining in Podersdorf am See eignet sich für Hunde jeden Alters — vom Welpen bis zum Senior. Besonders profitieren Hunde, die mit Saison-Trubel souverän umgehen sollen: Strandgäste, Radfahrer, Kinder und andere Hunde gehören hier im Sommer zum Alltag.',
    pillars: commonPillars('Podersdorf am See'),
    processSteps: commonSteps('Podersdorf am See'),
    faqs: [
      { question: 'Wie weit ist Podersdorf von Neusiedl entfernt?', answer: 'Podersdorf am See liegt etwa 15 Minuten Autofahrt von Neusiedl am See entfernt, am Ostufer des Sees. Wir kommen ohne Aufpreis zu dir nach Hause — die Anfahrt ist im gesamten Einsatzgebiet kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Podersdorf?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ und enthält eine umfassende Analyse, Zielbesprechung und einen individuellen Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€ nach Bedarf.' },
      { question: 'Können wir auch in der Hochsaison trainieren?', answer: 'Ja — und genau das ist Podersdorfs Stärke. Im Sommer üben fortgeschrittene Hunde Begegnungen mit Strandgästen, Radfahrern und anderen Hunden unter realen Bedingungen. Für sensible Hunde und Welpen weichen wir auf den frühen Morgen oder die ruhige Hutweide aus.' },
      { question: 'Mein Hund zieht zum Wasser — was tun?', answer: 'Der offene Seezugang ist verlockend. Wir bauen ein klares Erlaubnis-Signal auf, sodass dein Hund nur ins Wasser geht, wenn du es freigibst — wichtig wegen Booten, Surfern und Algen im Hochsommer. Das gelingt mit positiver Verstärkung meist in wenigen Sitzungen.' },
      { question: 'Wie gehen wir mit den vielen Radfahrern um?', answer: 'Der Neusiedler-See-Radweg B10 führt mitten durch Podersdorf — perfekt für systematisches Reiztraining. Wir starten mit Distanz, belohnen ruhiges Verhalten und steigern uns bis zur engen Begegnung auf dem Radweg. So wird aus Hinterherjagen entspanntes Zuschauen.' },
      { question: 'Eignet sich Podersdorf für Welpentraining?', answer: 'Sehr gut. Die Hutweide und die ruhigen Wohnstraßen abseits der Promenade sind ideal für erste Sozialisierungs-Spaziergänge. Den Saison-Trubel dosieren wir bewusst — kurze, positive Eindrücke statt Überforderung in der Prägephase.' },
    ],
    nearbyLocations: getNearby('podersdorf-am-see', ['illmitz', 'frauenkirchen', 'weiden-am-see']),
    localDescription: 'Podersdorf am See ist mit rund 2.000 Einwohnern der bekannteste Tourismusort am Neusiedlersee — und der einzige Ort mit weitgehend schilffreiem Seezugang. Der Leuchtturm an der Mole ist das Wahrzeichen der Region, das große Strandbad und der Campingplatz ziehen jeden Sommer zehntausende Gäste an. Direkt hinter dem Ort beginnt die stille Welt des Seewinkels: Hutweiden, Weingärten und der Nationalpark. Dieser Kontrast aus Trubel und Steppenruhe macht Podersdorf zu einem außergewöhnlich vielseitigen Trainingsstandort.',
    localFeatures: [
      'Einziger schilffreier Seezugang am Ostufer',
      'Leuchtturm & Mole als Wahrzeichen',
      'Neusiedler-See-Radweg B10 direkt im Ort',
      'Hutweide & Nationalpark-Nähe für ruhiges Training',
    ],
    contactTitle: 'Interesse am mobilen Training in Podersdorf am See?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Podersdorf.',
    regionSectionTitle: 'Podersdorf am See – Vom Leuchtturm-Trubel zur Steppenstille',
    regionSectionIntro: 'Podersdorf ist das Reiz-Labor des Seewinkels: An der Mole flanieren im Sommer tausende Gäste, am Radweg rollt der Verkehr der Seeumrundung, und nur fünf Gehminuten landeinwärts liegt die Hutweide in pannonischer Stille. Für dein Hundetraining ist diese Bandbreite Gold wert — wir können das Reizlevel jeder Einheit präzise wählen, vom geschützten ersten Welpenspaziergang bis zur Meisterprüfung im Saison-Getümmel. Dein Hund lernt: Egal was kommt, mein Mensch hat einen Plan.',
    regionHighlights: [
      { title: 'Leuchtturm &amp; Promenade', description: 'Das Wahrzeichen des Sees mit belebter Flaniermeile — ideal für Begegnungstraining und Alltags-Souveränität auf höchstem Reizniveau.', icon: 'lake' },
      { title: 'Hutweide Podersdorf', description: 'Historische Beweidungslandschaft zwischen Ort und Nationalpark — weite Sicht, kaum Verkehr, perfekt für Rückruf und Distanztraining.', icon: 'field' },
      { title: 'Radweg B10', description: 'Die meistbefahrene Radroute des Landes — systematisches Radfahrer-Training von der ersten Distanzübung bis zur engen Begegnung.', icon: 'cycle' },
    ],
    regionTableRows: [
      { trainingsort: 'Promenade &amp; Mole', entfernung: '0–5 Min.', besonderheit: 'Hohe Reizdichte in der Saison, Leuchtturm-Kulisse', trainingsart: 'Begegnungstraining, Leinenführigkeit' },
      { trainingsort: 'Hutweide', entfernung: '5 Min.', besonderheit: 'Stille Beweidungslandschaft mit Weitblick', trainingsart: 'Rückruf, Freilauf, Distanztraining' },
      { trainingsort: 'Strandbad-Umfeld', entfernung: '3 Min.', besonderheit: 'Wasser, Gäste, Wassersport-Reize', trainingsart: 'Impulskontrolle, Wassertraining' },
      { trainingsort: 'Wohngebiet Podersdorf', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Seewinkel-Weingärten', entfernung: '5 Min.', besonderheit: 'Ruhige Wirtschaftswege', trainingsart: 'Signalaufbau, Leinenführigkeit' },
    ],
    regionCtaText: 'Vom Leuchtturm bis zur Hutweide — in Podersdorf trainieren wir auf jedem Reizlevel. Lass uns starten.',
  },

  jois: {
    name: 'Jois',
    slug: 'jois',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining am Fuß des Leithagebirges — mobil bei dir zuhause in Jois.',
    introTitle: 'Du wohnst in Jois und suchst Hundetraining mit Weitblick?',
    introText: 'Jois liegt dort, wo das Leithagebirge sanft in den Neusiedlersee ausläuft — Weinriede mit Seeblick, Trockenrasen am Hackelsberg und ruhige Ortsstraßen. Unser mobiles Hundetraining kommt direkt zu dir nach Hause und nutzt diese einzigartige Kulisse für nachhaltige Lernerfolge.',
    detailsTitle: 'Dein Vorteil: Training zwischen Weinried und Hackelsberg',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Jois oder auf euren gewohnten Runden durch die Weingärten. Die Hänge von Hackelsberg und Jungerberg gehören zu den ältesten Naturschutzgebieten des Burgenlands — wer hier trainiert, hat Ruhe, Weitblick und dosierte Wildreize in idealer Mischung.',
    targetTitle: 'Für wen ist mobiles Training in Jois geeignet?',
    targetText: 'Mobiles Hundetraining in Jois eignet sich für Hunde jeden Alters — vom Welpen bis zum Senior. Besonders gut aufgehoben sind Hunde, die in ruhiger Umgebung lernen, sowie jagdlich interessierte Hunde, die an Reh- und Hasenreizen rund ums Leithagebirge kontrolliert arbeiten sollen.',
    pillars: commonPillars('Jois'),
    processSteps: commonSteps('Jois'),
    faqs: [
      { question: 'Wie weit ist Jois von Neusiedl entfernt?', answer: 'Jois liegt nur etwa 7 Minuten Autofahrt von Neusiedl am See entfernt, am Nordwestufer des Sees. Die Anfahrt zu dir nach Hause ist selbstverständlich kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Jois?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — inklusive Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€ pro Einheit.' },
      { question: 'Dürfen wir am Hackelsberg trainieren?', answer: 'Die Wege rund um Hackelsberg und Jungerberg sind ideal für Leinenführigkeit und ruhiges Konzentrationstraining. Da es sich um Naturschutzgebiet handelt, bleiben wir auf den Wegen und an der Leine — genau das macht den Ort zum perfekten Übungsplatz für Impulskontrolle.' },
      { question: 'Mein Hund reagiert auf Rehe und Hasen — könnt ihr helfen?', answer: 'Ja, das ist am Übergang vom Leithagebirge zur Riede ein klassisches Thema. Wir arbeiten mit Distanz, Impulskontrolle und Alternativverhalten — schrittweise und ohne Druck. Die übersichtlichen Weingartenwege sind dafür ideal, weil Wildsichtungen hier kontrollierbar sind.' },
      { question: 'Eignet sich Jois für Welpentraining?', answer: 'Sehr gut. Die ruhigen Ortsstraßen und Weingartenwege bieten genau die dosierte Reizvielfalt, die Welpen in der Prägephase brauchen — Traktoren, Radfahrer am Kirschblütenradweg und gelegentliche Hundebegegnungen, alles in entspanntem Tempo.' },
      { question: 'Sind die Steigungen ein Problem für ältere Hunde?', answer: 'Nein — wir wählen die Route nach deinem Hund. Für Senioren nutzen wir die ebenen Riedwege Richtung See, für fitte Hunde bieten die sanften Hänge des Jungerbergs ein hervorragendes Muskel- und Konzentrationstraining.' },
    ],
    nearbyLocations: getNearby('jois', ['winden-am-see', 'neusiedl-am-see', 'parndorf']),
    localDescription: 'Jois ist eine Weinbaugemeinde mit rund 1.500 Einwohnern am Nordwestufer des Neusiedlersees, eingebettet zwischen den Ausläufern des Leithagebirges und dem Seeufer. Die Trockenrasen von Hackelsberg und Jungerberg zählen zu den ältesten Naturschutzgebieten des Burgenlands und beherbergen eine einzigartige pannonische Steppenvegetation. Die Weinriede mit Seeblick, der Kirschblütenradweg und die ruhigen Ortsstraßen machen Jois zu einem der entspanntesten Trainingsstandorte der Region.',
    localFeatures: [
      'Naturschutzgebiet Hackelsberg & Jungerberg',
      'Weinriede mit Blick über den Neusiedlersee',
      'Nur ca. 7 Min. von Neusiedl am See',
      'Kirschblütenradweg als Begegnungsstrecke',
    ],
    contactTitle: 'Interesse am mobilen Training in Jois?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Jois.',
    regionSectionTitle: 'Jois – Wo das Leithagebirge auf den See trifft',
    regionSectionIntro: 'Jois ist ein Geheimtipp für konzentriertes Hundetraining: Die Weinriede steigt sanft vom Seeufer zum Leithagebirge an, die Wirtschaftswege sind ruhig, und vom Jungerberg reicht der Blick über den ganzen See. Stell dir vor: Dein Hund läuft konzentriert an lockerer Leine durch die Rebzeilen, unten glitzert der Neusiedlersee, und ihr arbeitet ganz in Ruhe am Rückruf — ohne Verkehrslärm, ohne Gedränge. Genau diese Qualität nutzen wir in Jois, Einheit für Einheit.',
    regionHighlights: [
      { title: 'Hackelsberg &amp; Jungerberg', description: 'Pannonische Trockenrasen im Naturschutzgebiet — ruhige Wege mit Weitblick, ideal für Leinenführigkeit und Impulskontrolle.', icon: 'field' },
      { title: 'Weinriede mit Seeblick', description: 'Sanft ansteigende Rebzeilen ohne Verkehr — der Klassiker für Rückruf, Signalaufbau und entspanntes Distanztraining.', icon: 'wine' },
      { title: 'Kirschblütenradweg', description: 'Beliebte Radroute am Fuß des Leithagebirges — kontrollierte Begegnungen mit Radfahrern und Wanderern.', icon: 'cycle' },
    ],
    regionTableRows: [
      { trainingsort: 'Weinriede Jois', entfernung: '0–3 Min.', besonderheit: 'Rebzeilen mit Seeblick, kein Verkehr', trainingsart: 'Rückruf, Signalaufbau, Freilauf' },
      { trainingsort: 'Hackelsberg-Wege', entfernung: '5 Min.', besonderheit: 'Naturschutzgebiet, Leinenwege mit Wildreizen', trainingsart: 'Leinenführigkeit, Impulskontrolle' },
      { trainingsort: 'Wohngebiet Jois', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Seeufer &amp; Schilf', entfernung: '5 Min.', besonderheit: 'Wasservögel, Wind im Schilf', trainingsart: 'Reiztraining, Impulskontrolle' },
      { trainingsort: 'Neusiedl am See', entfernung: '7 Min.', besonderheit: 'Stadtleben &amp; Promenade', trainingsart: 'Habituation, Sozialisierung' },
    ],
    regionCtaText: 'Weinried, Weitblick, Ruhe — Jois hat alles für konzentriertes Lernen. Lass uns loslegen.',
  },

  'winden-am-see': {
    name: 'Winden am See',
    slug: 'winden-am-see',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im Kirschblütenort am Leithagebirge — mobil bei dir zuhause in Winden.',
    introTitle: 'Du wohnst in Winden am See und willst entspannt mit deinem Hund durchs Dorf?',
    introText: 'Winden am See liegt geschützt zwischen Leithagebirge und Seeufer — bekannt für seine Kirschbäume, die Kellergassen und eine Ruhe, die in der Region ihresgleichen sucht. Unser mobiles Hundetraining kommt direkt zu dir nach Hause und arbeitet dort, wo dein Hund wirklich lebt.',
    detailsTitle: 'Dein Vorteil: Training am ruhigen Nordufer',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Winden oder auf euren gewohnten Runden — durch die Kellergasse, entlang der Kirschbäume am Fuß des Zeilerbergs oder hinunter Richtung Schilfgürtel. Winden ist klein, übersichtlich und reizarm — perfekte Bedingungen für Hunde, die in Ruhe lernen.',
    targetTitle: 'Für wen ist mobiles Training in Winden geeignet?',
    targetText: 'Mobiles Hundetraining in Winden am See eignet sich für Hunde jeden Alters. Besonders profitieren sensible Hunde und Welpen, die von der ruhigen, überschaubaren Dorfumgebung profitieren — und Wanderfreunde, die ihren Hund auf den Wegen des Leithagebirges souverän führen möchten.',
    pillars: commonPillars('Winden am See'),
    processSteps: commonSteps('Winden am See'),
    faqs: [
      { question: 'Wie weit ist Winden von Neusiedl entfernt?', answer: 'Winden am See liegt etwa 10 Minuten Autofahrt von Neusiedl am See entfernt, am Nordufer zwischen Jois und Breitenbrunn. Die Anfahrt zu dir ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Winden?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — inklusive Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden gibt es für 55€, flexibel nach Bedarf.' },
      { question: 'Können wir im Leithagebirgswald trainieren?', answer: 'Ja — die Waldwege oberhalb von Winden sind ideal für Leinenführigkeit, Konzentrationsübungen und kontrollierte Wildreiz-Arbeit. Gerade im Sommer bietet der schattige Wald angenehme Trainingsbedingungen, wenn es unten am See heiß wird.' },
      { question: 'Mein Hund bellt Besucher an — könnt ihr helfen?', answer: 'Ja, Territorialverhalten ist ein Schwerpunkt des mobilen Trainings. Weil wir direkt bei dir zuhause arbeiten, können wir die Situation an der Haustür realistisch üben — mit Management, Alternativverhalten und positiver Verknüpfung. Meist zeigen sich nach 3–5 Einheiten deutliche Fortschritte.' },
      { question: 'Zur Kirschblüte sind viele Ausflügler da — stört das?', answer: 'Im Gegenteil: Die Wochen der Kirschblüte im April sind perfekt für dosiertes Begegnungstraining mit Wanderern und Radfahrern. Außerhalb dieser Zeit gehört Winden zu den ruhigsten Trainingsorten am ganzen Nordufer.' },
      { question: 'Eignet sich Winden für Welpentraining?', answer: 'Hervorragend. Die ruhigen Dorfstraßen, die Kellergasse und die Wege Richtung See bieten genau die überschaubare Reizvielfalt, die ein Welpe in der Prägephase braucht — ohne Überforderung, dafür mit echten Alltagseindrücken.' },
    ],
    nearbyLocations: getNearby('winden-am-see', ['jois', 'neusiedl-am-see', 'parndorf']),
    localDescription: 'Winden am See ist eine Weinbaugemeinde mit rund 1.300 Einwohnern am Nordufer des Neusiedlersees, am Fuß des Leithagebirges. Bekannt ist der Ort für seine Kirschbäume — die Kirschblüte im Frühjahr ist ein regionales Ereignis — sowie für die Bärenhöhle im Zeilerberg, in der Knochen eiszeitlicher Höhlenbären gefunden wurden. Mit Kellergassen, Weingärten und dem Wald des Leithagebirges direkt hinter dem Ort gehört Winden zu den ruhigsten und charmantesten Trainingsorten der Region.',
    localFeatures: [
      'Kirschblütenort am Fuß des Leithagebirges',
      'Bärenhöhle im Zeilerberg als Wahrzeichen',
      'Ruhige Kellergassen & Weingartenwege',
      'Ca. 10 Min. von Neusiedl am See',
    ],
    contactTitle: 'Interesse am mobilen Training in Winden am See?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Winden.',
    regionSectionTitle: 'Winden am See – Kirschblüte, Kellergassen &amp; Ruhe',
    regionSectionIntro: 'Winden ist der Ort für alle, die es ruhig angehen wollen: ein kompaktes Dorf, eingerahmt von Kirschbäumen, Weingärten und dem Wald des Leithagebirges. Hier kann dein Hund ohne Dauerbeschallung lernen — und trotzdem ist jeder Alltagsreiz in dosierter Form vorhanden: der Traktor des Winzers, Wanderer am Jubiläumsweg, Radfahrer Richtung Breitenbrunn. Diese Mischung aus Geborgenheit und echtem Leben macht Winden zum idealen Lernort für sensible Hunde und Welpen.',
    regionHighlights: [
      { title: 'Leithagebirgswald', description: 'Schattige Waldwege oberhalb des Ortes — ideal für Sommer-Training, Konzentrationsarbeit und kontrollierte Wildreize.', icon: 'reed' },
      { title: 'Kirschbäume &amp; Riedwege', description: 'Die berühmten Windener Kirschen säumen ruhige Wirtschaftswege — perfekt für Leinenführigkeit und Signalaufbau.', icon: 'cycle' },
      { title: 'Kellergasse Winden', description: 'Historisches Ortsbild mit gelegentlichen Begegnungen — Alltagstraining in entschleunigter Atmosphäre.', icon: 'wine' },
    ],
    regionTableRows: [
      { trainingsort: 'Kellergasse &amp; Ortskern', entfernung: '0 Min.', besonderheit: 'Historisches Dorfbild, wenig Verkehr', trainingsart: 'Alltagstraining, Leinenführigkeit' },
      { trainingsort: 'Kirsch-Riedwege', entfernung: '3 Min.', besonderheit: 'Ruhige Wirtschaftswege mit Weitblick', trainingsart: 'Rückruf, Signalaufbau' },
      { trainingsort: 'Leithagebirgswald', entfernung: '5 Min.', besonderheit: 'Schattige Waldwege, Wildreize', trainingsart: 'Konzentrationstraining, Impulskontrolle' },
      { trainingsort: 'Wohngebiet Winden', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Seeufer Richtung Breitenbrunn', entfernung: '5 Min.', besonderheit: 'Schilfgürtel &amp; Wasservögel', trainingsart: 'Reiztraining, Impulskontrolle' },
    ],
    regionCtaText: 'In Winden lernt dein Hund in Ruhe — und glänzt dann überall. Lass uns gemeinsam starten.',
  },

  moenchhof: {
    name: 'Mönchhof',
    slug: 'moenchhof',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im Heidebodendorf mit Geschichte — mobil bei dir zuhause in Mönchhof.',
    introTitle: 'Du wohnst in Mönchhof und willst deinen Hund alltagssicher machen?',
    introText: 'Mönchhof verbindet Seewinkel-Ruhe mit lebendiger Dorfkultur — vom berühmten Dorfmuseum bis zu den endlosen Wirtschaftswegen des Heidebodens. Unser mobiles Hundetraining kommt direkt zu dir nach Hause und arbeitet mit den echten Reizen eures Alltags.',
    detailsTitle: 'Dein Vorteil: Training im ruhigen Heideboden',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Mönchhof oder auf euren gewohnten Runden über die Wirtschaftswege des Heidebodens. Die weite, ebene Landschaft mit ihrer hervorragenden Sicht ist ideal für Rückruf- und Distanztraining — kaum Verkehr, kaum Überraschungen, viel Raum zum Lernen.',
    targetTitle: 'Für wen ist mobiles Training in Mönchhof geeignet?',
    targetText: 'Mobiles Hundetraining in Mönchhof eignet sich für Hunde jeden Alters — vom Welpen bis zum Senior. Besonders gut funktioniert die ruhige Umgebung für Hunde, die Schritt für Schritt an mehr Reize herangeführt werden sollen, und für Halter, die strukturiert am Grundgehorsam arbeiten möchten.',
    pillars: commonPillars('Mönchhof'),
    processSteps: commonSteps('Mönchhof'),
    faqs: [
      { question: 'Wie weit ist Mönchhof von Neusiedl entfernt?', answer: 'Mönchhof liegt etwa 12 Minuten Autofahrt von Neusiedl am See entfernt, im nördlichen Seewinkel. Wir kommen kostenlos zu dir nach Hause.' },
      { question: 'Was kostet mobiles Hundetraining in Mönchhof?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — mit Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€.' },
      { question: 'Können wir rund ums Dorfmuseum trainieren?', answer: 'Das Umfeld des Dorfmuseums ist an Besuchstagen ein guter Ort für dosiertes Begegnungstraining — Familien, Kinder und neue Gerüche in kontrollierbarer Menge. An ruhigen Tagen üben wir dort entspanntes Alltagsverhalten im historischen Ortsbild.' },
      { question: 'Mein Hund ist unsicher bei Traktoren — was tun?', answer: 'In einer Weinbau- und Landwirtschaftsgemeinde wie Mönchhof gehören Traktoren zum Alltag. Wir desensibilisieren mit Distanztraining und positiver Gegenkonditionierung — zuerst weit weg, dann schrittweise näher. Die meisten Hunde zeigen nach 3–5 Sitzungen deutlich mehr Gelassenheit.' },
      { question: 'Eignet sich der Heideboden für Welpen?', answer: 'Ideal sogar. Die ebenen, übersichtlichen Wirtschaftswege ohne Verkehr sind perfekt für erste Sozialisierungs-Spaziergänge, Rückruf-Anfänge und entspannte Erkundungstouren in der Prägephase.' },
      { question: 'Bietet ihr auch Training für Tierschutzhunde an?', answer: 'Ja, sehr gerne. Die ruhige Mönchhofer Umgebung ist ideal für den Vertrauensaufbau mit Hunden aus dem Tierschutz. Wir begleiten den Eingewöhnungsprozess Schritt für Schritt — bei dir zuhause, im Tempo deines Hundes.' },
    ],
    nearbyLocations: getNearby('moenchhof', ['halbturn', 'frauenkirchen', 'gols']),
    localDescription: 'Mönchhof ist eine Marktgemeinde mit rund 2.400 Einwohnern im nördlichen Seewinkel. Der Ort geht auf eine mittelalterliche Gründung der Zisterzienser von Heiligenkreuz zurück — daher der Name. Überregional bekannt ist das Dorfmuseum Mönchhof, das größte private Freilichtmuseum des Burgenlands, das das dörfliche Leben vergangener Jahrzehnte bewahrt. Rund um den Ort erstrecken sich Weingärten und die weiten Wirtschaftswege des Heidebodens — ein ruhiges, übersichtliches Trainingsgelände, wie es im Buche steht.',
    localFeatures: [
      'Dorfmuseum — größtes privates Freilichtmuseum des Burgenlands',
      'Weite Heideboden-Wirtschaftswege ohne Verkehr',
      'Weinbau-Tradition mit ruhigen Riedwegen',
      'Ca. 12 Min. von Neusiedl am See',
    ],
    contactTitle: 'Interesse am mobilen Training in Mönchhof?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Mönchhof.',
    regionSectionTitle: 'Mönchhof – Dorfgeschichte trifft Heideboden-Weite',
    regionSectionIntro: 'Mönchhof bietet die wahrscheinlich beste Balance im nördlichen Seewinkel: ein lebendiger Ortskern mit Dorfmuseum und Kellergassen auf der einen Seite, die stille, weite Heideboden-Ebene auf der anderen. Für dein Training heißt das: Wir können jede Einheit exakt dosieren — vom reizarmen Rückruftraining auf menschenleeren Wirtschaftswegen bis zum Alltagstraining zwischen Museumsbesuchern. Dein Hund lernt strukturiert, in seinem Tempo, in seiner Heimat.',
    regionHighlights: [
      { title: 'Dorfmuseum-Umfeld', description: 'Historisches Ortsbild mit Besucherfrequenz an Wochenenden — ideal für dosiertes Begegnungs- und Alltagstraining.', icon: 'historic' },
      { title: 'Heideboden-Ebene', description: 'Weite, ebene Steppenlandschaft mit endloser Sicht — der Klassiker für Rückruf, Distanztraining und Freilauf.', icon: 'field' },
      { title: 'Riedwege &amp; Kellergassen', description: 'Ruhige Weingartenwege rund um den Ort — perfekt für Leinenführigkeit und Signalaufbau ohne Ablenkungsstress.', icon: 'wine' },
    ],
    regionTableRows: [
      { trainingsort: 'Heideboden-Wege', entfernung: '3 Min.', besonderheit: 'Ebene Wirtschaftswege ohne Verkehr', trainingsart: 'Rückruf, Distanztraining, Freilauf' },
      { trainingsort: 'Dorfmuseum &amp; Ortskern', entfernung: '0 Min.', besonderheit: 'Historisches Ortsbild, Wochenend-Besucher', trainingsart: 'Begegnungstraining, Habituation' },
      { trainingsort: 'Wohngebiet Mönchhof', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Riedwege', entfernung: '3 Min.', besonderheit: 'Weingärten, gelegentliche Traktoren', trainingsart: 'Leinenführigkeit, Geräusch-Habituation' },
      { trainingsort: 'Neusiedl am See', entfernung: '12 Min.', besonderheit: 'Stadtleben &amp; Seepromenade', trainingsart: 'Reiztraining, Sozialisierung' },
    ],
    regionCtaText: 'Ruhe, Struktur und Weite — Mönchhof hat alles, was nachhaltiges Training braucht. Lass uns anfangen.',
  },

  halbturn: {
    name: 'Halbturn',
    slug: 'halbturn',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im Schlossort des Seewinkels — mobil bei dir zuhause in Halbturn.',
    introTitle: 'Du wohnst in Halbturn und willst mit deinem Hund auf Schloss-Niveau trainieren?',
    introText: 'Halbturn vereint barocke Eleganz mit Seewinkel-Weite: das berühmte Schloss mit seinem Park, Weingärten von internationalem Ruf und die stille Heideboden-Ebene bis zur ungarischen Grenze. Unser mobiles Hundetraining kommt direkt zu dir nach Hause — und nutzt diese Vielfalt für euer Training.',
    detailsTitle: 'Dein Vorteil: Training zwischen Schlosspark und Heide',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Halbturn oder auf euren gewohnten Runden — rund um den Schlosspark, durch die Weingärten oder hinaus auf die menschenleeren Wege Richtung Grenze. Diese Bandbreite von gepflegter Kulisse bis Steppenstille deckt jedes Trainingslevel ab.',
    targetTitle: 'Für wen ist mobiles Training in Halbturn geeignet?',
    targetText: 'Mobiles Hundetraining in Halbturn eignet sich für Hunde jeden Alters — vom Welpen bis zum Senior. Besonders profitieren Hunde, die zwischen ruhigem Dorfalltag und Ausflugs-Wochenenden (Schlossbesucher, Veranstaltungen) souverän wechseln sollen.',
    pillars: commonPillars('Halbturn'),
    processSteps: commonSteps('Halbturn'),
    faqs: [
      { question: 'Wie weit ist Halbturn von Neusiedl entfernt?', answer: 'Halbturn liegt etwa 18 Minuten Autofahrt von Neusiedl am See entfernt, im östlichen Seewinkel nahe der ungarischen Grenze. Die Anfahrt zu dir nach Hause ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Halbturn?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — inklusive Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€ pro Einheit.' },
      { question: 'Können wir rund um das Schloss trainieren?', answer: 'Das Umfeld von Schloss Halbturn ist ein hervorragender Trainingsort: gepflegte Alleen, an Veranstaltungstagen Besucherfrequenz, sonst herrschaftliche Ruhe. Wir üben dort Leinenführigkeit, entspannte Begegnungen und ruhiges Warten — natürlich mit Rücksicht auf die Anlage.' },
      { question: 'Mein Hund läuft an der Grenze frei — ist das ein Problem?', answer: 'Die Wirtschaftswege Richtung Ungarn sind weitläufig und oft menschenleer — ideal für Freilauf und Rückruftraining. Wichtig ist ein sicherer Rückruf, bevor die Leine abkommt; genau daran arbeiten wir mit Schleppleine und positiver Verstärkung.' },
      { question: 'Wie gehen wir mit Wild in den Weingärten um?', answer: 'Rehe, Hasen und Fasane gehören am Heideboden dazu. Wir trainieren Impulskontrolle und Alternativverhalten in kontrollierten Schritten — von der ersten Distanzübung bis zur echten Sichtung. So bleibt dein Hund auch bei Wildkontakt ansprechbar.' },
      { question: 'Eignet sich Halbturn für Welpentraining?', answer: 'Sehr gut. Die ruhigen Dorfstraßen und ebenen Riedwege sind perfekt für die ersten Übungseinheiten, und das Schlossumfeld liefert dosierte Begegnungsreize, sobald dein Welpe bereit dafür ist.' },
    ],
    nearbyLocations: getNearby('halbturn', ['moenchhof', 'frauenkirchen', 'andau']),
    localDescription: 'Halbturn ist eine Marktgemeinde mit rund 1.900 Einwohnern im östlichen Seewinkel, unmittelbar an der ungarischen Grenze. Wahrzeichen ist das barocke Schloss Halbturn, erbaut von Lucas von Hildebrandt — eines der bedeutendsten Barockschlösser Österreichs, umgeben von einem weitläufigen Park. Die Halbturner Weingärten genießen internationalen Ruf, und hinter dem Ort öffnet sich die stille Heideboden-Ebene. Dieser Dreiklang aus Kultur, Wein und Steppe macht Halbturn zu einem besonderen Trainingsstandort.',
    localFeatures: [
      'Barockschloss Halbturn mit weitläufigem Park',
      'International renommierte Weingärten',
      'Stille Grenzwege Richtung Ungarn',
      'Ca. 18 Min. von Neusiedl am See',
    ],
    contactTitle: 'Interesse am mobilen Training in Halbturn?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Halbturn.',
    regionSectionTitle: 'Halbturn – Barocke Kulisse, pannonische Weite',
    regionSectionIntro: 'Halbturn ist der eleganteste Trainingsort des Seewinkels: Wo sonst kannst du mit deinem Hund an einer Barockschloss-Allee Leinenführigkeit üben und zehn Minuten später auf menschenleeren Steppenwegen am Rückruf arbeiten? Diese Kontraste sind ein Geschenk — dein Hund lernt, sich in gepflegter Kulisse genauso souverän zu bewegen wie in völliger Stille. Und du bekommst Trainingseinheiten, die sich eher wie Ausflüge anfühlen.',
    regionHighlights: [
      { title: 'Schloss &amp; Park-Umfeld', description: 'Barocke Alleen und gepflegte Wege — ideal für Leinenführigkeit, ruhiges Warten und Begegnungen mit Besuchern.', icon: 'historic' },
      { title: 'Heideboden &amp; Grenzwege', description: 'Weite, oft menschenleere Wirtschaftswege Richtung Ungarn — perfekt für Rückruf, Freilauf und Distanztraining.', icon: 'field' },
      { title: 'Halbturner Weingärten', description: 'Renommierte Riedlagen mit ruhigen Wegen — der Klassiker für Signalaufbau und konzentriertes Arbeiten.', icon: 'wine' },
    ],
    regionTableRows: [
      { trainingsort: 'Schlossallee &amp; Parkumfeld', entfernung: '0–3 Min.', besonderheit: 'Gepflegte Kulisse, Wochenend-Besucher', trainingsart: 'Leinenführigkeit, Begegnungstraining' },
      { trainingsort: 'Grenzwege Richtung Ungarn', entfernung: '5 Min.', besonderheit: 'Menschenleere Wirtschaftswege', trainingsart: 'Rückruf, Freilauf, Schleppleine' },
      { trainingsort: 'Weingärten Halbturn', entfernung: '3 Min.', besonderheit: 'Ruhige Riedwege, gelegentlich Wild', trainingsart: 'Impulskontrolle, Signalaufbau' },
      { trainingsort: 'Wohngebiet Halbturn', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Frauenkirchen', entfernung: '8 Min.', besonderheit: 'Wallfahrtsort mit Pilgerfrequenz', trainingsart: 'Reiztraining, Habituation' },
    ],
    regionCtaText: 'Von der Schlossallee bis zur Steppe — in Halbturn trainiert ihr mit Stil. Lass uns starten.',
  },

  apetlon: {
    name: 'Apetlon',
    slug: 'apetlon',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im Herzen des Nationalparks — mobil bei dir zuhause in Apetlon.',
    introTitle: 'Du wohnst in Apetlon und willst deinen Hund mitten im Nationalpark souverän führen?',
    introText: 'Apetlon liegt im Herzen des Seewinkels, umgeben von Lacken, Hutweiden und dem Nationalpark Neusiedler See – Seewinkel. Mehr Naturreiz geht nicht — und genau deshalb ist gutes Training hier so wertvoll. Wir kommen direkt zu dir nach Hause und arbeiten mit den Reizen, die euren Alltag prägen.',
    detailsTitle: 'Dein Vorteil: Training an der Langen Lacke',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Apetlon oder auf euren gewohnten Runden — entlang der Hutweiden, an den Salzlacken oder auf den Wegen rund um die berühmte Lange Lacke. Tausende Gänse und Watvögel sind hier Alltag; ein Hund, der das souverän meistert, meistert alles.',
    targetTitle: 'Für wen ist mobiles Training in Apetlon geeignet?',
    targetText: 'Mobiles Hundetraining in Apetlon eignet sich für Hunde jeden Alters. Besonders wichtig ist es für Hunde mit Jagd- und Vogelinteresse — die Reizdichte des Nationalparks verlangt eine zuverlässige Leinenführigkeit und Impulskontrolle, die wir gemeinsam systematisch aufbauen.',
    pillars: commonPillars('Apetlon'),
    processSteps: commonSteps('Apetlon'),
    faqs: [
      { question: 'Wie weit ist Apetlon von Neusiedl entfernt?', answer: 'Apetlon liegt etwa 25 Minuten Autofahrt von Neusiedl am See entfernt, im südlichen Seewinkel. Die Anfahrt zu dir nach Hause ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Apetlon?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — inklusive Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€.' },
      { question: 'Darf mein Hund an die Lange Lacke?', answer: 'Die Lange Lacke ist Schutzgebiet — Hunde sind auf den ausgewiesenen Wegen und an der Leine erlaubt. Genau das machen wir zum Trainingsvorteil: Die kontrollierte Leinenpflicht-Situation mit maximalem Vogelreiz ist das beste Impulskontroll-Training, das die Region zu bieten hat.' },
      { question: 'Mein Hund dreht bei Gänsen durch — könnt ihr helfen?', answer: 'Ja — das ist DAS Apetloner Thema. Im Frühjahr und Herbst rasten zehntausende Gänse an den Lacken. Wir arbeiten mit großzügiger Distanz, Alternativverhalten und schrittweiser Annäherung. Nach 4–8 Einheiten bleiben die meisten Hunde auch bei Gänse-Sicht ansprechbar.' },
      { question: 'Wo können wir abseits des Nationalparks frei trainieren?', answer: 'Rund um Apetlon gibt es Wirtschaftswege und Hutweiden außerhalb der Schutzzonen, auf denen Freilauf- und Rückruftraining gut möglich ist. Wir zeigen dir die passenden Bereiche und bauen den Rückruf mit Schleppleine sicher auf.' },
      { question: 'Eignet sich Apetlon für Welpentraining?', answer: 'Ja, mit Plan: Die ruhigen Dorfstraßen sind ideal für erste Übungen, und die Naturreize des Seewinkels führen wir dosiert ein. Ein Welpe, der hier aufwächst und früh lernt, mit Vogelreizen umzugehen, hat fürs Leben gewonnen.' },
    ],
    nearbyLocations: getNearby('apetlon', ['illmitz', 'pamhagen', 'st-andrae-am-zicksee']),
    localDescription: 'Apetlon ist eine Marktgemeinde mit rund 1.700 Einwohnern im südlichen Seewinkel, mitten im Nationalpark Neusiedler See – Seewinkel. Die Gemeinde ist berühmt für die Lange Lacke — eines der bedeutendsten Vogelschutzgebiete Mitteleuropas, an dem im Frühjahr und Herbst zehntausende Wildgänse rasten. Salzlacken, Hutweiden mit Graurindern und die typische Puszta-Atmosphäre prägen das Gemeindegebiet. Für Hundehalter ist Apetlon anspruchsvoll und großartig zugleich: maximaler Naturreiz, maximale Lernchance.',
    localFeatures: [
      'Lange Lacke — Vogelparadies von europäischem Rang',
      'Mitten im Nationalpark Neusiedler See – Seewinkel',
      'Hutweiden & Salzlacken mit Puszta-Charakter',
      'Eine der vogelreichsten Gemeinden Österreichs',
    ],
    contactTitle: 'Interesse am mobilen Training in Apetlon?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Apetlon.',
    regionSectionTitle: 'Apetlon – Hundetraining an der Langen Lacke',
    regionSectionIntro: 'Apetlon ist die hohe Schule des Impulskontroll-Trainings: Nirgendwo sonst in Österreich trifft dein Hund auf eine derartige Dichte an Wildvögeln, Weidetieren und Naturreizen. Was nach Herausforderung klingt, ist die größte Chance — denn ein Hund, der an der Langen Lacke gelernt hat, bei zehntausend Gänsen ansprechbar zu bleiben, bringt diese Souveränität in jeden Alltag mit. Wir bauen genau diese Gelassenheit auf: kleinschrittig, gewaltfrei, mit dem Nationalpark als Trainingspartner.',
    regionHighlights: [
      { title: 'Lange Lacke', description: 'Berühmtes Vogelschutzgebiet mit Gänserast im Frühjahr und Herbst — Impulskontroll-Training auf höchstem Niveau, an der Leine auf ausgewiesenen Wegen.', icon: 'bird' },
      { title: 'Hutweiden &amp; Graurinder', description: 'Beweidete Steppenflächen mit Weidetier-Begegnungen — ideal, um Ruhe bei Großtier-Kontakt aufzubauen.', icon: 'field' },
      { title: 'Salzlacken-Wege', description: 'Stille Wege zwischen den Lacken — perfekt für Konzentrationstraining mit dezentem Naturreiz.', icon: 'lake' },
    ],
    regionTableRows: [
      { trainingsort: 'Lange Lacke (Rundweg)', entfernung: '5 Min.', besonderheit: 'Leinenpflicht, maximaler Vogelreiz', trainingsart: 'Impulskontrolle, Leinenführigkeit' },
      { trainingsort: 'Hutweiden', entfernung: '3 Min.', besonderheit: 'Weidetiere, Puszta-Landschaft', trainingsart: 'Ruhetraining, Begegnungen' },
      { trainingsort: 'Wohngebiet Apetlon', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Wirtschaftswege außerhalb der Schutzzone', entfernung: '3 Min.', besonderheit: 'Freilauf möglich', trainingsart: 'Rückruf, Schleppleinen-Training' },
      { trainingsort: 'Illmitz', entfernung: '10 Min.', besonderheit: 'Nationalpark-Hauptort', trainingsart: 'Reiztraining, Sozialisierung' },
    ],
    regionCtaText: 'Wer an der Langen Lacke souverän bleibt, bleibt es überall. Lass uns dieses Niveau gemeinsam erreichen.',
  },

  pamhagen: {
    name: 'Pamhagen',
    slug: 'pamhagen',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im südlichsten Seewinkel — mobil bei dir zuhause in Pamhagen.',
    introTitle: 'Du wohnst in Pamhagen und suchst Hundetraining am ruhigen Ende des Seewinkels?',
    introText: 'Pamhagen ist der südlichste Ort des Seewinkels — dort, wo Österreich in den ungarischen Hanság übergeht. Steppentierpark, weite Wiesen und grenzenlose Ruhe prägen den Alltag. Unser mobiles Hundetraining kommt direkt zu dir nach Hause und macht aus dieser Ruhe euren Trainingsvorteil.',
    detailsTitle: 'Dein Vorteil: Training am Tor zum Hanság',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Pamhagen oder auf euren gewohnten Runden — entlang der Wiesen Richtung Hanság, auf den Grenzwegen oder im ruhigen Ortsgebiet. Die flache, weite Landschaft mit ihrer hervorragenden Sicht macht jedes Rückruf- und Distanztraining planbar.',
    targetTitle: 'Für wen ist mobiles Training in Pamhagen geeignet?',
    targetText: 'Mobiles Hundetraining in Pamhagen eignet sich für Hunde jeden Alters — vom Welpen bis zum Senior. Besonders profitieren sensible Hunde, die Ruhe zum Lernen brauchen, sowie Hunde mit Wildinteresse, die an den Reizen der Hanság-Wiesen kontrolliert arbeiten sollen.',
    pillars: commonPillars('Pamhagen'),
    processSteps: commonSteps('Pamhagen'),
    faqs: [
      { question: 'Wie weit ist Pamhagen von Neusiedl entfernt?', answer: 'Pamhagen liegt etwa 30 Minuten Autofahrt von Neusiedl am See entfernt, ganz im Süden des Seewinkels an der ungarischen Grenze. Auch hierher kommen wir selbstverständlich kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Pamhagen?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — inklusive Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€ pro Einheit.' },
      { question: 'Stören die Tiergerüche vom Steppentierpark?', answer: 'Für viele Hunde sind die ungewohnten Gerüche rund um den Steppentierpark hochinteressant — wir nutzen das gezielt für Konzentrations- und Impulskontroll-Training. Ein Hund, der trotz Wolfs- und Wildtiergeruch ansprechbar bleibt, hat ein neues Level erreicht.' },
      { question: 'Können wir in den Hanság-Wiesen trainieren?', answer: 'Die Wiesen und Wirtschaftswege Richtung Hanság sind herrlich ruhig und weitläufig — ideal für Rückruf- und Schleppleinen-Training. In den Schutzbereichen gilt Leinenpflicht; auch das üben wir, denn entspanntes Leinegehen in Wildgebiet ist eine Kernkompetenz.' },
      { question: 'Mein Hund hat Angst vor fremden Menschen — hilft die ruhige Lage?', answer: 'Ja. Pamhagens entspanntes Umfeld ist ideal für ängstliche und unsichere Hunde: Wir kontrollieren jede Begegnung, bauen positive Verknüpfungen auf und steigern die Reizdichte erst, wenn dein Hund bereit ist — etwa bei den Gästen des Feriendorfs.' },
      { question: 'Trainiert ihr auch Urlaubsgäste mit Hund?', answer: 'Gerne! Wer mit Hund in Pamhagen oder Umgebung urlaubt, kann Einzelstunden flexibel buchen — zum Beispiel für entspannte Leinenführigkeit am Urlaubsort oder einen Auffrischungs-Rückruf vor den Nationalpark-Ausflügen.' },
    ],
    nearbyLocations: getNearby('pamhagen', ['apetlon', 'andau', 'st-andrae-am-zicksee']),
    localDescription: 'Pamhagen ist eine Marktgemeinde mit rund 1.600 Einwohnern am südlichsten Ende des Seewinkels, direkt an der Grenze zu Ungarn. Bekannt ist der Ort für den Steppentierpark Pamhagen mit Wölfen, Wildtieren und pannonischen Haustierrassen sowie für das große Feriendorf am Ortsrand. Hinter Pamhagen beginnt der Hanság (Waasen) — eine weite, ehemals moorige Wiesenlandschaft, die heute zu den stillsten Naturräumen Ostösterreichs zählt. Für Hundetraining bedeutet das: Ruhe, Weite und besondere Reize in perfekter Dosierung.',
    localFeatures: [
      'Südlichster Ort des Seewinkels an der ungarischen Grenze',
      'Steppentierpark mit besonderen Geruchs- und Sichtreizen',
      'Hanság-Wiesen — einer der stillsten Naturräume Ostösterreichs',
      'Feriendorf mit saisonaler Gäste-Frequenz',
    ],
    contactTitle: 'Interesse am mobilen Training in Pamhagen?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Pamhagen.',
    regionSectionTitle: 'Pamhagen – Stille Weite am Tor zum Hanság',
    regionSectionIntro: 'Pamhagen ist das ruhige Ende des Seewinkels — und genau darin liegt seine Stärke. Hier kannst du mit deinem Hund auf Wegen trainieren, auf denen euch oft eine Stunde lang niemand begegnet. Gleichzeitig liefern Steppentierpark und Feriendorf besondere Reize, die es sonst nirgends gibt: Wolfsgeruch, Wildtierlaute, Urlaubertrubel im Sommer. Diese Kombination macht Pamhagen zum Geheimtipp für alle, die systematisch und ohne Druck trainieren wollen.',
    regionHighlights: [
      { title: 'Hanság-Wiesen', description: 'Weite, stille Wiesenlandschaft an der Grenze — ideal für Rückruf, Schleppleinen-Arbeit und sensible Hunde.', icon: 'reed' },
      { title: 'Steppentierpark-Umfeld', description: 'Einzigartige Geruchs- und Geräuschreize von Wölfen und Wildtieren — Konzentrationstraining der besonderen Art.', icon: 'bird' },
      { title: 'Grenzwege', description: 'Menschenleere Wirtschaftswege Richtung Ungarn — Freilauf und Distanztraining in absoluter Ruhe.', icon: 'border' },
    ],
    regionTableRows: [
      { trainingsort: 'Hanság-Wiesen', entfernung: '5 Min.', besonderheit: 'Stille Wiesenlandschaft, teils Leinenpflicht', trainingsart: 'Rückruf, Schleppleine, Leinenführigkeit' },
      { trainingsort: 'Steppentierpark-Umfeld', entfernung: '3 Min.', besonderheit: 'Wildtier-Gerüche und -Geräusche', trainingsart: 'Konzentration, Impulskontrolle' },
      { trainingsort: 'Wohngebiet Pamhagen', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Feriendorf-Umfeld', entfernung: '3 Min.', besonderheit: 'Saisonale Gäste-Frequenz', trainingsart: 'Begegnungstraining, Habituation' },
      { trainingsort: 'Apetlon &amp; Lange Lacke', entfernung: '10 Min.', besonderheit: 'Nationalpark-Vogelreize', trainingsart: 'Impulskontrolle, Reiztraining' },
    ],
    regionCtaText: 'Im stillsten Winkel des Seewinkels wachsen die souveränsten Hunde. Lass uns in Pamhagen starten.',
  },

  'st-andrae-am-zicksee': {
    name: 'St. Andrä am Zicksee',
    slug: 'st-andrae-am-zicksee',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining am Zicksee — mobil bei dir zuhause in St. Andrä.',
    introTitle: 'Du wohnst in St. Andrä am Zicksee und willst entspannt durch den Seewinkel-Alltag?',
    introText: 'St. Andrä liegt mitten im Seewinkel rund um den namensgebenden Zicksee — mit Badebetrieb und Camping im Sommer und herrlicher Stille den Rest des Jahres. Unser mobiles Hundetraining kommt direkt zu dir nach Hause und arbeitet mit genau diesem Wechsel aus Saison-Trubel und Steppenruhe.',
    detailsTitle: 'Dein Vorteil: Training am Steppensee',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in St. Andrä oder auf euren gewohnten Runden — um den Zicksee, entlang der Wirtschaftswege oder durchs ruhige Ortsgebiet. Der Rundweg um den See ist eine ideale Trainingsstrecke: übersichtlich, eben und mit fein dosierbaren Begegnungsreizen.',
    targetTitle: 'Für wen ist mobiles Training in St. Andrä geeignet?',
    targetText: 'Mobiles Hundetraining in St. Andrä am Zicksee eignet sich für Hunde jeden Alters — vom Welpen bis zum Senior. Besonders gut passt es für Familienhunde, die sowohl mit Camping- und Badegästen im Sommer als auch mit den Wildreizen des Seewinkels souverän umgehen sollen.',
    pillars: commonPillars('St. Andrä am Zicksee'),
    processSteps: commonSteps('St. Andrä am Zicksee'),
    faqs: [
      { question: 'Wie weit ist St. Andrä von Neusiedl entfernt?', answer: 'St. Andrä am Zicksee liegt etwa 20 Minuten Autofahrt von Neusiedl am See entfernt, mitten im Seewinkel. Die Anfahrt zu dir nach Hause ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in St. Andrä?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — inklusive Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€.' },
      { question: 'Können wir am Zicksee-Rundweg trainieren?', answer: 'Ja, der Rundweg um den Zicksee ist eine unserer Lieblingsstrecken: eben, übersichtlich und mit gut vorhersehbaren Begegnungen. Im Sommer üben wir dort Souveränität bei Badebetrieb, außerhalb der Saison gehört der Weg fast euch allein.' },
      { question: 'Mein Hund ist von Campinggästen überfordert — was tun?', answer: 'Der Campingplatz bringt im Sommer viele neue Menschen, Hunde und Gerüche. Wir bauen Begegnungs-Souveränität schrittweise auf: erst mit Distanz zum Trubel, dann immer näher — immer mit positiver Verstärkung. So wird aus Stress entspannte Routine.' },
      { question: 'Was ist mit den Storchennestern im Ort?', answer: 'Wie in vielen Seewinkel-Gemeinden klappern auch in St. Andrä im Sommer die Störche — ein wunderbarer, gut kontrollierbarer Reiz für Impulskontroll-Training. Dein Hund lernt: Vögel am Himmel und am Nest sind keine Beute, sondern Alltag.' },
      { question: 'Eignet sich St. Andrä für Welpentraining?', answer: 'Sehr gut. Die ruhigen Ortsstraßen und der übersichtliche Seerundweg sind ideal für die Prägephase — und mit dem saisonalen Badebetrieb haben wir eine perfekt dosierbare Reizquelle für die fortgeschrittene Sozialisierung.' },
    ],
    nearbyLocations: getNearby('st-andrae-am-zicksee', ['frauenkirchen', 'andau', 'apetlon']),
    localDescription: 'St. Andrä am Zicksee ist eine Marktgemeinde mit rund 1.500 Einwohnern im Herzen des Seewinkels. Namensgeber ist der Zicksee — ein für die Region typischer Steppensee mit Badeareal und großem Campingplatz, der im Sommer Gäste aus dem ganzen Land anzieht. Außerhalb der Saison gehört die Gemeinde zu den ruhigsten Ecken des Seewinkels: Wirtschaftswege, Lacken-Landschaft und weite Felder, so weit das Auge reicht. Dieser Wechsel aus Saisonleben und Steppenstille bietet ideale Trainingsbedingungen.',
    localFeatures: [
      'Zicksee mit Rundweg, Badeareal & Camping',
      'Mitten im Seewinkel zwischen Lacken und Feldern',
      'Sommer-Trubel und Winter-Stille im Wechsel',
      'Ca. 20 Min. von Neusiedl am See',
    ],
    contactTitle: 'Interesse am mobilen Training in St. Andrä am Zicksee?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in St. Andrä.',
    regionSectionTitle: 'St. Andrä am Zicksee – Trainieren im Rhythmus der Saison',
    regionSectionIntro: 'St. Andrä hat einen Trainingsvorteil, den man erst auf den zweiten Blick erkennt: den Jahreszeiten-Rhythmus. Im Sommer liefert das Badeareal am Zicksee lebendige Begegnungsreize — Camping-Gäste, Kinder, fremde Hunde. Von Herbst bis Frühjahr verwandelt sich derselbe Ort in eine stille Steppenlandschaft, in der dein Hund ungestört Grundlagen festigen kann. Wir nutzen beide Welten gezielt: Aufbau in der Ruhe, Bewährung im Trubel.',
    regionHighlights: [
      { title: 'Zicksee-Rundweg', description: 'Ebener, übersichtlicher Rundweg um den Steppensee — die ideale Trainingsstrecke für Leinenführigkeit und dosierte Begegnungen.', icon: 'lake' },
      { title: 'Seewinkel-Felder', description: 'Weite Wirtschaftswege zwischen Lacken und Äckern — perfekt für Rückruf, Distanztraining und Freilauf.', icon: 'field' },
      { title: 'Camping &amp; Badeareal', description: 'Saisonale Reizquelle mit Gästen, Kindern und Hunden — Begegnungstraining unter realen Urlaubsbedingungen.', icon: 'cycle' },
    ],
    regionTableRows: [
      { trainingsort: 'Zicksee-Rundweg', entfernung: '0–3 Min.', besonderheit: 'Ebener Rundweg, saisonale Frequenz', trainingsart: 'Leinenführigkeit, Begegnungstraining' },
      { trainingsort: 'Wirtschaftswege Seewinkel', entfernung: '3 Min.', besonderheit: 'Weite Felder, kaum Verkehr', trainingsart: 'Rückruf, Distanztraining, Freilauf' },
      { trainingsort: 'Wohngebiet St. Andrä', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Camping-Umfeld', entfernung: '3 Min.', besonderheit: 'Sommergäste, fremde Hunde', trainingsart: 'Souveränität, Habituation' },
      { trainingsort: 'Frauenkirchen', entfernung: '7 Min.', besonderheit: 'Wallfahrtsort mit Basilika', trainingsart: 'Reiztraining, Sozialisierung' },
    ],
    regionCtaText: 'Aufbauen in der Stille, bestehen im Sommertrubel — das ist Training in St. Andrä. Lass uns anfangen.',
  },

  kittsee: {
    name: 'Kittsee',
    slug: 'kittsee',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining im Dreiländereck bei Bratislava — mobil bei dir zuhause in Kittsee.',
    introTitle: 'Du wohnst in Kittsee und willst einen Hund, der mit Stadtnähe und Marillengärten gleich gut kann?',
    introText: 'Kittsee ist die dynamischste Gemeinde des Bezirks: direkt an der Grenze zu Bratislava gelegen, stark wachsend, mit Schlosspark, berühmten Marillengärten und urbanem Pendler-Alltag. Unser mobiles Hundetraining kommt direkt zu dir nach Hause — und macht deinen Hund fit für genau diese Mischung.',
    detailsTitle: 'Dein Vorteil: Training im Dreiländereck',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Kittsee oder auf euren gewohnten Runden — durch die Marillengärten, den Schlosspark oder die neuen Siedlungsgebiete. Kittsee verbindet ruhige Obstgarten-Wege mit der höchsten Bevölkerungsdynamik der Region: ideale Bedingungen, um echten Alltags-Gehorsam aufzubauen.',
    targetTitle: 'Für wen ist mobiles Training in Kittsee geeignet?',
    targetText: 'Mobiles Hundetraining in Kittsee eignet sich für Hunde jeden Alters. Besonders profitieren Hunde junger Familien in den wachsenden Siedlungsgebieten: viele Nachbarshunde, Kinder, Pendlerverkehr — wer hier souverän ist, meistert auch den Städtetrip nach Bratislava oder Wien.',
    pillars: commonPillars('Kittsee'),
    processSteps: commonSteps('Kittsee'),
    faqs: [
      { question: 'Wie weit ist Kittsee von Neusiedl entfernt?', answer: 'Kittsee liegt etwa 25 Minuten Autofahrt von Neusiedl am See entfernt, im nördlichsten Zipfel des Bezirks direkt an der slowakischen Grenze. Die Anfahrt zu dir nach Hause ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Kittsee?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — inklusive Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€ pro Einheit.' },
      { question: 'Können wir im Schlosspark trainieren?', answer: 'Das Umfeld von Schloss Kittsee mit seinen Alleen und Grünflächen ist ein hervorragender Trainingsort für Leinenführigkeit und Begegnungen — gepflegt, übersichtlich und mit gut dosierbarer Besucherfrequenz.' },
      { question: 'Unser Neubaugebiet ist voller Hunde — wie klappen Begegnungen?', answer: 'Kittsee wächst schnell, und mit den neuen Siedlungen steigt die Hundedichte. Genau dort trainieren wir entspannte Leinen-Begegnungen: Bogen laufen, Blickkontakt zu dir, ruhiges Passieren. Das mobile Format ist dafür perfekt, weil wir in eurem echten Wohnumfeld üben.' },
      { question: 'Mein Hund frisst Fallobst in den Marillengärten — was tun?', answer: 'Ein klassisches Kittseer Thema! Wir bauen ein zuverlässiges Abbruchsignal und „Schau her"-Alternativverhalten auf — mit positiver Verstärkung statt Verboten. So bleiben die berühmten Kittseer Marillen am Boden liegen, wo sie hingehören.' },
      { question: 'Eignet sich Kittsee für Welpentraining?', answer: 'Sehr gut. Die Mischung aus ruhigen Obstgarten-Wegen und lebendigen Wohngebieten erlaubt eine perfekt gestaffelte Sozialisierung — vom ersten stillen Spaziergang bis zur souveränen Runde durchs belebte Ortszentrum.' },
    ],
    nearbyLocations: getNearby('kittsee', ['bruckneudorf', 'parndorf', 'neusiedl-am-see']),
    localDescription: 'Kittsee ist mit rund 3.300 Einwohnern eine der größten und am schnellsten wachsenden Gemeinden des Bezirks Neusiedl am See — gelegen im Dreiländereck Österreich–Slowakei–Ungarn, nur wenige Kilometer von Bratislava entfernt. Berühmt ist Kittsee für seine Marillengärten (die Kittseer Marille ist eine regionale Marke) und das Schloss Kittsee mit seinem Park. Die Nähe zur slowakischen Hauptstadt bringt urbane Dynamik in den Ort: neue Siedlungen, junge Familien, Pendlerverkehr — und damit ein Trainingsumfeld, das ländliche Ruhe und städtische Reize einzigartig kombiniert.',
    localFeatures: [
      'Dreiländereck — nur wenige Minuten bis Bratislava',
      'Berühmte Kittseer Marillengärten',
      'Schloss Kittsee mit Park und Alleen',
      'Am schnellsten wachsende Gemeinde des Bezirks',
    ],
    contactTitle: 'Interesse am mobilen Training in Kittsee?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Kittsee.',
    regionSectionTitle: 'Kittsee – Marillenblüte trifft Metropolen-Nähe',
    regionSectionIntro: 'Kittsee ist das urbane Gegenstück zum stillen Seewinkel: Hier wächst der Bezirk, hier pendeln Menschen nach Bratislava und Wien, hier treffen junge Familien mit Hunden auf historische Marillengärten und Schlosspark-Alleen. Für dein Training ist das ideal — denn die meisten Alltagsprobleme moderner Hunde entstehen genau in diesem Spannungsfeld aus Wohngebiet, Verkehr und Begegnungsdichte. Wir trainieren mittendrin, bei dir zuhause, und machen deinen Hund stadtfest und landtauglich zugleich.',
    regionHighlights: [
      { title: 'Marillengärten', description: 'Die berühmten Obstgärten rund um den Ort — ruhige Wege zur Blüte- und Erntezeit mit besonderen Duftreizen.', icon: 'field' },
      { title: 'Schloss Kittsee &amp; Park', description: 'Gepflegte Alleen und Grünflächen — ideal für Leinenführigkeit, ruhiges Warten und kontrollierte Begegnungen.', icon: 'historic' },
      { title: 'Dreiländereck-Wege', description: 'Grenzwege Richtung Slowakei und Ungarn — Weite und Ruhe als Ausgleich zum lebendigen Ortskern.', icon: 'border' },
    ],
    regionTableRows: [
      { trainingsort: 'Marillengärten', entfernung: '0–3 Min.', besonderheit: 'Obstgarten-Wege, saisonale Duftreize', trainingsart: 'Leinenführigkeit, Abbruchsignal' },
      { trainingsort: 'Schlosspark-Umfeld', entfernung: '0 Min.', besonderheit: 'Alleen, Besucher, gepflegte Kulisse', trainingsart: 'Begegnungstraining, Ruheübungen' },
      { trainingsort: 'Neubaugebiete', entfernung: '0 Min.', besonderheit: 'Hohe Hundedichte, Familienalltag', trainingsart: 'Hundebegegnungen, Alltagstraining' },
      { trainingsort: 'Grenzwege', entfernung: '5 Min.', besonderheit: 'Ruhige Wirtschaftswege im Dreiländereck', trainingsart: 'Rückruf, Distanztraining' },
      { trainingsort: 'Wohnung/Haus in Kittsee', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
    ],
    regionCtaText: 'Stadtnah wohnen, souverän leben — dein Hund kann beides lernen. Lass uns in Kittsee starten.',
  },

  bruckneudorf: {
    name: 'Bruckneudorf',
    slug: 'bruckneudorf',
    heroSubtitle: 'Ganzheitliches & gewaltfreies Hundetraining zwischen Leitha-Auen und Parndorfer Platte — mobil bei dir zuhause in Bruckneudorf.',
    introTitle: 'Du wohnst in Bruckneudorf und willst einen gelassenen Begleiter im Pendler-Alltag?',
    introText: 'Bruckneudorf liegt am Übergang vom Burgenland nach Niederösterreich — mit den Leitha-Auen vor der Tür, der Parndorfer Platte im Rücken und einem der wichtigsten Bahnknoten der Region. Unser mobiles Hundetraining kommt direkt zu dir nach Hause. Übrigens: Hier grenzt auch das Stammgebiet unserer Willenskraft-Welpenschule Bruck an der Leitha an.',
    detailsTitle: 'Dein Vorteil: Training in den Leitha-Auen',
    detailsText: 'Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Bruckneudorf oder auf euren gewohnten Runden — durch die Leitha-Auen, am Ortsrand Richtung Parndorfer Platte oder im Bahnhofsumfeld. Vom schattigen Auwald bis zur offenen Heide ist hier jedes Trainingsszenario in wenigen Minuten erreichbar.',
    targetTitle: 'Für wen ist mobiles Training in Bruckneudorf geeignet?',
    targetText: 'Mobiles Hundetraining in Bruckneudorf eignet sich für Hunde jeden Alters — vom Welpen bis zum Senior. Besonders profitieren Pendler-Haushalte, deren Hund Bahnhof, Zugverkehr und Alleinbleiben souverän meistern soll, sowie Hunde mit Geräuschempfindlichkeit.',
    pillars: commonPillars('Bruckneudorf'),
    processSteps: commonSteps('Bruckneudorf'),
    faqs: [
      { question: 'Wie weit ist Bruckneudorf von Neusiedl entfernt?', answer: 'Bruckneudorf liegt etwa 15 Minuten Autofahrt von Neusiedl am See entfernt, am Westrand der Parndorfer Platte direkt bei Bruck an der Leitha. Die Anfahrt zu dir nach Hause ist kostenlos.' },
      { question: 'Was kostet mobiles Hundetraining in Bruckneudorf?', answer: 'Unsere mobile Erstberatung (90 Minuten) kostet 95€ — inklusive Analyse, Zielbesprechung und individuellem Trainingsplan. Folge-Einzelstunden buchst du flexibel für 55€ pro Einheit.' },
      { question: 'Mein Hund erschrickt bei Schüssen vom Truppenübungsplatz — was tun?', answer: 'Der angrenzende Truppenübungsplatz sorgt gelegentlich für Knallgeräusche — für geräuschempfindliche Hunde belastend, fürs Training aber eine kontrollierbare Übungssituation. Wir desensibilisieren schrittweise mit Distanz, positiver Verknüpfung und Sicherheitssignalen. Viele Hunde verbessern sich deutlich innerhalb weniger Wochen.' },
      { question: 'Können wir in den Leitha-Auen trainieren?', answer: 'Ja, die Auwege an der Leitha sind ein wunderbares Trainingsgelände: schattig im Sommer, reich an Spuren und Gerüchen, mit Wildreizen in dosierter Form. Ideal für Leinenführigkeit, Konzentrationsarbeit und kontrolliertes Schnüffeltraining.' },
      { question: 'Ihr seid doch auch in Bruck an der Leitha aktiv?', answer: 'Genau — Bruckneudorf grenzt direkt an das Stammgebiet unserer Willenskraft-Welpenschule Bruck an der Leitha. Für dich heißt das: kurze Wege, flexible Termine und bei Bedarf auch ein Platz im nächsten Welpen-Gruppenkurs der Region.' },
      { question: 'Eignet sich das Bahnhofsumfeld fürs Training?', answer: 'Sehr gut sogar. Der Bahnknoten Bruck/Bruckneudorf bietet Züge, Pendlerströme und Lautsprecher-Ansagen — perfekte Übungsreize für Hunde, die öffentliche Verkehrsmittel kennenlernen oder gelassener werden sollen. Wir steigern die Nähe schrittweise und immer im Tempo deines Hundes.' },
    ],
    nearbyLocations: getNearby('bruckneudorf', ['parndorf', 'kittsee', 'neusiedl-am-see']),
    localDescription: 'Bruckneudorf ist eine Marktgemeinde mit rund 3.200 Einwohnern im äußersten Nordwesten des Bezirks Neusiedl am See — direkt gegenüber von Bruck an der Leitha, mit dem es historisch und alltäglich eng verwachsen ist. Die Leitha bildet hier die alte Grenze zwischen Österreich und Ungarn. Geprägt wird die Gemeinde von den Leitha-Auen, dem großen Truppenübungsplatz auf der Parndorfer Platte und dem wichtigen Bahnknoten an der Ostbahn. Für Hundehalter bedeutet das: Auwald, Heide und urbane Pendler-Reize in unmittelbarer Nachbarschaft.',
    localFeatures: [
      'Leitha-Auen mit schattigen Auwald-Wegen',
      'Direkt bei Bruck an der Leitha — Willenskraft-Stammgebiet',
      'Bahnknoten Ostbahn für Zug- und Pendler-Training',
      'Parndorfer Platte am Ortsrand',
    ],
    contactTitle: 'Interesse am mobilen Training in Bruckneudorf?',
    contactText: 'Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund in Bruckneudorf.',
    regionSectionTitle: 'Bruckneudorf – Auwald, Heide &amp; Pendler-Souveränität',
    regionSectionIntro: 'Bruckneudorf ist für Hundetraining ein Komplettpaket: Die Leitha-Auen liefern Wald, Wasser und Wildgerüche, die Parndorfer Platte Weite und Wind, und der Bahnknoten den urbanen Reiz-Anteil, den moderne Hunde beherrschen müssen. Dazu kommt die direkte Nachbarschaft zum Stammgebiet unserer Willenskraft-Welpenschule in Bruck an der Leitha — kurze Wege, eingespielte Abläufe, volle Kursauswahl. Hier trainierst du mit Heimvorteil.',
    regionHighlights: [
      { title: 'Leitha-Auen', description: 'Schattige Auwald-Wege mit Wasser- und Wildreizen — ideal für Konzentrationsarbeit, Schnüffeltraining und Sommer-Einheiten.', icon: 'reed' },
      { title: 'Parndorfer Platte', description: 'Offene Heide-Landschaft am Ortsrand — perfekt für Rückruf, Distanztraining und Freilauf.', icon: 'field' },
      { title: 'Bahnhof &amp; Pendler-Alltag', description: 'Züge, Ansagen, Menschenströme — kontrollierbares Großstadt-Training mitten im Burgenland.', icon: 'cycle' },
    ],
    regionTableRows: [
      { trainingsort: 'Leitha-Auen', entfernung: '3 Min.', besonderheit: 'Auwald, Wasser, Wildgerüche', trainingsart: 'Konzentration, Leinenführigkeit' },
      { trainingsort: 'Parndorfer Platte', entfernung: '5 Min.', besonderheit: 'Offene Heide, weite Sicht', trainingsart: 'Rückruf, Distanztraining, Freilauf' },
      { trainingsort: 'Bahnhofsumfeld', entfernung: '0–3 Min.', besonderheit: 'Züge, Pendlerströme, Geräusche', trainingsart: 'Habituation, Souveränitätstraining' },
      { trainingsort: 'Wohngebiet Bruckneudorf', entfernung: '0 Min.', besonderheit: 'Training direkt bei dir zuhause', trainingsart: 'Einzeltraining, Welpentraining' },
      { trainingsort: 'Bruck an der Leitha', entfernung: '3 Min.', besonderheit: 'Willenskraft-Stammgebiet, Welpenkurse', trainingsart: 'Welpen-Gruppenkurs, Stadttraining' },
    ],
    regionCtaText: 'Auwald, Heide, Bahnhof — und Willenskraft direkt nebenan. In Bruckneudorf trainierst du mit Heimvorteil.',
  },
};

export function getRegionData(slug: string): RegionData {
  return regionData[slug];
}

export function getAllRegionSlugs(): string[] {
  return Object.keys(regionData);
}

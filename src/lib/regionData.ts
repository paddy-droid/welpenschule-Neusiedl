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
  { name: 'Frauenkirchen', slug: 'frauenkirchen' },
  { name: 'Parndorf', slug: 'parndorf' },
  { name: 'Weiden am See', slug: 'weiden-am-see' },
  { name: 'Illmitz', slug: 'illmitz' },
  { name: 'Andau', slug: 'andau' },
];

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
};

export function getRegionData(slug: string): RegionData {
  return regionData[slug];
}

export function getAllRegionSlugs(): string[] {
  return Object.keys(regionData);
}

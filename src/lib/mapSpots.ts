/**
 * Themen-Marker für die interaktiven Trainingsorte-Karten der Landingpages.
 * Koordinaten = ungefähre Lage der Trainingsgebiete (keine exakten Adressen);
 * der „Bei dir zuhause"-Marker kommt automatisch aus regionCoords.
 *
 * Faktencheck-Regeln:
 * - Strandbäder am Neusiedlersee: im Badebereich gilt Hundeverbot → wir
 *   markieren die Bereiche DAVOR (Promenade, Seeufer) und sagen das ehrlich dazu.
 * - Podersdorf hat einen ausgewiesenen Hundebadeplatz (Hundestrand) — einer
 *   der wenigen offiziellen am See.
 * - Nationalpark: ganzjährige Leinenpflicht → als Trainingsvorteil formuliert.
 * - Popups transportieren die Willenskraft-Schwerpunkte: Welpen, Dummytraining,
 *   Begegnungstraining, Medical Training, Tierschutzhunde, Alltagstraining.
 */

export type SpotIcon =
  | 'paw'
  | 'water'
  | 'bird'
  | 'wine'
  | 'castle'
  | 'church'
  | 'cycle'
  | 'train'
  | 'field'
  | 'forest'
  | 'wolf'
  | 'camp'
  | 'museum'
  | 'anchor'
  | 'dog'
  | 'ball';

export interface MapSpot {
  name: string;
  lat: number;
  lng: number;
  icon: SpotIcon;
  /** Kurzbeschreibung fürs Popup — was hier nach Willenskraft-Ansatz trainiert wird */
  text: string;
}

export const spotEmoji: Record<SpotIcon, string> = {
  paw: '🐾',
  water: '🌊',
  bird: '🦆',
  wine: '🍇',
  castle: '🏰',
  church: '⛪',
  cycle: '🚲',
  train: '🚆',
  field: '🌾',
  forest: '🌳',
  wolf: '🐺',
  camp: '⛺',
  museum: '🏛️',
  anchor: '⚓',
  dog: '🐕',
  ball: '🎾',
};

export const mapSpots: Record<string, MapSpot[]> = {
  'neusiedl-am-see': [
    { name: 'Seepromenade (vor dem Strandbad)', lat: 47.9305, lng: 16.843, icon: 'water', text: 'Leinenführigkeit & Begegnungstraining auf der Promenade. Wichtig: Im Strandbad selbst gilt Hundeverbot — wir trainieren davor, mit genau den richtigen Alltagsreizen.' },
    { name: 'Schilfgürtel', lat: 47.929, lng: 16.847, icon: 'bird', text: 'Impulskontrolle bei Wasservögeln & Wind im UNESCO-Welterbe-Schilf — einer unserer Willenskraft-Schwerpunkte.' },
    { name: 'Tabor & Altstadt', lat: 47.9495, lng: 16.8415, icon: 'church', text: 'Alltagstraining nach Willenskraft-Ansatz: Café-Besuch, Kopfsteinpflaster, entspanntes Warten im Stadtkern.' },
    { name: 'Stadtweinberge', lat: 47.956, lng: 16.835, icon: 'wine', text: 'Rückruf & Signalaufbau auf ruhigen Weinbergwegen mit Weitblick — ideal auch für Welpen-Spaziergänge.' },
    { name: 'Bahnhof Neusiedl am See', lat: 47.953, lng: 16.848, icon: 'train', text: 'Öffi- & Geräusch-Habituation: Züge, Ansagen, Pendler — Alltagstraining für Hunde, die überall mit dabei sein sollen.' },
  ],
  gols: [
    { name: 'Weinberge Gols', lat: 47.905, lng: 16.9, icon: 'wine', text: 'Rückruf & Freilauf zwischen den Rebzeilen — ohne Verkehr, mit kontrollierbaren Wildreizen.' },
    { name: 'Kellergasse', lat: 47.899, lng: 16.915, icon: 'paw', text: 'Leinenführigkeit & Welpen-Sozialisierung im historischen Ortsbild — dosierte Begegnungen in entspanntem Tempo.' },
    { name: 'Heideboden', lat: 47.885, lng: 16.935, icon: 'field', text: 'Distanztraining & Rückruf in der weiten Steppenlandschaft.' },
    { name: 'Wiesen am Ortsrand', lat: 47.89, lng: 16.905, icon: 'ball', text: 'Dummytraining & Nasenarbeit — artgerechte Auslastung nach Willenskraft-Ansatz statt Dauerpower.' },
  ],
  parndorf: [
    { name: 'Parndorfer Platte', lat: 48.015, lng: 16.85, icon: 'field', text: 'Rückruf, Freilauf & Distanztraining in der weiten Heide-Ebene.' },
    { name: 'Outlet-Umgebung (Außenbereich)', lat: 47.983, lng: 16.842, icon: 'paw', text: 'Begegnungstraining & Reizmanagement im Außenbereich rund ums Center — Menschen, Taschen, Kinderwägen.' },
    { name: 'Bahnhof Parndorf Ort', lat: 48.0, lng: 16.856, icon: 'train', text: 'Zug- & Geräusch-Habituation für Pendlerhunde — Alltagstraining nach Willenskraft-Ansatz.' },
    { name: 'Heidewiesen', lat: 48.008, lng: 16.845, icon: 'ball', text: 'Dummytraining & Nasenarbeit auf weiten Wiesenflächen — Auslastung, die müde UND zufrieden macht.' },
  ],
  'weiden-am-see': [
    { name: 'Seeufer & Hafen Weiden', lat: 47.918, lng: 16.868, icon: 'water', text: 'Begegnungs- & Wassertraining am Seezugang außerhalb des Strandbads — im Badebereich selbst gilt im Sommer Hundeverbot.' },
    { name: 'Schilfgürtel-Steg', lat: 47.915, lng: 16.875, icon: 'bird', text: 'Konzentrationstraining & Impulskontrolle bei Wasservögeln auf stillen Holzstegen.' },
    { name: 'Weinberge Weiden', lat: 47.935, lng: 16.865, icon: 'wine', text: 'Rückruf & Freilauf in ruhiger Hügellage — auch perfekt für erste Welpen-Ausflüge.' },
    { name: 'Wiesenwege Richtung Gols', lat: 47.93, lng: 16.88, icon: 'ball', text: 'Dummytraining & Nasenarbeit — strukturierte Auslastung nach Willenskraft-Ansatz.' },
  ],
  jois: [
    { name: 'Weinriede mit Seeblick', lat: 47.965, lng: 16.805, icon: 'wine', text: 'Rückruf & Signalaufbau zwischen Rebzeilen — unten glitzert der See.' },
    { name: 'Hackelsberg & Jungerberg', lat: 47.972, lng: 16.785, icon: 'forest', text: 'Leinenführigkeit & Impulskontrolle im Naturschutzgebiet — die Leinenwege sind dafür der perfekte Übungsrahmen.' },
    { name: 'Seeufer & Schilf', lat: 47.948, lng: 16.8, icon: 'bird', text: 'Reiztraining bei Wasservögeln am Nordwestufer.' },
    { name: 'Ortskern Jois', lat: 47.961, lng: 16.7975, icon: 'paw', text: 'Welpen-Sozialisierung in dosiertem Tempo: ruhige Gassen, freundliche Begegnungen, echte Alltagsgeräusche.' },
  ],
  'winden-am-see': [
    { name: 'Kellergasse Winden', lat: 47.948, lng: 16.751, icon: 'wine', text: 'Alltagstraining & Welpen-Spaziergänge im entschleunigten historischen Ortsbild.' },
    { name: 'Kirsch-Riedwege', lat: 47.952, lng: 16.745, icon: 'cycle', text: 'Leinenführigkeit & Rückruf entlang der berühmten Kirschbäume — zur Blüte mit dosierten Ausflügler-Begegnungen.' },
    { name: 'Leithagebirgswald', lat: 47.956, lng: 16.738, icon: 'forest', text: 'Schattiges Sommer-Training, Nasenarbeit & kontrollierte Wildreize am Zeilerberg.' },
    { name: 'Seeufer Richtung Breitenbrunn', lat: 47.938, lng: 16.756, icon: 'bird', text: 'Impulskontrolle am Schilfgürtel — ruhig und gut steuerbar.' },
  ],
  'podersdorf-am-see': [
    { name: 'Hundestrand Podersdorf', lat: 47.8625, lng: 16.834, icon: 'dog', text: 'Ausgewiesener Hundebadeplatz am Nordstrand — einer der wenigen offiziellen Hundestrände am See! Hier üben wir Wassertraining & das Erlaubnis-Signal.' },
    { name: 'Leuchtturm & Mole', lat: 47.854, lng: 16.833, icon: 'anchor', text: 'Begegnungstraining am Wahrzeichen. Im Strandbad selbst gilt Hundeverbot — wir arbeiten auf der Promenade davor, wo der echte Trubel ist.' },
    { name: 'Hutweide', lat: 47.865, lng: 16.855, icon: 'field', text: 'Rückruf & Distanztraining in der stillen Beweidungslandschaft.' },
    { name: 'Radweg B10', lat: 47.848, lng: 16.845, icon: 'cycle', text: 'Systematisches Radfahrer-Training an der Seeumrundung — von Distanz bis enge Begegnung.' },
    { name: 'Seewinkel-Weingärten', lat: 47.85, lng: 16.855, icon: 'wine', text: 'Leinenführigkeit & Welpen-Runden auf ruhigen Wirtschaftswegen hinter dem Ort.' },
  ],
  frauenkirchen: [
    { name: 'Basilika & Hauptplatz', lat: 47.8375, lng: 16.927, icon: 'church', text: 'Glocken-Habituation & Begegnungen mit Pilgergruppen — Geräuschtraining nach Willenskraft-Ansatz: positiv verknüpfen statt aushalten.' },
    { name: 'Heideboden', lat: 47.825, lng: 16.945, icon: 'field', text: 'Rückruf, Freilauf & Distanztraining in der offenen Steppe.' },
    { name: 'Ruhige Wohngebiete', lat: 47.838, lng: 16.922, icon: 'paw', text: 'Welpen-Sozialisierung in dosiertem Tempo — Nachbarschaft, Kinder, Alltagsgeräusche.' },
    { name: 'Wirtschaftswege', lat: 47.845, lng: 16.915, icon: 'ball', text: 'Dummytraining & Nasenarbeit mit weiter Sicht — strukturierte Auslastung für Körper und Kopf.' },
  ],
  moenchhof: [
    { name: 'Dorfmuseum-Umfeld', lat: 47.872, lng: 16.945, icon: 'museum', text: 'Dosiertes Begegnungstraining an Besuchs-Wochenenden — Familien, Kinder, neue Gerüche in kontrollierbarer Menge.' },
    { name: 'Heideboden-Wege', lat: 47.89, lng: 16.955, icon: 'field', text: 'Rückruf & Distanztraining auf ebenen Wirtschaftswegen.' },
    { name: 'Riedwege', lat: 47.885, lng: 16.925, icon: 'wine', text: 'Leinenführigkeit & Traktor-Habituation in den Weingärten — positiv verknüpft statt durchgestanden.' },
    { name: 'Wiesen am Heideboden', lat: 47.892, lng: 16.948, icon: 'ball', text: 'Dummytraining & Nasenarbeit — die Willenskraft-Antwort auf „mein Hund ist nie müde".' },
  ],
  halbturn: [
    { name: 'Schloss Halbturn & Allee', lat: 47.873, lng: 16.976, icon: 'castle', text: 'Leinenführigkeit & ruhiges Warten in barocker Kulisse — mit Rücksicht auf die Anlage.' },
    { name: 'Grenzwege Richtung Ungarn', lat: 47.855, lng: 17.0, icon: 'field', text: 'Rückruf & Schleppleinen-Training auf menschenleeren Wegen — auch ideal für sensible Hunde und Tierschutzhunde.' },
    { name: 'Weingärten Halbturn', lat: 47.88, lng: 16.96, icon: 'wine', text: 'Impulskontrolle & Signalaufbau in renommierten Riedlagen.' },
    { name: 'Ortskern Halbturn', lat: 47.87, lng: 16.9735, icon: 'paw', text: 'Welpen-Spaziergänge & Alltagstraining im ruhigen Dorfkern.' },
  ],
  'st-andrae-am-zicksee': [
    { name: 'Zicksee-Rundweg', lat: 47.792, lng: 16.925, icon: 'water', text: 'Leinenführigkeit & dosierte Begegnungen am Steppensee. Im Badeareal gilt in der Saison Hundeverbot — der Rundweg gehört trotzdem euch.' },
    { name: 'Camping-Umfeld', lat: 47.793, lng: 16.929, icon: 'camp', text: 'Souveränitätstraining bei Sommergästen & fremden Hunden — Begegnungen nach Willenskraft-Ansatz, im Tempo deines Hundes.' },
    { name: 'Seewinkel-Felder', lat: 47.775, lng: 16.95, icon: 'field', text: 'Rückruf, Freilauf & Distanztraining zwischen Lacken und Äckern.' },
    { name: 'Wiesenwege', lat: 47.778, lng: 16.92, icon: 'ball', text: 'Dummytraining & Nasenarbeit — strukturierte Auslastung für Familienhunde.' },
  ],
  illmitz: [
    { name: 'Nationalpark-Wanderwege', lat: 47.77, lng: 16.78, icon: 'bird', text: 'Impulskontrolle bei höchster Vogeldichte — die ganzjährige Leinenpflicht ist hier unser Trainingsvorteil.' },
    { name: 'Lacken-Landschaft', lat: 47.752, lng: 16.785, icon: 'water', text: 'Konzentrationstraining an den Salz-Steppenseen — dezenter Naturreiz, volle Aufmerksamkeit.' },
    { name: 'Weg zum Seebad', lat: 47.764, lng: 16.757, icon: 'paw', text: 'Reiztraining & Habituation auf dem Weg Richtung Seeufer — im Seebad selbst gilt Hundeverbot, der Weg dorthin ist die eigentliche Übung.' },
    { name: 'Wirtschaftswege abseits der Schutzzonen', lat: 47.77, lng: 16.81, icon: 'ball', text: 'Dummytraining, Nasenarbeit & Schleppleinen-Rückruf — Auslastung ohne Konflikt mit dem Nationalpark.' },
  ],
  apetlon: [
    { name: 'Lange Lacke', lat: 47.767, lng: 16.853, icon: 'bird', text: 'Impulskontroll-Meisterklasse: Gänserast mit zehntausenden Vögeln — an der Leine auf den ausgewiesenen Wegen, Schritt für Schritt.' },
    { name: 'Hutweiden & Graurinder', lat: 47.755, lng: 16.84, icon: 'field', text: 'Ruhetraining bei Weidetier-Begegnungen in der Puszta — Gelassenheit statt Frontstellung.' },
    { name: 'Wirtschaftswege', lat: 47.73, lng: 16.815, icon: 'ball', text: 'Rückruf, Schleppleine & Dummytraining außerhalb der Schutzzonen — hier darf gearbeitet und gespielt werden.' },
    { name: 'Ortskern Apetlon', lat: 47.742, lng: 16.828, icon: 'paw', text: 'Welpen-Sozialisierung im ruhigen Dorf — die Basis, bevor es an die großen Vogelreize geht.' },
  ],
  andau: [
    { name: 'Andauer Brücke', lat: 47.756, lng: 17.078, icon: 'museum', text: 'Begegnungstraining & Habituation am historischen Denkmal — kontrollierbare Reizdichte mit Wanderern und Radfahrern.' },
    { name: 'Grenzwege', lat: 47.765, lng: 17.06, icon: 'field', text: 'Menschenleere Wirtschaftswege — unser Lieblingsgelände für Tierschutzhunde und sensible Hunde, die Ruhe zum Lernen brauchen.' },
    { name: 'Salzlacken-Steppe', lat: 47.76, lng: 16.99, icon: 'bird', text: 'Konzentrationstraining mit dezenten Naturreizen Richtung Apetlon.' },
    { name: 'Feldwege Andau', lat: 47.78, lng: 17.02, icon: 'ball', text: 'Dummytraining & Nasenarbeit — strukturierte Auslastung in pannonischer Stille.' },
  ],
  pamhagen: [
    { name: 'Steppentierpark-Umfeld', lat: 47.703, lng: 16.9, icon: 'wolf', text: 'Konzentrationstraining der besonderen Art: Wolfs- & Wildtiergerüche — wer hier ansprechbar bleibt, hat echte Impulskontrolle.' },
    { name: 'Hanság-Wiesen', lat: 47.69, lng: 16.92, icon: 'field', text: 'Rückruf & Schleppleinen-Arbeit in einem der stillsten Naturräume Ostösterreichs — ideal für Tierschutzhunde und ängstliche Hunde.' },
    { name: 'Feriendorf-Umfeld', lat: 47.7, lng: 16.895, icon: 'camp', text: 'Dosiertes Begegnungstraining in der Gäste-Saison — im Tempo deines Hundes.' },
    { name: 'Wiesen am Ortsrand', lat: 47.715, lng: 16.91, icon: 'ball', text: 'Dummytraining & Nasenarbeit — Auslastung nach Willenskraft-Ansatz.' },
  ],
  kittsee: [
    { name: 'Schloss Kittsee & Park', lat: 48.093, lng: 17.068, icon: 'castle', text: 'Leinenführigkeit & kontrollierte Begegnungen in gepflegten Alleen.' },
    { name: 'Marillengärten', lat: 48.085, lng: 17.055, icon: 'paw', text: 'Abbruchsignal-Training (Fallobst!) & ruhige Welpen-Runden auf Obstgarten-Wegen.' },
    { name: 'Neubaugebiete', lat: 48.088, lng: 17.06, icon: 'dog', text: 'Entspannte Hundebegegnungen im Wohngebiet: Bogen laufen, Blickkontakt, ruhiges Passieren — Begegnungstraining nach Willenskraft-Ansatz.' },
    { name: 'Dreiländereck-Wege', lat: 48.1, lng: 17.08, icon: 'field', text: 'Rückruf & Distanztraining an der Grenze zu Slowakei und Ungarn.' },
    { name: 'Wiesen Richtung Edelstal', lat: 48.082, lng: 17.045, icon: 'ball', text: 'Dummytraining & Nasenarbeit — der Ausgleich zum lebendigen Ortskern.' },
  ],
  bruckneudorf: [
    { name: 'Leitha-Auen', lat: 48.03, lng: 16.775, icon: 'forest', text: 'Konzentrations- & Schnüffeltraining im schattigen Auwald — Nasenarbeit ist Willenskraft-Kernkompetenz.' },
    { name: 'Parndorfer Platte', lat: 48.015, lng: 16.81, icon: 'field', text: 'Rückruf & Freilauf in der offenen Heide am Ortsrand.' },
    { name: 'Bahnhofsumfeld', lat: 48.025, lng: 16.782, icon: 'train', text: 'Zug-, Ansagen- & Pendler-Habituation am Ostbahn-Knoten — Alltagstraining für Hunde, die mit müssen.' },
    { name: 'Heidewiesen', lat: 48.018, lng: 16.795, icon: 'ball', text: 'Dummytraining & Nasenarbeit — strukturierte Auslastung statt endlosem Ballwerfen.' },
  ],
};

export function getMapSpots(slug: string): MapSpot[] {
  return mapSpots[slug] ?? [];
}

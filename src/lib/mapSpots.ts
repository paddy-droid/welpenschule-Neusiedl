/**
 * Themen-Marker für die interaktiven Trainingsorte-Karten der Landingpages.
 * Koordinaten = ungefähre Lage der Trainingsgebiete (keine exakten Adressen);
 * der „Bei dir zuhause"-Marker kommt automatisch aus regionCoords.
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
  | 'anchor';

export interface MapSpot {
  name: string;
  lat: number;
  lng: number;
  icon: SpotIcon;
  /** Kurzbeschreibung fürs Popup — was hier trainiert wird */
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
};

export const mapSpots: Record<string, MapSpot[]> = {
  'neusiedl-am-see': [
    { name: 'Seepromenade & Strandbad', lat: 47.9305, lng: 16.843, icon: 'water', text: 'Leinenführigkeit & Begegnungstraining an der belebten Uferpromenade.' },
    { name: 'Schilfgürtel', lat: 47.929, lng: 16.847, icon: 'bird', text: 'Impulskontrolle bei Wasservögeln & Wind im UNESCO-Welterbe-Schilf.' },
    { name: 'Tabor & Altstadt', lat: 47.9495, lng: 16.8415, icon: 'church', text: 'Alltagstraining & Habituation im historischen Stadtkern.' },
    { name: 'Stadtweinberge', lat: 47.956, lng: 16.835, icon: 'wine', text: 'Rückruf & Signalaufbau auf ruhigen Weinbergwegen mit Weitblick.' },
  ],
  gols: [
    { name: 'Weinberge Gols', lat: 47.905, lng: 16.9, icon: 'wine', text: 'Rückruf & Freilauf zwischen den Rebzeilen — ohne Verkehr.' },
    { name: 'Kellergasse', lat: 47.899, lng: 16.915, icon: 'paw', text: 'Leinenführigkeit & Alltagstraining im historischen Ortsbild.' },
    { name: 'Heideboden', lat: 47.885, lng: 16.935, icon: 'field', text: 'Distanztraining & Rückruf in der weiten Steppenlandschaft.' },
  ],
  parndorf: [
    { name: 'Parndorfer Platte', lat: 48.015, lng: 16.85, icon: 'field', text: 'Rückruf, Freilauf & Distanztraining in der weiten Heide-Ebene.' },
    { name: 'Outlet-Umgebung', lat: 47.983, lng: 16.842, icon: 'paw', text: 'Begegnungstraining & Reizmanagement bei hoher Menschen-Frequenz.' },
    { name: 'Wirtschaftswege', lat: 48.005, lng: 16.875, icon: 'cycle', text: 'Leinenführigkeit & Signalaufbau auf ruhigen Feldwegen.' },
  ],
  'weiden-am-see': [
    { name: 'Strandbad Weiden', lat: 47.918, lng: 16.868, icon: 'water', text: 'Wassertraining & Begegnungen am größten Seezugang der Region.' },
    { name: 'Schilfgürtel-Steg', lat: 47.915, lng: 16.875, icon: 'bird', text: 'Konzentrationstraining mit Naturreizen auf stillen Holzstegen.' },
    { name: 'Weinberge Weiden', lat: 47.935, lng: 16.865, icon: 'wine', text: 'Rückruf & Freilauf in ruhiger Hügellage.' },
  ],
  jois: [
    { name: 'Weinriede mit Seeblick', lat: 47.965, lng: 16.805, icon: 'wine', text: 'Rückruf & Signalaufbau zwischen Rebzeilen — unten glitzert der See.' },
    { name: 'Hackelsberg & Jungerberg', lat: 47.972, lng: 16.785, icon: 'forest', text: 'Leinenführigkeit & Impulskontrolle im Naturschutzgebiet (Leinenwege).' },
    { name: 'Seeufer & Schilf', lat: 47.948, lng: 16.8, icon: 'bird', text: 'Reiztraining bei Wasservögeln am Nordwestufer.' },
  ],
  'winden-am-see': [
    { name: 'Kellergasse Winden', lat: 47.948, lng: 16.751, icon: 'wine', text: 'Alltagstraining im entschleunigten historischen Ortsbild.' },
    { name: 'Kirsch-Riedwege', lat: 47.952, lng: 16.745, icon: 'cycle', text: 'Leinenführigkeit & Rückruf entlang der berühmten Kirschbäume.' },
    { name: 'Leithagebirgswald', lat: 47.956, lng: 16.738, icon: 'forest', text: 'Schattiges Sommer-Training & kontrollierte Wildreize am Zeilerberg.' },
    { name: 'Seeufer Richtung Breitenbrunn', lat: 47.938, lng: 16.756, icon: 'bird', text: 'Impulskontrolle am Schilfgürtel.' },
  ],
  'podersdorf-am-see': [
    { name: 'Leuchtturm & Mole', lat: 47.854, lng: 16.833, icon: 'anchor', text: 'Begegnungstraining am Wahrzeichen — Souveränität im Saison-Trubel.' },
    { name: 'Strandbad Podersdorf', lat: 47.858, lng: 16.834, icon: 'water', text: 'Wassertraining & Erlaubnis-Signal am schilffreien Seezugang.' },
    { name: 'Hutweide', lat: 47.865, lng: 16.855, icon: 'field', text: 'Rückruf & Distanztraining in der stillen Beweidungslandschaft.' },
    { name: 'Radweg B10', lat: 47.848, lng: 16.845, icon: 'cycle', text: 'Systematisches Radfahrer-Training an der Seeumrundung.' },
  ],
  frauenkirchen: [
    { name: 'Basilika & Hauptplatz', lat: 47.8375, lng: 16.927, icon: 'church', text: 'Begegnungen mit Pilgergruppen & Glocken-Habituation.' },
    { name: 'Heideboden', lat: 47.825, lng: 16.945, icon: 'field', text: 'Rückruf, Freilauf & Distanztraining in der offenen Steppe.' },
    { name: 'Wirtschaftswege', lat: 47.845, lng: 16.915, icon: 'paw', text: 'Signalaufbau & Geländetraining mit weiter Sicht.' },
  ],
  moenchhof: [
    { name: 'Dorfmuseum-Umfeld', lat: 47.872, lng: 16.945, icon: 'museum', text: 'Dosiertes Begegnungstraining an Besuchs-Wochenenden.' },
    { name: 'Heideboden-Wege', lat: 47.89, lng: 16.955, icon: 'field', text: 'Rückruf & Distanztraining auf ebenen Wirtschaftswegen.' },
    { name: 'Riedwege', lat: 47.885, lng: 16.925, icon: 'wine', text: 'Leinenführigkeit & Traktor-Habituation in den Weingärten.' },
  ],
  halbturn: [
    { name: 'Schloss Halbturn & Allee', lat: 47.873, lng: 16.976, icon: 'castle', text: 'Leinenführigkeit & ruhiges Warten in barocker Kulisse.' },
    { name: 'Grenzwege Richtung Ungarn', lat: 47.855, lng: 17.0, icon: 'field', text: 'Rückruf & Schleppleinen-Training auf menschenleeren Wegen.' },
    { name: 'Weingärten Halbturn', lat: 47.88, lng: 16.96, icon: 'wine', text: 'Impulskontrolle & Signalaufbau in renommierten Riedlagen.' },
  ],
  'st-andrae-am-zicksee': [
    { name: 'Zicksee-Rundweg', lat: 47.792, lng: 16.925, icon: 'water', text: 'Leinenführigkeit & dosierte Begegnungen am Steppensee.' },
    { name: 'Camping & Badeareal', lat: 47.793, lng: 16.929, icon: 'camp', text: 'Souveränitätstraining bei Sommergästen & fremden Hunden.' },
    { name: 'Seewinkel-Felder', lat: 47.775, lng: 16.95, icon: 'field', text: 'Rückruf, Freilauf & Distanztraining zwischen Lacken und Äckern.' },
  ],
  illmitz: [
    { name: 'Nationalpark-Wanderwege', lat: 47.77, lng: 16.78, icon: 'bird', text: 'Leinenführigkeit & Impulskontrolle bei höchster Vogeldichte.' },
    { name: 'Lacken-Landschaft', lat: 47.752, lng: 16.785, icon: 'water', text: 'Konzentrationstraining an den Salz-Steppenseen.' },
    { name: 'Schilfgürtel & Seebad', lat: 47.764, lng: 16.757, icon: 'paw', text: 'Reiztraining & Habituation auf dem Weg zum Seeufer.' },
  ],
  apetlon: [
    { name: 'Lange Lacke', lat: 47.767, lng: 16.853, icon: 'bird', text: 'Impulskontroll-Meisterklasse: Gänserast mit zehntausenden Vögeln (Leinenwege).' },
    { name: 'Hutweiden & Graurinder', lat: 47.755, lng: 16.84, icon: 'field', text: 'Ruhetraining bei Weidetier-Begegnungen in der Puszta.' },
    { name: 'Wirtschaftswege', lat: 47.73, lng: 16.815, icon: 'paw', text: 'Rückruf & Schleppleinen-Training außerhalb der Schutzzonen.' },
  ],
  andau: [
    { name: 'Andauer Brücke', lat: 47.756, lng: 17.078, icon: 'museum', text: 'Begegnungstraining & Habituation am historischen Denkmal.' },
    { name: 'Grenzwege', lat: 47.765, lng: 17.06, icon: 'field', text: 'Rückruf & sensibles Training auf menschenleeren Wirtschaftswegen.' },
    { name: 'Salzlacken-Steppe', lat: 47.76, lng: 16.99, icon: 'bird', text: 'Konzentrationstraining mit dezenten Naturreizen Richtung Apetlon.' },
  ],
  pamhagen: [
    { name: 'Steppentierpark-Umfeld', lat: 47.703, lng: 16.9, icon: 'wolf', text: 'Konzentrationstraining der besonderen Art: Wolfs- & Wildtiergerüche.' },
    { name: 'Hanság-Wiesen', lat: 47.69, lng: 16.92, icon: 'field', text: 'Rückruf & Schleppleinen-Arbeit in einem der stillsten Naturräume Ostösterreichs.' },
    { name: 'Feriendorf-Umfeld', lat: 47.7, lng: 16.895, icon: 'camp', text: 'Dosiertes Begegnungstraining in der Gäste-Saison.' },
  ],
  kittsee: [
    { name: 'Schloss Kittsee & Park', lat: 48.093, lng: 17.068, icon: 'castle', text: 'Leinenführigkeit & kontrollierte Begegnungen in gepflegten Alleen.' },
    { name: 'Marillengärten', lat: 48.085, lng: 17.055, icon: 'paw', text: 'Abbruchsignal-Training (Fallobst!) auf ruhigen Obstgarten-Wegen.' },
    { name: 'Dreiländereck-Wege', lat: 48.1, lng: 17.08, icon: 'field', text: 'Rückruf & Distanztraining an der Grenze zu Slowakei und Ungarn.' },
  ],
  bruckneudorf: [
    { name: 'Leitha-Auen', lat: 48.03, lng: 16.775, icon: 'forest', text: 'Konzentrations- & Schnüffeltraining im schattigen Auwald.' },
    { name: 'Parndorfer Platte', lat: 48.015, lng: 16.81, icon: 'field', text: 'Rückruf & Freilauf in der offenen Heide am Ortsrand.' },
    { name: 'Bahnhofsumfeld', lat: 48.025, lng: 16.782, icon: 'train', text: 'Zug-, Ansagen- & Pendler-Habituation am Ostbahn-Knoten.' },
  ],
};

export function getMapSpots(slug: string): MapSpot[] {
  return mapSpots[slug] ?? [];
}

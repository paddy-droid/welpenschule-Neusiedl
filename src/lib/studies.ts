/**
 * Verifizierter Studienkatalog für die Fachwissen-Sektionen der Landingpages.
 * Nur peer-reviewte Studien aus Fachjournalen; alle DOI-Links am 2026-06-10
 * gegen doi.org verifiziert, Kernaussagen via Jina-Recherche gegengeprüft.
 */

export interface Study {
  id: string;
  /** Kurzzitat, z. B. "Hiby et al. (2004)" */
  short: string;
  /** Originaltitel der Publikation */
  title: string;
  journal: string;
  year: number;
  /** DOI- oder Journal-Link */
  url: string;
  /** Deutschsprachige Zusammenfassung des Kernbefunds */
  finding: string;
}

export interface FachwissenItem {
  studyId: string;
  /** Was der Befund konkret für das Training im jeweiligen Ort bedeutet */
  localTake: string;
}

export interface RegionFachwissen {
  intro: string;
  items: FachwissenItem[];
}

export const studies: Record<string, Study> = {
  hiby2004: {
    id: 'hiby2004',
    short: 'Hiby, Rooney & Bradshaw (2004)',
    title: 'Dog training methods: their use, effectiveness and interaction with behaviour and welfare',
    journal: 'Animal Welfare',
    year: 2004,
    url: 'https://doi.org/10.1017/S0962728600026683',
    finding:
      'Hunde, die mit Belohnung statt mit Strafe trainiert wurden, zeigten in dieser viel zitierten Untersuchung den höchsten Gehorsam — und deutlich weniger Problemverhalten als bestrafungsbasiert trainierte Hunde.',
  },
  china2020: {
    id: 'china2020',
    short: 'China, Mills & Cooper (2020)',
    title: 'Efficacy of Dog Training With and Without Remote Electronic Collars vs. a Focus on Positive Reinforcement',
    journal: 'Frontiers in Veterinary Science',
    year: 2020,
    url: 'https://doi.org/10.3389/fvets.2020.00508',
    finding:
      '63 Hunde mit unzuverlässigem Rückruf: Die rein belohnungsbasiert trainierte Gruppe reagierte schneller auf Signale und brauchte weniger Wiederholungen als die mit Elektrohalsband trainierten Gruppen — positive Verstärkung war selbst bei starker Ablenkung die effektivste Methode.',
  },
  castro2020: {
    id: 'castro2020',
    short: 'Vieira de Castro et al. (2020)',
    title: 'Does training method matter? Evidence for the negative impact of aversive-based methods on companion dog welfare',
    journal: 'PLOS ONE',
    year: 2020,
    url: 'https://doi.org/10.1371/journal.pone.0225023',
    finding:
      'Hunde aus aversiv arbeitenden Hundeschulen zeigten mehr Stresssignale, höhere Cortisolwerte und eine pessimistischere Grundstimmung als belohnungsbasiert trainierte Hunde — Strafe im Training hat einen messbaren Preis fürs Wohlbefinden.',
  },
  demant2011: {
    id: 'demant2011',
    short: 'Demant et al. (2011)',
    title: 'The effect of frequency and duration of training sessions on acquisition and long-term memory in dogs',
    journal: 'Applied Animal Behaviour Science',
    year: 2011,
    url: 'https://doi.org/10.1016/j.applanim.2011.05.010',
    finding:
      'Hunde, die nur ein- bis zweimal pro Woche kurz trainierten, lernten eine neue Aufgabe in weniger Einheiten als täglich trainierte Hunde. Pausen zwischen den Einheiten verbessern die Gedächtnis­konsolidierung — mehr ist beim Hundetraining nicht automatisch besser.',
  },
  salonen2020: {
    id: 'salonen2020',
    short: 'Salonen et al. (2020)',
    title: 'Prevalence, comorbidity, and breed differences in canine anxiety in 13,700 Finnish pet dogs',
    journal: 'Scientific Reports',
    year: 2020,
    url: 'https://doi.org/10.1038/s41598-020-59837-z',
    finding:
      '72,5 % von 13.700 untersuchten Hunden zeigten mindestens ein Angst-Merkmal — Geräuschempfindlichkeit war mit 32 % das häufigste. Ängstlichkeit ist also kein Einzelfall, sondern das häufigste Verhaltensthema überhaupt und gut trainierbar.',
  },
  riemer2019: {
    id: 'riemer2019',
    short: 'Riemer (2019)',
    title: 'Not a one-way road — Severity, progression and prevention of firework fears in dogs',
    journal: 'PLOS ONE',
    year: 2019,
    url: 'https://doi.org/10.1371/journal.pone.0218150',
    finding:
      'Gegenkonditionierung — laute Geräusche konsequent mit Futter und Spiel zu verknüpfen — senkte in dieser Studie das Risiko von Feuerwerksangst deutlich und half auch Hunden, die bereits Angst entwickelt hatten. Geräuschangst ist „keine Einbahnstraße".',
  },
  fagundes2018: {
    id: 'fagundes2018',
    short: 'Lopes Fagundes et al. (2018)',
    title: 'Noise Sensitivities in Dogs: An Exploration of Signs in Dogs with and without Musculoskeletal Pain',
    journal: 'Frontiers in Veterinary Science',
    year: 2018,
    url: 'https://doi.org/10.3389/fvets.2018.00017',
    finding:
      'Tritt Geräuschangst erst später im Leben auf, steckt häufig unerkannter Muskel- oder Gelenksschmerz dahinter: Der Hund verknüpft den Schreck mit dem Schmerz beim Zusammenzucken. Eine tierärztliche Abklärung gehört deshalb zu seriöser Verhaltensarbeit dazu.',
  },
  nagasawa2015: {
    id: 'nagasawa2015',
    short: 'Nagasawa et al. (2015)',
    title: 'Oxytocin-gaze positive loop and the coevolution of human-dog bonds',
    journal: 'Science',
    year: 2015,
    url: 'https://doi.org/10.1126/science.1261022',
    finding:
      'Entspannter Blickkontakt zwischen Mensch und Hund erhöht bei beiden das Bindungshormon Oxytocin — derselbe biologische Mechanismus, der auch Eltern und Kleinkinder verbindet. Bindung ist messbar und lässt sich gezielt stärken.',
  },
  puurunen2020: {
    id: 'puurunen2020',
    short: 'Puurunen et al. (2020)',
    title: 'Inadequate socialisation, inactivity, and urban living environment are associated with social fearfulness in pet dogs',
    journal: 'Scientific Reports',
    year: 2020,
    url: 'https://doi.org/10.1038/s41598-020-60546-w',
    finding:
      'Mangelnde Sozialisierung im Welpenalter, wenig Aktivität und ein städtisches Wohnumfeld erhöhen das Risiko sozialer Ängstlichkeit gegenüber fremden Menschen und Hunden deutlich. Frühe, gut dosierte Begegnungserfahrungen sind die beste Vorbeugung.',
  },
  howell2015: {
    id: 'howell2015',
    short: 'Howell, King & Bennett (2015)',
    title: 'Puppy parties and beyond: the role of early age socialization practices on adult dog behavior',
    journal: 'Veterinary Medicine: Research and Reports',
    year: 2015,
    url: 'https://doi.org/10.2147/VMRR.S62081',
    finding:
      'Frühe, positive Sozialisierungserfahrungen — etwa in gut geführten Welpenkursen — hängen mit weniger Angst und weniger Problemverhalten im Erwachsenenalter zusammen. Entscheidend ist die Qualität der Erfahrungen, nicht die bloße Menge an Reizen.',
  },
  brucks2017: {
    id: 'brucks2017',
    short: 'Brucks et al. (2017)',
    title: "Measures of Dogs' Inhibitory Control Abilities Do Not Correlate across Tasks",
    journal: 'Frontiers in Psychology',
    year: 2017,
    url: 'https://doi.org/10.3389/fpsyg.2017.00849',
    finding:
      'Impulskontrolle ist beim Hund keine Generalfähigkeit: Hunde, die in einer Aufgabe ruhig blieben, konnten in der nächsten trotzdem durchstarten. Selbstbeherrschung muss daher in jeder Reizsituation einzeln aufgebaut werden — genau dort, wo sie gebraucht wird.',
  },
  hall2020: {
    id: 'hall2020',
    short: 'Hall et al. (2020)',
    title: "Dogs Don't Die Just in Hot Cars — Exertional Heat-Related Illness (Heatstroke) Is a Greater Threat to UK Dogs",
    journal: 'Animals',
    year: 2020,
    url: 'https://doi.org/10.3390/ani10081324',
    finding:
      'Der häufigste Auslöser für Hitzschlag beim Hund ist körperliche Aktivität bei Wärme — nicht das heiße Auto. Rund drei Viertel der Fälle traten nach Bewegung auf; übergewichtige, kurznasige und junge, sehr aktive Hunde sind besonders gefährdet.',
  },
  sargisson2014: {
    id: 'sargisson2014',
    short: 'Sargisson (2014)',
    title: 'Canine separation anxiety: strategies for treatment and management',
    journal: 'Veterinary Medicine: Research and Reports',
    year: 2014,
    url: 'https://doi.org/10.2147/VMRR.S60424',
    finding:
      'Trennungsstress wird am wirksamsten mit systematischer Desensibilisierung behandelt: Alleinbleiben in winzigen, immer erfolgreichen Schritten aufbauen. Bestrafung ist kontraindiziert — sie verschärft die zugrunde liegende Angst.',
  },
  westgarth2019: {
    id: 'westgarth2019',
    short: 'Westgarth et al. (2019)',
    title: 'Dog owners are more likely to meet physical activity guidelines than people without a dog',
    journal: 'Scientific Reports',
    year: 2019,
    url: 'https://doi.org/10.1038/s41598-019-41254-6',
    finding:
      'Hundehalter erreichen die empfohlene wöchentliche Bewegungsmenge rund viermal so häufig wie Menschen ohne Hund. Der gemeinsame Spaziergang ist ein echter Gesundheitsmotor — für beide Enden der Leine.',
  },
};

/** Individuelle Fachwissen-Zuordnung je Einsatzort (Slug → Intro + 3 Studien mit lokalem Bezug). */
export const regionFachwissen: Record<string, RegionFachwissen> = {
  'neusiedl-am-see': {
    intro:
      'Zwischen belebter Seepromenade, Schilfgürtel und ruhigen Stadtweinbergen wechselt das Reizlevel in Neusiedl ständig — diese drei Forschungsergebnisse erklären, warum unser mobiles Training genau hier ansetzt.',
    items: [
      {
        studyId: 'brucks2017',
        localTake:
          'Dass dein Hund an der Promenade ruhig bleibt, heißt nicht, dass er es im Schilfgürtel auch tut. Deshalb trainieren wir Impulskontrolle direkt an euren echten Orten in Neusiedl — Promenade, Tabor, Schilf — statt auf einem neutralen Hundeplatz.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Unsere 100 % belohnungsbasierte Arbeitsweise ist keine Weltanschauung, sondern die nachweislich wirksamere Methode — auch und gerade für Alltagsgehorsam mitten in der Bezirkshauptstadt.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Zwischen unseren Einheiten bei dir zuhause bekommst du kurze, präzise Hausaufgaben — bewusst nicht jeden Tag. Genau dieses verteilte Lernen festigt Signale am schnellsten.',
      },
    ],
  },
  gols: {
    intro:
      'Weite Rieden, Rehe am Heideboden und Traktoren in der Erntezeit: Die Forschung zeigt, wie dein Hund in Gols zuverlässig wird — ohne Druck.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Wenn dein Hund in den Golser Rieden einem Fasan oder Reh hinterherwill, ist Belohnungstraining der wirksamste Weg zum sicheren Rückruf — kein „schärferes" Werkzeug nötig.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Drei kurze Übungseinheiten pro Woche zwischen den Rebzeilen bringen mehr als tägliches Pauken — perfekt vereinbar mit deinem Alltag in Gols.',
      },
      {
        studyId: 'castro2020',
        localTake:
          'Gerade bei Trecker-Unsicherheit gilt: Druck verschärft Stress messbar. Wir desensibilisieren in Gols mit Distanz und positiver Verknüpfung — das Wohlbefinden bleibt intakt, der Lernerfolg kommt schneller.',
      },
    ],
  },
  parndorf: {
    intro:
      'A4-Rauschen, Outlet-Trubel, weite Heide: Parndorf fordert die Geräusch- und Reizverarbeitung deines Hundes. Das sagt die Wissenschaft dazu.',
    items: [
      {
        studyId: 'salonen2020',
        localTake:
          'Geräuschempfindlichkeit ist mit 32 % das häufigste Verhaltensthema überhaupt — wenn dein Hund auf den Autobahnlärm reagiert, ist das normal und vor allem: trainierbar. Genau dafür nutzen wir die abgestufte Distanz zur A4.',
      },
      {
        studyId: 'fagundes2018',
        localTake:
          'Reagiert dein erwachsener Hund plötzlich neu auf Lärm, prüfen wir gemeinsam mit deiner Tierarztpraxis, ob Schmerz dahintersteckt — bevor wir in Parndorf am Verhalten arbeiten.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Ob Outlet-Begegnung oder Heide-Freilauf: belohnungsbasiertes Training liefert den verlässlicheren Gehorsam — die Grundlage für jede Einheit bei dir zuhause in Parndorf.',
      },
    ],
  },
  'weiden-am-see': {
    intro:
      'Strandbad, Schilfstege und Weinberge: In Weiden trifft Badeort-Trubel auf Seewinkel-Natur. Diese Studien zeigen, wie dein Hund dabei souverän bleibt.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Die Saison in Weiden ist ein Sozialisierungs-Geschenk: dosierte Begegnungen mit Strandgästen und fremden Hunden senken nachweislich das Risiko sozialer Ängstlichkeit — wir steuern die Dosis.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Ruhe am Steg bedeutet nicht automatisch Ruhe am Strandbad. Wir üben Impulskontrolle in Weiden an jedem relevanten Ort einzeln — vom Schilfgürtel bis zum Hafen.',
      },
      {
        studyId: 'westgarth2019',
        localTake:
          'Eure Runden am Seeufer sind mehr als Training: Sie sind euer gemeinsames Gesundheitsprogramm. Wir machen aus dem täglichen Spaziergang in Weiden strukturierte, entspannte Qualitätszeit.',
      },
    ],
  },
  jois: {
    intro:
      'Wild am Hackelsberg, stille Rieden, Weitblick über den See — Jois ist ideal für konzentriertes Lernen. Die Forschung liefert die Begründung.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Rehe und Hasen am Übergang zum Leithagebirge sind die Königsdisziplin für den Rückruf. Die Studie zeigt: Belohnungstraining funktioniert auch bei genau solchen Ablenkungen am besten — daran arbeiten wir in den Joiser Rieden.',
      },
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die ruhigen Weingartenwege mit Seeblick sind perfekt für Bindungsarbeit: entspannter Blickkontakt, gemeinsame Orientierung — das Oxytocin-System arbeitet für euch.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Kurze, seltene Einheiten schlagen tägliches Üben — ideal, wenn du in Jois zwischen Arbeit und Weingarten nur begrenzt Zeit hast.',
      },
    ],
  },
  'winden-am-see': {
    intro:
      'Winden ist der ruhigste Lernort am Nordufer — besonders wertvoll für sensible Hunde. Drei Befunde, die unser Vorgehen hier prägen.',
    items: [
      {
        studyId: 'castro2020',
        localTake:
          'Sensible Hunde zahlen für aversive Methoden den höchsten Preis. In der geschützten Windener Umgebung bauen wir Vertrauen ausschließlich über positive Verstärkung auf — messbar stressärmer.',
      },
      {
        studyId: 'puurunen2020',
        localTake:
          'Die Kirschblüten-Ausflügler im April liefern genau die dosierten Begegnungsreize, die laut Forschung vor sozialer Ängstlichkeit schützen — den Rest des Jahres gehört die Ruhe euch.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Wir planen deine Übungswochen in Winden bewusst mit Pausen: verteiltes Lernen festigt neue Signale schneller als tägliches Wiederholen.',
      },
    ],
  },
  'podersdorf-am-see': {
    intro:
      'Sommerhitze am Strand, Radverkehr auf der B10, Saison-Trubel an der Mole: Podersdorf stellt besondere Anforderungen — die Wissenschaft kennt die Antworten.',
    items: [
      {
        studyId: 'hall2020',
        localTake:
          'Der wichtigste Podersdorf-Fakt für den Sommer: Bewegung bei Hitze ist Hitzschlag-Auslöser Nummer eins. Wir verlegen Trainingseinheiten konsequent in den frühen Morgen oder Abend — und zeigen dir den Asphalt-Handrücken-Test.',
      },
      {
        studyId: 'puurunen2020',
        localTake:
          'Tausende Gäste pro Sommertag sind eine Chance: dosierte, positive Begegnungen an der Promenade impfen deinen Hund gegen soziale Unsicherheit — wir wählen Zeitpunkt und Abstand.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Dass dein Hund auf der Hutweide gelassen ist, sagt nichts über den Radweg B10 aus. Impulskontrolle gegenüber Radfahrern üben wir genau dort, wo sie vorbeifahren.',
      },
    ],
  },
  frauenkirchen: {
    intro:
      'Glockengeläut, Pilgergruppen und stiller Heideboden: Frauenkirchen kombiniert besondere Geräusch- und Begegnungsreize. Das sagt die Forschung.',
    items: [
      {
        studyId: 'riemer2019',
        localTake:
          'Das Basilika-Geläut ist unser Trainingspartner: Wer Glocken und laute Geräusche früh mit Futter und Spiel verknüpft, beugt Geräuschangst nachweislich vor — und kann bestehende Angst zurückbauen.',
      },
      {
        studyId: 'salonen2020',
        localTake:
          'Fast jeder dritte Hund ist geräuschempfindlich — dein Hund ist mit dem Thema also in bester Gesellschaft. In Frauenkirchen haben wir vom Pilgerplatz bis zur Heide jede Reizstufe für den systematischen Aufbau.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Begegnungen mit Pilgergruppen meistert dein Hund am zuverlässigsten über Belohnungslernen — Strafe würde genau die Unsicherheit füttern, die wir abbauen wollen.',
      },
    ],
  },
  moenchhof: {
    intro:
      'Übersichtliche Wirtschaftswege, Dorfmuseums-Wochenenden und viel Ruhe: Mönchhof ist ein Lehrbuch-Lernort. Drei Studien, die wir hier gezielt nutzen.',
    items: [
      {
        studyId: 'demant2011',
        localTake:
          'Die ebenen Heideboden-Wege sind ideal für kurze, hochwertige Übungseinheiten — und die Forschung zeigt: genau solche verteilten Kurz-Sessions festigen Signale am schnellsten.',
      },
      {
        studyId: 'howell2015',
        localTake:
          'Für Welpen in Mönchhof gilt: Qualität vor Quantität. Ruhige Dorfrunden plus dosierte Museums-Wochenenden ergeben genau die positiven Frühherfahrungen, die erwachsene Hunde gelassen machen.',
      },
      {
        studyId: 'castro2020',
        localTake:
          'Auch beim Trecker-Training in der Erntezeit bleiben wir konsequent belohnungsbasiert — aversive Abkürzungen erzeugen messbaren Stress und kosten am Ende Lernfortschritt.',
      },
    ],
  },
  halbturn: {
    intro:
      'Schlossallee, renommierte Rieden und menschenleere Grenzwege: Halbturn bietet jedes Trainingslevel. Die passende Wissenschaft dazu.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Auf den weiten Grenzwegen Richtung Ungarn entscheidet der Rückruf über die Freiheit deines Hundes. Die Studie belegt: Belohnungstraining mit Schleppleine schlägt jede Zwangsmethode — auch bei Wildreiz.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Gelassen an der Schlossallee heißt nicht gelassen in der Steppe — wir üben Selbstbeherrschung in Halbturn an beiden Kulissen, weil sie sich nicht automatisch überträgt.',
      },
      {
        studyId: 'nagasawa2015',
        localTake:
          'Die herrschaftliche Ruhe rund ums Schloss nutzen wir für Bindungseinheiten: ruhiger Blickkontakt und gemeinsames Tempo aktivieren nachweislich das Oxytocin-System — euer Fundament für alles Weitere.',
      },
    ],
  },
  'st-andrae-am-zicksee': {
    intro:
      'Saison-Trubel am Zicksee, Steppenstille im Winter: St. Andrä lebt im Jahresrhythmus — und genau den nutzen wir wissenschaftlich fundiert.',
    items: [
      {
        studyId: 'howell2015',
        localTake:
          'Welpen aus St. Andrä haben den perfekten Sozialisierungs-Spielplan: ruhige Dorfphasen zum Festigen, Camping-Saison für dosierte, positive Begegnungen mit Kindern, Gästen und Hunden.',
      },
      {
        studyId: 'puurunen2020',
        localTake:
          'Aktivität und gute Sozialisierung schützen vor sozialer Angst — der Zicksee-Rundweg mit seiner planbaren Begegnungsfrequenz ist dafür die ideale Trainingsstrecke.',
      },
      {
        studyId: 'westgarth2019',
        localTake:
          'Die tägliche Zicksee-Runde ist euer gemeinsames Fitnessprogramm — wir strukturieren sie so, dass daraus gleichzeitig euer wirksamstes Training wird.',
      },
    ],
  },
  illmitz: {
    intro:
      'Nirgendwo in Österreich ist die Vogelreizdichte höher als rund um Illmitz. Diese Forschung erklärt, warum genau hier trainierte Hunde überall bestehen.',
    items: [
      {
        studyId: 'china2020',
        localTake:
          'Rückruf trotz auffliegender Gänse ist die Illmitzer Meisterprüfung — und die Studie zeigt: Belohnungstraining meistert genau solche Hochreiz-Situationen am zuverlässigsten.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Impulskontrolle am Nationalpark-Weg überträgt sich nicht von selbst auf die Lacken oder den Ortskern. Wir bauen sie in Illmitz Reizkulisse für Reizkulisse einzeln auf.',
      },
      {
        studyId: 'castro2020',
        localTake:
          'Gerade bei jagdlich motivierten Hunden ist die Versuchung „härterer" Methoden groß — die Daten zeigen: Sie stressen, ohne besser zu wirken. Im Vogelparadies arbeiten wir konsequent über Motivation.',
      },
    ],
  },
  apetlon: {
    intro:
      'Zehntausende Gänse an der Langen Lacke, Graurinder auf der Hutweide: Apetlon ist die hohe Schule der Selbstbeherrschung. Die Wissenschaft gibt uns den Fahrplan.',
    items: [
      {
        studyId: 'brucks2017',
        localTake:
          'Die Lange Lacke ist der perfekte Beweis für diesen Befund: Ruhe am Dorfrand garantiert nichts am Gänserastplatz. Deshalb trainieren wir Impulskontrolle direkt an den Lacken — kontrolliert, an der Leine, Schritt für Schritt.',
      },
      {
        studyId: 'china2020',
        localTake:
          'Auch bei maximalem Vogelreiz gilt: Belohnungsbasierter Rückruf-Aufbau mit Schleppleine schlägt jede Druckmethode — das zeigen die Daten eindeutig.',
      },
      {
        studyId: 'demant2011',
        localTake:
          'Wir dosieren die Apetloner Hochreiz-Einheiten bewusst sparsam: kurze Sessions mit Pausen dazwischen konsolidieren das Gelernte besser als tägliches „Fluten".',
      },
    ],
  },
  andau: {
    intro:
      'Stille Grenzwege und viel Raum für sensible Hunde und Tierschutzhunde: In Andau arbeiten wir an den leisen Themen — mit klarer wissenschaftlicher Basis.',
    items: [
      {
        studyId: 'sargisson2014',
        localTake:
          'Trennungsstress — eines unserer Andauer Schwerpunktthemen — wird in winzigen, immer erfolgreichen Schritten trainiert. Die ruhige Umgebung ohne Außenreize ist dafür ideal; Strafe wäre kontraproduktiv.',
      },
      {
        studyId: 'castro2020',
        localTake:
          'Tierschutzhunde mit schwieriger Vergangenheit brauchen den nachweislich stressärmsten Weg: positive Verstärkung. In Andau bauen wir Vertrauen auf, ohne alte Wunden zu vertiefen.',
      },
      {
        studyId: 'salonen2020',
        localTake:
          'Ängstlichkeit ist das häufigste Verhaltensthema überhaupt — dein Hund ist kein „hoffnungsloser Fall". Die Andauer Stille gibt uns die ideale Ausgangslage für den systematischen Aufbau.',
      },
    ],
  },
  pamhagen: {
    intro:
      'Wolfsgeruch vom Steppentierpark, Hanság-Stille und Feriendorf-Saison: Pamhagen ist einzigartig — die Forschung hilft uns, das zu nutzen.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Unsicherheit gegenüber fremden Menschen trainieren wir in Pamhagen ideal: erst in der Hanság-Stille Vertrauen aufbauen, dann mit den Feriendorf-Gästen dosiert üben — genau die Reihenfolge, die die Daten nahelegen.',
      },
      {
        studyId: 'castro2020',
        localTake:
          'Sensible Hunde lernen im stillsten Winkel des Seewinkels am besten — und ausschließlich über positive Verstärkung, weil Druck nachweislich Stress erzeugt statt Sicherheit.',
      },
      {
        studyId: 'brucks2017',
        localTake:
          'Die Wildtier-Gerüche rund um den Steppentierpark sind ein eigener Trainingskontext: Wer hier ansprechbar bleibt, hat echte Impulskontrolle gelernt — wir bauen sie genau an dieser Reizquelle auf.',
      },
    ],
  },
  kittsee: {
    intro:
      'Wachsende Siedlungen, Pendlerverkehr und Bratislava vor der Tür: Kittsee ist der urbanste Trainingsort des Bezirks — und genau dazu gibt es klare Forschung.',
    items: [
      {
        studyId: 'puurunen2020',
        localTake:
          'Städtisches Wohnumfeld erhöht das Risiko sozialer Ängstlichkeit — der wichtigste Befund für Kittsees Neubaugebiete. Gute Sozialisierung und aktive Auslastung sind hier kein Nice-to-have, sondern Prävention.',
      },
      {
        studyId: 'salonen2020',
        localTake:
          'Mit der Verkehrs- und Geräuschkulisse des Dreiländerecks gehört Geräuschempfindlichkeit zu den häufigsten Kittseer Themen — und ist mit systematischem Training gut in den Griff zu bekommen.',
      },
      {
        studyId: 'hiby2004',
        localTake:
          'Hohe Hundedichte in den Siedlungen heißt viele Begegnungen: belohnungsbasiertes Training liefert dafür den zuverlässigeren Gehorsam — entspannte Leinen-Begegnungen statt Frontstellung.',
      },
    ],
  },
  bruckneudorf: {
    intro:
      'Schießlärm vom Übungsplatz, Züge am Bahnknoten, stille Leitha-Auen: Bruckneudorf ist das Geräusch-Trainingslabor des Bezirks. Die Wissenschaft liefert den Plan.',
    items: [
      {
        studyId: 'riemer2019',
        localTake:
          'Die Knallgeräusche vom Truppenübungsplatz lassen sich nach demselben Prinzip entschärfen wie Feuerwerk: konsequente Gegenkonditionierung mit Futter und Spiel — vorbeugend beim Welpen und therapeutisch beim ängstlichen Hund.',
      },
      {
        studyId: 'fagundes2018',
        localTake:
          'Erschrickt dein erwachsener Hund plötzlich stärker bei Schüssen oder Zügen als früher, klären wir zuerst Schmerz ab — die Studie zeigt, dass spät auftretende Geräuschangst oft körperliche Ursachen hat.',
      },
      {
        studyId: 'salonen2020',
        localTake:
          'Jeder dritte Hund ist geräuschempfindlich — mit Bahnknoten und Übungsplatz hat Bruckneudorf dafür die ehrlichste Trainingsumgebung weit und breit. Wer hier gelassen wird, bleibt es überall.',
      },
    ],
  },
};

export function getFachwissen(slug: string): RegionFachwissen | null {
  return regionFachwissen[slug] ?? null;
}

export default function Impressum() {
  return (
    <div className="bg-background">
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="wk-eyebrow mb-5">Rechtliches</span>
          <h1 className="wk-display text-4xl md:text-6xl text-ink-950 mb-10">Impressum.</h1>

          <div className="wk-card p-8 sm:p-12 space-y-6 text-ink-700 leading-relaxed">
            <p className="text-sm text-ink-500">
              Informationspflicht laut § 5 E-Commerce-Gesetz, § 14 Unternehmensgesetzbuch, § 63 Gewerbeordnung
              und Offenlegungspflicht laut § 25 Mediengesetz.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-ink-950 mb-2 tracking-tight">Ing. Jessica Pusch</h2>
              <p className="text-sm text-ink-500 mb-3">
                Mobile Hundetrainerin — Hundeschule Willenskraft, Region Neusiedl am See
              </p>
              <p>
                Dörrweg 1/11
                <br />
                2405 Bad Deutsch-Altenburg
                <br />
                Österreich
              </p>
            </div>

            <div className="space-y-1">
              <p>
                <strong className="text-ink-950">Tel.:</strong>{' '}
                <a href="tel:+436643903673" className="text-lake-700 hover:underline">
                  +43 664 3903673
                </a>
              </p>
              <p>
                <strong className="text-ink-950">E-Mail:</strong>{' '}
                <a href="mailto:bruck_leitha@willenskraft.co.at" className="text-lake-700 hover:underline">
                  bruck_leitha@willenskraft.co.at
                </a>
              </p>
              <p>
                <strong className="text-ink-950">Unternehmensgegenstand:</strong> Mobiles Hundetraining
              </p>
              <p>
                <strong className="text-ink-950">Gewerbe:</strong> Hundetrainer (freies Gewerbe), ausgeübt in Österreich
              </p>
              <p>
                <strong className="text-ink-950">Gewerbebehörde:</strong> Bezirkshauptmannschaft Bruck an der Leitha
              </p>
              <p>
                <strong className="text-ink-950">Mitgliedschaft:</strong> Wirtschaftskammer Niederösterreich
              </p>
              <p>
                <strong className="text-ink-950">Berufsrecht:</strong> Gewerbeordnung,{' '}
                <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-lake-700 hover:underline">
                  www.ris.bka.gv.at
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">EU-Streitschlichtung</h2>
              <p>
                Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung)
                möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                Verbraucher haben die Möglichkeit, Beschwerden an die Plattform der Europäischen Kommission
                unter{' '}
                <a
                  href="http://ec.europa.eu/odr?tid=121872890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lake-700 hover:underline"
                >
                  ec.europa.eu/odr
                </a>{' '}
                zu richten.
              </p>
              <p className="mt-3">
                Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

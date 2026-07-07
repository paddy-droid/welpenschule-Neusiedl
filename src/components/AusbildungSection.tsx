import { GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

/**
 * Teaser-Section für die Willenskraft HundetrainerInnen-Ausbildung (Akademie).
 * Verlinkt auf die Hauptseite willenskraft.co.at/hundetrainer-ausbildung/.
 */
export default function AusbildungSection() {
  return (
    <section className="wk-section">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-200/70 bg-brand-50/70 p-8 md:p-12">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-brand-200 to-brand-100 blur-3xl opacity-70 pointer-events-none" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="wk-eyebrow mb-5">
                <GraduationCap className="w-3 h-3" /> Willenskraft Akademie
              </span>
              <h2 className="wk-display text-3xl md:text-4xl lg:text-5xl text-ink-950">
                Selbst <span className="wk-text-gradient">Hundetrainer:in</span> werden?
              </h2>
              <p className="mt-5 text-lg text-ink-600 leading-relaxed">
                Jessy hat ihre Ausbildung an der <strong>Willenskraft Akademie</strong> gemacht — und vielleicht
                ist das ja auch dein Weg. Die berufsbegleitende HundetrainerInnen-Ausbildung ist wissenschaftlich
                fundiert, gewaltfrei nach dem LIFE-Modell und wird von einer CBATI-zertifizierten Ausbilderin
                geleitet. Vom Grundkurs bis zum eigenen Business.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  'Berufsbegleitend & praxisnah',
                  'Wissenschaftlich fundiert (LIFE-Modell)',
                  'Grund-, Praxis- & Businesskurs',
                  'Mit CBATI-zertifizierter Ausbilderin',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-ink-700">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 lg:pl-6">
              <a
                href="https://www.willenskraft.co.at/hundetrainer-ausbildung/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl bg-white border border-brand-200 p-7 shadow-[0_18px_40px_-24px_rgba(208,113,8,0.5)] hover:border-brand-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <p className="wk-display text-xl text-ink-950">Zur Hundetrainer-Ausbildung</p>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  Alle Infos, Module, Termine & Preise auf der Willenskraft-Hauptseite.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  willenskraft.co.at/hundetrainer-ausbildung
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

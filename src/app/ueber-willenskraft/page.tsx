import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Laptop, ShieldCheck, Leaf, MapPin, Heart } from 'lucide-react';
import WillenskraftTeamSection from '@/components/WillenskraftTeamSection';
import WillenskraftSection from '@/components/WillenskraftSection';
import WillenskraftReviewsSection from '@/components/WillenskraftReviewsSection';
import AusbildungSection from '@/components/AusbildungSection';
import CtaBanner from '@/components/CtaBanner';

const url = 'https://welpenschule-neusiedl.at/ueber-willenskraft';

export const metadata: Metadata = {
  title: { absolute: 'Über die Hundeschule Willenskraft | Neusiedl am See' },
  description:
    'Willenskraft ist ein österreichweites Netzwerk gewaltfreier Hundetrainer:innen — gegründet von Bianca Oriana Willen. Neusiedl am See ist Jessys Standort.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Über die Hundeschule Willenskraft',
    description: 'Ein österreichweites Netzwerk gewaltfreier Hundeschulen nach dem LIFE-Modell — Neusiedl am See ist Jessys Standort.',
    url,
    type: 'website',
    images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }],
  },
};

const oekosystem = [
  { icon: Laptop, title: 'Online-Hundeschule', text: 'Ortsunabhängig lernen mit Bianca — flexibel von zuhause.', href: 'https://www.willenskraft.co.at/online-hundeschule/' },
  { icon: GraduationCap, title: 'Hundetrainer-Ausbildung', text: 'Die Akademie bildet selbst Hundetrainer:innen aus.', href: 'https://www.willenskraft.co.at/hundetrainer-ausbildung/' },
  { icon: ShieldCheck, title: 'Sachkundenachweis', text: 'Verpflichtender Kurs für Ersthundehalter:innen & Listenhunde.', href: 'https://www.willenskraft.co.at/sachkundenachweis-noe-sbg/' },
  { icon: Leaf, title: 'bellerei-Shop', text: 'Nachhaltige, tierschutzkonforme Ausrüstung aus Österreich.', href: 'https://www.bellerei-shop.com/' },
];

export default function UeberWillenskraftPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative wk-section overflow-hidden">
        <div className="absolute inset-0 wk-mesh opacity-70 pointer-events-none" />
        <div className="relative container mx-auto px-6 max-w-4xl text-center">
          <span className="wk-eyebrow mb-6">
            <Heart className="w-3 h-3" /> Das Projekt hinter der Welpenschule Neusiedl
          </span>
          <h1 className="wk-display text-[clamp(2.2rem,6vw,4.5rem)] text-ink-950">
            Über die
            <br />
            <span className="wk-text-gradient">Hundeschule Willenskraft.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto">
            Die Welpenschule Neusiedl am See ist kein Einzelkämpfer: Sie ist der Standort der{' '}
            <strong>Hundeschule Willenskraft</strong> für den Bezirk Neusiedl am See — Teil eines
            österreichweiten Netzwerks gewaltfreier Trainer:innen mit einem gemeinsamen Anspruch: Hunde
            wirklich verstehen, statt sie zu unterwerfen.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="wk-section-tight">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { k: '15+', v: 'Jahre Erfahrung' },
              { k: '4', v: 'Standorte in Österreich' },
              { k: 'LIFE', v: 'wissenschaftliches Modell' },
            ].map((s) => (
              <div key={s.v} className="wk-card p-7 text-center">
                <p className="wk-display text-4xl text-brand-600">{s.k}</p>
                <p className="mt-1 text-sm text-ink-600">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bianca / Gründerin */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-4">
              <div className="relative mx-auto w-full max-w-[300px]">
                <div className="absolute -inset-5 bg-gradient-to-br from-brand-100 to-lake-100 rounded-full opacity-70 blur-2xl" />
                <Image
                  src="https://www.willenskraft.co.at/wp-content/uploads/2026/07/willenskraft-bianca-oriana-willen-profil-300x300.jpg"
                  alt="Bianca Oriana Willen — Gründerin der Hundeschule Willenskraft"
                  width={340}
                  height={340}
                  className="relative w-full aspect-square rounded-[2rem] object-cover border-4 border-cream shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="wk-eyebrow mb-4">Die Gründerin</span>
              <h2 className="wk-display text-3xl md:text-4xl text-ink-950">Bianca Oriana Willen</h2>
              <p className="mt-2 text-brand-700 font-semibold">Inhaberin & Gründerin · CBATI-KSA · Hundeernährungsberaterin</p>
              <p className="mt-5 text-lg text-ink-600 leading-relaxed">
                Bianca hat Willenskraft aufgebaut und bildet heute an der Willenskraft Akademie selbst
                Hundetrainer:innen aus — auch Jessy. Seit über 15 Jahren begleitet sie Mensch-Hund-Teams
                gewaltfrei, wissenschaftlich fundiert und nach dem LIFE-Modell. Ihre Hunde Viola und Venice
                sind immer mit dabei.
              </p>
              <a
                href="https://www.willenskraft.co.at/bianca-willen-hundeschule/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
              >
                Mehr über Bianca auf willenskraft.co.at
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <WillenskraftTeamSection />

      {/* Ansatz */}
      <WillenskraftSection />

      {/* Live-Gesamtbewertung */}
      <WillenskraftReviewsSection />

      {/* Ökosystem */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5">Das Willenskraft-Netzwerk</span>
            <h2 className="wk-display text-3xl md:text-4xl text-ink-950">Mehr als eine Hundeschule.</h2>
            <p className="mt-5 text-ink-600 leading-relaxed">
              Als Teil von Willenskraft profitierst du am Neusiedlersee vom gesamten Wissen und Angebot der Akademie.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {oekosystem.map((o) => (
              <a key={o.title} href={o.href} target="_blank" rel="noopener noreferrer" className="group wk-card p-7">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <o.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-ink-950 flex items-center gap-1.5">
                  {o.title}
                  <ArrowUpRight className="w-4 h-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{o.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ausbildung */}
      <AusbildungSection />

      {/* Standort-Hinweis */}
      <section className="wk-section-tight">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            <MapPin className="w-4 h-4" /> Dein Standort: Neusiedl am See
          </span>
          <p className="mt-3 text-ink-600 leading-relaxed">
            Im gesamten Bezirk Neusiedl am See bist du bei{' '}
            <Link href="/kontakt" className="wk-link font-semibold">Jessy Pusch</Link> genau richtig —
            mit dem ganzen Willenskraft-Netzwerk im Rücken.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Bereit für gewaltfreies Training am Neusiedlersee?"
        text="Jessy kommt zu dir — unverbindlich anfragen und gemeinsam den passenden Weg finden."
      />
    </div>
  );
}

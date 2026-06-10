import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Instagram, Facebook, MapPin, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import GoogleBadge from '@/components/GoogleBadge';

export const metadata: Metadata = {
  title: 'Kontakt & Anmeldung',
  description:
    'Kontakt zu Hundetrainerin Jessy: Anruf, WhatsApp oder Mail — mobile Hundeschule für den Bezirk Neusiedl am See. ☎ +43 664 3903673',
};

export default function KontaktPage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="wk-section relative overflow-hidden">
        <div className="absolute inset-0 wk-mesh opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <span className="wk-eyebrow-lake mb-6">Kontakt &amp; Anmeldung</span>
          <h1 className="wk-display text-4xl md:text-6xl lg:text-7xl text-ink-950 leading-[1.05]">
            Lass uns
            <br />
            <span className="wk-text-gradient">kennenlernen.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-ink-600 max-w-2xl mx-auto leading-relaxed">
            Ich freue mich darauf, dich und deinen Hund kennenzulernen — und komme zum Training direkt zu
            dir nach Hause, überall im Bezirk Neusiedl am See. Schreib mir, ruf an oder buche direkt einen
            Termin: Wir finden gemeinsam den besten Start für euch.
          </p>
          <div className="mt-7 flex justify-center">
            <GoogleBadge href="/#bewertungen" />
          </div>
        </div>
      </section>

      {/* CARD */}
      <section className="container mx-auto px-6 pb-24 max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 bg-gradient-to-br from-ink-950 to-ink-800 text-cream shadow-2xl">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-500 blur-[120px] opacity-25" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-lake-500 blur-[120px] opacity-25" />
          <div className="absolute inset-0 wk-grain opacity-25" />

          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4">
              <div className="relative">
                <div className="absolute inset-0 bg-lake-500 rounded-full blur-3xl opacity-30 -translate-y-2" />
                <Image
                  src="https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png"
                  alt="Jessica Pusch — Hundeschule Willenskraft"
                  width={400}
                  height={400}
                  className="relative rounded-full mx-auto object-cover aspect-square border-4 border-ink-800 shadow-2xl"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lake-300">Deine mobile Hundetrainerin</p>
                <p className="wk-display text-2xl text-cream mt-1">Jessica Pusch</p>
                <p className="text-xs text-ink-400 mt-1">„Jessy" · Hundeschule Willenskraft · Region Neusiedl am See</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <a
                href="tel:+436643903673"
                className="flex items-center gap-4 p-5 rounded-2xl bg-ink-900/60 border border-ink-700 hover:border-lake-500 hover:bg-lake-500/10 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-lake-500/15 text-lake-400 flex items-center justify-center group-hover:bg-lake-500 group-hover:text-cream transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">Telefon</p>
                  <p className="text-cream font-semibold text-lg">+43 664 3903673</p>
                </div>
                <ArrowRight className="w-4 h-4 text-ink-500 group-hover:text-lake-300 transition-all group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:bruck_leitha@willenskraft.co.at"
                className="flex items-center gap-4 p-5 rounded-2xl bg-ink-900/60 border border-ink-700 hover:border-lake-500 hover:bg-lake-500/10 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-lake-500/15 text-lake-400 flex items-center justify-center group-hover:bg-lake-500 group-hover:text-cream transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">E-Mail</p>
                  <p className="text-cream font-semibold text-base sm:text-lg break-all">bruck_leitha@willenskraft.co.at</p>
                </div>
                <ArrowRight className="w-4 h-4 text-ink-500 group-hover:text-lake-300 transition-all group-hover:translate-x-1 shrink-0" />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-ink-900/60 border border-ink-700">
                <div className="w-11 h-11 rounded-xl bg-lake-500/15 text-lake-400 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">Einsatzgebiet</p>
                  <p className="text-cream font-semibold">Bezirk Neusiedl am See — wir kommen zu dir nach Hause</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <a
                  href="https://www.instagram.com/hundeschule_willenskraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full border border-ink-700 hover:border-lake-500 hover:bg-lake-500/10 hover:text-lake-300 flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/Hundeschule.Willenskraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full border border-ink-700 hover:border-lake-500 hover:bg-lake-500/10 hover:text-lake-300 flex items-center justify-center transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick info row */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { icon: Clock, title: 'Antwortzeit', text: 'Innerhalb von 24h an Werktagen' },
            { icon: CheckCircle2, title: 'Beratung', text: 'Kostenlos &amp; unverbindlich' },
            { icon: MapPin, title: 'Anfahrt', text: 'Kostenlos im gesamten Bezirk Neusiedl am See' },
          ].map((c) => (
            <div key={c.title} className="wk-card p-6">
              <div className="w-10 h-10 rounded-xl bg-lake-100 text-lake-700 flex items-center justify-center mb-4">
                <c.icon className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lake-700 mb-1">{c.title}</p>
              <p className="text-ink-700 text-sm" dangerouslySetInnerHTML={{ __html: c.text }} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-lake-700 transition-colors group"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>
    </div>
  );
}

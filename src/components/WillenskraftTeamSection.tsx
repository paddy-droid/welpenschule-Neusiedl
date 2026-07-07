import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Star, MapPin } from 'lucide-react';
import { team } from '@/lib/team';

/**
 * Trust-Section: das Team der Hundeschule Willenskraft. Zeigt, dass Willenskraft
 * ein österreichweites Netzwerk ist (Bianca als Gründerin, Jessy als lokaler
 * Standort). Auf Startseite & Regionsseiten.
 */
export default function WillenskraftTeamSection() {
  return (
    <section className="wk-section bg-card">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="wk-eyebrow mb-5">
            <Star className="w-3 h-3" /> Das Willenskraft-Team
          </span>
          <h2 className="wk-display text-4xl md:text-5xl text-ink-950">
            Willenskraft ist mehr als
            <br />
            <span className="wk-text-gradient">eine Trainerin.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-600 leading-relaxed">
            Hinter Jessy steht ein österreichweites Netzwerk der Hundeschule Willenskraft — gegründet von{' '}
            <strong>Bianca Oriana Willen</strong>. Alle arbeiten nach demselben gewaltfreien, wissenschaftlich
            fundierten Ansatz (LIFE-Modell). Am Neusiedlersee bist du bei Jessy genau richtig.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => {
            const isInternal = m.href.startsWith('/');
            const inner = (
              <>
                <div className="relative">
                  <Image
                    src={m.image}
                    alt={`${m.name} — Hundeschule Willenskraft`}
                    width={320}
                    height={320}
                    sizes="(max-width: 640px) 90vw, 300px"
                    className="w-full aspect-square object-cover"
                  />
                  {m.local && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 shadow">
                      <MapPin className="w-3 h-3" /> Dein Standort
                    </span>
                  )}
                  {m.founder && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-ink-900 text-white text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 shadow">
                      <Star className="w-3 h-3" /> Gründerin
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="wk-display text-xl text-ink-950 leading-tight">{m.name}</p>
                  <p className="mt-1 text-sm font-semibold text-brand-700">{m.role}</p>
                  <p className="mt-0.5 text-xs text-ink-500">{m.region}</p>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">{m.bio}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    {m.local ? 'Mehr über Jessy' : 'Zum Profil'}
                    {isInternal ? (
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </span>
                </div>
              </>
            );
            const cls = `group wk-card !p-0 overflow-hidden flex flex-col ${m.local ? 'ring-2 ring-brand-300' : ''}`;
            return isInternal ? (
              <Link key={m.name} href={m.href} className={cls}>{inner}</Link>
            ) : (
              <a key={m.name} href={m.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/ueber-willenskraft"
            className="wk-btn-ghost inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold"
          >
            Mehr über Willenskraft & die Akademie
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

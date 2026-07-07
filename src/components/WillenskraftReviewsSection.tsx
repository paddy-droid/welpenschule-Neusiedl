import { Star } from 'lucide-react';
import { getWillenskraftAggregate, WK_PLACES } from '@/lib/willenskraftReviews';

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#4285F4" d="M23.49 12.27c0-.82-.07-1.6-.21-2.36H12v4.47h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.56-5.17 3.56-8.73Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3c-1.07.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.29v3.09A11.99 11.99 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.29 14.29A7.2 7.2 0 0 1 4.91 12c0-.8.14-1.57.38-2.29V6.62H1.29a11.97 11.97 0 0 0 0 10.76l4-3.09Z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.43-3.43C17.94 1.19 15.23 0 12 0A11.99 11.99 0 0 0 1.29 6.62l4 3.09C6.23 6.87 8.88 4.77 12 4.77Z" />
    </svg>
  );
}

/**
 * Live-Gesamtbewertung der Hundeschule Willenskraft über alle Standorte
 * (server-seitig aggregiert). Rendert nur, wenn echte Werte vorliegen.
 */
export default async function WillenskraftReviewsSection() {
  const agg = await getWillenskraftAggregate();
  if (!agg) return null;

  const ratingStr = agg.ratingValue.toFixed(1).replace('.', ',');

  return (
    <section className="wk-section">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] wk-mesh border border-brand-200/70 p-8 md:p-14 text-center">
          <span className="wk-eyebrow mb-5">
            <Star className="w-3 h-3" /> Live von Google
          </span>
          <h2 className="wk-display text-3xl md:text-4xl lg:text-5xl text-ink-950">
            So bewertet Österreich
            <br />
            <span className="wk-text-gradient">die Hundeschule Willenskraft.</span>
          </h2>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-4 rounded-3xl bg-white/80 backdrop-blur border border-ink-100 px-8 py-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.2)]">
            <GoogleG className="w-9 h-9" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="wk-display text-5xl text-ink-950 leading-none">{ratingStr}</span>
                <span className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-500 text-brand-500" />
                  ))}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-ink-600">
                aus <strong>{agg.reviewCount} Google-Bewertungen</strong> an {agg.locations} Willenskraft-Standorten
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {WK_PLACES.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-brand-200/70 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink-700 hover:border-brand-400 hover:bg-white transition-colors"
              >
                <Star className="w-3 h-3 text-brand-500" />
                {p.name}
                <span className="text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-ink-500 max-w-xl mx-auto">
            Diese Zahlen werden live aus Google gezogen und aktualisieren sich automatisch — keine handverlesenen
            Testimonials, sondern echte Erfahrungen aus dem gesamten Willenskraft-Netzwerk. Tippe auf einen
            Standort, um seine Google-Bewertungen zu öffnen.
          </p>
          <div className="mt-6">
            <a
              href="https://www.willenskraft.co.at/kundenstimmen/"
              target="_blank"
              rel="noopener noreferrer"
              className="wk-btn-primary inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold text-sm"
            >
              Alle Willenskraft-Bewertungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

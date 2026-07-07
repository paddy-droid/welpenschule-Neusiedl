import Image from 'next/image';
import { ArrowUpRight, Leaf } from 'lucide-react';

const SHOP = 'https://www.bellerei-shop.com';

const products = [
  {
    title: 'Gepolstertes Y-Geschirr',
    text: 'Anatomischer Y-Schnitt, weich gepolstert, volle Bewegungsfreiheit für die Schulter — genau das Geschirr, mit dem wir auch trainieren.',
    price: 'ab 45 €',
    image: `${SHOP}/wp-content/uploads/2023/01/gepolstertes-Hundegeschirr-in-Schwarz_11zon-400x400.webp`,
    href: `${SHOP}/seilschaften/hundegeschirr/`,
    cta: 'Zum Geschirr',
  },
  {
    title: 'Bio-CBD-Öl aus Österreich',
    text: 'Vollspektrum aus biologischem Hanf, in 10–50 %. Für mehr Ruhe und Ausgeglichenheit an stressigen Tagen.',
    price: '',
    image: `${SHOP}/wp-content/uploads/2022/01/CBd-Oel-fuer-tiere-15-400x400.webp`,
    href: `${SHOP}/schlabberei/cbd-fur-hunde/`,
    cta: 'Zum CBD-Öl',
  },
];

/**
 * bellerei-Section (nachhaltiger Ausrüstungs-Partner von Willenskraft) — vor dem
 * Footer, aufgebaut wie auf der willenskraft.co.at-Startseite.
 */
export default function BellereiSection() {
  return (
    <section className="wk-section-tight">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 to-white p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] mb-5">
              <Leaf className="w-3.5 h-3.5" /> Ausrüstungs-Partner
            </span>
            <h2 className="wk-display text-3xl md:text-4xl text-ink-950">
              Nachhaltige Ausrüstung von der <span className="wk-hand text-emerald-600" style={{ fontSize: '1.15em' }}>bellerei</span>
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed">
              Gewaltfreies Training beginnt bei der richtigen Ausrüstung. Deshalb arbeiten wir mit der{' '}
              <strong>bellerei</strong> zusammen — dem nachhaltigen Ausrüstungs-Partner aus Österreich,
              entwickelt von Hundeprofis. Alles force-free, tierschutzkonform und ohne Zug am Hals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {products.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl border border-emerald-100 overflow-hidden flex flex-col hover:border-emerald-300 hover:shadow-[0_18px_40px_-24px_rgba(5,150,105,0.4)] transition-all"
              >
                <div className="bg-emerald-50/60 p-5 flex items-center justify-center">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={200}
                    height={200}
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-ink-950">{p.title}</h3>
                    {p.price && <span className="text-sm font-bold text-emerald-700 shrink-0">{p.price}</span>}
                  </div>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed flex-grow">{p.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
                    {p.cta}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-9 text-center">
            <a
              href={SHOP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 h-12 font-semibold text-white bg-gradient-to-br from-emerald-500 to-emerald-700 hover:brightness-105 transition-all shadow-[0_12px_28px_-10px_rgba(5,150,105,0.6)]"
            >
              Zum ganzen Sortiment der bellerei
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

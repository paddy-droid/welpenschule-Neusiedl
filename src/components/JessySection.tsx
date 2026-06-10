import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Heart, MapPin, Phone, Quote } from 'lucide-react';
import GoogleBadge from '@/components/GoogleBadge';

interface JessySectionProps {
  /** Ortsname für regionale Personalisierung, z. B. "Gols" */
  regionName?: string;
}

const jessyImage = 'https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png';

/**
 * Persönliche Vorstellung von Jessica Pusch („Jessy") — der mobilen
 * Willenskraft-Hundetrainerin für die Region Neusiedl am See.
 */
export default function JessySection({ regionName }: JessySectionProps) {
  const ortText = regionName ? `in ${regionName} und Umgebung` : 'rund um den Neusiedlersee';

  return (
    <section className="wk-section bg-card relative overflow-hidden">
      <div className="absolute inset-0 wk-mesh opacity-40 pointer-events-none" />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-4 relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-100 to-lake-100 rounded-full opacity-70 blur-2xl" />
            <Image
              src={jessyImage}
              alt={`Jessica Pusch — deine mobile Hundetrainerin ${ortText}`}
              width={420}
              height={420}
              className="relative rounded-full mx-auto object-cover aspect-square border-4 border-cream shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] max-w-[280px] lg:max-w-none"
            />
            <div className="relative mt-6 text-center">
              <p className="wk-display text-3xl text-ink-950">Jessica Pusch</p>
              <p className="mt-1 text-sm font-semibold text-lake-700">
                „Jessy" — deine Hundetrainerin {regionName ? `für ${regionName}` : 'am Neusiedlersee'}
              </p>
              <div className="mt-4 flex justify-center">
                <GoogleBadge />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-8 space-y-7">
            <div>
              <span className="wk-eyebrow mb-5">
                <Heart className="w-3 h-3" /> Deine Trainerin vor Ort
              </span>
              <h2 className="wk-display text-3xl md:text-5xl text-ink-950">
                Bei Jessy trainierst du nicht irgendwo —
                <br />
                <span className="wk-text-gradient">sondern bei dir zuhause.</span>
              </h2>
            </div>

            <p className="text-lg text-ink-600 leading-relaxed">
              Jessica Pusch — von ihren Kund:innen liebevoll <strong className="text-ink-900">Jessy</strong> genannt —
              leitet den regionalen Standort der <strong className="text-ink-900">Hundeschule Willenskraft</strong> für
              Neusiedl am See und das Nordburgenland. Als mobile Hundetrainerin kommt sie zum Training direkt zu dir
              nach Hause {ortText} — dorthin, wo euer Alltag wirklich stattfindet. Die Welpen-Gruppenkurse finden an
              sorgfältig ausgewählten Outdoor-Treffpunkten in der Region statt.
            </p>

            <div className="rounded-3xl bg-cream-soft border border-ink-200/60 p-6 md:p-7">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-brand-600 shrink-0 mt-1" />
                <div>
                  <p className="text-ink-700 italic leading-relaxed">
                    „Jessy ist total einfühlsam, geduldig und geht auf die Bedürfnisse von Hund und Halter ein —
                    fachlich einfach top."
                  </p>
                  <p className="mt-2 text-xs text-ink-500">— aus den verifizierten Google-Rezensionen</p>
                </div>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Mobile Hundetrainerin — Training bei dir zuhause',
                '100 % gewaltfrei, mit positiver Verstärkung',
                'Willenskraft-Standort Nordburgenland & Neusiedl',
                'Kostenlose Anfahrt im gesamten Einsatzgebiet',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-lake-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="/kontakt"
                className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full font-semibold"
              >
                Jessy kennenlernen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+436643903673"
                className="wk-btn-ghost inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" /> +43 664 3903673
              </a>
            </div>

            <p className="flex items-center gap-2 text-xs text-ink-500">
              <MapPin className="w-3.5 h-3.5 text-lake-600" />
              Einsatzgebiet: gesamter Bezirk Neusiedl am See — vom Leithagebirge bis in den südlichen Seewinkel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

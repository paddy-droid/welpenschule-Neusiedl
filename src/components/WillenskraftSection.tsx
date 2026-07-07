import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { WillenskraftContent, WillenskraftButton } from './WillenskraftSection/types';
import { defaultWillenskraftContent } from './WillenskraftSection/config/defaultContent';

interface WillenskraftSectionProps {
  content?: WillenskraftContent;
}

export default function WillenskraftSection({ content = defaultWillenskraftContent }: WillenskraftSectionProps) {
  return (
    <section className="wk-section relative overflow-hidden bg-cream-soft">
      <div className="absolute inset-0 wk-mesh opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="wk-eyebrow mb-5">Hundeschule Willenskraft</span>
          <h2 className="wk-display text-3xl md:text-4xl lg:text-5xl text-ink-950">
            {content.title}
          </h2>
          <p className="mt-6 text-lg text-ink-600 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {content.images.map((src: string, index: number) => (
            <div
              key={index}
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_18px_40px_-20px_rgba(0,0,0,0.18)] group"
            >
              <Image
                src={src}
                alt={`Hundeschule Willenskraft & Akademie – Welpentraining, Gruppenkurse und Team (Bild ${index + 1})`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink-950/5" />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-50 border border-brand-200/60 p-8 md:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="wk-display text-2xl md:text-3xl text-ink-950">
                Teil des <span className="wk-text-gradient">Willenskraft</span>-Netzwerks.
              </h3>
              <p className="mt-4 text-ink-600 leading-relaxed">
                {content.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {content.buttons.map((button: WillenskraftButton, index: number) => (
                <Link
                  key={index}
                  href={button.href}
                  target={button.target || '_blank'}
                  rel={button.rel || 'noopener noreferrer'}
                  className="inline-flex items-center justify-between gap-3 rounded-2xl bg-white border border-brand-200 px-5 py-3.5 text-sm font-semibold text-ink-900 hover:border-brand-400 transition-colors"
                >
                  <span>{button.text}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-brand-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

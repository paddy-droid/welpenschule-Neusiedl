import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import GoogleBadge from '@/components/GoogleBadge';
import CtaBanner from '@/components/CtaBanner';
import { getPublishedPosts } from '@/lib/posts';

export const revalidate = 43200; // 12h ISR — Auto-Publish ohne Build

const title = 'Hunde-Ratgeber Neusiedl am See | Willenskraft';
const description =
  'Praxis-Tipps & Wissen rund um Welpe, Junghund und Alltag am Neusiedlersee — von deiner mobilen Hundetrainerin Jessy. Gewaltfrei & wissenschaftlich fundiert.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://welpenschule-neusiedl.at/ratgeber' },
  openGraph: { title, description, url: 'https://welpenschule-neusiedl.at/ratgeber', type: 'website', images: [{ url: 'https://welpenschule-neusiedl.at/og-image.jpg', width: 1200, height: 630, alt: 'Welpenschule Neusiedl am See – mobile Hundeschule Willenskraft' }] },
};

const dateFmt = new Intl.DateTimeFormat('de-AT', { day: '2-digit', month: 'short', year: 'numeric' });

export default function RatgeberPage() {
  const posts = getPublishedPosts();
  const [featured, ...rest] = posts;

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://welpenschule-neusiedl.at/ratgeber#blog',
    name: 'Hunde-Ratgeber der Welpenschule Neusiedl am See',
    description,
    url: 'https://welpenschule-neusiedl.at/ratgeber',
    inLanguage: 'de-AT',
    publisher: { '@id': 'https://welpenschule-neusiedl.at/#business' },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title.slice(0, 110),
      url: `https://welpenschule-neusiedl.at/ratgeber/${p.slug}`,
      datePublished: p.publishAt,
      image: `https://welpenschule-neusiedl.at${p.heroImage}`,
    })),
  };

  return (
    <div className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden wk-section !pb-8">
        <div className="absolute inset-0 wk-mesh opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <span className="wk-eyebrow-lake mb-6"><BookOpen className="h-3 w-3" /> Ratgeber & Wissen</span>
          <h1 className="wk-display text-4xl md:text-6xl text-ink-950 leading-[1.05]">
            Hunde-Ratgeber für die
            <br />
            <span className="wk-text-gradient">Region Neusiedl am See.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-600 max-w-2xl mx-auto leading-relaxed">
            Praxis-Tipps von deiner mobilen Trainerin Jessy — vom ersten Welpentag bis zum souveränen
            Begleithund. Gewaltfrei nach dem LIFE-Modell, wissenschaftlich fundiert und wohnortnah gedacht.
          </p>
          <div className="mt-7 flex justify-center"><GoogleBadge href="/#bewertungen" /></div>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="container mx-auto px-6 max-w-3xl pb-24 text-center">
          <p className="text-ink-500">Die ersten Ratgeber-Artikel erscheinen in Kürze.</p>
        </section>
      ) : (
        <section className="container mx-auto px-6 max-w-6xl pb-10">
          {/* FEATURED */}
          {featured && (
            <Link href={`/ratgeber/${featured.slug}`} className="group mb-10 block">
              <article className="wk-card !p-0 overflow-hidden grid md:grid-cols-2">
                <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                  <Image src={featured.heroImage} alt={featured.heroAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" priority />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <span className="wk-eyebrow-lake self-start mb-4">{featured.category}</span>
                  <h2 className="wk-display text-2xl md:text-3xl text-ink-950 group-hover:text-lake-700 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-ink-600 leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-ink-500">
                    <span>{dateFmt.format(new Date(`${featured.publishAt}T09:00:00`))}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-lake-600" /> {featured.readingMinutes} Min.</span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lake-700">
                    Artikel lesen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          )}

          {/* GRID */}
          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link key={p.slug} href={`/ratgeber/${p.slug}`} className="group block">
                  <article className="wk-card !p-0 h-full overflow-hidden flex flex-col">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image src={p.heroImage} alt={p.heroAlt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-lake-700">{p.category}</span>
                      <h3 className="mt-1 font-semibold text-ink-950 group-hover:text-lake-700 transition-colors leading-snug">{p.title}</h3>
                      <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1 line-clamp-3">{p.excerpt}</p>
                      <div className="mt-4 flex items-center gap-3 text-xs text-ink-400">
                        <span>{dateFmt.format(new Date(`${p.publishAt}T09:00:00`))}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readingMinutes} Min.</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}

      <CtaBanner
        regionName="Neusiedl am See"
        title="Vom Lesen ins Tun."
        text="Du hast eine konkrete Frage zu deinem Hund? Jessy kommt zu dir nach Hause — Erstberatung 95 €, Anfahrt im ganzen Bezirk kostenlos."
      />
    </div>
  );
}

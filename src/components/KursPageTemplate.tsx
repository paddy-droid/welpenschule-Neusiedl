import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Euro,
  Home as HomeIcon,
  MapPin,
  Phone,
  ShieldCheck,
  ThumbsUp,
  Users,
  Youtube,
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import GoogleBadge from '@/components/GoogleBadge';
import JessySection from '@/components/JessySection';
import CtaBanner from '@/components/CtaBanner';
import ShortsSection from '@/components/ShortsSection';
import { WhatsAppIcon, waHref } from '@/components/WhatsAppFloat';
import { kurse, type KursData } from '@/lib/kurseData';

function buildJsonLd(kurs: KursData) {
  const url = `https://welpenschule-neusiedl.at/kurse/${kurs.slug}`;
  const priceValue = kurs.price.match(/\d+/)?.[0] ?? '195';
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: `${kurs.name} — Region Neusiedl am See`,
      description: kurs.claim,
      url,
      provider: {
        '@type': 'Organization',
        name: 'Hundeschule Willenskraft — Welpenschule Neusiedl am See',
        url: 'https://welpenschule-neusiedl.at',
      },
      offers: {
        '@type': 'Offer',
        price: priceValue,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url,
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'Onsite',
        location: {
          '@type': 'Place',
          name: 'Outdoor-Treffpunkte in der Region Neusiedl am See / Nordburgenland',
          address: { '@type': 'PostalAddress', addressRegion: 'Burgenland', addressCountry: 'AT' },
        },
        instructor: {
          '@type': 'Person',
          name: 'Jessica Pusch',
          honorificPrefix: 'Ing.',
          alternateName: 'Jessy',
          url: 'https://welpenschule-neusiedl.at/kontakt',
          sameAs: ['https://www.willenskraft.co.at/bruck-leitha/'],
        },
      },
      ...(kurs.voraussetzungen ? { coursePrerequisites: kurs.voraussetzungen.join('; ') } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: kurs.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://welpenschule-neusiedl.at' },
        { '@type': 'ListItem', position: 2, name: 'Kurse', item: 'https://welpenschule-neusiedl.at/kurse' },
        { '@type': 'ListItem', position: 3, name: kurs.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: kurs.metaTitle,
      inLanguage: 'de-AT',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#direktantwort'] },
    },
  ];
}

export default function KursPageTemplate({ kurs }: { kurs: KursData }) {
  const andere = kurse.filter((k) => k.slug !== kurs.slug);

  return (
    <div className="bg-background">
      {buildJsonLd(kurs).map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* ============== HERO (hell, Willenskraft-Orange) ============== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 wk-mesh opacity-70 pointer-events-none" />
        <div className="absolute inset-0 wk-grain opacity-30 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-20 max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-500">
              <li><Link href="/" className="hover:text-brand-700 transition-colors">Startseite</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/kurse" className="hover:text-brand-700 transition-colors">Kurse</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-semibold text-ink-800">{kurs.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <span className="wk-eyebrow mb-6">
                <Users className="w-3 h-3" /> Gruppenkurs mit Jessy
              </span>
              <h1 className="wk-display text-[clamp(2.4rem,6.2vw,4.8rem)] text-ink-950 leading-[1.02]">
                {kurs.name}
                <br />
                <span className="wk-text-gradient">Region Neusiedl am See</span>
                <span className="text-brand-500">.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ink-600 max-w-2xl leading-relaxed">{kurs.claim}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/kontakt?service=kurs-${kurs.slug}`}
                  className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full font-semibold"
                >
                  Jetzt Kursplatz anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-[#25D366] text-white font-semibold hover:brightness-105 transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp
                </a>
                <a
                  href="tel:+436643903673"
                  className="wk-btn-ghost inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full font-semibold"
                >
                  <Phone className="w-4 h-4" /> Anrufen
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <GoogleBadge />
                <span className="inline-flex items-center gap-2 text-xs text-ink-600">
                  <Euro className="w-4 h-4 text-brand-600" /> {kurs.price} · {kurs.units}
                </span>
                <span className="inline-flex items-center gap-2 text-xs text-ink-600">
                  <Users className="w-4 h-4 text-brand-600" /> {kurs.groupSize}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-5 bg-gradient-to-br from-brand-200 to-lake-100 rounded-[2.5rem] rotate-3 opacity-60 blur-2xl" />
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-32px_rgba(0,0,0,0.28)]">
                <Image
                  src={kurs.heroImage}
                  alt={kurs.heroAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== AEO-DIREKTANTWORT ============== */}
      <section className="container mx-auto px-6 pt-14">
        <div id="direktantwort" className="wk-card max-w-4xl mx-auto p-8 md:p-10 border-l-[5px] !border-l-brand-500 scroll-mt-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">
            Auf einen Blick — {kurs.name} Region Neusiedl am See
          </p>
          <p className="text-ink-800 text-base md:text-lg leading-relaxed">
            Der <strong>{kurs.name}</strong> der Hundeschule Willenskraft kostet <strong>{kurs.price}</strong>{' '}
            ({kurs.units}, {kurs.groupSize}) und findet an sorgfältig ausgewählten{' '}
            <strong>Outdoor-Treffpunkten in der Region Neusiedl am See / Nordburgenland</strong> statt.
            Trainerin ist <Link href="/kontakt" className="wk-link font-semibold">Ing. Jessica Pusch</Link>{' '}
            („Jessy"), trainiert wird zu 100 % gewaltfrei mit positiver Verstärkung. {kurs.start} Anmeldung:{' '}
            <a href="tel:+436643903673" className="wk-link font-semibold">+43 664 3903673</a>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-600" /> 100 % gewaltfrei</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-600" /> Treffpunkte in deiner Region</span>
            <span className="inline-flex items-center gap-1.5"><ThumbsUp className="w-3.5 h-3.5 text-brand-600" /> 5,0 ★ auf Google</span>
            <span className="inline-flex items-center gap-1.5"><Car className="w-3.5 h-3.5 text-brand-600" /> Mobile Einzelstunden ergänzbar</span>
          </div>
        </div>
      </section>

      {/* ============== INTRO + WK-FOTO ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="wk-eyebrow">Darum geht&apos;s</span>
              <h2 className="wk-display text-3xl md:text-5xl text-ink-950">
                Was dich im {kurs.name} erwartet.
              </h2>
              {kurs.intro.map((p) => (
                <p key={p.slice(0, 32)} className="text-lg text-ink-600 leading-relaxed">{p}</p>
              ))}
              <div className="rounded-3xl bg-brand-50 border border-brand-100 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700 mb-2">Für wen?</p>
                <p className="text-ink-700 leading-relaxed">{kurs.audience}</p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-5 bg-gradient-to-br from-brand-100 to-lake-100 rounded-[2.5rem] rotate-3 opacity-60 blur-2xl" />
              <Image
                src={kurs.wkImage.src}
                alt={kurs.wkImage.alt}
                width={845}
                height={684}
                className="relative rounded-[2rem] shadow-[0_40px_80px_-32px_rgba(0,0,0,0.25)] object-cover w-full h-auto"
              />
              <p className="relative mt-3 text-center text-xs text-ink-400">Echtes Trainingsfoto der Hundeschule Willenskraft</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== KURSINHALTE ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5"><ClipboardList className="w-3 h-3" /> Kursinhalte</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Das lernt ihr im Kurs.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {kurs.inhalte.map((inhalt) => (
              <div key={inhalt} className="wk-card p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <span className="text-ink-800 text-sm font-medium leading-relaxed">{inhalt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== VORAUSSETZUNGEN / EQUIPMENT + WK-FOTO 2 ============== */}
      {(kurs.voraussetzungen || kurs.equipment) && (
        <section className="wk-section">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                {kurs.voraussetzungen && (
                  <div className="wk-card p-7">
                    <h3 className="text-lg font-semibold text-ink-950 mb-4 tracking-tight">Voraussetzungen</h3>
                    <ul className="space-y-2.5">
                      {kurs.voraussetzungen.map((v) => (
                        <li key={v} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" />
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {kurs.equipment && (
                  <div className="wk-card p-7">
                    <h3 className="text-lg font-semibold text-ink-950 mb-4 tracking-tight">Das brauchst du</h3>
                    <ul className="space-y-2.5">
                      {kurs.equipment.map((e) => (
                        <li key={e} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-lake-600 shrink-0" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="lg:col-span-5 relative">
                {kurs.wkImage2 && (
                  <>
                    <div className="absolute -inset-4 bg-gradient-to-br from-brand-100 to-lake-100 rounded-[2.5rem] -rotate-2 opacity-60 blur-xl" />
                    <Image
                      src={kurs.wkImage2.src}
                      alt={kurs.wkImage2.alt}
                      width={845}
                      height={684}
                      className="relative rounded-[2rem] shadow-2xl object-cover w-full h-auto"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============== CTA ============== */}
      <CtaBanner
        regionName="Neusiedl am See"
        title={`Platz im nächsten ${kurs.name} sichern?`}
        text={`${kurs.price} · ${kurs.units} · ${kurs.groupSize}. ${kurs.start} Jessy meldet sich innerhalb von 24 Stunden an Werktagen.`}
      />

      {/* ============== TERMINE (Kalender) ============== */}
      {kurs.calendarId && (
        <section className="wk-section bg-card">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <span className="wk-eyebrow mb-5"><CalendarDays className="w-3 h-3" /> Termine</span>
              <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Aktuelle Kurstermine.</h2>
              <p className="mt-5 text-lg text-ink-600">{kurs.start} Den Treffpunkt erfährst du bei der Anmeldung.</p>
            </div>
            <div className="rounded-[2rem] p-3 bg-brand-50 border border-brand-100">
              <iframe
                src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(kurs.calendarId)}&ctz=Europe%2FVienna`}
                style={{ border: 0, width: '100%', height: '560px' }}
                className="rounded-[1.75rem]"
                title={`Kurstermine ${kurs.name}`}
              />
            </div>
          </div>
        </section>
      )}

      {/* ============== VIDEO ============== */}
      {kurs.video && (
        <section className="wk-section bg-brand-50 relative overflow-hidden">
          <div className="absolute inset-0 wk-mesh opacity-50" />
          <div className="container mx-auto px-6 max-w-5xl relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="wk-eyebrow mb-5">
                <Youtube className="w-3 h-3" /> Aus dem Willenskraft-Kanal
              </span>
              <h2 className="wk-display text-3xl md:text-5xl text-ink-950">{kurs.video.title}</h2>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-24px_rgba(0,0,0,0.35)] border border-brand-100 aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${kurs.video.id}`}
                title={kurs.video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* ============== SHORTS ============== */}
      <ShortsSection ids={kurs.shorts} title={`${kurs.name} in Aktion.`} />

      {/* ============== FAQ ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <span className="wk-eyebrow mb-5">FAQ</span>
            <h2 className="wk-display text-4xl md:text-5xl text-ink-950">Häufige Fragen zum {kurs.name}.</h2>
          </div>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {kurs.faqs.map((faq, idx) => (
              <Accordion.Item key={idx} value={`faq-${idx}`} className="wk-card !p-0 overflow-hidden">
                <Accordion.Trigger className="flex w-full items-center justify-between p-6 sm:p-7 font-semibold text-base sm:text-lg text-ink-950 hover:text-brand-700 transition-colors group text-left">
                  <span className="pr-4">{faq.question}</span>
                  <div className="bg-brand-50 rounded-full p-2 group-hover:bg-brand-100 transition-colors shrink-0">
                    <ChevronDown className="h-5 w-5 text-ink-400 group-hover:text-brand-700 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="px-6 sm:px-7 pb-7 text-ink-600 leading-relaxed text-base data-[state=open]:animate-in data-[state=open]:fade-in">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* ============== JESSY ============== */}
      <JessySection />

      {/* ============== ANDERE KURSE ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5">Weitere Kurse</span>
            <h2 className="wk-display text-3xl md:text-4xl text-ink-950">Das passt vielleicht auch zu euch.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {andere.map((k) => (
              <Link key={k.slug} href={`/kurse/${k.slug}`} className="block group">
                <div className="wk-card p-6 h-full">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={k.heroImage}
                      alt={k.heroAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-ink-950 group-hover:text-brand-700 transition-colors">{k.name}</h3>
                  <p className="text-xs text-ink-500 mt-1">{k.teaser}</p>
                  <p className="text-sm font-bold text-brand-700 mt-2">{k.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/kurse" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors">
              Alle Kurse im Überblick <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============== ABSCHLUSS-CTA ============== */}
      <CtaBanner
        regionName="Neusiedl am See"
        title="Noch unsicher, welcher Kurs passt?"
        text="Schreib Jessy kurz, wie alt dein Hund ist und was euch beschäftigt — sie empfiehlt dir den passenden Einstieg. Auch mobile Einzelstunden bei dir zuhause sind möglich."
      />

      <section className="container mx-auto px-6 pb-16 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-ink-500">
          <HomeIcon className="w-3.5 h-3.5 text-brand-600" />
          Kein fester Hundeplatz: Alle Kurse finden an Outdoor-Treffpunkten in der Region statt — Einzeltraining bei dir zuhause.
        </span>
      </section>
    </div>
  );
}

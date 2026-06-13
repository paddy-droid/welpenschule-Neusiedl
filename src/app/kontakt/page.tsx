import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  GraduationCap,
  FlaskConical,
  Award,
  Quote,
  PawPrint,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import GoogleBadge from '@/components/GoogleBadge';
import { WhatsAppIcon, waHref } from '@/components/WhatsAppFloat';

const jessyImage = 'https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png';
const willenskraftProfil = 'https://www.willenskraft.co.at/bruck-leitha/';

export const metadata: Metadata = {
  title: 'Über Jessy & Kontakt',
  description:
    'Lerne Ing. Jessica Pusch („Jessy") kennen — deine mobile Hundetrainerin für den Bezirk Neusiedl am See. Biochemikerin, Willenskraft-Trainerin, 100 % gewaltfrei. Anruf, WhatsApp oder Mail. ☎ +43 664 3903673',
  alternates: { canonical: 'https://welpenschule-neusiedl.at/kontakt' },
  openGraph: {
    title: 'Über Jessy & Kontakt | Welpenschule Neusiedl am See',
    description:
      'Ing. Jessica Pusch („Jessy") — deine mobile Hundetrainerin am Neusiedlersee. Von der Biochemie zum gewaltfreien Hundetraining. Jetzt kennenlernen & Termin sichern.',
    url: 'https://welpenschule-neusiedl.at/kontakt',
    type: 'profile',
  },
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://welpenschule-neusiedl.at/kontakt#profilepage',
  url: 'https://welpenschule-neusiedl.at/kontakt',
  name: 'Über Jessy — Ing. Jessica Pusch, mobile Hundetrainerin Neusiedl am See',
  inLanguage: 'de-AT',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#ueber-jessy-direktantwort'] },
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://welpenschule-neusiedl.at/#trainer',
    name: 'Jessica Pusch',
    honorificPrefix: 'Ing.',
    alternateName: 'Jessy',
    jobTitle: 'Hundetrainerin — Hundeschule Willenskraft, Region Neusiedl am See & Nordburgenland',
    description:
      'Ing. Jessica Pusch — von ihren Kund:innen Jessy genannt — ist mobile Hundetrainerin der Hundeschule Willenskraft für den Bezirk Neusiedl am See. Ausgebildete Biochemikerin (Ing.), zertifiziert über die Willenskraft Akademie, dort auch als Dozentin und Prüferin tätig. Sie trainiert ausschließlich gewaltfrei mit positiver Verstärkung und kommt zum Training direkt zu den Mensch-Hund-Teams nach Hause.',
    image: jessyImage,
    url: 'https://welpenschule-neusiedl.at/kontakt',
    telephone: '+43-664-3903673',
    email: 'bruck_leitha@willenskraft.co.at',
    worksFor: { '@id': 'https://welpenschule-neusiedl.at/#business' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Bezirk Neusiedl am See, Burgenland' },
    knowsAbout: [
      'Welpentraining',
      'Positive Verstärkung',
      'Medical Training',
      'Junghundetraining',
      'Verhaltensberatung',
      'Mobiles Hundetraining',
      'Sachkundenachweis',
      'Biochemie',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'HBLVA für chemische Industrie Wien',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Willenskraft Akademie',
      url: 'https://www.willenskraft.co.at',
    },
    sameAs: [
      willenskraftProfil,
      'https://www.instagram.com/hundeschule_willenskraft/',
      'https://www.facebook.com/Hundeschule.Willenskraft',
    ],
  },
};

const breadcrumbsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://welpenschule-neusiedl.at' },
    { '@type': 'ListItem', position: 2, name: 'Über Jessy & Kontakt', item: 'https://welpenschule-neusiedl.at/kontakt' },
  ],
};

const credentials = [
  {
    icon: FlaskConical,
    title: 'Biochemikerin (Ing.)',
    text: 'HBLVA für chemische Industrie Wien, Schwerpunkt Biochemie — Ingenieurin seit 2019. Der wissenschaftliche Blick auf Lernverhalten ist bis heute meine Basis.',
  },
  {
    icon: GraduationCap,
    title: 'Willenskraft-Zertifizierung',
    text: 'Vollausbildung zur Hundetrainerin an der Hundeschule Willenskraft & Akademie (2023–2024) — gewaltfrei, ganzheitlich, wissenschaftlich fundiert.',
  },
  {
    icon: Award,
    title: 'Dozentin & Prüferin',
    text: 'An der Willenskraft Akademie unterrichte ich heute selbst angehende Hundetrainer:innen und nehme die Zertifizierungsprüfungen ab.',
  },
  {
    icon: HeartHandshake,
    title: 'Ehrenamt Tierheim',
    text: 'Seit 2023 ehrenamtlich im Tierheim Bruck an der Leitha — Training und Zeit für Hunde, die einen guten Start ins neue Leben brauchen.',
  },
];

const philosophy = [
  {
    icon: ShieldCheck,
    title: '100 % gewaltfrei',
    text: 'Kein Leinenruck, kein Stachelhalsband, keine Schreckmittel. Belohnung statt Strafe — wissenschaftlich belegt der nachhaltigere Weg.',
  },
  {
    icon: PawPrint,
    title: 'Jeder Hund ein Individuum',
    text: 'Ich starte nicht mit einem Schema, sondern mit der Persönlichkeit deines Hundes — Stärken, Unsicherheiten, Bedürfnisse.',
  },
  {
    icon: MapPin,
    title: 'Mobil bei dir zuhause',
    text: 'Ich komme dorthin, wo euer Alltag wirklich stattfindet — im gesamten Bezirk Neusiedl am See, Anfahrt kostenlos.',
  },
];

export default function KontaktPage() {
  return (
    <div className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />

      {/* ============== HERO — ÜBER JESSY ============== */}
      <section className="wk-section relative overflow-hidden">
        <div className="absolute inset-0 wk-mesh opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-400">
              <li><Link href="/" className="hover:text-lake-700 transition-colors">Startseite</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="font-semibold text-ink-700">Über Jessy &amp; Kontakt</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5 order-1">
              <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px]">
                <div className="absolute -inset-5 bg-gradient-to-br from-brand-100 to-lake-100 rounded-full opacity-70 blur-2xl" />
                <Image
                  src={jessyImage}
                  alt="Ing. Jessica Pusch, genannt Jessy — deine mobile Hundetrainerin im Bezirk Neusiedl am See"
                  width={460}
                  height={460}
                  priority
                  className="relative w-full h-auto rounded-[2.5rem] object-cover aspect-square border-4 border-cream shadow-[0_40px_80px_-30px_rgba(0,0,0,0.3)]"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-max max-w-[90%]">
                  <div className="wk-card !rounded-2xl !py-2.5 !px-4 flex items-center gap-2 shadow-xl">
                    <Sparkles className="w-4 h-4 text-brand-600 shrink-0" />
                    <span className="text-xs font-semibold text-ink-800 whitespace-nowrap">Ing. · Willenskraft-Trainerin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro */}
            <div className="lg:col-span-7 order-2">
              <span className="wk-eyebrow-lake mb-6">Über mich &amp; Kontakt</span>
              <h1 className="wk-display text-4xl md:text-6xl lg:text-7xl text-ink-950 leading-[1.04]">
                Hi, ich bin
                <br />
                <span className="wk-text-gradient">Jessy.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ink-600 max-w-2xl leading-relaxed">
                <strong className="text-ink-900">Ing. Jessica Pusch</strong> — deine mobile Hundetrainerin der{' '}
                <strong className="text-ink-900">Hundeschule Willenskraft</strong> für den Bezirk Neusiedl am See
                und das Nordburgenland. Ich komme zum Training direkt zu dir nach Hause — dorthin, wo euer
                Alltag wirklich stattfindet.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href="tel:+436643903673"
                  className="wk-btn-primary inline-flex items-center justify-center gap-2 px-7 h-13 rounded-full font-semibold"
                >
                  <Phone className="w-4 h-4" /> +43 664 3903673
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 h-13 rounded-full bg-[#25D366] text-white font-semibold hover:brightness-105 transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp an Jessy
                </a>
              </div>
              <div className="mt-7">
                <GoogleBadge href="/#bewertungen" />
              </div>
            </div>
          </div>

          {/* AEO-Direktantwort (Speakable) */}
          <div
            id="ueber-jessy-direktantwort"
            className="wk-card mt-12 p-7 md:p-9 border-l-[5px] !border-l-lake-500 scroll-mt-24"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lake-700 mb-3">
              Auf einen Blick — wer ist Jessy?
            </p>
            <p className="text-ink-800 text-base md:text-lg leading-relaxed">
              <strong>Ing. Jessica Pusch</strong> („Jessy") ist die mobile Hundetrainerin der Hundeschule
              Willenskraft für den Bezirk Neusiedl am See. Ursprünglich ausgebildete <strong>Biochemikerin
              (Ing.)</strong>, wechselte sie über die Willenskraft Akademie ins Hundetraining und ist dort
              heute selbst <strong>Dozentin und Prüferin</strong>. Sie trainiert zu 100 % gewaltfrei mit
              positiver Verstärkung, kommt zum Training direkt zu dir nach Hause und leitet auch die{' '}
              <a href={willenskraftProfil} target="_blank" rel="noopener noreferrer" className="wk-link font-semibold">
                Willenskraft-Welpenschule Bruck an der Leitha
              </a>
              . Kontakt:{' '}
              <a href="tel:+436643903673" className="wk-link font-semibold">+43 664 3903673</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ============== MEIN WEG — STORY ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="wk-eyebrow mb-2">
                <FlaskConical className="w-3 h-3" /> Mein Weg
              </span>
              <h2 className="wk-display text-3xl md:text-5xl text-ink-950 leading-[1.08]">
                Von der Biochemie
                <br />
                <span className="wk-text-gradient">zum Hundetraining.</span>
              </h2>
              <p className="text-lg text-ink-600 leading-relaxed">
                Ich habe die <strong className="text-ink-900">HBLVA für chemische Industrie in Wien</strong> mit
                Schwerpunkt Biochemie absolviert und bin <strong className="text-ink-900">Ingenieurin (Ing.)</strong>.
                Dieser naturwissenschaftliche Blick auf Lernen, Verhalten und Reize hat mich nie losgelassen —
                nur richtet er sich heute auf Hunde statt auf Moleküle.
              </p>
              <p className="text-lg text-ink-600 leading-relaxed">
                Über die <strong className="text-ink-900">Willenskraft Akademie</strong> habe ich meine
                Vollausbildung zur Hundetrainerin gemacht und arbeite dort inzwischen selbst als Dozentin und
                Prüferin. Für die Region Neusiedl am See bin ich heute mobil unterwegs — und genau das verbindet
                beides: Training nach dem Stand der Verhaltensforschung, aber immer bei euch zuhause, im echten Alltag.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-4">
              <figure className="relative rounded-[2rem] bg-gradient-to-br from-ink-950 to-ink-800 text-cream p-8 md:p-9 shadow-2xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-lake-500 blur-[100px] opacity-25" />
                <div className="absolute inset-0 wk-grain opacity-25" />
                <Quote className="relative w-8 h-8 text-brand-400 mb-4" />
                <blockquote className="relative wk-display text-xl md:text-2xl text-cream leading-snug">
                  „Jeder Hund ist — genau wie jeder Mensch — ein Individuum mit eigenen Stärken und Schwächen.
                  Gutes Training beginnt damit, diese Persönlichkeit zu verstehen."
                </blockquote>
                <figcaption className="relative mt-5 text-sm text-lake-300 font-semibold">
                  — Ing. Jessica Pusch
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ============== QUALIFIKATIONEN ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow-lake mb-5">
              <GraduationCap className="w-3 h-3" /> Qualifikation
            </span>
            <h2 className="wk-display text-3xl md:text-5xl text-ink-950">
              Ausbildung, die man im Training spürt.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map((c) => (
              <div key={c.title} className="wk-card p-7 group">
                <div className="w-12 h-12 rounded-2xl bg-lake-100 text-lake-700 flex items-center justify-center mb-5 group-hover:bg-lake-500 group-hover:text-cream transition-colors">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-ink-950 mb-2.5 tracking-tight">{c.title}</h3>
                <p className="text-ink-600 leading-relaxed text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PHILOSOPHIE ============== */}
      <section className="wk-section bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="wk-eyebrow mb-5">
              <ShieldCheck className="w-3 h-3" /> Meine Haltung
            </span>
            <h2 className="wk-display text-3xl md:text-5xl text-ink-950">
              Wie ich mit deinem Hund arbeite.
            </h2>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              Belohnung statt Druck, verstehen statt dominieren — und immer angepasst an genau deinen Hund.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {philosophy.map((p) => (
              <div key={p.title} className="wk-card p-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-ink-950 mb-3 tracking-tight">{p.title}</h3>
                <p className="text-ink-600 leading-relaxed text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MEINE HUNDE ============== */}
      <section className="wk-section">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="wk-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-brand-100 to-lake-100 blur-3xl opacity-60 pointer-events-none" />
            <div className="relative">
              <span className="wk-eyebrow-lake mb-5">
                <PawPrint className="w-3 h-3" /> Privat
              </span>
              <h2 className="wk-display text-3xl md:text-4xl text-ink-950 mb-5">
                Meine eigene Meute hält mich ehrlich.
              </h2>
              <p className="text-lg text-ink-600 leading-relaxed max-w-3xl">
                Zuhause teile ich mein Leben mit meinen Hunden <strong className="text-ink-900">James, Rosie,
                Hank und Kelly</strong> — und mit meinen Trainingshunden <strong className="text-ink-900">Stella
                und Lina</strong>. Sie sind meine besten Lehrerinnen und Lehrer: Jeder Charakter ist anders, und
                jeder einzelne erinnert mich täglich daran, warum es kein „Rezept für alle Hunde" gibt. Auch das
                Westernreiten und die Arbeit mit Pferden haben mir früh gezeigt, wie viel über feine Kommunikation
                und Vertrauen läuft — eine Haltung, die ich heute in jedes Hundetraining mitnehme.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {['James', 'Rosie', 'Hank', 'Kelly', 'Stella', 'Lina'].map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-lake-300/50 bg-cream px-4 py-2 text-sm font-medium text-ink-800"
                  >
                    <PawPrint className="w-3.5 h-3.5 text-lake-600 shrink-0" /> {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Link zum Willenskraft-Profil */}
          <a
            href={willenskraftProfil}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl bg-cream-soft border border-ink-200/60 p-6 md:p-7 hover:border-lake-400 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-lake-100 text-lake-700 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lake-700 mb-1">Noch mehr über mich</p>
                <p className="text-ink-800 font-semibold">Mein Trainerinnen-Profil auf willenskraft.co.at</p>
                <p className="text-sm text-ink-500 mt-0.5">Werdegang, Hunde, Methode & mein Stammgebiet Bruck an der Leitha</p>
              </div>
            </div>
            <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-lake-700 group-hover:gap-2.5 transition-all">
              Profil ansehen <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

      {/* ============== KONTAKT-KARTE ============== */}
      <section id="kontakt" className="container mx-auto px-6 pb-24 max-w-5xl scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="wk-eyebrow mb-5">Lass uns starten</span>
          <h2 className="wk-display text-3xl md:text-5xl text-ink-950">
            So erreichst du mich.
          </h2>
          <p className="mt-5 text-lg text-ink-600 leading-relaxed">
            Schreib mir, ruf an oder buche direkt einen Termin — ich melde mich innerhalb von 24 Stunden an
            Werktagen. Die Erstberatung ist kostenlos und unverbindlich.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-14 bg-gradient-to-br from-ink-950 to-ink-800 text-cream shadow-2xl">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-500 blur-[120px] opacity-25" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-lake-500 blur-[120px] opacity-25" />
          <div className="absolute inset-0 wk-grain opacity-25" />

          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4">
              <div className="relative">
                <div className="absolute inset-0 bg-lake-500 rounded-full blur-3xl opacity-30 -translate-y-2" />
                <Image
                  src={jessyImage}
                  alt="Ing. Jessica Pusch — Hundeschule Willenskraft"
                  width={400}
                  height={400}
                  className="relative rounded-full mx-auto object-cover aspect-square border-4 border-ink-800 shadow-2xl"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-lake-300">Deine mobile Hundetrainerin</p>
                <p className="wk-display text-2xl text-cream mt-1">Ing. Jessica Pusch</p>
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
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-ink-900/60 border border-ink-700 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">WhatsApp</p>
                  <p className="text-cream font-semibold text-lg">Direkt an Jessy schreiben</p>
                </div>
                <ArrowRight className="w-4 h-4 text-ink-500 group-hover:text-[#25D366] transition-all group-hover:translate-x-1" />
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

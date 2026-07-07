import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUpRight, Waves } from 'lucide-react';
import { serviceLocations } from '@/lib/regionData';
import NewsletterSignup from '@/components/NewsletterSignup';

const regionLinks = serviceLocations.map((loc) => ({
  href: loc.slug === 'neusiedl-am-see' ? '/mobiles-hundetraining' : `/mobiles-hundetraining/${loc.slug}`,
  label: loc.name,
}));

export default function Footer() {
  return (
    <footer className="relative mt-12 bg-ink-950 text-ink-200 overflow-hidden">
      <div className="absolute inset-0 wk-mesh-dark opacity-90 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 via-50% to-transparent" />
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-8 pt-16 pb-10">
        {/* Newsletter-Band — auf jeder Seite */}
        <div className="mb-16 rounded-3xl bg-cream p-7 md:p-9 grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <span className="wk-hand text-brand-600 text-2xl leading-none">Willenskraft Post 🐾</span>
            <h3 className="wk-display text-2xl md:text-3xl text-ink-950 mt-1.5">
              Newsletter für ein entspanntes Hundeleben.
            </h3>
            <p className="mt-2 text-sm text-ink-600 leading-relaxed max-w-md">
              Etwa monatlich von Bianca Oriana Willen: Studien verständlich erklärt, gewaltfreie Trainingstipps
              und Neues rund um den Neusiedlersee.
            </p>
          </div>
          <div className="lg:col-span-5">
            <NewsletterSignup variant="inline" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-[10px] font-bold uppercase tracking-[0.18em]">
              <Waves className="w-3 h-3" />
              Hundeschule Willenskraft · Neusiedlersee
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold leading-[1.05] tracking-tight text-cream">
              Wo der Pannonische Wind
              <br />
              <span className="wk-text-gradient">Hund &amp; Mensch näher bringt.</span>
            </h3>
            <p className="text-ink-400 leading-relaxed max-w-md">
              Die Welpenschule Neusiedl am See ist der regionale Standort der Hundeschule Willenskraft —
              als <strong className="text-ink-200">mobile Hundeschule</strong> kommen wir zum Training direkt
              zu dir nach Hause: im gesamten Bezirk Neusiedl am See, vom Leithagebirge bis in den Seewinkel.
              Gewaltfrei, ganzheitlich, mit deiner Trainerin Jessy.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/hundeschule_willenskraft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Hundeschule.Willenskraft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@hundeschulewillenskraft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.willenskraft.co.at"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 px-3.5 h-10 rounded-full border border-ink-700 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-300 text-xs font-medium transition-all"
              >
                willenskraft.co.at
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation + Kurse */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-5">Navigation</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-brand-300 transition-colors">Startseite</Link></li>
              <li><Link href="/mobiles-hundetraining" className="hover:text-brand-300 transition-colors">Mobiles Training</Link></li>
              <li><Link href="/kurse" className="hover:text-brand-300 transition-colors">Alle Kurse</Link></li>
              <li><Link href="/kontakt" className="hover:text-brand-300 transition-colors">Kontakt</Link></li>
              <li><Link href="/impressum" className="hover:text-brand-300 transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-brand-300 transition-colors">Datenschutz</Link></li>
            </ul>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mt-7 mb-4">Gruppenkurse</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/kurse/welpenkurs" className="hover:text-brand-300 transition-colors">Welpenkurs</Link></li>
              <li><Link href="/kurse/junghundekurs" className="hover:text-brand-300 transition-colors">Junghundekurs</Link></li>
              <li><Link href="/kurse/begegnungstraining" className="hover:text-brand-300 transition-colors">Begegnungstraining</Link></li>
              <li><Link href="/kurse/dummytraining" className="hover:text-brand-300 transition-colors">Dummytraining</Link></li>
              <li><Link href="/kurse/medical-training" className="hover:text-brand-300 transition-colors">Medical Training</Link></li>
            </ul>
          </div>

          {/* Regions */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-5">Regionen</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-3 text-sm">
              {regionLinks.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="hover:text-brand-300 transition-colors">{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400 mb-5">Kontakt</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+436643903673" className="flex items-start gap-2.5 hover:text-brand-300 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                  <span>+43 664 3903673</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bruck_leitha@willenskraft.co.at"
                  className="flex items-start gap-2.5 hover:text-brand-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                  <span>bruck_leitha@willenskraft.co.at</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" />
                <span>Mobil im Bezirk<br />Neusiedl am See — wir kommen zu dir</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ink-500">
          <p>© {new Date().getFullYear()} Hundeschule Willenskraft · Alle Rechte vorbehalten.</p>
          <p className="text-ink-600">
            Inhaberin: Jessica Pusch · Mobile Welpenschule &amp; Hundeschule Neusiedl am See · Burgenland
          </p>
        </div>
      </div>
    </footer>
  );
}

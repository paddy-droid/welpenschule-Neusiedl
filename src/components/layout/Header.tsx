'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Youtube, MapPin, PawPrint } from 'lucide-react';
import Logo from '@/components/Logo';

const youtubeChannelUrl = 'https://www.youtube.com/@hundeschulewillenskraft';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/mobiles-hundetraining', label: 'Mobiles Training' },
  { href: '/ratgeber', label: 'Ratgeber' },
  { href: '/ueber-willenskraft', label: 'Willenskraft' },
];

const kursLinks = [
  { href: '/kurse', label: 'Alle Kurse im Überblick', hint: 'Übersicht & Preise' },
  { href: '/kurse/welpenkurs', label: 'Welpenkurs', hint: 'Welpen bis ~5 Monate · 195 €' },
  { href: '/kurse/junghundekurs', label: 'Junghundekurs', hint: 'Souverän durch die Pubertät · 195 €' },
  { href: '/kurse/begegnungstraining', label: 'Begegnungstraining', hint: 'Entspannt an der Leine · 260 €' },
  { href: '/kurse/dummytraining', label: 'Dummytraining', hint: 'Apport & Nasenarbeit · 220 €' },
  { href: '/kurse/medical-training', label: 'Medical Training', hint: 'Stressfrei zum Tierarzt · 260 €' },
];

const mobileTrainingLocations = [
  { href: '/mobiles-hundetraining', label: 'Neusiedl am See', region: 'Bezirkshauptstadt' },
  { href: '/mobiles-hundetraining/gols', label: 'Gols', region: 'Weinhauptort' },
  { href: '/mobiles-hundetraining/parndorf', label: 'Parndorf', region: 'Heideboden' },
  { href: '/mobiles-hundetraining/weiden-am-see', label: 'Weiden am See', region: 'Seebad-Gemeinde' },
  { href: '/mobiles-hundetraining/jois', label: 'Jois', region: 'Leithagebirge' },
  { href: '/mobiles-hundetraining/winden-am-see', label: 'Winden am See', region: 'Kirschblütenort' },
  { href: '/mobiles-hundetraining/podersdorf-am-see', label: 'Podersdorf am See', region: 'Leuchtturm & Strand' },
  { href: '/mobiles-hundetraining/frauenkirchen', label: 'Frauenkirchen', region: 'Wallfahrtsort' },
  { href: '/mobiles-hundetraining/moenchhof', label: 'Mönchhof', region: 'Dorfmuseum' },
  { href: '/mobiles-hundetraining/halbturn', label: 'Halbturn', region: 'Schlossort' },
  { href: '/mobiles-hundetraining/st-andrae-am-zicksee', label: 'St. Andrä am Zicksee', region: 'Zicksee' },
  { href: '/mobiles-hundetraining/illmitz', label: 'Illmitz', region: 'Nationalpark' },
  { href: '/mobiles-hundetraining/apetlon', label: 'Apetlon', region: 'Lange Lacke' },
  { href: '/mobiles-hundetraining/andau', label: 'Andau', region: 'Seewinkel-Süd' },
  { href: '/mobiles-hundetraining/pamhagen', label: 'Pamhagen', region: 'Hanság' },
  { href: '/mobiles-hundetraining/kittsee', label: 'Kittsee', region: 'Dreiländereck' },
  { href: '/mobiles-hundetraining/bruckneudorf', label: 'Bruckneudorf', region: 'Leitha-Auen' },
];

const legalItems = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
];

/** Willenskraft-Chip: weißes Icon auf Orange-Verlauf (wie das gebrandete WK-Menü). */
function Chip({ kind }: { kind: 'kurs' | 'ort' }) {
  return (
    <span className="inline-flex w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white items-center justify-center shrink-0 shadow-[0_4px_10px_-4px_rgba(208,113,8,0.6)] transition-transform duration-200 group-hover/item:scale-110">
      {kind === 'ort' ? <MapPin className="w-4 h-4" /> : <PawPrint className="w-4 h-4" />}
    </span>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileRegionOpen, setIsMobileRegionOpen] = useState(false);
  const [isMobileKursOpen, setIsMobileKursOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Offenes Menü: Escape schließt, Hintergrund-Scroll gesperrt
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-[padding,background-color,box-shadow,border-color] duration-500 ease-out ${
        isClient && isScrolled
          ? 'bg-[color-mix(in_oklch,white_90%,transparent)] backdrop-blur-xl shadow-[0_1px_0_0_var(--ink-200),0_8px_30px_-12px_rgba(0,0,0,0.08)] py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-5 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center z-50 relative group" aria-label="Welpenschule Neusiedl am See – Startseite">
          <span className="transition-transform duration-500 ease-out group-hover:scale-[0.97]">
            <Logo width={150} height={56} />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3.5 py-2 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors rounded-full hover:bg-brand-50"
            >
              {item.label}
            </Link>
          ))}

          {/* Kurse Dropdown — WK-gebrandet (Caveat + Orange-Chips) */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors rounded-full hover:bg-brand-50">
              Kurse
              <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full -left-4 pt-3 w-[360px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 origin-top">
              <div className="bg-white/97 backdrop-blur-xl rounded-3xl shadow-[0_24px_64px_-20px_rgba(0,0,0,0.2)] border border-brand-100 overflow-hidden p-2.5">
                <p className="px-3 pt-1.5 pb-2.5 wk-hand text-xl text-brand-600">Kurse & Training mit Jessy</p>
                <div className="space-y-0.5">
                  {kursLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-brand-50 transition-colors"
                    >
                      <Chip kind="kurs" />
                      <span className="min-w-0">
                        <span className="block wk-hand text-lg leading-tight text-ink-800 group-hover/item:text-brand-700">{item.label}</span>
                        <span className="block text-[11px] text-ink-400 leading-tight">{item.hint}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Orte Dropdown — WK-gebrandet */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors rounded-full hover:bg-brand-50">
              Orte
              <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full -left-4 pt-3 w-[460px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 origin-top">
              <div className="bg-white/97 backdrop-blur-xl rounded-3xl shadow-[0_24px_64px_-20px_rgba(0,0,0,0.2)] border border-brand-100 overflow-hidden p-2.5 max-h-[72vh] overflow-y-auto">
                <p className="px-3 pt-1.5 pb-2.5 wk-hand text-xl text-brand-600">Mobil — wir kommen zu dir</p>
                <div className="grid grid-cols-2 gap-0.5">
                  {mobileTrainingLocations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center gap-2.5 px-2.5 py-2 rounded-2xl hover:bg-brand-50 transition-colors"
                    >
                      <Chip kind="ort" />
                      <span className="min-w-0">
                        <span className="block wk-hand text-base leading-tight text-ink-800 group-hover/item:text-brand-700 truncate">{item.label}</span>
                        <span className="block text-[10px] text-ink-400 leading-tight truncate">{item.region}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/kontakt"
            className="relative px-3.5 py-2 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors rounded-full hover:bg-brand-50"
          >
            Kontakt
          </Link>

          <div className="flex items-center gap-1 ml-1 pl-1 border-l border-ink-200/70">
            <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" aria-label="Willenskraft auf YouTube" className="inline-flex items-center justify-center w-8 h-8 rounded-full text-ink-500 hover:text-[#FF0000] hover:bg-brand-50 transition-colors"><Youtube size={16} /></a>
          </div>

          <a
            href="tel:+436643903673"
            className="ml-1 hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-ink-600 hover:text-brand-700 transition-colors"
          >
            <Phone size={13} /> +43 664 3903673
          </a>

          <Link
            href="/kontakt"
            className="ml-2 wk-btn-primary px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight"
          >
            Anmeldung
          </Link>
        </nav>

        {/* Mobile Menu Button — z-[60], damit er ÜBER dem Drawer (z-50) bleibt und Schließen immer möglich ist */}
        <div className="lg:hidden flex items-center z-[60] relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 text-ink-900 hover:bg-brand-50 rounded-full transition-colors"
            aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer — WK-Stil: Caveat + Orange-Chips + Social-Bar */}
      {isClient && (
        <>
          <div
            className={`fixed inset-0 bg-ink-950/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 w-[90vw] sm:w-[380px] bg-cream/98 backdrop-blur-xl z-50 h-[100dvh] lg:hidden transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] shadow-[-24px_0_64px_-12px_rgba(0,0,0,0.18)] flex flex-col ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="px-6 pt-6 pb-4 border-b border-brand-200/60">
              <span className="wk-hand text-2xl text-brand-600">Willenskraft Neusiedl</span>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-5">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block wk-hand text-2xl text-ink-900 hover:text-brand-700 transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/kontakt"
                  className="block wk-hand text-2xl text-ink-900 hover:text-brand-700 transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>

              {/* Kurse (aufklappbar) */}
              <div>
                <button
                  onClick={() => setIsMobileKursOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="wk-hand text-xl text-brand-600">Kurse & Training</span>
                  <ChevronDown size={18} className={`text-brand-500 transition-transform duration-300 ${isMobileKursOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${isMobileKursOpen ? 'max-h-[900px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-1">
                    {kursLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/item flex items-center gap-3 py-1.5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Chip kind="kurs" />
                        <span className="wk-hand text-lg text-ink-800 group-hover/item:text-brand-700">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orte (aufklappbar) */}
              <div>
                <button
                  onClick={() => setIsMobileRegionOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="wk-hand text-xl text-brand-600">Orte — wir kommen zu dir</span>
                  <ChevronDown size={18} className={`text-brand-500 transition-transform duration-300 ${isMobileRegionOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${isMobileRegionOpen ? 'max-h-[1800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-1">
                    {mobileTrainingLocations.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/item flex items-center gap-3 py-1.5"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Chip kind="ort" />
                        <span className="wk-hand text-lg text-ink-800 group-hover/item:text-brand-700">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-auto pt-4">
                <a
                  href="tel:+436643903673"
                  className="block text-center wk-btn-ghost rounded-full py-3.5 text-sm font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="inline w-4 h-4 mr-2 -mt-0.5" />
                  +43 664 3903673
                </a>
                <Link
                  href="/kontakt"
                  className="block text-center wk-btn-primary rounded-full py-4 text-base font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Anmeldung starten
                </Link>

                {/* Social-Bar (wie WK-Mobile) */}
                <div className="flex justify-center gap-3 pt-4 border-t border-brand-200/60">
                  <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" aria-label="Willenskraft auf YouTube" className="w-10 h-10 rounded-full border border-ink-200 text-ink-600 hover:text-[#FF0000] hover:border-[#FF0000]/40 flex items-center justify-center transition-colors"><Youtube className="w-4 h-4" /></a>
                </div>
                <div className="flex justify-center gap-6">
                  {legalItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xs font-medium text-ink-400 hover:text-ink-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

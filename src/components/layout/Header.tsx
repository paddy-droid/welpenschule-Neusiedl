'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Youtube } from 'lucide-react';
import Logo from '@/components/Logo';

const youtubeChannelUrl = 'https://www.youtube.com/@hundeschulewillenskraft';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/mobiles-hundetraining', label: 'Mobiles Training' },
];

const kursLinks = [
  { href: '/kurse', label: 'Alle Kurse im Überblick', hint: 'Übersicht & Preise' },
  { href: '/kurse/welpenkurs', label: 'Welpenkurs', hint: 'Welpen bis ~5 Monate · 195 €' },
  { href: '/kurse/junghundekurs', label: 'Junghundekurs', hint: 'Souverän durch die Pubertät · 195 €' },
  { href: '/kurse/begegnungstraining', label: 'Begegnungstraining', hint: 'Entspannt an der Leine · 260 €' },
  { href: '/kurse/dummytraining', label: 'Dummytraining', hint: 'Apport & Nasenarbeit · 220 €' },
  { href: '/kurse/medical-training', label: 'Medical Training', hint: 'Stressfrei zum Tierarzt · 220 €' },
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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobileRegionOpen, setIsMobileRegionOpen] = useState(false);

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
          ? 'bg-[color-mix(in_oklch,var(--cream)_82%,transparent)] backdrop-blur-xl shadow-[0_1px_0_0_var(--ink-200),0_8px_30px_-12px_rgba(0,0,0,0.08)] py-2.5'
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
              className="relative px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-950 transition-colors rounded-full hover:bg-lake-50"
            >
              {item.label}
            </Link>
          ))}

          {/* Kurse Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-950 transition-colors rounded-full hover:bg-lake-50">
              Kurse
              <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full -left-4 pt-3 w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 origin-top">
              <div className="bg-card/95 backdrop-blur-xl rounded-2xl shadow-[0_24px_64px_-20px_rgba(0,0,0,0.18)] border border-ink-200 overflow-hidden p-2">
                <div className="px-3 pt-2 pb-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-700">Gruppenkurse mit Jessy</p>
                  <p className="text-xs text-ink-500 mt-0.5">An Outdoor-Treffpunkten in deiner Region</p>
                </div>
                <div className="space-y-0.5">
                  {kursLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item block px-3 py-2 rounded-lg text-sm text-ink-700 hover:bg-lake-50 hover:text-lake-800 transition-colors"
                    >
                      <span className="block font-medium">{item.label}</span>
                      <span className="block text-[10px] text-ink-400 group-hover/item:text-lake-700">{item.hint}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Regionen Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-950 transition-colors rounded-full hover:bg-lake-50">
              Regionen
              <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full -left-4 pt-3 w-[420px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 origin-top">
              <div className="bg-card/95 backdrop-blur-xl rounded-2xl shadow-[0_24px_64px_-20px_rgba(0,0,0,0.18)] border border-ink-200 overflow-hidden p-2 max-h-[70vh] overflow-y-auto">
                <div className="px-3 pt-2 pb-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-lake-700">Mobile Hundeschule — wir kommen zu dir</p>
                  <p className="text-xs text-ink-500 mt-0.5">17 Einsatzorte im Bezirk Neusiedl am See</p>
                </div>
                <div className="grid grid-cols-2 gap-0.5">
                  {mobileTrainingLocations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item px-3 py-2 rounded-lg text-sm text-ink-700 hover:bg-lake-50 hover:text-lake-800 transition-colors"
                    >
                      <span className="block font-medium">{item.label}</span>
                      <span className="block text-[10px] text-ink-400 group-hover/item:text-lake-700">{item.region}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/kontakt"
            className="relative px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-950 transition-colors rounded-full hover:bg-lake-50"
          >
            Kontakt
          </Link>

          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Willenskraft auf YouTube"
            className="ml-1 inline-flex items-center justify-center w-9 h-9 rounded-full text-ink-600 hover:text-[#FF0000] hover:bg-lake-50 transition-colors"
          >
            <Youtube size={18} />
          </a>

          <a
            href="tel:+436643903673"
            className="ml-1 hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-ink-600 hover:text-lake-700 transition-colors"
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
            className="p-2 -mr-2 text-ink-900 hover:bg-lake-50 rounded-full transition-colors"
            aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isClient && (
        <>
          <div
            className={`fixed inset-0 bg-ink-950/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 w-[88vw] sm:w-[360px] bg-cream/98 backdrop-blur-xl z-50 h-[100dvh] lg:hidden transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] shadow-[-24px_0_64px_-12px_rgba(0,0,0,0.18)] flex flex-col ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="px-6 pt-6 pb-4 border-b border-ink-200/60">
              <span className="wk-eyebrow-lake !py-1.5 !text-[10px]">Willenskraft Neusiedl</span>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-7 flex flex-col gap-7">
              <div className="space-y-3">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400 mb-3">Menü</h3>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-2xl font-semibold text-ink-900 hover:text-lake-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/kontakt"
                  className="block text-2xl font-semibold text-ink-900 hover:text-lake-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>

              <div className="space-y-3">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">Gruppenkurse</h3>
                <div className="space-y-2.5 pl-3 border-l border-brand-300/60">
                  {kursLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-base font-medium text-ink-700 hover:text-lake-700 py-1 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      <span className="block text-[10px] text-ink-400 mt-0.5">{item.hint}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setIsMobileRegionOpen(!isMobileRegionOpen)}
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                >
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-400">Regionen</h3>
                  <ChevronDown
                    size={16}
                    className={`text-ink-400 transition-transform duration-300 ${isMobileRegionOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`space-y-2.5 pl-3 border-l border-lake-300/60 overflow-hidden transition-all duration-500 ${
                    isMobileRegionOpen ? 'max-h-[1400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {mobileTrainingLocations.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-base font-medium text-ink-700 hover:text-lake-700 py-1 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      <span className="block text-[10px] text-ink-400 mt-0.5">{item.region}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4 mt-auto">
                <a
                  href={youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold border border-ink-200 text-ink-700 hover:border-[#FF0000]/40 hover:text-[#FF0000] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Youtube className="w-4 h-4" /> Willenskraft auf YouTube
                </a>
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

                <div className="flex justify-center gap-6 pt-5 border-t border-ink-200/60">
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

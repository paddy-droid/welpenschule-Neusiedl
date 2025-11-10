'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/kontakt', label: 'Kontakt' },
];

const mobileTrainingLocations = [
  { href: '/mobiles-hundetraining', label: 'Neusiedl am See' },
  { href: '/mobiles-hundetraining/gols', label: 'Gols' },
  { href: '/mobiles-hundetraining/frauenkirchen', label: 'Frauenkirchen' },
  { href: '/mobiles-hundetraining/parndorf', label: 'Parndorf' },
  { href: '/mobiles-hundetraining/weiden-am-see', label: 'Weiden am See' },
  { href: '/mobiles-hundetraining/illmitz', label: 'Illmitz' },
  { href: '/mobiles-hundetraining/andau', label: 'Andau' },
];

const legalItems = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-white/95 shadow-sm'
  }`;
  
  // Adjusted linkColor to handle menu open state
  const linkColor = 'text-gray-800';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo width={180} height={70} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-gray-600 hover:text-yellow-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-lg">
             <Link href="/kontakt">Anmeldung</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={linkColor}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 w-3/5 max-w-xs bg-white z-40 h-screen md:hidden transition-transform duration-300 ease-in-out shadow-xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-800">
                  <X size={28} />
              </button>
          </div>
          <nav className="flex flex-col items-start justify-start h-full px-6 py-8 space-y-6 overflow-y-auto">
            <div className="w-full">
              <h3 className="font-bold text-lg mb-3 text-gray-800">Navigation</h3>
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-800 hover:text-yellow-500 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="w-full">
              <h3 className="font-bold text-lg mb-3 text-gray-800">Mobiles Hundetraining</h3>
              <div className="flex flex-col space-y-2">
                {mobileTrainingLocations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-yellow-500 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="w-full">
              <h3 className="font-bold text-lg mb-3 text-gray-800">Rechtliches</h3>
              <div className="flex flex-col space-y-2">
                {legalItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-yellow-500 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="w-full mt-6">
              <Button asChild size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full">
                <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>Anmeldung</Link>
              </Button>
            </div>
          </nav>
      </div>
    </header>
  );
}
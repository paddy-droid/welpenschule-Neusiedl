'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/kontakt', label: 'Kontakt' },
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
    isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
  }`;
  
  // Adjusted linkColor to handle menu open state on transparent background
  const linkColor = isScrolled || isMenuOpen ? 'text-gray-800' : 'text-white';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold transition-colors ${linkColor}`}>
          Welpenschule Neusiedl
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-600 hover:text-yellow-500'
                  : 'text-white hover:text-yellow-300 drop-shadow-sm'
              }`}
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
      <div className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-800">
                  <X size={28} />
              </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-800 hover:text-yellow-500 text-2xl font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
             <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold mt-8">
               <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>Anmeldung</Link>
            </Button>
          </nav>
      </div>
    </header>
  );
}
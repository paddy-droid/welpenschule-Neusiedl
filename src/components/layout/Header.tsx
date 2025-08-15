'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming ShadCN places it here
import { Menu } from 'lucide-react'; // For mobile menu icon

export default function Header() {
  // Placeholder for mobile menu state and toggle function
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Placeholder */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Welpenschule
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Startseite
          </Link>
          <Link href="/wien/ganzheitliche-welpenschule" className="text-sm font-medium hover:text-primary transition-colors">
            Kurse
          </Link>
          <Link href="/ueber-uns" className="text-sm font-medium hover:text-primary transition-colors">
            Über Uns
          </Link>
          <Link href="/kontakt" className="text-sm font-medium hover:text-primary transition-colors">
            Kontakt
          </Link>
          {/* Language Switcher Placeholder */}
          <div className="text-sm">DE</div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            // onClick={toggleMobileMenu} // Placeholder for actual toggle
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menü öffnen</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Placeholder - to be implemented later
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col gap-4 p-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Startseite
            </Link>
            <Link href="/wien/ganzheitliche-welpenschule" className="text-sm font-medium hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Kurse
            </Link>
            <Link href="/ueber-uns" className="text-sm font-medium hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Über Uns
            </Link>
            <Link href="/kontakt" className="text-sm font-medium hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Kontakt
            </Link>
            <div className="text-sm pt-2 border-t">Sprache: DE</div>
          </nav>
        </div>
      )}
      */}
    </header>
  );
}
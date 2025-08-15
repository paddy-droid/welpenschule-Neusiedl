import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Welpenschule [Business Name Placeholder]. Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-4">
            <Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
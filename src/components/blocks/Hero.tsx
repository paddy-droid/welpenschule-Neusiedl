import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Ensure this path is correct

export default function HeroBlock() {
  return (
    <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
          Liebevolle Welpenschule in Wien – Starten Sie richtig!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Entdecken Sie unsere ganzheitlichen Kurse, die Ihrem Welpen den besten Start ins Leben ermöglichen. 
          Wir fördern spielerisch Sozialverhalten, Grundgehorsam und eine starke Bindung zwischen Ihnen und Ihrem neuen Familienmitglied.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/wien/ganzheitliche-welpenschule">
            Unsere Kurse entdecken
          </Link>
        </Button>
      </div>
      {/* 
        A background image could be applied here via CSS or inline style if needed,
        or a Next.js <Image> component with appropriate styling for a full-width/hero effect.
        For simplicity, starting with a gradient background.
      */}
    </section>
  );
}
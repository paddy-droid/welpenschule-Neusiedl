import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Star, Users, Zap, Heart, ArrowLeft } from 'lucide-react';
import WillenskraftSection from '@/components/WillenskraftSection';

const mobileTrainingPillars = [
    { icon: <Heart className="text-yellow-500" />, title: "Individuelles Training in Illmitz", description: "Wir gehen gezielt auf deine Wünsche und die Bedürfnisse deines Hundes in eurer gewohnten Umgebung in Illmitz ein." },
    { icon: <Zap className="text-yellow-500" />, title: "Training bei dir zuhause", description: "Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, direkt in Illmitz." },
    { icon: <Users className="text-yellow-500" />, title: "Flexible Terminvereinbarung", description: "Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir nach Illmitz." },
    { icon: <CheckCircle2 className="text-yellow-500" />, title: "Alltagsnahe Probleme lösen", description: "Ob Leinenführigkeit, Rückruf oder Begegnungen im Nationalpark – wir arbeiten an konkreten Herausforderungen in Illmitz." },
    { icon: <Star className="text-yellow-500" />, title: "Stärkung der Bindung", description: "Durch das gemeinsame Training in vertrauter Atmosphäre wird die Beziehung zwischen dir und deinem Hund gefestigt." },
]

export default function MobileHundetrainingIllmitzPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/mobiles-hundetraining-illmitz.webp" // Platzhalter-Bild
          alt="Mobiles Hundetraining in Illmitz"
          fill
          className="object-cover absolute z-0 brightness-75"
          priority
        />
        <div className="relative z-20 text-center p-6 md:p-8 bg-black/20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Mobiles Hundetraining in <span className="text-yellow-400">Illmitz</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause in Illmitz und Umgebung.
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/kontakt?service=mobiles-training-illmitz">Jetzt mobiles Training in Illmitz anfragen</Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Du kommst aus Illmitz und suchst individuelles Hundetraining?</h2>
          <p className="text-lg text-gray-700">
            Perfekt! Unser mobiles Hundetraining kommt direkt zu dir nach Illmitz. Wir unterstützen dich dabei, eine harmonische Beziehung zu deinem Hund aufzubauen und alltagsnahe Herausforderungen zu meistern. Trainiere ganz entspannt in deiner gewohnten Umgebung.
          </p>
        </div>
      </section>
      
        {/* Details Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Dein Vorteil: Training im Alltag in Illmitz</h3>
                        <p className="text-lg mt-2">Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause in Illmitz oder auf euren gewohnten Spazierrunden. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Für wen ist mobiles Training geeignet?</h3>
                        <p className="text-lg mt-2">Mobiles Hundetraining eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.</p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/mobiles-hundetraining-zuhause.webp" 
                        alt="Hund und Besitzerin trainieren zuhause in Illmitz"
                        width={600}
                        height={600}
                        className="rounded-lg shadow-xl object-cover aspect-square"
                    />
                </div>
            </div>
          </div>
        </section>

      {/* Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold mb-4">Die 5 Vorteile des mobilen Hundetrainings in Illmitz</h2>
             <p className="text-lg text-gray-700">Flexibel, individuell und effektiv – entdecke, warum sich das Training bei dir zuhause lohnt!</p>
           </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileTrainingPillars.map((pillar) => (
              <Card key={pillar.title} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">{pillar.icon}{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
             <div className="md:col-span-2 lg:col-span-3 mt-8 text-center">
                <Button asChild size="lg" variant="outline" className="border-yellow-500 border-2 text-black hover:bg-yellow-50 hover:text-black">
                     <Link href="/mobiles-hundetraining">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Zurück zur Übersicht
                     </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="bg-slate-50 py-20">
        <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="w-full md:w-1/3">
                <Image
                    src="https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png"
                    alt="Jessica Pusch - Hundeschule Willenskraft"
                    width={300}
                    height={300}
                    className="rounded-full mx-auto object-cover aspect-square"
                />
            </div>
           <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Interesse am mobilen Training in Illmitz?</h2>
                <p className="text-xl mb-6">Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund.</p>
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    <Link href="/kontakt?service=mobiles-training-illmitz">Jetzt anfragen</Link>
                </Button>
                <div className="mt-6">
                    <p className="font-semibold">Oder kontaktiere mich direkt:</p>
                    <p className="text-lg text-gray-700 mt-2">
                        Jessica Pusch: <a href="tel:+436643903673" className="hover:text-yellow-500">+43 664 3903673</a>
                    </p>
                </div>
            </div>
        </div>
      </section>
    <WillenskraftSection />
    </div>
  );
}
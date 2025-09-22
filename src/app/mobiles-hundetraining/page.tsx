import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Star, Users, Zap, Heart, Gift, ChevronDown, MapPin } from 'lucide-react';
import WillenskraftSection from '@/components/WillenskraftSection';
import * as Accordion from '@radix-ui/react-accordion';

const mobileTrainingPillars = [
    { icon: <Heart className="text-yellow-500" />, title: "Individuelles Training", description: "Wir gehen gezielt auf deine Wünsche und die Bedürfnisse deines Hundes ein – für maximale Erfolge." },
    { icon: <Zap className="text-yellow-500" />, title: "Training in gewohnter Umgebung", description: "Dein Hund lernt dort, wo das Gelernte am Ende sitzen muss: in seinem Alltag, bei dir zuhause." },
    { icon: <Users className="text-yellow-500" />, title: "Flexible Terminvereinbarung", description: "Kein Stress, keine Anfahrt. Wir richten uns nach deinem Zeitplan und kommen zu dir." },
    { icon: <CheckCircle2 className="text-yellow-500" />, title: "Alltagsnahe Probleme lösen", description: "Ob Leinenführigkeit, Rückruf oder Begegnungen – wir arbeiten an konkreten Herausforderungen." },
    { icon: <Star className="text-yellow-500" />, title: "Stärkung der Bindung", description: "Durch das gemeinsame Training in vertrauter Atmosphäre wird die Beziehung zwischen dir und deinem Hund gefestigt." },
]

export default function MobileHundetrainingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/mobiles-hundetraining-neusiedl.webp" // Platzhalter-Bild
          alt="Mobiles Hundetraining in Neusiedl am See"
          fill
          className="object-cover absolute z-0 brightness-75"
          priority
        />
        <div className="relative z-20 text-center p-6 md:p-8 bg-black/20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Mobiles Hundetraining in <span className="text-yellow-400">Neusiedl am See</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Ganzheitliches & gewaltfreies Hundetraining – flexibel bei dir zuhause oder an deinem Wunschort.
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/kontakt?service=mobiles-training">Jetzt mobiles Training anfragen</Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Du wünschst dir individuelles Hundetraining, das sich nach dir richtet?</h2>
          <p className="text-lg text-gray-700">
            Du möchtest an spezifischen Themen arbeiten, hast einen vollen Terminkalender oder dein Hund fühlt sich in einer Gruppe nicht wohl? Dann ist unser mobiles Hundetraining in Neusiedl am See und Umgebung die perfekte Lösung. Wir kommen zu dir nach Hause und gestalten das Training ganz nach deinen Bedürfnissen.
          </p>
        </div>
      </section>
      
        {/* Details Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Dein Vorteil: Training im Alltag</h3>
                        <p className="text-lg mt-2">Das Training findet dort statt, wo Probleme entstehen: in deinem Zuhause oder auf euren gewohnten Spazierrunden. So lernt dein Hund, das gewünschte Verhalten direkt im Alltag umzusetzen. Wir arbeiten gemeinsam an Leinenführigkeit, entspannten Hundebegegnungen, einem sicheren Rückruf und vielem mehr.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Für wen ist mobiles Training geeignet?</h3>
                        <p className="text-lg mt-2">Mobiles Hundetraining eignet sich für Hunde jeden Alters – vom Welpen bis zum Senior. Es ist ideal für die ersten Schritte mit einem neuen Familienmitglied, zur Bearbeitung von Verhaltensauffälligkeiten oder einfach, um die Grundlagen in einer stressfreien 1:1-Betreuung zu festigen.</p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/mobiles-hundetraining-zuhause.webp" // Platzhalter-Bild
                        alt="Hund und Besitzerin trainieren zuhause"
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
             <h2 className="text-3xl font-bold mb-4">Die 5 Vorteile des mobilen Hundetrainings</h2>
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
             <Card className="bg-yellow-400 md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                    <Gift className="w-12 h-12 text-white mb-2" />
                    <CardTitle className="text-2xl font-bold text-black">Dein Startpaket</CardTitle>
                    <CardDescription className="text-gray-800 font-semibold">Für den perfekten Einstieg</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <p className="font-bold text-xl text-black">Mobile Erstberatung (90 Min.)</p>
                    <p className="text-5xl font-extrabold my-3 text-white drop-shadow-md">nur 95€</p>
                    <p className="text-black mb-6">Wir analysieren die Situation, besprechen deine Ziele und erstellen einen individuellen Trainingsplan.</p>
                    <Button asChild className="bg-black hover:bg-gray-800 text-yellow-400 font-bold shadow-md">
                        <Link href="/kontakt?service=erstberatung-mobil">Jetzt Erstberatung buchen</Link>
                    </Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Auch in deiner Nähe</h2>
            <p className="text-lg text-gray-700">Wir bieten unser mobiles Hundetraining nicht nur in Neusiedl am See, sondern auch in vielen umliegenden Orten an.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {['Gols', 'Frauenkirchen', 'Parndorf', 'Weiden am See', 'Illmitz', 'Andau'].map(ort => (
              <Link key={ort} href={`/mobiles-hundetraining/${ort.toLowerCase().replace(/ /g, '-')}`} legacyBehavior>
                <a className="bg-white p-4 rounded-lg shadow-md hover:bg-yellow-100 transition-colors flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">{ort}</span>
                </a>
              </Link>
            ))}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center gap-2 font-semibold">
                ... und viele mehr!
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
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
                <h2 className="text-3xl font-bold mb-4">Interesse am mobilen Training?</h2>
                <p className="text-xl mb-6">Kontaktiere mich für ein unverbindliches Gespräch und wir finden die beste Lösung für dich und deinen Hund.</p>
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    <Link href="/kontakt?service=mobiles-training">Jetzt anfragen</Link>
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

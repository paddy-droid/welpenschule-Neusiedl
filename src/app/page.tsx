import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Star, Users, Zap, Heart, Gift } from 'lucide-react';
import Reviews from '@/components/Reviews';
import WillenskraftSection from '@/components/WillenskraftSection';

const willenskraftPillars = [
    { icon: <Heart className="text-yellow-500" />, title: "Grundbedürfnisse", description: "Futter, Schlaf & Sicherheit: Wir zeigen dir, wie du die Basis für Gesundheit und Wohlbefinden deines Welpen sicherstellst." },
    { icon: <Zap className="text-yellow-500" />, title: "Kommunikation", description: "Körpersprache, Mimik und Stimme verstehen: Lerne die Sprache deines Welpen und baue Vertrauen auf." },
    { icon: <Users className="text-yellow-500" />, title: "Sozialisierung", description: "Sicher im Umgang mit Artgenossen und Menschen: Wichtige Erlebnisse in der Prägungsphase für einen souveränen Hund." },
    { icon: <CheckCircle2 className="text-yellow-500" />, title: "Positiver Signalaufbau", description: "Ohne Zwang & Gewalt: Sitz, Platz & Bleib mit Methoden der positiven Verstärkung nachhaltig erlernen." },
    { icon: <Star className="text-yellow-500" />, title: "Spiel & Bindung", description: "Kleine Gruppen, großer Spaß: Gemeinsame Spieleinheiten und Freilauf fördern Bindung und Sozialkompetenz." },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image
          src="/Welpenschule Neusiedl.webp"
          alt="Glücklicher Welpe auf einer Wiese in Neusiedl am See"
          fill
          className="object-cover absolute z-0 brightness-75"
          priority
        />
        <div className="relative z-20 text-center p-6 md:p-8 bg-black/20 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Welpenschule Neusiedl am See mit <span className="text-yellow-400">Willenskraft</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Dein ganzheitlicher und gewaltfreier Weg zum Dream-Team. Für Welpen bis 5 Monate im Bezirk Bruck an der Leitha & Nordburgenland.
          </p>
          <Button asChild size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/kontakt">Melde dich und deinen Welpen an</Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ist gerade ein Welpe bei dir eingezogen?</h2>
          <p className="text-lg text-gray-700">
            Du hast sicher viele Fragen zur Erziehung, Sozialisierung und Körpersprache. Du möchtest deinen Welpen optimal auf seinen zukünftigen Alltag vorbereiten und die richtigen Spielgefährten finden? Dann bist du in der Welpenschule mit Willenskraft genau richtig! Wir unterstützen dich dabei, eine harmonische Beziehung zu deinem neuen Familienmitglied aufzubauen.
          </p>
        </div>
      </section>
      
        {/* Details Section */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Die Sprache deines Hundes verstehen</h3>
                        <p className="text-lg mt-2">Hunde kommunizieren anders als wir Menschen. In unserer Welpenschule lernst du, die Körpersprache, Mimik und Lautäußerungen deines Vierbeiners richtig zu deuten. Gleichzeitig zeigen wir dir, wie du mit deinem Hund so kommunizierst, dass er dich versteht. Das ist die Basis für tiefes Vertrauen und eine unzertrennliche Bindung.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Sozialisierung von Anfang an</h3>
                        <p className="text-lg mt-2">Im Rahmen unserer Kurse trifft dein Welpe auf andere Hunde und Menschen in einer sicheren und kontrollierten Umgebung. Diese Begegnungen sind entscheidend, damit dein Hund lernt, sich in diversen Umgebungen und mit unterschiedlichen Reizen souverän und entspannt zu verhalten.</p>
                    </div>
                </div>
                <div>
                    <Image
                        src="/Welpenschule Welpenkurs Neusiedl.webp"
                        alt="Welpen lernen Kommunikation in der Hundeschule"
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
             <h2 className="text-3xl font-bold mb-4">Die 5 Bausteine der Willenskraft Welpenschule</h2>
             <p className="text-lg text-gray-700">Ganzheitlich, gewaltfrei und individuell – entdecke die Säulen für einen erfolgreichen Start mit deinem Welpen!</p>
           </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {willenskraftPillars.map((pillar) => (
              <Card key={pillar.title} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">{pillar.icon}{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
             <Card className="bg-yellow-400 md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                    <Gift className="w-12 h-12 text-white mb-2" />
                    <CardTitle className="text-2xl font-bold text-black">Dein Sonderangebot</CardTitle>
                    <CardDescription className="text-gray-800 font-semibold">Exklusiv für Welpeneltern</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <p className="font-bold text-xl text-black">Eine private Einzelstunde</p>
                    <p className="text-5xl font-extrabold my-3 text-white drop-shadow-md">nur 55€</p>
                    <p className="text-black mb-6">Perfekt, um spezifische Fragen zu klären und deinem Welpen den besten Start zu ermöglichen.</p>
                    <Button asChild className="bg-black hover:bg-gray-800 text-yellow-400 font-bold shadow-md">
                        <Link href="/kontakt?angebot=einzelstunde">Jetzt Angebot sichern</Link>
                    </Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl font-bold mb-4">Training mit Freude und Verstand</h2>
                <p className="text-lg text-gray-700">Wir setzen auf moderne und wissenschaftlich fundierte Methoden, die auf positiver Verstärkung basieren. Dein Welpe lernt mit Spaß und ohne Zwang.</p>
             </div>
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <Image
                        src="https://www.willenskraft.co.at/wp-content/uploads/2024/05/Hundeschule-Bad-Deutsch-Altenburg-Welpentraining-845x684.webp"
                        alt="Training mit positiver Verstärkung"
                        width={600}
                        height={600}
                        className="rounded-lg shadow-xl object-cover aspect-square"
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-bold">Positive Verstärkung & der richtige Umgang</h3>
                        <p className="text-lg mt-2">Wir konditionieren deinen Welpen auf die ersten wichtigen Signale wie „Sitz“, „Platz“ und „Bleib“. Zudem sind der richtige Umgang mit Leine und Schleppleine sowie der Aufbau eines zuverlässigen Rückrufs zentrale Bestandteile unseres Trainings. Wir zeigen dir, wie du deinen Hund auf eine Weise rufst, dass er gerne zu dir zurückkommt.</p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold">Kleine Gruppen, große Wirkung</h3>
                        <p className="text-lg mt-2">Um eine qualitativ hochwertige Betreuung zu gewährleisten, ist die Anzahl auf maximal <b>vier Mensch-Hund-Teams</b> beschränkt. Wir stellen die Kleingruppen sorgfältig nach Rasse, Größe und Temperament zusammen, damit dein Welpe die besten Spiel- und Lernpartner hat. So erhält jedes Team die nötige Aufmerksamkeit, während wir an sorgfältig ausgewählten Standorten trainieren.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Medical Training Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Vorbereitung auf den Tierarzt: Medical Training</h2>
            <p className="text-lg text-gray-700">
              Ein entspannter Tierarztbesuch ist kein Zufall. Im Rahmen unserer Welpenschule bieten wir eine spielerische Einführung in das Medical Training, um deinen Welpen positiv auf Untersuchungen vorzubereiten. Das Ziel ist es, von Anfang an Vertrauen aufzubauen und Stress für alle Beteiligten zu reduzieren.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Einführung ins Medical Training: Schritt für Schritt</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-slate-100 font-bold uppercase text-sm text-gray-600 border-b">Übung</th>
                    <th className="py-3 px-4 bg-slate-100 font-bold uppercase text-sm text-gray-600 border-b">Ziel</th>
                    <th className="py-3 px-4 bg-slate-100 font-bold uppercase text-sm text-gray-600 border-b hidden md:table-cell">Wichtige Hinweise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-4 border-b">Körper-Check</td>
                    <td className="py-4 px-4 border-b">Der Welpe lernt, sich überall entspannt anfassen zu lassen.</td>
                    <td className="py-4 px-4 border-b hidden md:table-cell">Kurze Einheiten, viel Lob und Leckerlis.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-4 border-b">Ohren & Augen inspizieren</td>
                    <td className="py-4 px-4 border-b">Vorbereitung auf Untersuchungen und die Gabe von Medikamenten.</td>
                    <td className="py-4 px-4 border-b hidden md:table-cell">Sanfte Berührungen, niemals den Hund zwingen.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-4 border-b">Pfotenpflege</td>
                    <td className="py-4 px-4 border-b">Krallen schneiden und Pfoten kontrollieren ohne Stress.</td>
                    <td className="py-4 px-4 border-b hidden md:table-cell">Paw-Target aufbauen und positiv verknüpfen.</td>
                  </tr>
                   <tr className="hover:bg-slate-50">
                    <td className="py-4 px-4 border-b">Auf die Waage</td>
                    <td className="py-4 px-4 border-b">Der Hund lernt, ruhig auf der Waage zu stehen.</td>
                    <td className="py-4 px-4 border-b hidden md:table-cell">Mit einem &quot;Plattform&quot;-Signal trainieren.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen (FAQ)</h2>
            <p className="text-lg text-gray-700">Die wichtigsten Antworten rund um den Start in der Welpenschule Neusiedl am See.</p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Ab wann ist die Welpenschule sinnvoll?</h3>
              <p className="text-lg text-gray-700">Der ideale Zeitpunkt für den Start in der Welpenschule ist so früh wie möglich, typischerweise ab der 8. Lebenswoche, kurz nachdem der Welpe bei Ihnen eingezogen ist. Die sensible Phase der Sozialisierung endet etwa mit der 16. Woche. In dieser Zeit ist es entscheidend, positive Erfahrungen mit Artgenossen, Menschen und verschiedenen Umweltreizen zu sammeln. Ein früher Start legt den Grundstein für einen gut sozialisierten und selbstsicheren Hund. Voraussetzung ist die erste Grundimmunisierung, damit Ihr Welpe geschützt ist.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Was kostet die Welpenschule?</h3>
              <p className="text-lg text-gray-700">Unser Welpen-Gruppenkurs umfasst 6 Trainingseinheiten zu je einer Stunde und kostet 195€. Dieser Preis beinhaltet nicht nur das praktische Training, sondern auch wertvolle theoretische Grundlagen, individuelle Betreuung in Kleingruppen und die Möglichkeit, jederzeit Fragen zu stellen. Wir legen Wert auf Transparenz und Qualität. Für spezielle Bedürfnisse oder eine intensivere Betreuung bieten wir zudem exklusive Einzelstunden für Welpeneltern zu einem Sonderpreis von 55€ an, um gezielt auf Ihre Themen einzugehen.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Wie lange dauert ein Welpenkurs?</h3>
              <p className="text-lg text-gray-700">Ein vollständiger Welpenkurs bei uns erstreckt sich über 6 Wochen, mit einer wöchentlichen Trainingseinheit von 60 Minuten. Diese Dauer ist ideal, um die grundlegenden Signale wie „Sitz“ und „Komm“ aufzubauen, die Sozialkompetenz zu fördern und eine starke Bindung zu festigen, ohne den jungen Hund zu überfordern. Nach Abschluss des Kurses haben Sie das Rüstzeug, um die Erziehung selbstbewusst fortzusetzen oder an einem weiterführenden Junghundekurs teilzunehmen, um das Gelernte zu vertiefen und altersgerecht zu erweitern.</p>
            </div>
             <div>
              <h3 className="text-xl font-bold mb-2">Was lernt mein Welpe in der Hundeschule?</h3>
              <p className="text-lg text-gray-700">In unserer Welpenschule lernt Ihr Hund weit mehr als nur Grundkommandos. Im Zentrum steht die Sozialisierung: das sichere und entspannte Umgehen mit anderen Hunden und Menschen. Wir üben erste wichtige Signale wie den Rückruf und das Gehen an der lockeren Leine mittels positiver Verstärkung. Zudem lernen Sie als Halter, die Körpersprache Ihres Welpen zu deuten und seine Bedürfnisse zu verstehen. Eine Einführung in das Medical Training bereitet Ihren Vierbeiner außerdem spielerisch auf Tierarztbesuche vor und fördert das Vertrauen.</p>
            </div>
          </div>
        </div>
      </section>
      
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Ab wann ist die Welpenschule sinnvoll?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Der ideale Zeitpunkt für den Start in der Welpenschule ist so früh wie möglich, typischerweise ab der 8. Lebenswoche, kurz nachdem der Welpe bei Ihnen eingezogen ist. Die sensible Phase der Sozialisierung endet etwa mit der 16. Woche. In dieser Zeit ist es entscheidend, positive Erfahrungen mit Artgenossen, Menschen und verschiedenen Umweltreizen zu sammeln. Ein früher Start legt den Grundstein für einen gut sozialisierten und selbstsicheren Hund. Voraussetzung ist die erste Grundimmunisierung."
                }
              },
              {
                "@type": "Question",
                "name": "Was kostet die Welpenschule?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unser Welpen-Gruppenkurs umfasst 6 Trainingseinheiten zu je einer Stunde und kostet 195€. Dieser Preis beinhaltet nicht nur das praktische Training, sondern auch wertvolle theoretische Grundlagen, individuelle Betreuung in Kleingruppen und die Möglichkeit, jederzeit Fragen zu stellen. Für spezielle Bedürfnisse bieten wir zudem exklusive Einzelstunden für Welpeneltern zu einem Sonderpreis von 55€ an."
                }
              },
              {
                "@type": "Question",
                "name": "Wie lange dauert ein Welpenkurs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ein vollständiger Welpenkurs bei uns erstreckt sich über 6 Wochen, mit einer wöchentlichen Trainingseinheit von 60 Minuten. Diese Dauer ist ideal, um die grundlegenden Signale aufzubauen, die Sozialkompetenz zu fördern und eine starke Bindung zu festigen, ohne den jungen Hund zu überfordern. Nach dem Kurs können Sie an einem weiterführenden Junghundekurs teilnehmen."
                }
              },
              {
                "@type": "Question",
                "name": "Was lernt mein Welpe in der Hundeschule?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In unserer Welpenschule steht die Sozialisierung im Zentrum: das sichere Umgehen mit anderen Hunden und Menschen. Wir üben erste wichtige Signale wie den Rückruf und Leinenführigkeit mittels positiver Verstärkung. Zudem lernen Sie als Halter, die Körpersprache Ihres Welpen zu deuten. Eine Einführung in das Medical Training bereitet Ihren Vierbeiner außerdem spielerisch auf Tierarztbesuche vor."
                }
              }
            ]
          })
        }}
      />
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Was unsere Kunden sagen</h2>
            <p className="text-lg text-gray-700">Echte Erfahrungen von glücklichen Mensch-Hund-Teams.</p>
          </div>
          <Reviews />
        </div>
      </section>
      
      {/* Calendar and Pricing Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Kurstermine & Details</h2>
                <p className="text-lg text-gray-700">Finde den passenden Termin für deinen Welpen.</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center mb-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Dein Welpen-Gruppenkurs</h3>
                <p className="text-xl font-semibold text-gray-800">6 Einheiten á 1 Std. – 195€</p>
                <p className="text-md text-gray-600 mt-2">In jedem Monat startet mindestens ein neuer Kurs.</p>
            </div>
            <div className="w-full max-w-4xl mx-auto">
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=ae98e030dbc6780ab9fc5e7b8a27a55122d8b594d1e42eba54d5a154aa9e7f5e%40group.calendar.google.com&ctz=Europe%2FVienna" 
                    style={{border: 0, width: '100%', height: '600px'}} 
                    className="rounded-lg shadow-xl"
                    frameBorder="0" 
                    scrolling="no"
                ></iframe>
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
                <h2 className="text-3xl font-bold mb-4">Bereit für den Start?</h2>
                <p className="text-xl mb-6">Melde dich und deinen Welpen jetzt für ein erstes Kennenlernen in der <span className="font-bold">Welpenschule Neusiedl am See</span> an.</p>
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                    <Link href="/kontakt">Jetzt zur Welpenschule anmelden</Link>
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

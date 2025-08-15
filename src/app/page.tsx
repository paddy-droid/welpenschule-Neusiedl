import HeroBlock from '@/components/blocks/Hero';

export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <div className="container mx-auto px-4 py-8">
              {/* Medical Training Section */}
              <section className="py-12 my-4">
                <h2 className="text-3xl font-bold text-center mb-6">Medical Training</h2>
                <p className="text-lg text-center max-w-3xl mx-auto">
                  In unserem Medical Training geht es um die Basis und erste Einblicke, wie Sie Ihren Hund stressfrei an Untersuchungen und Behandlungen gewöhnen. Wir legen den Grundstein für entspannte Tierarztbesuche und die alltägliche Pflege.
                </p>
              </section>
      
              {/* Small Groups Section */}
              <section className="py-12 my-4 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-6">Lernen in kleinen Gruppen</h2>
                <p className="text-lg text-center max-w-3xl mx-auto">
                  Wir legen großen Wert auf kleine und harmonische Lerngruppen. Bei der Zusammenstellung achten wir darauf, dass Größe und Temperament der Welpen zueinander passen, um eine optimale und stressfreie Lernatmosphäre für jeden einzelnen Hund zu schaffen.
                </p>
              </section>
      
              {/* Course Content Section */}
              <section className="py-12 my-4">
                <h2 className="text-3xl font-bold text-center mb-10">Unsere Kursinhalte</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-xl mb-2">Grundlagen</h3>
                    <ul className="list-disc list-inside">
                      <li>Grundbedürfnisse der Hunde</li>
                      <li>Kommunikation & Sprache</li>
                      <li>Sozialisierung</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-xl mb-2">Training & Spiel</h3>
                    <ul className="list-disc list-inside">
                      <li>Freilauf, Spiel & Spaß</li>
                      <li>Erste Signale: Sitz, Platz, Bleib</li>
                      <li>Suchspiele – Nasenspaß</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-xl mb-2">Alltag & Management</h3>
                    <ul className="list-disc list-inside">
                      <li>Umgang mit der Leine</li>
                      <li>Positives Unterbrechungssignal</li>
                      <li>Rückruf Aufbau</li>
                    </ul>
                  </div>
                   <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-xl mb-2">Umweltgewöhnung</h3>
                    <ul className="list-disc list-inside">
                      <li>Kennenlernen diverser Untergründe</li>
                      <li>Vorstellung diverser Objekte</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const willenskraftImages = [
    "https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09462b-845x684.jpg",
    "https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09470-845x684.jpg",
    "https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09434-845x684.jpg",
    "https://www.willenskraft.co.at/wp-content/uploads/2020/06/DSC09452-845x684.jpg",
];

export default function WillenskraftSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">Veranstalter: Die Hundeschule Willenskraft & Akademie</h2>
                    <p className="text-lg text-gray-700">
                        Willkommen bei der Hundeschule Willenskraft – Dein ganzheitlicher Wegbegleiter für ein harmonisches Leben mit Hund.
                        Wir stehen für tierschutzkonformes & modernes Hundetraining – mobil bei dir vor Ort, online im eigenen Tempo oder als zertifizierte Ausbildung für angehende Hundetrainer:innen.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {willenskraftImages.map((src, index) => (
                        <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={src}
                                alt={`Hundeschule Willenskraft Bild ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 mb-6">
                        Die Hundeschule Willenskraft & Akademie bietet ganzheitliches, bedürfnisorientiertes und tierschutzkonformes Hundetraining.
                        Seit über 10 Jahren bilden wir Hundetrainer aus.
                        Mit mobilen Trainings direkt bei dir zuhause, einer Online-Hundeschule mit Videos und Begleitung sowie einer zertifizierten Ausbildung zum Hundetrainer,
                        unterstützen wir Mensch-Hund-Teams dabei, eine faire, respektvolle und klare Beziehung aufzubauen.
                        Unsere Expertise umfasst Welpen, Junghunde, Tierschutzhunde, Medical Training, Begegnungstraining, Trennungsstress, Dummytraining und Alltagstraining.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                        <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                            <Link href="https://www.willenskraft.co.at/" target="_blank" rel="noopener noreferrer">
                                Zur Startseite der Hundeschule Willenskraft
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                            <Link href="https://www.willenskraft.co.at/welpenschule-bruck-leitha-wien/" target="_blank" rel="noopener noreferrer">
                                Zur Welpenschule Wien
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
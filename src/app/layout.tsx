import type { Metadata } from 'next';
import { Geist, Geist_Mono, Fraunces } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import NewsletterPopup from '@/components/NewsletterPopup';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  axes: ['SOFT', 'opsz'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Welpenschule Neusiedl am See – mobil | Willenskraft',
    template: '%s | Welpenschule Neusiedl am See',
  },
  description:
    'Mobile Welpenschule & Hundeschule für den Bezirk Neusiedl am See ✓ wir kommen zu dir nach Hause ✓ gewaltfrei ✓ Willenskraft. ☎ 0664 3903673',
  applicationName: 'Welpenschule Neusiedl am See',
  keywords: [
    'Welpenschule Neusiedl am See',
    'Hundeschule Neusiedl am See',
    'Hundetrainer Neusiedl am See',
    'Mobile Hundeschule Burgenland',
    'Welpentraining Neusiedl',
    'Welpenkurs Burgenland',
    'Hundeerziehung Burgenland',
    'Mobiles Hundetraining Burgenland',
    'Hundetraining Seewinkel',
    'Hundeschule Gols',
    'Hundeschule Parndorf',
    'Hundeschule Frauenkirchen',
    'Hundeschule Podersdorf am See',
    'Hundeschule Kittsee',
    'Hundeschule Willenskraft',
    'gewaltfreies Hundetraining',
    'positive Verstärkung Hund',
    'Hundetraining Nationalpark Neusiedlersee',
  ],
  authors: [{ name: 'Hundeschule Willenskraft', url: 'https://www.willenskraft.co.at' }],
  creator: 'Hundeschule Willenskraft',
  publisher: 'Welpenschule Neusiedl am See',
  category: 'Tierausbildung',
  verification: {
    google: 'mTVtKjxMEuAx_IFqUIbR2NQSxQgdoYfdhcNjQ6pHX4U',
  },
  alternates: {
    canonical: 'https://welpenschule-neusiedl.at',
    languages: {
      'de-AT': 'https://welpenschule-neusiedl.at',
    },
  },
  openGraph: {
    title: 'Welpenschule Neusiedl am See | Mobile Hundeschule Willenskraft – Wir kommen zu dir',
    description:
      'Mobile Welpenschule & Hundeschule am Neusiedlersee: Training bei dir zuhause + Welpenkurse an Treffpunkten in der Region. Max. 4 Teams, gewaltfrei. ☎ +43 664 3903673',
    url: 'https://welpenschule-neusiedl.at',
    siteName: 'Welpenschule Neusiedl am See',
    images: [
      {
        url: 'https://www.willenskraft.co.at/wp-content/uploads/2024/07/Welpenschule-Neusiedl-am-See.webp',
        width: 1200,
        height: 630,
        alt: 'Glücklicher Welpe am Neusiedlersee – Welpenschule Willenskraft',
      },
    ],
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welpenschule Neusiedl am See | Mobile Hundeschule Willenskraft',
    description:
      'Mobile Hundeschule am Neusiedlersee & im Seewinkel — wir kommen zu dir nach Hause. Welpenkurse ab 195€. Jetzt anmelden!',
    images: ['https://www.willenskraft.co.at/wp-content/uploads/2024/07/Welpenschule-Neusiedl-am-See.webp'],
  },
  metadataBase: new URL('https://welpenschule-neusiedl.at'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'AT-1',
    'geo.placename': 'Neusiedl am See',
    'geo.position': '47.9479;16.8404',
    ICBM: '47.9479, 16.8404',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'PetTrainer'],
      '@id': 'https://welpenschule-neusiedl.at/#business',
      name: 'Welpenschule Neusiedl am See – Hundeschule Willenskraft',
      alternateName: ['Hundeschule Willenskraft Neusiedl', 'Welpentraining Neusiedlersee'],
      url: 'https://welpenschule-neusiedl.at',
      telephone: '+43-664-3903673',
      email: 'bruck_leitha@willenskraft.co.at',
      image: 'https://www.willenskraft.co.at/wp-content/uploads/2024/07/Welpenschule-Neusiedl-am-See.webp',
      logo: 'https://www.willenskraft.co.at/wp-content/uploads/2018/06/Final.-Logo-Hundeschule-Willenskraft.-Gute-Hundeschule-Graz-Gleisdorf.png',
      description:
        'Mobile Welpenschule & Hundeschule für die Region Neusiedl am See: Wir kommen zum Training direkt zu dir nach Hause — im gesamten Bezirk Neusiedl am See und Seewinkel. Welpen-Gruppenkurse finden an sorgfältig ausgewählten Outdoor-Treffpunkten in der Region statt. Gewaltfreies & ganzheitliches Hundetraining mit positiver Verstärkung, Kleingruppen mit max. 4 Teams. Regionaler Standort der Hundeschule Willenskraft.',
      slogan: 'Deine mobile Hundeschule — wir kommen zu dir an den Neusiedlersee.',
      foundingDate: '2014',
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Überweisung, Bar',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Neusiedl am See',
        addressRegion: 'Burgenland',
        addressCountry: 'AT',
        postalCode: '7100',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 47.9479,
        longitude: 16.8404,
      },
      areaServed: [
        { '@type': 'City', name: 'Neusiedl am See' },
        { '@type': 'City', name: 'Gols' },
        { '@type': 'City', name: 'Frauenkirchen' },
        { '@type': 'City', name: 'Parndorf' },
        { '@type': 'City', name: 'Weiden am See' },
        { '@type': 'City', name: 'Illmitz' },
        { '@type': 'City', name: 'Andau' },
        { '@type': 'City', name: 'Podersdorf am See' },
        { '@type': 'City', name: 'Jois' },
        { '@type': 'City', name: 'Winden am See' },
        { '@type': 'City', name: 'Mönchhof' },
        { '@type': 'City', name: 'Halbturn' },
        { '@type': 'City', name: 'Apetlon' },
        { '@type': 'City', name: 'Pamhagen' },
        { '@type': 'City', name: 'St. Andrä am Zicksee' },
        { '@type': 'City', name: 'Kittsee' },
        { '@type': 'City', name: 'Bruckneudorf' },
        { '@type': 'AdministrativeArea', name: 'Bezirk Neusiedl am See' },
        { '@type': 'AdministrativeArea', name: 'Seewinkel' },
        { '@type': 'AdministrativeArea', name: 'Burgenland Nord' },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 47.9479, longitude: 16.8404 },
        geoRadius: '35000',
      },
      sameAs: [
        'https://www.willenskraft.co.at',
        'https://www.youtube.com/@hundeschulewillenskraft',
        'https://www.instagram.com/hundeschule_willenskraft/',
        'https://www.facebook.com/hundeschule.willenskraft',
      ],
      parentOrganization: {
        '@type': 'Organization',
        name: 'Hundeschule Willenskraft & Akademie',
        url: 'https://www.willenskraft.co.at',
      },
      employee: { '@id': 'https://welpenschule-neusiedl.at/#trainer' },
      knowsAbout: [
        'Welpentraining',
        'Hundeerziehung',
        'Positive Verstärkung',
        'Medical Training Hund',
        'Sozialisierung Welpen',
        'Leinenführigkeit',
        'Rückruftraining',
        'Mobiles Hundetraining',
        'Verhaltenstherapie Hund',
        'Pannonisches Hundetraining',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Hundetraining Angebote Neusiedl',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Mobile Erstberatung — bei dir zuhause',
            description: '90-minütige Erstberatung direkt bei dir zuhause — im gesamten Bezirk Neusiedl am See und Seewinkel. Analyse, Zielbesprechung und individueller Trainingsplan. Anfahrt kostenlos.',
            price: '95',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-neusiedl.at/kontakt?service=erstberatung-mobil',
          },
          {
            '@type': 'Offer',
            name: 'Mobiles Einzeltraining',
            description: 'Individuelle Trainingseinheit bei dir zuhause oder auf eurer Spazierrunde — für Hunde jeden Alters, vom Welpen bis zum Senior.',
            price: '55',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-neusiedl.at/kontakt?angebot=einzelstunde',
          },
          {
            '@type': 'Offer',
            name: 'Welpen-Gruppenkurs Region Neusiedl am See',
            description:
              '6 Trainingseinheiten zu je einer Stunde in Kleingruppen (max. 4 Teams) an sorgfältig ausgewählten Outdoor-Treffpunkten in der Region Neusiedl am See. Positive Verstärkung, Sozialisierung & Grundsignale.',
            price: '195',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-neusiedl.at/#kurse',
          },
        ],
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://welpenschule-neusiedl.at/#trainer',
      name: 'Jessica Pusch',
      honorificPrefix: 'Ing.',
      alternateName: 'Jessy',
      jobTitle: 'Hundetrainerin — Hundeschule Willenskraft, Region Neusiedl am See & Nordburgenland',
      description:
        'Ing. Jessica Pusch — von ihren Kund:innen Jessy genannt — ist mobile Hundetrainerin der Hundeschule Willenskraft und betreut den gesamten Bezirk Neusiedl am See. Ausgebildete Biochemikerin (Ing.), zertifiziert über die Willenskraft Akademie, dort auch als Dozentin und Prüferin tätig. Sie trainiert gewaltfrei, wissenschaftlich fundiert und bedürfnisorientiert mit positiver Verstärkung und kommt zum Training direkt zu den Mensch-Hund-Teams nach Hause.',
      worksFor: { '@id': 'https://welpenschule-neusiedl.at/#business' },
      url: 'https://welpenschule-neusiedl.at/kontakt',
      mainEntityOfPage: 'https://welpenschule-neusiedl.at/kontakt',
      telephone: '+43-664-3903673',
      email: 'bruck_leitha@willenskraft.co.at',
      image: 'https://www.willenskraft.co.at/wp-content/uploads/2025/06/Jessica-Pusch-Hundeschule-Wien-Niederoesterreich.webp',
      areaServed: { '@type': 'AdministrativeArea', name: 'Bezirk Neusiedl am See, Burgenland' },
      knowsAbout: ['Welpentraining', 'Positive Verstärkung', 'Medical Training', 'Junghundetraining', 'Verhaltensberatung', 'Mobiles Hundetraining', 'Sachkundenachweis', 'Biochemie'],
      alumniOf: { '@type': 'EducationalOrganization', name: 'HBLVA für chemische Industrie Wien' },
      memberOf: { '@type': 'Organization', name: 'Willenskraft Akademie', url: 'https://www.willenskraft.co.at' },
      sameAs: [
        'https://www.willenskraft.co.at/bruck-leitha/',
        'https://www.instagram.com/hundeschule_willenskraft/',
        'https://www.facebook.com/hundeschule.willenskraft',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://welpenschule-neusiedl.at/#website',
      url: 'https://welpenschule-neusiedl.at',
      name: 'Welpenschule Neusiedl am See',
      description: 'Mobile Welpenschule & Hundeschule — gewaltfreies Hundetraining bei dir zuhause, am Neusiedlersee und im Seewinkel',
      publisher: { '@id': 'https://welpenschule-neusiedl.at/#business' },
      inLanguage: 'de-AT',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://welpenschule-neusiedl.at/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f5e6b8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1c1916" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://www.willenskraft.co.at" />
        <link rel="dns-prefetch" href="https://www.willenskraft.co.at" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-ink-950 focus:text-white"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main" className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <NewsletterPopup />
      </body>
    </html>
  );
}

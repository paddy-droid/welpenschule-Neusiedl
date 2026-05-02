import type { Metadata } from 'next';
import { Geist, Geist_Mono, Fraunces } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
    default: 'Welpenschule Neusiedl am See – Hundeschule Willenskraft | Gewaltfrei & Pannonisch',
    template: '%s | Welpenschule Neusiedl am See',
  },
  description:
    'Welpenschule Neusiedl am See ✓ Gewaltfrei & ganzheitlich ✓ Pannonisches Trainingsumfeld am Neusiedlersee ✓ 6 Einheiten ab 195 € ✓ Welpen bis 5 Monate. Tel: +43 664 3903673',
  applicationName: 'Welpenschule Neusiedl am See',
  keywords: [
    'Welpenschule Neusiedl am See',
    'Hundeschule Neusiedl',
    'Welpentraining Neusiedl',
    'Welpenkurs Burgenland',
    'Hundeerziehung Burgenland',
    'Mobiles Hundetraining Burgenland',
    'Hundetraining Seewinkel',
    'Welpenschule Gols',
    'Hundetraining Frauenkirchen',
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
    title: 'Welpenschule Neusiedl am See | Hundeschule Willenskraft – Gewaltfrei & Pannonisch',
    description:
      'Professionelles Welpentraining am Neusiedlersee. 6 Einheiten, max. 4 Teams, positive Verstärkung. Jetzt Platz sichern! ☎ +43 664 3903673',
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
    title: 'Welpenschule Neusiedl am See | Hundeschule Willenskraft',
    description:
      'Gewaltfreies Welpentraining am Neusiedlersee & im Seewinkel. 6 Einheiten ab 195€. Jetzt anmelden!',
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
        'Professionelle Welpenschule am Neusiedlersee. Gewaltfreies & ganzheitliches Hundetraining mit positiver Verstärkung. Kleingruppen mit max. 4 Teams. Welpen bis 5 Monate. Mobiles Training im Seewinkel und in der Pannonischen Tiefebene.',
      slogan: 'Gemeinsam wachsen — am Ufer des Neusiedlersees.',
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
        { '@type': 'AdministrativeArea', name: 'Seewinkel' },
        { '@type': 'AdministrativeArea', name: 'Burgenland Nord' },
      ],
      hasMap: 'https://www.google.com/maps/search/Hundeschule+Willenskraft+Neusiedl+am+See',
      sameAs: [
        'https://www.willenskraft.co.at',
        'https://www.instagram.com/hundeschule_willenskraft/',
        'https://www.facebook.com/hundeschule.willenskraft',
      ],
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
            name: 'Welpen-Gruppenkurs Neusiedl am See',
            description:
              '6 Trainingseinheiten zu je einer Stunde in Kleingruppen (max. 4 Teams). Positive Verstärkung, Sozialisierung & Grundkommandos am Neusiedlersee.',
            price: '195',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-neusiedl.at/#kurse',
          },
          {
            '@type': 'Offer',
            name: 'Private Einzelstunde',
            description: 'Individuelle Trainingseinheit für spezifische Fragen und Bedürfnisse deines Welpen.',
            price: '55',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-neusiedl.at/kontakt?angebot=einzelstunde',
          },
          {
            '@type': 'Offer',
            name: 'Mobile Erstberatung',
            description: '90-minütige Erstberatung bei dir zuhause im Seewinkel oder in der Region Neusiedl. Analyse, Zielbesprechung und individueller Trainingsplan.',
            price: '95',
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            url: 'https://welpenschule-neusiedl.at/kontakt?service=erstberatung-mobil',
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
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
      jobTitle: 'Hundetrainerin',
      worksFor: { '@id': 'https://welpenschule-neusiedl.at/#business' },
      telephone: '+43-664-3903673',
      email: 'bruck_leitha@willenskraft.co.at',
      image: 'https://www.willenskraft.co.at/wp-content/uploads/2020/02/Hundeschule-Willenskraft-ButtonFINAL.png',
      knowsAbout: ['Welpentraining', 'Positive Verstärkung', 'Medical Training', 'Verhaltensberatung'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://welpenschule-neusiedl.at/#website',
      url: 'https://welpenschule-neusiedl.at',
      name: 'Welpenschule Neusiedl am See',
      description: 'Gewaltfreies Welpentraining am Neusiedlersee und im Seewinkel',
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
      </body>
    </html>
  );
}

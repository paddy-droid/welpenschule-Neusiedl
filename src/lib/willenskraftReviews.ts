import { cache } from 'react';

/**
 * Live-Gesamtbewertung der Hundeschule Willenskraft über ALLE Standorte:
 * summiert die echten Google-Bewertungen mehrerer Place-IDs (Places API New)
 * und bildet den gewichteten Schnitt. Server-seitig, 24h gecacht.
 *
 * Gibt null zurück, wenn kein Key vorhanden ist oder keine belegbaren Daten
 * kommen — dann wird KEINE Zahl gerendert (keine erfundenen Werte).
 */

// Place-IDs + Google-Business-Links der Willenskraft-Standorte (echte Profile).
export const WK_PLACES: { id: string; name: string; url: string }[] = [
  { id: 'ChIJ483_dhIDb0cR8psI7GNmy0w', name: 'Akademie & Online (Graz/Bianca)', url: 'https://maps.google.com/?cid=5533629146502568946' },
  { id: 'ChIJ2SJV1uE1bkcRwQCYTRb8Noo', name: 'Graz & Umgebung (Martha)', url: 'https://maps.google.com/?cid=9959424798697717953' },
  { id: 'ChIJ-aN8F7T1bEcRaxFO48WYfqY', name: 'Bruck an der Leitha (Jessy)', url: 'https://maps.google.com/?cid=11997194433051103595' },
  { id: 'ChIJ39q85ANjbUcRlgajnVaM5IU', name: 'Donauregion (Tulln/Katrin)', url: 'https://maps.google.com/?cid=9647990605374228118' },
];

export const getWillenskraftAggregate = cache(
  async (): Promise<{ ratingValue: number; reviewCount: number; locations: number } | null> => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey || apiKey === 'DEIN_API_KEY_HIER') return null;

    let totalCount = 0;
    let weighted = 0;
    let locations = 0;

    await Promise.all(
      WK_PLACES.map(async ({ id }) => {
        try {
          const res = await fetch(
            `https://places.googleapis.com/v1/places/${id}?languageCode=de`,
            {
              headers: {
                'X-Goog-Api-Key': apiKey,
                'X-Goog-FieldMask': 'rating,userRatingCount',
              },
              next: { revalidate: 86400 },
            }
          );
          if (!res.ok) return;
          const p = await res.json();
          if (typeof p.rating === 'number' && typeof p.userRatingCount === 'number' && p.userRatingCount > 0) {
            totalCount += p.userRatingCount;
            weighted += p.rating * p.userRatingCount;
            locations += 1;
          }
        } catch {
          /* Standort überspringen */
        }
      })
    );

    if (totalCount < 1) return null;
    return {
      ratingValue: Math.round((weighted / totalCount) * 10) / 10,
      reviewCount: totalCount,
      locations,
    };
  }
);

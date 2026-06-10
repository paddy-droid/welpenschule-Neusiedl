import { NextResponse } from 'next/server';

// Google-Antwort 24h cachen — spart API-Kosten und beschleunigt die Seite
export const revalidate = 86400;

const PLACE_QUERY = 'Hundeschule Willenskraft Bruck an der Leitha';

interface NewPlacesReview {
  rating?: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
  relativePublishTimeDescription?: string;
}

interface NewPlacesResponse {
  places?: {
    id?: string;
    rating?: number;
    userRatingCount?: number;
    googleMapsUri?: string;
    reviews?: NewPlacesReview[];
  }[];
  error?: { code?: number; message?: string; status?: string };
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey || apiKey === 'DEIN_API_KEY_HIER') {
    return NextResponse.json({ error: 'Google API Key nicht konfiguriert.' }, { status: 500 });
  }

  try {
    // Places API (New): ein einziger Text-Search-Call liefert Place + Rating + Reviews
    const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask':
          'places.id,places.rating,places.userRatingCount,places.googleMapsUri,places.reviews',
      },
      body: JSON.stringify({ textQuery: PLACE_QUERY, languageCode: 'de' }),
      next: { revalidate: 86400 },
    });

    const data: NewPlacesResponse = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.error?.message || 'Fehler beim Abrufen der Google-Bewertungen.',
          details: data.error?.status,
        },
        { status: response.status }
      );
    }

    const place = data.places?.[0];
    if (!place) {
      return NextResponse.json({ error: 'Ort konnte nicht gefunden werden.' }, { status: 404 });
    }

    // Auf das vom Reviews-Frontend erwartete (Legacy-)Format mappen
    const reviews = (place.reviews ?? [])
      .filter((r) => (r.text?.text ?? '').trim().length > 0)
      .map((r) => ({
        author_name: r.authorAttribution?.displayName ?? 'Google-Nutzer:in',
        rating: r.rating ?? 5,
        text: r.text?.text ?? '',
        profile_photo_url: r.authorAttribution?.photoUri ?? '',
        relative_time: r.relativePublishTimeDescription ?? '',
      }));

    return NextResponse.json({
      reviews,
      rating: place.rating ?? null,
      user_ratings_total: place.userRatingCount ?? null,
      url: place.googleMapsUri ?? 'https://www.google.com/maps/search/Hundeschule+Willenskraft',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Interner Serverfehler beim Abrufen der Bewertungen.' },
      { status: 500 }
    );
  }
}

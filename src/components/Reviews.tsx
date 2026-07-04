'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
}

interface ReviewsData {
  reviews: Review[];
  url: string;
}

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const rounded = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating.toFixed(1)} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClass} ${star <= rounded ? 'text-yellow-400' : 'text-ink-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Fehler beim Laden der Bewertungen');
        }
        const result = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ein unbekannter Fehler ist aufgetreten.');
        }
      }
    }
    fetchReviews();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">Fehler: {error}</div>;
  }

  if (!data) {
    return <div className="text-center text-ink-400 py-8">Lade Bewertungen …</div>;
  }

  const reviews = data.reviews ?? [];
  if (reviews.length === 0) {
    return null;
  }

  const avg = reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length;

  return (
    <div>
      {/* Trust-Header mit echtem, aus den Rezensionen berechnetem Schnitt */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-10 pb-8 border-b border-ink-100">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm border border-ink-100 shrink-0">
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          </span>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-ink-950 leading-none">{avg.toFixed(1)}</span>
              <StarRating rating={avg} size="md" />
            </div>
            <p className="mt-1 text-sm text-ink-500">Verifizierte Google-Bewertungen</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
          <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-emerald-700 font-semibold text-sm">Echte Erfahrungen echter Kund:innen</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="border border-ink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            <CardHeader className="flex flex-row items-center gap-4">
              {review.profile_photo_url && review.profile_photo_url.startsWith('https') ? (
                <Image
                  src={review.profile_photo_url}
                  alt={`Profilbild von ${review.author_name}`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full ring-2 ring-lake-100 object-cover shrink-0"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="w-12 h-12 rounded-full bg-lake-100 text-lake-700 flex items-center justify-center font-bold text-lg shrink-0"
                >
                  {(review.author_name || 'G').charAt(0).toUpperCase()}
                </div>
              )}
              <div className="min-w-0">
                <CardTitle className="truncate">{review.author_name}</CardTitle>
                <CardDescription>
                  <StarRating rating={review.rating} size="sm" />
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-4 text-ink-600 italic leading-relaxed">„{review.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {data.url && (
        <div className="text-center mt-12">
          <Button asChild>
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              Alle Bewertungen auf Google ansehen
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}

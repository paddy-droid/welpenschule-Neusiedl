'use client';

import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapSpot, spotEmoji } from '@/lib/mapSpots';

interface RegionMapProps {
  regionName: string;
  center: { lat: number; lng: number };
  spots: MapSpot[];
}

/**
 * Interaktive Trainingsorte-Karte (Leaflet + OpenStreetMap — kein API-Key nötig).
 * Lazy: Initialisiert erst, wenn die Karte in den Viewport scrollt.
 */
export default function RegionMap({ regionName, center, spots }: RegionMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let map: import('leaflet').Map | null = null;
    let cancelled = false;

    const init = async () => {
      if (initializedRef.current || cancelled) return;
      initializedRef.current = true;

      const mod = await import('leaflet');
      const L: typeof import('leaflet') = (mod as { default?: typeof import('leaflet') }).default ?? mod;
      if (cancelled || !containerRef.current) return;

      map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>-Mitwirkende',
      }).addTo(map);

      // Mobiles Einsatzgebiet rund um den Ort
      L.circle([center.lat, center.lng], {
        radius: 2500,
        color: 'oklch(0.53 0.13 195)',
        weight: 1.5,
        opacity: 0.5,
        fillColor: 'oklch(0.625 0.135 190)',
        fillOpacity: 0.08,
      }).addTo(map);

      const makeIcon = (emoji: string, home = false) =>
        L.divIcon({
          className: 'wk-map-divicon',
          html: `<div class="wk-map-pin${home ? ' wk-map-pin--home' : ''}"><span>${emoji}</span></div>`,
          iconSize: [38, 46],
          iconAnchor: [19, 44],
          popupAnchor: [0, -42],
        });

      const popupHtml = (title: string, text: string) =>
        `<div class="wk-map-popup"><p class="wk-map-popup-title">${title}</p><p class="wk-map-popup-text">${text}</p></div>`;

      const bounds = L.latLngBounds([[center.lat, center.lng]]);

      // „Bei dir zuhause"-Marker im Ortszentrum
      L.marker([center.lat, center.lng], { icon: makeIcon('🏠', true), zIndexOffset: 1000 })
        .addTo(map)
        .bindPopup(
          popupHtml(
            `🏠 Bei dir zuhause in ${regionName}`,
            'Mobiles Einzeltraining, Welpenberatung, Medical Training & Trennungsstress-Coaching — Jessy kommt zu dir. Anfahrt kostenlos.'
          )
        );

      for (const spot of spots) {
        const emoji = spotEmoji[spot.icon] ?? '🐾';
        L.marker([spot.lat, spot.lng], { icon: makeIcon(emoji) })
          .addTo(map)
          .bindPopup(popupHtml(`${emoji} ${spot.name}`, spot.text));
        bounds.extend([spot.lat, spot.lng]);
      }

      map.fitBounds(bounds.pad(0.25));
      setIsLoaded(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          void init();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
      if (map) {
        map.remove();
        map = null;
      }
      initializedRef.current = false;
    };
  }, [regionName, center.lat, center.lng, spots]);

  return (
    <div className="wk-card !p-0 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-ink-200/70 bg-cream-soft/60">
        <p className="text-sm font-semibold text-ink-900">
          Trainings-Karte {regionName}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-flex w-4 h-4 rounded-full bg-brand-500/90 border border-white shadow-sm" /> Mobiles Training bei dir zuhause
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-flex w-4 h-4 rounded-full bg-lake-500/90 border border-white shadow-sm" /> Trainingsgebiete &amp; Hunde-Hotspots
          </span>
        </div>
      </div>
      <div className="relative">
        <div
          ref={containerRef}
          aria-label={`Interaktive Karte der Trainingsorte in ${regionName}`}
          className="h-[420px] w-full z-0"
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-cream-soft pointer-events-none">
            <span className="text-3xl">🐾</span>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">Karte wird geladen …</p>
          </div>
        )}
      </div>
    </div>
  );
}

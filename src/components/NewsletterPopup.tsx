'use client';

import { useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

/**
 * Newsletter-Popup — Anmeldung zur Willenskraft-Liste (GetResponse, via /api/newsletter).
 * Öffnet ab 45 % Scroll (Fallback nach 40 s), max. 2 Einblendungen pro Besucher mit
 * 3 Tagen Abstand; nach Anmeldung oder Schließen kehrt Ruhe ein.
 */
const STORAGE_KEY = 'wk_nl_v2';
const MAX_SHOWS = 2;
const COOLDOWN_MS = 3 * 864e5;

type StoredState = { count?: number; last?: number; done?: number };

function readState(): StoredState {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}') || {};
  } catch {
    return {};
  }
}
function writeState(patch: StoredState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...readState(), ...patch }));
  } catch {
    /* localStorage gesperrt */
  }
}

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  const close = useCallback((finished = false) => {
    setOpen(false);
    writeState(finished ? { done: 1 } : { count: (readState().count ?? 0) + 1, last: Date.now() });
  }, []);

  useEffect(() => {
    const s = readState();
    if (s.done) return;
    if ((s.count ?? 0) >= MAX_SHOWS) return;
    if (s.last && Date.now() - s.last < COOLDOWN_MS) return;

    let shown = false;
    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    }
    const trigger = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      cleanup();
    };
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (p >= 0.45) trigger();
    };
    const timer = window.setTimeout(trigger, 40000);
    window.addEventListener('scroll', onScroll, { passive: true });
    return cleanup;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Willenskraft Newsletter-Anmeldung"
    >
      <div className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm" onClick={() => close()} />
      <div className="relative w-full max-w-md wk-card !rounded-3xl overflow-hidden">
        <div className="relative wk-mesh px-7 pt-7 pb-6">
          <button
            onClick={() => close()}
            aria-label="Schließen"
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/70 hover:bg-white text-ink-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="wk-hand text-brand-600 text-2xl leading-none">Willenskraft Post 🐾</span>
          <h3 className="wk-display text-2xl md:text-3xl text-ink-950 mt-2">
            Der Newsletter für ein
            <br />
            <span className="wk-text-gradient">entspanntes Hundeleben.</span>
          </h3>
          <p className="mt-3 text-sm text-ink-600 leading-relaxed">
            Etwa monatlich von Bianca Oriana Willen: verständlich aufbereitete Studien, gewaltfreie
            Trainingstipps und Neues aus der Willenskraft-Welt — passend zu Jessys Arbeit in der Region Neusiedl am See.
          </p>
        </div>
        <div className="px-7 pb-7 pt-5 bg-card">
          <NewsletterSignup variant="popup" onSuccess={() => setTimeout(() => close(true), 2600)} />
        </div>
      </div>
    </div>
  );
}

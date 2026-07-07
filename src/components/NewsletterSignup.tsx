'use client';

import { useState } from 'react';
import { Mail, Check, Loader2 } from 'lucide-react';

interface NewsletterSignupProps {
  /** 'inline' = kompaktes Formular (Footer/Sektion), 'popup' = im Modal */
  variant?: 'inline' | 'popup';
  /** Callback nach erfolgreicher Anmeldung (z. B. Popup schließen) */
  onSuccess?: () => void;
  className?: string;
}

type State = 'idle' | 'loading' | 'ok' | 'exists' | 'error';

/**
 * Newsletter-Anmeldung zur Willenskraft-Liste (GetResponse, Liste POhxH) —
 * postet an /api/newsletter (Key bleibt serverseitig). Honeypot gegen Bots,
 * Single-Opt-in, DSGVO-Hinweis.
 */
export default function NewsletterSignup({ variant = 'inline', onSuccess, className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [hp, setHp] = useState(''); // Honeypot
  const [state, setState] = useState<State>('idle');
  const [msg, setMsg] = useState('');

  const dark = variant === 'popup';

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'loading') return;
    setState('loading');
    setMsg('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, hp }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        setState(data.state === 'exists' ? 'exists' : 'ok');
        onSuccess?.();
      } else {
        setState('error');
        setMsg(data?.msg || 'Anmeldung momentan nicht möglich. Bitte versuch es später erneut.');
      }
    } catch {
      setState('error');
      setMsg('Technisches Problem. Bitte versuch es später erneut.');
    }
  }

  if (state === 'ok' || state === 'exists') {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl px-5 py-4 ${
          dark ? 'bg-brand-50 text-ink-900' : 'bg-brand-50 border border-brand-200 text-ink-900'
        } ${className}`}
      >
        <span className="inline-flex w-9 h-9 rounded-full bg-brand-500 text-white items-center justify-center shrink-0">
          <Check className="w-5 h-5" />
        </span>
        <p className="text-sm leading-relaxed">
          {state === 'exists'
            ? 'Du bist bereits eingetragen — schön, dass du dabei bist! 🐾'
            : 'Fast geschafft! Bitte bestätige noch die E-Mail in deinem Postfach. 🐾'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`space-y-2.5 ${className}`} noValidate>
      {/* Honeypot (für Menschen unsichtbar) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="hidden"
      />
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${dark ? 'text-ink-400' : 'text-ink-400'}`} />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail-Adresse"
            aria-label="E-Mail-Adresse für den Newsletter"
            className="w-full h-12 rounded-full border border-ink-200 bg-white pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-300/50"
          />
        </div>
        <button
          type="submit"
          disabled={state === 'loading'}
          className="wk-btn-primary inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-semibold whitespace-nowrap disabled:opacity-70"
        >
          {state === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Anmelden'}
        </button>
      </div>
      {state === 'error' && <p className="text-xs text-red-600 px-1">{msg}</p>}
      <p className={`text-[11px] leading-snug px-1 ${dark ? 'text-ink-500' : 'text-ink-400'}`}>
        Kostenlos, ca. monatlich, jederzeit abbestellbar. Es gilt die{' '}
        <a href="/datenschutz" className="underline hover:text-brand-600">Datenschutzerklärung</a>.
      </p>
    </form>
  );
}

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const read = (): Theme | null => {
  try {
    const t = localStorage.getItem('theme');
    return t === 'light' || t === 'dark' ? t : null;
  } catch {
    return null;
  }
};

const systemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export default function ThemeToggle() {
  const [pref, setPref] = useState<Theme | null>(read);
  const [system, setSystem] = useState<Theme>(() => systemTheme());

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => setSystem(systemTheme());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    try {
      if (pref) {
        root.setAttribute('data-theme', pref);
        localStorage.setItem('theme', pref);
      } else {
        root.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      }
    } catch {
      /* storage unavailable: the attribute still applies for this page */
    }
  }, [pref]);

  const current = pref ?? system;
  const next: Theme = current === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setPref(next === system ? null : next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="row-hover grid h-8 w-8 place-items-center text-ink-muted transition-colors hover:text-ink"
    >
      {current === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}

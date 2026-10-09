import { useEffect } from 'react';

/**
 * Reveal-on-scroll. Content is visible by default; the `reveal` class on <html>
 * switches the CSS to hidden-until-`.in`, so a failed observer never hides content.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (els.length === 0 || reduce || !('IntersectionObserver' in window)) return;

    root.classList.add('reveal');
    const show = (el: Element) => el.classList.add('in');

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));

    // Safety net: anything still hidden after a few seconds is shown regardless.
    const fallback = window.setTimeout(() => els.forEach(show), 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      root.classList.remove('reveal');
    };
  }, []);
}

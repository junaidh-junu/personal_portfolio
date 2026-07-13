import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Toolbox' },
  { id: 'publications', label: 'Pubs' },
  { id: 'contact', label: 'Contact' },
];

const SectionDots = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollTo(section.id)}
            aria-label={`Go to ${section.label}`}
            className="group relative flex items-center justify-end gap-2"
          >
            <span className="pointer-events-none absolute right-5 whitespace-nowrap border border-rule bg-canvas px-2 py-1 font-mono text-[9px] tracking-[0.2em] uppercase text-ink-muted opacity-0 transition-opacity group-hover:opacity-100">
              {section.label}
            </span>
            <motion.div
              animate={isActive ? { scale: 1.2 } : { scale: 1 }}
              className={`border transition-all ${
                isActive
                  ? 'w-2 h-2 border-ink bg-ink'
                  : 'w-1.5 h-1.5 border-ink/30 bg-transparent group-hover:border-ink/60'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default SectionDots;

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
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
            onClick={() => scrollTo(section.id)}
            aria-label={`Go to ${section.label}`}
            className="group relative flex items-center justify-end gap-2"
          >
            {/* Label tooltip */}
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-full border border-white/[0.08] bg-dark-bg/90 px-2.5 py-1 font-mono text-[9px] tracking-[0.2em] uppercase text-ivory-muted opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
              {section.label}
            </span>

            {/* Dot */}
            <motion.div
              animate={isActive ? { scale: 1.3 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`rounded-full border transition-all duration-300 ${
                isActive
                  ? 'w-2 h-2 border-accent bg-accent'
                  : 'w-1.5 h-1.5 border-accent/40 bg-transparent group-hover:border-accent/70 group-hover:bg-accent/20'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default SectionDots;

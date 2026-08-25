import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

type ThemePref = 'light' | 'dark';

const getInitialTheme = (): ThemePref | null => {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem('theme');
  return stored === 'light' || stored === 'dark' ? stored : null;
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemePref | null>(getInitialTheme);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
      window.localStorage.setItem('theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.removeItem('theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = theme ?? (prefersDark ? 'dark' : 'light');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const sections = ['home', 'stats', 'projects', 'about', 'journey', 'skills', 'publications', 'contact'];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        const mapped = current === 'stats' ? 'home' : current;
        setActiveSection(mapped);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-auto transition-all duration-300 ${
          isScrolled ? 'top-3' : 'top-5'
        }`}
      >
        <div
          className="flex items-center justify-between gap-4 sm:gap-8 rounded-full border-2 border-ink bg-surface-elevated px-5 sm:px-7 py-2.5"
          style={{ boxShadow: '4px 4px 0 0 var(--color-ink)' }}
        >
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="font-display text-sm font-bold tracking-tight text-ink hover:text-accent transition-colors"
          >
            JH
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="sticker p-1.5 text-ink-muted hover:text-ink transition-colors"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex cta-primary !px-4 !py-1.5 !border-[1.5px] text-xs"
              style={{ boxShadow: '3px 3px 0 0 var(--color-ink)' }}
            >
              Say Hello
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-ink p-1.5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink/20 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-surface-elevated border-l-2 border-ink z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-8 space-y-2 mt-20">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: 16, rotate: 0 }}
                    animate={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? -1 : 1 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 border-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-all ${
                      activeSection === item.id
                        ? 'bg-accent text-canvas border-ink'
                        : 'bg-canvas text-ink-muted border-ink/20 hover:text-ink hover:border-ink'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="cta-primary w-full mt-6"
                >
                  Say Hello
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

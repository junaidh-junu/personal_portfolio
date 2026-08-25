import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      setVisible(window.scrollY > document.body.scrollHeight * 0.35);
    };
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to top"
          className="sticker fixed bottom-8 left-8 z-40 rounded-full border-2 border-ink bg-accent p-3 text-canvas transition-colors hover:bg-ink lg:hidden"
          style={{ boxShadow: '3px 3px 0 0 var(--color-ink)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;

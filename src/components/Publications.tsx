import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { publications } from '../data/portfolio';

const Publications = () => {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((clientX - centerX) / centerX);
      mouseY.set((clientY - centerY) / centerY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} id="publications" className="py-20 relative overflow-hidden bg-dark-surface/30">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-surface/50 via-dark-bg to-dark-surface/50"
        style={{
          x: useTransform(mouseX, (x) => x * 5),
          y: useTransform(mouseY, (y) => y * 5),
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(123,47,247,0.12),transparent_50%)]"
        style={{
          x: useTransform(mouseX, (x) => x * 15),
          y: useTransform(mouseY, (y) => y * 15),
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(255,0,128,0.1),transparent_50%)]"
        style={{
          x: useTransform(mouseX, (x) => x * 25),
          y: useTransform(mouseY, (y) => y * 25),
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,245,255,0.08),transparent_60%)]"
        style={{
          x: useTransform(mouseX, (x) => x * 35),
          y: useTransform(mouseY, (y) => y * 35),
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          x: useTransform(mouseX, (x) => x * 10),
          y: useTransform(mouseY, (y) => y * 10),
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,245,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </motion.div>

      <motion.div className="container mx-auto px-4 relative z-10" ref={ref} style={{ opacity, scale, y }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Research <span className="gradient-text">Publications</span>
          </h2>
          <div className="section-divider" />
          <p className="text-neutral-400 max-w-2xl mx-auto mt-6 text-lg">
            Contributions to academic research and published work
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="card-elegant card-hover p-6 md:p-8 rounded-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Header */}
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      {pub.journal}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {pub.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  {/* DOI Link */}
                  {pub.doi && (
                    <motion.a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 2 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/20 to-accent/20 text-white rounded-lg text-sm font-semibold hover:from-primary/30 hover:to-accent/30 transition-all duration-300 border border-primary/30 hover:border-primary/50"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Publication (DOI: {pub.doi})
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Publications;

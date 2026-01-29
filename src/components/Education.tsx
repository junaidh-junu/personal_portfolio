import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { education } from '../data/portfolio';

const Education = () => {
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
    <section ref={sectionRef} id="education" className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"
        style={{
          x: useTransform(mouseX, (x) => x * 5),
          y: useTransform(mouseY, (y) => y * 5),
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,0,128,0.12),transparent_50%)]"
        style={{
          x: useTransform(mouseX, (x) => x * 15),
          y: useTransform(mouseY, (y) => y * 15),
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,245,255,0.1),transparent_50%)]"
        style={{
          x: useTransform(mouseX, (x) => x * 25),
          y: useTransform(mouseY, (y) => y * 25),
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,47,247,0.08),transparent_60%)]"
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
            <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider" />
          <p className="text-neutral-400 max-w-2xl mx-auto mt-6 text-lg">
            Academic journey and continuous learning
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="card-elegant card-hover p-6 md:p-8 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <div className="text-neutral-300 font-semibold text-lg">{edu.institution}</div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary/20 to-accent/20 text-white text-sm font-semibold rounded-lg border border-primary/30">
                    {edu.period}
                  </span>
                  {edu.status && (
                    <span className="px-3 py-1 bg-neutral-900/70 text-neutral-300 text-xs font-semibold rounded-lg border border-neutral-800">
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-neutral-400 mb-4 relative z-10">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{edu.location}</span>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-neutral-400 leading-relaxed mb-4 relative z-10">{edu.description}</p>
              )}

              {/* GPA */}
              {edu.gpa && (
                <div className="flex items-center gap-2 text-neutral-400 relative z-10">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Percentage: <span className="text-white font-semibold">{edu.gpa}</span></span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data/portfolio';
import WordReveal from './WordReveal';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-dark-border" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-wrap items-baseline justify-center gap-[0.25em] mb-6">
            <WordReveal text="Education" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic" />
          </div>
          <div className="gold-rule w-16" />
          <p className="font-body text-ivory-muted max-w-xl mx-auto mt-6 text-base font-light">
            Academic journey and continuous learning
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="card card-hover p-6 md:p-8 group"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-display text-xl md:text-2xl text-ivory mb-2">{edu.degree}</h3>
                  <div className="font-body text-ivory-dim font-normal text-base">{edu.institution}</div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="px-3 py-1 border border-accent/30 text-accent font-body text-xs tracking-wide">
                    {edu.period}
                  </span>
                  {edu.status && (
                    <span className="px-3 py-1 border border-dark-border text-ivory-muted font-body text-xs tracking-wide">
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 font-body text-sm text-ivory-muted mb-4">
                <svg className="w-3.5 h-3.5 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{edu.location}</span>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="font-body text-sm text-ivory-dim leading-relaxed mb-4 font-light">{edu.description}</p>
              )}

              {/* GPA */}
              {edu.gpa && (
                <div className="flex items-center gap-2 font-body text-sm text-ivory-muted">
                  <span className="text-accent text-xs">&#9670;</span>
                  <span>Percentage: <span className="text-ivory font-normal">{edu.gpa}</span></span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

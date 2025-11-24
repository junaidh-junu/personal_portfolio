import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data/portfolio';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
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
      </div>
    </section>
  );
};

export default Education;

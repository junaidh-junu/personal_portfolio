import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-dark-surface/30">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider" />
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-lg">
            My professional journey and the experiences that shaped my expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 transform -translate-x-1/2 hidden md:block rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                className="absolute left-0 md:left-1/2 top-8 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full transform -translate-x-1/2 z-10 hidden md:block border-4 border-dark-bg shadow-lg"
              />

              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                className={`card-elegant card-hover p-6 md:p-8 rounded-xl relative overflow-hidden ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Header */}
                <div className="mb-6 relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                    {exp.current && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.2 }}
                        className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-full shadow-md"
                      >
                        Current
                      </motion.span>
                    )}
                  </div>
                  <div className="text-neutral-300 font-semibold text-lg mb-3">{exp.company}</div>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                    <span className="flex items-center gap-2 px-3 py-1 bg-neutral-900/50 rounded-lg">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 bg-neutral-900/50 rounded-lg">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {exp.location}
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20">{exp.type}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6 text-neutral-400 relative z-10">
                  {exp.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span className="flex-1 leading-relaxed">{desc}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-neutral-900/70 text-neutral-300 text-xs rounded-lg border border-neutral-800 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

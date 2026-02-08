import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative">
      {/* Subtle section separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-dark-border" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-ivory">
            Work <span className="italic text-accent">Experience</span>
          </h2>
          <div className="gold-rule w-16" />
          <p className="font-body text-ivory-muted mt-6 max-w-xl mx-auto text-base font-light">
            My professional journey and the experiences that shaped my expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-dark-border hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-16 last:mb-0 md:pl-20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-8 top-2 w-2 h-2 -translate-x-[3.5px] bg-accent rounded-full hidden md:block" />

              {/* Card */}
              <div className="card card-hover p-6 md:p-8 group">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-xl md:text-2xl text-ivory">{exp.title}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-body text-xs font-medium tracking-wide">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="font-body text-ivory-dim font-normal text-base mb-3">{exp.company}</div>
                  <div className="flex flex-wrap gap-4 font-body text-xs text-ivory-muted tracking-wide">
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 border border-dark-border-light text-ivory-muted">{exp.type}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2.5 mb-6 font-body text-sm text-ivory-dim font-light">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1 flex-shrink-0 text-[10px]">&#9670;</span>
                      <span className="flex-1 leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 border border-dark-border text-ivory-muted font-body text-xs tracking-wide hover:border-accent/30 hover:text-accent transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

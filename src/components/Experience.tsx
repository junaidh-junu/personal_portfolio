import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data/portfolio';
import { Experience as ExperienceType } from '../types';
import WordReveal from './WordReveal';

interface RecordProps {
  exp: ExperienceType;
  index: number;
}

const ExperienceRecord = ({ exp, index }: RecordProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="soft-panel group p-6 md:p-8"
    >
      {/* Header row */}
      <div className="grid grid-cols-[3rem_1fr] gap-x-6 gap-y-4 items-start mb-6 md:grid-cols-[3rem_1fr_auto]">
        {/* Number */}
        <span className="font-display text-5xl leading-none text-accent/30 select-none pt-1">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Meta */}
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <h3 className="font-display text-xl md:text-2xl text-ivory">{exp.company}</h3>
          </div>
          <p className="font-body text-sm text-ivory-dim mb-2.5">{exp.title}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] text-ivory-muted tracking-[0.15em] uppercase">
            <span>{exp.period}</span>
            <span className="text-dark-border-light">·</span>
            <span>{exp.location}</span>
            <span className="text-dark-border-light">·</span>
            <span>{exp.type}</span>
          </div>
        </div>

        {/* Current badge */}
        {exp.current && (
          <span className="rounded-full px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] tracking-widest uppercase whitespace-nowrap col-start-2 md:col-start-auto">
            Current
          </span>
        )}
      </div>

      {/* Content — indent matches number column + gap */}
      <div className="md:pl-[calc(3rem+1.5rem)]">
        <div className="pt-2">
          <ul className="space-y-2.5 mb-6">
            {exp.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0 text-[10px]">&#9670;</span>
                <span className="font-body text-[13px] text-ivory-dim leading-relaxed font-light flex-1">
                  {desc}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="tag-pill"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="section-shell">
          <div className="section-content">

        {/* Section label bar */}
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 mb-12"
        >
          <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase whitespace-nowrap">
            02 — Experience
          </span>
          <div className="section-kicker-line" />
          <span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase whitespace-nowrap">
            2+ years · 4 roles
          </span>
        </motion.div>

        {/* Section heading */}
        <div className="mb-4">
          <div className="inline-flex flex-wrap items-baseline gap-[0.25em]">
            <WordReveal text="Work" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory" />
            <WordReveal text="Experience" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic" delay={0.14} />
          </div>
          <div className="gold-rule-left w-14 mt-4" />
        </div>

        {/* Records */}
        <div className="mt-16 grid gap-5">
          {experiences.map((exp, index) => (
            <ExperienceRecord key={exp.id} exp={exp} index={index} />
          ))}
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

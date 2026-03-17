import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education } from '../data/portfolio';
import { Education as EducationType } from '../types';
import WordReveal from './WordReveal';

interface RecordProps {
  edu: EducationType;
  index: number;
}

const EducationRecord = ({ edu, index }: RecordProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-dark-border group hover:bg-dark-surface transition-colors duration-300 py-10"
    >
      {/* Header row */}
      <div className="grid grid-cols-[3rem_1fr_auto] gap-x-6 items-start mb-6">
        {/* Number */}
        <span className="font-display text-5xl leading-none text-accent/30 select-none pt-1">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Meta */}
        <div>
          <h3 className="font-display text-xl text-ivory mb-1.5">{edu.degree}</h3>
          <p className="font-body text-sm text-ivory-dim mb-2.5">{edu.institution}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] text-ivory-muted tracking-[0.15em] uppercase">
            <span>{edu.period}</span>
            <span className="text-dark-border-light">·</span>
            <span>{edu.location}</span>
          </div>
        </div>

        {/* Ongoing badge */}
        {edu.status && (
          <span className="px-2.5 py-0.5 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] tracking-widest uppercase whitespace-nowrap">
            {edu.status}
          </span>
        )}
      </div>

      {/* Content */}
      {edu.description && (
        <div className="pl-[calc(3rem+1.5rem)]">
          <div className="border-t border-dark-border pt-6">
            <p className="font-body text-[13px] text-ivory-dim leading-relaxed font-light">
              {edu.description}
            </p>
            {edu.gpa && (
              <p className="font-mono text-[10px] text-ivory-muted tracking-[0.15em] uppercase mt-4">
                Score: <span className="text-ivory">{edu.gpa}</span>
              </p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Education = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section label bar */}
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 mb-12"
        >
          <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase whitespace-nowrap">
            03 — Education
          </span>
          <div className="h-px flex-1 bg-dark-border" />
          <span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase whitespace-nowrap">
            {education.length} institutions
          </span>
        </motion.div>

        {/* Section heading */}
        <div className="mb-4">
          <div className="inline-flex flex-wrap items-baseline gap-[0.25em]">
            <WordReveal text="Academic" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory" />
            <WordReveal text="Background" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic" delay={0.14} />
          </div>
          <div className="gold-rule-left w-14 mt-4" />
        </div>

        {/* Records */}
        <div className="mt-16 border-t border-dark-border">
          {education.map((edu, index) => (
            <EducationRecord key={edu.id} edu={edu} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

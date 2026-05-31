import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, certifications } from '../data/portfolio';
import { Education as EducationType, Certification } from '../types';
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
          <span className="rounded-full px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] tracking-widest uppercase whitespace-nowrap col-start-2 md:col-start-auto">
            {edu.status}
          </span>
        )}
      </div>

      {/* Content */}
      {edu.description && (
        <div className="md:pl-[calc(3rem+1.5rem)]">
          <div className="pt-2">
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

const CertificationRow = ({ cert, index }: { cert: Certification; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="soft-panel px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
    >
      <div>
        <p className="font-body text-sm text-ivory">{cert.title}</p>
        <p className="font-body text-xs text-ivory-muted mt-0.5">{cert.issuer}</p>
      </div>
      <span className="font-mono text-[10px] text-ivory-muted tracking-[0.15em] uppercase whitespace-nowrap">
        {cert.period}
      </span>
    </motion.div>
  );
};

const Education = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });
  const certRef = useRef(null);
  const certInView = useInView(certRef, { once: true, margin: '-80px' });

  return (
    <section id="education" className="py-24 md:py-32 relative">
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
            03 — Education
          </span>
          <div className="section-kicker-line" />
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
        <div className="mt-16 grid gap-5">
          {education.map((edu, index) => (
            <EducationRecord key={edu.id} edu={edu} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          ref={certRef}
          initial={{ opacity: 0, y: 16 }}
          animate={certInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <div className="flex items-center gap-5 mb-6">
            <h3 className="font-display text-2xl md:text-3xl text-accent italic whitespace-nowrap">
              Certifications
            </h3>
            <div className="section-kicker-line" />
          </div>
          <div className="grid gap-3">
            {certifications.map((cert, index) => (
              <CertificationRow key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

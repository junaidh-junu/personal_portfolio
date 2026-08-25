import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { experiences, education, certifications } from '../data/portfolio';
import type { Experience, Education, Certification } from '../types';

const ExperienceItem = ({ exp, index }: { exp: Experience; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [expanded, setExpanded] = useState(false);
  const highlights = exp.description.slice(0, expanded ? exp.description.length : 2);
  const tilt = index % 2 === 0 ? 'md:rotate-[0.4deg]' : 'md:-rotate-[0.4deg]';

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`work-card p-6 md:p-8 ${tilt}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <h4 className="font-display text-xl md:text-2xl text-ink">{exp.title}</h4>
          <p className="font-body text-sm text-ink-muted mt-1">{exp.company}</p>
        </div>
        <div className="flex items-center gap-3">
          {exp.current && (
            <span className="sticker font-mono text-[10px] tracking-[0.15em] uppercase bg-accent text-canvas rounded-full px-3 py-1 border-2 border-ink">
              Current
            </span>
          )}
          <span className="font-mono text-[10px] text-ink-muted tracking-[0.15em] uppercase whitespace-nowrap">
            {exp.period}
          </span>
        </div>
      </div>
      <p className="font-mono text-[10px] text-ink-faint tracking-[0.12em] uppercase mb-4">
        {exp.location} · {exp.type}
      </p>
      <ul className="space-y-2 mb-4">
        {highlights.map((item, i) => (
          <li key={i} className="font-body text-sm text-ink-dim leading-relaxed flex gap-3">
            <span className="text-accent shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {exp.description.length > 2 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent hover:text-accent-light mb-4"
        >
          {expanded ? 'Show less' : `+${exp.description.length - 2} more`}
        </button>
      )}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-rule">
        {exp.skills.slice(0, 6).map((skill) => (
          <span key={skill} className="tag-pill text-[11px]">{skill}</span>
        ))}
      </div>
    </motion.article>
  );
};

const EducationItem = ({ edu, index }: { edu: Education; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="work-card p-6 md:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
        <div>
          <h4 className="font-display text-xl text-ink">{edu.degree}</h4>
          <p className="font-body text-sm text-ink-muted mt-1">{edu.institution}</p>
        </div>
        <div className="flex items-center gap-3">
          {edu.status && (
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase border border-accent px-2 py-1 text-accent">
              {edu.status}
            </span>
          )}
          <span className="font-mono text-[10px] text-ink-muted tracking-[0.15em] uppercase">
            {edu.period}
          </span>
        </div>
      </div>
      <p className="font-mono text-[10px] text-ink-faint tracking-[0.12em] uppercase mb-3">
        {edu.location}
      </p>
      {edu.description && (
        <p className="font-body text-sm text-ink-dim leading-relaxed">{edu.description}</p>
      )}
    </motion.article>
  );
};

const CertificationItem = ({ cert }: { cert: Certification }) => (
  <div className="work-card px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
    <div>
      <p className="font-body text-sm text-ink">{cert.title}</p>
      <p className="font-body text-xs text-ink-muted mt-0.5">{cert.issuer}</p>
    </div>
    <span className="font-mono text-[10px] text-ink-muted tracking-[0.15em] uppercase">
      {cert.period}
    </span>
  </div>
);

const Journey = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="journey" className="section-block">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-index">/ 04 Journey</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mt-4">
            My digital journey
          </h2>
          <div className="scribble-divider mt-6 max-w-full" />
        </motion.div>

        <div className="mb-14">
          <h3 className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center">01</span>
            <span className="font-display text-xl text-ink">Experience</span>
          </h3>
          <div className="grid gap-6">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>

        <div className="scribble-divider my-14" />

        <div className="mb-14">
          <h3 className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center">02</span>
            <span className="font-display text-xl text-ink">Education</span>
          </h3>
          <div className="grid gap-4">
            {education.map((edu, i) => (
              <EducationItem key={edu.id} edu={edu} index={i} />
            ))}
          </div>
        </div>

        <div className="scribble-divider my-14" />

        <div>
          <h3 className="inline-flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase bg-ink text-canvas rounded-full w-7 h-7 flex items-center justify-center">03</span>
            <span className="font-display text-xl text-ink">Certifications</span>
          </h3>
          <div className="grid gap-3">
            {certifications.map((cert) => (
              <CertificationItem key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

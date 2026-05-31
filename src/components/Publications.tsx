import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { publications } from '../data/portfolio';
import type { Publication } from '../types';
import WordReveal from './WordReveal';

const Publications = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="publications" className="py-24 md:py-32 relative">
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
            06 — Publications
          </span>
          <div className="section-kicker-line" />
          <span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase whitespace-nowrap hidden sm:inline">
            peer-reviewed
          </span>
        </motion.div>

        {/* Section heading */}
        <div className="mb-4">
          <div className="inline-flex flex-wrap items-baseline gap-[0.25em]">
            <WordReveal text="Research" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory" />
            <WordReveal text="Publications" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic" delay={0.14} />
          </div>
          <div className="gold-rule-left w-14 mt-4" />
        </div>

        {/* Records */}
        <div className="mt-16 grid gap-5">
          {publications.map((pub, index) => (
            <PublicationRecord key={pub.id} pub={pub} index={index} />
          ))}
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

interface PubRecordProps {
  pub: Publication;
  index: number;
}

const PublicationRecord = ({ pub, index }: PubRecordProps) => {
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
      <div className="grid grid-cols-[3rem_1fr] gap-x-6">
        {/* Number */}
        <span className="font-display text-5xl leading-none text-accent/30 select-none pt-1">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Content */}
        <div>
          <h3 className="font-display text-xl md:text-2xl text-ivory mb-3">{pub.title}</h3>

          <div className="font-mono text-[10px] text-ivory-muted tracking-[0.15em] uppercase flex flex-wrap gap-x-4 gap-y-1 mb-5">
            <span>{pub.journal}</span>
            <span className="text-dark-border-light">·</span>
            <span>{pub.date}</span>
            {pub.doi && (
              <>
                <span className="text-dark-border-light">·</span>
                <span>DOI: {pub.doi}</span>
              </>
            )}
          </div>

          <p className="font-body text-[13px] text-ivory-dim leading-relaxed font-light mb-6">
            {pub.description}
          </p>

          {pub.doi && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-mono text-[11px] hover:underline"
            >
              doi.org/{pub.doi} ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Publications;

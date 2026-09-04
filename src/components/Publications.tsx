import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { publications } from '../data/portfolio';
import type { Publication } from '../types';

const PublicationRecord = ({ pub, index }: { pub: Publication; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="work-card p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8"
    >
      <div className="sticker shrink-0 self-start">
        <span className="font-display text-5xl md:text-6xl font-bold text-accent leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl md:text-2xl text-ink mb-3">
          <span className="text-accent">{pub.title}</span>
        </h3>
        <div className="font-mono text-[10px] text-ink-muted tracking-[0.12em] uppercase flex flex-wrap gap-x-4 gap-y-1 mb-4">
          <span>{pub.journal}</span>
          <span>·</span>
          <span>{pub.date}</span>
          {pub.doi && (
            <>
              <span>·</span>
              <span>DOI: {pub.doi}</span>
            </>
          )}
        </div>
        <p className="font-body text-sm text-ink-dim leading-relaxed mb-5">{pub.description}</p>
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent hover:text-accent-light"
          >
            doi.org/{pub.doi} ↗
          </a>
        )}
      </div>
    </motion.article>
  );
};

const Publications = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="publications" className="section-block">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink">
            Research publications
          </h2>
          <div className="scribble-divider mt-6" />
        </motion.div>

        <div className="grid gap-4">
          {publications.map((pub, index) => (
            <PublicationRecord key={pub.id} pub={pub} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

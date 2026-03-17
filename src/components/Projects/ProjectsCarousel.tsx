import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';
import WordReveal from '../WordReveal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="border border-dark-border group hover:border-accent/20 hover:bg-dark-surface transition-all duration-300 flex flex-col"
    >
      {/* Image slot */}
      <div className="aspect-video bg-dark-surface border-b border-dark-border flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="font-mono text-[10px] text-ivory-dim tracking-[0.2em] uppercase select-none">
            Image forthcoming
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Top row: date + featured badge */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase">
            {project.date}
          </span>
          {project.id === '12' && (
            <span className="px-2.5 py-0.5 border border-accent/40 text-accent font-mono text-[10px] tracking-[0.15em] uppercase">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-lg text-ivory group-hover:text-accent transition-colors duration-300 mt-2 mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-xs text-ivory-dim leading-relaxed font-light flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 border border-dark-border text-ivory-muted font-body text-[11px] tracking-wide hover:border-accent/30 hover:text-accent transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-0.5 text-ivory-muted font-body text-[11px]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        {(project.github || project.demo) && (
          <div className="border-t border-dark-border pt-4 flex gap-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-xs text-ivory-muted hover:text-accent transition-colors duration-300 tracking-wide"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-body text-xs text-accent hover:text-accent-light transition-colors duration-300 tracking-wide"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsCarousel = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
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
            05 — Projects
          </span>
          <div className="h-px flex-1 bg-dark-border" />
          <span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase whitespace-nowrap">
            {projects.length} works
          </span>
        </motion.div>

        {/* Section heading */}
        <div className="mb-4">
          <div className="inline-flex flex-wrap items-baseline gap-[0.25em]">
            <WordReveal text="Selected" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory" />
            <WordReveal text="Projects" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic" delay={0.14} />
          </div>
          <div className="gold-rule-left w-14 mt-4" />
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-start"
        >
          <a
            href="https://github.com/junaidh-junu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-accent text-accent px-8 py-3 font-body text-sm tracking-wide hover:bg-accent/10 transition-all duration-300"
          >
            <span>View More on GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsCarousel;

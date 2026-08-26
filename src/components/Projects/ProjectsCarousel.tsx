import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects, featuredProject } from '../../data/portfolio';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const rotations = ['rotate-1', '-rotate-1.5', 'rotate-2.5', '-rotate-1', 'rotate-1.5', '-rotate-2.5'];

const ProjectCard = ({ project, index, onOpen }: ProjectCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const rotation = rotations[index % rotations.length];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={`work-card group flex flex-col overflow-hidden mb-6 break-inside-avoid ${rotation} hover:rotate-0 transition-transform duration-300`}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="aspect-video bg-surface-elevated flex items-center justify-center overflow-hidden text-left"
        aria-label={`View details for ${project.title}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="font-mono text-[10px] text-ink-faint tracking-[0.2em] uppercase">
            Image forthcoming
          </span>
        )}
      </button>
      <div className="p-6 flex-1 flex flex-col border-t border-rule">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-ink-muted tracking-[0.2em] uppercase">
            {project.date}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="text-left"
        >
          <h3 className="font-display text-xl text-ink group-hover:text-accent transition-colors mt-1 mb-3">
            {project.title}
          </h3>
        </button>
        <p className="font-body text-sm text-ink-dim leading-relaxed flex-1 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tag-pill text-[11px]">{tech}</span>
          ))}
        </div>
        <div className="pt-4 border-t border-rule flex items-center gap-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted hover:text-accent"
          >
            Details →
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted hover:text-accent"
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent hover:text-accent-light"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[var(--z-modal)] flex items-end sm:items-center justify-center bg-ink/50 p-0 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -1.5, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, rotate: 1.5, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-canvas border-2 border-ink shadow-[8px_8px_0_0_#FF4E1F] w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="aspect-video bg-surface-elevated flex items-center justify-center overflow-hidden border-b border-rule">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
          ) : (
            <span className="font-mono text-[10px] text-ink-faint tracking-[0.2em] uppercase">
              Image forthcoming
            </span>
          )}
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="font-mono text-[10px] text-ink-muted tracking-[0.2em] uppercase">
                {project.date} {project.category ? `· ${project.category}` : ''}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-ink mt-2">{project.title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted hover:text-ink border border-border px-3 py-2 flex-shrink-0"
            >
              Close
            </button>
          </div>
          <p className="font-body text-base text-ink-dim leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag-pill text-[11px]">{tech}</span>
            ))}
          </div>
          {(project.github || project.demo) && (
            <div className="pt-6 border-t border-rule flex gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-ghost"
                >
                  View code ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary"
                >
                  Live demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

type TabKey = 'all' | 'web' | 'mobile' | 'tool';

const tabs: { key: TabKey; label: string; category?: 'web' | 'mobile' | 'tool' }[] = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'tool', label: 'Tools' },
];

const ProjectsCarousel = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const gridProjects = projects.filter((p) => !p.featured || p.id !== featuredProject.id);

  const filteredProjects = activeTab === 'all'
    ? gridProjects
    : gridProjects.filter((p) => p.category === activeTab);

  const getCount = (key: TabKey) =>
    key === 'all' ? gridProjects.length : gridProjects.filter((p) => p.category === key).length;

  return (
    <section id="projects" className="section-block">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink">
            Selected projects
          </h2>
          <p className="font-body text-ink-dim mt-4 max-w-2xl">
            Production apps, tools, and platforms — from 30,000+ user web platforms to cross-platform mobile apps.
          </p>
          <div className="scribble-divider mt-6" />
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const count = getCount(tab.key);
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`sticker px-5 py-2.5 border-2 border-ink font-mono text-[10px] tracking-[0.2em] uppercase transition-all ${
                  isActive
                    ? 'bg-accent text-accent-ink shadow-[3px_3px_0_0_#181511]'
                    : 'bg-canvas text-ink shadow-[3px_3px_0_0_#181511] hover:bg-surface-elevated'
                }`}
              >
                {tab.label}
                <span className={`ml-2 ${isActive ? 'text-accent-ink/70' : 'text-ink-faint'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setOpenProject} />
          ))}
        </motion.div>

        <AnimatePresence>
          {openProject && (
            <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <a
            href="https://github.com/junaidh-junu"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-ghost"
          >
            View more on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects, featuredProject } from '../../data/portfolio';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="work-card group flex flex-col overflow-hidden"
    >
      <div className="aspect-video bg-surface-elevated flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="font-mono text-[10px] text-ink-faint tracking-[0.2em] uppercase">
            Image forthcoming
          </span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col border-t border-rule">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-ink-muted tracking-[0.2em] uppercase">
            {project.date}
          </span>
        </div>
        <h3 className="font-display text-xl text-ink group-hover:text-accent transition-colors mt-1 mb-3 lowercase">
          {project.title}
        </h3>
        <p className="font-body text-sm text-ink-dim leading-relaxed flex-1 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tag-pill text-[11px]">{tech}</span>
          ))}
        </div>
        {(project.github || project.demo) && (
          <div className="pt-4 border-t border-rule flex gap-5">
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
        )}
      </div>
    </motion.article>
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
          <span className="section-index">/ 02 Works</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mt-4 lowercase">
            selected projects
          </h2>
          <p className="font-body text-ink-dim mt-4 max-w-2xl">
            Production apps, tools, and platforms — from 30,000+ user web platforms to cross-platform mobile apps.
          </p>
          <div className="hairline mt-6" />
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2 border border-rule p-2 w-fit">
          {tabs.map((tab) => {
            const count = getCount(tab.key);
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-all ${
                  isActive
                    ? 'bg-ink text-canvas'
                    : 'text-ink-muted hover:text-ink hover:bg-surface'
                }`}
              >
                {tab.label}
                <span className={`ml-2 ${isActive ? 'text-canvas/70' : 'text-ink-faint'}`}>
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
          className="mt-10 grid md:grid-cols-2 gap-5"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

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

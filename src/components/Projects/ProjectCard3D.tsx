import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCard3DProps {
  project: Project;
  index: number;
  isFocused: boolean;
}

const ProjectCard3D = ({ project, index, isFocused }: ProjectCard3DProps) => {
  const isFeatured = Boolean(project.featured);

  return (
    <motion.div
      className={`relative flex-shrink-0 transition-all duration-500 ${
        isFeatured ? 'w-[600px]' : 'w-[400px]'
      } h-[500px] ${isFocused ? 'z-10' : 'z-0'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isFocused ? 1 : 0.96,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <motion.div
        className="w-full h-full relative"
        whileHover={{ scale: isFocused ? 1.01 : 0.96 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Card Background */}
        <div
          className={`work-card w-full h-full p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${
            isFocused ? 'border-ink' : ''
          }`}
        >
          {/* Featured Badge */}
          {isFeatured && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 right-4 status-pill"
            >
              Featured
            </motion.div>
          )}

          {/* Project Icon */}
          <div className="relative z-10">
            <div className="w-16 h-16 border border-border flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>

            {/* Project Title */}
            <h3 className="font-display text-2xl mb-3 text-ink leading-tight">
              {project.title}
            </h3>

            {/* Project Date */}
            <div className="mb-4">
              <span className="font-mono text-[10px] text-ink-muted tracking-[0.2em] uppercase">
                {project.date}
              </span>
            </div>

            {/* Project Description */}
            <p className="font-body text-ink-dim text-sm leading-relaxed mb-6 line-clamp-4">
              {project.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="relative z-10 space-y-4">
            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
                <span key={tech} className="tag-pill text-[11px]">
                  {tech}
                </span>
              ))}
              {project.technologies.length > (isFeatured ? 6 : 4) && (
                <span className="tag-pill text-[11px]">
                  +{project.technologies.length - (isFeatured ? 6 : 4)}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-5 pt-4 border-t border-rule">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted hover:text-ink transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink hover:text-ink-dim transition-colors"
                >
                  Live demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard3D;

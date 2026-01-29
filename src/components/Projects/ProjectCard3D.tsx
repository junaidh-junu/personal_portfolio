import { motion } from 'framer-motion';
import { Project } from '../../types';

interface ProjectCard3DProps {
  project: Project;
  index: number;
  isFocused: boolean;
}

const ProjectCard3D = ({ project, index, isFocused }: ProjectCard3DProps) => {
  const isFeatured = project.id === '12'; // ReadmeForger is featured

  return (
    <motion.div
      className={`relative flex-shrink-0 transition-all duration-500 ${
        isFeatured ? 'w-[600px]' : 'w-[400px]'
      } h-[500px] ${isFocused ? 'z-10' : 'z-0'}`}
      style={{
        perspective: '1000px',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: isFocused ? 1 : 0.85,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <motion.div
        className="w-full h-full relative"
        whileHover={{
          rotateY: isFocused ? 5 : 0,
          rotateX: isFocused ? -5 : 0,
          z: isFocused ? 50 : 0,
          scale: isFocused ? 1.02 : 0.85,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card Background */}
        <div
          className={`w-full h-full rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden ${
            isFocused
              ? 'bg-gradient-to-br from-neutral-900/95 to-dark-surface/95 border-2 border-primary/30'
              : 'bg-gradient-to-br from-neutral-900/70 to-dark-surface/70 border border-neutral-700/30'
          } backdrop-blur-md transition-all duration-500`}
        >
          {/* Featured Badge */}
          {isFeatured && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-black text-xs font-heading font-bold"
            >
              FEATURED
            </motion.div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Project Icon */}
          <div className="relative z-10">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </motion.div>

            {/* Project Title */}
            <h3 className="text-2xl font-heading font-bold mb-3 text-white leading-tight">
              {project.title}
            </h3>

            {/* Project Date */}
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-heading font-medium">
                {project.date}
              </span>
            </div>

            {/* Project Description */}
            <p className="text-neutral-300 text-sm leading-relaxed mb-6 line-clamp-4">
              {project.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="relative z-10 space-y-4">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-800/80 text-neutral-300 text-xs rounded-lg border border-neutral-700/50 font-mono"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > (isFeatured ? 6 : 4) && (
                <span className="px-3 py-1 bg-neutral-800/80 text-neutral-400 text-xs rounded-lg font-mono">
                  +{project.technologies.length - (isFeatured ? 6 : 4)}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-800/50 hover:bg-primary/20 border border-neutral-700 hover:border-primary/50 rounded-lg text-sm text-neutral-300 hover:text-primary transition-all duration-300 font-heading"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-black rounded-lg text-sm font-heading font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>

          {/* 3D Depth Shadow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard3D;

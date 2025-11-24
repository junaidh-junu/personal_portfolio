import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryColors: Record<string, string> = {
    'Languages': 'from-neutral-400 to-neutral-500',
    'Frameworks': 'from-neutral-400 to-neutral-500',
    'Tools': 'from-neutral-400 to-neutral-500',
    'Cloud & DevOps': 'from-neutral-400 to-neutral-500',
    'Project Management': 'from-neutral-400 to-neutral-500',
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-dark-surface/30">

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="text-neutral-400 max-w-2xl mx-auto mt-6 text-lg">
            A comprehensive toolkit of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">
                  {category}
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="card-elegant card-hover px-5 py-3 rounded-lg cursor-pointer group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 text-neutral-200 font-medium group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <div className="card-elegant p-8 md:p-10 rounded-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center gradient-text">Core Competencies</h3>
            <p className="text-neutral-400 text-center mb-8">Proficiency levels across key areas</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: 'Mobile Development', level: 95 },
                { name: 'Web Development', level: 90 },
                { name: 'Backend Development', level: 85 },
                { name: 'DevOps & Cloud', level: 80 },
                { name: 'UI/UX Design', level: 85 },
                { name: 'Project Management', level: 90 },
              ].map((competency, index) => (
                <motion.div
                  key={competency.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between mb-3">
                    <span className="text-neutral-300 font-semibold group-hover:text-white transition-colors">{competency.name}</span>
                    <span className="text-white font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{competency.level}%</span>
                  </div>
                  <div className="h-3 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${competency.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 1 + index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

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
    'Languages': 'from-primary to-primary-dark',
    'Frameworks': 'from-accent-purple to-accent-pink',
    'Tools': 'from-accent-blue to-primary',
    'Cloud & DevOps': 'from-accent-pink to-accent-purple',
    'Project Management': 'from-primary-dark to-accent-blue',
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-dark-surface/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl top-1/4 left-0" />
        <div className="absolute w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl bottom-1/4 right-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent inline-block">
                  {category}
                </h3>
                <div className={`h-1 w-20 bg-gradient-to-r ${categoryColors[category]} rounded-full`} />
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass glass-hover px-5 py-3 rounded-xl cursor-pointer group"
                  >
                    <span className="text-white font-medium group-hover:text-primary transition-colors duration-300">
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
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-6">
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
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{competency.name}</span>
                    <span className="text-primary font-semibold">{competency.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${competency.level}%` } : {}}
                      transition={{ duration: 1, delay: 1 + index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary via-accent-purple to-accent-pink rounded-full glow-effect"
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

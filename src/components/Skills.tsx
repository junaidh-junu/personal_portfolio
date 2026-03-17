import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolio';
import WordReveal from './WordReveal';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-dark-border" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-wrap items-baseline justify-center gap-[0.25em] mb-6">
            <WordReveal text="Technical" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory" />
            <WordReveal text="Skills" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic" delay={0.14} />
          </div>
          <div className="gold-rule w-16" />
          <p className="font-body text-ivory-muted max-w-xl mx-auto mt-6 text-base font-light">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto space-y-14">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category Title */}
              <div className="mb-6">
                <h3 className="font-display text-xl md:text-2xl text-ivory mb-3">
                  {category}
                </h3>
                <div className="gold-rule-left w-12" />
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5">
                {categorySkills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.08 + skillIndex * 0.03 }}
                    className="px-4 py-2 border border-dark-border text-ivory-dim font-body text-sm font-light tracking-wide hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

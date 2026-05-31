import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { IconType } from 'react-icons';
import {
  SiDart, SiJavascript, SiTypescript, SiPython, SiKotlin, SiCplusplus,
  SiHtml5, SiCss3,
  SiFlutter, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiDjango,
  SiFlask, SiMongodb, SiRedux, SiJetpackcompose,
  SiGit, SiGithub, SiFirebase, SiFigma, SiXcode, SiSqlite, SiPostgresql,
  SiMysql, SiPrisma, SiSupabase, SiAppwrite, SiAndroidstudio, SiPostman, SiClickup,
  SiCloudflare, SiDigitalocean, SiDocker, SiGooglecloud, SiVercel, SiNetlify,
  SiGithubactions,
  SiJira, SiTrello, SiNotion, SiSlack,
  SiScikitlearn, SiPandas, SiNumpy,
} from 'react-icons/si';
import { skills } from '../data/portfolio';
import WordReveal from './WordReveal';

const iconMap: Record<string, IconType> = {
  // Languages
  'Dart': SiDart,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'Kotlin': SiKotlin,
  'C++': SiCplusplus,
  'HTML5': SiHtml5,
  'CSS': SiCss3,
  // Frameworks
  'Flutter': SiFlutter,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Django': SiDjango,
  'Flask': SiFlask,
  'MongoDB': SiMongodb,
  'Redux': SiRedux,
  'Jetpack Compose': SiJetpackcompose,
  // Tools
  'Git': SiGit,
  'GitHub': SiGithub,
  'Firebase': SiFirebase,
  'Figma': SiFigma,
  'Xcode': SiXcode,
  'SQLite': SiSqlite,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Prisma': SiPrisma,
  'Supabase': SiSupabase,
  'Appwrite': SiAppwrite,
  'Android Studio': SiAndroidstudio,
  'Postman': SiPostman,
  'Redux Toolkit': SiRedux,
  'ClickUp': SiClickup,
  // Cloud & DevOps
  'Cloudflare': SiCloudflare,
  'DigitalOcean': SiDigitalocean,
  'Docker': SiDocker,
  'Google Cloud Platform': SiGooglecloud,
  'Vercel': SiVercel,
  'Netlify': SiNetlify,
  'GitHub Actions': SiGithubactions,
  // Project Management
  'Jira': SiJira,
  'Trello': SiTrello,
  'Notion': SiNotion,
  'Slack': SiSlack,
  // AI/ML
  'scikit-learn': SiScikitlearn,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
};

const Skills = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.entries(groupedSkills);
  const totalSkills = skills.length;

  return (
    <section id="skills" className="py-24 md:py-32 relative">
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
            04 — Skills
          </span>
          <div className="section-kicker-line" />
          <span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase whitespace-nowrap">
            {categories.length} categories · {totalSkills} skills
          </span>
        </motion.div>

        {/* Section heading */}
        <div className="mb-4">
          <div className="inline-flex flex-wrap items-baseline gap-[0.25em]">
            <WordReveal text="Technical" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory" />
            <WordReveal text="Skills" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic" delay={0.14} />
          </div>
          <div className="gold-rule-left w-14 mt-4" />
        </div>

        {/* Category table */}
        <div className="mt-16 grid gap-5">
          {categories.map(([category, categorySkills], i) => (
            <CategoryRow
              key={category}
              category={category}
              categorySkills={categorySkills}
              index={i}
            />
          ))}
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

interface CategoryRowProps {
  category: string;
  categorySkills: typeof skills;
  index: number;
}

const CategoryRow = ({ category, categorySkills, index }: CategoryRowProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="soft-panel group p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-8 gap-y-3 items-start">
        {/* Category name */}
        <span className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase pt-1">
          {category}
        </span>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2.5">
          {categorySkills.map((skill) => {
            const Icon = iconMap[skill.name];
            return (
              <span
                key={skill.name}
                className="tag-pill gap-1.5 cursor-default group/pill"
              >
                {Icon && (
                  <Icon className="w-4 h-4 text-ivory-muted group-hover/pill:text-accent transition-colors duration-300 flex-shrink-0" />
                )}
                {skill.name}
                {skill.level !== undefined && (
                  <span className="flex items-center gap-0.5 ml-1 opacity-0 group-hover/pill:opacity-100 transition-opacity duration-200">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1 h-1 rounded-full ${i < skill.level! ? 'bg-accent' : 'bg-dark-border'}`}
                      />
                    ))}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

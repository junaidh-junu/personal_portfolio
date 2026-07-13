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

const iconMap: Record<string, IconType> = {
  'Dart': SiDart, 'JavaScript': SiJavascript, 'TypeScript': SiTypescript,
  'Python': SiPython, 'Kotlin': SiKotlin, 'C++': SiCplusplus,
  'HTML5': SiHtml5, 'CSS': SiCss3,
  'Flutter': SiFlutter, 'React': SiReact, 'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs, 'Express.js': SiExpress, 'Django': SiDjango,
  'Flask': SiFlask, 'MongoDB': SiMongodb, 'Redux': SiRedux,
  'Jetpack Compose': SiJetpackcompose,
  'Git': SiGit, 'GitHub': SiGithub, 'Firebase': SiFirebase, 'Figma': SiFigma,
  'Xcode': SiXcode, 'SQLite': SiSqlite, 'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql, 'Prisma': SiPrisma, 'Supabase': SiSupabase,
  'Appwrite': SiAppwrite, 'Android Studio': SiAndroidstudio, 'Postman': SiPostman,
  'Redux Toolkit': SiRedux, 'ClickUp': SiClickup,
  'Cloudflare': SiCloudflare, 'DigitalOcean': SiDigitalocean, 'Docker': SiDocker,
  'Google Cloud Platform': SiGooglecloud, 'Vercel': SiVercel, 'Netlify': SiNetlify,
  'GitHub Actions': SiGithubactions,
  'Jira': SiJira, 'Trello': SiTrello, 'Notion': SiNotion, 'Slack': SiSlack,
  'scikit-learn': SiScikitlearn, 'Pandas': SiPandas, 'NumPy': SiNumpy,
};

const Skills = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.entries(groupedSkills);

  return (
    <section id="skills" className="section-block">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-index">/ 05 Toolbox</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mt-4 lowercase">
            everyday's toolbox
          </h2>
          <div className="hairline mt-6" />
        </motion.div>

        <div className="grid gap-4">
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
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="work-card p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-8 gap-y-3">
        <span className="font-mono text-[10px] text-ink-muted tracking-[0.25em] uppercase">
          {category}
        </span>
        <div className="flex flex-wrap gap-2">
          {categorySkills.map((skill) => {
            const Icon = iconMap[skill.name];
            return (
              <span key={skill.name} className="tag-pill gap-1.5">
                {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { contactInfo } from '../data/portfolio';
import WordReveal from './WordReveal';

function parseStatValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { number: 0, prefix: '', suffix: value };
  return { number: parseInt(match[2], 10), prefix: match[1], suffix: match[3] };
}

interface StatCardProps {
  stat: { label: string; value: string };
  index: number;
  isActive: boolean;
}

const StatCard = ({ stat, index, isActive }: StatCardProps) => {
  const { number, prefix, suffix } = parseStatValue(stat.value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const duration = 1200;
    const startTime = performance.now();
    let rafId: number;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * number));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isActive, number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.07 }}
      className="text-center md:text-left group"
    >
      <div className="font-display text-5xl md:text-6xl text-ivory mb-2 group-hover:text-accent transition-colors duration-300">
        {prefix}{count}{suffix}
      </div>
      <div className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-10% 0px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-5% 0px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-5% 0px' });

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Publications', value: '1' },
  ];

  const services = [
    {
      num: '01',
      title: 'Mobile Development',
      description: 'Cross-platform apps with Flutter and Kotlin, focusing on performance and seamless user experience across iOS and Android.',
    },
    {
      num: '02',
      title: 'Web Development',
      description: 'Responsive web applications using MERN stack, Next.js, and modern frameworks — from admin dashboards to public platforms.',
    },
    {
      num: '03',
      title: 'DevOps & Cloud',
      description: 'Server management, DNS configuration, CI/CD pipelines, and cloud infrastructure on DigitalOcean and Vercel.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="section-shell">
          <div className="section-content">

            {/* Section label bar */}
            <motion.div
              ref={sectionRef}
              initial={{ opacity: 0, y: -8 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 mb-16 md:mb-20"
            >
              <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase whitespace-nowrap">
                01 — About
              </span>
              <div className="section-kicker-line" />
              <span className="font-mono text-[10px] text-ivory-faint tracking-[0.2em] uppercase whitespace-nowrap hidden sm:inline">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Content */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 28 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl flex flex-col justify-center"
            >
                {/* Heading */}
                <div className="mb-10">
                  <div className="inline-flex flex-wrap items-baseline gap-[0.25em] mb-5">
                    <WordReveal
                      text="About"
                      as="h2"
                      className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory"
                    />
                    <WordReveal
                      text="Me"
                      as="h2"
                      className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic"
                      delay={0.14}
                    />
                  </div>
                  <div className="gold-rule-left w-14" />
                </div>

                {/* Quote — restored left border */}
                <blockquote className="border-l border-accent/50 pl-6 mb-10">
                  <p className="font-display text-xl md:text-2xl italic text-ivory/90 leading-snug">
                    "Shipping production software that scales — that's the work."
                  </p>
                </blockquote>

                {/* Bio */}
                <div className="space-y-5 font-body text-ivory-dim text-[15px] md:text-base leading-relaxed font-light mb-12">
                  <p>
                    <span className="text-ivory font-normal">Junaidh Haneefa</span> is a Full-Stack and Mobile Developer with 1.5+ years of production experience shipping scalable web and cross-platform mobile apps — including{' '}
                    <span className="text-ivory font-normal">10+ MERN web applications and 13 Flutter apps</span> serving 30,000+ active users.
                  </p>
                  <p>
                    Currently pursuing a{' '}
                    <span className="text-ivory font-normal">Master's in Computing Science</span> at Griffith College Dublin. Previously led a 12-member team at D4DX Innovations, shipping 20+ web and 5+ mobile applications.
                  </p>
                  <p>
                    Deep experience with{' '}
                    <span className="text-ivory font-normal">DigitalOcean, GitHub Actions, Docker, Supabase, and Next.js</span> — end-to-end product delivery from architecture through cloud infrastructure.
                  </p>
                </div>

                {/* Contact strip */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <div className="flex items-center gap-2.5 font-body text-sm text-ivory-muted">
                    <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[13px]">{contactInfo.email}</span>
                  </div>
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-accent/40" />
                  <div className="flex items-center gap-2.5 font-body text-sm text-ivory-muted">
                    <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[13px]">Dublin, Ireland</span>
                  </div>
                </div>
            </motion.div>

          </div>
        </div>

        {/* Stats — wrapped in soft-panel */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 16 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-28"
        >
          <div className="soft-panel p-8 md:p-12">
            <div className="gold-rule mb-10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-0">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} isActive={statsInView} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 16 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-28"
        >
          <div className="flex items-center gap-5 mb-14">
            <h3 className="font-display text-2xl md:text-3xl text-accent italic whitespace-nowrap">
              What I Do
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-dark-border to-transparent" />
          </div>

          <div className="space-y-12 md:space-y-14">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="group flex gap-4 md:gap-10"
              >
                <span className="font-display text-4xl md:text-5xl leading-none text-accent/25 select-none pt-0.5">
                  {service.num}
                </span>
                <div className="flex-1 pt-1">
                  <h5 className="font-display text-xl md:text-2xl text-ivory mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h5>
                  <p className="font-body text-sm md:text-[15px] text-ivory-muted leading-relaxed font-light max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

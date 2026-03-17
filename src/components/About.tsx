import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { contactInfo } from '../data/portfolio';
import WordReveal from './WordReveal';

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
          <div className="h-px flex-1 bg-dark-border" />
          <span className="font-mono text-[10px] text-ivory-faint tracking-[0.2em] uppercase whitespace-nowrap">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Portrait + Content split */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-0 items-start">

          {/* LEFT — portrait */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:pr-16"
          >
            <div className="relative">
              {/* Offset shadow box */}
              <div
                className="absolute inset-0 border border-dark-border-light"
                style={{ transform: 'translate(8px, 8px)' }}
              />

              {/* Portrait container */}
              <div className="relative aspect-[3/4] lg:h-[580px] lg:aspect-auto overflow-hidden photo-frame border border-dark-border">
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-accent z-10 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-accent z-10 pointer-events-none" />

                <img
                  src="/images/Gemini_Generated_Image_rj4n1yrj4n1yrj4n.png"
                  alt="Junaidh Haneefa"
                  className="w-full h-full object-cover object-center"
                />

                {/* Right-edge fade into bg */}
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dark-bg/30 to-transparent pointer-events-none" />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-dark-bg/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Name card */}
            <div className="mt-8 border-t border-dark-border pt-5">
              <p className="font-display text-2xl text-ivory">Junaidh Haneefa</p>
              <p className="font-mono text-[10px] text-accent tracking-[0.25em] uppercase mt-1.5">
                Full Stack Developer · Dublin, Ireland
              </p>
              <div className="gold-rule-left w-10 mt-4" />
            </div>
          </motion.div>

          {/* RIGHT — content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 28 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-16 flex flex-col justify-center"
          >
            {/* Heading */}
            <div className="mb-8">
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

            {/* Quote */}
            <blockquote className="border-l-2 border-accent pl-6 mb-8">
              <p className="font-display text-xl md:text-2xl italic text-ivory leading-snug">
                "Shipping production software that scales — that's the work."
              </p>
            </blockquote>

            {/* Bio */}
            <div className="space-y-4 font-body text-ivory-dim text-[15px] leading-relaxed font-light mb-10">
              <p>
                <span className="text-ivory font-normal">Junaidh Haneefa</span> is a results-driven Full-Stack Developer with 2+ years of production experience delivering scalable MERN-stack web applications, Next.js platforms, and cross-platform mobile apps serving{' '}
                <span className="text-ivory font-normal">30,000+ users</span>.
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
            <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2.5 font-body text-sm text-ivory-muted">
                <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[13px]">{contactInfo.email}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-dark-border" />
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

        {/* Stats divider bar */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 16 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 border-y border-dark-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-dark-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
                className="text-center py-10 px-6 group hover:bg-dark-surface transition-colors duration-300"
              >
                <div className="font-display text-5xl md:text-6xl text-ivory mb-2 group-hover:text-accent transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services — numbered columns */}
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 16 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          {/* Sub-heading */}
          <div className="flex items-center gap-5 mb-10">
            <h3 className="font-display text-2xl md:text-3xl text-accent italic whitespace-nowrap">
              What I Do
            </h3>
            <div className="h-px flex-1 bg-dark-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-dark-border">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className={[
                  'p-8 group hover:bg-dark-surface transition-colors duration-300 border-b border-dark-border',
                  i > 0 ? 'md:border-l border-dark-border' : '',
                ].join(' ')}
              >
                <div className="font-mono text-[10px] text-accent/60 tracking-[0.3em] mb-5">
                  {service.num}
                </div>
                <h5 className="font-body text-sm font-medium text-ivory mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h5>
                <p className="font-body text-xs text-ivory-muted leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

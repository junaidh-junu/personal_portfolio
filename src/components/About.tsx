import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { contactInfo } from '../data/portfolio';
import WordReveal from './WordReveal';

const About = () => {
  const bioRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const bioInView = useInView(bioRef, { once: true, margin: '-15% 0px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-15% 0px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-15% 0px' });
  const contactInView = useInView(contactRef, { once: true, margin: '-15% 0px' });

  const fadeUp = (inView: boolean, delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Publications', value: '1' },
  ];

  const services = [
    {
      title: 'Mobile Development',
      description: 'Cross-platform apps with Flutter and Kotlin, focusing on performance and user experience.',
    },
    {
      title: 'Web Development',
      description: 'Responsive web applications using MERN stack, Django, and modern frameworks.',
    },
    {
      title: 'DevOps & Cloud',
      description: 'Server management, DNS configuration, CI/CD pipelines, and cloud infrastructure.',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Centered section heading */}
        <div className="text-center mb-20">
          <div className="inline-flex flex-wrap items-baseline justify-center gap-[0.25em] mb-6">
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
          <div className="gold-rule w-16" />
          <p className="font-body text-ivory-muted mt-6 max-w-xl mx-auto text-base font-light">
            My journey, expertise, and what drives me forward
          </p>
        </div>

        {/* Sticky grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 items-start">

          {/* LEFT — sticky photo column (desktop only) */}
          <div className="hidden lg:block sticky top-28 self-start">
            <div className="relative w-full aspect-[3/4] mb-6">
              <div className="absolute inset-0 border border-dark-border-light translate-x-2 translate-y-2" />
              <div className="photo-frame relative w-full h-full border border-accent/20">
                <img
                  src="/images/profile.png"
                  alt="Junaidh Haneefa"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="border-t border-dark-border pt-5">
              <p className="font-display text-2xl text-ivory mb-1">Junaidh Haneefa</p>
              <p className="font-body text-xs text-accent tracking-widest uppercase">Full Stack Developer</p>
              <div className="gold-rule-left w-12 mt-4" />
            </div>
          </div>

          {/* RIGHT — scrolling content */}
          <div className="space-y-20">

            {/* Mobile avatar (shown only below lg) */}
            <div className="flex items-center gap-5 lg:hidden mb-4">
              <div className="w-20 h-20 rounded-full border border-accent/30 overflow-hidden flex-shrink-0">
                <img
                  src="/images/profile.png"
                  alt="Junaidh Haneefa"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-display text-xl text-ivory">Junaidh Haneefa</p>
                <p className="font-body text-xs text-accent tracking-widest uppercase">Full Stack Developer</p>
              </div>
            </div>

            {/* Chapter 1 — Bio */}
            <motion.div ref={bioRef} {...fadeUp(bioInView)}>
              <h3 className="font-display text-2xl md:text-3xl text-accent italic mb-8">The Work</h3>
              <div className="space-y-5 font-body text-ivory-dim text-[15px] leading-relaxed font-light">
                <p>
                  <span className="text-ivory font-normal">Junaidh Haneefa</span> is a results-driven Full-Stack Developer with 1.5+ years of production experience delivering scalable MERN-stack web applications, Next.js platforms, and cross-platform mobile apps serving 30,000+ users.
                </p>
                <p>
                  Currently pursuing a <span className="text-ivory font-normal">Master's in Computing Science</span> at Griffith College Dublin, with specialization in software engineering, cloud technologies, and emerging areas including <span className="text-ivory font-normal">Next.js, Supabase, and AI/ML tooling</span>.
                </p>
                <p>
                  As <span className="text-ivory font-normal">Team Lead at D4DX Innovations</span>, directed a 12-member cross-functional team delivering 20+ web applications and 5+ mobile apps — spanning full-stack development, cloud infrastructure management, and CI/CD automation.
                </p>
                <p>
                  Beyond core development, experienced in <span className="text-ivory font-normal">DigitalOcean, GitHub Actions, Docker, and server infrastructure</span>, with a focus on end-to-end product delivery from architecture to production.
                </p>
              </div>
              <blockquote className="border-l-2 border-accent pl-6 my-8">
                <p className="font-display text-2xl italic text-ivory">
                  "Shipping production software that scales — that's the work."
                </p>
              </blockquote>
            </motion.div>

            {/* Chapter 2 — Stats */}
            <motion.div ref={statsRef} {...fadeUp(statsInView)}>
              <h3 className="font-display text-2xl md:text-3xl text-accent italic mb-8">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
                    className="card card-hover p-6 text-center"
                  >
                    <div className="font-display text-4xl md:text-5xl text-ivory mb-2">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-ivory-muted tracking-wide uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Chapter 3 — Services */}
            <motion.div ref={servicesRef} {...fadeUp(servicesInView)}>
              <h3 className="font-display text-2xl md:text-3xl text-accent italic mb-8">What I Do</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                    className="card card-hover p-5 group"
                  >
                    <h5 className="font-body text-sm font-medium text-ivory mb-1.5 group-hover:text-accent transition-colors duration-300">{service.title}</h5>
                    <p className="font-body text-xs text-ivory-muted leading-relaxed font-light">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Chapter 4 — Contact */}
            <motion.div ref={contactRef} {...fadeUp(contactInView)}>
              <div className="space-y-3 border-t border-dark-border pt-8">
                <div className="flex items-center gap-3 font-body text-sm text-ivory-muted">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 font-body text-sm text-ivory-muted">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

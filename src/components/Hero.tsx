import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { contactInfo } from '../data/portfolio';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -60]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle warm ambient glow */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201, 169, 110, 1), transparent)',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        style={{ opacity, y }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-ivory-muted">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-normal mb-6 leading-[1.05] tracking-tight"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span
              className="block text-ivory"
              itemProp="name"
              aria-label="Junaidh Haneefa - Full Stack Developer"
            >
              Junaidh Haneefa Muhammedhaneefa
            </span>
          </motion.h1>

          {/* Gold rule */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="w-24 h-px bg-accent" />
          </motion.div>

          {/* Title */}
          <motion.div variants={item} className="mb-6">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-accent font-light italic">
              Full Stack Developer
            </h2>
          </motion.div>

          {/* Subtitles */}
          <motion.div variants={item} className="mb-10">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-sm text-ivory-muted tracking-wide">
              <span>MERN Stack & Next.js</span>
              <span className="text-ivory-faint">|</span>
              <span>Flutter & Kotlin</span>
              <span className="text-ivory-faint">|</span>
              <span>MSc Computing Science</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="font-body text-ivory-dim max-w-2xl mx-auto mb-14 leading-relaxed text-base font-light"
          >
            Shipping full-stack web applications and cross-platform mobile apps with a focus on clean architecture, scalable backends, and thoughtful design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-5 justify-center mb-16"
          >
            <a
              href="#contact"
              className="group px-8 py-3.5 bg-accent text-dark-bg font-body font-medium text-sm tracking-wide hover:bg-accent-light transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 border border-dark-border-light text-ivory font-body text-sm tracking-wide hover:border-accent/40 hover:text-accent transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex gap-8 justify-center"
          >
            {[
              { href: contactInfo.github, icon: 'github', label: 'GitHub' },
              { href: contactInfo.linkedin, icon: 'linkedin', label: 'LinkedIn' },
              { href: `mailto:${contactInfo.email}`, icon: 'email', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-ivory-faint hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon === 'github' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )}
                {social.icon === 'email' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="font-body text-[10px] text-ivory-faint tracking-[0.3em] uppercase group-hover:text-accent transition-colors duration-300">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-ivory-faint to-transparent group-hover:from-accent transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

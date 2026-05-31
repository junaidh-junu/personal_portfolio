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
        staggerChildren: 0.14,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const socialLinks = [
    {
      href: contactInfo.github,
      label: 'GitHub',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      href: contactInfo.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      href: `mailto:${contactInfo.email}`,
      label: 'Email',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(201,169,110,0.13),transparent_34rem)]" />

      {/* ── Photo: right-side bleed (desktop) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
        className="absolute inset-y-8 right-6 w-[52%] lg:w-[48%] hidden md:block overflow-hidden rounded-[3rem] border border-white/[0.06] shadow-2xl shadow-black/35"
        style={{ opacity }}
      >
        <img
          src="/images/profile.png"
          alt="Junaidh Haneefa"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'grayscale(30%) brightness(0.75)' }}
        />
        {/* Fade from dark bg into photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-transparent to-dark-bg/20" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
      </motion.div>

      {/* ── Mobile photo: full-width background ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
        className="absolute inset-0 md:hidden"
        style={{ opacity }}
      >
        <img
          src="/images/profile.png"
          alt="Junaidh Haneefa"
          className="w-full h-full object-cover object-top"
          style={{ filter: 'grayscale(40%) brightness(0.5)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/70 to-dark-bg" />
      </motion.div>

      {/* ── Main text content ── */}
      <motion.div
        className="relative z-10 flex-1 flex items-center"
        style={{ y }}
      >
        <div className="container mx-auto px-5 sm:px-10 lg:px-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-2 font-mono text-[10px] tracking-[0.35em] uppercase text-accent">
                Portfolio · Dublin
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to work · Remote · GCC
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-display font-normal leading-[0.96] tracking-tight mb-7 text-ivory"
              style={{ fontSize: 'clamp(2rem, 9vw, 8.6rem)' }}
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">Junaidh Haneefa</span>
            </motion.h1>

            {/* Role / description */}
            <motion.p
              variants={item}
              className="font-body text-base sm:text-lg text-ivory-dim leading-relaxed font-light mb-10 max-w-xl"
            >
              Full Stack Developer · MERN Stack & Next.js · Flutter & Kotlin · MSc Computing Science
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="pill-button-filled"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="pill-button text-ivory"
              >
                View Projects
              </a>
              <a
                href="/Junaidh_CV_Dublin_ATS_v2.pdf"
                download="Junaidh_Haneefa_CV.pdf"
                className="pill-button inline-flex items-center gap-2 text-ivory"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom social bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-4 pb-4"
        style={{ opacity }}
      >
        <div className="mx-auto flex max-w-4xl rounded-full border border-white/[0.06] bg-white/[0.025] p-1 backdrop-blur-sm">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={social.label}
              className="flex-1 flex items-center justify-center gap-3 rounded-full py-3 sm:py-4 text-ivory-muted hover:text-accent hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <span className="text-accent group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </span>
              <span className="font-body text-xs tracking-[0.15em] uppercase">{social.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

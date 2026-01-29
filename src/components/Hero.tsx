import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { contactInfo } from '../data/portfolio';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();

  // Scroll-based transformations for parallax
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return; // Disable on mobile/tablet

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Parallax Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"
        style={{
          x: useMotionValue(mousePosition.x * 5),
          y: useMotionValue(mousePosition.y * 5),
        }}
      />

      {/* Layer 1 - Slowest */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,245,255,0.15),transparent_50%)]"
        style={{
          x: useMotionValue(mousePosition.x * 15),
          y: useMotionValue(mousePosition.y * 15),
        }}
      />

      {/* Layer 2 - Medium */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,128,0.12),transparent_50%)]"
        style={{
          x: useMotionValue(mousePosition.x * 25),
          y: useMotionValue(mousePosition.y * 25),
        }}
      />

      {/* Layer 3 - Fastest */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,47,247,0.1),transparent_60%)]"
        style={{
          x: useMotionValue(mousePosition.x * 35),
          y: useMotionValue(mousePosition.y * 35),
        }}
      />

      {/* Animated Grid Pattern with parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          x: useMotionValue(mousePosition.x * 10),
          y: useMotionValue(mousePosition.y * 10),
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,245,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity, scale, y }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-block px-5 py-2 bg-neutral-900/60 backdrop-blur-md border border-primary/20 rounded-full text-primary text-sm font-heading font-medium tracking-wider uppercase">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name - Using Syne font */}
          <motion.h1
            variants={item}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black mb-8 leading-none"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span
              className="block bg-gradient-to-r from-white via-primary/90 to-white bg-clip-text text-transparent"
              itemProp="name"
              aria-label="Junaidh Haneefa - Full Stack Developer"
              style={{
                transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              Junaidh Haneefa
            </span>
          </motion.h1>

          {/* Title with gradient accent */}
          <motion.div variants={item} className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-accent-purple bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base sm:text-lg text-neutral-300 font-heading">
              <span>Flutter & Kotlin Developer</span>
              <span className="text-primary/50">•</span>
              <span>Web Developer</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base text-neutral-400 font-heading mt-3">
              <span>Domain & DNS Specialist</span>
              <span className="text-primary/30">•</span>
              <span>CI/CD Pipeline Monitor</span>
              <span className="text-primary/30">•</span>
              <span>MSc Computing Science</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-neutral-300 max-w-3xl mx-auto mb-14 leading-relaxed text-base sm:text-lg"
          >
            Passionate about building cross-platform mobile applications and scalable web solutions.
            Specializing in <span className="text-primary font-semibold">Flutter</span>, <span className="text-accent font-semibold">MERN stack</span>, and modern development practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-5 justify-center mb-20"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-gradient-to-r from-primary to-accent text-black font-heading font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden text-lg"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-primary/50 hover:border-primary rounded-xl font-heading font-bold transition-all duration-300 hover:bg-primary/10 backdrop-blur-sm text-lg"
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex gap-6 justify-center"
          >
            {[
              { href: contactInfo.github, icon: 'github', label: 'GitHub' },
              { href: contactInfo.linkedin, icon: 'linkedin', label: 'LinkedIn' },
              { href: `mailto:${contactInfo.email}`, icon: 'email', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="group w-14 h-14 flex items-center justify-center rounded-full bg-neutral-900/60 backdrop-blur-md border-2 border-neutral-700/50 text-neutral-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon === 'github' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )}
                {social.icon === 'email' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs font-heading text-neutral-400 group-hover:text-primary transition-colors tracking-widest uppercase">Explore</span>
          <div className="w-7 h-12 border-2 border-primary/30 group-hover:border-primary rounded-full flex justify-center transition-colors">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

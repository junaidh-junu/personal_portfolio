import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/portfolio';
import ProjectCard3D from './ProjectCard3D';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !containerRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const slider = sliderRef.current;

    // Calculate total scroll width
    const getScrollAmount = () => {
      const sliderWidth = slider.scrollWidth;
      return -(sliderWidth - window.innerWidth);
    };

    // Create horizontal scroll animation
    const tween = gsap.to(slider, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${slider.scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Calculate which card is in focus based on scroll progress
          const progress = self.progress;
          const totalCards = projects.length;
          const cardIndex = Math.round(progress * (totalCards - 1));
          setFocusedIndex(cardIndex);
        },
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  // Mobile/Tablet: Vertical grid fallback
  if (isMobile) {
    return (
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
              Featured <span className="bg-gradient-to-r from-primary via-accent to-accent-purple bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto mb-6 rounded-full" />
            <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-heading">
              A collection of {projects.length} projects showcasing mobile and web development expertise
            </p>
          </motion.div>

          {/* Vertical Grid */}
          <div className="max-w-4xl mx-auto space-y-6">
            {projects.map((project, index) => (
              <ProjectCard3D
                key={project.id}
                project={project}
                index={index}
                isFocused={true}
              />
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/junaidh-junu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-black rounded-xl font-heading font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
            >
              <span>View More on GitHub</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop: Horizontal scroll carousel
  return (
    <section ref={containerRef} id="projects" className="relative overflow-hidden h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg" />

      {/* Section Title - Fixed at top */}
      <div className="absolute top-20 left-0 right-0 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-7xl font-display font-black mb-4">
            Featured <span className="bg-gradient-to-r from-primary via-accent to-accent-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto mb-4 rounded-full" />
          <p className="text-neutral-300 text-lg font-heading">
            Scroll to explore {projects.length} projects
          </p>
        </motion.div>
      </div>

      {/* Horizontal Slider */}
      <div
        ref={sliderRef}
        className="absolute top-1/2 left-0 flex items-center gap-8 px-[50vw]"
        style={{ transform: 'translateY(-50%)' }}
      >
        {projects.map((project, index) => (
          <ProjectCard3D
            key={project.id}
            project={project}
            index={index}
            isFocused={focusedIndex === index}
          />
        ))}
      </div>

      {/* Progress Dots - Fixed at bottom */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {projects.map((_, index) => (
          <motion.div
            key={index}
            className={`rounded-full transition-all duration-300 ${
              focusedIndex === index
                ? 'w-10 h-2 bg-gradient-to-r from-primary to-accent'
                : 'w-2 h-2 bg-neutral-600'
            }`}
            animate={{
              scale: focusedIndex === index ? 1.2 : 1,
            }}
          />
        ))}
      </div>

      {/* Scroll Hint - Only visible at start */}
      {focusedIndex === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-32 right-12 z-20 flex items-center gap-3 text-neutral-400 font-heading text-sm"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* View More - Fixed at bottom right */}
      <div className="absolute bottom-20 right-12 z-20">
        <motion.a
          href="https://github.com/junaidh-junu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900/80 backdrop-blur-md border border-primary/30 hover:border-primary rounded-xl text-primary font-heading font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View GitHub</span>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectsCarousel;

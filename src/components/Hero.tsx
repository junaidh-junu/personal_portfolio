import { motion } from 'framer-motion';
import { featuredProject, contactInfo } from '../data/portfolio';

const Hero = () => {
  const projectLink = featuredProject.demo ?? featuredProject.github ?? '#projects';

  return (
    <section id="home" className="min-h-screen flex flex-col relative border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col pt-28 pb-12 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="status-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-status animate-pulse" />
              Open to work · Remote · GCC
            </span>
          </div>

          <h1
            className="brutal-hero text-ink mb-8"
            itemScope
            itemType="https://schema.org/Person"
          >
            <span itemProp="name">junaidh haneefa</span>
          </h1>

          <div className="hairline mb-8 max-w-4xl" />

          <p className="font-body text-base md:text-lg text-ink-dim max-w-2xl leading-relaxed mb-4">
            <span className="font-semibold text-ink">I am Junaidh Haneefa.</span>{' '}
            Full-stack and mobile developer building production software that scales — MERN, Next.js, Flutter, and cloud infrastructure.
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted mb-10">
            {contactInfo.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <a href="#contact" className="cta-primary">Say Hello</a>
            <a href="#projects" className="cta-ghost">View Works</a>
            <a
              href="/Junaidh_CV_Dublin_ATS_v2.pdf"
              download="Junaidh_Haneefa_CV.pdf"
              className="cta-ghost"
            >
              Resume
            </a>
          </div>

          <motion.a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="work-card block group max-w-4xl overflow-hidden"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-surface-elevated overflow-hidden">
              {featuredProject.image ? (
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint">
                    Featured project
                  </span>
                </div>
              )}
              <span className="absolute top-4 right-4 bg-canvas border border-ink px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-ink">
                New case ↗
              </span>
            </div>
            <div className="p-6 md:p-8 border-t border-rule">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted mb-2">
                Featured work · {featuredProject.date}
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-ink lowercase group-hover:text-accent transition-colors">
                {featuredProject.title}
              </h2>
              <p className="font-body text-sm text-ink-dim mt-3 max-w-2xl line-clamp-2">
                {featuredProject.description}
              </p>
            </div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex items-center gap-3"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted">
            Scroll to explore
          </span>
          <div className="h-px flex-1 max-w-24 bg-rule" />
          <svg className="w-4 h-4 text-ink-muted animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

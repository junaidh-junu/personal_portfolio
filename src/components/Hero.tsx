import { motion } from 'framer-motion';
import { siteStats } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="relative border-b border-rule overflow-hidden pt-28 md:pt-32 pb-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-start">
          {/* Text column — offset, not centered */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:col-start-1 lg:pt-8"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.1em] uppercase text-ink-faint">
              <span className="tag-pill !py-0.5 !text-[10px]">Open to work</span>
              <span>Remote · GCC</span>
            </div>

            <p className="font-mono text-xs tracking-[0.12em] uppercase text-accent mt-8 mb-3">
              Full-Stack &amp; Mobile Developer
            </p>

            <h1
              className="font-display text-[2.75rem] sm:text-6xl md:text-7xl text-ink leading-[0.98] max-w-2xl"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">
                I build{' '}
                <span className="doodle-underline text-accent italic">production</span>
                <br />
                software that scales.
              </span>
            </h1>

            <p className="font-body text-base md:text-lg text-ink-dim max-w-md leading-relaxed mt-8 lg:ml-10">
              MERN, Next.js, Flutter, and Kotlin — from admin dashboards and civic
              platforms to cross-platform mobile apps and the cloud infrastructure
              behind them.
            </p>

            <div className="flex flex-wrap gap-3 mt-9 lg:ml-10">
              <a href="#projects" className="cta-primary">View the work</a>
              <a href="#contact" className="cta-ghost">Get in touch</a>
              <a
                href="/Junaidh_CV_Dublin_ATS_v2.pdf"
                download="Junaidh_Haneefa_CV.pdf"
                className="cta-ghost"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* Photo column — angled orange panel, offset frame */}
          <motion.div
            initial={{ opacity: 0, rotate: -6, scale: 0.96 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8 relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none lg:mt-0"
          >
            <div className="absolute -inset-3 sm:-inset-4 bg-accent angled-panel rotate-2" />
            <div
              className="relative w-full border-2 border-ink bg-ink overflow-hidden rotate-[-2deg] aspect-[4/5]"
              style={{ boxShadow: '8px 8px 0 0 var(--color-ink)' }}
            >
              <img
                src="/images/profile.png"
                alt="Junaidh Haneefa"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.08]"
                style={{ objectPosition: 'center 18%' }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] tracking-[0.08em] uppercase text-canvas/85">
                <span>Kozhikode, India</span>
                <span className="font-medium text-canvas">JH · 2026</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-stretch justify-between gap-6 pt-8 border-t border-rule mt-16"
        >
          {siteStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-2xl md:text-3xl text-ink">{stat.value}</span>
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-faint">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { siteStats } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="relative border-b border-rule">
      <div className="grid lg:grid-cols-[1fr_460px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between px-6 sm:px-8 lg:pl-12 lg:pr-14 pt-28 pb-12 md:pt-32 lg:min-h-screen"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.1em] uppercase text-ink-faint">
            <span>Junaidh Haneefa</span>
            <span>Open to work · Remote · GCC</span>
          </div>

          <div className="mt-12 lg:mt-0">
            <p className="font-mono text-xs tracking-[0.12em] uppercase text-ink-dim mb-5">
              Full-Stack &amp; Mobile Developer
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.08] max-w-xl text-balance"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">I build production software that scales.</span>
            </h1>
            <p className="font-body text-base md:text-lg text-ink-dim max-w-lg leading-relaxed mt-7">
              MERN, Next.js, Flutter, and Kotlin — from admin dashboards and civic
              platforms to cross-platform mobile apps and the cloud infrastructure
              behind them.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
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
          </div>

          <div className="hidden lg:flex items-center justify-between pt-7 border-t border-rule mt-16">
            {siteStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-2xl text-ink">{stat.value}</span>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-faint">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative min-h-[420px] lg:min-h-screen bg-ink overflow-hidden"
        >
          <img
            src="/images/profile.png"
            alt="Junaidh Haneefa"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.08]"
            style={{ objectPosition: 'center 18%' }}
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] tracking-[0.08em] uppercase text-canvas/85">
            <span>Kozhikode, India</span>
            <span className="font-medium text-canvas">JH · 2026</span>
          </div>
        </motion.div>
      </div>

      <div className="flex lg:hidden items-stretch justify-between px-6 sm:px-8 py-7 border-t border-rule">
        {siteStats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-display text-xl text-ink">{stat.value}</span>
            <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-ink-faint">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

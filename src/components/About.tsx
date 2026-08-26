import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { contactInfo, expertiseAreas } from '../data/portfolio';

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const servicesRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-10% 0px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-5% 0px' });

  return (
    <section id="about" className="section-block">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: -8 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink">
            About me
          </h2>
          <div className="scribble-divider mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <blockquote className="mb-10">
              <p className="font-display font-medium text-2xl md:text-3xl text-ink leading-snug">
                Cut a 150MB app down to <span className="doodle-underline">60</span> — then went looking for the next problem worth solving.
              </p>
            </blockquote>

            <div className="space-y-5 font-body text-ink-dim text-[15px] leading-relaxed mb-10">
              <p>
                <span className="text-ink font-medium">Junaidh Haneefa</span> is a Full-Stack and Mobile Developer with 2+ years of production experience shipping scalable web and cross-platform mobile apps — including{' '}
                <span className="text-ink font-medium">10+ MERN web applications and 13 Flutter apps</span> serving 30,000+ active users.
              </p>
              <p>
                Currently pursuing a{' '}
                <span className="text-ink font-medium">Master's in Computing Science</span> at Griffith College Dublin. Previously led a 12-member team at D4DX Innovations, shipping 20+ web and 5+ mobile applications.
              </p>
              <p>
                Builds with{' '}
                <span className="text-ink font-medium">AI/ML where it matters</span> — production RAG chatbots and explainable geospatial models (XGBoost, SHAP) — alongside{' '}
                <span className="text-ink font-medium">DigitalOcean, GitHub Actions, Docker, Supabase, and Next.js</span> for end-to-end delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 font-mono text-[11px] tracking-[0.1em] uppercase text-ink-muted">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                {contactInfo.email}
              </a>
              <span className="hidden sm:inline text-ink-faint">·</span>
              <span>{contactInfo.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, rotate: -2 }}
            animate={contentInView ? { opacity: 1, scale: 1, rotate: -2 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="blob-shape overflow-hidden aspect-[3/4] border-2 border-ink">
              <img
                src="/images/profile.png"
                alt="Junaidh Haneefa"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, y: 16 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted mb-8">
            My expertise
          </h3>
          <div className="grid md:grid-cols-5 gap-6 md:gap-5">
            {expertiseAreas.map((area, i) => {
              const rotations = ['rotate-1', '-rotate-1', 'rotate-1.5', '-rotate-1.5'];
              const spans = ['md:col-span-3', 'md:col-span-2', 'md:col-span-2', 'md:col-span-3'];
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className={`expertise-card ${spans[i % spans.length]} ${rotations[i % rotations.length]} hover:rotate-0 transition-transform duration-300`}
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display text-2xl text-accent">{area.num}</span>
                    <h4 className="font-display text-lg text-ink">{area.title}</h4>
                  </div>
                  <p className="font-body text-sm text-ink-dim leading-relaxed max-w-md">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

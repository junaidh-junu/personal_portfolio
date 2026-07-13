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
          <span className="section-index">/ 03 About</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mt-4 lowercase">
            about me
          </h2>
          <div className="hairline mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <blockquote className="border-l-2 border-accent pl-6 mb-8">
              <p className="font-display text-xl md:text-2xl text-ink leading-snug lowercase">
                "Shipping production software that scales — that's the work."
              </p>
            </blockquote>

            <div className="space-y-5 font-body text-ink-dim text-[15px] leading-relaxed mb-10">
              <p>
                <span className="text-ink font-medium">Junaidh Haneefa</span> is a Full-Stack and Mobile Developer with 1.5+ years of production experience shipping scalable web and cross-platform mobile apps — including{' '}
                <span className="text-ink font-medium">10+ MERN web applications and 13 Flutter apps</span> serving 30,000+ active users.
              </p>
              <p>
                Currently pursuing a{' '}
                <span className="text-ink font-medium">Master's in Computing Science</span> at Griffith College Dublin. Previously led a 12-member team at D4DX Innovations, shipping 20+ web and 5+ mobile applications.
              </p>
              <p>
                Deep experience with{' '}
                <span className="text-ink font-medium">DigitalOcean, GitHub Actions, Docker, Supabase, and Next.js</span> — end-to-end product delivery from architecture through cloud infrastructure.
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
            initial={{ opacity: 0, scale: 0.98 }}
            animate={contentInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="work-card overflow-hidden aspect-[3/4]">
              <img
                src="/images/profile.png"
                alt="Junaidh Haneefa"
                className="w-full h-full object-cover object-top grayscale-[20%]"
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
          <div className="grid md:grid-cols-3 gap-4">
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 14 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="expertise-card"
              >
                <span className="font-display text-3xl text-accent/40">{area.num}</span>
                <h4 className="font-display text-lg text-ink mt-3 mb-3 lowercase">{area.title}</h4>
                <p className="font-body text-sm text-ink-dim leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { contactInfo } from '../data/portfolio';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Publications', value: '1' },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-ivory">
            About <span className="italic text-accent">Me</span>
          </h2>
          <div className="gold-rule w-16" />
          <p className="font-body text-ivory-muted mt-6 max-w-xl mx-auto text-base font-light">
            My journey, expertise, and what drives me forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Side - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display text-2xl md:text-3xl mb-8 text-ivory">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-5 font-body text-ivory-dim text-[15px] leading-relaxed font-light">
              <p>
                <span className="text-ivory font-normal">Junaidh Haneefa</span> is a passionate Flutter developer with a Bachelor's degree in Computer Science and hands-on experience building cross-platform mobile applications. Driven by a desire to create innovative, scalable solutions using Flutter, Dart, and modern development practices.
              </p>
              <p>
                Currently pursuing a <span className="text-ivory font-normal">Master's in Computer Science</span> at Griffith College Dublin, with specialization in mobile and web development, including <span className="text-ivory font-normal">Flutter, Kotlin, MERN stack, and Django</span>.
              </p>
              <p>
                As a <span className="text-ivory font-normal">Team Lead at D4DX Innovations</span>, led the development of multiple cross-platform applications, managed project timelines, and mentored developers while maintaining high code quality standards.
              </p>
              <p>
                Beyond development, experienced in <span className="text-ivory font-normal">server management, DNS configuration, CI/CD pipelines</span>, and project management tools.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-3 border-t border-dark-border pt-8">
              <div className="flex items-center gap-3 font-body text-sm text-ivory-muted">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 font-body text-sm text-ivory-muted">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats & Services */}
          <div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-6 mb-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                  className="card card-hover p-6 text-center"
                >
                  <div className="font-display text-4xl md:text-5xl text-ivory mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-ivory-muted tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* What I Do */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h4 className="font-display text-xl text-accent italic mb-6">What I Do</h4>
              {[
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
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                  className="card card-hover p-5 group"
                >
                  <h5 className="font-body text-sm font-medium text-ivory mb-1.5 group-hover:text-accent transition-colors duration-300">{service.title}</h5>
                  <p className="font-body text-xs text-ivory-muted leading-relaxed font-light">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

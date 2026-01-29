import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { contactInfo } from '../data/portfolio';

const About = () => {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-based transformations for parallax
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;

      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set((clientX - centerX) / centerX);
      mouseY.set((clientY - centerY) / centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Publications', value: '1' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"
        style={{
          x: useTransform(mouseX, (x) => x * 5),
          y: useTransform(mouseY, (y) => y * 5),
        }}
      />

      {/* Layer 1 - Slowest */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,245,255,0.12),transparent_50%)]"
        style={{
          x: useTransform(mouseX, (x) => x * 15),
          y: useTransform(mouseY, (y) => y * 15),
        }}
      />

      {/* Layer 2 - Medium */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,0,128,0.1),transparent_50%)]"
        style={{
          x: useTransform(mouseX, (x) => x * 25),
          y: useTransform(mouseY, (y) => y * 25),
        }}
      />

      {/* Layer 3 - Fastest */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,47,247,0.08),transparent_60%)]"
        style={{
          x: useTransform(mouseX, (x) => x * 35),
          y: useTransform(mouseY, (y) => y * 35),
        }}
      />

      {/* Animated Grid Pattern with parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          x: useTransform(mouseX, (x) => x * 10),
          y: useTransform(mouseY, (y) => y * 10),
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,245,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        ref={ref}
        style={{ opacity, scale, y }}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-lg">
            Get to know more about my journey, expertise, and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Crafting Digital Experiences with Code
            </h3>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Junaidh Haneefa</span> is an aspiring and passionate Flutter developer with a Bachelor's degree in Computer Science and hands-on experience in building cross-platform mobile applications since graduation. Eager to contribute to innovative and scalable mobile solutions using Flutter, Dart, and modern development practices. Seeking a challenging role where I can apply my technical skills, grow as a developer, and collaborate on impactful projects that enhance user experiences.
              </p>
              <p>
                Currently pursuing my <span className="text-white font-semibold">Master's in Computer Science</span> at
                Griffith College Dublin, <span className="text-white font-semibold">Junaidh Haneefa</span> specializes in mobile and web development with expertise in
                <span className="text-white font-semibold"> Flutter, Kotlin, MERN stack, Django</span>, and more.
              </p>
              <p>
                As a <span className="text-white font-semibold">Team Lead at D4DX Innovations</span>, <span className="text-white font-semibold">Junaidh Haneefa</span> has successfully
                led the development of multiple cross-platform applications, managed project timelines, and mentored
                junior developers while maintaining high code quality standards.
              </p>
              <p>
                Beyond coding, I'm experienced in <span className="text-white font-semibold">server management, DNS
                configuration, CI/CD pipelines</span>, and project management using tools like Jira, Trello, and Notion.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-neutral-400">
                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-elegant card-hover p-6 rounded-xl text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-neutral-400 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 max-w-6xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What I <span className="gradient-text">Do</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Mobile Development',
                description: 'Building cross-platform mobile apps with Flutter and Kotlin, focusing on performance and user experience.',
                gradient: 'from-blue-500/20 to-cyan-500/20',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: 'Web Development',
                description: 'Creating responsive and scalable web applications using MERN stack, Django, and modern frameworks.',
                gradient: 'from-purple-500/20 to-pink-500/20',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                title: 'DevOps & Cloud',
                description: 'Managing servers, DNS, CI/CD pipelines, and cloud infrastructure on Digital Ocean and Cloudways.',
                gradient: 'from-indigo-500/20 to-purple-500/20',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`card-elegant card-hover p-8 rounded-xl group relative overflow-hidden bg-gradient-to-br ${service.gradient}`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 text-primary">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{service.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

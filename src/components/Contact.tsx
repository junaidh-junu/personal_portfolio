import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { contactInfo } from '../data/portfolio';

const Contact = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-80px' });

  const contactRows = [
    { label: 'Email', value: contactInfo.email, link: `mailto:${contactInfo.email}` },
    { label: 'Phone', value: contactInfo.phone, link: `tel:${contactInfo.phone}` },
    { label: 'Location', value: contactInfo.location },
    { label: 'Languages', value: contactInfo.languages.map((l) => l.name).join(' · ') },
  ];

  const socialLinks = [
    { name: 'GitHub', url: contactInfo.github },
    { name: 'LinkedIn', url: contactInfo.linkedin },
  ];

  return (
    <section id="contact" className="section-block border-b-0">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink">
            Let's talk about your <span className="text-accent">project</span>
          </h2>
          <div className="scribble-divider mt-6" />
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          <div>
            <p className="font-body text-ink-dim text-base leading-relaxed mb-8 max-w-lg">
              Open to full-stack and mobile roles in Dublin, and to freelance builds worth doing properly. Send the details — I read every email myself, usually within a day.
            </p>
            <div className="sticker inline-block mb-10 -rotate-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="cta-primary px-12 py-6 text-lg md:text-xl"
              >
                Write a line ↗
              </a>
            </div>
            <div className="space-y-3">
              {socialLinks.map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`work-card flex items-center justify-between px-5 py-4 text-ink-muted hover:text-accent transition-colors ${
                    i % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'
                  }`}
                >
                  <span className="font-body text-sm">{social.name}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="work-card px-5 py-4 flex justify-between items-start gap-4"
              >
                <span className="font-mono text-[10px] text-ink-muted tracking-[0.2em] uppercase">
                  {row.label}
                </span>
                {row.link ? (
                  <a
                    href={row.link}
                    className="font-body text-sm text-ink-dim text-right hover:text-accent transition-colors break-all"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="font-body text-sm text-ink-dim text-right">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { contactInfo } from '../data/portfolio';
import WordReveal from './WordReveal';

const Contact = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: '-10% 0px' });
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-80px' });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' });

  const contactRows = [
    {
      label: 'Email',
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
    },
    {
      label: 'Phone',
      value: contactInfo.phone,
      link: `tel:${contactInfo.phone}`,
    },
    {
      label: 'Location',
      value: contactInfo.location,
      link: undefined,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: contactInfo.github,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section label bar */}
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 mb-12"
        >
          <span className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase whitespace-nowrap">
            07 — Get In Touch
          </span>
          <div className="h-px flex-1 bg-dark-border" />
          <span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase whitespace-nowrap">
            open to work
          </span>
        </motion.div>

        {/* Section heading */}
        <div className="mb-4">
          <div className="inline-flex flex-wrap items-baseline gap-[0.25em]">
            <WordReveal text="Let's" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory" />
            <WordReveal text="Connect" as="h2" className="font-display text-4xl md:text-5xl lg:text-6xl text-accent italic" delay={0.14} />
          </div>
          <div className="gold-rule-left w-14 mt-4" />
        </div>

        {/* Two-column layout */}
        <div className="mt-16 grid lg:grid-cols-[1fr_1fr] gap-16">

          {/* LEFT — CTA */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-ivory-dim text-[15px] leading-relaxed font-light mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hello — my inbox is open.
            </p>

            <a
              href={`mailto:${contactInfo.email}`}
              className="border border-accent text-accent px-8 py-3 font-body text-sm tracking-wide hover:bg-accent/10 transition-all duration-300 inline-flex items-center gap-2.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Me an Email
            </a>

            {/* Social links */}
            <div className="border-t border-dark-border mt-8 pt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ivory-muted hover:text-accent transition-colors duration-300 py-2"
                >
                  {social.icon}
                  <span className="font-body text-sm">{social.name}</span>
                  <svg className="w-3 h-3 ml-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — contact detail rows */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, y: 20 }}
            animate={rightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-dark-border lg:border-t-0 lg:border-l lg:border-dark-border pt-8 lg:pt-0 lg:pl-16"
          >
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="border-b border-dark-border py-5 flex justify-between items-start"
              >
                <span className="font-mono text-[10px] text-ivory-muted tracking-[0.2em] uppercase pt-0.5">
                  {row.label}
                </span>
                {row.link ? (
                  <a
                    href={row.link}
                    className="font-body text-sm text-ivory-dim text-right hover:text-accent transition-colors duration-300 break-all"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="font-body text-sm text-ivory-dim text-right">
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </motion.div>

        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={labelInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-dark-border mt-20 pt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
          itemScope
          itemType="https://schema.org/Person"
        >
          <p className="font-mono text-[10px] text-ivory-muted tracking-wide">
            &copy; {new Date().getFullYear()} <span itemProp="name">{contactInfo.name}</span>. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-ivory-muted tracking-wide">
            Built with Love
          </p>
        </motion.footer>

      </div>
    </section>
  );
};

export default Contact;

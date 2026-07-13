import { contactInfo } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { name: 'GitHub', url: contactInfo.github },
    { name: 'LinkedIn', url: contactInfo.linkedin },
    { name: 'Email', url: `mailto:${contactInfo.email}` },
  ];

  return (
    <footer className="border-t border-rule bg-surface">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-3 font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted">
            <a href={`mailto:${contactInfo.email}`} className="block hover:text-accent transition-colors">
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="block hover:text-accent transition-colors">
              {contactInfo.phone}
            </a>
            <p>{contactInfo.location}</p>
          </div>
          <div className="md:text-right space-y-3 font-mono text-[11px] tracking-[0.12em] uppercase text-ink-muted">
            <p>&copy; {new Date().getFullYear()} {contactInfo.name}</p>
            <p>Built with React · Vite · Tailwind</p>
          </div>
        </div>

        <div className="overflow-hidden border-t border-rule pt-12">
          <h2
            className="font-display font-extrabold text-ink leading-[0.85] lowercase select-none"
            style={{ fontSize: 'clamp(4rem, 18vw, 14rem)' }}
            aria-hidden
          >
            haneefa
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 mt-10 pt-8 border-t border-rule">
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#publications"
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted hover:text-accent transition-colors"
            >
              Publications
            </a>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-muted hover:text-accent transition-colors inline-flex items-center gap-2"
          >
            Back to top
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

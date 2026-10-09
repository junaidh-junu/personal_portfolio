import { languages, person } from '../data/site';

export default function Contact() {
  const links = [
    { label: 'GitHub', href: person.github, external: true },
    { label: 'LinkedIn', href: person.linkedin, external: true },
    { label: 'Download CV', href: person.cv, download: 'Junaidh_Haneefa_CV.pdf' },
  ];
  return (
    <section id="contact" className="section scroll-mt-16" aria-labelledby="contact-heading">
      <div className="page">
        <p className="t-meta flex items-center gap-2.5">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {person.availability}
        </p>
        <h2 id="contact-heading" className="t-display mt-8 max-w-[12ch]">
          Let's build something.
        </h2>
        <a
          href={`mailto:${person.email}`}
          className="link mt-10 inline-block break-all text-[clamp(20px,3.2vw,40px)] leading-tight tracking-[-0.02em] md:mt-14"
        >
          {person.email}
        </a>
        <div className="mt-12 grid gap-8 border-t border-rule pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="link t-body text-ink"
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(l.download ? { download: l.download } : {})}
                >
                  {l.label} {l.external ? '↗' : '↓'}
                </a>
              </li>
            ))}
          </ul>
          <div className="t-small md:text-right">
            <p>{person.location} · {person.phone}</p>
            <p className="mt-1">{languages}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

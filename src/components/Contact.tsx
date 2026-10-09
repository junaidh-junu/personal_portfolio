import { languages, person } from '../data/site';

export default function Contact() {
  const rows = [
    { label: 'Email', value: person.email, href: `mailto:${person.email}` },
    { label: 'Phone', value: person.phone, href: `tel:${person.phone.replace(/\s/g, '')}` },
    { label: 'GitHub', value: 'github.com/junaidh-junu', href: person.github, external: true },
    { label: 'LinkedIn', value: 'linkedin.com/in/junaidhhaneefa', href: person.linkedin, external: true },
  ];
  return (
    <section id="contact" className="section scroll-mt-16" aria-labelledby="contact-heading">
      <div className="page grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
        <div data-reveal="1">
          <span className="pill">
            <span className="pulse" aria-hidden="true" />
            {person.availability}
          </span>
          <h2 id="contact-heading" className="t-display mt-7 max-w-[14ch]">
            Let's build something together.
          </h2>
          <p className="t-lede mt-6 max-w-[48ch]">
            Based in Dublin, open to full-time and remote roles. Send the brief or the job spec; I read every email myself, usually within a day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${person.email}`} className="btn btn-primary">
              Email me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
            <a href={person.cv} download="Junaidh_Haneefa_CV.pdf" className="btn btn-ghost">Download CV</a>
          </div>
        </div>
        <dl className="panel self-start divide-y divide-rule p-2" data-reveal="2">
          {rows.map((row) => (
            <div key={row.label} className="row-hover grid grid-cols-[96px_minmax(0,1fr)] gap-4 px-4 py-4">
              <dt className="t-small text-ink">{row.label}</dt>
              <dd className="t-small m-0 break-words">
                <a href={row.href} className="link" {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {row.value}{row.external ? ' ↗' : ''}
                </a>
              </dd>
            </div>
          ))}
          <div className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 px-4 py-4">
            <dt className="t-small text-ink">Languages</dt>
            <dd className="t-small m-0">{languages}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

import { languages, person } from '../data/site';
import Section from './Section';

export default function Contact() {
  const rows = [
    { label: 'Email', node: <a href={`mailto:${person.email}`} className="link">{person.email}</a> },
    { label: 'Phone', node: <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="link">{person.phone}</a> },
    { label: 'GitHub', node: <a href={person.github} target="_blank" rel="noopener noreferrer" className="link">github.com/junaidh-junu ↗</a> },
    { label: 'LinkedIn', node: <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="link">linkedin.com/in/junaidhhaneefa ↗</a> },
    { label: 'CV', node: <a href={person.cv} download="Junaidh_Haneefa_CV.pdf" className="link">Download PDF</a> },
    { label: 'Location', node: <>{person.location}</> },
    { label: 'Languages', node: <>{languages}</> },
  ];

  return (
    <Section id="contact" label="Contact">
      <p className="t-body mb-8">
        {person.availability}. I read every email myself, usually within a day.
      </p>
      <dl className="divide-y divide-rule border-y border-rule">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[112px_minmax(0,1fr)] gap-4 py-3">
            <dt className="t-small text-ink">{row.label}</dt>
            <dd className="t-small m-0 break-words">{row.node}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

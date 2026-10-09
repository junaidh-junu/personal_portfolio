import { education, roles } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section scroll-mt-16" aria-labelledby="experience-heading">
      <div className="page">
        <SectionHeading id="experience-heading" label="Experience" title="From intern to team lead in two years." />
        <ol className="timeline">
          {roles.map((role, i) => (
            <li key={`${role.org}-${role.period}`} className="relative pl-10 pb-10 last:pb-0 md:pl-12" data-reveal={String((i % 2) + 1)}>
              <span className={`timeline-dot ${role.current ? 'current' : ''}`} aria-hidden="true" />
              <p className="t-meta">{role.period} · {role.location}</p>
              <h3 className="t-title mt-2">
                {role.title}
                <span className="font-normal text-ink-muted">, {role.org}</span>
              </h3>
              <p className="t-body mt-3 max-w-[70ch]">{role.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {role.stack.split(', ').map((s) => (
                  <li key={s} className="t-meta rounded-full border border-rule px-2.5 py-1">{s}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-6 md:mt-28 md:grid-cols-2" data-reveal="1">
          {education.map((school) => (
            <div key={school.degree} className="panel p-6 md:p-8">
              <p className="t-meta">{school.period}</p>
              <h3 className="t-title mt-2">{school.degree}</h3>
              <p className="t-small mt-0.5">{school.institution}</p>
              <p className="t-body mt-4">{school.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

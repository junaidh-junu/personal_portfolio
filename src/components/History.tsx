import { education, roles } from '../data/site';
import SectionHeading from './SectionHeading';

/** Version history: every role and degree, newest first, as a store lists releases. */
export default function History() {
  return (
    <section id="history" className="section scroll-mt-16" aria-labelledby="history-heading">
      <div className="page">
        <SectionHeading id="history-heading" title="Version history" aside={`${roles.length} roles · ${education.length} degrees`} />
        <ol className="m-0 list-none border-t border-rule p-0">
          {roles.map((role) => (
            <li key={`${role.org}-${role.period}`} className="grid gap-1 border-b border-rule py-4 md:grid-cols-[140px_minmax(0,1fr)] md:gap-6">
              <p className="t-small">
                {role.period}
                {role.current && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" aria-label="current role" />}
              </p>
              <div className="min-w-0">
                <h3 className="t-title">
                  {role.title}, {role.org}
                  <span className="t-small font-normal"> · {role.location}</span>
                </h3>
                <p className="t-body mt-1 max-w-[76ch]">{role.summary}</p>
                <p className="t-small mt-1 text-ink-subtle">{role.stack}</p>
              </div>
            </li>
          ))}
          {education.map((school) => (
            <li key={school.degree} className="grid gap-1 border-b border-rule py-4 md:grid-cols-[140px_minmax(0,1fr)] md:gap-6">
              <p className="t-small">{school.period}</p>
              <div className="min-w-0">
                <h3 className="t-title">
                  {school.degree}, {school.institution}
                </h3>
                <p className="t-body mt-1 max-w-[76ch]">{school.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

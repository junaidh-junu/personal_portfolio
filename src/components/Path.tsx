import { education, roles } from '../data/site';
import SectionHeading from './SectionHeading';

/** Every role and degree, newest first. */
export default function Path() {
  return (
    <section id="path" className="section scroll-mt-16" aria-labelledby="path-heading">
      <div className="page">
        <SectionHeading id="path-heading" title="Path" aside={`${roles.length} roles · ${education.length} degrees`} />
        <ol className="m-0 grid list-none gap-8 p-0">
          {roles.map((role) => (
            <li key={`${role.org}-${role.period}`} className="grid gap-1 md:grid-cols-[120px_minmax(0,1fr)] md:gap-6">
              <p className="t-meta md:pt-0.5">
                {role.period}
                {role.current && <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" role="img" aria-label="current role" />}
              </p>
              <div className="min-w-0">
                <h3 className="t-title">{role.title}, {role.org}</h3>
                <p className="t-meta">{role.location}</p>
                <p className="t-body mt-2">{role.summary}</p>
                <p className="t-meta mt-1">{role.stack}</p>
              </div>
            </li>
          ))}
          {education.map((school) => (
            <li key={school.degree} className="grid gap-1 md:grid-cols-[120px_minmax(0,1fr)] md:gap-6">
              <p className="t-meta md:pt-0.5">{school.period}</p>
              <div className="min-w-0">
                <h3 className="t-title">{school.degree}, {school.institution}</h3>
                <p className="t-body mt-2">{school.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { education, roles } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section scroll-mt-16" aria-labelledby="experience-heading">
      <div className="page">
        <SectionHeading id="experience-heading" title="Experience" />
        <ol className="border-t border-rule">
          {roles.map((role) => (
            <li key={`${role.org}-${role.period}`} className="grid gap-2 border-b border-rule py-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 md:py-8">
              <p className="t-meta">{role.period}</p>
              <div>
                <h3 className="t-title">
                  {role.title}
                  <span className="font-normal text-ink-muted">, {role.org}</span>
                </h3>
                <p className="t-meta mt-1">{role.location}</p>
                <p className="t-body mt-3 max-w-[70ch]">{role.summary}</p>
                <p className="t-meta mt-2">{role.stack}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="t-heading mt-20 md:mt-28">Education</h3>
        <ol className="mt-8 border-t border-rule md:mt-10">
          {education.map((school) => (
            <li key={school.degree} className="grid gap-2 border-b border-rule py-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
              <p className="t-meta">{school.period}</p>
              <div>
                <h4 className="t-title">
                  {school.degree}
                  <span className="font-normal text-ink-muted">, {school.institution}</span>
                </h4>
                <p className="t-body mt-2 max-w-[70ch]">{school.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

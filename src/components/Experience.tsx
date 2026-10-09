import { roles } from '../data/site';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="space-y-10">
        {roles.map((role) => (
          <li key={`${role.org}-${role.period}`}>
            <h3 className="t-title">
              {role.title}
              <span className="font-normal text-ink-muted">, {role.org}</span>
            </h3>
            <p className="t-meta mt-1">
              {role.period} · {role.location}
            </p>
            <p className="t-body mt-3">{role.summary}</p>
            <p className="t-meta mt-2">{role.stack}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

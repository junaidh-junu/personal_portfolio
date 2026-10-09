import { education } from '../data/site';
import Section from './Section';

export default function Education() {
  return (
    <Section id="education" label="Education">
      <ol className="space-y-8">
        {education.map((school) => (
          <li key={school.degree}>
            <h3 className="t-title">
              {school.degree}
              <span className="font-normal text-ink-muted">, {school.institution}</span>
            </h3>
            <p className="t-meta mt-1">{school.period}</p>
            <p className="t-body mt-3">{school.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

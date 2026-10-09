import { stack } from '../data/site';
import Section from './Section';

export default function Stack() {
  return (
    <Section id="stack" label="Stack">
      <dl className="divide-y divide-rule border-y border-rule">
        {stack.map((group) => (
          <div key={group.label} className="grid grid-cols-[112px_minmax(0,1fr)] gap-4 py-3">
            <dt className="t-small text-ink">{group.label}</dt>
            <dd className="t-small m-0">{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

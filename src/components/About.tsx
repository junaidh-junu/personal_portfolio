import { about, person, stack } from '../data/site';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section scroll-mt-16" aria-labelledby="about-heading">
      <div className="page">
        <SectionHeading id="about-heading" title="About" />
        <div className="grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-20">
          <div>
            <img
              src={person.photo}
              width={160}
              height={160}
              alt={`${person.name}, portrait`}
              loading="lazy"
              decoding="async"
              className="mb-8 h-28 w-28 rounded-lg border border-rule object-cover md:h-36 md:w-36"
            />
            <div className="space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p} className="t-lede">{p}</p>
              ))}
            </div>
          </div>
          <dl className="self-start border-t border-rule">
            {stack.map((group) => (
              <div key={group.label} className="grid grid-cols-[120px_minmax(0,1fr)] gap-4 border-b border-rule py-4">
                <dt className="t-small text-ink">{group.label}</dt>
                <dd className="t-small m-0">{group.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

import { intro, person } from '../data/site';

export default function Intro() {
  return (
    <section id="top" className="page pt-16 pb-16 md:pt-24 md:pb-24" aria-label="Introduction">
      <div className="md:grid md:grid-cols-[var(--spacing-label)_minmax(0,1fr)] md:gap-x-12">
        <div className="mb-4 md:mb-0">
          <p className="t-small flex items-center gap-2 text-ink-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Available
          </p>
        </div>
        <div className="section-body">
          <p className="text-[24px] leading-8 tracking-[-0.015em] text-ink md:text-statement md:leading-9">
            {intro.statement}
          </p>
          <div className="mt-8 space-y-4">
            {intro.paragraphs.map((p) => (
              <p key={p} className="t-body">
                {p}
              </p>
            ))}
          </div>
          <p className="t-small mt-8">
            {person.availability}.{' '}
            <a href={`mailto:${person.email}`} className="link">
              {person.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

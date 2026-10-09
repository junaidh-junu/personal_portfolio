import { hero, person } from '../data/site';

export default function Hero() {
  return (
    <section id="top" className="page pt-20 pb-24 md:pt-32 md:pb-40" aria-label="Introduction">
      <p className="t-meta rise flex items-center gap-2.5">
        <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
        {person.availability} · {hero.eyebrow}
      </p>
      <h1 className="t-display rise rise-2 mt-8 max-w-[14ch] md:mt-10">
        {hero.lineOne}
        <span className="block text-ink-muted">{hero.lineTwo}</span>
      </h1>
      <div className="rise rise-3 mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between md:gap-12">
        <p className="t-lede max-w-[52ch]">{hero.lede}</p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a href="#work" className="btn btn-primary">
            See the work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </a>
          <a href={`mailto:${person.email}`} className="btn btn-ghost">Get in touch</a>
        </div>
      </div>
    </section>
  );
}

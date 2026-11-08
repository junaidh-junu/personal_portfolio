import { featured, hero, person } from '../data/site';

export default function Hero() {
  const lead = featured[0];
  return (
    <section id="top" className="relative overflow-hidden" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true" />
      <div className="page relative grid items-center gap-16 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12 lg:pt-28 lg:pb-32">
        <div>
          <span className="pill rise">
            <span className="pulse" aria-hidden="true" />
            {person.availability}
          </span>
          <h1 className="t-display rise rise-2 mt-7 max-w-[18ch]">
            {hero.lineOne}
            <span className="block text-ink-muted">{hero.lineTwo}</span>
          </h1>
          <p className="t-lede rise rise-3 mt-6 max-w-[54ch]">{hero.lede}</p>
          <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">
              See selected work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
            </a>
            <a href={person.cv} download="Junaidh_Haneefa_CV.pdf" className="btn btn-ghost">
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12M6 9l6 6 6-6M4 21h16" /></svg>
            </a>
          </div>
          <dl className="rise rise-5 mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-rule pt-6">
            {hero.facts.map((f) => (
              <div key={f.label} className="flex flex-col">
                <dd className="order-1 m-0 text-[24px] font-medium leading-7 tracking-[-0.02em] text-ink md:text-[28px] md:leading-8">{f.value}</dd>
                <dt className="t-meta order-2 mt-1.5">{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <a href="#work" className="rise rise-3 showcase mx-auto w-full max-w-[520px] lg:max-w-none" aria-label={`${lead.title}, see selected work`}>
          <div className="showcase-frame">
            {lead.image && <img src={lead.image.src} width={lead.image.width} height={lead.image.height} alt={lead.image.alt} />}
          </div>
          <p className="t-meta mt-3">{lead.title} · {lead.year} · 30,000+ active users</p>
        </a>
      </div>
    </section>
  );
}

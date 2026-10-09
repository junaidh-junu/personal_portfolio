import { apps, hero, person } from '../data/site';

export default function Hero() {
  const icons = apps.slice(0, 6);
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

        <div className="rise rise-3 relative mx-auto w-full max-w-[520px] lg:max-w-none" aria-hidden="true">
          <div className="collage">
            <div className="collage-shot float-1" style={{ left: '0%', top: '6%', width: '78%', aspectRatio: '16 / 11' }}>
              <img src="/work/tafheem-web.webp" width={1600} height={842} alt="" />
            </div>
            <div className="collage-shot float-2" style={{ right: '0%', top: '38%', width: '60%', aspectRatio: '16 / 11' }}>
              <img src="/work/quantumx.webp" width={1600} height={907} alt="" />
            </div>
            <div className="collage-apps float-3" style={{ left: '4%', bottom: '2%' }}>
              {icons.map((a) => (
                <img key={a.name} src={a.icon} width={44} height={44} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

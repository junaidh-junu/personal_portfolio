import { research } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Research() {
  return (
    <section id="research" className="section scroll-mt-16" aria-labelledby="research-heading">
      <div className="page">
        <SectionHeading id="research-heading" label="Research" title="Applied machine learning, evaluated honestly." />
        <div className="grid gap-6 md:grid-cols-2">
          {research.map((item, i) => (
            <article key={item.title} className="panel p-6 md:p-8" data-reveal={String(i + 1)}>
              <h3 className="t-title max-w-[30ch]">{item.title}</h3>
              <p className="t-body mt-3">{item.description}</p>
              <p className="t-meta mt-4">{item.meta}</p>
              {item.href && (
                <p className="mt-5">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    {item.linkLabel ?? 'Link'}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

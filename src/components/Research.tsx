import { research } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Research() {
  return (
    <section id="research" className="section scroll-mt-16" aria-labelledby="research-heading">
      <div className="page">
        <SectionHeading id="research-heading" title="Research" />
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          {research.map((item) => (
            <article key={item.title} className="rounded-lg border border-rule bg-surface p-6 md:p-8">
              <h3 className="t-title max-w-[28ch]">{item.title}</h3>
              <p className="t-body mt-3">{item.description}</p>
              <p className="t-meta mt-4">{item.meta}</p>
              {item.href && (
                <p className="t-small mt-4">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
                    {item.linkLabel ?? 'Link'} ↗
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

import { featured, moreWork } from '../data/site';
import type { WorkItem } from '../data/site';
import SectionHeading from './SectionHeading';

function Card({ item, wide, index }: { item: WorkItem; wide?: boolean; index: number }) {
  const external = Boolean(item.href);
  const Tag = external ? 'a' : 'div';
  const props = external ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Tag className={`card ${wide ? 'md:col-span-2' : ''}`} data-reveal={String((index % 2) + 1)} {...props}>
      <div className="card-frame">
        <span className="card-tag">{item.year}</span>
        <div className="card-shot">
          {item.image && (
            <img
              src={item.image.src}
              width={item.image.width}
              height={item.image.height}
              alt={item.image.alt}
              loading="lazy"
              decoding="async"
              style={wide ? { aspectRatio: '16 / 8' } : undefined}
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="t-title">{item.title}</h3>
          <p className="t-small mt-1 max-w-[60ch]">{item.description}</p>
          <p className="t-meta mt-2">{item.role} · {item.stack}</p>
        </div>
        <span className="card-cta mt-0.5 shrink-0">
          {external ? 'Visit' : 'View'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
        </span>
      </div>
    </Tag>
  );
}

export default function Work() {
  const [first, ...rest] = featured;
  return (
    <section id="work" className="section scroll-mt-16" aria-labelledby="work-heading">
      <div className="page">
        <SectionHeading
          id="work-heading"
          label="Selected work"
          title="Products shipped, not prototypes."
          lede="Web platforms and admin systems for organisations in Kerala and Ireland, each one in production with real users."
          note={`${featured.length + moreWork.length} projects`}
        />
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16">
          <Card item={first} wide index={0} />
          {rest.map((item, i) => (
            <Card key={item.title} item={item} index={i + 1} />
          ))}
        </div>

        <ul className="mt-16 border-t border-rule md:mt-24" data-reveal="1">
          {moreWork.map((item) => {
            const Title = item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
                {item.title} ↗
              </a>
            ) : (
              item.title
            );
            return (
              <li key={item.title} className="grid gap-2 border-b border-rule py-5 md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-baseline md:gap-8">
                <p className="t-meta">{item.year}</p>
                <div>
                  <h3 className="t-title">{Title}</h3>
                  <p className="t-small mt-1 max-w-[70ch]">{item.description}</p>
                </div>
                <p className="t-meta md:text-right">{item.stack}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { featured, moreWork } from '../data/site';
import type { WorkItem } from '../data/site';
import SectionHeading from './SectionHeading';

function Card({ item, wide }: { item: WorkItem; wide?: boolean }) {
  const external = Boolean(item.href);
  const Tag = external ? 'a' : 'div';
  const props = external ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Tag className={`card ${wide ? 'md:col-span-2' : ''}`} {...props}>
      <div className="card-frame">
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
        <div>
          <h3 className="t-title">
            {item.title}
            {external && <span className="card-arrow ml-1.5 text-ink-muted">↗</span>}
          </h3>
          <p className="t-small mt-1 max-w-[60ch]">{item.description}</p>
          <p className="t-meta mt-2">{item.year} · {item.stack}</p>
        </div>
      </div>
    </Tag>
  );
}

export default function Work() {
  const [first, ...rest] = featured;
  return (
    <section id="work" className="section scroll-mt-16" aria-labelledby="work-heading">
      <div className="page">
        <SectionHeading id="work-heading" title="Selected work" note={`${featured.length + moreWork.length} projects`} />
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16">
          <Card item={first} wide />
          {rest.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>

        <ul className="mt-16 border-t border-rule md:mt-24">
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

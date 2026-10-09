import { featured, moreWork } from '../data/site';
import type { WorkItem } from '../data/site';
import Section from './Section';

const Title = ({ item }: { item: WorkItem }) =>
  item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
      {item.title} ↗
    </a>
  ) : (
    <>{item.title}</>
  );

export default function Work() {
  return (
    <Section id="work" label="Selected work">
      <div className="space-y-12">
        {featured.map((item) => (
          <article key={item.title} className="work">
            {item.image && (
              <div className="frame">
                <img
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <h3 className="t-title mt-4">
              <Title item={item} />
            </h3>
            <p className="t-body mt-1">{item.description}</p>
            <p className="t-meta mt-2">
              {item.year} · {item.stack}
            </p>
          </article>
        ))}
      </div>

      <ul className="mt-16 divide-y divide-rule border-y border-rule">
        {moreWork.map((item) => (
          <li key={item.title} className="py-4">
            <h3 className="t-title">
              <Title item={item} />
            </h3>
            <p className="t-small mt-0.5">{item.description}</p>
            <p className="t-meta mt-1">
              {item.year} · {item.stack}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

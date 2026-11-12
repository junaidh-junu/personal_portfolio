import { featured, moreWork } from '../data/site';
import SectionHeading from './SectionHeading';

/** The web work: each featured project as one large screenshot, then the rest as text. */
export default function Work() {
  return (
    <section id="work" className="section scroll-mt-16" aria-labelledby="work-heading">
      <div className="page">
        <SectionHeading id="work-heading" title="Work" mascot="point" aside={`${featured.length} web platforms`} />
        <ul className="m-0 grid list-none gap-12 p-0">
          {featured.map((item) => {
            const external = Boolean(item.href);
            const Tag = external ? 'a' : 'div';
            const props = external ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <li key={item.title}>
                <Tag className="block text-inherit no-underline" {...props}>
                  <div className="frame">
                    {item.image && (
                      <img
                        src={item.image.src}
                        width={item.image.width}
                        height={item.image.height}
                        alt={item.image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="t-title text-[19px] leading-7">{item.title}{external ? ' ↗' : ''}</h3>
                    <p className="t-meta">{item.year}</p>
                  </div>
                  <p className="t-body mt-1">{item.description}</p>
                  <p className="t-meta mt-2">{item.role} · {item.stack}</p>
                </Tag>
              </li>
            );
          })}
        </ul>

        <h3 className="t-title mt-14">Also</h3>
        <ul className="m-0 mt-2 list-none p-0">
          {moreWork.map((item) => (
            <li key={item.title} className="border-b border-rule py-4 last:border-b-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h4 className="t-title">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="link-quiet">{item.title} ↗</a>
                  ) : item.title}
                </h4>
                <p className="t-meta">{item.year}</p>
              </div>
              <p className="t-body mt-1">{item.description}</p>
              <p className="t-meta mt-1">{item.role} · {item.stack}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

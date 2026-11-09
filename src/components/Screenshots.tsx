import { featured, moreWork } from '../data/site';
import SectionHeading from './SectionHeading';

/** The screenshots strip: every featured web project in a framed plate, then the rest as rows. */
export default function Screenshots() {
  return (
    <section id="screenshots" className="scroll-mt-16 pt-10 pb-8 md:pt-12" aria-labelledby="screenshots-heading">
      <div className="page">
        <SectionHeading id="screenshots-heading" title="Screenshots" aside={`${featured.length} web platforms · scroll sideways`} />
        <ul className="strip m-0 list-none p-0">
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
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <h3 className="t-title truncate">{item.title}{external ? ' ↗' : ''}</h3>
                    <p className="t-small shrink-0">{item.year}</p>
                  </div>
                  <p className="t-small mt-1 line-clamp-2">{item.description}</p>
                  <p className="t-small mt-1 text-ink-subtle">{item.role} · {item.stack}</p>
                </Tag>
              </li>
            );
          })}
        </ul>

        <ul className="mt-6 list-none border-t border-rule p-0">
          {moreWork.map((item) => (
            <li key={item.title} className="grid gap-1 border-b border-rule py-3.5 md:grid-cols-[120px_minmax(0,1fr)_auto] md:items-baseline md:gap-6">
              <p className="t-small">{item.year}</p>
              <div className="min-w-0">
                <h3 className="t-title">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="link-quiet">{item.title} ↗</a>
                  ) : item.title}
                  <span className="t-small font-normal"> · {item.role}</span>
                </h3>
                <p className="t-small mt-0.5 max-w-[72ch]">{item.description}</p>
              </div>
              <p className="t-small text-ink-subtle md:text-right">{item.stack}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

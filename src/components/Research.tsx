import { research } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Research() {
  return (
    <section id="research" className="section scroll-mt-16" aria-labelledby="research-heading">
      <div className="page">
        <SectionHeading id="research-heading" title="Research" aside="One dissertation, one peer-reviewed paper" />
        <ul className="m-0 grid list-none gap-8 p-0">
          {research.map((item) => (
            <li key={item.title}>
              <h3 className="t-title">{item.title}</h3>
              <p className="t-body mt-2">{item.description}</p>
              <p className="t-meta mt-2">{item.meta}</p>
              {item.href && (
                <p className="mt-2">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">{item.linkLabel ?? 'Link'} ↗</a>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

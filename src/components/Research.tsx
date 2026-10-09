import { research } from '../data/site';
import Section from './Section';

export default function Research() {
  return (
    <Section id="research" label="Research">
      <div className="space-y-10">
        {research.map((item) => (
          <article key={item.title}>
            <h3 className="t-title">{item.title}</h3>
            <p className="t-body mt-1">{item.description}</p>
            <p className="t-meta mt-2">{item.meta}</p>
            {item.href && (
              <p className="t-small mt-2">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
                  {item.linkLabel ?? 'Link'} ↗
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

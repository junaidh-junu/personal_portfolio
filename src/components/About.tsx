import { about, person, stack } from '../data/site';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section scroll-mt-16" aria-labelledby="about-heading">
      <div className="page">
        <SectionHeading id="about-heading" label="About" title="Two years of shipping, one MSc, one team led." />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div data-reveal="1">
            <div className="flex items-center gap-5">
              <img
                src={person.photo}
                width={160}
                height={160}
                alt={`${person.name}, portrait`}
                loading="lazy"
                decoding="async"
                className="h-20 w-20 rounded-[16px] border border-rule object-cover md:h-24 md:w-24"
              />
              <div>
                <p className="t-title">{person.fullName}</p>
                <p className="t-small mt-0.5">{person.role} · {person.location}</p>
              </div>
            </div>
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p} className="t-lede">{p}</p>
              ))}
            </div>
          </div>
          <div data-reveal="2">
            <p className="t-label">Stack</p>
            <div className="mt-4 space-y-5">
              {stack.map((group) => (
                <div key={group.label}>
                  <p className="t-small mb-2 text-ink">{group.label}</p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.split(', ').map((item) => (
                      <li key={item} className="chip">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

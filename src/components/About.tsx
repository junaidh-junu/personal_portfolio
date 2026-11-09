import { about, person, stack, whatsNew } from '../data/site';
import Information from './Information';
import SectionHeading from './SectionHeading';

/** About this developer, with a What's new box, beside the Information table. */
export default function About() {
  return (
    <section id="about" className="section scroll-mt-16" aria-labelledby="about-heading">
      <div className="page grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12">
        <div className="flex flex-col gap-6">
          <div>
            <SectionHeading id="about-heading" title="About this developer" />
            <div className="flex items-center gap-4">
              <img
                src={person.photo}
                width={160}
                height={160}
                alt={`${person.name}, portrait`}
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-[14px] border border-rule object-cover"
              />
              <div>
                <p className="t-title">{person.fullName}</p>
                <p className="t-small">{person.role} · {person.location}</p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="t-prose">{p}</p>
              ))}
            </div>
          </div>

          <div className="panel p-5 md:px-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="t-title">What's new</h3>
              <p className="t-small">Version {whatsNew.version}</p>
            </div>
            <p className="t-body mt-2">{whatsNew.text}</p>
          </div>

          <div>
            <h3 className="t-title">Compatibility</h3>
            <dl className="mt-2 m-0">
              {stack.map((group) => (
                <div key={group.label} className="row">
                  <dt>{group.label}</dt>
                  <dd className="max-w-[70%]">{group.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <Information />
      </div>
    </section>
  );
}

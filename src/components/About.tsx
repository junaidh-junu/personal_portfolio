import { about, languages, person, stack } from '../data/site';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section scroll-mt-16" aria-labelledby="about-heading">
      <div className="page">
        <SectionHeading id="about-heading" title="About" />
        <div className="flex items-center gap-4">
          <img
            src={person.photo}
            width={160}
            height={160}
            alt={`${person.name}, portrait`}
            loading="lazy"
            decoding="async"
            className="h-[72px] w-[72px] rounded-[20px] object-cover"
          />
          <div>
            <p className="t-title">{person.fullName}</p>
            <p className="t-small">{person.role} · {person.location}</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {about.paragraphs.map((p) => (
            <p key={p} className="t-body">{p}</p>
          ))}
        </div>

        <h3 className="t-title mt-10">What I work with</h3>
        <dl className="m-0 mt-2">
          {stack.map((group) => (
            <div key={group.label} className="row">
              <dt>{group.label}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
          <div className="row"><dt>Languages</dt><dd>{languages}</dd></div>
          <div className="row"><dt>Shipping since</dt><dd>2023</dd></div>
        </dl>
      </div>
    </section>
  );
}

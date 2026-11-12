import { hello, person, whatsNew } from '../data/site';
import Mascot from './Mascot';

/** The top of the page: the character waving, who I am, and the two actions. */
export default function Hello() {
  return (
    <section id="top" aria-label="Introduction" className="page pt-10 pb-4 md:pt-16">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:flex-nowrap">
        <Mascot pose="wave" size={140} className="-ml-6 h-[104px] w-[104px] sm:h-[140px] sm:w-[140px]" />
        <div className="min-w-0">
          <h1 className="t-display">{person.name}</h1>
          <p className="t-lede mt-2">{hello.role}</p>
        </div>
      </div>

      <p className="mt-6 text-[16px] font-semibold leading-6 text-accent">{hello.status}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href={`mailto:${person.email}`} className="btn btn-primary">Say hello</a>
        <a href={person.cv} download="Junaidh_Haneefa_CV.pdf" className="btn btn-ghost">Download CV</a>
      </div>
      <p className="t-small mt-4">{hello.tagline}</p>

      <div className="mt-12 md:mt-16">
        <h2 className="t-title">Now</h2>
        <p className="t-body mt-2">{whatsNew.text}</p>
      </div>
    </section>
  );
}

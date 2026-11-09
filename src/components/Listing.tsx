import { listing, person } from '../data/site';
import Logo from './Logo';

/** The top of the listing: icon tile, title, subtitle, status and the one filled action. */
export default function Listing() {
  return (
    <section id="top" aria-label="Introduction" className="page flex flex-wrap items-start gap-7 pt-10 pb-8 md:gap-10 md:pt-14 md:pb-10">
      <div className="tile" aria-hidden="true">
        <Logo size={120} className="h-[84px] w-[84px] md:h-[120px] md:w-[120px]" />
      </div>
      <div className="flex min-w-0 flex-1 basis-[320px] flex-col gap-3.5">
        <div>
          <h1 className="t-display">{person.name}</h1>
          <p className="t-lede mt-1">{listing.subtitle}</p>
          <p className="mt-1 text-[14px] font-semibold leading-5 text-accent">{listing.status}</p>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a href={`mailto:${person.email}`} className="btn btn-primary">Get in touch</a>
          <a href={person.cv} download="Junaidh_Haneefa_CV.pdf" className="btn btn-ghost">Download CV</a>
          <span className="t-small ml-1">{listing.tagline}</span>
        </div>
      </div>
    </section>
  );
}

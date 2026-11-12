import { person } from '../data/site';
import Mascot from './Mascot';

/** Say hello: the end of the page and the footer in one. The character is asleep here. */
export default function Footer() {
  return (
    <footer id="hello" className="scroll-mt-16 pt-10 pb-12 md:pt-14" aria-labelledby="hello-heading">
      <div className="page">
        <Mascot pose="sleep" size={112} className="-ml-3 -mb-2" />
        <h2 id="hello-heading" className="t-heading">Say hello</h2>
        <p className="mt-3">
          <a href={`mailto:${person.email}`} className="link text-[clamp(19px,4.6vw,28px)] font-extrabold leading-tight [overflow-wrap:anywhere]">
            {person.email}
          </a>
        </p>
        <ul className="m-0 mt-5 flex list-none flex-wrap gap-x-6 gap-y-2 p-0 text-[16px]">
          <li><a href={`tel:${person.phone.replace(/\s/g, '')}`} className="link-quiet">{person.phone}</a></li>
          <li><a href={person.github} target="_blank" rel="noopener noreferrer" className="link-quiet">GitHub ↗</a></li>
          <li><a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="link-quiet">LinkedIn ↗</a></li>
          <li><a href={person.cv} download="Junaidh_Haneefa_CV.pdf" className="link-quiet">CV (PDF)</a></li>
        </ul>
        <p className="t-meta mt-12">{person.fullName} · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

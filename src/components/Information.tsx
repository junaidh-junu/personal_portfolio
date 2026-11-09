import { languages, person, research } from '../data/site';

/** The Information table: where a store lists size and compatibility, this lists how to reach me. */
export default function Information() {
  const paper = research.find((r) => r.href);
  return (
    <div id="information" className="scroll-mt-20 self-start">
      <h2 className="t-heading mb-1.5">Information</h2>
      <dl className="m-0">
        <div className="row"><dt>Developer</dt><dd>{person.fullName}</dd></div>
        <div className="row"><dt>Category</dt><dd>Web, mobile, applied ML</dd></div>
        <div className="row"><dt>Location</dt><dd>{person.location}</dd></div>
        <div className="row"><dt>Languages</dt><dd>{languages}</dd></div>
        <div className="row"><dt>Shipping since</dt><dd>2023</dd></div>
        <div className="row">
          <dt>Email</dt>
          <dd><a href={`mailto:${person.email}`} className="link">{person.email}</a></dd>
        </div>
        <div className="row">
          <dt>Phone</dt>
          <dd><a href={`tel:${person.phone.replace(/\s/g, '')}`} className="link">{person.phone}</a></dd>
        </div>
        {paper && (
          <div className="row">
            <dt>Published research</dt>
            <dd><a href={paper.href} target="_blank" rel="noopener noreferrer" className="link">Journal of Electronics and Informatics, 2024 ↗</a></dd>
          </div>
        )}
        <div className="row">
          <dt>Links</dt>
          <dd className="flex justify-end gap-4">
            <a href={person.github} target="_blank" rel="noopener noreferrer" className="link">GitHub ↗</a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn ↗</a>
            <a href={person.cv} download="Junaidh_Haneefa_CV.pdf" className="link">CV (PDF)</a>
          </dd>
        </div>
      </dl>
    </div>
  );
}

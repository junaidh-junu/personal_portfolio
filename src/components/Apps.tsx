import { apps } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Apps() {
  return (
    <section id="apps" className="section scroll-mt-16" aria-labelledby="apps-heading">
      <div className="page">
        <SectionHeading id="apps-heading" title="Mobile apps" note={`${apps.length} shipped to both stores`} />
        <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <li key={app.name} className="row-hover -m-3 flex gap-4 p-3">
              <img src={app.icon} width={48} height={48} alt="" loading="lazy" decoding="async" className="h-12 w-12 shrink-0 rounded-md" />
              <div className="min-w-0">
                <h3 className="t-title">{app.name}</h3>
                <p className="t-small mt-0.5">{app.description}</p>
                <p className="t-meta mt-1.5">{app.stack}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { apps } from '../data/site';
import SectionHeading from './SectionHeading';

/** More by this developer: all thirteen apps, as a store lists an author's other work. */
export default function Apps() {
  return (
    <section id="apps" className="section scroll-mt-16" aria-labelledby="apps-heading">
      <div className="page">
        <SectionHeading id="apps-heading" title="More by this developer" aside={`${apps.length} Flutter apps on the App Store and Google Play`} />
        <ul className="m-0 grid list-none gap-x-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <li key={app.name} className="app-row">
              <img src={app.icon} width={56} height={56} alt="" loading="lazy" decoding="async" />
              <div className="min-w-0">
                <h3 className="t-title">{app.name}</h3>
                <p className="t-small line-clamp-2">{app.description}</p>
                <p className="t-small text-ink-subtle">{app.stack}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

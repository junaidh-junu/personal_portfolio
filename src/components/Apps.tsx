import { apps } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Apps() {
  return (
    <section id="apps" className="section scroll-mt-16" aria-labelledby="apps-heading">
      <div className="page">
        <SectionHeading
          id="apps-heading"
          label="Mobile apps"
          title="Thirteen Flutter apps on the Play Store and App Store."
          lede="Quran readers with audio streaming, a civic reporting platform, a pilgrimage companion, and operations apps for organisations across Kerala."
          note={`${apps.length} shipped`}
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <li key={app.name} className="panel flex gap-4 p-4 transition-transform duration-300 hover:-translate-y-0.5" data-reveal={String((i % 3) + 1)}>
              <img src={app.icon} width={48} height={48} alt="" loading="lazy" decoding="async" className="h-12 w-12 shrink-0 rounded-[12px]" />
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

import { apps } from '../data/site';
import Section from './Section';

export default function Apps() {
  return (
    <Section id="apps" label="Mobile apps">
      <p className="t-body mb-8">
        Thirteen Flutter apps shipped to the Play Store and App Store, most for organisations in Kerala.
      </p>
      <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {apps.map((app) => (
          <li key={app.name} className="row-hover -m-2 grid grid-cols-[48px_minmax(0,1fr)] gap-3 p-2">
            <img
              src={app.icon}
              width={48}
              height={48}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-12 w-12 rounded-md"
            />
            <div>
              <h3 className="t-title">{app.name}</h3>
              <p className="t-small">{app.description}</p>
              <p className="t-meta mt-1">{app.stack}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

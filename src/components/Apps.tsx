import { useState } from 'react';
import { apps } from '../data/site';
import SectionHeading from './SectionHeading';

/**
 * All thirteen apps as an icon grid. With a pointer, one detail line under the
 * grid follows hover and focus. On touch screens every description is listed.
 */
export default function Apps() {
  const [selected, setSelected] = useState(0);
  const app = apps[selected];

  return (
    <section id="apps" className="section scroll-mt-16" aria-labelledby="apps-heading">
      <div className="page">
        <SectionHeading id="apps-heading" title="Apps" mascot="phone" aside={`${apps.length} Flutter apps on the App Store and Google Play`} />
        <ul className="app-grid m-0 list-none p-0">
          {apps.map((item, i) => (
            <li key={item.name}>
              <button
                type="button"
                className="app"
                aria-pressed={i === selected}
                onMouseEnter={() => setSelected(i)}
                onFocus={() => setSelected(i)}
                onClick={() => setSelected(i)}
              >
                <img src={item.icon} width={64} height={64} alt="" loading="lazy" decoding="async" />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="app-detail" aria-live="polite">
          <p className="t-title">{app.name}</p>
          <p className="t-body mt-1 text-[15px] leading-6">{app.description}</p>
          <p className="t-meta mt-1">{app.stack}</p>
        </div>

        <ul className="app-list m-0 mt-4 list-none gap-4 p-0">
          {apps.map((item) => (
            <li key={item.name}>
              <p className="t-title text-[16px]">{item.name}</p>
              <p className="t-small">{item.description}</p>
              <p className="t-meta text-[13px]">{item.stack}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

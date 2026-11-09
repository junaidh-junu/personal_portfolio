import { facts } from '../data/site';

/** The metadata band: the place a store shows ratings and age, here filled with real numbers. */
export default function Facts() {
  return (
    <div className="page">
      <dl className="facts m-0">
        {facts.map((f) => (
          <div key={f.label} className="fact">
            <dt className="t-label">{f.label}</dt>
            <dd className="t-stat m-0">{f.value}</dd>
            <dd className="t-small m-0 text-[12px] leading-4">{f.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

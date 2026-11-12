import { facts } from '../data/site';

/** Five real, checkable numbers as one quiet row of chips. */
export default function Numbers() {
  return (
    <section aria-label="In numbers" className="page py-6">
      <dl className="m-0 flex flex-wrap gap-3">
        {facts.map((f) => (
          <div key={f.label} className="chip">
            <dd className="t-stat m-0">{f.value}</dd>
            <dt className="text-[14px] font-semibold leading-5 text-ink">{f.label}</dt>
            <dd className="t-meta m-0 text-[13px] leading-[18px]">{f.note}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

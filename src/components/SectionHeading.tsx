interface Props {
  id: string;
  label: string;
  title: string;
  lede?: string;
  note?: string;
}

export default function SectionHeading({ id, label, title, lede, note }: Props) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14" data-reveal="1">
      <div className="max-w-[60ch]">
        <p className="t-label">{label}</p>
        <h2 id={id} className="t-heading mt-3">{title}</h2>
        {lede && <p className="t-lede mt-3">{lede}</p>}
      </div>
      {note && <p className="t-meta shrink-0 pb-1">{note}</p>}
    </div>
  );
}

interface Props {
  id: string;
  title: string;
  note?: string;
}

export default function SectionHeading({ id, title, note }: Props) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
      <h2 id={id} className="t-heading">{title}</h2>
      {note && <p className="t-meta shrink-0 pb-1">{note}</p>}
    </div>
  );
}

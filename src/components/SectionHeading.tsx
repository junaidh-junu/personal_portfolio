import type { ReactNode } from 'react';

interface Props {
  id: string;
  title: string;
  aside?: ReactNode;
}

/** A listing section title: one bold line, optional link or note on the right. */
export default function SectionHeading({ id, title, aside }: Props) {
  return (
    <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h2 id={id} className="t-heading">{title}</h2>
      {aside && <div className="t-small">{aside}</div>}
    </div>
  );
}

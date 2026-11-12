import type { ReactNode } from 'react';
import Mascot from './Mascot';

interface Props {
  id: string;
  title: string;
  aside?: ReactNode;
  /** The character stands beside the title in two sections only. */
  mascot?: 'phone' | 'point';
}

export default function SectionHeading({ id, title, aside, mascot }: Props) {
  return (
    <div className="mb-6 flex items-end gap-1">
      {mascot && <Mascot pose={mascot} size={64} className="-ml-4 -mb-1" />}
      <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2 id={id} className="t-heading">{title}</h2>
        {aside && <div className="t-meta">{aside}</div>}
      </div>
    </div>
  );
}

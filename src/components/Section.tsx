import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="section scroll-mt-6" aria-labelledby={`${id}-label`}>
      <h2 id={`${id}-label`} className="section-label">
        {label}
      </h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

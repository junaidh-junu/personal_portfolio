import { person } from '../data/site';

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="page flex flex-wrap items-center justify-between gap-2 py-8">
        <p className="t-meta">{person.fullName} · {new Date().getFullYear()}</p>
        <p className="t-meta">Designed and built by hand. No tracking.</p>
      </div>
    </footer>
  );
}

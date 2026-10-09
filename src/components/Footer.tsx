import { person } from '../data/site';

export default function Footer() {
  return (
    <footer className="page flex flex-wrap items-center justify-between gap-2 border-t border-rule py-8">
      <p className="t-meta">
        {person.fullName} · {new Date().getFullYear()}
      </p>
      <p className="t-meta">Designed and built by hand. No tracking.</p>
    </footer>
  );
}

import { nav, person } from '../data/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="page flex flex-wrap items-center justify-between gap-4 py-8">
        <p className="t-meta flex items-center gap-3"><Logo size={20} className="text-ink" />{person.fullName} · {new Date().getFullYear()}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="t-small text-ink-muted transition-colors hover:text-ink">{item.label}</a>
          ))}
          <a href="#top" className="t-small text-ink-muted transition-colors hover:text-ink">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}

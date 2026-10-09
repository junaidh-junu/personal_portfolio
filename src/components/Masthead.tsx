import { nav, person } from '../data/site';
import ThemeToggle from './ThemeToggle';

export default function Masthead() {
  return (
    <header className="page flex h-16 items-center justify-between">
      <a href="#top" className="t-title flex items-center gap-3 whitespace-nowrap no-underline">
        <img
          src={person.avatar}
          width={40}
          height={40}
          alt=""
          className="h-10 w-10 rounded-full"
          decoding="async"
        />
        {person.name}
      </a>
      <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-6">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="t-small text-ink-muted transition-colors hover:text-ink max-sm:hidden"
          >
            {item.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}

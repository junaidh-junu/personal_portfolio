import { nav } from '../data/site';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="page flex h-14 items-center justify-between gap-4 md:h-16">
        <a href="#top" className="flex items-center gap-2.5 text-[15px] font-extrabold text-ink no-underline">
          <Logo size={24} />
          junaidh.me
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[15px] font-semibold leading-5 text-ink-muted transition-colors hover:text-ink max-sm:hidden"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

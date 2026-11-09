import { nav, person } from '../data/site';
import ThemeToggle from './ThemeToggle';

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="page flex h-14 items-center justify-between gap-4 md:h-16">
        <a href="#top" className="text-[14px] font-semibold text-ink no-underline">junaidh.me</a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-[14px] font-medium leading-5 text-ink-muted transition-colors hover:text-ink max-lg:hidden"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <a href={`mailto:${person.email}`} className="link-quiet ml-2 px-1 py-2 text-[14px] font-medium">Email</a>
        </nav>
      </div>
    </header>
  );
}

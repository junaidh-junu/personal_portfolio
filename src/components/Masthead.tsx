import { nav, person } from '../data/site';
import ThemeToggle from './ThemeToggle';

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="t-title flex items-center gap-3 no-underline">
          <img src={person.avatar} width={28} height={28} alt="" className="h-7 w-7 rounded-full" decoding="async" />
          <span className="max-sm:hidden">{person.name}</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="row-hover px-3 py-2 text-[14px] leading-5 text-ink-muted transition-colors hover:text-ink max-md:hidden"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <a href={`mailto:${person.email}`} className="btn btn-primary btn-sm ml-2">Get in touch</a>
        </nav>
      </div>
    </header>
  );
}

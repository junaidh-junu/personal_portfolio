import { renderToString } from 'react-dom/server';
import App from './App';
import { jsonLd, seo } from './config/seo';
import { about, apps, education, facts, featured, hello, languages, moreWork, person, research, roles, stack, whatsNew } from './data/site';

/** The page as HTML, written into dist/index.html at build time so it reads without JavaScript. */
export function render(): string {
  return renderToString(<App />);
}

export function structuredData(dateModified: string): string {
  return JSON.stringify(jsonLd(dateModified)).replace(/</g, '\\u003c');
}

/** A plain Markdown copy of the page for AI agents, served at /llms.txt. Built from the same data as the page. */
export function llmsText(): string {
  const work = [...featured, ...moreWork];
  return [
    `# ${person.name}`,
    '',
    `> ${seo.description}`,
    '',
    `${hello.status} ${hello.tagline}`,
    '',
    `- Website: ${seo.siteUrl}/`,
    `- Email: ${person.email}`,
    `- Phone: ${person.phone}`,
    `- GitHub: ${person.github}`,
    `- LinkedIn: ${person.linkedin}`,
    `- CV (PDF): ${seo.siteUrl}${person.cv}`,
    `- Location: ${person.location}`,
    `- Spoken languages: ${languages}`,
    '',
    '## Now',
    '',
    whatsNew.text,
    '',
    '## In numbers',
    '',
    ...facts.map((f) => `- ${f.label}: ${f.value} (${f.note})`),
    '',
    '## About',
    '',
    ...about.paragraphs.flatMap((p) => [p, '']),
    '## Skills',
    '',
    ...stack.map((group) => `- ${group.label}: ${group.items}`),
    '',
    '## Web work',
    '',
    ...work.map((w) => `- **${w.title}** (${w.year}), ${w.role}. ${w.description} Stack: ${w.stack}.${w.href ? ` ${w.href}` : ''}`),
    '',
    `## Mobile apps (${apps.length}, on the App Store and Google Play)`,
    '',
    ...apps.map((a) => `- **${a.name}**: ${a.description} Stack: ${a.stack}.`),
    '',
    '## Research',
    '',
    ...research.map((r) => `- **${r.title}**. ${r.description} ${r.meta}.${r.href ? ` ${r.href}` : ''}`),
    '',
    '## Experience',
    '',
    ...roles.map((r) => `- **${r.title}, ${r.org}** (${r.period}, ${r.location}). ${r.summary} Stack: ${r.stack}.`),
    '',
    '## Education',
    '',
    ...education.map((s) => `- **${s.degree}, ${s.institution}** (${s.period}). ${s.detail}`),
    '',
  ].join('\n');
}

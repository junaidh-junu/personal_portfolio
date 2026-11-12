// Runs after `vite build` and the SSR build. Writes the rendered page and its
// structured data into dist/index.html, and a Markdown copy to dist/llms.txt,
// so search engines and AI agents can read the site without running JavaScript.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const { render, structuredData, llmsText } = await import(`${root}dist-ssr/entry-server.js`);

const htmlPath = `${root}dist/index.html`;
let html = await readFile(htmlPath, 'utf8');

const rootTag = '<div id="root"></div>';
const dataTag = '<!--structured-data-->';
for (const tag of [rootTag, dataTag]) {
  if (!html.includes(tag)) throw new Error(`prerender: ${tag} not found in dist/index.html`);
}

const today = new Date().toISOString().slice(0, 10);
html = html
  .replace(rootTag, `<div id="root">${render()}</div>`)
  .replace(dataTag, `<script type="application/ld+json">${structuredData(today)}</script>`);

await writeFile(htmlPath, html);
await writeFile(`${root}dist/llms.txt`, llmsText());
await rm(`${root}dist-ssr`, { recursive: true, force: true });
console.log(`prerender: wrote dist/index.html (${html.length} bytes) and dist/llms.txt`);

import { build } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

await build();
await build({ build: { ssr: 'src/entry-server.jsx', outDir: 'dist-ssr', emptyOutDir: true, copyPublicDir: false } });
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
const pagePath = resolve('dist/index.html');
const template = await readFile(pagePath, 'utf8');
const outlet = '<div id="root"></div>';
if (!template.includes(outlet)) throw new Error('Static render outlet is missing from index.html.');
const markup = render();
if (!markup.includes('Satria Hadi') || !markup.includes('project-archive')) throw new Error('Static page content is incomplete.');
await writeFile(pagePath, template.replace(outlet, `<div id="root" data-prerendered="true">${markup}</div>`));
console.log('Static portfolio rendered to dist/index.html. Upload dist/ only.');

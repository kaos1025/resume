// Build A4 PDFs from the Markdown résumé by driving index.html through
// headless Chromium — the exact same rendering pipeline as the live web résumé.
//
// Usage:  node scripts/build-pdf.mjs
// Output: pdf/Ji_Jungmin_Resume_KO.pdf, pdf/Ji_Jungmin_Resume_EN.pdf
//
// Requires: playwright (chromium). Install with `npm install` then
// `npx playwright install --with-deps chromium`.

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname, normalize } from 'node:path';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'pdf');

const TARGETS = [
  { lang: 'ko', file: 'Ji_Jungmin_Resume_KO.pdf' },
  { lang: 'en', file: 'Ji_Jungmin_Resume_EN.pdf' },
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

// Minimal static file server scoped to the repo root.
function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
      const filePath = normalize(join(ROOT, rel));
      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403).end('forbidden');
        return;
      }
      const body = await readFile(filePath);
      res.writeHead(200, {
        'content-type': MIME[extname(filePath)] || 'application/octet-stream',
        'cache-control': 'no-store',
      });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function main() {
  const server = await startServer();
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const { lang, file } of TARGETS) {
    await page.goto(`${base}/index.html`, { waitUntil: 'networkidle' });
    // Switch language and wait for the Markdown to finish rendering.
    await page.evaluate((l) => window.setLang(l), lang);
    await page.waitForFunction(
      (l) => {
        const pane = document.getElementById('pane-' + l);
        return pane && pane.classList.contains('active') && pane.children.length > 3;
      },
      lang,
      { timeout: 15000 }
    );
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: join(OUT, file),
      printBackground: true,
      preferCSSPageSize: true,
    });
    console.log(`✓ ${file}`);
  }

  await browser.close();
  await new Promise((r) => server.close(r));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

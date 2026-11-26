#!/usr/bin/env node
// Render a riso-illustration SVG to PNG with headless Chrome (no npm dependencies).
//
//   node scripts/render.mjs <input.svg> [output.png] [--scale 2] [--transparent] [--keep-svg]
//
// - Inlines assets/riso-defs.svg into the SVG (right after the opening <svg> tag), so the
//   illustration only references filter IDs such as url(#riso-ht).
// - Canvas size comes from the SVG's width/height (or viewBox).
// - --keep-svg also writes <output>.standalone.svg with the defs inlined (portable SVG).
// - Chrome is found via $CHROME_PATH, the macOS app, Playwright's cache, or google-chrome/chromium on PATH.
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdtempSync, rmSync } from 'node:fs';
import { dirname, join, resolve, basename } from 'node:path';
import { tmpdir, homedir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
export function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ];
  const pw = join(homedir(), 'Library/Caches/ms-playwright');
  const pwLinux = join(homedir(), '.cache/ms-playwright');
  for (const base of [pw, pwLinux]) {
    if (!existsSync(base)) continue;
    for (const d of readdirSync(base).filter((d) => d.startsWith('chromium-')).sort().reverse()) {
      candidates.push(
        join(base, d, 'chrome-mac/Chromium.app/Contents/MacOS/Chromium'),
        join(base, d, 'chrome-mac-arm64/Chromium.app/Contents/MacOS/Chromium'),
        join(base, d, 'chrome-linux/chrome'));
    }
  }
  for (const c of candidates) if (c && existsSync(c)) return c;
  for (const name of ['google-chrome', 'chromium', 'chromium-browser']) {
    try { return execFileSync('which', [name]).toString().trim(); } catch {}
  }
  throw new Error('Chrome/Chromium not found. Set CHROME_PATH.');
}

export function inlineDefs(svg) {
  const defs = readFileSync(join(here, '..', 'assets', 'riso-defs.svg'), 'utf8')
    .replace(/^[\s\S]*?<defs>/, '<defs>').replace(/<\/defs>[\s\S]*$/, '</defs>');
  if (svg.includes('<!-- riso:defs -->')) return svg.replace('<!-- riso:defs -->', defs);
  return svg.replace(/(<svg\b[^>]*>)/, `$1\n${defs}\n`);
}

function canvasSize(svg) {
  const tag = svg.match(/<svg\b[^>]*>/)[0];
  const w = tag.match(/\bwidth="([\d.]+)/), h = tag.match(/\bheight="([\d.]+)/);
  if (w && h) return [Math.round(+w[1]), Math.round(+h[1])];
  const vb = tag.match(/viewBox="[\d.\-]+\s+[\d.\-]+\s+([\d.]+)\s+([\d.]+)"/);
  if (vb) return [Math.round(+vb[1]), Math.round(+vb[2])];
  throw new Error('SVG needs width/height or viewBox');
}

export function screenshot(fileUrl, out, w, h, { scale = 2, transparent = false } = {}) {
  const chrome = findChrome();
  const profile = mkdtempSync(join(tmpdir(), 'riso-chrome-'));
  try {
    execFileSync(chrome, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
      `--user-data-dir=${profile}`, `--force-device-scale-factor=${scale}`,
      `--window-size=${Math.round(w)},${Math.round(h)}`, '--virtual-time-budget=4000',
      ...(transparent ? ['--default-background-color=00000000'] : []),
      `--screenshot=${out}`, fileUrl,
    ], { stdio: ['ignore', 'ignore', 'pipe'] });
  } finally { rmSync(profile, { recursive: true, force: true }); }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const flag = (name) => args.includes(name);
  const opt = (name, dflt) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : dflt; };
  const positional = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1] === '--scale'));
  if (!positional[0]) { console.error('usage: render.mjs <input.svg> [output.png] [--scale 2] [--transparent] [--keep-svg]'); process.exit(1); }

  const input = resolve(positional[0]);
  const output = resolve(positional[1] || input.replace(/\.svg$/i, '.png'));
  const scale = Number(opt('--scale', '2'));
  const svg = inlineDefs(readFileSync(input, 'utf8'));
  const [w, h] = canvasSize(svg);
  const tmp = mkdtempSync(join(tmpdir(), 'riso-'));
  const tmpSvg = join(tmp, basename(input));
  writeFileSync(tmpSvg, svg);
  if (flag('--keep-svg')) writeFileSync(output.replace(/\.png$/i, '.standalone.svg'), svg);
  screenshot(pathToFileURL(tmpSvg).href, output, w, h, { scale, transparent: flag('--transparent') });
  rmSync(tmp, { recursive: true, force: true });
  console.log(`rendered ${output} (${w * scale}×${h * scale})`);
}

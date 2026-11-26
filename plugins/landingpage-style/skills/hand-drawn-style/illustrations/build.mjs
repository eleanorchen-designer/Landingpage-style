#!/usr/bin/env node
// 手繪風範例：一次產出一組 riso 風格點綴插畫（步驟圖與年度圖）。照抄 hero()／grey()／cobalt() 的寫法換成自己的主題。
//   node <本檔路徑> [name ...] [--out=<輸出資料夾>]   （預設輸出到目前所在的資料夾）
// Writes <name>.svg (source, filters referenced by id) and <name>.png (2×, transparent).
// Style + filters: 同一個 plugin 的 riso-illustration skill (STYLE.md, scripts/render.mjs)；需要 Node 18+ 與 Chrome／Chromium。
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const render = join(here, '../../riso-illustration/scripts/render.mjs');

// Palette (2026-11-17, recoloured for the campaign page): hero teal #05556C, accent blue #17BAE8.
// `forest` = marks drawn ON the dark hero (light tint so they read); `dark` = standalone solid objects.
const C = { green: '#05556C', deep: '#033F50', forest: '#9FDDF0', dark: '#033F50', ink: '#022C3A', mint: '#8ED6E8', pale: '#CFEAF1',
  wash: '#17BAE8', cobalt: '#17BAE8', cobaltShade: '#0B86B0', cobaltLight: '#C9F1FC', white: '#EAE9E6', steel: '#C2C5C8',
  graphite: '#383838', greyInk: '#4A4A4A', lime: '#FFCB52' };
let n = 0;

// ── material helpers ────────────────────────────────────────────────
// Green hero: sliver → base → deepen → dot screen → dry-brush wash → edge halftone → foot band.
function hero(d, [x, y, w, h], o = {}) {
  const id = 'h' + (++n), cx = x + w / 2, cy = y + h / 2, R = Math.hypot(w, h) * 0.75, a = o.attr || '';
  return `<defs><clipPath id="${id}c"><path d="${d}" ${a ? 'clip-rule="evenodd"' : ''}/></clipPath>
  <linearGradient id="${id}d" gradientUnits="userSpaceOnUse" x1="${x}" y1="${y}" x2="${x + w}" y2="${y + h}"><stop offset=".45" stop-color="${C.deep}" stop-opacity="0"/><stop offset="1" stop-color="${C.deep}" stop-opacity=".75"/></linearGradient>
  <linearGradient id="${id}f" gradientUnits="userSpaceOnUse" x1="0" y1="${y + h * 0.7}" x2="0" y2="${y + h}"><stop offset="0" stop-color="${C.ink}" stop-opacity="0"/><stop offset="1" stop-color="${C.ink}" stop-opacity=".9"/></linearGradient></defs>
  <path d="${d}" ${a} transform="translate(-3 -2.5)" fill="${C.pale}" filter="url(#riso-rough-sm)"/>
  <g clip-path="url(#${id}c)">
    <path d="${d}" ${a} fill="${C.green}" filter="url(#riso-rough-sm)"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}d)"/>
    <path d="${d}" ${a} fill="${C.ink}" fill-opacity=".34" filter="url(#riso-ht-fine)"/>
    <g transform="rotate(-35 ${cx} ${cy})">
      <rect x="${cx - R}" y="${cy - R}" width="${2 * R}" height="${2 * R}" fill="${C.wash}" opacity="${o.wash ?? 0.62}" filter="url(#riso-drybrush-sm)"/>
      <rect x="${cx - R}" y="${cy - R}" width="${2 * R}" height="${2 * R}" fill="#E4F7EE" opacity=".4" filter="url(#riso-ridges)"/>
    </g>
    <path d="${d}" ${a} fill="${C.ink}" filter="url(#riso-edge-ht-sm)"/>
    ${o.foot === false ? '' : `<rect x="${x}" y="${y + h * 0.7}" width="${w}" height="${h * 0.3}" fill="url(#${id}f)" filter="url(#riso-ht)"/>`}
  </g>`;
}
// Warm grey-white: crumple base → light dots → halftone shade toward bottom-right.
function grey(d, [x, y, w, h], o = {}) {
  const id = 'g' + (++n), a = o.attr || '';
  return `<defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x + w * 0.2}" y1="${y}" x2="${x + w * 0.65}" y2="${y + h}"><stop offset=".1" stop-color="${C.greyInk}" stop-opacity="0"/><stop offset=".6" stop-color="${C.greyInk}" stop-opacity=".3"/><stop offset="1" stop-color="${C.greyInk}" stop-opacity="${o.dark ?? 0.72}"/></linearGradient></defs>
  <path d="${d}" ${a} fill="${o.fill || C.white}" filter="url(#riso-crumple)"/>
  <path d="${d}" ${a} fill="${C.greyInk}" fill-opacity=".2" filter="url(#riso-ht)"/>
  <path d="${d}" ${a} fill="url(#${id})" filter="url(#riso-ht-fine)"/>`;
}
// Cobalt: flat base → darker halftone on the right side.
function cobalt(d, [x, y, w, h]) {
  const id = 'b' + (++n);
  return `<defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="${x}" y1="${y}" x2="${x + w}" y2="${y + h * 0.4}"><stop offset=".25" stop-color="${C.cobaltShade}" stop-opacity="0"/><stop offset="1" stop-color="${C.cobaltShade}" stop-opacity=".95"/></linearGradient></defs>
  <path d="${d}" fill="${C.cobalt}" filter="url(#riso-rough-sm)"/>
  <path d="${d}" fill="url(#${id})" filter="url(#riso-ht-fine)"/>`;
}
const solid = (d, fill = C.forest, extra = '') => `<path d="${d}" fill="${fill}" ${extra} filter="url(#riso-rough-sm)"/>`;
const line = (d, stroke = C.forest, w = 5) => `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" filter="url(#riso-line)"/>`;
const lime = (d) => line(d, C.lime, 3.2);
const pipe = (d, w = 10) => `<path d="${d}" fill="none" stroke="${C.cobalt}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" filter="url(#riso-rough-sm)"/>`;
const rrect = (x, y, w, h, r = 6) => `M${x + r} ${y} H${x + w - r} Q${x + w} ${y} ${x + w} ${y + r} V${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} H${x + r} Q${x} ${y + h} ${x} ${y + h - r} V${y + r} Q${x} ${y} ${x + r} ${y} Z`;
const circle = (cx, cy, r) => `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;
const star = (cx, cy, r) => { const a = 0.07 * r, b = 0.36 * r; return `M${cx} ${cy - r} C${cx + a} ${cy - b} ${cx + b} ${cy - a} ${cx + r} ${cy} C${cx + b} ${cy + a} ${cx + a} ${cy + b} ${cx} ${cy + r} C${cx - a} ${cy + b} ${cx - b} ${cy + a} ${cx - r} ${cy} C${cx - b} ${cy - a} ${cx - a} ${cy - b} ${cx} ${cy - r} Z`; };
function gear(cx, cy, R, r, hole, teeth = 8) {
  const pt = (rad, deg) => `${(cx + rad * Math.cos(deg * Math.PI / 180)).toFixed(1)} ${(cy + rad * Math.sin(deg * Math.PI / 180)).toFixed(1)}`;
  const step = 360 / teeth; let pts = [];
  for (let i = 0; i < teeth; i++) { const a = i * step; pts.push(pt(r, a - step * 0.36), pt(R, a - step * 0.22), pt(R, a + step * 0.22), pt(r, a + step * 0.36)); }
  return `M${pts.join(' L')} Z ${circle(cx, cy, hole)}`;
}
const svg = (W, H, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">\n<g filter="url(#riso-grain)">\n${body}\n</g>\n</svg>\n`;

// ── illustrations ───────────────────────────────────────────────────
const art = {
  // Step 1 — 一本列表很多的清單冊
  'step-1-inventory': () => {
    const rows = [54, 77, 100, 123, 146, 169, 192], ends = [214, 196, 220, 188, 208, 222, 180];
    return svg(320, 256, [
      grey(rrect(96, 44, 166, 190, 6), [96, 44, 166, 190]),
      grey(rrect(88, 37, 164, 189, 6), [88, 37, 164, 189], { dark: 0.5 }),
      hero(rrect(78, 30, 162, 188, 6), [78, 30, 162, 188]),
      rows.map((y) => solid(`M98 ${y - 5} h10 v10 h-10 Z`)).join(''),
      line(rows.map((y, i) => `M120 ${y} H${ends[i]}`).join(' '), C.forest, 4.5),
      cobalt(rrect(62, 24, 22, 200, 5), [62, 24, 22, 200]),
      line('M73 40 V208', C.cobaltLight, 2.4),
      lime('M204 204 C212 222 222 226 230 208 C244 168 264 122 286 88 C294 76 302 80 296 92'),
    ].join('\n'));
  },
  // Step 2 — 節能 2 片嫩葉
  'step-2-leaves': () => svg(320, 256, [
    grey('M84 240 C104 206 216 206 236 240 Z', [84, 206, 152, 34]),
    line('M160 232 C159 204 160 180 161 152', C.dark, 6.5),
    hero('M158 164 C118 172 68 140 56 66 C120 62 166 102 158 164 Z M164 152 C158 92 198 42 272 32 C280 100 238 152 164 152 Z', [56, 32, 218, 136], { foot: false }),
    line('M150 156 C122 132 92 102 70 78 M172 144 C200 112 232 76 262 44', C.forest, 4),
    line('M118 122 C112 110 106 100 102 86 M214 100 C226 98 238 94 250 86', C.forest, 3),
    cobalt('M270 150 C282 168 290 180 290 190 A20 20 0 0 1 250 190 C250 180 258 168 270 150 Z', [250, 150, 40, 60]),
    lime('M161 152 C150 124 178 114 172 94 C166 76 146 88 154 100 C166 116 190 62 178 18'),
  ].join('\n')),
  // Step 3 — 一把尺測量 + 合約
  'step-3-measure': () => svg(320, 256, [
    grey(rrect(92, 20, 134, 190, 6), [92, 20, 134, 190]),
    line('M112 50 H204 M112 72 H190 M112 94 H206 M112 116 H176', C.graphite, 2.6),
    solid(circle(192, 156, 17), C.dark),
    lime('M108 166 C118 142 126 184 138 160 C148 140 152 182 166 152 C176 130 150 96 132 20 C128 6 140 2 144 12'),
    `<g transform="rotate(-14 160 206)">`,
    hero(rrect(30, 184, 262, 46, 5), [30, 184, 262, 46], { foot: false }),
    line(Array.from({ length: 12 }, (_, i) => `M${50 + i * 20} 185 V${i % 2 ? 196 : 204}`).join(' '), C.forest, 3),
    `</g>`,
    cobalt('M252 30 L270 26 L292 118 L284 132 L272 122 Z', [252, 26, 40, 106]),
  ].join('\n')),
  // Step 4 — 一本計劃書
  'step-4-plan': () => svg(320, 256, [
    `<g transform="rotate(-5 160 128)">`,
    cobalt('M196 208 V250 L208 239 L220 250 V208 Z', [196, 208, 24, 42]),
    grey(rrect(92, 40, 162, 190, 6), [92, 40, 162, 190]),
    line('M250 62 V214 M244 226 H110', C.graphite, 2.2),
    hero(rrect(78, 28, 162, 188, 6), [78, 28, 162, 188]),
    `<path d="M78 34 Q78 28 84 28 H94 V216 H84 Q78 216 78 210 Z" fill="${C.ink}" fill-opacity=".8" filter="url(#riso-ht)"/>`,
    solid('M108 52 h64 v46 h-64 Z'),
    line('M108 122 H212 M108 142 H186', C.forest, 4.5),
    `</g>`,
    lime('M104 204 C122 200 130 176 150 182 C170 188 176 156 198 154 C216 152 224 122 248 100 C264 86 286 60 276 44 C270 34 258 42 264 52'),
  ].join('\n')),

  // 第一年 — AI 菱形四角
  'year-1-ai': () => svg(400, 340, [
    hero(star(176, 176, 136), [40, 40, 272, 272], { foot: false }),
    solid(star(176, 176, 44)),
    cobalt(star(318, 84, 52), [266, 32, 104, 104]),
    grey(star(330, 268, 40), [290, 228, 80, 80], { dark: 0.6 }),
    lime('M106 312 C66 300 36 264 54 240 C72 220 96 246 78 262 C52 284 22 204 44 132 C52 104 68 88 86 84'),
  ].join('\n')),
  // 第二年 — 熱泵系統整合
  'year-2-heat-pump': () => {
    const coil = (x) => `M${x + 16} 132 H${x + 88} Q${x + 100} 132 ${x + 100} 144 Q${x + 100} 156 ${x + 88} 156 H${x + 28} Q${x + 16} 156 ${x + 16} 168 Q${x + 16} 180 ${x + 28} 180 H${x + 88} Q${x + 100} 180 ${x + 100} 192 Q${x + 100} 204 ${x + 88} 204 H${x + 16}`;
    return svg(400, 340, [
      pipe('M126 150 H276'), pipe('M80 236 V288 H322 V236'),
      hero(rrect(22, 106, 116, 130, 10), [22, 106, 116, 130], { wash: 0.85 }),
      line(coil(22), C.forest, 5),
      grey(rrect(264, 106, 116, 130, 10), [264, 106, 116, 130]),
      line(coil(264), C.graphite, 3),
      solid('M168 252 V146 A32 32 0 0 1 232 146 V252 Z', C.dark),
      solid('M156 250 H244 V266 H156 Z', C.dark),
      `<path d="M204 150 A30 30 0 0 1 230 180 V252 H204 Z" fill="#011C26" fill-opacity=".7" filter="url(#riso-ht)"/>`,
      solid('M186 276 L214 300 V276 L186 300 Z', C.dark),
      lime('M324 106 C326 78 298 74 304 54 C310 38 330 46 322 60 C312 80 350 56 366 22 C370 14 378 16 376 24'),
    ].join('\n'));
  },
  // 第三年 — 改善（齒輪 + 三個直 bar）
  'year-3-improve': () => svg(400, 340, [
    grey(gear(150, 146, 100, 76, 40), [50, 46, 200, 200], { attr: 'fill-rule="evenodd"' }),
    line('M118 100 Q150 86 182 100', C.graphite, 2.6),
    solid('M96 250 h46 v62 h-46 Z', C.dark),
    cobalt('M160 204 h46 v108 h-46 Z', [160, 204, 46, 108]),
    hero('M270 52 L336 140 H302 V312 H238 V140 H204 Z', [204, 52, 132, 260]),
    lime('M52 214 C22 150 56 62 130 34 C180 16 232 30 262 60 C270 68 264 78 256 72'),
  ].join('\n')),
  // 第四年 — 蹺蹺板維持平衡
  'year-4-balance': () => svg(400, 340, [
    solid('M200 204 L250 300 H150 Z', C.dark),
    `<path d="M200 204 L250 300 H206 Z" fill="#011C26" fill-opacity=".75" filter="url(#riso-ht)"/>`,
    line('M120 302 H280', C.dark, 5),
    `<g transform="rotate(-4 200 198)">`,
    cobalt(circle(92, 142, 40), [52, 102, 80, 80]),
    grey(circle(306, 134, 48), [258, 86, 96, 96]),
    line('M286 104 Q306 94 326 106', C.graphite, 2.6),
    hero(rrect(32, 182, 336, 30, 8), [32, 182, 336, 30], { foot: false }),
    `</g>`,
    lime('M140 84 C156 52 178 100 198 70 C212 48 224 76 214 84 C200 94 196 60 222 44 C240 34 256 44 262 30'),
  ].join('\n')),
  // 第五年 — 末端控制整合（手點擊觸控螢幕）
  'year-5-control': () => svg(400, 340, [
    solid(rrect(18, 34, 312, 222, 14), '#022C3A'),
    hero(rrect(32, 48, 284, 194, 6), [32, 48, 284, 194]),
    solid('M50 66 h54 v22 h-54 Z M50 98 h54 v22 h-54 Z M50 130 h54 v22 h-54 Z'),
    line('M136 136 A34 34 0 1 1 196 128', C.forest, 7),
    line('M166 108 L184 92', C.forest, 5),
    solid('M226 70 h22 v84 h-22 Z', C.cobalt),
    solid('M258 108 h22 v46 h-22 Z', C.mint, 'fill-opacity=".9"'),
    line('M50 186 H112 M50 208 H96 M136 186 H196', C.forest, 4.5),
    // hand: index finger pointing at the screen, other fingers curled into a fist, thumb tucked below
    grey('M230 190 C234 180 248 178 256 184 L318 218 C342 212 368 226 380 246 L400 262 V340 H330 C312 332 300 318 296 304 C284 304 270 296 262 284 C256 274 264 264 276 266 L300 272 C296 262 296 250 300 242 L240 210 C232 206 226 198 230 190 Z', [226, 180, 174, 160], { dark: 0.6 }),
    `<path d="M304 246 Q320 258 316 278 L334 280 Q338 258 322 240 Z" fill="${C.greyInk}" fill-opacity=".5" filter="url(#riso-ht-fine)"/>`,
    `<path d="M300 274 Q318 282 324 300 L300 304 Q296 290 300 274 Z" fill="${C.greyInk}" fill-opacity=".55" filter="url(#riso-ht-fine)"/>`,
    line('M304 246 Q320 258 316 278 M326 238 Q344 256 340 282 M300 273 Q318 281 324 298 M240 193 Q247 198 245 206', C.graphite, 2.4),
    cobalt('M342 306 L390 244 L400 250 V340 H364 Z', [342, 244, 58, 96]),
    line('M350 306 L392 252', C.cobaltLight, 2.4),
    lime('M232 196 C206 186 192 158 206 142 C220 128 236 146 222 158 C200 176 176 64 196 14'),
  ].join('\n')),

  // CTA — 廠區設備天際線（取代原本的線稿）
  'cta-skyline': () => svg(1100, 160, [
    pipe('M276 136 H330 M496 132 H528 M620 126 H660 M756 130 H800 M846 134 H884', 7),
    hero('M150 160 V92 L184 68 V92 L218 68 V92 L252 68 V92 H284 V160 Z', [150, 68, 134, 92], { foot: false }),
    line('M168 118 H266 M168 138 H240', C.forest, 4),
    grey('M318 160 C330 128 332 98 322 66 H382 C372 98 374 128 386 160 Z', [318, 66, 68, 94]),
    line('M330 84 H374 M352 100 Q346 130 350 152', C.graphite, 2.4),
    cobalt(rrect(410, 108, 92, 60, 8), [410, 108, 92, 60]),
    line('M424 122 H470', C.cobaltLight, 2.6),
    hero(rrect(524, 36, 104, 140, 6), [524, 36, 104, 124], { foot: false }),
    solid('M540 54 h30 v22 h-30 Z M582 54 h30 v22 h-30 Z M540 90 h30 v22 h-30 Z'),
    line('M582 100 H612 M540 130 H612', C.forest, 4),
    grey(rrect(654, 92, 108, 80, 6), [654, 92, 108, 68]),
    line('M654 114 H762 M690 92 V78 H730 V92', C.graphite, 2.4),
    hero('M792 160 C802 132 804 106 796 78 H850 C842 106 844 132 854 160 Z', [792, 78, 62, 82], { foot: false }),
    line('M802 94 H844', C.forest, 4),
    solid(rrect(880, 108, 84, 60, 6), C.dark),
    `<path d="${circle(922, 136, 14)}" fill="${C.mint}" fill-opacity=".9" filter="url(#riso-rough-sm)"/>`,
    lime('M122 150 C92 110 124 52 196 48 C290 44 296 22 392 54 C462 78 476 20 560 16 C660 12 644 70 742 62 C820 56 848 30 906 52 C954 70 950 104 992 96 C1004 94 1006 84 998 82'),
  ].join('\n')),
};

const args = process.argv.slice(2);
const outArg = args.find(a => a.startsWith('--out='));
const out = resolve(outArg ? outArg.slice(6) : process.cwd());
mkdirSync(out, { recursive: true });
const want = args.filter(a => !a.startsWith('--'));
for (const [name, fn] of Object.entries(art)) {
  if (want.length && !want.includes(name)) continue;
  const file = join(out, `${name}.svg`);
  writeFileSync(file, fn());
  execFileSync('node', [render, file, join(out, `${name}.png`), '--scale', '2', '--transparent'], { stdio: 'inherit' });
}

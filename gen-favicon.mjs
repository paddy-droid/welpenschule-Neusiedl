import puppeteer from 'puppeteer-core';
import pngToIco from 'png-to-ico';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const svg = await readFile('src/app/icon.svg', 'utf8');

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--force-color-profile=srgb'],
});

async function renderPng(size) {
  const page = await browser.newPage();
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  const sized = svg.replace('width="512" height="512"', `width="${size}" height="${size}"`);
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:${size}px;height:${size}px;background:transparent;overflow:hidden}</style></head><body>${sized}</body></html>`;
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const buf = await page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
  await page.close();
  return buf;
}

await mkdir('.fav-tmp', { recursive: true });
const sizes = [16, 32, 48, 64, 180, 512];
const bufs = {};
for (const s of sizes) {
  bufs[s] = await renderPng(s);
  await writeFile(`.fav-tmp/icon-${s}.png`, bufs[s]);
}
await browser.close();

await writeFile('src/app/apple-icon.png', bufs[180]);
await writeFile('.fav-tmp/preview-512.png', bufs[512]);
await writeFile('public/favicon.svg', svg);

const ico = await pngToIco([
  '.fav-tmp/icon-16.png',
  '.fav-tmp/icon-32.png',
  '.fav-tmp/icon-48.png',
  '.fav-tmp/icon-64.png',
]);
await writeFile('src/app/favicon.ico', ico);

console.log('OK — favicon.ico, icon.svg, apple-icon.png, public/favicon.svg geschrieben');

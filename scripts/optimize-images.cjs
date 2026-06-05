// One-time image optimization:
//  1) Resize any project image wider than MAX_W down to MAX_W (in place).
//  2) Generate a 1200x630 og-image.jpg social share card from the greenway hero.
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PROJECTS = path.join(ROOT, 'public', 'projects');
const MAX_W = 2000;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

(async () => {
  const files = walk(PROJECTS).filter((f) => /\.(jpe?g|png)$/i.test(f));
  let savedTotal = 0;
  for (const file of files) {
    const before = fs.statSync(file).size;
    const meta = await sharp(file).metadata();
    if ((meta.width || 0) <= MAX_W) continue;

    const isPng = /\.png$/i.test(file);
    const pipeline = sharp(file).resize({ width: MAX_W, withoutEnlargement: true });
    const buf = await (isPng
      ? pipeline.png({ quality: 82, compressionLevel: 9, palette: true })
      : pipeline.jpeg({ quality: 82, mozjpeg: true })
    ).toBuffer();

    fs.writeFileSync(file, buf);
    const after = buf.length;
    savedTotal += before - after;
    console.log(
      `${path.relative(ROOT, file)}  ${meta.width}px→${MAX_W}px  ` +
      `${(before / 1048576).toFixed(1)}MB → ${(after / 1048576).toFixed(1)}MB`
    );
  }

  // Social share card (1200x630) from the greenway render.
  const hero = path.join(PROJECTS, 'greenway', 'rendered.jpg');
  const og = path.join(ROOT, 'public', 'og-image.jpg');
  await sharp(hero)
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(og);
  console.log(`\nog-image.jpg created (${(fs.statSync(og).size / 1024).toFixed(0)}KB)`);
  console.log(`Total saved by resizing: ${(savedTotal / 1048576).toFixed(1)}MB`);
})();

#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, mkdir, writeFile, rename } from 'fs/promises';
import { tmpdir } from 'os';
import { join as pathJoin } from 'path';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '..', 'public', 'images');
const sourcesDir = join(__dirname, 'sources');
const metaPath = join(__dirname, '..', 'src', 'data', 'image-meta.json');

const EXTS = ['.png', '.jpg', '.jpeg'];
const MAX_WIDTH = 1280;
const RESP_WIDTHS = [480, 720, 960, 1280];
const WEBP_QUALITY = 85;
const AVIF_QUALITY = 80;
const PNG_QUALITY = 82;

/** Gallery + hero basenames that get responsive `-{w}` variants. */
const RESPONSIVE_BASES = new Set([
  'irfan',
  '1family',
  '1redwoods',
  '1dahlia_bike',
  'embroidery',
  'backpacking',
  'irfancartoon',
]);

/** Skip re-encoding tiny brand/icons (already small). */
const SKIP_BASES = new Set([
  'GitHub_Invertocat_Dark',
  'GitHub_Invertocat_Light',
  'InBug-Black',
  'InBug-White',
]);

async function listRasterInputs() {
  const dirs = [sourcesDir, imagesDir];
  const byBase = new Map();

  for (const dir of dirs) {
    let files;
    try {
      files = await readdir(dir);
    } catch {
      continue;
    }
    for (const file of files) {
      const lower = file.toLowerCase();
      if (!EXTS.some((e) => lower.endsWith(e))) continue;
      const base = file.replace(/\.(png|jpeg|jpg)$/i, '');
      if (!byBase.has(base)) {
        byBase.set(base, join(dir, file));
      }
    }
  }

  return byBase;
}

async function writeDeliveryFormats(pipeline, base, outDir) {
  const pngPath = join(outDir, `${base}.png`);
  const pngTmp = pathJoin(tmpdir(), `portfolio-${base}-${Date.now()}.png`);

  await pipeline
    .clone()
    .png({ quality: PNG_QUALITY, compressionLevel: 9 })
    .toFile(pngTmp);
  await rename(pngTmp, pngPath);

  const meta = await sharp(pngPath).metadata();
  const width = meta.width ?? MAX_WIDTH;
  const height = meta.height ?? Math.round((width * 9) / 16);

  await Promise.all([
    pipeline
      .clone()
      .toFormat('webp', { quality: WEBP_QUALITY })
      .toFile(join(outDir, `${base}.webp`)),
    pipeline
      .clone()
      .toFormat('avif', { quality: AVIF_QUALITY })
      .toFile(join(outDir, `${base}.avif`)),
  ]);

  return { width, height };
}

async function generateImages() {
  await mkdir(imagesDir, { recursive: true });
  const inputs = await listRasterInputs();
  const meta = {};

  for (const [base, inputPath] of inputs) {
    if (SKIP_BASES.has(base)) {
      console.log(`Skip ${base} (icon)`);
      continue;
    }

    try {
      let pipeline = sharp(inputPath).rotate();
      const original = await pipeline.metadata();
      if ((original.width ?? 0) > MAX_WIDTH) {
        pipeline = pipeline.resize({
          width: MAX_WIDTH,
          withoutEnlargement: true,
        });
      }

      const { width, height } = await writeDeliveryFormats(
        pipeline,
        base,
        imagesDir,
      );
      meta[base] = { width, height };
      console.log(`Generated ${base} (${width}x${height})`);

      if (RESPONSIVE_BASES.has(base)) {
        const widths = RESP_WIDTHS.filter((w) => w <= width);
        for (const w of widths) {
          const sized = sharp(inputPath)
            .rotate()
            .resize({ width: w, withoutEnlargement: true });
          await Promise.all([
            sized
              .clone()
              .toFormat('webp', { quality: WEBP_QUALITY })
              .toFile(join(imagesDir, `${base}-${w}.webp`)),
            sized
              .clone()
              .toFormat('avif', { quality: AVIF_QUALITY })
              .toFile(join(imagesDir, `${base}-${w}.avif`)),
          ]);
          console.log(`  ${base}-${w}.webp / ${base}-${w}.avif`);
        }
      }
    } catch (err) {
      console.error(`Failed to process ${base}:`, err.message);
    }
  }

  await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`);
  console.log(`Wrote ${metaPath}`);
}

generateImages();

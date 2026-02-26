#!/usr/bin/env node
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, '..', 'public', 'images');

const EXTS = ['.png', '.jpg', '.jpeg'];

async function generateImages() {
  const files = await readdir(imagesDir);
  const rasters = files.filter((f) => EXTS.some((e) => f.toLowerCase().endsWith(e)));

  for (const file of rasters) {
    const base = file.replace(/\.(png|jpeg|jpg)$/i, '');
    const inputPath = join(imagesDir, file);

    try {
      const image = sharp(inputPath);
      await Promise.all([
        image.clone().toFormat('webp', { quality: 85 }).toFile(join(imagesDir, `${base}.webp`)),
        image.clone().toFormat('avif', { quality: 80 }).toFile(join(imagesDir, `${base}.avif`)),
      ]);
      console.log(`Generated ${base}.webp and ${base}.avif`);
    } catch (err) {
      console.error(`Failed to process ${file}:`, err.message);
    }
  }
}

generateImages();

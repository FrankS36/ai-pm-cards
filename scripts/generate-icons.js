import sharp from 'sharp';
import { readFileSync } from 'fs';

const iconSvg = readFileSync('./public/icon.svg');
const ogSvg = readFileSync('./public/og-image.svg');

// Generate 192x192 icon
await sharp(iconSvg)
  .resize(192, 192)
  .png()
  .toFile('./public/icon-192.png');

console.log('✅ Generated icon-192.png');

// Generate 512x512 icon
await sharp(iconSvg)
  .resize(512, 512)
  .png()
  .toFile('./public/icon-512.png');

console.log('✅ Generated icon-512.png');

// Generate 1200x630 OG image (social share)
await sharp(ogSvg)
  .png()
  .toFile('./public/og-image.png');

console.log('✅ Generated og-image.png (1200x630)');
console.log('\n🎉 All images generated successfully!');

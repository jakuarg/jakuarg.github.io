/**
 * Genera `public/og-image.png` (1200x630) a partir de un SVG.
 *
 * Usa `sharp`, que ya viene como dependencia de Astro, así que no suma peso al
 * proyecto. Ejecutar con `npm run og` cuando cambien el nombre o el titular.
 */
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const NAME = 'David Jacas Leila';
const ROLE = 'Estudiante de Ingeniería en Sistemas de Información';
const TAGLINE = 'C# .NET · Java · SQL · Análisis y diseño de sistemas';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#16161f"/>
      <stop offset="1" stop-color="#221d3d"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8b7cf6"/>
      <stop offset="1" stop-color="#22b8cf"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1080" cy="90" r="240" fill="#8b7cf6" opacity="0.18"/>
  <circle cx="120" cy="580" r="200" fill="#22b8cf" opacity="0.14"/>
  <rect x="80" y="150" width="90" height="6" rx="3" fill="url(#accent)"/>

  <text x="80" y="270" font-family="Segoe UI, Arial, sans-serif" font-size="76" font-weight="700" fill="#ffffff">
    ${NAME}
  </text>
  <text x="80" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="32" fill="#b9b3d6">
    ${ROLE}
  </text>
  <text x="80" y="404" font-family="Consolas, monospace" font-size="24" fill="#7fd7e6">
    ${TAGLINE}
  </text>
  <text x="80" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="24" fill="#8e88ad">
    San Miguel de Tucumán, Argentina
  </text>
</svg>`;

const out = fileURLToPath(new URL('../public/og-image.png', import.meta.url));
const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile(out, png);
console.log(`og-image.png generado (${(png.length / 1024).toFixed(1)} kB)`);

// Generates the Open Graph image and apple-touch-icon from inline SVG.
// Run once after design changes: node scripts/generate-images.mjs
import sharp from 'sharp';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0d2b45"/>
  <circle cx="1050" cy="80" r="300" fill="#1766d1" opacity="0.28"/>
  <circle cx="120" cy="580" r="260" fill="#e0a93e" opacity="0.16"/>
  <g transform="translate(150 176)">
    <circle cx="60" cy="60" r="56" stroke="#e0a93e" stroke-width="3" fill="none" opacity="0.7"/>
    <path d="M60 12 L71 49 L108 60 L71 71 L60 108 L49 71 L12 60 L49 49 Z" fill="#ffffff"/>
    <circle cx="60" cy="60" r="8" fill="#e0a93e"/>
  </g>
  <text x="150" y="378" font-family="Arial, Helvetica, sans-serif" font-size="66" font-weight="700" fill="#ffffff">Castellanos Coaching</text>
  <text x="150" y="442" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#f3ddb0">Coaching for neurodivergent minds, built for real life.</text>
  <text x="150" y="518" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#a9c1d8">Executive function · Academic · Social skills · Independence · Family</text>
  <text x="150" y="556" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#a9c1d8">Marin County · Bay Area · Remote nationwide</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 48 48">
  <rect width="48" height="48" fill="#0d2b45"/>
  <path d="M24 6 L28 20 L42 24 L28 28 L24 42 L20 28 L6 24 L20 20 Z" fill="#ffffff"/>
  <circle cx="24" cy="24" r="3.2" fill="#e0a93e"/>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Generated public/og-image.png and public/apple-touch-icon.png');

// Generates the Open Graph image and apple-touch-icon from inline SVG.
// Run once after design changes: node scripts/generate-images.mjs
import sharp from 'sharp';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#21313c"/>
  <circle cx="1050" cy="80" r="300" fill="#3f6e7e" opacity="0.25"/>
  <circle cx="120" cy="580" r="260" fill="#c9a35c" opacity="0.18"/>
  <g transform="translate(150 180)">
    <circle cx="60" cy="60" r="56" stroke="#c9a35c" stroke-width="3" fill="none" opacity="0.6"/>
    <path d="M60 10 L71 49 L110 60 L71 71 L60 110 L49 71 L10 60 L49 49 Z" fill="#faf7f1"/>
    <circle cx="60" cy="60" r="8" fill="#c9a35c"/>
  </g>
  <text x="150" y="380" font-family="Georgia, serif" font-size="64" font-weight="600" fill="#faf7f1">Castellanos Coaching</text>
  <text x="150" y="445" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#e5d3ac">Coaching for neurodivergent minds, built for real life.</text>
  <text x="150" y="520" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#9fb2bd">Executive function · Academic · Social skills · Independence · Family</text>
  <text x="150" y="558" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#9fb2bd">Sonoma County · Marin · Bay Area · Remote nationwide</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 48 48">
  <rect width="48" height="48" fill="#21313c"/>
  <path d="M24 6 L28 20 L42 24 L28 28 L24 42 L20 28 L6 24 L20 20 Z" fill="#faf7f1"/>
  <circle cx="24" cy="24" r="3.2" fill="#c9a35c"/>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Generated public/og-image.png and public/apple-touch-icon.png');

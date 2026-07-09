// Generates the Open Graph share image (1200x630) in the brand palette.
// Run after brand changes: node scripts/generate-images.mjs
import sharp from 'sharp';

const navy = '#012255';
const gold = '#c89a2b';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${navy}"/>
  <circle cx="1030" cy="90" r="300" fill="#0b3b70" opacity="0.55"/>
  <circle cx="150" cy="560" r="240" fill="${gold}" opacity="0.12"/>
  <g transform="translate(150 168)">
    <circle cx="58" cy="58" r="54" stroke="${gold}" stroke-width="3" fill="none" opacity="0.75"/>
    <path d="M58 10 L69 47 L106 58 L69 69 L58 106 L47 69 L10 58 L47 47 Z" fill="#ffffff"/>
    <circle cx="58" cy="58" r="7.5" fill="${gold}"/>
  </g>
  <text x="150" y="372" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="700" fill="#ffffff">Castellanos Coaching</text>
  <text x="150" y="436" font-family="Arial, Helvetica, sans-serif" font-size="31" fill="#f1dfae">Clarity. Systems. Independence.</text>
  <text x="150" y="512" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#a9c1d8">Executive function &amp; life skills coaching for neurodivergent minds</text>
  <text x="150" y="550" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#a9c1d8">Marin County · Bay Area · Remote across California &amp; the U.S.</text>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-cover.png');
console.log('Generated public/og-cover.png (1200x630)');

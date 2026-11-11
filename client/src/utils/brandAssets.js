/**
 * Brand Assets Utility — Vector Logo Suite & Download Helpers
 * Produces clean, scalable, standalone SVG vectors for any brand kit.
 */

export function generateLogoSvg(type, brandName = 'Blister & Beam', tagline = 'Wood-fired sourdough. Zero pretense.', palette = []) {
  const primaryHex = palette.find(c => c.role === 'primary')?.hex || '#8D3B2F';
  const textHex = palette.find(c => c.role === 'text')?.hex || '#28211A';
  const surfaceHex = palette.find(c => c.role === 'surface')?.hex || '#F5F2EB';
  const accentHex = palette.find(c => c.role === 'accent')?.hex || '#D4A373';

  if (type === 'emblem') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" fill="none">
  <rect width="400" height="400" rx="48" fill="${surfaceHex}"/>
  <circle cx="200" cy="200" r="140" stroke="${primaryHex}" stroke-width="4" stroke-dasharray="4 6"/>
  <circle cx="200" cy="200" r="120" stroke="${textHex}" stroke-width="2"/>
  <!-- Kiln Hearth Arch -->
  <path d="M140 240V190C140 156.863 166.863 130 200 130C233.137 130 260 156.863 260 190V240" stroke="${primaryHex}" stroke-width="8" stroke-linecap="round"/>
  <!-- Hearth Fire / Sourdough Wheat Flame -->
  <path d="M200 170C190 195 175 205 185 225C190 235 200 240 200 240C200 240 210 235 215 225C225 205 210 195 200 170Z" fill="${primaryHex}"/>
  <circle cx="200" cy="210" r="6" fill="${accentHex}"/>
  <text x="200" y="290" text-anchor="middle" fill="${textHex}" font-family="Georgia, serif" font-size="16" font-weight="600" letter-spacing="4">HEARTH &amp; LEAVEN</text>
  <text x="200" y="310" text-anchor="middle" fill="${primaryHex}" font-family="sans-serif" font-size="10" font-weight="700" letter-spacing="2">EST. 2026</text>
</svg>`;
  }

  if (type === 'monogram') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" fill="none">
  <rect width="400" height="400" rx="48" fill="${primaryHex}"/>
  <rect x="24" y="24" width="352" height="352" rx="36" stroke="${surfaceHex}" stroke-width="2" stroke-opacity="0.4"/>
  <text x="200" y="235" text-anchor="middle" fill="${surfaceHex}" font-family="Georgia, serif" font-size="110" font-weight="600" letter-spacing="-4">B&amp;B</text>
  <text x="200" y="275" text-anchor="middle" fill="${accentHex}" font-family="sans-serif" font-size="12" font-weight="700" letter-spacing="5">ATELIER CRAFT</text>
</svg>`;
  }

  if (type === 'horizontal') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200" fill="none">
  <rect width="600" height="200" rx="28" fill="${surfaceHex}"/>
  <!-- Hearth Icon -->
  <g transform="translate(60, 50)">
    <circle cx="50" cy="50" r="42" fill="${primaryHex}"/>
    <path d="M36 62V50C36 42.268 42.268 36 50 36C57.732 36 64 42.268 64 50V62" stroke="${surfaceHex}" stroke-width="4" stroke-linecap="round"/>
    <path d="M50 46C46 54 41 58 45 64C47 67 50 69 50 69C50 69 53 67 55 64C59 58 54 54 50 46Z" fill="${accentHex}"/>
  </g>
  <!-- Text Lockup -->
  <text x="180" y="98" fill="${textHex}" font-family="Georgia, serif" font-size="38" font-weight="600" letter-spacing="-1">${brandName}</text>
  <text x="182" y="130" fill="${primaryHex}" font-family="sans-serif" font-size="12" font-weight="600" letter-spacing="2">${tagline.toUpperCase()}</text>
</svg>`;
  }

  // Default: Primary Wordmark
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300" fill="none">
  <rect width="500" height="300" rx="32" fill="${surfaceHex}"/>
  <!-- Spark Emblem -->
  <path d="M250 65C250 82 236 96 219 96C236 96 250 110 250 127C250 110 264 96 281 96C264 96 250 82 250 65Z" fill="${primaryHex}"/>
  <circle cx="250" cy="96" r="3.5" fill="${accentHex}"/>
  <!-- Primary Wordmark -->
  <text x="250" y="185" text-anchor="middle" fill="${textHex}" font-family="Georgia, serif" font-size="52" font-weight="600" letter-spacing="-1.5">${brandName}</text>
  <text x="250" y="222" text-anchor="middle" fill="${primaryHex}" font-family="sans-serif" font-size="12" font-weight="600" letter-spacing="4">WOOD-FIRED SOURDOUGH</text>
  <line x1="180" y1="242" x2="320" y2="242" stroke="${primaryHex}" stroke-width="1.5" stroke-opacity="0.4"/>
</svg>`;
}

export function downloadSvg(svgString, filename = 'brand-logo.svg') {
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

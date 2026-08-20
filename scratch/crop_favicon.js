const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processFavicon() {
  const inputLogo = path.join('g:', 'world-wide', 'public', 'world-wide-logo.png');
  const targetIcon = path.join('g:', 'world-wide', 'src', 'app', 'icon.png');
  const targetFaviconApp = path.join('g:', 'world-wide', 'src', 'app', 'favicon.ico');
  const targetFaviconPublic = path.join('g:', 'world-wide', 'public', 'favicon.ico');

  try {
    // Trim transparent padding and resize to square 512x512 icon
    await sharp(inputLogo)
      .trim()
      .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(targetIcon);

    console.log('Saved icon.png to src/app/icon.png');

    // Copy to favicon.ico files
    fs.copyFileSync(targetIcon, targetFaviconApp);
    fs.copyFileSync(targetIcon, targetFaviconPublic);
    console.log('Updated favicon.ico files successfully!');
  } catch (err) {
    console.error('Error processing favicon:', err);
  }
}

processFavicon();

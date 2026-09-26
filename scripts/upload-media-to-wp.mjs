import fs from 'node:fs';
import path from 'node:path';

// Load .env.local
try {
  process.loadEnvFile('.env.local');
} catch {
  // Fall back to environment
}

const WP_URL = (process.env.NEXT_PUBLIC_WP_BASE_URL || 'https://admin.theimperialessence.com').replace(/\/+$/, '');
const AUTH = process.env.WP_BASIC_AUTH || '';

if (!WP_URL || !AUTH) {
  console.error('Missing NEXT_PUBLIC_WP_BASE_URL or WP_BASIC_AUTH.');
  process.exit(1);
}

const MAP_FILE = path.join(process.cwd(), 'src/data/wpMediaMap.json');

const MIME_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.gif': 'image/gif',
};

// Exclude any legacy files from the old reference company
function shouldExclude(filename) {
  const lower = filename.toLowerCase();
  return lower.includes('worldwide') || lower.includes('world-wide');
}

function getAllImages(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      getAllImages(full, results);
    } else {
      if (shouldExclude(item)) {
        console.log(`[Skip Legacy Asset]: ${item}`);
        continue;
      }
      const ext = path.extname(item).toLowerCase();
      if (MIME_TYPES[ext]) {
        const relFromPublic = path.relative('public', full).replace(/\\/g, '/');
        const webPath = '/' + relFromPublic;
        results.push({
          fullPath: full,
          filename: item,
          webPath,
          mime: MIME_TYPES[ext],
          size: stat.size,
        });
      }
    }
  }
  return results;
}

async function fetchExistingMedia() {
  const map = new Map();
  try {
    let page = 1;
    while (true) {
      const res = await fetch(`${WP_URL}/wp-json/wp/v2/media?per_page=100&page=${page}`, {
        headers: { Authorization: AUTH },
      });
      if (!res.ok) break;
      const items = await res.json();
      if (!Array.isArray(items) || items.length === 0) break;
      for (const item of items) {
        const filename = item.media_details?.file
          ? path.basename(item.media_details.file)
          : item.source_url ? path.basename(new URL(item.source_url).pathname) : '';
        if (filename) {
          map.set(filename.toLowerCase(), {
            id: item.id,
            source_url: item.source_url,
            width: item.media_details?.width || 0,
            height: item.media_details?.height || 0,
          });
        }
      }
      page++;
    }
  } catch (err) {
    console.error('Failed to fetch existing media:', err.message);
  }
  return map;
}

async function uploadImage(img) {
  const fileData = fs.readFileSync(img.fullPath);
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/media`, {
    method: 'POST',
    headers: {
      Authorization: AUTH,
      'Content-Disposition': `attachment; filename="${encodeURIComponent(img.filename)}"`,
      'Content-Type': img.mime,
    },
    body: fileData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Upload failed for ${img.filename} (${res.status}): ${errorText}`);
  }

  const data = await res.json();
  return {
    id: data.id,
    source_url: data.source_url,
    width: data.media_details?.width || 0,
    height: data.media_details?.height || 0,
  };
}

async function main() {
  console.log('=== The Imperial Essence Media Sync ===');
  console.log(`Target WP: ${WP_URL}`);

  const publicDir = path.join(process.cwd(), 'public');
  const localImages = getAllImages(publicDir);
  console.log(`Found ${localImages.length} local images in public/`);

  console.log('Checking existing media in WordPress...');
  const existingMap = await fetchExistingMedia();
  console.log(`Found ${existingMap.size} existing media items in WordPress`);

  const mediaMap = {};
  // Load existing map if present
  if (fs.existsSync(MAP_FILE)) {
    try {
      Object.assign(mediaMap, JSON.parse(fs.readFileSync(MAP_FILE, 'utf8')));
    } catch {}
  }

  let uploadedCount = 0;
  let reusedCount = 0;

  for (const img of localImages) {
    const lookupKey = img.filename.toLowerCase();
    if (existingMap.has(lookupKey)) {
      const existing = existingMap.get(lookupKey);
      mediaMap[img.webPath] = {
        id: existing.id,
        url: existing.source_url,
        width: existing.width,
        height: existing.height,
        uploadedAt: new Date().toISOString(),
      };
      reusedCount++;
      console.log(`[Already in WP] ${img.webPath} -> ID ${existing.id}`);
    } else {
      try {
        console.log(`[Uploading] ${img.webPath} (${(img.size / 1024).toFixed(1)} KB)...`);
        const uploaded = await uploadImage(img);
        mediaMap[img.webPath] = {
          id: uploaded.id,
          url: uploaded.source_url,
          width: uploaded.width,
          height: uploaded.height,
          uploadedAt: new Date().toISOString(),
        };
        existingMap.set(lookupKey, uploaded);
        uploadedCount++;
        console.log(`[Success] ${img.webPath} -> ID ${uploaded.id}`);
      } catch (err) {
        console.error(`[Error] Failed to upload ${img.webPath}:`, err.message);
      }
    }
  }

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(MAP_FILE), { recursive: true });
  fs.writeFileSync(MAP_FILE, JSON.stringify(mediaMap, null, 2), 'utf8');

  console.log('\n=== Sync Complete ===');
  console.log(`Total processed: ${localImages.length}`);
  console.log(`Newly uploaded: ${uploadedCount}`);
  console.log(`Reused existing: ${reusedCount}`);
  console.log(`Map saved to: ${path.relative(process.cwd(), MAP_FILE)}`);
}

main().catch(console.error);

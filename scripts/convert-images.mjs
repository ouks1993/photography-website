import sharp from "sharp";
import { readdir, copyFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const SRC = "C:/Users/ok/Desktop/wetransfer_fichier-yasmine_2026-06-10_2105/Fichier Yasmine";
const DEST = "C:/Users/ok/photography-website/public/images";

const files = await readdir(SRC);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext)
    .replace(/\s+/g, "-")
    .replace(/@2x/g, "")
    .replace(/-+/g, "-");
  const src = path.join(SRC, file);

  if (ext === ".jpg" || ext === ".jpeg") {
    const dest = path.join(DEST, base + ".jpg");
    await sharp(src).jpeg({ quality: 90 }).toFile(dest);
    console.log(`✓ ${file} → ${base}.jpg`);
  } else if (ext === ".png") {
    const dest = path.join(DEST, base + ".jpg");
    await sharp(src).jpeg({ quality: 90 }).toFile(dest);
    console.log(`✓ ${file} → ${base}.jpg (png→jpg)`);
  } else if (ext === ".tif" || ext === ".tiff") {
    const dest = path.join(DEST, base + ".jpg");
    await sharp(src).jpeg({ quality: 90 }).toFile(dest);
    console.log(`✓ ${file} → ${base}.jpg (tif→jpg)`);
  } else if (ext === ".jxl") {
    try {
      const dest = path.join(DEST, base + ".jpg");
      await sharp(src).jpeg({ quality: 90 }).toFile(dest);
      console.log(`✓ ${file} → ${base}.jpg (jxl→jpg)`);
    } catch {
      console.log(`⚠ ${file} — JXL not supported, skipping`);
    }
  } else {
    console.log(`— ${file} skipped (${ext})`);
  }
}

console.log("\nDone. Files in public/images:");
const out = await readdir(DEST);
out.forEach(f => console.log(" ", f));

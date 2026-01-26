import { readdir, rename } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, "vezerles_lanc_csapagy");
const newBaseName = "vezerles_lanc_csapagy";

async function renameWebpFiles() {
  try {
    const files = await readdir(folderPath);

    const webpFiles = files
      .filter(
        (file) =>
          path.extname(file).toLowerCase() === ".webp" &&
          !file.startsWith(`${newBaseName}_`),
      )
      .sort();

    for (let i = 0; i < webpFiles.length; i++) {
      const oldPath = path.join(folderPath, webpFiles[i]);
      const newFileName = `${newBaseName}_${i}.webp`;
      const newPath = path.join(folderPath, newFileName);

      await rename(oldPath, newPath);
      console.log(`${webpFiles[i]} -> ${newFileName}`);
    }

    console.log("Kész, nincs több eltűnő kép 👍");
  } catch (err) {
    console.error("Hiba:", err);
  }
}

renameWebpFiles();

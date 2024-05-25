import "dotenv/config";
import { compileSassAndSave } from "compile-sass";
import { delay } from "./utils/delay";

const sassPath = process.env["SASS_PATH"];
const cssPath = process.env["CSS_PATH"];

(async () => {
  // Print SASS/SCSS path & CSS path from .env
  console.log(`SCSS Path: ${sassPath}`);
  console.log();
  console.log(`CSS Path : ${cssPath}`);

  // Zzz... :)
  await delay(1000);

  // Export CSS to SASS/SCSS
  (async () => {
    await compileSassAndSave(
      sassPath?.toString() as string,
      cssPath?.toString() as string
    );
  })();
})();

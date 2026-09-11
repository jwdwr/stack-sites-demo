import { mkdir, writeFile, readFile } from "node:fs/promises";

const { title, tagline } = JSON.parse(await readFile("src/content.json", "utf8"));

await mkdir("dist", { recursive: true });
await writeFile(
  "dist/index.html",
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <style>
      body { font-family: system-ui, sans-serif; margin: 0; display: grid; place-items: center; min-height: 100vh; background: #0b1020; color: #e8ecf8; }
      main { text-align: center; padding: 2rem; }
      h1 { font-size: clamp(2rem, 6vw, 3.5rem); margin: 0 0 .5rem; }
      p { opacity: .75; font-size: 1.125rem; }
      code { background: #1b2340; padding: .2em .45em; border-radius: 4px; }
    </style>
  </head>
  <body>
    <main>
      <h1>${title}</h1>
      <p>${tagline}</p>
      <p>Built from <code>${process.env.CODEBUILD_RESOLVED_SOURCE_VERSION ?? "local"}</code></p>
    </main>
  </body>
</html>
`,
);
console.log("built dist/index.html");

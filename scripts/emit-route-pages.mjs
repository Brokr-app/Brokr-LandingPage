import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

// Amplify serves index.html for unknown paths with a 404 status, which breaks
// URL checks like Google Play Console's. Emitting a real file per route makes
// these paths return 200. Keep in sync with the routes in src/App.tsx.
const routes = ["waitlist", "integritet", "villkor", "cookies", "support", "Kontakt"];

const dist = path.resolve("dist");
const indexPath = path.join(dist, "index.html");

if (!existsSync(indexPath)) {
  console.error(`Route pages not emitted: ${indexPath} is missing`);
  process.exit(1);
}

const html = readFileSync(indexPath);

for (const route of routes) {
  const dir = path.join(dist, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "index.html"), html);
}

console.log(`Emitted route pages: ${routes.map((route) => `/${route}/`).join(", ")}`);

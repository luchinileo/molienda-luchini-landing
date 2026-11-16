import type { NextConfig } from "next";

// En GitHub Pages el sitio vive en una subcarpeta (/nombre-del-repo/).
// El workflow de deploy la pasa en BASE_PATH; en local queda vacía.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Genera HTML/CSS/JS estáticos en la carpeta out/ (no hace falta servidor).
  output: "export",
  basePath,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

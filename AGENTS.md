# Project rules

- GitHub Pages deploys use `bun run build:static` (env `STATIC_BUILD=1`), which switches `vite.config.ts` to prerender all routes; the Nitro `static` preset is incompatible with this build chain — never add `nitro: { preset: "static" }`. Why: the static preset fails with "rollupOptions.input should not be an html file when building for SSR".
- The sitemap is a static `public/sitemap.xml`; there is no `/sitemap.xml` server route. Why: static hosting can't serve server routes, and a static file works everywhere.
- The GitHub Pages deploy package is `.output/public` (prerendered route folders + `404.html` SPA fallback + `.nojekyll` + `CNAME`); `dist/` is only the Cloudflare output. Why: keeps the two deploy targets from being confused.

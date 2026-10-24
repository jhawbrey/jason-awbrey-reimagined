# Project rules

- GitHub Pages deploys use `bun run build:static` (env `STATIC_BUILD=1`), which switches `vite.config.ts` to prerender all routes; the Nitro `static` preset is incompatible with this build chain — never add `nitro: { preset: "static" }`. Why: the static preset fails with "rollupOptions.input should not be an html file when building for SSR".
- The sitemap is a static `public/sitemap.xml`; there is no `/sitemap.xml` server route. Why: static hosting can't serve server routes, and a static file works everywhere.
- The GitHub Pages deploy package is `.output/public` (prerendered route folders + `404.html` SPA fallback + `.nojekyll` + `CNAME`); `dist/` is only the Cloudflare output. Why: keeps the two deploy targets from being confused.
- Images needed on GitHub Pages must ship under `public/` or as bundled source imports; never reference Lovable-only `/__l5e/` endpoints in site content. Why: GitHub Pages cannot serve Lovable asset endpoints.
- Schedule data is a single combined list in `src/lib/content.ts`; upcoming/past are derived from each item's `timestamp` via `getUpcomingConcerts()`/`getPastConcerts()` — never maintain separate upcoming/past arrays. Why: mirrors the old Gatsby behavior so concerts move from Upcoming to Past automatically.

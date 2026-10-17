// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
//
// STATIC_BUILD=1 (used by the GitHub Pages workflow) produces a fully static build:
// every route is prerendered to HTML and Nitro emits plain files instead of a
// Cloudflare worker. The Lovable sandbox ignores this switch and keeps building
// its Cloudflare preview exactly as before.
const staticBuild = process.env.STATIC_BUILD === "1";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ...(staticBuild
      ? {
          pages: [
            { path: "/" },
            { path: "/watch" },
            { path: "/listen" },
            { path: "/schedule" },
            { path: "/press" },
          ],
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
});

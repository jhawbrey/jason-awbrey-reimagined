# Jason Awbrey — Baritone

A modern, accessible website for baritone Jason Awbrey featuring integrated video and audio playback, performance schedule, and press. Built with TanStack Start and designed to meet WCAG 2.2 AA.

## Tech Stack

### Framework & Runtime
- **[TanStack Start](https://tanstack.com/start) v1** — Full-stack React framework with SSR, file-based routing, and server functions
- **[TanStack Router](https://tanstack.com/router)** — Type-safe routing (file-based, auto-generated route tree)
- **[TanStack Query](https://tanstack.com/query) v5** — Server state & data caching
- **[React 19](https://react.dev/)** with React DOM 19
- **[Vite 7](https://vite.dev/)** — Build tool & dev server
- **[Cloudflare Workers](https://workers.cloudflare.com/)** — Edge deployment target (`@cloudflare/vite-plugin`)
- **TypeScript 5** (strict mode)

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Configured via native CSS `@import` in `src/styles.css` (no `tailwind.config.js`)
- **[shadcn/ui](https://ui.shadcn.com/)** — Radix UI primitives in `src/components/ui/`
- **[lucide-react](https://lucide.dev/)** — Iconography
- **Typography:** Cormorant Garamond (display) + Inter (body)
- **Color system:** `oklch` design tokens (cream, ink, gold editorial palette)

### Media
- **[react-player](https://github.com/cookpete/react-player) v2.16.0** — SoundCloud audio playback (custom in-page player)
- **YouTube nocookie embeds** — Integrated video modal player

### Forms, Validation & Utilities
- **react-hook-form** + **@hookform/resolvers** + **zod** — Forms and schema validation
- **date-fns** — Date formatting for schedule
- **class-variance-authority**, **clsx**, **tailwind-merge** — Class composition

### Tooling
- **ESLint 9** (typescript-eslint, react-hooks, react-refresh, prettier)
- **Prettier 3**
- **[Bun](https://bun.sh/)** — Package manager (lockfile: `bun.lock`)

## Project Structure

```
src/
├── routes/                # File-based routes (auto-generates routeTree.gen.ts)
│   ├── __root.tsx         # Root layout (html shell, providers)
│   ├── index.tsx          # Home page
│   ├── watch.tsx          # Integrated YouTube video grid
│   ├── listen.tsx         # Custom SoundCloud audio player
│   ├── schedule.tsx       # Upcoming & past concerts
│   ├── press.tsx          # Reviews and quotes
│   └── sitemap[.]xml.ts   # Dynamic sitemap
├── components/
│   ├── ui/                # shadcn/ui primitives
│   ├── SiteHeader.tsx     # Nav + skip-to-content link
│   ├── SiteFooter.tsx
│   ├── VideoPlayer.tsx    # Accessible video modal
│   └── CustomAudioPlayer.tsx
├── lib/
│   └── content.ts         # Centralized site content (videos, tracks, concerts, press)
├── styles.css             # Tailwind v4 + design tokens
├── router.tsx             # Router setup
├── start.ts               # Start middleware
└── server.ts              # SSR entry (error wrapper)
```

## Accessibility (WCAG 2.2)

- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- "Skip to main content" link
- Visible focus rings (`:focus-visible`)
- `prefers-reduced-motion` support
- Accessible modal media players (focus trap, ESC to close, ARIA labels)
- Color contrast meeting AA on the cream/ink palette
- Keyboard-operable custom audio player controls

## Local Development

### Prerequisites
- **[Bun](https://bun.sh/)** (recommended) or Node.js 20+
- Git

### Setup

```bash
# 1. Clone
git clone <repo-url>
cd <repo-dir>

# 2. Install dependencies
bun install
# or: npm install

# 3. Start the dev server
bun run dev
# or: npm run dev
```

The dev server starts on `http://localhost:8080` by default (configured by `@lovable.dev/vite-tanstack-config`). The TanStack Router plugin auto-generates `src/routeTree.gen.ts` as you add/edit files under `src/routes/`.

### Scripts

| Command            | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| `bun run dev`      | Start the Vite dev server with HMR                            |
| `bun run build`    | Production build (Cloudflare Worker output)                   |
| `bun run build:dev`| Development-mode build (prerender check)                      |
| `bun run preview`  | Preview the production build locally                          |
| `bun run lint`     | Run ESLint                                                    |
| `bun run format`   | Format the codebase with Prettier                             |

### Adding a Route

Create a file under `src/routes/` (flat dot-separated naming):

```tsx
// src/routes/about.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Jason Awbrey" },
      { name: "description", content: "About the baritone." },
    ],
  }),
});

function AboutPage() {
  return <main id="main">…</main>;
}
```

The router plugin will register it automatically — do **not** edit `src/routeTree.gen.ts` by hand.

### Editing Content

All site content (videos, audio tracks, concerts, press quotes) lives in `src/lib/content.ts`. Update arrays there; pages re-render from a single source of truth.

## Deployment

The app builds to a Cloudflare Worker (`wrangler.jsonc`). After `bun run build`, the output in `dist/` can be deployed with `wrangler deploy` or via the Lovable publish flow.

## License

All performance media (YouTube, SoundCloud) © Jason Awbrey. Codebase © its authors.

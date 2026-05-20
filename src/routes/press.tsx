import { createFileRoute } from "@tanstack/react-router";
import { quotes } from "@/lib/content";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Jason Awbrey, Baritone" },
      {
        name: "description",
        content:
          "Critical praise for baritone Jason Awbrey from the Dallas Morning News, Theater Jones, the Fort Worth Star-Telegram, and more.",
      },
      { property: "og:title", content: "Press — Jason Awbrey, Baritone" },
      {
        property: "og:description",
        content: "Selected critical praise and reviews.",
      },
    ],
  }),
  component: PressPage,
});

function PressPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="max-w-2xl">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">Press</p>
        <h1 className="mt-4 font-display text-5xl text-foreground">
          In their words.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Selected critical praise from publications across the country.
        </p>
      </header>

      <ul className="mt-16 grid gap-6 md:grid-cols-2">
        {quotes.map((q, i) => (
          <li key={i}>
            <figure className="h-full rounded-sm border border-border bg-card p-8 transition-colors hover:border-accent">
              <svg
                aria-hidden
                width="28"
                height="22"
                viewBox="0 0 40 32"
                className="text-accent"
              >
                <path
                  d="M0 32V20C0 9 6 2 18 0v6c-7 2-10 6-10 12h10v14H0Zm22 0V20C22 9 28 2 40 0v6c-7 2-10 6-10 12h10v14H22Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-4 font-display text-2xl italic leading-snug text-foreground">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                — {q.source}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
import { useEffect, useRef, useState } from "react";

type Video = { id: string; title: string; work?: string };

export function VideoGrid({ videos }: { videos: ReadonlyArray<Video> }) {
  const [active, setActive] = useState<Video | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <li key={v.id}>
            <button
              type="button"
              onClick={() => setActive(v)}
              className="group block w-full text-left"
              aria-label={`Play video: ${v.title}`}
            >
              <div className="relative overflow-hidden rounded-sm border border-border bg-muted">
                <div className="aspect-video">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-foreground/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-foreground shadow-lg">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor">
                      <path d="M0 0 L18 10 L0 20 Z" />
                    </svg>
                  </span>
                </span>
              </div>
              <p className="mt-4 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                {v.work ?? "Performance"}
              </p>
              <p className="mt-1 font-display text-xl leading-snug text-foreground transition-colors group-hover:text-accent">
                {v.title}
              </p>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Now playing: ${active.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="relative w-full max-w-5xl">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute -top-12 right-0 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-background text-foreground shadow"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                <path d="M2 2 L16 16 M16 2 L2 16" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-sm bg-black shadow-2xl">
              <iframe
                title={active.title}
                src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
            <p className="mt-4 text-sm text-background/90">{active.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
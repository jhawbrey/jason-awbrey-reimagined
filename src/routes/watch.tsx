import { createFileRoute } from "@tanstack/react-router";
import { VideoGrid } from "@/components/VideoPlayer";
import { videos } from "@/lib/content";

export const Route = createFileRoute("/watch")({
  head: () => ({
    meta: [
      { title: "Watch — Jason Awbrey, Baritone" },
      {
        name: "description",
        content:
          "Watch Jason Awbrey perform Bach cantatas and other works. Videos play in-page without leaving the site.",
      },
      { property: "og:title", content: "Watch — Jason Awbrey, Baritone" },
      {
        property: "og:description",
        content: "Performances of Bach cantatas and more — playable in-page.",
      },
    ],
  }),
  component: WatchPage,
});

function WatchPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="max-w-2xl">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">Watch</p>
        <h1 className="mt-4 font-display text-5xl text-foreground">
          Performances, played in-page.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Select any performance to open it in an accessible video player. Use
          Escape to close, or the player controls for full screen and captions.
        </p>
      </header>
      <div className="mt-16">
        <VideoGrid videos={videos} />
      </div>
    </div>
  );
}
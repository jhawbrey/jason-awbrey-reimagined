import { createFileRoute } from "@tanstack/react-router";
import { AudioGrid } from "@/components/AudioGrid";
import { tracks } from "@/lib/content";

export const Route = createFileRoute("/listen")({
  head: () => ({
    meta: [
      { title: "Listen — Jason Awbrey, Baritone" },
      {
        name: "description",
        content:
          "Audio recordings of Jason Awbrey performing Bach cantata arias, Barber's Dover Beach, and more — embedded for in-page listening.",
      },
      { property: "og:title", content: "Listen — Jason Awbrey, Baritone" },
      {
        property: "og:description",
        content: "Recordings playable directly in-page.",
      },
    ],
  }),
  component: ListenPage,
});

function ListenPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="max-w-2xl">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">Listen</p>
        <h1 className="mt-4 font-display text-5xl text-foreground">
          Selected recordings.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          A small library of arias and works streamed from SoundCloud. Each
          player is fully keyboard-accessible — use Tab to focus and the
          built-in controls to play, pause, and scrub.
        </p>
      </header>
      <div className="mt-16">
        <AudioGrid tracks={tracks} />
      </div>
    </div>
  );
}
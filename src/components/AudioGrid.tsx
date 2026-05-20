type Track = { slug: string; title: string; subtitle?: string };

export function AudioGrid({ tracks }: { tracks: ReadonlyArray<Track> }) {
  return (
    <ul className="grid gap-8 md:grid-cols-2">
      {tracks.map((t) => {
        const url = `https://soundcloud.com/jason-awbrey/${t.slug}`;
        const src =
          `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}` +
          "&color=%23a1782d&inverse=false&auto_play=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&hide_related=true";
        return (
          <li key={t.slug} className="group rounded-sm border border-border bg-card p-5 transition-colors hover:border-accent">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
              {t.subtitle ?? "Recording"}
            </p>
            <p className="mt-1 font-display text-2xl leading-tight text-foreground">{t.title}</p>
            <div className="mt-4 overflow-hidden rounded-sm">
              <iframe
                title={`SoundCloud player — ${t.title}`}
                width="100%"
                height="140"
                scrolling="no"
                frameBorder="0"
                allow="autoplay"
                src={src}
                className="block"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
import { useEffect, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export type AudioTrack = {
  slug: string;
  title: string;
  subtitle?: string;
};

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function CustomAudioPlayer({ tracks }: { tracks: ReadonlyArray<AudioTrack> }) {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0); // 0..1
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = tracks[index];
  const url = useMemo(
    () => `https://soundcloud.com/jason-awbrey/${current.slug}`,
    [current.slug],
  );

  const selectTrack = (i: number, autoplay = true) => {
    setIndex(i);
    setPlayed(0);
    setDuration(0);
    setReady(false);
    setPlaying(autoplay);
  };

  const handlePrev = () => selectTrack((index - 1 + tracks.length) % tracks.length);
  const handleNext = () => selectTrack((index + 1) % tracks.length);

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };
  const handleSeekMouseDown = () => setSeeking(true);
  const handleSeekCommit = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
    setSeeking(false);
    const value = parseFloat((e.target as HTMLInputElement).value);
    playerRef.current?.seekTo(value, "fraction");
  };

  return (
    <section
      aria-label="Audio player"
      className="rounded-sm border border-border bg-card"
    >
      {/* Hidden ReactPlayer — controlled by custom UI */}
      <div className="sr-only" aria-hidden="true">
        {mounted && (
          <ReactPlayer
            ref={playerRef}
            url={url}
            playing={playing}
            volume={muted ? 0 : volume}
            muted={muted}
            width="0"
            height="0"
            onReady={() => setReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={handleNext}
            onDuration={(d) => setDuration(d)}
            onProgress={(state) => {
              if (!seeking) setPlayed(state.played);
            }}
            onError={() => setPlaying(false)}
            config={{
              soundcloud: {
                options: {
                  auto_play: false,
                  hide_related: true,
                  show_comments: false,
                  show_user: false,
                  show_reposts: false,
                  show_teaser: false,
                  visual: false,
                },
              },
            }}
          />
        )}
      </div>

      {/* Now playing */}
      <div className="border-b border-border px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
          Now Playing
        </p>
        <p
          className="mt-2 font-display text-2xl leading-tight text-foreground sm:text-3xl"
          aria-live="polite"
        >
          {current.title}
        </p>
        {current.subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{current.subtitle}</p>
        )}
      </div>

      {/* Controls */}
      <div className="px-6 py-5 sm:px-8 sm:py-6">
        {/* Progress */}
        <div className="flex items-center gap-3">
          <span className="w-10 shrink-0 text-right text-xs tabular-nums text-muted-foreground">
            {formatTime(played * duration)}
          </span>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onMouseDown={handleSeekMouseDown}
            onTouchStart={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekCommit}
            onTouchEnd={handleSeekCommit}
            onKeyUp={(e) => {
              const v = parseFloat((e.target as HTMLInputElement).value);
              playerRef.current?.seekTo(v, "fraction");
            }}
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={Math.max(1, Math.floor(duration))}
            aria-valuenow={Math.floor(played * duration)}
            aria-valuetext={`${formatTime(played * duration)} of ${formatTime(duration)}`}
            className="player-range flex-1"
            disabled={!ready}
          />
          <span className="w-10 shrink-0 text-xs tabular-nums text-muted-foreground">
            {formatTime(duration)}
          </span>
        </div>

        {/* Transport */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous track"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
            >
              <SkipBack className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
              aria-pressed={playing}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {playing ? (
                <Pause className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Play className="h-5 w-5 translate-x-[1px]" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next track"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
            >
              <SkipForward className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Unmute" : "Mute"}
              aria-pressed={muted}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
            >
              {muted || volume === 0 ? (
                <VolumeX className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Volume2 className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (parseFloat(e.target.value) > 0) setMuted(false);
              }}
              aria-label="Volume"
              className="player-range hidden w-28 sm:block"
            />
          </div>
        </div>
      </div>

      {/* Playlist */}
      <ol className="border-t border-border" aria-label="Track list">
        {tracks.map((t, i) => {
          const isActive = i === index;
          return (
            <li key={t.slug}>
              <button
                type="button"
                onClick={() => {
                  if (isActive) {
                    setPlaying((p) => !p);
                  } else {
                    selectTrack(i, true);
                  }
                }}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex w-full items-center gap-4 border-b border-border px-6 py-4 text-left transition-colors last:border-b-0 hover:bg-secondary/60 sm:px-8",
                  isActive && "bg-secondary/70",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-xs tabular-nums",
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  )}
                  aria-hidden="true"
                >
                  {isActive && playing ? (
                    <Pause className="h-3.5 w-3.5" />
                  ) : isActive ? (
                    <Play className="h-3.5 w-3.5 translate-x-[1px]" />
                  ) : (
                    (i + 1).toString().padStart(2, "0")
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-lg leading-tight text-foreground">
                    {t.title}
                  </span>
                  {t.subtitle && (
                    <span className="mt-0.5 block truncate text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {t.subtitle}
                    </span>
                  )}
                </span>
                <span className="sr-only">
                  {isActive
                    ? playing
                      ? "Pause this track"
                      : "Resume this track"
                    : "Play this track"}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
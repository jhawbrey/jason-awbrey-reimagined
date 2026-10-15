import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { heroImage, quotes, upcomingConcerts, videos } from "@/lib/content";
import { VideoGrid } from "@/components/VideoPlayer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jason Awbrey — Baritone" },
      {
        name: "description",
        content:
          "Baritone Jason Awbrey: vocal soloist and choral artist heralded for performances from the Renaissance through the 21st century.",
      },
      { property: "og:title", content: "Jason Awbrey — Baritone" },
      {
        property: "og:description",
        content:
          "Vocal soloist and choral artist. Watch performances, hear recordings, and view the upcoming concert calendar.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = videos.slice(0, 3);
  const next = upcomingConcerts[0];
  const pullQuote = quotes[0];
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-12 md:grid-cols-12 md:pb-28 md:pt-20">
          <div className="md:col-span-7 md:pt-8">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">
              Baritone · Dallas, Texas
            </p>
            <h1
              id="hero-heading"
              className="mt-6 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl md:text-7xl"
            >
              A lyric baritone for{" "}
              <em className="font-display italic text-accent">oratorio</em>,
              recital, and ensemble.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Heralded as having “one of the most gorgeous baritones on earth” by
              the Dallas Morning News, Jason Awbrey performs repertoire spanning 
              from the Medieval period through the 21st century across the United
              States, Mexico, and Europe.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/watch"
                className="inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent"
              >
                Watch performances
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/listen"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Listen to recordings
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <figure className="relative">
              <div className="absolute -inset-4 -z-10 rounded-sm bg-accent/10" aria-hidden />
              <img
                src={heroImage}
                alt="Portrait of baritone Jason Awbrey, seated in a black jacket, in black and white."
                width={680}
                height={680}
                className="aspect-square w-full rounded-sm object-cover shadow-xl"
                loading="eager"
              />
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Photograph © Jason Awbrey
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section aria-label="Press quote" className="border-y border-border bg-secondary/40">
        <figure className="mx-auto max-w-4xl px-6 py-16 text-center">
          <svg aria-hidden width="40" height="32" viewBox="0 0 40 32" className="mx-auto text-accent">
            <path
              d="M0 32V20C0 9 6 2 18 0v6c-7 2-10 6-10 12h10v14H0Zm22 0V20C22 9 28 2 40 0v6c-7 2-10 6-10 12h10v14H22Z"
              fill="currentColor"
            />
          </svg>
          <blockquote className="mt-6 font-display text-3xl italic leading-snug text-foreground sm:text-4xl">
            “{pullQuote.text}”
          </blockquote>
          <figcaption className="mt-6 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            — {pullQuote.source}
          </figcaption>
        </figure>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              About
            </p>
            <h2 id="about-heading" className="mt-3 font-display text-4xl text-foreground">
              An active vocal soloist & choral artist.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-8">
            <p>
              His lyric voice has garnered critical acclaim for performances of
              literature ranging from the early Renaissance period through the
              21st century. In a recital of German lieder with Voces Intimae,
              Scott Cantrell of the Dallas Morning News wrote that{" "}
              <em className="text-foreground">“everything sounded so easy, so natural”</em>{" "}
              and that <em className="text-foreground">“[it] was sheer magic.”</em>
            </p>
            <p>
              He has performed with professional ensembles throughout the United
              States, Mexico, and Europe, including Ars Lyrica of Houston, the
              Grammy®-winning Conspirare and Roomful of Teeth, Dallas Bach
              Society, Dallas Symphony, Santa Fe Desert Chorale, Orpheus Chamber
              Singers, San Antonio Symphony, Verdigris Ensemble, Vox Humana, and
              many more.
            </p>
            <p>
              Jason has recorded with Conspirare, Orpheus Chamber Singers,
              Verdigris Ensemble, and Vox Humana.
            </p>
          </div>
        </div>
      </section>

      {/* Featured video */}
      <section aria-labelledby="featured-heading" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
                Featured
              </p>
              <h2 id="featured-heading" className="mt-3 font-display text-4xl text-foreground">
                Watch a few performances
              </h2>
            </div>
            <Link
              to="/watch"
              className="hidden whitespace-nowrap text-sm text-muted-foreground underline-offset-4 hover:text-accent hover:underline sm:inline"
            >
              All videos →
            </Link>
          </div>
          <div className="mt-12">
            <VideoGrid videos={featured} />
          </div>
        </div>
      </section>

      {/* Next concert teaser */}
      {next && (
        <section aria-labelledby="next-heading" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-10 rounded-sm border border-border bg-card p-10 md:grid-cols-3">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent">
                Next concert
              </p>
              <h2 id="next-heading" className="mt-3 font-display text-3xl text-foreground">
                {next.date}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{next.time}</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-display text-2xl text-foreground">{next.program}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {next.presenter} · {next.venue}
              </p>
              <Link
                to="/schedule"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                View full schedule <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

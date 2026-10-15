import { createFileRoute } from "@tanstack/react-router";
import { pastConcerts, upcomingConcerts, type ScheduleItem } from "@/lib/content";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Jason Awbrey, Baritone" },
      {
        name: "description",
        content:
          "Upcoming and past concert engagements for baritone Jason Awbrey, including festivals, oratorio, and chamber performances.",
      },
      { property: "og:title", content: "Schedule — Jason Awbrey, Baritone" },
      {
        property: "og:description",
        content: "Upcoming engagements and a record of past performances.",
      },
    ],
  }),
  component: SchedulePage,
});

function Row({ item }: { item: ScheduleItem }) {
  return (
    <li
      key={item.timestamp ?? `${item.date}-${item.program ?? item.venue}`}
      className="grid gap-3 border-b border-border py-8 md:grid-cols-12 md:gap-8"
    >
      <div className="md:col-span-3">
        <p className="font-display text-2xl text-foreground">{item.date}</p>
        {item.time && <p className="mt-1 text-sm text-muted-foreground">{item.time}</p>}
      </div>
      <div className="md:col-span-6">
        <p className="text-[0.7rem] uppercase tracking-[0.24em] text-accent">
          {item.presenter}
        </p>
        {item.program && (
          <p className="mt-2 font-display text-xl text-foreground">{item.program}</p>
        )}
        {item.venue && <p className="mt-1 text-sm text-muted-foreground">{item.venue}</p>}
        {item.address &&
          (item.mapUrl ? (
            <a
              href={item.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              {item.address}
              <span className="sr-only"> (opens map in new tab)</span>
            </a>
          ) : (
            <p className="mt-1 text-sm text-muted-foreground">{item.address}</p>
          ))}
      </div>
      <div className="md:col-span-3 md:text-right">
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Details
            <span aria-hidden>↗</span>
            <span className="sr-only">(opens in new tab)</span>
          </a>
        )}
      </div>
    </li>
  );
}

function SchedulePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <header className="max-w-2xl">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-accent">Schedule</p>
        <h1 className="mt-4 font-display text-5xl text-foreground">Concert calendar.</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          A running record of upcoming and recent engagements. For booking
          inquiries, please reach out via the channels in the footer.
        </p>
      </header>

      <section aria-labelledby="upcoming-heading" className="mt-16">
        <h2
          id="upcoming-heading"
          className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
        >
          Upcoming
        </h2>
        <ul className="mt-4 border-t border-border">
          {upcomingConcerts.map((c) => (
            <Row key={c.timestamp ?? `${c.date}-${c.program ?? c.venue}`} item={c} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="past-heading" className="mt-20">
        <h2
          id="past-heading"
          className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
        >
          Past concerts
        </h2>
        <ul className="mt-4 border-t border-border">
          {pastConcerts.map((c) => (
            <Row key={c.timestamp ?? `${c.date}-${c.program ?? c.venue}`} item={c} />
          ))}
        </ul>
      </section>
    </div>
  );
}
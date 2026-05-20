import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-foreground">Jason Awbrey</p>
          <p className="mt-1 text-sm uppercase tracking-[0.28em] text-muted-foreground">
            Baritone
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Vocal soloist and choral artist based in Dallas, Texas. Available for oratorio, recital, and ensemble engagements.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">About</Link></li>
            <li><Link to="/watch" className="hover:text-accent">Watch</Link></li>
            <li><Link to="/listen" className="hover:text-accent">Listen</Link></li>
            <li><Link to="/schedule" className="hover:text-accent">Schedule</Link></li>
            <li><Link to="/press" className="hover:text-accent">Press</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-accent" href="https://instagram.com/jawbritone" target="_blank" rel="noopener noreferrer">
                Instagram <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="https://www.youtube.com/@jhawbrey/videos" target="_blank" rel="noopener noreferrer">
                YouTube channel <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="https://soundcloud.com/jason-awbrey" target="_blank" rel="noopener noreferrer">
                SoundCloud <span className="sr-only">(opens in new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jason Awbrey. All rights reserved.</p>
          <p>Photography and recordings © their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
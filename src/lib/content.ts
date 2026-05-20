export const videos = [
  { id: "AirW84B__8w", title: "J.S. Bach — BWV 62: Streite, siege, starker Held!", work: "Cantata BWV 62" },
  { id: "9BzHd4A7NX8", title: "J.S. Bach — BWV 147: Ich will von Jesu Wundern singen", work: "Cantata BWV 147" },
  { id: "AKTF9cXYHyU", title: "J.S. Bach — BWV 10: Gewaltige stößt Gott vom Stuhl", work: "Cantata BWV 10" },
  { id: "DgD3IcJ5f70", title: "J.S. Bach — BWV 140: Duet, Wenn kömmst du, mein Heil?", work: "Cantata BWV 140" },
  { id: "PUMDgL8aYwY", title: "J.S. Bach — BWV 12: Ich folge Christo nach", work: "Cantata BWV 12" },
  { id: "TDtxYN-UJAQ", title: "J.S. Bach — BWV 147: Verstockung kann Gewaltige verblenden", work: "Cantata BWV 147" },
  { id: "dIa5ngCVYQM", title: "J.S. Bach — BWV 140: So geh herein zu mir / Mein freund ist mein", work: "Cantata BWV 140" },
  { id: "u8olVxODht4", title: "J.S. Bach — BWV 78: Die Wunden, Nägel, Kron / Nun du wirst mein Gewissen stillen", work: "Cantata BWV 78" },
] as const;

export const tracks = [
  { slug: "barber-dover-beach-for-baritone-and-string-quartet", title: "Barber — Dover Beach", subtitle: "For baritone and string quartet" },
  { slug: "bwv-159-es-ist-volbracht", title: "Bach — BWV 159: Es ist vollbracht", subtitle: "Cantata aria" },
  { slug: "bwv-147-ich-will-von-jesu-wundern-singen", title: "Bach — BWV 147: Ich will von Jesu Wundern singen", subtitle: "Cantata aria" },
  { slug: "bwv-147-verstockung", title: "Bach — BWV 147: Verstockung kann Gewaltige verblenden", subtitle: "Cantata recitative" },
  { slug: "bwv-10-gewaltige-stosst-gott-vom-stuhl", title: "Bach — BWV 10: Gewaltige stößt Gott vom Stuhl", subtitle: "Cantata aria" },
  { slug: "arr-rutter-wexford-carol", title: "Rutter, arr. — Wexford Carol", subtitle: "Traditional carol" },
] as const;

export const quotes = [
  { text: "One of the most gorgeous baritones on earth.", source: "Dallas Morning News" },
  { text: "Everything sounded so easy, so natural — it was sheer magic.", source: "Scott Cantrell, Dallas Morning News" },
  { text: "Warmly rich below, rising to top notes either clarion or sweetly floated, as appropriate — everything finely focused.", source: "Dallas Morning News" },
  { text: "Delivered the solo with a finely textured baritone, elegant diction and sensitive shaping of lines.", source: "Dallas Morning News" },
  { text: "A voice that would be coveted by most English cathedral choirs.", source: "Theater Jones" },
  { text: "Sang with heart-rending beauty and sensitivity.", source: "Dallas Morning News" },
  { text: "A resonant and commanding soloist.", source: "Fort Worth Star-Telegram" },
  { text: "Any chance to listen to his radiant baritone is welcome.", source: "Theater Jones" },
  { text: "Honeyed baritone — perfect.", source: "Dallas Morning News" },
  { text: "The elegantly commanding baritone.", source: "Dallas Morning News" },
] as const;

export type ScheduleItem = {
  date: string;
  presenter: string;
  program: string;
  venue: string;
  address?: string;
  mapUrl?: string;
  time: string;
  link?: string;
};

export const upcomingConcerts: ScheduleItem[] = [
  { date: "May 30, 2026", presenter: "Charlotte Bach Festival", program: "Gloria! Bach, Handel, and Vivaldi", venue: "Sandra Levine Theatre, Gambrell Center, Queens University of Charlotte", address: "2319 Wellesley Avenue, Charlotte", mapUrl: "https://maps.app.goo.gl/rruVofXaGRMdy2q48", time: "7:30 PM", link: "https://bacharlotte.com/charlottebachfestival/gloria-bach-handel-vivaldi" },
  { date: "June 3, 2026", presenter: "Charlotte Bach Festival", program: "J.S. Bach: Es ist das Heil uns kommen her, BWV 9", venue: "Myers Park Presbyterian Church", address: "2501 Oxford Place, Charlotte", mapUrl: "https://maps.app.goo.gl/nLGDCC7hoUtDjgk2A", time: "12:00 PM", link: "https://bacharlotte.com/charlottebachfestival/tuning-in-bach-cantata-9" },
  { date: "June 3, 2026", presenter: "Charlotte Bach Festival", program: "Henry Purcell's Dido and Aeneas", venue: "Arts+ Community Campus", address: "2304 The Plaza, Charlotte", mapUrl: "https://maps.app.goo.gl/Vo3jZ2x7jEtBj15h9", time: "7:30 PM", link: "https://bacharlotte.com/charlottebachfestival/purcell-dido-aeneas" },
  { date: "June 4, 2026", presenter: "Charlotte Bach Festival", program: "G.F. Handel: My song shall be alway, HWV 252", venue: "Myers Park Presbyterian Church", address: "2501 Oxford Place, Charlotte", mapUrl: "https://maps.app.goo.gl/nLGDCC7hoUtDjgk2A", time: "12:00 PM", link: "https://bacharlotte.com/charlottebachfestival/tuning-in-handel-anthem-252" },
  { date: "June 4, 2026", presenter: "Charlotte Bach Festival", program: "Handel's Theodora", venue: "Sandra Levine Theatre, Gambrell Center, Queens University of Charlotte", address: "2319 Wellesley Avenue, Charlotte", mapUrl: "https://maps.app.goo.gl/rruVofXaGRMdy2q48", time: "7:30 PM", link: "https://bacharlotte.com/charlottebachfestival/handel-theodora" },
];

export const pastConcerts: ScheduleItem[] = [
  { date: "May 3, 2026", presenter: "Vox Seraphim", program: "Bach Magnificat", venue: "St Alban's Episcopal Church", address: "305 N 30th St, Waco", time: "4:00 PM" },
  { date: "Mar 29, 2026", presenter: "Incarnatus", program: "Handel: Messiah", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "4:00 PM" },
  { date: "Mar 3, 2026", presenter: "Bach's Lunch", program: "BuxWV 34, BWV 229, & SWV 482", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "12:15 PM" },
  { date: "Feb 17, 2026", presenter: "Bach's Lunch", program: "Bach: BWV 147", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "12:15 PM" },
  { date: "Jan 27, 2026", presenter: "Bach's Lunch", program: "Bach: BWV 192 & BWV 106", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "12:15 PM" },
  { date: "Dec 16, 2025", presenter: "Bach's Lunch", program: "Bach: BWV 246, Part 2", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "12:15 PM" },
  { date: "Dec 2, 2025", presenter: "Bach's Lunch", program: "Bach: BWV 246, Part 1", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "12:15 PM" },
  { date: "Nov 4, 2025", presenter: "Bach's Lunch", program: "Schütz: Musikalische Exequien", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "12:15 PM" },
  { date: "Nov 2, 2025", presenter: "Transfigured Nights", program: "Fauré Requiem", venue: "Church of the Transfiguration", address: "14115 Hillcrest Rd, Dallas", time: "7:00 PM" },
  { date: "Oct 7, 2025", presenter: "Bach's Lunch", program: "HWV 246 & BWV 196", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "12:15 PM" },
  { date: "Oct 5, 2025", presenter: "Lover's Lane Arts", program: "Brahms: Liebeslieder-Walzer / Thompson: Frostiana", venue: "Lover's Lane UMC", address: "9200 Inwood Rd, Dallas", time: "5:00 PM" },
  { date: "Apr 27, 2025", presenter: "Harmonia Stellarum", program: "Triumph, Triumph, Victoria!", venue: "First Lutheran Church", address: "1311 Holman Street, Houston", time: "4:00 PM" },
  { date: "Apr 13, 2025", presenter: "Church of the Incarnation", program: "Bach: Saint John Passion", venue: "Church of the Incarnation", address: "3966 McKinney Ave, Dallas", time: "4:00 PM" },
  { date: "Mar 17, 2025", presenter: "Church of the Transfiguration", program: "Barber: Dover Beach", venue: "Church of the Transfiguration", address: "Dallas, TX", time: "7:00 PM" },
  { date: "Dec 6–7, 2024", presenter: "St John's, Tulsa", program: "Handel: Messiah", venue: "St. John's Episcopal Church", address: "4200 S Atlanta Pl, Tulsa", time: "7:00 / 3:00 PM" },
];

export const heroImage =
  "https://jasonawbrey.com/static/e99e1fc794289686c76534671b1f8319/b3547/jasonawbrey-sq-hp.jpg";
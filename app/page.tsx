import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hector's Iron Painting & Wrought Iron Co — Bakersfield",
};

const PHONE = "(661) 667-3276";
const PHONE_HREF = "tel:+16616673276";
const ADDRESS = "4101 De Ette Ave, Bakersfield, CA 93313";
const HOURS = "Mon–Sat · 9 AM – 5 PM";
const FACEBOOK = "https://www.facebook.com/p/Hectors-Iron-painting-100058155382867/";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=4101%20De%20Ette%20Ave%2C%20Bakersfield%2C%20CA%2093313&output=embed";

const services = [
  {
    title: "Wrought Iron · On-Site Electrostatic",
    body: "Gates, fences, railings, ornamental metals — painted where they stand. Most painters don't own this equipment.",
    tags: ["Driveway gates", "Estate fencing", "Pool fencing", "Stair rails", "Ornamental"],
  },
  {
    title: "Ornamental & Decorative Metal",
    body: "Custom iron work, security bars, scrolls, light posts. We carry the Ornamental Metals CSLB classification — most painters do not.",
    tags: ["Security bars", "Light posts", "Awnings", "Custom work"],
  },
  {
    title: "Interior House Painting",
    body: "Whole-house repaints with the same patience we give a railing. Even sheen, true color, cut lines that hold.",
    tags: ["Walls", "Ceilings", "Trim", "Cabinets", "Doors"],
  },
  {
    title: "Exterior House Painting",
    body: "Stucco, wood, and metal exteriors prepped for Bakersfield sun. Twenty years has taught us which products fade and which hold.",
    tags: ["Stucco", "Siding", "Soffits", "Doors", "Exterior trim"],
  },
];

const stats = [
  { num: "20", label: "Years on the iron", note: "Established 2006" },
  { num: "37", label: "Verified reviews", note: "4.8 stars on Google" },
  { num: "2", label: "CSLB classes", note: "Painting · Ornamental Metals" },
  { num: "1", label: "Visit", note: "Mask, prep, paint, walk away" },
];

const reviews = [
  {
    body: "Best wrought iron finish I have seen in Kern County. The electrostatic process really does make a difference.",
    context: "Estate fencing · Bakersfield",
  },
  {
    body: "The driveway gate looked brand new when they finished — and they painted it right where it hangs.",
    context: "Wrought iron gate · residential",
  },
  {
    body: "Hector and his crew have been painting our house and fences for years. They show up when they say they will.",
    context: "Repeat customer · residential",
  },
];

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21h3z" />
  </svg>
);

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Painter",
    name: "Hector's Iron Painting & Wrought Iron Co",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4101 De Ette Ave",
      addressLocality: "Bakersfield",
      addressRegion: "CA",
      postalCode: "93313",
      addressCountry: "US",
    },
    telephone: PHONE,
    url: "https://hectors-iron-painting-wrought-iron-blue.vercel.app",
    priceRange: "$$",
    areaServed: "Bakersfield, CA",
    foundingDate: "2006",
    sameAs: [FACEBOOK],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "37" },
    openingHours: "Mo-Sa 09:00-17:00",
    hasCredential: "CSLB License #1009092",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP BAR — flat structural strip, not a glass pill */}
      <header className="border-b border-charcoal/8 bg-paper sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-3">
            <span className="font-display text-[22px] tracking-[-0.01em] text-charcoal">
              HECTOR&apos;S IRON
            </span>
            <span className="eyebrow hidden sm:inline">Bakersfield · Est. 2006</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-[12px] text-charcoal/70">
            <a href="#trade" className="hover:text-signal">The trade</a>
            <a href="#work" className="hover:text-signal">Work</a>
            <a href="#voice" className="hover:text-signal">Voice</a>
            <a href="#contact" className="hover:text-signal">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-[13px] tnum text-charcoal hover:text-signal"
          >
            <PhoneIcon /> <span className="hidden sm:inline">{PHONE}</span>
          </a>
        </div>
      </header>

      {/* HERO — typography monolith on pearl ground, with floating stat cards */}
      <section className="relative bg-paper overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-24 pb-32 lg:pt-32 lg:pb-44">
          <div className="settle">
            <span className="eyebrow">
              Bakersfield · CA · Specialty Painter · CSLB 1009092
            </span>
          </div>

          <h1 className="settle settle-1 anton-display mt-12 font-display text-[clamp(5rem,17vw,15rem)] uppercase text-charcoal max-w-[14ch]">
            Iron,
            <br />
            painted
            <br />
            on site.
          </h1>

          <div className="settle settle-2 mt-14 grid lg:grid-cols-12 gap-10 items-end">
            <p className="lg:col-span-7 text-[18px] leading-[1.55] text-charcoal/75 max-w-[58ch]">
              We bring the booth to you. A clamp grounds the metal, the paint exits the gun
              charged, and every picket — both faces, every scroll — bonds to a finish closer
              to powder coat than brush-and-roll. The gate stays on its hinges. The dog stays
              in the yard.
            </p>

            <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-3 bg-charcoal text-paper px-6 py-3.5 text-[13px] hover:bg-signal"
              >
                Call Hector
                <span className="group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
              </a>
              <a
                href="#trade"
                className="text-[13px] text-charcoal/65 hover:text-charcoal underline decoration-charcoal/20 underline-offset-[6px] hover:decoration-signal"
              >
                Read about the trade
              </a>
            </div>
          </div>
        </div>

        {/* Floating stat row — Soft Structuralism diffused-shadow cards */}
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 -mt-8 pb-16">
          <div className="settle settle-3 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-paper rounded-2xl px-7 py-7 lift-shadow border border-charcoal/4"
              >
                <p className="font-display text-[clamp(2.6rem,4vw,3.6rem)] leading-none text-charcoal tnum">
                  {s.num}
                </p>
                <p className="eyebrow mt-4">{s.label}</p>
                <p className="text-[12.5px] text-charcoal/55 mt-1.5 leading-snug">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADE — flat dark-charcoal panel with massive typographic explainer */}
      <section id="trade" className="bg-vantablack text-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-48 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow text-paper/55">The trade</span>
            <h2 className="anton-display mt-8 font-display text-[clamp(3.2rem,7vw,6rem)] uppercase text-paper max-w-[10ch]">
              Charge.
              <br />
              <span className="text-signal">Atomize.</span>
              <br />
              Cure.
              <br />
              Walk away.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-2 grid sm:grid-cols-2 gap-x-10 gap-y-12 text-[15px] leading-[1.65] text-paper/80">
            <div>
              <p className="font-display text-[1.6rem] leading-[1.1] uppercase text-paper">01 Charge</p>
              <p className="mt-3 max-w-[36ch]">
                A grounding clamp runs a low electrostatic charge through the iron. Every square
                inch becomes electrically attractive — both faces, every picket, every finial.
              </p>
            </div>
            <div>
              <p className="font-display text-[1.6rem] leading-[1.1] uppercase text-paper">02 Atomize</p>
              <p className="mt-3 max-w-[36ch]">
                The gun emits charged paint particles. They are drawn to the metal — not the
                bushes, not your driveway. No overspray, no waste, no wrap-around mess.
              </p>
            </div>
            <div>
              <p className="font-display text-[1.6rem] leading-[1.1] uppercase text-paper">03 Cure</p>
              <p className="mt-3 max-w-[36ch]">
                The film flows out smooth and dries hard. No drips. No thin patches on the back
                side. Closer to factory powder coat than brush-and-roll.
              </p>
            </div>
            <div>
              <p className="font-display text-[1.6rem] leading-[1.1] uppercase text-paper">04 Walk away</p>
              <p className="mt-3 max-w-[36ch]">
                The gate stays on its hinges. The fence stays in the ground. We mask, paint, and
                clean up in a single visit — most jobs in a day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK — Soft Structuralism floating cards in a 2x2 grid */}
      <section id="work" className="bg-pearl">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Work · Four lanes, one crew</span>
              <h2 className="anton-display mt-8 font-display text-[clamp(2.8rem,6.4vw,5.4rem)] uppercase text-charcoal max-w-[15ch]">
                The wrought-iron specialist who also paints the house.
              </h2>
            </div>
            <div className="lg:col-span-5 text-[15.5px] leading-[1.65] text-charcoal/75">
              <p>
                Two CSLB classifications — Painting and Decorating, plus Ornamental Metals — is
                rare in Kern County. It means one crew can finish your interior, your stucco,
                and the iron fence between them, to the same standard.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="bg-paper rounded-3xl p-9 lg:p-11 lift-shadow border border-charcoal/4 flex flex-col"
              >
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-signal">
                  {String(i + 1).padStart(2, "0")} · service
                </p>
                <h3 className="font-display text-[clamp(1.8rem,2.6vw,2.2rem)] uppercase tracking-[-0.005em] leading-[1.05] text-charcoal mt-5">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-charcoal/75 mt-5 flex-1">
                  {s.body}
                </p>
                <ul className="mt-7 pt-6 border-t border-charcoal/8 flex flex-wrap gap-x-2 gap-y-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] tracking-[0.04em] text-charcoal/65 bg-pearl px-2.5 py-1.5 rounded-full"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOICE — large pull-quote on paper, supporting reviews on cards */}
      <section id="voice" className="bg-paper border-y border-charcoal/8">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <span className="eyebrow">Voice of the work · 4.8 / 37 reviews</span>

          <p className="mt-10 font-display anton-display text-[clamp(2.4rem,6vw,5rem)] uppercase text-charcoal max-w-[18ch]">
            &ldquo;{reviews[0].body}&rdquo;
          </p>
          <p className="eyebrow mt-8">— {reviews[0].context}</p>

          <div className="mt-20 grid md:grid-cols-2 gap-5 pt-14 border-t border-charcoal/8">
            {reviews.slice(1).map((r, i) => (
              <figure
                key={i}
                className="bg-pearl rounded-3xl p-9 lift-shadow border border-charcoal/4"
              >
                <p className="text-signal text-[15px] mb-5">
                  ★ ★ ★ ★ ★
                </p>
                <blockquote className="text-[1.05rem] leading-[1.5] text-charcoal/85">
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <figcaption className="eyebrow mt-7 pt-5 border-t border-charcoal/8">
                  — {r.context}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-pearl">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Quote · same-day on most jobs</span>
            <h2 className="anton-display mt-8 font-display text-[clamp(3rem,6.4vw,5.4rem)] uppercase text-charcoal max-w-[12ch]">
              Got an iron job?
            </h2>
            <p className="mt-7 text-[16px] leading-[1.65] text-charcoal/75 max-w-[42ch]">
              We walk the run, measure the hardware, and send the price the same day. Most jobs
              schedule within the week.
            </p>

            <a
              href={PHONE_HREF}
              className="mt-10 inline-flex items-center gap-3 bg-charcoal text-paper px-7 py-4 text-[14px] tracking-[0.04em] hover:bg-signal"
            >
              <PhoneIcon />
              <span className="tnum">Call · {PHONE}</span>
              <ArrowRight />
            </a>

            <dl className="mt-14 grid grid-cols-1 gap-y-6 text-[14px]">
              <div className="flex items-baseline gap-5">
                <dt className="eyebrow w-[90px] shrink-0">Address</dt>
                <dd className="text-charcoal">{ADDRESS}</dd>
              </div>
              <div className="flex items-baseline gap-5">
                <dt className="eyebrow w-[90px] shrink-0">Hours</dt>
                <dd className="text-charcoal">{HOURS}</dd>
              </div>
              <div className="flex items-baseline gap-5">
                <dt className="eyebrow w-[90px] shrink-0">License</dt>
                <dd className="font-mono text-[13.5px] tnum text-charcoal">
                  CSLB #1009092
                  <span className="block text-[11.5px] text-charcoal/55 mt-0.5">Painting + Ornamental Metals</span>
                </dd>
              </div>
              <div className="flex items-baseline gap-5">
                <dt className="eyebrow w-[90px] shrink-0">Find us</dt>
                <dd>
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-charcoal hover:text-signal"
                  >
                    <FacebookIcon /> Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-paper rounded-3xl p-1.5 deep-shadow border border-charcoal/4">
              <div className="rounded-[calc(1.5rem-0.375rem)] overflow-hidden bg-vantablack">
                <iframe
                  src={MAPS_EMBED}
                  title="Hector's Iron Painting · 4101 De Ette Ave"
                  width="100%"
                  height="540"
                  style={{
                    border: 0,
                    display: "block",
                    filter: "invert(0.9) hue-rotate(180deg) grayscale(0.5)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-charcoal/8 bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p className="font-display text-[16px] tracking-[-0.005em] uppercase text-charcoal">
            HECTOR&apos;S IRON PAINTING & WROUGHT IRON CO
          </p>
          <p className="eyebrow">
            Bakersfield, CA · Est. 2006 · CSLB 1009092
          </p>
          <a href={PHONE_HREF} className="font-mono tnum text-[12.5px] text-charcoal hover:text-signal">
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}

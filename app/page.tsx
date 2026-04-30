import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hector's Iron Painting & Wrought Iron Co — Bakersfield",
};

const PHONE = "(661) 667-3276";
const PHONE_HREF = "tel:+16616673276";
const ADDRESS = "4101 De Ette Ave, Bakersfield, CA 93313";
const HOURS = "Monday — Saturday · 9 AM to 5 PM";
const FACEBOOK = "https://www.facebook.com/p/Hectors-Iron-painting-100058155382867/";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=4101%20De%20Ette%20Ave%2C%20Bakersfield%2C%20CA%2093313&output=embed";

const processSteps = [
  {
    code: "01",
    head: "Ground",
    body: "A clamp grounds the iron and runs a low charge through every picket, scroll, and finial.",
  },
  {
    code: "02",
    head: "Atomize",
    body: "Paint exits the gun as charged particles. They are drawn to the metal — not the bushes, not your driveway.",
  },
  {
    code: "03",
    head: "Cure",
    body: "The film flows out smooth, dries hard. Closer to powder coat than brush-and-roll.",
  },
  {
    code: "04",
    head: "Walk away",
    body: "The gate stays on its hinges. The dog stays in the yard. We mask, paint, and clean up in a single visit.",
  },
];

const services = [
  {
    code: "00 — flagship",
    title: "Wrought Iron, Painted On-Site",
    body: "Gates, fences, railings, and ornamental metals refinished where they stand using our electrostatic unit. Most Bakersfield painters do not own this equipment.",
    spec: ["Gates · driveway, walk-thru", "Fence runs · estate, residential", "Pool fencing", "Stair rails · balcony rails"],
  },
  {
    code: "01 — metals",
    title: "Ornamental & Decorative Metal",
    body: "Custom iron work, security bars, ornamental scrolls, light posts. We are dual-licensed for ornamental metal classification, which most painters are not.",
    spec: ["Window security bars", "Light posts · awnings", "Iron furniture", "Custom ornamental"],
  },
  {
    code: "02 — interior",
    title: "Interior House Painting",
    body: "Whole-house interior repaints with the same patience we give a railing. Cut lines, even sheen, true color across walls, ceilings, trim, and doors.",
    spec: ["Walls · ceilings", "Trim · base · crown", "Doors · cabinetry", "Texture matching"],
  },
  {
    code: "03 — exterior",
    title: "Exterior House Painting",
    body: "Stucco, wood, and metal exteriors prepped for Bakersfield sun. Two decades on the same roads has taught us which products hold and which fade.",
    spec: ["Stucco · siding", "Eaves · soffits", "Doors · trim", "Iron-house combo jobs"],
  },
];

const reviews = [
  {
    body: "Best wrought iron finish I have seen in Kern County. The electrostatic process really does make a difference.",
    context: "Estate fencing, Bakersfield",
  },
  {
    body: "The driveway gate looked brand new when they finished — and they painted it right where it hangs.",
    context: "Wrought iron gate, residential",
  },
  {
    body: "Hector and his crew have been painting our house and fences for years. They show up when they say they will.",
    context: "Repeat customer, residential",
  },
];

const ArrowOut = ({ className = "" }: { className?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

      {/* FLOATING ISLAND NAV — detached glass pill, top-center */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 lift">
        <div className="bg-paper/70 backdrop-blur-xl ring-1 ring-espresso/10 rounded-full pl-5 pr-1.5 py-1.5 flex items-center gap-5 shadow-[0_1px_0_oklch(0.18_0.014_38_/_0.04),0_24px_60px_-30px_oklch(0.18_0.014_38_/_0.18)]">
          <a href="/" className="flex items-center gap-2.5">
            <span className="block w-2 h-2 rounded-full bg-bronze" />
            <span className="font-display text-[15px] tracking-[-0.01em] text-espresso">
              Hector&apos;s Iron Painting
            </span>
          </a>
          <span className="hidden md:block h-4 w-px bg-espresso/15" />
          <nav className="hidden md:flex items-center gap-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-espresso/70">
            <a href="#trade" className="hover:text-bronze transition-colors fluid-1">Trade</a>
            <a href="#work" className="hover:text-bronze transition-colors fluid-1">Work</a>
            <a href="#voice" className="hover:text-bronze transition-colors fluid-1">Voice</a>
            <a href="#contact" className="hover:text-bronze transition-colors fluid-1">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="group bg-espresso text-paper rounded-full pl-4 pr-1.5 py-1.5 flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] hover:bg-bronze fluid-1"
          >
            <span className="hidden sm:inline tnum">{PHONE}</span>
            <span className="sm:hidden">Call</span>
            <span className="w-7 h-7 rounded-full bg-paper/15 flex items-center justify-center group-hover:translate-x-[1px] group-hover:-translate-y-[1px] fluid-1">
              <ArrowOut className="text-paper" />
            </span>
          </a>
        </div>
      </header>

      {/* HERO — Editorial Split */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT — typographic monolith */}
          <div className="lg:col-span-7 lg:pr-4">
            <div className="lift">
              <span className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/70">
                <span className="w-1 h-1 rounded-full bg-bronze" />
                Bakersfield · Specialty Painter · Est. 2006
              </span>
            </div>

            <h1 className="lift lift-1 mt-10 font-display text-[clamp(3.6rem,11vw,9.6rem)] leading-[0.88] tracking-[-0.025em] text-espresso">
              Painted
              <br />
              on the{" "}
              <em className="italic font-normal text-bronze">iron,</em>
              <br />
              on your
              <br />
              property.
            </h1>

            <p className="lift lift-2 mt-12 font-body text-[17px] leading-[1.55] text-espresso/80 max-w-[58ch]">
              Since 2006, Hector and his crew have refinished gates, fences, and ornamental
              metals across Kern County — using an electrostatic painting unit that bonds
              paint to charged metal on-site. The gate stays on its hinges. The fence stays
              in the ground. A factory finish applied at your address.
            </p>

            <div className="lift lift-3 mt-12 flex flex-wrap items-center gap-4">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-3 bg-espresso text-paper rounded-full pl-7 pr-2 py-2 font-mono uppercase tracking-[0.18em] text-[11px] hover:bg-bronze fluid-1"
              >
                Call Hector
                <span className="w-9 h-9 rounded-full bg-paper/15 flex items-center justify-center group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:scale-105 fluid-1">
                  <ArrowOut className="text-paper" />
                </span>
              </a>
              <a
                href="#trade"
                className="font-mono uppercase tracking-[0.18em] text-[11px] text-espresso/70 hover:text-espresso underline decoration-espresso/20 underline-offset-[6px] hover:decoration-bronze fluid-1"
              >
                Read about the trade
              </a>
            </div>
          </div>

          {/* RIGHT — process ladder */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-espresso/12">
            <p className="font-mono uppercase tracking-[0.22em] text-[10px] text-espresso/55 mb-8 lift lift-2">
              The trade · in four moves
            </p>
            <ol className="space-y-7">
              {processSteps.map((s, i) => (
                <li
                  key={s.code}
                  className={`grid grid-cols-[auto_1fr] gap-x-5 lift lift-${Math.min(i + 2, 4)}`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bronze tnum pt-1">
                    {s.code}
                  </span>
                  <div>
                    <p className="font-display text-[1.4rem] leading-tight tracking-[-0.012em] text-espresso">
                      {s.head}
                    </p>
                    <p className="text-[14px] leading-[1.6] text-espresso/70 mt-1.5 max-w-[34ch]">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* HAIRLINE META BAND — replaces the prior Specimen-card aside */}
      <section className="border-y border-espresso/10 bg-linen/40">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-7 grid grid-cols-2 lg:grid-cols-5 gap-y-5 gap-x-8 items-center">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[2rem] leading-none text-espresso tnum">20</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-espresso/60">years on the iron</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[2rem] leading-none text-espresso tnum">
              4.8<span className="text-bronze italic">★</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-espresso/60">37 reviews</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[14px] tnum text-espresso/90">#1009092</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-espresso/60">CSLB · 2 classes</span>
          </div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-espresso/70">
            Owner-operated
          </div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-espresso/70">
            Bakersfield · Kern County
          </div>
        </div>
      </section>

      {/* THE TRADE — single-paragraph cinematic explainer (NOT a 4-card grid) */}
      <section id="trade" className="bg-espresso text-paper relative">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
            <span className="w-1 h-1 rounded-full bg-bronze" />
            The trade
          </span>

          <p className="mt-10 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.18] tracking-[-0.012em] text-paper max-w-[28ch]">
            What we do is closer to{" "}
            <em className="italic text-bronze">powder coating</em> than to brush-and-roll.
          </p>

          <p className="mt-12 font-body text-[17px] leading-[1.7] text-paper/80 max-w-[68ch]">
            We bring the booth to you. A clamp grounds the metal and runs a low{" "}
            <span className="text-bronze">electrostatic charge</span> through it. Paint exits the
            gun as charged particles, which are drawn to the iron — not the bushes, not your
            driveway, not the back side of the picket. The film flows out, bonds evenly across
            scrolls and finials, and dries to a finish closer to factory than to a Saturday
            afternoon. The gate stays on its hinges. The fence stays in the ground. The dog
            stays in the yard. <span className="font-display italic text-paper">Most gates are
            not broken.</span> They are tired. We refinish them at your address in a single
            visit, mask off, and walk away.
          </p>

          <p className="mt-10 font-mono text-[10.5px] uppercase tracking-[0.22em] text-paper/45">
            — house philosophy, since 2006
          </p>
        </div>
      </section>

      {/* WORK — Double-Bezel cards in 2x2 */}
      <section id="work" className="bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/70">
                <span className="w-1 h-1 rounded-full bg-bronze" />
                Work · Four lanes
              </span>
              <h2 className="mt-9 font-display text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[1.0] tracking-[-0.022em] text-espresso max-w-[18ch]">
                The wrought-iron specialist who also{" "}
                <em className="italic text-bronze">paints the house.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-8 font-body text-[15.5px] leading-[1.65] text-espresso/75">
              <p>
                Two CSLB classes — Painting and Decorating, plus Ornamental Metals — is rare in
                Kern County. It means one crew can finish your interior, your stucco, and the
                iron fence between them, to the same standard.
              </p>
            </div>
          </div>

          {/* Double-Bezel grid */}
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {services.map((s) => (
              <article
                key={s.code}
                className="rounded-[2rem] bg-linen/50 ring-1 ring-espresso/10 p-1.5 group hover:bg-linen fluid-1"
              >
                <div className="rounded-[calc(2rem-0.375rem)] bg-paper p-8 lg:p-10 h-full shadow-[inset_0_1px_0_oklch(1_0_0_/_0.6)] flex flex-col">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-bronze">
                    {s.code}
                  </p>
                  <h3 className="mt-5 font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.05] tracking-[-0.012em] text-espresso">
                    {s.title}
                  </h3>
                  <p className="mt-5 font-body text-[15px] leading-[1.6] text-espresso/75 flex-1">
                    {s.body}
                  </p>
                  <ul className="mt-7 pt-6 border-t border-espresso/10 grid grid-cols-1 gap-y-2 font-mono text-[11px] tracking-[0.04em] text-espresso/65">
                    {s.spec.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="text-bronze">·</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOICE OF THE WORK — one heroic pull-quote + 2 supporting reviews */}
      <section id="voice" className="bg-linen/60 border-y border-espresso/10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <span className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/70 mb-12">
            <span className="w-1 h-1 rounded-full bg-bronze" />
            Voice of the work · 4.8 across 37
          </span>

          <blockquote className="font-display italic font-normal text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.08] tracking-[-0.018em] text-espresso max-w-[24ch]">
            &ldquo;{reviews[0].body}&rdquo;
          </blockquote>
          <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.22em] text-espresso/55">
            — {reviews[0].context}
          </p>

          <div className="mt-20 grid md:grid-cols-2 gap-12 lg:gap-20 pt-14 border-t border-espresso/12">
            {reviews.slice(1).map((r, i) => (
              <figure key={i}>
                <p className="flex gap-1 text-bronze text-[15px] leading-none mb-5">
                  {Array.from({ length: 5 }).map((_, k) => <span key={k}>★</span>)}
                </p>
                <blockquote className="font-display text-[1.4rem] leading-[1.35] tracking-[-0.01em] text-espresso max-w-[40ch]">
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-espresso/55">
                  — {r.context}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — split, double-frame map */}
      <section id="contact" className="bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-32 lg:py-44 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/70">
              <span className="w-1 h-1 rounded-full bg-bronze" />
              Quote · same-day on most jobs
            </span>

            <h2 className="mt-9 font-display text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.0] tracking-[-0.022em] text-espresso">
              The gate at the front drive,{" "}
              <em className="italic text-bronze">overdue?</em>
            </h2>

            <p className="mt-8 font-body text-[16px] leading-[1.65] text-espresso/75 max-w-[42ch]">
              Most jobs are quoted on a short visit — we walk the run, measure the hardware,
              and send the price the same day.
            </p>

            <a
              href={PHONE_HREF}
              className="group mt-10 inline-flex items-center gap-3 bg-espresso text-paper rounded-full pl-7 pr-2 py-2 font-mono uppercase tracking-[0.18em] text-[11px] hover:bg-bronze fluid-1"
            >
              <PhoneIcon /> Call {PHONE}
              <span className="w-9 h-9 rounded-full bg-paper/15 flex items-center justify-center group-hover:translate-x-[2px] group-hover:-translate-y-[1px] fluid-1">
                <ArrowOut className="text-paper" />
              </span>
            </a>

            <dl className="mt-14 grid grid-cols-1 gap-y-6 font-body text-[14.5px]">
              <div className="grid grid-cols-[120px_1fr] gap-x-5 items-baseline">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/55 pt-0.5">Address</dt>
                <dd className="text-espresso/85">{ADDRESS}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-x-5 items-baseline">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/55 pt-0.5">Hours</dt>
                <dd className="text-espresso/85">{HOURS}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-x-5 items-baseline">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/55 pt-0.5">License</dt>
                <dd className="font-mono text-[13.5px] tnum text-espresso/85">
                  CSLB #1009092
                  <span className="block text-[12px] text-espresso/60 mt-1">Painting & Decorating · Ornamental Metals</span>
                </dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-x-5 items-baseline">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/55 pt-0.5">Service area</dt>
                <dd className="text-espresso/85">Bakersfield & Kern County</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-x-5 items-baseline">
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-espresso/55 pt-0.5">Find us</dt>
                <dd>
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-espresso/85 hover:text-bronze fluid-1"
                  >
                    <FacebookIcon /> Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Double-Bezel map frame */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] bg-linen/60 ring-1 ring-espresso/10 p-1.5 shadow-[0_24px_60px_-30px_oklch(0.18_0.014_38_/_0.25)]">
              <div className="rounded-[calc(2rem-0.375rem)] overflow-hidden bg-espresso">
                <iframe
                  src={MAPS_EMBED}
                  title="Hector's Iron Painting location"
                  width="100%"
                  height="520"
                  style={{
                    border: 0,
                    filter: "invert(0.92) hue-rotate(180deg) grayscale(0.45) sepia(0.05)",
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
      <footer className="border-t border-espresso/10 bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="block w-2 h-2 rounded-full bg-bronze" />
            <p className="font-display text-[14px] tracking-[-0.01em] text-espresso">
              Hector&apos;s Iron Painting & Wrought Iron Co
            </p>
          </div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-espresso/55">
            Bakersfield, CA · Est. 2006 · Lic. 1009092
          </p>
          <a
            href={PHONE_HREF}
            className="font-mono tnum text-[12px] tracking-[0.04em] text-espresso/85 hover:text-bronze fluid-1"
          >
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}

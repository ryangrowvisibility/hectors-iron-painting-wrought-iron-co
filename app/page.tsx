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
    n: "I",
    title: "Electrostatic Wrought Iron",
    body:
      "Gates, fences, railings, and ornamental metals painted on-site. The metal carries a charge, the paint particles bond to it. No overspray. No removal. A factory finish at your address.",
    chips: ["Gates", "Fences", "Rails", "Ornamental"],
  },
  {
    n: "II",
    title: "Iron Fences & Gates — On-Site",
    body:
      "Long runs of fence and the heavy custom gate at the front drive — refinished where they stand. Crews mask, prep, and electrostatic-paint in a single visit. The gate stays on its hinges; the dog stays in the yard.",
    chips: ["Driveway gates", "Pool fencing", "Estate runs"],
  },
  {
    n: "III",
    title: "Interior House Painting",
    body:
      "Whole-house interior repaints with the same patience we give a railing. Cut lines, even sheen, true color across walls, ceilings, trim, and doors.",
    chips: ["Walls", "Ceilings", "Trim", "Cabinets"],
  },
  {
    n: "IV",
    title: "Exterior House Painting",
    body:
      "Stucco, wood, and metal exteriors — prepped for Bakersfield sun, painted to last. Two decades on the same roads has taught us which products hold and which fade.",
    chips: ["Stucco", "Trim", "Doors", "Soffits"],
  },
];

const stats = [
  { value: "20", label: "Years on the iron", note: "Established 2006" },
  { value: "4.8", label: "Stars · 37 reviews", note: "Google verified" },
  { value: "1009092", label: "CSLB License", note: "Painting + Ornamental Metals" },
  { value: "On-site", label: "Electrostatic finish", note: "No overspray, no removal" },
];

const reviews = [
  {
    body:
      "The driveway gate looked brand new when they finished — and they painted it right where it hangs. Fair price, clean job.",
    context: "Wrought iron gate, Bakersfield",
  },
  {
    body:
      "Hector and his crew have been painting our house and fences for years. They show up when they say they will and the work holds.",
    context: "Repeat customer, residential",
  },
  {
    body:
      "Best wrought iron finish I have seen in Kern County. The electrostatic process really does make a difference. Worth every dollar.",
    context: "Estate fencing, Bakersfield",
  },
];

const Mark = () => (
  <svg
    width="36" height="36" viewBox="0 0 60 60" aria-hidden="true"
    className="shrink-0"
  >
    <rect x="3" y="3" width="54" height="54" fill="none" stroke="currentColor" strokeWidth="1" />
    <path
      d="M14 14 v32 M30 14 v32 M46 14 v32 M14 30 h32"
      stroke="currentColor" strokeWidth="1.25" fill="none"
    />
    <circle cx="30" cy="30" r="3.6" fill="currentColor" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21h3z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13z" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>
);

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Painter",
    name: "Hector's Iron Painting & Wrought Iron Co",
    image: [],
    address: {
      "@type": "PostalAddress",
      streetAddress: "4101 De Ette Ave",
      addressLocality: "Bakersfield",
      addressRegion: "CA",
      postalCode: "93313",
      addressCountry: "US",
    },
    telephone: PHONE,
    url: "https://hectors-iron-painting-wrought-iron-co.vercel.app",
    priceRange: "$$",
    areaServed: "Bakersfield, CA",
    foundingDate: "2006",
    sameAs: [FACEBOOK],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "37",
    },
    openingHours: "Mo-Sa 09:00-17:00",
    hasCredential: "CSLB License #1009092 — Painting and Decorating + Ornamental Metals",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-ink/12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between text-ink">
          <div className="flex items-center gap-3">
            <Mark />
            <div className="leading-tight">
              <p className="font-display text-[15px] tracking-tight">
                Hector&apos;s Iron Painting
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-ink/55 font-mono">
                & Wrought Iron Co · Est. 2006
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-mono uppercase tracking-[0.14em]">
            <a href="#work" className="hover:text-copper">Work</a>
            <a href="#process" className="hover:text-copper">Process</a>
            <a href="#reviews" className="hover:text-copper">Reviews</a>
            <a href="#contact" className="hover:text-copper">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 text-[12px] font-mono tracking-[0.12em] uppercase hover:bg-copper transition-colors"
          >
            <PhoneIcon /> {PHONE}
          </a>
        </div>
      </header>

      <section className="border-b border-ink/12 bg-paper relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 rise rise-1">
            <p className="font-mono uppercase tracking-[0.22em] text-[11px] text-ink/60 mb-7">
              Bakersfield, CA · Specialty Painter
            </p>
            <h1 className="font-display text-[clamp(2.8rem,7.4vw,6.4rem)] leading-[0.95] tracking-[-0.02em] text-ink">
              Twenty years
              <br />
              <em className="italic font-normal text-copper">on the iron.</em>
              <br />
              Bakersfield&apos;s
              <br />
              wrought-iron painters.
            </h1>

            <div className="mt-9 max-w-[58ch] text-[17px] leading-[1.55] text-ink/80 rise rise-2">
              <p>
                Since 2006, Hector and his crew have refinished gates, fences, and
                ornamental metals across Kern County — using an{" "}
                <span className="font-display italic text-ink">electrostatic painting unit</span>{" "}
                that bonds paint to charged metal on-site. No overspray. No removing the gate. A
                finish that looks factory-applied, applied at your address.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 rise rise-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-4 font-mono uppercase tracking-[0.14em] text-[12px] hover:bg-copper transition-colors"
              >
                Call Hector <ArrowRight />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-4 border border-ink/25 font-mono uppercase tracking-[0.14em] text-[12px] hover:border-copper hover:text-copper transition-colors"
              >
                See the work
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 rise rise-4">
            <div className="deckle bg-bone p-7 text-ink relative">
              <p className="font-mono uppercase tracking-[0.22em] text-[10px] text-ink/55 mb-5">
                Specimen No. 037
              </p>
              <p className="font-display text-[5.5rem] leading-none tracking-[-0.04em]">
                4.8
                <span className="font-display italic text-copper text-[2.2rem] align-top">
                  ★
                </span>
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55 mt-2">
                Across 37 Google reviews
              </p>

              <div className="iron-rule my-6" />

              <dl className="grid grid-cols-2 gap-x-5 gap-y-4 text-[12px]">
                <div>
                  <dt className="font-mono uppercase tracking-[0.14em] text-[10px] text-ink/55">
                    Established
                  </dt>
                  <dd className="font-display text-[20px] mt-1">2006</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-[0.14em] text-[10px] text-ink/55">
                    Trade
                  </dt>
                  <dd className="font-display text-[20px] mt-1">On-site</dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-mono uppercase tracking-[0.14em] text-[10px] text-ink/55">
                    CSLB License
                  </dt>
                  <dd className="font-mono text-[14px] mt-1 tracking-[0.05em]">
                    #1009092
                  </dd>
                  <dd className="text-[11.5px] text-ink/65 leading-snug mt-1">
                    Painting & Decorating + Ornamental Metals
                  </dd>
                </div>
              </dl>

              <div className="iron-rule my-6" />

              <p className="font-script text-[2.4rem] leading-none text-copper">
                Hector
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 mt-1">
                Owner / Painter
              </p>
            </div>
          </aside>
        </div>

        <div className="border-t border-ink/12">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-[11px] font-mono uppercase tracking-[0.18em] text-ink/65">
            <span>Bakersfield · Kern County</span>
            <span>Mon – Sat · 9–5</span>
            <span>CSLB Lic. 1009092</span>
            <span>20 yrs · Owner-Operated</span>
          </div>
        </div>
      </section>

      <section id="process" className="bg-ink text-paper border-b border-ink relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono uppercase tracking-[0.22em] text-[10px] text-paper/55 mb-6">
              The trade · Electrostatic painting
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.02] tracking-[-0.02em]">
              Charge the metal.{" "}
              <em className="italic text-brass">Bond the finish.</em>{" "}
              Leave the gate where it stands.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-paper/15">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 text-[15px] leading-[1.6] text-paper/85">
              <div>
                <p className="font-mono uppercase tracking-[0.18em] text-[10px] text-brass mb-2">
                  01 · Charge
                </p>
                <p>
                  A clamp grounds the wrought iron and runs a low charge through the
                  metal. Every square inch of the work — both faces of every picket —
                  becomes electrically attractive.
                </p>
              </div>
              <div>
                <p className="font-mono uppercase tracking-[0.18em] text-[10px] text-brass mb-2">
                  02 · Atomize
                </p>
                <p>
                  Paint exits the electrostatic gun as charged particles. They are
                  drawn to the metal — not to the bushes, not to your driveway — and
                  bond evenly across edges, scrolls, and finials.
                </p>
              </div>
              <div>
                <p className="font-mono uppercase tracking-[0.18em] text-[10px] text-brass mb-2">
                  03 · Cure
                </p>
                <p>
                  The finish flows out smooth and dries hard. No drips. No thin spots
                  on the back side. Closer to powder coat than brush-and-roll.
                </p>
              </div>
              <div>
                <p className="font-mono uppercase tracking-[0.18em] text-[10px] text-brass mb-2">
                  04 · On your property
                </p>
                <p>
                  Most painters ask you to remove the gate or fence first. We bring
                  the booth to you — masking, prep, and finish coat in a single visit.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-paper/15">
              <p className="font-display italic text-[1.7rem] leading-snug text-brass">
                Most gates aren&apos;t replaceable. They&apos;re repaintable.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55 mt-3">
                — house philosophy, since 2006
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-paper border-b border-ink/12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="font-mono uppercase tracking-[0.22em] text-[11px] text-ink/55 mb-5">
                § Work · Four lanes
              </p>
              <h2 className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[0.98] tracking-[-0.02em] text-ink">
                The wrought-iron specialist
                <br />
                <em className="italic text-copper">who also paints the house.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-4 text-[15px] leading-[1.6] text-ink/75">
              <p>
                Two CSLB classes (Painting and Decorating + Ornamental Metals) is rare
                in Kern County. It means one crew can finish your interior, your
                stucco, and the iron fence between them — to the same standard, with
                the same warranty conversation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {services.map((s) => (
              <article key={s.n} className="border-t border-ink pt-7 group">
                <div className="flex items-baseline justify-between gap-6 mb-5">
                  <p className="font-display italic text-[1.6rem] text-copper leading-none">
                    {s.n}.
                  </p>
                  <h3 className="font-display text-[1.65rem] leading-tight tracking-[-0.01em] flex-1">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-[1.6] text-ink/80 max-w-[52ch]">
                  {s.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                  {s.chips.map((c) => (
                    <li
                      key={c}
                      className="font-mono uppercase tracking-[0.14em] text-[10px] text-ink/65 px-3 py-1.5 border border-ink/20"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone border-b border-ink/12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <div key={i} className="border-t border-ink pt-5">
                <p className="font-display text-[clamp(2.2rem,3.6vw,3.4rem)] leading-none tracking-[-0.02em] text-ink">
                  {s.value}
                </p>
                <p className="font-mono uppercase tracking-[0.16em] text-[11px] text-ink/65 mt-3">
                  {s.label}
                </p>
                <p className="text-[12.5px] text-ink/60 mt-1.5 leading-snug">
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-paper border-b border-ink/12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <p className="lg:col-span-3 font-mono uppercase tracking-[0.22em] text-[11px] text-ink/55">
              § Reviews · 4.8 stars · 37 reviewers
            </p>
            <h2 className="lg:col-span-9 font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.04] tracking-[-0.02em] text-ink">
              <em className="italic text-copper">What customers</em> say about
              the gate at the front drive.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {reviews.map((r, i) => (
              <figure key={i} className="flex flex-col">
                <div className="flex gap-1 text-copper text-lg leading-none mb-5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <span key={k}>★</span>
                  ))}
                </div>
                <blockquote className="font-display text-[1.25rem] leading-[1.4] text-ink mb-6 flex-1">
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <figcaption className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink/55 border-t border-ink/15 pt-4">
                  {r.context}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink text-paper">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono uppercase tracking-[0.22em] text-[10px] text-paper/55 mb-6">
              § Contact
            </p>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.98] tracking-[-0.02em]">
              Got a gate that&apos;s overdue?{" "}
              <em className="italic text-brass">Call Hector.</em>
            </h2>
            <p className="mt-7 text-[16px] leading-[1.6] text-paper/80 max-w-[42ch]">
              Most jobs are quoted on a short visit — we walk the run, measure the
              hardware, and send the price the same day.
            </p>

            <div className="mt-10 space-y-5 font-mono text-[13.5px]">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 text-paper hover:text-brass transition-colors"
              >
                <PhoneIcon />
                <span className="tracking-[0.05em]">{PHONE}</span>
              </a>
              <p className="flex items-start gap-3 text-paper/85">
                <span className="pt-1"><PinIcon /></span>
                <span className="tracking-[0.04em] leading-snug">
                  {ADDRESS}
                </span>
              </p>
              <p className="flex items-center gap-3 text-paper/85">
                <ClockIcon />
                <span className="tracking-[0.05em]">{HOURS}</span>
              </p>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-paper hover:text-brass transition-colors"
              >
                <FacebookIcon />
                <span className="tracking-[0.05em]">Facebook</span>
              </a>
            </div>

            <div className="mt-10 pt-7 border-t border-paper/15">
              <p className="font-mono uppercase tracking-[0.18em] text-[10px] text-paper/55 mb-2">
                License
              </p>
              <p className="font-mono text-[14px] tracking-[0.06em] text-brass">
                CSLB #1009092
              </p>
              <p className="text-[12px] text-paper/65 leading-snug mt-1.5">
                Painting and Decorating · Ornamental Metals
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-paper/20 p-1.5 bg-paper/5">
              <iframe
                src={MAPS_EMBED}
                title="Hector's Iron Painting location"
                width="100%"
                height="380"
                style={{
                  border: 0,
                  filter: "invert(0.92) hue-rotate(180deg) grayscale(0.4)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 spec-grid border border-paper/15 p-7 bg-paper/[0.03]">
              <p className="font-mono uppercase tracking-[0.22em] text-[10px] text-paper/55 mb-4">
                Specimen card
              </p>
              <p className="font-display text-[1.4rem] leading-snug text-paper">
                &ldquo;Best wrought iron finish I have seen in Kern County. The
                electrostatic process really does make a difference.&rdquo;
              </p>
              <div className="iron-rule my-6 opacity-30" />
              <p className="font-script text-[2.6rem] leading-none text-brass">
                Hector
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55 mt-1">
                Owner · Bakersfield · Since 2006
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-paper text-ink border-t border-ink/15">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Mark />
            <div className="leading-tight">
              <p className="font-display text-[14px]">Hector&apos;s Iron Painting & Wrought Iron Co</p>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink/55">
                Bakersfield · Est. 2006 · Lic. 1009092
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/65">
            <a href={PHONE_HREF} className="hover:text-copper">{PHONE}</a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-copper inline-flex items-center gap-1.5">
              <FacebookIcon /> FB
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

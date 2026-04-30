import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hector's Iron Painting & Wrought Iron Co — Bakersfield",
};

const PHONE = "(661) 667-3276";
const PHONE_HREF = "tel:+16616673276";
const ADDRESS = "4101 De Ette Ave, Bakersfield, CA 93313";
const HOURS = "Monday – Saturday · 9 AM – 5 PM";
const FACEBOOK = "https://www.facebook.com/p/Hectors-Iron-painting-100058155382867/";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=4101%20De%20Ette%20Ave%2C%20Bakersfield%2C%20CA%2093313&output=embed";

const processSteps = [
  {
    n: "01",
    title: "Charge",
    body: "We arrive at your address with the electrostatic unit. A grounding clamp attaches to the wrought iron and runs a low-voltage charge through the metal. Every square inch — both faces of every picket, every scroll, every finial — becomes electrically attractive. This step takes about ten minutes and replaces the half-day of disassembly most painters require.",
  },
  {
    n: "02",
    title: "Atomize",
    body: "Paint exits the gun as charged particles. They are drawn to the iron — not the bushes, not your driveway, not the back side of the picket. Coverage on the back faces is the same as the fronts, which is impossible to achieve with a brush or a conventional sprayer without taking the gate apart. Overspray is essentially nil.",
  },
  {
    n: "03",
    title: "Cure",
    body: "The film flows out smooth and dries hard. There are no drips. No thin spots. No inside corners that you'll spot in the right light three weeks later. The finish has the bonded look of factory powder coat — closer to the gates that come from a manufacturer than to anything you can do with a brush-and-roll.",
  },
  {
    n: "04",
    title: "Walk away",
    body: "We mask the surrounding area, paint, let it set, and clean up — all in a single visit. Most jobs finish the same day. The gate stays on its hinges through the entire process. The fence stays in the ground. The dog stays in the yard. We hand you back a property that looks like nothing happened, except the iron looks new.",
  },
];

const services = [
  {
    code: "01 — flagship",
    title: "On-Site Electrostatic Wrought Iron",
    body: "Driveway gates, estate fence runs, pool fencing, balcony rails, ornamental scrolls, and decorative metal — refinished where they stand. Most painters in Bakersfield don't own this equipment. It is the difference between a gate that looks like it was repainted and a gate that looks new.",
    tags: ["Driveway gates", "Estate fence runs", "Pool fencing", "Stair rails", "Ornamental scrolls", "Custom metalwork"],
  },
  {
    code: "02 — metals",
    title: "Ornamental & Decorative Metal Refinishing",
    body: "We carry the CSLB Ornamental Metals classification — most painters do not. That means we can finish security bars, light posts, awnings, custom iron work, and architectural metal to the same standard as the gates. The state recognizes us as both a Painting and Decorating contractor and an Ornamental Metals contractor.",
    tags: ["Security bars", "Light posts", "Awnings", "Iron furniture", "Architectural metal", "Custom ornamental"],
  },
  {
    code: "03 — interior",
    title: "Interior House Painting",
    body: "Whole-house repaints, single rooms, cabinet refinishes, trim and door work. The same patience we give a wrought-iron picket gets applied to a cut line on a baseboard. The eye should see the room when it walks in — not the paint job.",
    tags: ["Walls", "Ceilings", "Trim & base", "Crown molding", "Cabinets", "Doors"],
  },
  {
    code: "04 — exterior",
    title: "Exterior House Painting",
    body: "Stucco, wood, and metal exteriors prepped for Bakersfield sun. Twenty years on the same Kern County roads has taught us which products fade and which hold against summer at 105°. We pressure-wash, scrape failure points, prime where it matters, and finish with paints we have watched perform for two decades.",
    tags: ["Stucco", "Siding", "Soffits & eaves", "Doors", "Exterior trim", "Iron-house combos"],
  },
];

const testimonials = [
  {
    body: "Best wrought iron finish I have seen in Kern County. The electrostatic process really does make a difference — every angle of the picket has the same coverage. Worth every dollar.",
    name: "Estate fencing customer",
    context: "Wrought iron · Bakersfield",
  },
  {
    body: "The driveway gate looked brand new when they finished — and they painted it right where it hangs. Fair price, clean job, and no hassle of taking the gate apart. Will absolutely call them back.",
    name: "Driveway gate customer",
    context: "Iron gate · residential",
  },
  {
    body: "Hector and his crew have been painting our house and fences for years. They show up when they say they will and the work holds. We've recommended them to everyone on the street.",
    name: "Repeat customer",
    context: "Whole-house + iron · Bakersfield",
  },
  {
    body: "I needed a long stretch of pool fencing refinished and a contractor who didn't want to remove the panels. Hector's crew handled it on-site in a day. Finish is perfect three years later.",
    name: "Pool fence customer",
    context: "Pool fencing · Bakersfield",
  },
];

const stats = [
  { num: "20", label: "Years on the iron", note: "Established 2006" },
  { num: "37", label: "Verified reviews", note: "4.8★ on Google" },
  { num: "2", label: "CSLB classes", note: "Painting + Ornamental Metals" },
  { num: "1", label: "Visit", note: "Mask, prep, paint, walk away" },
];

const faqs = [
  {
    q: "Do you really paint wrought iron without removing it?",
    a: "Yes. The electrostatic unit charges the iron in place, and the paint particles are drawn to the metal — not the surrounding plants, driveway, or wall. We mask off the area, run a power source to the unit, and finish the iron where it sits. The gate stays on its hinges, the fence stays in the ground.",
  },
  {
    q: "What's electrostatic painting and why does it matter for iron?",
    a: "Standard sprayers and brushes leave thin coverage on the back faces of pickets, scrolls, and finials. To get even coverage you have to disassemble the iron — which is expensive and risks damaging hardware. Electrostatic painting solves this: the metal is electrically charged, paint particles are drawn to every face evenly, and the finish bonds tighter than brush-and-roll. It's closer to factory powder coat.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We carry CSLB License #1009092 covering both Painting and Decorating (Class C-33) and Ornamental Metals. Most painting contractors do not carry the Ornamental Metals classification, which limits what kinds of metalwork they're allowed to refinish under California law. We carry full general liability insurance.",
  },
  {
    q: "What areas do you serve?",
    a: "Bakersfield and the surrounding Kern County area — including Oildale, Rosedale, Stockdale, the southwest, the northeast, and the smaller communities out toward Tehachapi and Lake Isabella for larger jobs. If you're not sure whether we cover your area, call.",
  },
  {
    q: "Do you also do interior and exterior house painting?",
    a: "Yes — that's roughly half the work we do. Two-CSLB-class contractors are rare, and one of the practical benefits is that one crew can finish your interior, your stucco, and the iron fence between them, to the same standard, with one warranty conversation.",
  },
  {
    q: "How long does a typical wrought-iron job take?",
    a: "A residential driveway gate is usually one day on site, including masking and cleanup. A long estate fence run is two to four days depending on length and detail. We give a specific schedule with the quote, and we don't slip it without calling first.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. We come out, walk the work, take measurements, and send the price the same day or the next morning. There's no charge for the visit and no obligation.",
  },
  {
    q: "How quickly can you start?",
    a: "Most jobs schedule within the same week. During peak summer (April–August) it's sometimes two weeks out. Emergency repaints — for example, gate damage that exposes bare metal — get prioritized.",
  },
];

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8v3h2.5V21h3z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="faq-icon">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
    hasCredential: "CSLB License #1009092 — Painting and Decorating + Ornamental Metals",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER — sticky structural strip */}
      <header className="border-b border-charcoal/8 bg-paper sticky top-0 z-40 backdrop-blur-sm">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="/" className="flex items-baseline gap-3">
            <span className="font-display text-[22px] tracking-[-0.01em] text-charcoal">
              HECTOR&apos;S IRON
            </span>
            <span className="eyebrow hidden sm:inline">Bakersfield · Est. 2006</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-[12px] text-charcoal/70">
            <a href="#trade" className="hover:text-signal">Trade</a>
            <a href="#process" className="hover:text-signal">Process</a>
            <a href="#work" className="hover:text-signal">Work</a>
            <a href="#voice" className="hover:text-signal">Reviews</a>
            <a href="#faq" className="hover:text-signal">FAQ</a>
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

      {/* HERO — Editorial Split */}
      <section className="relative bg-paper overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-24 pb-20 lg:pt-32 lg:pb-28 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 settle">
            <span className="eyebrow">
              Bakersfield · CA · Specialty Painter · CSLB 1009092
            </span>

            <h1 className="settle settle-1 anton-display mt-12 font-display text-[clamp(4rem,12vw,11rem)] uppercase text-charcoal max-w-[14ch]">
              Iron,
              <br />
              painted
              <br />
              on site.
            </h1>

            <p className="settle settle-2 mt-12 text-[18px] leading-[1.6] text-charcoal/75 max-w-[58ch]">
              We bring the booth to you. A clamp grounds the metal, the paint exits the gun
              charged, and every picket — both faces, every scroll — bonds to a finish closer
              to powder coat than brush-and-roll. The gate stays on its hinges. The dog stays
              in the yard. Most jobs finish the same day.
            </p>

            <div className="settle settle-3 mt-12 flex flex-wrap items-center gap-4">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-3 bg-charcoal text-paper px-6 py-3.5 text-[13px] hover:bg-signal"
              >
                Call Hector
                <span className="group-hover:translate-x-1 transition-transform"><ArrowRight /></span>
              </a>
              <a
                href="#process"
                className="text-[13px] text-charcoal/65 hover:text-charcoal underline decoration-charcoal/20 underline-offset-[6px] hover:decoration-signal"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* RIGHT — typeset summary aside */}
          <aside className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-charcoal/12 settle settle-2">
            <p className="eyebrow mb-7">In a sentence</p>
            <p className="font-display text-[clamp(1.6rem,2.4vw,2rem)] leading-[1.2] uppercase text-charcoal max-w-[20ch]">
              The wrought-iron specialist who also paints the house.
            </p>
            <div className="mt-10 pt-7 border-t border-charcoal/12 space-y-4 font-mono text-[12px] tracking-[0.04em] text-charcoal/75">
              <p><span className="eyebrow !text-[10px] !text-charcoal/45">Owner</span><br /><span className="text-[14px] tracking-[-0.005em] text-charcoal">Hector</span> — owner-operated since 2006</p>
              <p><span className="eyebrow !text-[10px] !text-charcoal/45">Trade</span><br />Painting and Decorating · Ornamental Metals</p>
              <p><span className="eyebrow !text-[10px] !text-charcoal/45">Service area</span><br />Bakersfield · Kern County</p>
              <p><span className="eyebrow !text-[10px] !text-charcoal/45">Reach</span><br /><a href={PHONE_HREF} className="tnum hover:text-signal">{PHONE}</a> · {HOURS.replace(' · ', ', ')}</p>
            </div>
          </aside>
        </div>

        {/* RATING + YEAR-SPAN inline band */}
        <div className="border-y border-charcoal/8 bg-pearl/40">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-x-10 gap-y-3 text-[12px] text-charcoal/70">
            <p className="flex items-center gap-3">
              <span className="text-signal text-[15px] tracking-[0.06em]">★ ★ ★ ★ ★</span>
              <span><span className="text-charcoal tnum font-medium">4.8</span> across <span className="text-charcoal tnum">37</span> Google reviews</span>
            </p>
            <p className="font-mono tracking-[0.16em] uppercase text-[10.5px]">
              <span className="text-charcoal tnum">2006</span> &nbsp;························&nbsp; <span className="text-signal tnum">2025</span> &nbsp;·&nbsp; Twenty years on the iron
            </p>
            <p className="font-mono tracking-[0.16em] uppercase text-[10.5px]">
              CSLB <span className="text-charcoal tnum">#1009092</span>
            </p>
          </div>
        </div>
      </section>

      {/* TRADE — full-bleed dark band, philosophy in owner's voice */}
      <section id="trade" className="bg-vantablack text-paper">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <span className="eyebrow !text-paper/55">The trade · in plain language</span>

          <p className="mt-12 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[1.05] tracking-[-0.012em] text-paper max-w-[20ch]">
            Most gates are not broken. <span className="text-signal">They are tired.</span>
          </p>

          <p className="mt-12 text-[17px] leading-[1.75] text-paper/82 max-w-[68ch]">
            What we do is closer to powder coating than to brush-and-roll. We bring an
            electrostatic painting unit to your address. A clamp grounds the metal and runs a
            low charge through it. Paint exits the gun as charged particles, which are drawn
            to the iron — not the bushes, not the driveway, not the back side of the picket.
            The film flows out, bonds evenly across scrolls and finials, and dries to a finish
            closer to factory than to a Saturday afternoon.
          </p>

          <p className="mt-6 text-[17px] leading-[1.75] text-paper/82 max-w-[68ch]">
            The practical effect is that we don't have to take the gate apart. We don't have
            to remove the fence. We don't have to drive a rolling tarp through your yard.
            We <span className="text-signal">bring the booth to your address</span>, paint
            the iron where it stands, and clean up. The dog stays in the yard. The gate stays
            on its hinges. Most jobs are one visit, start to finish.
          </p>

          <p className="mt-12 eyebrow !text-paper/45">— house philosophy, since 2006</p>
        </div>
      </section>

      {/* PROCESS — Numbered list, photo-paired (no photos → typographic numerals) */}
      <section id="process" className="bg-pearl border-y border-charcoal/8">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
            <div className="lg:col-span-7">
              <span className="eyebrow">Process · in four moves</span>
              <h2 className="anton-display mt-8 font-display text-[clamp(2.4rem,5.4vw,4.8rem)] uppercase text-charcoal max-w-[16ch]">
                Charge.{" "}
                <span className="text-signal">Atomize.</span>{" "}
                Cure. Walk away.
              </h2>
            </div>
            <div className="lg:col-span-5 text-[15.5px] leading-[1.7] text-charcoal/75">
              <p>
                Each step exists for a specific reason. We have refined this sequence across
                roughly three thousand jobs in twenty years. The order matters. The timing
                matters. Below is the actual work, in plain language.
              </p>
            </div>
          </div>

          <ol className="space-y-3">
            {processSteps.map((s) => (
              <li key={s.n} className="bg-paper rounded-2xl p-8 lg:p-10 lift-shadow border border-charcoal/4 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-10 gap-y-4">
                <div className="flex md:flex-col items-baseline gap-3 md:gap-2">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-signal tnum">{s.n}</span>
                  <span className="font-display text-[clamp(1.6rem,2.4vw,2rem)] uppercase text-charcoal leading-none">{s.title}</span>
                </div>
                <p className="text-[15.5px] leading-[1.7] text-charcoal/80 max-w-[68ch]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPARISON — us vs traditional brush-and-roll */}
      <section className="bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="eyebrow">Why electrostatic — vs the alternative</span>
              <h2 className="anton-display mt-8 font-display text-[clamp(2.4rem,5.4vw,4.8rem)] uppercase text-charcoal max-w-[16ch]">
                The same gate, two ways.
              </h2>
            </div>
            <div className="lg:col-span-5 text-[15.5px] leading-[1.7] text-charcoal/75">
              <p>
                Most painting contractors quote wrought iron as a brush-and-roll job. The
                economics make sense for them; the result usually doesn't make sense for you.
                Here is what changes when we run electrostatic instead.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            <div className="bg-pearl/60 rounded-3xl p-9 lg:p-11 border border-charcoal/8">
              <p className="eyebrow">Traditional brush-and-roll</p>
              <h3 className="font-display text-[1.6rem] uppercase text-charcoal/85 mt-4 leading-tight">The conventional way.</h3>
              <ul className="mt-7 space-y-4 text-[14.5px] leading-[1.6] text-charcoal/70">
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-charcoal/40 mt-1.5">—</span><span>Often requires removing the gate or fence panels to reach the back side of the iron.</span></li>
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-charcoal/40 mt-1.5">—</span><span>Coverage is uneven across pickets and finials — back faces typically get a thin coat.</span></li>
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-charcoal/40 mt-1.5">—</span><span>Visible brush marks and drips, especially on scroll work and ornamental detail.</span></li>
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-charcoal/40 mt-1.5">—</span><span>Two- to four-day timeline: disassemble, paint, reassemble, hardware re-set.</span></li>
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-charcoal/40 mt-1.5">—</span><span>Overspray on driveways, plants, walls — masking adds time and cost.</span></li>
              </ul>
            </div>
            <div className="bg-charcoal text-paper rounded-3xl p-9 lg:p-11 deep-shadow">
              <p className="eyebrow !text-signal">On-site electrostatic</p>
              <h3 className="font-display text-[1.6rem] uppercase text-paper mt-4 leading-tight">How we do it.</h3>
              <ul className="mt-7 space-y-4 text-[14.5px] leading-[1.6] text-paper/85">
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-signal mt-1.5">+</span><span>Iron stays on its hinges and in the ground. No removal, no reassembly.</span></li>
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-signal mt-1.5">+</span><span>Charged paint particles wrap evenly to every face — both sides of every picket.</span></li>
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-signal mt-1.5">+</span><span>Smooth bonded finish — closer to factory powder coat than brush-and-roll.</span></li>
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-signal mt-1.5">+</span><span>Most jobs complete in a single visit, same day.</span></li>
                <li className="grid grid-cols-[12px_1fr] gap-3"><span className="text-signal mt-1.5">+</span><span>Negligible overspray — paint goes where the metal is, not where it isn&apos;t.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORK — Service Detail Cards in 2x2 */}
      <section id="work" className="bg-pearl border-y border-charcoal/8">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="eyebrow">Work · four lanes, one crew</span>
              <h2 className="anton-display mt-8 font-display text-[clamp(2.6rem,5.6vw,5rem)] uppercase text-charcoal max-w-[15ch]">
                Iron is the specialty. The house is the rest of the job.
              </h2>
            </div>
            <div className="lg:col-span-5 text-[15.5px] leading-[1.7] text-charcoal/75">
              <p>
                Two CSLB classes — Painting and Decorating, plus Ornamental Metals — is rare in
                Kern County. It means one crew can finish your interior, your stucco, and the
                iron fence between them, to the same standard, with one warranty conversation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <article
                key={i}
                className="bg-paper rounded-3xl p-9 lg:p-11 lift-shadow border border-charcoal/4 flex flex-col"
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-signal tnum">{s.code}</p>
                <h3 className="font-display text-[clamp(1.7rem,2.6vw,2.2rem)] uppercase tracking-[-0.005em] leading-[1.05] text-charcoal mt-5">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-charcoal/75 mt-5 flex-1">{s.body}</p>
                <ul className="mt-7 pt-6 border-t border-charcoal/8 flex flex-wrap gap-x-2 gap-y-2">
                  {s.tags.map((t) => (
                    <li key={t} className="text-[11px] tracking-[0.04em] text-charcoal/65 bg-pearl px-2.5 py-1.5 rounded-full">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PULL-QUOTE — single oversized */}
      <section className="bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <span className="eyebrow">Voice of the work</span>
          <p className="mt-10 font-display anton-display text-[clamp(2.4rem,6vw,5.4rem)] uppercase text-charcoal max-w-[18ch]">
            &ldquo;{testimonials[0].body}&rdquo;
          </p>
          <p className="eyebrow mt-8">— {testimonials[0].context}</p>
        </div>
      </section>

      {/* TESTIMONIAL CARDS — supporting reviews */}
      <section id="voice" className="bg-pearl border-y border-charcoal/8">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 items-baseline mb-16">
            <p className="lg:col-span-3 eyebrow">More from customers</p>
            <h2 className="lg:col-span-9 anton-display font-display text-[clamp(2.2rem,4.8vw,4rem)] uppercase text-charcoal max-w-[20ch]">
              Three more, in different rooms of the same conversation.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {testimonials.slice(1).map((t, i) => (
              <figure key={i} className="bg-paper rounded-3xl p-8 lg:p-9 lift-shadow border border-charcoal/4 flex flex-col">
                <p className="text-signal text-[15px] tracking-[0.06em] mb-5">★ ★ ★ ★ ★</p>
                <blockquote className="text-[15.5px] leading-[1.6] text-charcoal/85 flex-1">
                  &ldquo;{t.body}&rdquo;
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-charcoal/8">
                  <p className="text-[13.5px] text-charcoal">{t.name}</p>
                  <p className="eyebrow mt-1">{t.context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — 4-stat band */}
      <section className="bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="count-in bg-pearl/50 rounded-2xl px-7 py-9 border border-charcoal/4"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <p className="font-display text-[clamp(2.8rem,4.4vw,4rem)] leading-none text-charcoal tnum">{s.num}</p>
                <p className="eyebrow mt-5">{s.label}</p>
                <p className="text-[12.5px] text-charcoal/55 mt-2 leading-snug">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Accordion */}
      <section id="faq" className="bg-pearl border-y border-charcoal/8">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-10 items-baseline mb-12">
            <p className="lg:col-span-3 eyebrow">Frequently asked</p>
            <h2 className="lg:col-span-9 anton-display font-display text-[clamp(2.4rem,5.2vw,4.4rem)] uppercase text-charcoal max-w-[18ch]">
              Questions worth answering before you call.
            </h2>
          </div>

          <div className="divide-y divide-charcoal/10 border-t border-b border-charcoal/15">
            {faqs.map((f, i) => (
              <details key={i} className="faq group" {...(i === 0 ? { open: true } : {})}>
                <summary className="py-7 flex items-baseline justify-between gap-6 hover:text-signal">
                  <h3 className="font-display text-[clamp(1.2rem,2vw,1.5rem)] uppercase tracking-[-0.005em] leading-tight text-charcoal flex-1">
                    {f.q}
                  </h3>
                  <span className="text-charcoal/60 shrink-0 mt-1.5"><PlusIcon /></span>
                </summary>
                <p className="pb-8 text-[15.5px] leading-[1.7] text-charcoal/75 max-w-[68ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-32 lg:py-44 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Quote · same-day on most jobs</span>
            <h2 className="anton-display mt-8 font-display text-[clamp(3rem,6.4vw,5.4rem)] uppercase text-charcoal max-w-[12ch]">
              Got an iron job?
            </h2>
            <p className="mt-7 text-[16px] leading-[1.65] text-charcoal/75 max-w-[42ch]">
              We walk the run, measure the hardware, and send the price the same day. Most
              jobs schedule within the week.
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
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-charcoal hover:text-signal">
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
            <p className="mt-5 eyebrow">Bakersfield · Kern County · Same-day quotes</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-charcoal/8 bg-paper">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p className="font-display text-[16px] tracking-[-0.005em] uppercase text-charcoal">
            HECTOR&apos;S IRON PAINTING & WROUGHT IRON CO
          </p>
          <p className="eyebrow">Bakersfield, CA · Est. 2006 · CSLB 1009092</p>
          <a href={PHONE_HREF} className="font-mono tnum text-[12.5px] text-charcoal hover:text-signal">
            {PHONE}
          </a>
        </div>
      </footer>
    </>
  );
}

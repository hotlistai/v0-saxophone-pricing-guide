import { FadeIn } from "./fade-in"

/* ------------------------------------------------------------------ */
/*  CONFIG — fill in per-client. Empty strings render as [Placeholder] */
/* ------------------------------------------------------------------ */
const config = {
  clientName: "",
  eventDate: "",
  venue: "",
  plannerName: "",
  setTimes: "",
  investment: "",
  retainer: "",
  balanceDue: "",
  overtime: "",
  confirmLink: "",
  callTextLink: "",
}

function p(value: string, fallback: string) {
  return value || `[${fallback}]`
}

/* ------------------------------------------------------------------ */
/*  Shared CTA pair                                                    */
/* ------------------------------------------------------------------ */
function CtaButtons({ center = false }: { center?: boolean }) {
  return (
    <div
      className={`flex flex-wrap gap-4 ${center ? "justify-center" : ""}`}
    >
      <a
        href={config.confirmLink || "#"}
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-[15px] font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
        style={{ background: "rgba(255,255,255,0.95)", color: "#0a0a0a" }}
      >
        Confirm Availability
      </a>
      <a
        href={config.callTextLink || "#"}
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-[15px] font-semibold tracking-wide transition-all duration-200 hover:opacity-80"
        style={{
          background: "transparent",
          color: "rgba(255,255,255,0.88)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        Call / Text
      </a>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */
function Section({
  children,
  className = "",
  border = true,
}: {
  children: React.ReactNode
  className?: string
  border?: boolean
}) {
  return (
    <section
      className={`px-9 md:px-[72px] py-24 max-w-[1040px] mx-auto ${className}`}
      style={border ? { borderTop: "1px solid rgba(255,255,255,0.06)" } : {}}
    >
      {children}
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase mb-5"
      style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
    >
      {children}
    </p>
  )
}

/* ------------------------------------------------------------------ */
/*  1 — Hero                                                           */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <header className="px-9 md:px-[72px] pt-28 pb-10 max-w-[1040px] mx-auto">
      <FadeIn>
        <p
          className="text-[10px] font-semibold uppercase mb-4"
          style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}
        >
          Event Proposal
        </p>
        <h1
          className="font-extrabold text-balance"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          {"Ben \u2014 Live Saxophone"}
        </h1>
      </FadeIn>

      <FadeIn delay={150}>
        <p
          className="mt-6 max-w-[52ch] font-light"
          style={{
            fontSize: "clamp(17px, 1.6vw, 20px)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.65,
          }}
        >
          A featured live performance designed to elevate the room in real time.
        </p>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="mt-10">
          <CtaButtons />
        </div>
      </FadeIn>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  2 — Event Details                                                  */
/* ------------------------------------------------------------------ */
function EventDetails() {
  const rows = [
    { label: "Client", value: p(config.clientName, "Client Name") },
    { label: "Date", value: p(config.eventDate, "Event Date") },
    { label: "Venue", value: p(config.venue, "Venue Name + City") },
    { label: "Planner", value: p(config.plannerName, "Planner Name") },
    { label: "Set Time(s)", value: p(config.setTimes, "Time Window") },
  ]

  return (
    <Section>
      <FadeIn>
        <SectionLabel>Event Details</SectionLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <div
          className="mt-4 py-8 px-8 rounded-xl max-w-[480px]"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <dl className="flex flex-col gap-4 m-0">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-6">
                <dt
                  className="text-[14px] font-medium shrink-0"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {row.label}
                </dt>
                <dd
                  className="text-[14px] font-medium text-right m-0"
                  style={{ color: "rgba(255,255,255,0.88)" }}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  3 — The Experience                                                 */
/* ------------------------------------------------------------------ */
function Experience() {
  return (
    <Section>
      <FadeIn>
        <SectionLabel>The Experience</SectionLabel>
        <p
          className="mt-2 max-w-[56ch] font-light"
          style={{
            fontSize: "clamp(15px, 1.4vw, 17px)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.75,
          }}
        >
          Ben performs live, roaming the room wireless and reading the energy of
          the crowd in real time. Improvised melodies meet curated moments
          throughout the evening, creating high-impact connections between the
          music and your guests. Every set is tailored to the timeline and feel
          of the room.
        </p>
      </FadeIn>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  4 — What's Included                                               */
/* ------------------------------------------------------------------ */
function WhatsIncluded() {
  const items = [
    "Live saxophone performance by Ben (featured set)",
    "Wireless, fully mobile setup",
    "Onsite soundcheck and coordination with venue",
    "Performance tailored to the room and timeline",
    "Optional: add-on set / extension (upon request)",
  ]

  return (
    <Section>
      <FadeIn>
        <SectionLabel>{"What\u2019s Included"}</SectionLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <ul className="mt-4 list-none m-0 p-0 flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="relative pl-6 font-light"
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
              }}
            >
              <span
                className="absolute left-0"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {"\u2014"}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  5 — Requirements                                                   */
/* ------------------------------------------------------------------ */
function Requirements() {
  const items = [
    "Access to a standard audio input at the venue (details confirmed in advance).",
    "A brief arrival window for soundcheck.",
  ]

  return (
    <Section>
      <FadeIn>
        <SectionLabel>Requirements</SectionLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <ul className="mt-4 list-none m-0 p-0 flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="relative pl-6 font-light"
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
              }}
            >
              <span
                className="absolute left-0"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {"\u2014"}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  6 — Investment + Terms                                             */
/* ------------------------------------------------------------------ */
function Investment() {
  const rows = [
    { label: "Investment", value: p(config.investment, "---") },
    { label: "Retainer to reserve", value: p(config.retainer, "---") },
    { label: "Balance due", value: p(config.balanceDue, "---") },
    { label: "Overtime / extension", value: p(config.overtime, "---") },
  ]

  return (
    <Section>
      <FadeIn>
        <SectionLabel>Investment + Terms</SectionLabel>
      </FadeIn>
      <FadeIn delay={100}>
        <div
          className="mt-4 py-8 px-8 rounded-xl max-w-[480px]"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <dl className="flex flex-col gap-4 m-0">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-6">
                <dt
                  className="text-[14px] font-medium shrink-0"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {row.label}
                </dt>
                <dd
                  className="text-[14px] font-medium text-right m-0"
                  style={{ color: "rgba(255,255,255,0.88)" }}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  7 — Final CTA band                                                 */
/* ------------------------------------------------------------------ */
function FinalCta() {
  return (
    <Section className="text-center">
      <FadeIn>
        <p
          className="font-light mx-auto text-balance"
          style={{
            fontSize: "clamp(22px, 2.5vw, 30px)",
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.88)",
            maxWidth: "580px",
            letterSpacing: "-0.01em",
          }}
        >
          If the room matters, this is the move.
        </p>
      </FadeIn>
      <FadeIn delay={150}>
        <div className="mt-10">
          <CtaButtons center />
        </div>
      </FadeIn>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/*  Minimal footer                                                     */
/* ------------------------------------------------------------------ */
function ProposalFooter() {
  return (
    <footer
      className="px-9 md:px-[72px] pt-14 pb-20 max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <FadeIn>
        <p
          className="text-[13px] font-light"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          This proposal is confidential and intended solely for the named
          recipient.
        </p>
      </FadeIn>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  Full page export                                                   */
/* ------------------------------------------------------------------ */
export function ProposalPage() {
  return (
    <>
      <Hero />
      <EventDetails />
      <Experience />
      <WhatsIncluded />
      <Requirements />
      <Investment />
      <FinalCta />
      <ProposalFooter />
    </>
  )
}

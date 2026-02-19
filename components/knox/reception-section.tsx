import { FadeIn } from "./fade-in"

function StyledListItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="relative pl-7 mb-3"
      style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
    >
      <span
        className="absolute left-0 font-light"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        {"\u2014"}
      </span>
      {children}
    </li>
  )
}

export function ReceptionSection() {
  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p
          className="text-[11px] font-semibold uppercase mb-5"
          style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.72)" }}
        >
          03 — Dinner
        </p>
        <h3
          className="font-bold mb-5"
          style={{
            fontSize: "clamp(20px, 2.5vw, 24px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          The dinner unfolds naturally.
        </h3>
      </FadeIn>

      {/* Dinner Phase */}
      <FadeIn delay={100}>
        <div className="mt-14 mb-14">
          <h3
            className="font-bold mb-5"
            style={{
              fontSize: "clamp(20px, 2.5vw, 24px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            Dinner
          </h3>
          <ul className="list-none my-5">
            <StyledListItem>
              Thoughtful music selection that supports conversation
            </StyledListItem>
            <StyledListItem>
              Seamless handling of toasts using wireless microphones
            </StyledListItem>
            <StyledListItem>
              Optional live accents to complement key moments
            </StyledListItem>
          </ul>
        </div>
      </FadeIn>

      {/* After-Dinner Phase */}
      <FadeIn delay={200}>
        <div className="mt-14 mb-14">
          <h3
            className="font-bold mb-5"
            style={{
              fontSize: "clamp(20px, 2.5vw, 24px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            Post-Dinner Atmosphere
          </h3>
          <ul className="list-none my-5">
            <StyledListItem>
              DJ-led set with live saxophone integration
            </StyledListItem>
            <StyledListItem>
              Energy builds intentionally without gimmicks
            </StyledListItem>
            <StyledListItem>
              Clean, minimal visual presentation that complements the room
            </StyledListItem>
          </ul>
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div
          className="my-10 py-7 px-7 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.025)",
            borderLeft: "2px solid rgba(102,126,234,0.4)",
          }}
        >
          <p
            className="italic m-0"
            style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}
          >
            The goal is an atmosphere that still feels refined and
            intentional.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}

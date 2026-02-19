import { FadeIn } from "./fade-in"

export function ClosingSection() {
  return (
    <section
      className="px-9 md:px-[72px] py-[72px] max-w-[1040px] mx-auto text-center"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p
          className="font-light mx-auto"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "22px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.88)",
            maxWidth: "680px",
          }}
        >
          We approach every event with the same goal: to create an atmosphere
          your guests remember long after the night ends.
        </p>
      </FadeIn>
    </section>
  )
}

import { FadeIn } from "./fade-in"

export function ExperienceOverview() {
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
          The Experience
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <h2
          className="font-extrabold max-w-[28ch]"
          style={{
            fontSize: "clamp(30px, 3.5vw, 44px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          The Knox Signature Private Event Experience
        </h2>
      </FadeIn>

      <div className="mt-10 max-w-[68ch]" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <FadeIn delay={200}>
          <p
            className="text-lg font-light"
            style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.88)" }}
          >
            A single, cohesive atmosphere that evolves throughout the evening.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p
            className="font-light"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            Knox Signature will provide a complete, stress-free sound and
            entertainment experience for Kylie and Noah{"'"}s surprise ceremony
            and dinner. The goal is simple: beautiful ceremony audio, seamless
            transitions, and a dinner atmosphere that{"'"}s upbeat, fun, and
            effortlessly alive.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p
            className="font-light"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            The evening is designed to flow naturally, and should the night
            call for it, extensions are always welcome{"\u2014"}that{"'"}s often
            where the best energy lives.
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <p
            className="font-light"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            Our role is to shape how the room feels from the first note to the
            final song.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

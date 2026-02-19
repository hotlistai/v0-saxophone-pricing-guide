import { FadeIn } from "./fade-in"

export function Header() {
  return (
    <header className="px-9 md:px-[72px] pt-[72px] pb-14 max-w-[1040px] mx-auto">
      <FadeIn>
        <p
          className="text-[10px] font-semibold uppercase mb-3"
          style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}
        >
          Knox Signature
        </p>
        <h1
          className="text-4xl font-light leading-[1.2]"
          style={{ letterSpacing: "0.3px", color: "#ffffff" }}
        >
          Luxury Sax + DJ Atmospheres
        </h1>
      </FadeIn>

      <FadeIn delay={200}>
        <div
          className="mt-14 py-10 px-10 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderLeft: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase mb-5"
            style={{
              letterSpacing: "0.32em",
              color: "rgba(255,255,255,0.58)",
            }}
          >
            For Kylie + Noah
          </p>
          <h2
            className="text-[26px] font-medium mb-5"
            style={{ lineHeight: 1.4, color: "#ffffff" }}
          >
            Thank you for our conversation.
          </h2>
          <p
            className="text-base"
            style={{
              color: "rgba(255,255,255,0.58)",
              lineHeight: 1.85,
            }}
          >
            It was a pleasure speaking with you about Kylie and Noah{"'"}s
            surprise ceremony and private dinner on October 9, 2026 at a
            private residence in Plano. We{"'"}re excited to design an
            atmosphere that reflects your vision and creates an unforgettable
            experience. Below is a personalized video of what Knox Signature
            brings to an event.
          </p>
        </div>
      </FadeIn>
    </header>
  )
}

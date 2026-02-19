import { SectionContainer } from "./section-container"
import { FadeInSection } from "./fade-in-section"

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <FadeInSection>
        <p className="font-sans text-[10px] font-light uppercase tracking-[0.35em] text-muted-foreground">
          Overview
        </p>
      </FadeInSection>

      <FadeInSection delay={150}>
        <h2 className="mt-6 font-serif text-3xl font-light leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
          The Experience
        </h2>
      </FadeInSection>

      <FadeInSection delay={300}>
        <div className="mt-10 space-y-6 font-sans text-sm font-light leading-relaxed text-muted-foreground md:text-base">
          <p>
            Knox Signature will provide a complete, stress-free sound and entertainment
            experience for Kylie and Noah{"'"}s surprise ceremony and dinner.
          </p>
          <p>
            The goal is simple: beautiful ceremony audio, seamless transitions, and a
            dinner atmosphere that feels elevated, intentional, and effortlessly alive.
          </p>
          <p className="text-foreground/60">
            This is not a late-night reception.
          </p>
          <p>
            This is a curated evening designed to unfold naturally and conclude around
            9:30–10:00 pm, with the option to extend if desired.
          </p>
        </div>
      </FadeInSection>
    </SectionContainer>
  )
}

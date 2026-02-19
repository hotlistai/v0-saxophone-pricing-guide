import { SectionContainer } from "./section-container"
import { FadeInSection } from "./fade-in-section"

const steps = [
  "Final timeline",
  "Exact event address and setup areas",
  "Special ceremony music cues",
  "Must-play / do-not-play songs",
  "Overall musical direction",
]

export function NextStepsSection() {
  return (
    <SectionContainer>
      <FadeInSection>
        <p className="font-sans text-[10px] font-light uppercase tracking-[0.35em] text-muted-foreground">
          Next Steps
        </p>
      </FadeInSection>

      <FadeInSection delay={150}>
        <h2 className="mt-6 font-serif text-3xl font-light leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
          To Finalize
        </h2>
      </FadeInSection>

      <FadeInSection delay={300}>
        <ul className="mt-10 space-y-4 border-t border-border pt-8">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex items-baseline gap-4 font-sans text-sm font-light leading-relaxed text-muted-foreground md:text-base"
            >
              <span className="font-sans text-[10px] font-light text-accent tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step}
            </li>
          ))}
        </ul>
      </FadeInSection>
    </SectionContainer>
  )
}

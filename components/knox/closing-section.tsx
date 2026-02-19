import { FadeInSection } from "./fade-in-section"

export function ClosingSection() {
  return (
    <section className="px-6 py-24 md:py-40 lg:py-52" aria-label="Closing">
      <div className="mx-auto max-w-3xl text-center">
        <FadeInSection>
          <div className="mb-12 flex justify-center">
            <div className="h-px w-12 bg-accent" />
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <h2 className="font-serif text-2xl font-light leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
            Designed with intention.
            <br />
            Delivered with precision.
          </h2>
        </FadeInSection>

        <FadeInSection delay={400}>
          <p className="mt-8 font-sans text-[10px] font-light uppercase tracking-[0.35em] text-muted-foreground">
            Knox Signature
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

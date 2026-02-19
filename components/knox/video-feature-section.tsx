"use client"

import { FadeInSection } from "./fade-in-section"

export function VideoFeatureSection() {
  return (
    <section className="px-6 py-20 md:py-32 lg:py-40" aria-label="Performance preview">
      <div className="mx-auto max-w-5xl">
        <FadeInSection>
          <div className="relative aspect-video w-full overflow-hidden bg-secondary">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster="/videos/performance-poster.jpg"
            >
              <source src="/videos/man-i-need.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <p className="mt-8 text-center font-sans text-[11px] font-light uppercase tracking-[0.25em] text-muted-foreground">
            Live performance atmosphere example
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

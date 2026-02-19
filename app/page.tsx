import { HeroVideoSection } from "@/components/knox/hero-video-section"
import { ExperienceSection } from "@/components/knox/experience-section"
import { Divider } from "@/components/knox/divider"
import { IncludedSection } from "@/components/knox/included-section"
import { VideoFeatureSection } from "@/components/knox/video-feature-section"
import { NextStepsSection } from "@/components/knox/next-steps-section"
import { ClosingSection } from "@/components/knox/closing-section"
import { Footer } from "@/components/knox/footer"

export default function KylieNoahPage() {
  return (
    <main>
      <HeroVideoSection />
      <ExperienceSection />
      <Divider />
      <IncludedSection />
      <Divider />
      <VideoFeatureSection />
      <Divider />
      <NextStepsSection />
      <Divider />
      <ClosingSection />
      <Footer />
    </main>
  )
}

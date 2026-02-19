import { Header } from "@/components/knox/header"
import { PersonalVideo } from "@/components/knox/personal-video"
import { ExperienceOverview } from "@/components/knox/experience-overview"
import { CeremonySection } from "@/components/knox/ceremony-section"
import { PerformanceVideo } from "@/components/knox/performance-video"
import { ReceptionSection } from "@/components/knox/reception-section"
import { ProductionSection } from "@/components/knox/production-section"
import { TimingSection } from "@/components/knox/timing-section"
import { EnhancementsSection } from "@/components/knox/enhancements-section"
import { InvestmentSection } from "@/components/knox/investment-section"
import { ClosingSection } from "@/components/knox/closing-section"
import { Footer } from "@/components/knox/footer"

export default function KylieNoahPage() {
  return (
    <main>
      <Header />
      <PersonalVideo />
      <ExperienceOverview />
      <CeremonySection />
      <PerformanceVideo />
      <ReceptionSection />
      <ProductionSection />
      <TimingSection />
      <EnhancementsSection />
      <InvestmentSection />
      <ClosingSection />
      <Footer />
    </main>
  )
}

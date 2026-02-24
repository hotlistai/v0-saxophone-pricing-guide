import { Header } from "@/components/knox/header"
import { ExperienceOverview } from "@/components/knox/experience-overview"
import { PlannerNotes } from "@/components/knox/planner-notes"
import { InvestmentSection } from "@/components/knox/investment-section"
import { FaqSection } from "@/components/knox/faq-section"
import { ClosingSection } from "@/components/knox/closing-section"
import { Footer } from "@/components/knox/footer"

export default function KylieNoahPage() {
  return (
    <main>
      <Header />
      <ExperienceOverview />
      <PlannerNotes />
      <InvestmentSection />
      <FaqSection />
      <ClosingSection />
      <Footer />
    </main>
  )
}

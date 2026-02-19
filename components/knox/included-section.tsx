import { SectionContainer } from "./section-container"
import { FadeInSection } from "./fade-in-section"

interface ServiceBlockProps {
  title: string
  items: string[]
  delay?: number
}

function ServiceBlock({ title, items, delay = 0 }: ServiceBlockProps) {
  return (
    <FadeInSection delay={delay}>
      <div className="border-t border-border pt-6">
        <h3 className="font-sans text-[11px] font-normal uppercase tracking-[0.25em] text-foreground">
          {title}
        </h3>
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="font-sans text-sm font-light leading-relaxed text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  )
}

export function IncludedSection() {
  return (
    <SectionContainer>
      <FadeInSection>
        <p className="font-sans text-[10px] font-light uppercase tracking-[0.35em] text-muted-foreground">
          Services
        </p>
      </FadeInSection>

      <FadeInSection delay={150}>
        <h2 className="mt-6 font-serif text-3xl font-light leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
          What Is Included
        </h2>
      </FadeInSection>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
        <ServiceBlock
          title="Arrival & Pre-Ceremony"
          items={[
            "Curated pre-ceremony soundtrack",
            "Premium sound coverage",
            "Polished guest arrival experience",
          ]}
          delay={200}
        />

        <ServiceBlock
          title="Ceremony Sound & Microphones"
          items={[
            "Full ceremony sound system",
            "Microphones for officiant and groom",
            "Processional, key moments, recessional cueing",
          ]}
          delay={300}
        />

        <ServiceBlock
          title="Optional Enhancement"
          items={[
            "Live saxophone elements for select ceremony moments",
          ]}
          delay={400}
        />

        <ServiceBlock
          title="Dinner Sound & Atmosphere"
          items={[
            "Full dinner sound coverage",
            "Music programming — social, modern, elegant",
            "DJ + Saxophone format",
            "DJ/Keys + Saxophone format",
          ]}
          delay={500}
        />

        <ServiceBlock
          title="Optional Add-Ons"
          items={[
            "1-hour extension",
            "Additional live sax sets during dinner",
          ]}
          delay={600}
        />
      </div>
    </SectionContainer>
  )
}

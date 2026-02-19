import { FadeIn } from "./fade-in"

function StyledListItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="relative pl-7 mb-3"
      style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
    >
      <span
        className="absolute left-0 font-light"
        style={{ color: "rgba(255,255,255,0.25)" }}
      >
        {"\u2014"}
      </span>
      {children}
    </li>
  )
}

interface PackageCardProps {
  name: string
  price: string
  description: string
  items: string[]
  featured?: boolean
}

function PackageCard({ name, price, description, items, featured }: PackageCardProps) {
  return (
    <div
      className="mt-10 py-10 px-10 rounded-2xl transition-all duration-300"
      style={{
        background: featured
          ? "rgba(102,126,234,0.04)"
          : "rgba(255,255,255,0.02)",
        border: featured
          ? "2px solid rgba(102,126,234,0.3)"
          : "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = "translateY(-2px)"
        if (featured) {
          el.style.borderColor = "rgba(102,126,234,0.5)"
          el.style.background = "rgba(102,126,234,0.06)"
        } else {
          el.style.background = "rgba(255,255,255,0.035)"
          el.style.borderColor = "rgba(255,255,255,0.12)"
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = "translateY(0)"
        if (featured) {
          el.style.borderColor = "rgba(102,126,234,0.3)"
          el.style.background = "rgba(102,126,234,0.04)"
        } else {
          el.style.background = "rgba(255,255,255,0.02)"
          el.style.borderColor = "rgba(255,255,255,0.08)"
        }
      }}
    >
      <div className="flex justify-between items-baseline flex-wrap gap-3 mb-5">
        <h3
          className="font-semibold m-0"
          style={{ fontSize: "28px", color: "#ffffff" }}
        >
          {name}
        </h3>
        <span
          className="font-black"
          style={{
            fontSize: "38px",
            letterSpacing: "-0.03em",
            color: "#ffffff",
          }}
        >
          {price}
        </span>
      </div>
      <p
        className="italic mb-7"
        style={{ fontSize: "16px", color: "rgba(255,255,255,0.72)" }}
      >
        {description}
      </p>
      <ul className="list-none mt-5 mb-0">
        {items.map((item) => (
          <StyledListItem key={item}>{item}</StyledListItem>
        ))}
      </ul>
    </div>
  )
}

export function InvestmentSection() {
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
          Investment
        </p>
        <h2
          className="font-extrabold"
          style={{
            fontSize: "clamp(30px, 3.5vw, 44px)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          Three ways to experience Knox Signature.
        </h2>
        <p
          className="mt-5 text-lg font-light"
          style={{ lineHeight: 1.85, color: "rgba(255,255,255,0.88)" }}
        >
          Choose the coverage that fits your vision. Each package includes our
          signature blend of live performance and professional DJ mixing.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <PackageCard
          name="The Afterglow"
          price="$3,950"
          description="Reception only — for couples who want the dance floor experience."
          items={[
            "Reception DJ set with live sax integration",
            "Premium column-array sound system",
            "Architectural lighting design",
            "Minimal white DJ command center",
            "Up to 4 hours of coverage",
            "Wireless microphones for toasts and announcements",
          ]}
        />
      </FadeIn>

      <FadeIn delay={200}>
        <PackageCard
          name="The Build"
          price="$4,750"
          description="Cocktail hour + reception — the full evening atmosphere."
          items={[
            "Live cocktail hour performance (piano + saxophone)",
            "Reception DJ set with live sax integration",
            "Premium column-array sound system",
            "Architectural lighting design",
            "Minimal white DJ command center",
            "Up to 5 hours of coverage",
            "Wireless microphones for toasts and announcements",
          ]}
        />
      </FadeIn>

      <FadeIn delay={300}>
        <PackageCard
          name="The Full Atmosphere"
          price="$5,950"
          description="Ceremony + cocktail + reception — the complete Knox Signature experience."
          featured
          items={[
            "Ceremony audio support with wireless microphones",
            "Live cocktail hour performance (piano + saxophone)",
            "Reception DJ set with live sax integration",
            "Premium column-array sound system",
            "Architectural lighting design",
            "Minimal white DJ command center",
            "Up to 6 hours total coverage",
            "Pre-event consultation and setlist curation",
          ]}
        />
      </FadeIn>

      <FadeIn delay={400}>
        <div
          className="my-10 py-7 px-7 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.025)",
            borderLeft: "2px solid rgba(102,126,234,0.4)",
          }}
        >
          <p
            className="italic m-0"
            style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}
          >
            To secure your date, a 50% deposit is required at booking. The
            remaining balance is due 30 days before your event date.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}

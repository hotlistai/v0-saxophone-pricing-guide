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
      className={`mt-10 py-10 px-10 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 ${
        featured
          ? "package-card-featured"
          : "package-card-default"
      }`}
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
          The Knox Signature Experience
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <PackageCard
          name="The Full Atmosphere"
          price="$5,950"
          description="Ceremony + dinner + post-dinner — the complete Knox Signature experience for your evening."
          featured
          items={[
            "Ceremony audio support with wireless microphones",
            "Upbeat, curated dinner music with live sax accents",
            "Post-dinner DJ set with live saxophone integration",
            "Premium column-array sound system",
            "Architectural lighting design",
            "Minimal white DJ command center",
            "Pre-event consultation and setlist curation",
            "Wireless microphones for toasts and announcements",
          ]}
        />
      </FadeIn>

      <FadeIn delay={200}>
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

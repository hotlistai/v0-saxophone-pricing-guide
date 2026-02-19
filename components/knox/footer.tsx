import { FadeIn } from "./fade-in"

export function Footer() {
  return (
    <footer
      className="px-9 md:px-[72px] pt-14 pb-[72px] max-w-[1040px] mx-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p
          className="text-[10px] font-semibold uppercase mb-5"
          style={{ letterSpacing: "4px", color: "rgba(255,255,255,0.4)" }}
        >
          Knox Signature
        </p>
        <p
          className="font-light mb-7"
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.58)",
          }}
        >
          Luxury Sax + DJ Atmospheres
        </p>
        <div
          className="text-[15px]"
          style={{ color: "rgba(255,255,255,0.58)", lineHeight: 2.2 }}
        >
          <p>Based in Dallas &middot; Available Worldwide</p>
          <p>
            <a
              href="mailto:hello@knoxsignature.com"
              className="footer-link pb-px transition-all duration-200"
            >
              hello@knoxsignature.com
            </a>
          </p>
          <p>
            <a
              href="https://knoxsignature.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link pb-px transition-all duration-200"
            >
              knoxsignature.com
            </a>
          </p>
        </div>
      </FadeIn>
    </footer>
  )
}

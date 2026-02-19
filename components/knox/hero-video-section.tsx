"use client"

import { useEffect, useState } from "react"

export function HeroVideoSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const handleScroll = () => {
    const el = document.getElementById("experience")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className={`font-sans text-[10px] font-light uppercase tracking-[0.35em] text-muted-foreground transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Knox Signature — Private Experience
        </p>

        <h1
          className={`mt-6 font-serif text-5xl font-light leading-tight text-foreground md:text-7xl lg:text-8xl transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <span className="text-balance">Kylie + Noah</span>
        </h1>

        <p
          className={`mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-muted-foreground md:text-base transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          A surprise ceremony and dinner designed with intention.
        </p>

        <p
          className={`mt-4 font-sans text-[11px] font-light uppercase tracking-[0.25em] text-muted-foreground transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          {"October 9, 2026 · Private Residence · Plano"}
        </p>

        <button
          onClick={handleScroll}
          className={`mt-12 border border-border px-8 py-3 font-sans text-[10px] font-light uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background cursor-pointer ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          View Experience Details
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out ${
          loaded ? "opacity-60" : "opacity-0"
        }`}
        style={{ transitionDelay: "2000ms" }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-px bg-muted-foreground animate-pulse" />
        </div>
      </div>
    </section>
  )
}

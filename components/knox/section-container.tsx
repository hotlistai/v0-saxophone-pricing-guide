import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionContainer({ children, id, className = "" }: SectionContainerProps) {
  return (
    <section id={id} className={`px-6 py-20 md:py-32 lg:py-40 ${className}`}>
      <div className="mx-auto max-w-3xl">
        {children}
      </div>
    </section>
  )
}

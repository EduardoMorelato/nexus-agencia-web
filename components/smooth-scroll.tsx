"use client"

import { ReactLenis } from "lenis/react"
import { ReactNode } from "react"

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.08,        // Sensibilidade do scroll (0 a 1)
        duration: 1.2,    // Duração da animação
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}

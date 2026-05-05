"use client"

import { ReactLenis, useLenis } from "lenis/react"
import { ReactNode, useEffect } from "react"

interface SmoothScrollProps {
  children: ReactNode
}

function ScrollHandler() {
  const lenis = useLenis()

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      // Verifica se é um link interno (âncora)
      if (
        anchor && 
        anchor.hash && 
        anchor.hash.startsWith("#") && 
        anchor.origin === window.location.origin
      ) {
        e.preventDefault()
        const id = anchor.hash.slice(1)
        const element = document.getElementById(id)
        
        if (element && lenis) {
          lenis.scrollTo(element, {
            offset: -0, // Offset para não ficar colado no topo (ajuste conforme a altura do header)
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing suave
          })
          
          // Opcional: Atualiza a URL sem pular
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [lenis])

  return null
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
      <ScrollHandler />
      {children}
    </ReactLenis>
  )
}

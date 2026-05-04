"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  yOffset?: number
}

export function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  yOffset = 30
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom ease-out cubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

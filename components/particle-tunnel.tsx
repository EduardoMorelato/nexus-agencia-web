"use client"

import React, { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  vx: number
  vy: number
  size: number
  opacity: number
  randomX: number
  randomY: number
}

export function ParticleTunnel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isAssembling, setIsAssembling] = useState(false)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -1000, y: -1000 })
  const animationFrameId = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const initParticles = () => {
      const newParticles: Particle[] = []
      
      // Espaçamento de 25px é o ponto doce para ter uma malha densa 
      // sem travar o navegador (10px geraria mais de 20.000 bolinhas, destruindo o FPS)
      const spacing = 25
      const cols = Math.floor(width / spacing)
      const rows = Math.floor(height / spacing)
      
      const offsetX = (width - cols * spacing) / 2
      const offsetY = (height - rows * spacing) / 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * spacing
          const y = offsetY + j * spacing

          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            randomX: Math.random() * width,
            randomY: Math.random() * height,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
            size: 1.2, // Bolinhas pequenas
            opacity: 0.15, // Opacidade bem menor
          })
        }
      }
      particles.current = newParticles
    }

    initParticles()

    // Trigger assembly after a short delay
    const timer = setTimeout(() => setIsAssembling(true), 100)

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const friction = 0.92
      const ease = 0.08
      const mouseRadius = 120
      const mouseForce = 0.5

      particles.current.forEach((p) => {
        // Target position based on assembly state
        const targetX = isAssembling ? p.originX : p.randomX
        const targetY = isAssembling ? p.originY : p.randomY

        let currentTargetX = targetX
        let currentTargetY = targetY

        // Interaction (Repulsion)
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius
          const angle = Math.atan2(dy, dx)
          // Calculate a repulsion target
          currentTargetX -= Math.cos(angle) * force * 100
          currentTargetY -= Math.sin(angle) * force * 100
        }

        // Lerp (Ease-out) towards the current target (no velocity accumulation, so no spring/bounce)
        p.x += (currentTargetX - p.x) * ease
        p.y += (currentTargetY - p.y) * ease

        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(26, 26, 26, ${p.opacity})`
        ctx.fill()
      })

      animationFrameId.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [isAssembling])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}

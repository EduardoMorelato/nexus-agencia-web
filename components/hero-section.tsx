"use client"

import { useState, useEffect } from "react"
import { ScrambleButton } from "./scramble-button"
import { ParticleTunnel } from "./particle-tunnel"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const [isHovered, setIsHovered] = useState(false)
  
  // Custom Cursor Logic
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [cursorX, cursorY])

  // Parallax speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -400])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const y3 = useTransform(scrollY, [0, 1000], [0, -300])
  const y4 = useTransform(scrollY, [0, 1000], [0, -250])

  return (
    <section 
      className="relative min-h-screen flex items-center bg-background overflow-hidden lg:cursor-none group/hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ParticleTunnel />

      {/* Custom Hero Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-14 h-14 bg-primary/10 rounded-full border border-primary/30 pointer-events-none z-[100] hidden lg:flex items-center justify-center backdrop-blur-[2px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: y1 }} 
        initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 hidden lg:block top-[25%] left-[15vw] animate-float pointer-events-none" 
      >
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-background/60 backdrop-blur-md text-primary rounded-full text-base font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(5deg)" }}>
          Design Criativo
        </span>
      </motion.div>

      <motion.div 
        style={{ y: y2 }} 
        initial={{ opacity: 0, scale: 0, x: "-50%", y: "50%" }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 hidden lg:block bottom-[20%] left-[8vw] animate-float animation-delay-1000 pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-background/60 backdrop-blur-md text-primary rounded-full text-base font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(-3deg)" }}>
          Estratégia de Vendas
        </span>
      </motion.div>

      <motion.div 
        style={{ y: y3 }} 
        initial={{ opacity: 0, scale: 0, x: "50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 hidden lg:block top-[20%] right-[9vw] animate-float animation-delay-2000 pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-background/60 backdrop-blur-md text-primary rounded-full text-base font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(2deg)" }}>
          Marketing Digital
        </span>
      </motion.div>

      <motion.div 
        style={{ y: y4 }} 
        initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 hidden lg:block bottom-[15%] right-[8vw] animate-float animation-delay-3000 pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-background/60 backdrop-blur-md text-primary rounded-full text-base font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(-4deg)" }}>
          Inteligência Artificial
        </span>
      </motion.div>

      {/* Mobile & Tablet Floating Elements */}
      {/* 
        AQUI É ONDE VOCÊ CONTROLA A POSIÇÃO DAS PÍLULAS NO MOBILE:
        Altere as classes top-[xx%], bottom-[xx%], left-[xxvw], right-[xxvw] 
        para posicionar cada uma delas na tela de celulares.
      */}
      <motion.div 
        style={{ y: y1 }} 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 lg:hidden top-[10%] left-[2vw] animate-float pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md text-primary rounded-full text-xs font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(4deg)" }}>
          Design Criativo
        </span>
      </motion.div>

      <motion.div 
        style={{ y: y2 }} 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 lg:hidden top-[15%] right-[2vw] animate-float animation-delay-1000 pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md text-primary rounded-full text-xs font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(-2deg)" }}>
          Estratégia
        </span>
      </motion.div>

      <motion.div 
        style={{ y: y3 }} 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 lg:hidden bottom-[18%] left-[2vw] animate-float animation-delay-2000 pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md text-primary rounded-full text-xs font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(3deg)" }}>
          Marketing
        </span>
      </motion.div>

      <motion.div 
        style={{ y: y4 }} 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-20 lg:hidden bottom-[12%] right-[2vw] animate-float animation-delay-3000 pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md text-primary rounded-full text-xs font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(-5deg)" }}>
          I.A.
        </span>
      </motion.div>

      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center -mt-4 lg:-mt-16">
        <div className="w-full flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-primary font-medium tracking-widest uppercase text-[14px] mb-2"
          >
            Criatividade + Estratégia
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(16px,10vw,40px)] sm:text-5xl lg:text-7xl text-foreground leading-tight lg:leading-[68px] text-balance mb-4 max-w-[90%] lg:max-w-[70%]"
          >
            Transformamos ideias em{" "}
            <span className="text-primary italic">resultados</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] text-muted-foreground leading-relaxed mb-8 max-w-[90%] lg:max-w-[60%]"
          >
            Unimos a força do design criativo com estratégias inteligentes
            para impulsionar a sua empresa.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:cursor-auto"
          >
            <ScrambleButton
              label="Nossos Serviços"
              href="#servicos"
            >
              <ArrowRight className="h-4 w-4" />
            </ScrambleButton>

            <ScrambleButton
              label="Fale Conosco"
              variant="outline"
              href="https://wa.me/5515991116883?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Nexus."
              target="_blank"
              rel="noopener noreferrer"
            />
          </motion.div>
        </div>
      </div>

      {/* Smooth Gradient Transitions to all edges */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  )
}

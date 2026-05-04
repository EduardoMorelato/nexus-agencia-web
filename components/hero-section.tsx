"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrambleButton } from "./scramble-button"
import { ParticleTunnel } from "./particle-tunnel"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const { scrollY } = useScroll()
  
  // Parallax speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, -400])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const y3 = useTransform(scrollY, [0, 1000], [0, -300])
  const y4 = useTransform(scrollY, [0, 1000], [0, -250])

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <ParticleTunnel />

      <motion.div style={{ y: y1 }} className="absolute z-20 hidden lg:block top-[25%] left-[15vw] animate-float pointer-events-none" >
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-background/60 backdrop-blur-md text-primary rounded-full text-base font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(5deg)" }}>
          Design Criativo
        </span>
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute z-20 hidden lg:block bottom-[20%] left-[8vw] animate-float animation-delay-1000 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-background/60 backdrop-blur-md text-primary rounded-full text-base font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(-3deg)" }}>
          Estratégia de Vendas
        </span>
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute z-20 hidden lg:block top-[20%] right-[9vw] animate-float animation-delay-2000 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-background/60 backdrop-blur-md text-primary rounded-full text-base font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(2deg)" }}>
          Marketing Digital
        </span>
      </motion.div>

      <motion.div style={{ y: y4 }} className="absolute z-20 hidden lg:block bottom-[15%] right-[8vw] animate-float animation-delay-3000 pointer-events-none">
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
      <motion.div style={{ y: y1 }} className="absolute z-20 lg:hidden top-[10%] left-[2vw] animate-float pointer-events-none">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md text-primary rounded-full text-xs font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(4deg)" }}>
          Design Criativo
        </span>
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute z-20 lg:hidden top-[26%] right-[2vw] animate-float animation-delay-1000 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md text-primary rounded-full text-xs font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(-2deg)" }}>
          Estratégia
        </span>
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute z-20 lg:hidden bottom-[18%] left-[2vw] animate-float animation-delay-2000 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md text-primary rounded-full text-xs font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(3deg)" }}>
          Marketing
        </span>
      </motion.div>

      <motion.div style={{ y: y4 }} className="absolute z-20 lg:hidden bottom-[12%] right-[2vw] animate-float animation-delay-3000 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-background/60 backdrop-blur-md text-primary rounded-full text-xs font-light border border-primary/10 shadow-sm whitespace-nowrap" style={{ transform: "rotate(-5deg)" }}>
          I.A.
        </span>
      </motion.div>

      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center -mt-4 lg:-mt-16">
        <div className="w-full flex flex-col items-center">
          <p className="text-primary font-medium tracking-widest uppercase text-[14px] mb-2">
            Criatividade + Estratégia
          </p>

          <h1 className="text-[clamp(16px,10vw,40px)] sm:text-5xl lg:text-7xl text-foreground leading-tight lg:leading-[68px] text-balance mb-4 max-w-[90%] lg:max-w-[70%]">
            Transformamos ideias em{" "}
            <span className="text-primary italic">resultados</span>
          </h1>

          <p className="text-[16px] text-muted-foreground leading-relaxed mb-8 max-w-[90%] lg:max-w-[60%]">
            Unimos a força do design criativo com estratégias inteligentes
            para impulsionar a sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
          </div>
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

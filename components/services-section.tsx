"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Globe, 
  Target, 
  TrendingUp, 
  Sparkles,
  ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "./scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { LogoIcon } from "@/components/logos"

const services = [
  {
    id: "sites",
    icon: Globe,
    title: "Sites Institucionais & Landing Pages",
    description: "Desenvolvimento de sites profissionais e landing pages de alta conversão, com design moderno e otimizado para resultados.",
    image: "/images/service-design.jpg",
    features: ["Design Responsivo", "SEO Otimizado", "Alta Performance", "Foco em Conversão"]
  },
  {
    id: "trafego",
    icon: Target,
    title: "Tráfego Pago & Anúncios",
    description: "Gestão estratégica de campanhas de anúncios no Google, Facebook, Instagram e outras plataformas para maximizar seu ROI.",
    image: "/images/service-traffic.jpg",
    features: ["Google Ads", "Meta Ads", "Remarketing", "Análise de ROI"]
  },
  {
    id: "estrategia",
    icon: TrendingUp,
    title: "Estratégia Comercial & Vendas",
    description: "Desenvolvimento de estratégias comerciais personalizadas, consultoria em vendas e técnicas de negociação para escalar seu negócio.",
    image: "/images/service-strategy.jpg",
    features: ["Planejamento Comercial", "Técnicas de Vendas", "Negociação", "Escalabilidade"]
  },
  {
    id: "ia",
    icon: Sparkles,
    title: "Soluções com Inteligência Artificial",
    description: "Implementação de ferramentas e automações com IA para otimizar processos, atendimento e criação de conteúdo.",
    image: "/images/service-design.jpg",
    features: ["Automação com IA", "Chatbots", "Criação de Conteúdo", "Otimização de Processos"]
  }
]

export function ServicesSection() {
  const [openService, setOpenService] = useState<string | null>("sites")

  return (
    <section id="servicos" className="relative py-20 bg-[#0c0f24] text-white overflow-hidden">
      {/* Transição suave de gradiente do topo (Hero clara para Serviços escuro) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f5f6fa] dark:from-[#141414] to-[#0c0f24] z-10 pointer-events-none" />

      {/* Video de Background Preparado */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15"
        >
          <source src="/video/services-bg.mp4" type="video/mp4" />
          <source src="/video/services-bg.webm" type="video/webm" />
        </video>
        {/* Overlay escuro para garantir legibilidade de 100% */}
        <div className="absolute inset-0 bg-[#0c0f24]/90" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 lg:mb-20">
          <div className="flex justify-center mb-3 mt-10">
            <LogoIcon className="h-7 w-auto text-accent" />
          </div>
          <p className="text-accent font-medium tracking-widest uppercase text-[15px] mb-2">
            O que fazemos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[2px] text-balance mb-4">
            Nossos Serviços
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-[16px] leading-relaxed">
            Oferecemos soluções completas em marketing digital e inteligência comercial para posicionar sua marca no topo.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={0.1 * index}>
                <div
                  className={cn(
                    "border rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-md",
                    openService === service.id 
                      ? "bg-white/10 border-accent/40 shadow-[0_0_20px_rgba(108,187,255,0.08)]" 
                      : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                  )}
                >
                  <button
                    onClick={() => setOpenService(openService === service.id ? null : service.id)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "p-2.5 rounded-lg transition-all duration-300",
                        openService === service.id 
                          ? "bg-accent text-[#0c0f24] scale-105" 
                          : "bg-white/5 text-white/70"
                      )}>
                        <service.icon className="h-5 w-5" />
                      </div>
                      <span className="font-semibold text-[17px] tracking-wide text-white">{service.title}</span>
                    </div>
                    <ChevronDown className={cn(
                      "h-5 w-5 text-white/50 transition-transform duration-300",
                      openService === service.id && "rotate-180 text-accent"
                    )} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {openService === service.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1">
                          <p className="text-white/75 text-[15px] leading-relaxed mb-4 pl-14">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pl-14">
                            {service.features.map((feature) => (
                              <span 
                                key={feature}
                                className="text-xs px-3.5 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Image */}
          <ScrollReveal delay={0.2} className="relative aspect-[4/3] rounded-2xl overflow-hidden sticky top-28 border border-white/10 shadow-xl">
            <Image
              src={services.find(s => s.id === openService)?.image || "/images/service-design.jpg"}
              alt="Serviço em destaque"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              priority
              className="object-cover transition-all duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f24]/50 to-transparent" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

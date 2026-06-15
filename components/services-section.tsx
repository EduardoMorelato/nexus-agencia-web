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
    <section id="servicos" className="py-10 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-8 lg:mb-16">
          <div className="flex justify-center mb-2 mt-10">
            <LogoIcon className="h-6 w-auto text-primary" />
          </div>
          <p className="text-primary font-medium tracking-widest uppercase text-[16px] mb-2">
            O que fazemos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[2px] text-balance">
            Nossos Serviços
          </h2>
          <p className="mt-4 pb-6 text-muted-foreground max-w-2xl mx-auto text-[16px]">
            Oferecemos soluções completas em marketing digital e inteligência comercial para transformar sua presença online.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Accordion */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={0.1 * index}>
                <div
                  className={cn(
                    "border border-border rounded-lg overflow-hidden transition-all bg-muted/50"
                  )}
                >
                  <button
                    onClick={() => setOpenService(openService === service.id ? null : service.id)}
                    className="w-full flex items-center justify-between p-4 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "p-2 rounded-lg transition-colors",
                        openService === service.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        <service.icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-foreground">{service.title}</span>
                    </div>
                    <ChevronDown className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform",
                      openService === service.id && "rotate-180"
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
                        <div className="px-4 pb-4">
                          <p className="text-muted-foreground text-[16px] mb-4 pl-14">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pl-14">
                            {service.features.map((feature) => (
                              <span 
                                key={feature}
                                className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
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
          <ScrollReveal delay={0.2} className="relative aspect-[4/3] rounded-2xl overflow-hidden sticky top-24">
            <Image
              src={services.find(s => s.id === openService)?.image || "/images/service-design.jpg"}
              alt="Serviço em destaque"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={80}
              priority
              className="object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

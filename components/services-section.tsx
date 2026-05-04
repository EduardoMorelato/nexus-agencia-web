"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Globe, 
  Palette, 
  Share2, 
  Video, 
  Target, 
  TrendingUp, 
  Sparkles,
  ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "./scroll-reveal"

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
    id: "design",
    icon: Palette,
    title: "Design Gráfico & Identidade Visual",
    description: "Criação de logos, banners, materiais gráficos e identidade visual completa que comunica a essência da sua marca.",
    image: "/images/service-design.jpg",
    features: ["Logos & Marcas", "Banners & Criativos", "Material Impresso", "Identidade Visual"]
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media & Gestão de Redes",
    description: "Gestão completa das suas redes sociais com criação de conteúdo estratégico e engajamento contínuo com sua audiência.",
    image: "/images/service-social.jpg",
    features: ["Gestão de Perfis", "Criação de Posts", "Calendário Editorial", "Engajamento"]
  },
  {
    id: "video",
    icon: Video,
    title: "Produção & Edição de Vídeo",
    description: "Produção audiovisual profissional, desde filmagem até edição final, para vídeos institucionais, comerciais e redes sociais.",
    image: "/images/service-video.jpg",
    features: ["Filmagem Profissional", "Edição de Vídeo", "Motion Graphics", "Vídeos para Redes"]
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
    <section id="servicos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="mt-10 text-primary font-medium tracking-widest uppercase text-[16px] mb-2">
            O que fazemos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[2px] text-balance">
            Nossos Serviços
          </h2>
          <p className="mt-4 pb-6 text-muted-foreground max-w-2xl mx-auto text-[16px] m">
            Oferecemos soluções completas em marketing digital transformar sua presença online.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Accordion */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={0.1 * index}>
                <div
                  className={cn(
                    "border border-border rounded-lg overflow-hidden transition-all",
                    openService === service.id ? "bg-background" : "bg-transparent"
                  )}
                >
                  <button
                    onClick={() => setOpenService(openService === service.id ? null : service.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
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
                  
                  {openService === service.id && (
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
                  )}
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
              className="object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

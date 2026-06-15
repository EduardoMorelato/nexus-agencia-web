import { Palette, TrendingUp, Sparkles, MessageSquare } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { LogoIcon } from "@/components/logos"

const team = [
  {
    name: "Eduardo Morelato",
    role: "Diretor Criativo & Produção",
    description: "Especialista em design, produção audiovisual e marketing digital com vasta experiência na criação de conteúdo que converte.",
    skills: [
      { icon: Palette, label: "Sites & Landing Pages" },
      { icon: Sparkles, label: "Design & Identidade Visual" },
      { icon: Palette, label: "Social Media & Conteúdo" },
      { icon: Palette, label: "Produção de Vídeo" },
      { icon: TrendingUp, label: "Tráfego Pago" },
      { icon: Sparkles, label: "Inteligência Artificial" },
    ]
  },
  {
    name: "Rodrigo Gonzales",
    role: "Diretor Comercial & Estratégia",
    description: "Expert em comunicação e vendas, com forte atuação em estratégias comerciais e poder de negociação para fechar grandes negócios.",
    skills: [
      { icon: MessageSquare, label: "Comunicação Estratégica" },
      { icon: TrendingUp, label: "Estratégia de Vendas" },
      { icon: TrendingUp, label: "Planejamento Comercial" },
      { icon: MessageSquare, label: "Negociação" },
    ]
  }
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="flex justify-center mb-3 mt-10">
            <LogoIcon className="h-7 w-auto text-primary" />
          </div>
          <p className="text-primary font-semibold tracking-widest uppercase text-[15px] mb-2">
            Quem Somos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[2px] text-balance">
            Conheça a Equipe
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-[16px]">
            Uma parceria de alto impacto que une o melhor da criatividade digital com a força da estratégia comercial.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {team.map((member, index) => (
            <ScrollReveal 
              key={member.name} 
              delay={0.2 + (0.2 * index)} 
              className="bg-card border border-border hover:border-primary/40 shadow-sm hover:shadow-lg rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground tracking-[1px]">{member.name}</h3>
                    <p className="text-[15px] font-semibold text-primary">{member.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-[15.5px] leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/60">
                <p className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Especialidades:</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span 
                      key={skill.label}
                      className="flex items-center gap-2 text-xs px-3.5 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full font-medium transition-colors hover:bg-primary/10"
                    >
                      <skill.icon className="h-3.5 w-3.5" />
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Value Proposition */}
        <ScrollReveal delay={0.4} className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground shadow-xl border border-primary/10 relative overflow-hidden">
          {/* Efeito sutil de brilho de fundo */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance tracking-[1px]">
                Por que escolher a Moragon?
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-[16px]">
                Combinamos inteligência criativa com sólida visão estratégica comercial. 
                Enquanto um sócio desenvolve peças de design digital de alto padrão e automações, o outro 
                garante que cada ação esteja estritamente alinhada com seus objetivos comerciais.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-5 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">2x</p>
                <p className="text-[14px] font-medium text-primary-foreground/80 mt-1">Mais Conversão</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-5 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">360°</p>
                <p className="text-[14px] font-medium text-primary-foreground/80 mt-1">Visão Completa</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-5 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">24h</p>
                <p className="text-[14px] font-medium text-primary-foreground/80 mt-1">Resposta Rápida</p>
              </div>
              <div className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-5 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-[14px] font-medium text-primary-foreground/80 mt-1">Personalizado</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

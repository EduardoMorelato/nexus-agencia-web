import { Palette, TrendingUp, Sparkles, MessageSquare } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

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
    <section id="equipe" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <ScrollReveal className="text-center mb-16">
          <p className="mt-10 text-primary font-medium tracking-widest uppercase text-[16px] mb-2">
            Quem Somos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[2px] text-balance">
            Conheça a Equipe
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-[16px]">
            Uma parceria que une o melhor da criatividade com a força da estratégia comercial.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={0.2 + (0.2 * index)} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground tracking-[1px]">{member.name}</h3>
                  <p className="text-[16px] text-primary">{member.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 text-[16px]">
                {member.description}
              </p>

              <div className="space-y-3">
                <p className="text-[16px] font-medium text-foreground">Especialidades:</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span 
                      key={skill.label}
                      className="flex items-center gap-2 text-sm px-3 py-1.5 bg-muted text-muted-foreground rounded-full"
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
        <ScrollReveal delay={0.4} className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance tracking-[1px]">
                Por que escolher a Nexus?
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed text-[16px]">
                Combinamos expertise criativa com vision estratégica de negócios. 
                Enquanto um sócio desenvolve materiais visuais impactantes, o outro 
                garante que cada peça esteja alinhada com objetivos comerciais claros.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">2x</p>
                <p className="text-[16px] text-primary-foreground/80">Mais Conversão</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">360°</p>
                <p className="text-[16px] text-primary-foreground/80">Visão Completa</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">24h</p>
                <p className="text-[16px] text-primary-foreground/80">Resposta Rápida</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-[16px] text-primary-foreground/80">Personalizado</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

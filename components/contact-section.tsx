"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react"
import { ScrambleButton } from "./scramble-button"
import { ScrollReveal } from "./scroll-reveal"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="mt-10 text-primary font-medium tracking-widest uppercase text-[16px] mb-2">
            Contato
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[2px] text-balance">
            Pronto para começar?
          </h2>
          <p className="mt-4 pb-6 text-muted-foreground max-w-2xl mx-auto text-[16px]">
            Entre em contato e vamos conversar sobre como podemos transformar 
            seu negócio através do marketing digital e estratégia comercial.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal delay={0.2} className="space-y-8">
            <div>
              <h3 className="text-xl tracking-[1px] font-semibold text-foreground mb-6">
                Fale conosco
              </h3>
              <div className="space-y-4">

                <a 
                  href="https://wa.me/5515991116883?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Nexus."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[16px] text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">(15) 99111-6883</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[16px] text-muted-foreground">Localização</p>
                    <p className="font-medium text-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl tracking-[1px] font-semibold text-foreground mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.4} className="bg-background border border-border rounded-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-muted-foreground text-[16px]">
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                      className="border-foreground/20 focus:border-primary focus:ring-[3px] focus:ring-primary/5 outline-none focus-visible:ring-0 transition-all duration-300 rounded-full px-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="border-foreground/20 focus:border-primary focus:ring-[3px] focus:ring-primary/5 outline-none focus-visible:ring-0 transition-all duration-300 rounded-full px-6"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Telefone
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Insira seu telefone"
                    className="border-foreground/20 focus:border-primary focus:ring-[3px] focus:ring-primary/5 outline-none focus-visible:ring-0 transition-all duration-300 rounded-full px-6"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-full border border-foreground/20 bg-background px-6 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-primary focus:ring-[3px] focus:ring-primary/5 outline-none focus-visible:ring-0 transition-all duration-300 appearance-none"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="sites">Sites & Landing Pages</option>
                    <option value="design">Design Gráfico</option>
                    <option value="social">Social Media</option>
                    <option value="video">Produção de Vídeo</option>
                    <option value="trafego">Tráfego Pago</option>
                    <option value="estrategia">Estratégia Comercial</option>
                    <option value="ia">Soluções com IA</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={4}
                    required
                    className="border-foreground/20 focus:border-primary focus:ring-[3px] focus:ring-primary/5 outline-none focus-visible:ring-0 transition-all duration-300 rounded-[28px] px-6 py-4"
                  />
                </div>

                <ScrambleButton 
                  type="submit" 
                  label={isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  className="w-full"
                />
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

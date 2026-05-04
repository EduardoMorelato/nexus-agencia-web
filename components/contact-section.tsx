"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Loader2 } from "lucide-react"
import { ScrambleButton } from "./scramble-button"
import { ScrollReveal } from "./scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
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
          <ScrollReveal delay={0.4} className="bg-background border border-border rounded-2xl p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-20 flex flex-col items-center justify-center h-full min-h-[400px]"
                >
                  <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                    <Send className="h-10 w-10 text-primary relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-wide">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground text-[16px] max-w-sm text-balance">
                    Nossa equipe recebeu suas informações e entrará em contato muito em breve.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8 mt-4"
                >
                  <div className="grid sm:grid-cols-2 gap-8 sm:gap-6">
                    <div className="relative group">
                      <Input 
                        id="name"
                        name="name"
                        placeholder=" "
                        required
                        className="peer h-14 border-foreground/20 focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 rounded-[20px] px-6 bg-transparent"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-5 top-4 text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                        peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2
                        peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2"
                      >
                        Nome Completo
                      </label>
                    </div>
                    <div className="relative group">
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder=" "
                        required
                        className="peer h-14 border-foreground/20 focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 rounded-[20px] px-6 bg-transparent"
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute left-5 top-4 text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                        peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2
                        peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2"
                      >
                        E-mail Profissional
                      </label>
                    </div>
                  </div>

                  <div className="relative group">
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder=" "
                      className="peer h-14 border-foreground/20 focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 rounded-[20px] px-6 bg-transparent"
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute left-5 top-4 text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                      peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2
                      peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2"
                    >
                      Telefone / WhatsApp
                    </label>
                  </div>

                  <div className="relative group">
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                      className="peer h-14 w-full rounded-[20px] border border-foreground/20 bg-transparent px-6 py-2 text-sm focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 appearance-none text-foreground"
                    >
                      <option value="" disabled hidden></option>
                      <option value="sites" className="bg-background">Sites & Landing Pages</option>
                      <option value="design" className="bg-background">Design Gráfico</option>
                      <option value="social" className="bg-background">Social Media</option>
                      <option value="video" className="bg-background">Produção de Vídeo</option>
                      <option value="trafego" className="bg-background">Tráfego Pago</option>
                      <option value="estrategia" className="bg-background">Estratégia Comercial</option>
                      <option value="ia" className="bg-background">Soluções com IA</option>
                      <option value="outro" className="bg-background">Outro</option>
                    </select>
                    <label 
                      htmlFor="service" 
                      className="absolute left-5 top-4 text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                      peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2
                      peer-valid:-translate-y-7 peer-valid:text-xs peer-valid:bg-background peer-valid:px-2"
                    >
                      Serviço de Interesse
                    </label>
                  </div>

                  <div className="relative group">
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder=" "
                      rows={4}
                      required
                      className="peer resize-none border-foreground/20 focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 rounded-[28px] px-6 py-4 pt-6 bg-transparent"
                    />
                    <label 
                      htmlFor="message" 
                      className="absolute left-5 top-5 text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                      peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-background peer-focus:px-2
                      peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2"
                    >
                      Conte-nos sobre o seu projeto...
                    </label>
                  </div>

                  <div className="pt-2">
                    <div className={isSubmitting ? "opacity-80 pointer-events-none transition-opacity" : ""}>
                      <ScrambleButton 
                        type="submit" 
                        label={isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                        className="w-full h-14 text-base"
                      >
                        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin ml-2" />}
                      </ScrambleButton>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

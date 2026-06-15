"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Send, Instagram, Linkedin, Loader2 } from "lucide-react"
import { ScrambleButton } from "./scramble-button"
import { ScrollReveal } from "./scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { LogoIcon } from "@/components/logos"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [service, setService] = useState("")
  const [phone, setPhone] = useState("")

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11)
    if (digits.length <= 2) return digits
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  // COLE SEU URL DO GOOGLE APPS SCRIPT AQUI
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyJGLpKmpRkR0TvVK2YN2IdM_Oo1-Ls7ThlqYxHcya2yJuOOLdSPn0k9mnNM2rlzR-ypQ/exec"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: service,
      message: formData.get("message"),
    }
    
    try {
      if (!GOOGLE_SHEET_URL) {
        // Se não houver URL, apenas simula para não dar erro enquanto o usuário não configura
        await new Promise(resolve => setTimeout(resolve, 1500))
      } else {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors", // Necessário para Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      }
      setIsSubmitted(true)
    } catch (error) {
      console.error("Erro ao enviar:", error)
      alert("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-muted/20 border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <div className="flex justify-center mb-2 mt-10">
            <LogoIcon className="h-6 w-auto text-primary" />
          </div>
          <p className="text-primary font-medium tracking-widest uppercase text-[14px] mb-2">
            Contato
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-[2px] text-balance">
            Pronto para começar?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-[16px]">
            Entre em contato e vamos conversar sobre como podemos transformar 
            seu negócio através do marketing digital e estratégia comercial.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <ScrollReveal delay={0.2} className="space-y-8 lg:pt-8">
            <div>
              <h3 className="text-xl tracking-[1px] font-semibold text-foreground mb-6">
                Fale conosco
              </h3>
              <div className="space-y-4">

                <a 
                  href="https://wa.me/5515991116883?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Moragon."
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
                  className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.4} className="bg-card border border-border/80 shadow-md rounded-2xl p-4 sm:p-8 relative overflow-hidden min-h-[580px] lg:min-h-[620px]">
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
                  className="flex flex-col gap-1 mt-4"
                >
                  <h3 className="text-xl tracking-[1px] font-semibold text-foreground mb-2 lg:hidden">
                    Fale conosco
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-1">
                    <div className="relative group">
                      <Input 
                        id="name"
                        name="name"
                        placeholder=" "
                        required
                        className="peer h-14 border-foreground/35 focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 rounded-[20px] px-6 bg-white dark:bg-white/5 shadow-xs text-foreground"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-5 top-[17px] text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                        peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-card peer-focus:px-2
                        peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                      >
                        Nome Completo <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="relative group">
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder=" "
                        required
                        className="peer h-14 border-foreground/35 focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 rounded-[20px] px-6 bg-white dark:bg-white/5 shadow-xs text-foreground"
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute left-5 top-[17px] text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                        peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-card peer-focus:px-2
                        peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                      >
                        E-mail Profissional <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  <div className="transition-all duration-500 ease-out pt-1 focus-within:pt-8 [&:has(input:not(:placeholder-shown))]:pt-8">
                    <div className="relative group">
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder=" "
                        value={phone}
                        onChange={(e) => setPhone(formatPhone(e.target.value))}
                        maxLength={15}
                        className="peer h-14 border-foreground/35 focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 rounded-[20px] px-6 bg-white dark:bg-white/5 shadow-xs text-foreground"
                      />
                      <label 
                        htmlFor="phone" 
                        className="absolute left-5 top-[17px] text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                        peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-card peer-focus:px-2
                        peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                      >
                        Telefone / WhatsApp
                      </label>
                    </div>
                  </div>

                  <div className={cn(
                    "transition-all duration-500 ease-out pt-1 focus-within:pt-8",
                    service && "pt-8"
                  )}>
                    <div className="relative group">
                      <Select onValueChange={setService} required>
                        <SelectTrigger 
                          className={cn(
                            "!h-14 w-full rounded-[20px] border border-foreground/35 bg-white dark:bg-white/5 px-6 text-sm transition-all duration-300 outline-none focus:border-primary focus:ring-0 focus-visible:ring-0 ring-0 shadow-xs text-foreground",
                            service && "border-primary"
                          )}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-border rounded-xl" position="popper" sideOffset={5} data-lenis-prevent>
                          <SelectItem value="sites">Sites & Landing Pages</SelectItem>
                          <SelectItem value="trafego">Tráfego Pago</SelectItem>
                          <SelectItem value="estrategia">Estratégia Comercial</SelectItem>
                          <SelectItem value="ia">Soluções com IA</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      <label 
                        className={cn(
                          "absolute left-5 top-[17px] text-muted-foreground text-sm transition-all duration-300 pointer-events-none px-2",
                          service ? "-translate-y-7 text-xs text-primary bg-card" : "group-focus-within:-translate-y-7 group-focus-within:text-xs group-focus-within:text-primary group-focus-within:bg-card"
                        )}
                      >
                        Serviço de Interesse <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  <div className="transition-all duration-500 ease-out pt-1 focus-within:pt-8 [&:has(textarea:not(:placeholder-shown))]:pt-8">
                    <div className="relative group">
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder=" "
                        rows={4}
                        required
                        className="peer resize-none border-foreground/35 focus:border-primary focus:ring-0 focus-visible:ring-0 outline-none transition-all duration-300 rounded-[28px] px-6 py-4 pt-6 bg-white dark:bg-white/5 min-h-[112px] [field-sizing:unset] shadow-xs text-foreground"
                      />
                      <label 
                        htmlFor="message" 
                        className="absolute left-5 top-[21px] text-muted-foreground text-sm transition-all duration-300 pointer-events-none 
                        peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-card peer-focus:px-2
                        peer-[:not(:placeholder-shown)]:-translate-y-8 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-card peer-[:not(:placeholder-shown)]:px-2"
                      >
                        Conte-nos sobre o seu projeto... <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  <div className="transition-all duration-500 ease-out pt-2 focus-within:pt-8">
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

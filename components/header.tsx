"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrambleButton } from "./scramble-button"
import { WhatsappIcon } from "./whatsapp-icon"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-500 ease-out",
      isScrolled ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
    )}>
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="font-semibold text-xl tracking-tight text-foreground">
              NEXUS<span className="text-primary">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#servicos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </Link>
            <Link href="#equipe" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Equipe
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Portfólio
            </Link>
            <Link href="#contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </nav>

          <div className="flex-1 flex justify-end">
            <ScrambleButton 
              label="Agendar Reunião" 
              href="https://wa.me/5515991116883?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20agendar%20uma%20reunião."
              target="_blank"
              rel="noopener noreferrer"
              className="scale-[0.85] sm:scale-90 origin-right"
            >
              <WhatsappIcon className="ml-2" size={18} />
            </ScrambleButton>
          </div>
        </div>
      </div>
    </header>
  )
}

import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"
import { ScrambleButton } from "./scramble-button"
import { WhatsappIcon } from "./whatsapp-icon"
import { LogoExtensiva } from "@/components/logos"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <LogoExtensiva className="h-8 w-auto text-background" />
            </Link>
            <p className="mt-4 text-background/70 max-w-md text-[16px] mb-8">
              Transformamos ideias em resultados através do marketing digital 
              e estratégia comercial inteligente.
            </p>
            <ScrambleButton 
              label="Agendar Reunião" 
              href="https://wa.me/5515991116883?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20agendar%20uma%20reunião."
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="mt-6"
            >
              <WhatsappIcon className="ml-1" />
            </ScrambleButton>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-sans">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#servicos" className="text-background/70 hover:text-background transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#equipe" className="text-background/70 hover:text-background transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-background/70 hover:text-background transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-background/70 hover:text-background transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-sans">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-background/70">Sites & Landing Pages</li>
              <li className="text-background/70">Design Gráfico</li>
              <li className="text-background/70">Social Media</li>
              <li className="text-background/70">Tráfego Pago</li>
              <li className="text-background/70">Estratégia Comercial</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[16px] text-background/70">
            © {new Date().getFullYear()} Moragon. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  )
}

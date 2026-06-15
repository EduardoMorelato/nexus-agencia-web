import type { Metadata } from 'next'
import { Poppins, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: 'Moragon | Marketing Digital & Estratégia Comercial',
  description: 'Transformamos ideias em resultados. Agência premium de design, desenvolvimento web, tráfego pago e estratégia comercial focada em conversão.',
  keywords: ['agência digital', 'marketing digital', 'criação de sites', 'tráfego pago', 'design', 'social media', 'estratégia comercial', 'moragon', 'Moragon Agency'],
  authors: [{ name: 'Moragon Agency' }],
  creator: 'Moragon Agency',
  publisher: 'Moragon Agency',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://moragonagency.com.br', // Substitua pelo domínio real depois
    title: 'Moragon | Elevando sua Marca ao Próximo Nível',
    description: 'Agência digital premium focada em resultados reais. Design, Desenvolvimento e Tráfego Pago.',
    siteName: 'Moragon Agency',
    images: [
      {
        url: '/images/og-image.jpg', // Você precisará adicionar essa imagem no public/images
        width: 1200,
        height: 630,
        alt: 'Moragon Agency - Marketing e Estratégia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moragon | Agência Digital Premium',
    description: 'Transformamos ideias em resultados reais para o seu negócio.',
    images: ['/images/og-image.jpg'], // Mesma imagem do OG
  },
  generator: 'Next.js',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${dmSerif.variable} bg-background overflow-x-hidden`}>
      <body className="font-sans antialiased text-base leading-snug overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Nexus | Marketing Digital & Estratégia Comercial',
  description: 'Transformamos ideias em resultados. Agência premium de design, desenvolvimento web, tráfego pago e estratégia comercial focada em conversão.',
  keywords: ['agência digital', 'marketing digital', 'criação de sites', 'tráfego pago', 'design', 'social media', 'estratégia comercial', 'nexus', 'Nexus Agency'],
  authors: [{ name: 'Nexus Agency' }],
  creator: 'Nexus Agency',
  publisher: 'Nexus Agency',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nexusagency.com.br', // Substitua pelo domínio real depois
    title: 'Nexus | Elevando sua Marca ao Próximo Nível',
    description: 'Agência digital premium focada em resultados reais. Design, Desenvolvimento e Tráfego Pago.',
    siteName: 'Nexus Agency',
    images: [
      {
        url: '/images/og-image.jpg', // Você precisará adicionar essa imagem no public/images
        width: 1200,
        height: 630,
        alt: 'Nexus Agency - Marketing e Estratégia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus | Agência Digital Premium',
    description: 'Transformamos ideias em resultados reais para o seu negócio.',
    images: ['/images/og-image.jpg'], // Mesma imagem do OG
  },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${dmSerif.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased text-base leading-snug">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Great_Vibes, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hansi & Chanaka — July 23, 2026',
  description: 'You are warmly invited to the wedding of Hansi & Chanaka on Thursday, July 23, 2026 at Seetha Banquet Halls, Pilimathalawa.',
  openGraph: {
    title: 'Hansi & Chanaka — Wedding Invitation',
    description: 'Thursday, July 23, 2026 · Seetha Banquet Halls, Pilimathalawa',
    images: ['/couple.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c8930a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://v0-saxophone-pricing-guide.vercel.app'),
  title: 'Ben Live Saxophone — Planner Pricing Guide',
  description: 'A planner-ready pricing guide for a featured live saxophone performance designed to elevate the room in real time.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Ben Live Saxophone — Planner Pricing Guide',
    description: 'A planner-ready pricing guide for a featured live saxophone performance designed to elevate the room in real time.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Knox Signature',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Live Saxophone — Planner Pricing Guide',
    description: 'A planner-ready pricing guide for a featured live saxophone performance designed to elevate the room in real time.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

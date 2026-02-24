import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ben — Live Saxophone | Event Proposal',
  description: 'A featured live performance designed to elevate the room in real time.',
  icons: {
    icon: 'https://www.knoxsignature.com/images/knox-ks-icon.png',
    apple: 'https://www.knoxsignature.com/images/knox-ks-icon.png',
  },
  openGraph: {
    title: 'Ben — Live Saxophone | Event Proposal',
    description: 'A featured live performance designed to elevate the room in real time.',
  },
  twitter: {
    card: 'summary',
    title: 'Ben — Live Saxophone | Event Proposal',
    description: 'A featured live performance designed to elevate the room in real time.',
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

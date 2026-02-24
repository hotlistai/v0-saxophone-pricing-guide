import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
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
        url: 'https://blog.hotlistdigital.com/wp-content/uploads/2026/02/A1B2B3EB-5FEB-4EC6-92DD-526510F2BE85.png',
        width: 1200,
        height: 800,
        alt: 'Ben live saxophone performance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Live Saxophone — Planner Pricing Guide',
    description: 'A planner-ready pricing guide for a featured live saxophone performance designed to elevate the room in real time.',
    images: ['https://blog.hotlistdigital.com/wp-content/uploads/2026/02/A1B2B3EB-5FEB-4EC6-92DD-526510F2BE85.png'],
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

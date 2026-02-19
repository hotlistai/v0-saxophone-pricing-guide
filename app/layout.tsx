import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Knox Signature — Kylie + Noah',
  description: 'A private experience designed with intention. Surprise ceremony and dinner — October 9, 2026.',
  icons: {
    icon: 'https://www.knoxsignature.com/images/knox-ks-icon.png',
    apple: 'https://www.knoxsignature.com/images/knox-ks-icon.png',
  },
  openGraph: {
    title: 'Knox Signature — Kylie + Noah',
    description: 'A private experience designed with intention. Surprise ceremony and dinner — October 9, 2026.',
    images: [
      {
        url: 'https://www.knoxsignature.com/images/knox-press-banner.png',
        width: 1920,
        height: 600,
        alt: 'Knox Signature',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knox Signature — Kylie + Noah',
    description: 'A private experience designed with intention. Surprise ceremony and dinner — October 9, 2026.',
    images: ['https://www.knoxsignature.com/images/knox-press-banner.png'],
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

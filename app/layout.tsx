import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hussam Baaka - Creative Content Architect | GCC Markets',
  description: "I'm Hussam, your go-to content strategist who transforms ideas into compelling narratives. I architect experiences that connect, convert, and captivate audiences across the GCC region.",
  keywords: 'content marketing, creative writing, SEO, Arabic content writer, GCC marketing, Saudi Arabia marketing, social media management, translation services, brand storytelling',
  authors: [{ name: 'Hussam Baaka' }],
  creator: 'Hussam Baaka',
  publisher: 'Hussam Baaka',
  openGraph: {
    title: 'Hussam Baaka - Creative Content Architect',
    description: "I craft stories that sell. Expert content strategist for GCC markets with 5+ years of experience.",
    url: 'https://hussambaaka.com',
    siteName: 'Hussam Baaka Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussam Baaka - Creative Content Architect',
    description: "I craft stories that sell. Expert content strategist for GCC markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
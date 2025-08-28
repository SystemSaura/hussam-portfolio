import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hussam Baaka - Marketing Expert | GCC Region',
  description: "Marketing expert who helps GCC businesses grow. I create content that drives sales and builds brands across Saudi Arabia, UAE, and the Gulf region.",
  keywords: 'marketing expert, GCC marketing, Saudi Arabia marketing, UAE marketing, content marketing, social media marketing, Arabic marketing, Gulf region marketing',
  authors: [{ name: 'Hussam Baaka' }],
  creator: 'Hussam Baaka',
  publisher: 'Hussam Baaka',
  openGraph: {
    title: 'Hussam Baaka - Marketing Expert GCC',
    description: "Marketing expert who helps GCC businesses grow with proven strategies.",
    url: 'https://hussambaaka.com',
    siteName: 'Hussam Baaka Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussam Baaka - Marketing Expert GCC',
    description: "Marketing expert who helps GCC businesses grow with proven strategies.",
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
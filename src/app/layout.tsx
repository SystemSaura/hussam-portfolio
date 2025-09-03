import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hussam Baaka",
  description: "Expert Digital Marketing, SEO, Social Media & Copywriting Services",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='white'/%3E%3Ctext x='2' y='22' font-family='Work Sans, sans-serif' font-size='16' font-weight='400' fill='%23001C46'%3EHB%3C/text%3E%3Ctext x='24' y='22' font-family='Work Sans, sans-serif' font-size='16' font-weight='300' fill='%232762F8'%3E%3Canimate attributeName='opacity' values='1;0;1' dur='1s' repeatCount='indefinite'/%3E|%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
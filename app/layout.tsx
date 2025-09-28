import type React from "react"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import Image from "next/image"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "Portfolio - Développeur Full-Stack",
  description:
    "Portfolio professionnel d'un développeur full-stack spécialisé en React, Node.js, Django et technologies web modernes.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <head>
        <link rel="icon" href="/professional-developer-portrait.png" /> 
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}

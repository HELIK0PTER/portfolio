// main imports
import React from "react";
import './globals.css'
import type { Metadata } from 'next'

// font imports
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// provider imports
import {Providers} from "@/providers/Providers";

// component imports
import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio de Matheus Kops Guedes',
  openGraph: {
    title: 'Portfolio',
    description: 'Portfolio de Matheus Kops Guedes',
    url: 'https://www.matheuskopsguedes.com',
    siteName: 'Portfolio Matheus Kops Guedes',
    images: [
      {
        url: 'https://www.matheuskopsguedes.com/opengraph-image.png',
        width: 800,
        height: 800,
        alt: 'Og Image Alt',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    title: 'Portfolio',
    description: 'Portfolio de Matheus Kops Guedes',
    images: {
      url: 'https://www.matheuskopsguedes.com/opengraph-image.png',
      width: 800,
      height: 800,
      alt: 'Twitter Image Alt',
    },
    card : 'summary_large_image',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
      className={`${inter.className}`}>
        <Providers>
          <main
          className={`
          flex flex-col items-center
          min-h-[100vh]
          `}>
            <div className={`flex flex-col items-center grow w-full`}>
              <Header />
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}

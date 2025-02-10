import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

// const inter = Inter({ subsets: ['latin'] })

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: 'Evento - Find events around you',
    description: 'Browse more than 10,000 events worldwide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} 
      bg-gray-950 text-white overflow-y-scroll`}
      >
      <Container>
          <Header />
          {children}
          <Footer />
      </Container>
      </body>
    </html>
  )
}

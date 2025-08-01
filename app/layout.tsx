import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "Braz Grill Assados | Melhor Churrasco de Curitiba",
  description:
    "Braz Grill Assados - O melhor churrasco de Curitiba com carnes selecionadas e temperos especiais. Há mais de 20 anos levando qualidade à sua mesa.",
  keywords: "churrasco, assados, Curitiba, carnes, cardápio, costela, fraldinha, cupim, frango",
  authors: [{ name: "Braz Grill Assados" }],
  openGraph: {
    title: "Braz Grill Assados | Melhor Churrasco de Curitiba",
    description: "O melhor churrasco de Curitiba com carnes selecionadas e temperos especiais.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

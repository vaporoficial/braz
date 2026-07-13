"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Mascot() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToMenu = () => {
    document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`fixed bottom-40 right-8 z-40 hidden lg:block transition-all duration-700 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
      }`}
    >
      <button
        onClick={scrollToMenu}
        className="relative cursor-pointer animate-float-soft group"
        aria-label="Ir para o cardápio"
      >
        <Image
          src="/mascote.png"
          alt="Mascote do Braz Grill Assados"
          width={100}
          height={100}
          className="rounded-full border-2 border-primary shadow-lg transition-transform group-hover:scale-105"
        />
        <span className="absolute -top-2 -left-24 bg-card text-card-foreground rounded-lg px-3 py-1.5 shadow-md border border-border text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Peça já o seu!
        </span>
      </button>
    </div>
  )
}

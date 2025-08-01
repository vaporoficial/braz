"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 100
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-red-100"
          : "bg-gradient-to-r from-white/95 to-stone-50/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Logo Braz Grill Assados"
                width={70}
                height={70}
                className="rounded-full border-4 border-red-600 shadow-lg transition-transform hover:rotate-12"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-red-600 leading-tight">BRAZ GRILL ASSADOS</h1>
              <span className="text-sm text-gray-700 font-medium">O melhor assado de Curitiba e Região!!</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "Home", id: "home" },
              { label: "Cardápio", id: "cardapio" },
              { label: "Carnes Bovinas", id: "carnes-bovinas" },
              { label: "Frangos", id: "frangos" },
              { label: "Carnes Suínas", id: "carnes-suinas" },
              { label: "Acompanhamentos", id: "acompanhamentos" },
              { label: "Bebidas", id: "bebidas" },
              { label: "Contato", id: "contato" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-red-600 font-semibold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button & Cart */}
          <div className="flex items-center gap-4">
            <CartButton />
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              {[
                { label: "Home", id: "home" },
                { label: "Cardápio", id: "cardapio" },
                { label: "Carnes Bovinas", id: "carnes-bovinas" },
                { label: "Frangos", id: "frangos" },
                { label: "Carnes Suínas", id: "carnes-suinas" },
                { label: "Acompanhamentos", id: "acompanhamentos" },
                { label: "Bebidas", id: "bebidas" },
                { label: "Contato", id: "contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-red-600 font-semibold transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

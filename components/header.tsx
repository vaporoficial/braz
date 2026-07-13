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

  const navItems = [
    { label: "Início", id: "home" },
    { label: "Cardápio", id: "cardapio" },
    { label: "Bebidas", id: "bebidas" },
    { label: "Avaliações", id: "testimonials" },
    { label: "Contato", id: "contato" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo Braz Grill Assados"
              width={56}
              height={56}
              className="rounded-full border-2 border-primary shadow-sm"
            />
            <div className="leading-tight">
              <h1 className="text-xl md:text-2xl brand-text">BRAZ GRILL ASSADOS</h1>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">
                O melhor assado de Curitiba e Região
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground/80 hover:text-primary font-semibold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
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
          <nav className="lg:hidden mt-3 pb-3 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-1 pt-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground/80 hover:text-primary hover:bg-secondary rounded-md font-semibold transition-colors py-2 px-3"
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

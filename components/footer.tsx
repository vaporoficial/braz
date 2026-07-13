"use client"

import { Button } from "@/components/ui/button"
import { Heart, ChevronUp, Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const links = [
    { label: "Início", id: "home" },
    { label: "Cardápio", id: "cardapio" },
    { label: "Bebidas", id: "bebidas" },
    { label: "Avaliações", id: "testimonials" },
    { label: "Contato", id: "contato" },
  ]

  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="brand-text text-2xl mb-4">BRAZ GRILL ASSADOS</h3>
            <p className="text-background/60 mb-5 leading-relaxed max-w-md text-pretty">
              Há mais de 20 anos oferecendo o melhor churrasco de Curitiba com carnes premium, temperos especiais e
              tradição familiar.
            </p>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-background/20 bg-transparent hover:bg-background/10 text-background"
                onClick={() => window.open("https://www.facebook.com/BRAZGRILLASSADOS/", "_blank")}
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-background/20 bg-transparent hover:bg-background/10 text-background"
                onClick={() => window.open("https://www.instagram.com/brazgrillassados", "_blank")}
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-background/20 bg-transparent hover:bg-background/10 text-background"
                onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
              >
                <span className="sr-only">WhatsApp</span>
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-background font-bold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              {links.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-background/60 hover:text-accent transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-background font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-background/60 text-sm">
              <p>Rua República Islâmica do Irã, 330</p>
              <p>Jardim das Américas, Curitiba/PR</p>
              <p>(41) 98873-8707</p>
              <div className="mt-4">
                <p className="text-background font-semibold mb-1">Horários:</p>
                <p>Sábado: 10h às 14h</p>
                <p>Domingo: 10h às 16h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© 2025 Braz Grill Assados. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <p className="text-background/50 text-sm flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-primary fill-primary" /> para nossos clientes
            </p>
            <Button
              size="icon"
              variant="outline"
              className="border-background/20 text-background hover:bg-background/10 bg-transparent rounded-full"
              onClick={scrollToTop}
            >
              <span className="sr-only">Voltar ao topo</span>
              <ChevronUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

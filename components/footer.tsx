"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Footer() {
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
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative pb-2">
              Sobre Nós
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-red-600" />
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Há mais de 20 anos no mercado, o Braz Grill se dedica a oferecer os melhores assados com qualidade e
              tradição.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Começamos nosso preparo às 5h da manhã para garantir o melhor sabor e suculência em nossos pratos.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative pb-2">
              Horário de Funcionamento
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-red-600" />
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Sábado: 10h às 14h</p>
              <p>Domingo: 10h às 16h</p>
              <p className="text-xs text-gray-400 mt-3">
                Assamos todos os sábados e domingos, independente de feriados.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative pb-2">
              Links Rápidos
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-red-600" />
            </h4>
            <div className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "Cardápio", id: "cardapio" },
                { label: "Carnes Bovinas", id: "carnes-bovinas" },
                { label: "Frangos", id: "frangos" },
                { label: "Carnes Suínas", id: "carnes-suinas" },
                { label: "Acompanhamentos", id: "acompanhamentos" },
                { label: "Bebidas", id: "bebidas" },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-red-400 justify-start p-0 h-auto font-normal text-sm transition-all hover:translate-x-1"
                >
                  <ChevronRight className="h-3 w-3 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">© 2025 Braz Grill Assados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

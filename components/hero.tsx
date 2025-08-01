"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Utensils, ShoppingCart, Wifi } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  const [showWifiInfo, setShowWifiInfo] = useState(false)

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
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 bg-cover bg-center"
        style={{
          backgroundImage: `url('/cardapio/loja.jpg')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              O verdadeiro sabor do <span className="text-yellow-400">Assado Brasileiro</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-gray-200">
              Carnes selecionadas, temperos especiais e um toque caseiro que faz toda a diferença. Há mais de 20 anos
              levando qualidade à sua mesa.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={() => scrollToSection("cardapio")}
              >
                <Utensils className="mr-2 h-5 w-5" />
                Ver Cardápio
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-white/20 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Fazer Pedido
              </Button>

              <div className="relative">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-green-600 hover:bg-green-700 text-white border-green-500 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  onMouseEnter={() => setShowWifiInfo(true)}
                  onMouseLeave={() => setShowWifiInfo(false)}
                >
                  <Wifi className="mr-2 h-5 w-5" />
                  Conectar ao Wi-Fi
                </Button>

                {showWifiInfo && (
                  <Card className="absolute top-full mt-2 left-0 z-20 shadow-xl">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm font-semibold text-gray-800 mb-1">
                        <strong className="text-red-600">Rede:</strong> brazgrillassados
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        <strong className="text-red-600">Senha:</strong> melhorassado
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <video
                className="w-full max-w-sm h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/churrasco.mp4" type="video/mp4" />
                <div className="w-full max-w-sm h-[500px] bg-gray-800 rounded-2xl shadow-2xl border-4 border-white/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🔥</div>
                    <p className="text-lg font-semibold">Vídeo do Churrasco</p>
                    <p className="text-sm opacity-75">Carregando...</p>
                  </div>
                </div>
              </video>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

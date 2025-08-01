"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Utensils, ShoppingCart, Wifi, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  const [showWifiInfo, setShowWifiInfo] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
  }

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url('/cardapio/loja.jpg')`,
          transform: isVisible ? "scale(1)" : "scale(1.1)",
        }}
      />

      {/* Floating Fire Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-fire opacity-60"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          >
            <Flame className="h-6 w-6 text-orange-400" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content with Staggered Animation */}
          <div className="text-white space-y-6">
            <h1
              className={`text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              O verdadeiro sabor do <span className="text-yellow-400 animate-pulse-glow">Assado Brasileiro</span>
            </h1>

            <p
              className={`text-xl leading-relaxed text-gray-200 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              Carnes selecionadas, temperos especiais e um toque caseiro que faz toda a diferença. Há mais de 20 anos
              levando qualidade à sua mesa.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-bounce-subtle"
                onClick={() => scrollToSection("cardapio")}
              >
                <Utensils className="mr-2 h-5 w-5 animate-spin-slow" />
                Ver Cardápio
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-white/20 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-pulse-border"
                onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
              >
                <ShoppingCart className="mr-2 h-5 w-5 animate-bounce" />
                Fazer Pedido
              </Button>

              <div className="relative">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-green-600 hover:bg-green-700 text-white border-green-500 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-105 animate-wifi-pulse"
                  onMouseEnter={() => setShowWifiInfo(true)}
                  onMouseLeave={() => setShowWifiInfo(false)}
                >
                  <Wifi className="mr-2 h-5 w-5 animate-ping-slow" />
                  Conectar ao Wi-Fi
                </Button>

                {showWifiInfo && (
                  <Card className="absolute top-full mt-2 left-0 z-20 shadow-xl animate-slide-up">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm font-semibold text-gray-800 mb-1 animate-fade-in">
                        <strong className="text-red-600">Rede:</strong> brazgrillassados
                      </p>
                      <p
                        className="text-sm font-semibold text-gray-800 animate-fade-in"
                        style={{ animationDelay: "0.1s" }}
                      >
                        <strong className="text-red-600">Senha:</strong> melhorassado
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Video with Enhanced Animation */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <div className="relative animate-float-video">
              <video
                className="w-full max-w-sm h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/churrasco.mp4" type="video/mp4" />
                <div className="w-full max-w-sm h-[500px] bg-gray-800 rounded-2xl shadow-2xl border-4 border-white/20 flex items-center justify-center">
                  <div className="text-white text-center animate-pulse">
                    <div className="text-6xl mb-4 animate-bounce">🔥</div>
                    <p className="text-lg font-semibold">Vídeo do Churrasco</p>
                    <p className="text-sm opacity-75">Carregando...</p>
                  </div>
                </div>
              </video>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 via-transparent to-red-400/20 pointer-events-none animate-glow-border" />

              {/* Floating Icons Around Video */}
              <div className="absolute -top-4 -right-4 animate-bounce-slow">
                <div className="bg-red-600 rounded-full p-2 shadow-lg">
                  <Flame className="h-4 w-4 text-white animate-flicker" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

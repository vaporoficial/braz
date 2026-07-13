"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Utensils, ShoppingCart, Wifi, Flame, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const embers = [
  { left: "12%", delay: "0s", duration: "6s" },
  { left: "28%", delay: "1.5s", duration: "7s" },
  { left: "45%", delay: "0.8s", duration: "5.5s" },
  { left: "63%", delay: "2.2s", duration: "6.5s" },
  { left: "80%", delay: "1s", duration: "7.5s" },
  { left: "90%", delay: "3s", duration: "6s" },
]

export function Hero() {
  const [showWifiInfo, setShowWifiInfo] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const targetPosition = element.offsetTop - 90
      window.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with warm overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms]"
        style={{
          backgroundImage: `url('/hero.jpg')`,
          transform: isVisible ? "scale(1)" : "scale(1.08)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Subtle rising embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {embers.map((e, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-2 w-2 rounded-full bg-accent/70 blur-[1px] animate-ember-rise"
            style={{ left: e.left, animationDelay: e.delay, animationDuration: e.duration }}
          />
        ))}
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <span
              className={`inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Star className="h-4 w-4 text-accent fill-accent" />
              +20 anos de tradição em Curitiba
            </span>

            <h1
              className={`font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-balance transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              O verdadeiro sabor do{" "}
              <span className="text-accent">assado brasileiro</span>
            </h1>

            <p
              className={`text-lg md:text-xl leading-relaxed text-white/80 max-w-xl text-pretty transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              Carnes selecionadas, temperos especiais e um toque caseiro que faz toda a diferença — assados lentamente
              até o ponto perfeito.
            </p>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-7 shadow-lg transition-transform hover:-translate-y-0.5"
                onClick={() => scrollToSection("cardapio")}
              >
                <Utensils className="mr-2 h-5 w-5" />
                Ver Cardápio
              </Button>

              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#1fb959] text-white font-bold rounded-full px-7 shadow-lg transition-transform hover:-translate-y-0.5"
                onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Fazer Pedido
              </Button>

              <div className="relative">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bold rounded-full px-7 backdrop-blur-sm"
                  onMouseEnter={() => setShowWifiInfo(true)}
                  onMouseLeave={() => setShowWifiInfo(false)}
                >
                  <Wifi className="mr-2 h-5 w-5" />
                  Wi-Fi
                </Button>

                {showWifiInfo && (
                  <Card className="absolute top-full mt-2 left-0 z-20 shadow-xl animate-slide-up border-border">
                    <CardContent className="p-4 text-left">
                      <p className="text-sm font-semibold text-card-foreground mb-1">
                        <span className="text-primary">Rede:</span> brazgrillassados
                      </p>
                      <p className="text-sm font-semibold text-card-foreground">
                        <span className="text-primary">Senha:</span> melhorassado
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Quick stats */}
            <div
              className={`flex gap-8 pt-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              {[
                { value: "20+", label: "Anos de história" },
                { value: "4.8", label: "Nota no Google" },
                { value: "100%", label: "Carnes selecionadas" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-2xl font-extrabold text-accent">{s.value}</div>
                  <div className="text-xs text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Video */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="relative animate-float-soft">
              <video
                className="w-full max-w-sm h-[480px] object-cover rounded-2xl shadow-2xl border-4 border-white/15"
                autoPlay
                loop
                muted
                playsInline
                poster="/hero.jpg"
              >
                <source src="/videos/churrasco.mp4" type="video/mp4" />
              </video>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                <Flame className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

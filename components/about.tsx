"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Award, Users, Flame } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Fire Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-fire opacity-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Flame className="h-8 w-8 text-red-500" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Nossa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">História</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Há mais de duas décadas, o Braz Grill Assados tem sido sinônimo de excelência no churrasco brasileiro,
            combinando tradição familiar com técnicas modernas de preparo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Nossa jornada começou com uma paixão simples: criar o melhor churrasco de Curitiba. Começamos nosso
                preparo às 5h da manhã, garantindo que cada corte de carne seja temperado e assado com o cuidado que
                nossos clientes merecem.
              </p>
              <p className="text-lg leading-relaxed">
                Utilizamos apenas carnes selecionadas e temperos especiais, mantendo viva a tradição do churrasco
                brasileiro enquanto incorporamos técnicas modernas para garantir consistência e qualidade em cada prato.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-red-600 text-white px-4 py-2">Tradição Familiar</Badge>
              <Badge className="bg-yellow-600 text-white px-4 py-2">Carnes Premium</Badge>
              <Badge className="bg-orange-600 text-white px-4 py-2">Preparo Artesanal</Badge>
            </div>
          </div>

          {/* Values */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="grid gap-6">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-red-600/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-red-600/20 rounded-full">
                      <Clock className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Tradição</h3>
                  </div>
                  <p className="text-gray-300">
                    Mais de 20 anos preservando receitas e técnicas tradicionais do churrasco brasileiro.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-600/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-yellow-600/20 rounded-full">
                      <Award className="h-6 w-6 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Qualidade</h3>
                  </div>
                  <p className="text-gray-300">
                    Selecionamos apenas os melhores cortes e ingredientes para garantir sabor excepcional.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-600/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-600/20 rounded-full">
                      <Users className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Família</h3>
                  </div>
                  <p className="text-gray-300">
                    Tratamos cada cliente como família, oferecendo atendimento personalizado e caloroso.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

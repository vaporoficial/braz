"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Navigation, ExternalLink, Star, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Contact() {
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
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Entre em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Contato</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Visite-nos ou faça seu pedido pelo WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Info */}
          <Card
            className={`bg-gray-800/50 border-gray-700 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-700">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Braz Grill Logo"
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-red-600"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Braz Grill Assados</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 font-semibold">4.8 (127 avaliações)</span>
                  </div>
                  <span className="text-sm text-gray-500">Churrascaria Premium</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30">
                  <MapPin className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Endereço</h4>
                    <p className="text-gray-300">
                      Rua República Islâmica do Irã, 330
                      <br />
                      Jardim das Américas, Curitiba/PR
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/30">
                  <Phone className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone</h4>
                    <p className="text-gray-300">(41) 98873-8707</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30">
                  <Clock className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Horário de Funcionamento</h4>
                    <Badge className="bg-green-600 text-white mb-3">Aberto aos finais de semana</Badge>
                    <div className="text-gray-300 space-y-1">
                      <p>Sábado: 10h às 14h</p>
                      <p>Domingo: 10h às 16h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  onClick={() => window.open("https://www.google.com.br/maps/dir//Assados+Braz+Grill", "_blank")}
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Como Chegar
                </Button>

                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:border-red-600 hover:text-red-400 bg-transparent"
                  onClick={() => window.open("https://maps.app.goo.gl/ZnEu8iQLPqABkuFY8", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver no Maps
                </Button>
              </div>

              {/* WhatsApp CTA */}
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4"
                onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fazer Pedido pelo WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Map */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full">
              <div className="relative h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909.0!2d-49.2201841!3d-25.4655514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce54eb9e5d6d1%3A0x20b5cdb38d925df8!2sAssados%20Braz%20Grill!5e0!3m2!1spt-BR!2sbr!4v1697654321000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />

                {/* Location Pin Overlay */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-red-600/20">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <MapPin className="h-4 w-4 text-red-500" />
                    Braz Grill Assados
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

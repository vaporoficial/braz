"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Navigation, ExternalLink, Car, ParkingCircle, Star } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-6 bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50 relative">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 shadow-lg" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4 relative inline-block">
            Entre em Contato
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 rounded-full shadow-lg" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Card */}
          <Card className="shadow-xl border-stone-200">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <Image
                  src="/logo.png"
                  alt="Logo Braz Grill Assados"
                  width={60}
                  height={60}
                  className="rounded-full border-4 border-red-600 shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">Braz Grill Assados</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-semibold">4.8 (127 avaliações)</span>
                  </div>
                  <span className="text-sm text-gray-500">Churrascaria • Assados</span>
                </div>
              </div>

              {/* Business Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Rua República Islâmica do Irã, 330 - Jardim das Américas, Curitiba/PR
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">(41) 98873-8707</span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <Badge className="bg-green-100 text-green-800 mb-2">Aberto aos finais de semana</Badge>
                    <div className="text-sm text-gray-600">
                      <div>Sábado: 10h às 14h</div>
                      <div>Domingo: 10h às 16h</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  onClick={() =>
                    window.open(
                      "https://www.google.com.br/maps/dir//Assados+Braz+Grill+-+R.+Rep%C3%BAblica+Isl%C3%A2mica+do+Ir%C3%A3,+330+-+Jardim+das+Am%C3%A9ricas,+Curitiba+-+PR,+81540-082/@-25.4655465,-49.2201895,912m/data=!3m1!1e3!4m17!1m7!3m6!1s0x94dce54eb9e5d6d1:0x20b5cdb38d925df8!2sAssados+Braz+Grill!8m2!3d-25.4655514!4d-49.2176092!16s%2Fg%2F11c6chws8j!4m8!1m0!1m5!1m1!1s0x94dce54eb9e5d6d1:0x20b5cdb38d925df8!2m2!1d-49.2176092!2d-25.4655514!3e2?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",
                      "_blank",
                    )
                  }
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Como Chegar
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 border-red-300 hover:bg-red-50 bg-transparent"
                  onClick={() => window.open("https://maps.app.goo.gl/ZnEu8iQLPqABkuFY8", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver no Maps
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 pt-6 border-t border-gray-200">
                <Button
                  size="icon"
                  className="rounded-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open("https://www.facebook.com/BRAZGRILLASSADOS/", "_blank")}
                >
                  <span className="sr-only">Facebook</span>
                  <span className="text-lg">📘</span>
                </Button>

                <Button
                  size="icon"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => window.open("https://www.instagram.com/brazgrillassados", "_blank")}
                >
                  <span className="sr-only">Instagram</span>
                  <span className="text-lg">📷</span>
                </Button>

                <Button
                  size="icon"
                  className="rounded-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
                >
                  <span className="sr-only">WhatsApp</span>
                  <span className="text-lg">💬</span>
                </Button>

                <Button
                  size="icon"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600"
                  onClick={() =>
                    window.open(
                      "https://www.google.com.br/maps/place/Assados+Braz+Grill/@-25.4655514,-49.2176092,912m/data=!3m1!1e3!4m18!1m9!3m8!1s0x94dce54eb9e5d6d1:0x20b5cdb38d925df8!2sAssados+Braz+Grill!8m2!3d-25.4655514!4d-49.2176092!9m1!1b1!16s%2Fg%2F11c6chws8j!3m7!1s0x94dce54eb9e5d6d1:0x20b5cdb38d925df8!8m2!3d-25.4655514!4d-49.2176092!9m1!1b1!16s%2Fg%2F11c6chws8j?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",
                      "_blank",
                    )
                  }
                >
                  <span className="sr-only">Google</span>
                  <span className="text-lg">🌐</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-2">Nossa Localização</h3>
              <p className="text-gray-600">Jardim das Américas, Curitiba - PR</p>
            </div>

            <Card className="overflow-hidden shadow-xl">
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909.0!2d-49.2201841!3d-25.4655514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce54eb9e5d6d1%3A0x20b5cdb38d925df8!2sAssados%20Braz%20Grill!5e0!3m2!1spt-BR!2sbr!4v1697654321000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contrast-110 saturate-120"
                />

                {/* Location Pin Overlay */}
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-red-600 z-10">
                  <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                    <MapPin className="h-4 w-4 animate-bounce" />
                    Braz Grill Assados
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-lg border border-red-100">
              <div className="flex items-center gap-2 text-gray-600">
                <Car className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">~15 min do centro de Curitiba</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <ParkingCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">Estacionamento disponível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

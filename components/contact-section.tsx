"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Car,
  ParkingCircle,
  Star,
  Facebook,
  Instagram,
  MessageCircle,
  Globe,
} from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Venha nos visitar
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            Entre em Contato
          </h2>
          <span className="mx-auto block w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Business Card */}
          <Card className="shadow-sm border-border">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <Image
                  src="/logo.png"
                  alt="Logo Braz Grill Assados"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-primary"
                />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">Braz Grill Assados</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">4.8 (127 avaliações)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Churrascaria • Assados</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">
                    Rua República Islâmica do Irã, 330 - Jardim das Américas, Curitiba/PR
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">(41) 98873-8707</span>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <Badge className="bg-green-100 text-green-800 mb-2 hover:bg-green-100">
                      Aberto aos finais de semana
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      <div>Sábado: 10h às 14h</div>
                      <div>Domingo: 10h às 16h</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://www.google.com.br/maps/dir//Assados+Braz+Grill+-+R.+Rep%C3%BAblica+Isl%C3%A2mica+do+Ir%C3%A3,+330+-+Jardim+das+Am%C3%A9ricas,+Curitiba+-+PR,+81540-082",
                      "_blank",
                    )
                  }
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Como Chegar
                </Button>

                <Button
                  variant="outline"
                  className="flex-1 border-border bg-transparent"
                  onClick={() => window.open("https://maps.app.goo.gl/ZnEu8iQLPqABkuFY8", "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver no Maps
                </Button>
              </div>

              <div className="flex justify-center gap-3 pt-6 border-t border-border">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-border bg-transparent hover:bg-secondary"
                  onClick={() => window.open("https://www.facebook.com/BRAZGRILLASSADOS/", "_blank")}
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5 text-primary" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-border bg-transparent hover:bg-secondary"
                  onClick={() => window.open("https://www.instagram.com/brazgrillassados", "_blank")}
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5 text-primary" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-border bg-transparent hover:bg-secondary"
                  onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
                >
                  <span className="sr-only">WhatsApp</span>
                  <MessageCircle className="h-5 w-5 text-primary" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-border bg-transparent hover:bg-secondary"
                  onClick={() => window.open("https://maps.app.goo.gl/ZnEu8iQLPqABkuFY8", "_blank")}
                >
                  <span className="sr-only">Google</span>
                  <Globe className="h-5 w-5 text-primary" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <div className="space-y-5">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1">Nossa Localização</h3>
              <p className="text-muted-foreground">Jardim das Américas, Curitiba - PR</p>
            </div>

            <Card className="overflow-hidden shadow-sm border-border">
              <div className="relative h-80">
                <iframe
                  title="Mapa Braz Grill Assados"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909.0!2d-49.2201841!3d-25.4655514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce54eb9e5d6d1%3A0x20b5cdb38d925df8!2sAssados%20Braz%20Grill!5e0!3m2!1spt-BR!2sbr!4v1697654321000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-muted-foreground p-4 bg-card rounded-xl border border-border">
                <Car className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">~15 min do centro de Curitiba</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground p-4 bg-card rounded-xl border border-border">
                <ParkingCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">Estacionamento disponível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

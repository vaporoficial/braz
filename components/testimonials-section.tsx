"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    text: "Melhor assado de Curitiba! As carnes são sempre frescas e muito bem preparadas. A costelinha pururuca é simplesmente incrível!",
    author: "João Silva",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    text: "Atendimento excepcional e comida de altíssima qualidade. A maionese caseira é um diferencial que faz toda a diferença!",
    author: "Maria Oliveira",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    text: "Ambiente acolhedor e carnes no ponto perfeito. Recomendo o frango recheado, é uma delícia! Sempre volto.",
    author: "Carlos Souza",
    avatar: "/avatars/avatar3.jpg",
  },
]

export function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev]
                  next[index] = true
                  return next
                })
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Avaliações no Google
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            O que dizem nossos clientes
          </h2>
          <span className="mx-auto block w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-border hover:shadow-lg transition-all duration-500 relative ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent/40 mb-4" />
                <div className="flex mb-4 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed text-pretty">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`Foto de ${testimonial.author}`}
                    width={44}
                    height={44}
                    className="rounded-full border-2 border-border"
                  />
                  <span className="font-heading font-bold text-foreground">{testimonial.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

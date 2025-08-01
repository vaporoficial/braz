"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    text: "Melhor Assado de Curitiba! As carnes são sempre frescas e muito bem preparadas. A costelinha pururuca é simplesmente incrível!",
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
            // Animate cards with staggered delay
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-testimonial opacity-10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 40}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            <Quote className="h-12 w-12 text-red-300 transform rotate-12" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4 relative inline-block animate-title-glow">
            Comentários no Google Maps
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 rounded-full shadow-lg animate-underline-expand" />
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Veja o que nossos clientes estão dizendo sobre nós no Google Maps!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-700 border-stone-200 hover:border-red-200 hover:shadow-2xl relative overflow-hidden group ${
                visibleCards[index] ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-yellow-50/0 group-hover:from-red-50/30 group-hover:to-yellow-50/30 transition-all duration-500" />

              {/* Floating Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="h-8 w-8 text-red-400 animate-pulse-slow" />
              </div>

              <CardContent className="p-6 relative z-10">
                {/* Animated Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current animate-star-twinkle"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: `${2 + i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 animate-text-reveal">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 animate-author-slide">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`Foto de ${testimonial.author}`}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-red-200 group-hover:border-red-400 transition-all duration-300 hover:scale-110"
                    />
                    {/* Online Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <span className="font-semibold text-red-600 group-hover:text-red-700 transition-colors duration-300">
                    {testimonial.author}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "João Silva",
    avatar: "/avatars/avatar1.jpg",
    rating: 5,
    text: "Melhor churrasco de Curitiba! As carnes são sempre frescas e muito bem preparadas. A costelinha pururuca é simplesmente incrível!",
    date: "Há 2 semanas",
  },
  {
    name: "Maria Oliveira",
    avatar: "/avatars/avatar2.jpg",
    rating: 5,
    text: "Atendimento excepcional e comida de altíssima qualidade. A maionese caseira é um diferencial que faz toda a diferença!",
    date: "Há 1 mês",
  },
  {
    name: "Carlos Souza",
    avatar: "/avatars/avatar3.jpg",
    rating: 5,
    text: "Ambiente acolhedor e carnes no ponto perfeito. Recomendo o frango recheado, é uma delícia! Sempre volto.",
    date: "Há 3 semanas",
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-fire opacity-5"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <Quote className="h-16 w-16 text-red-500" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            O que nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Clientes</span>{" "}
            dizem
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Avaliações reais de clientes satisfeitos com nosso churrasco
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-gray-800/50 border-gray-700 hover:border-red-600/50 transition-all duration-700 hover:shadow-2xl hover:shadow-red-600/10 ${
                visibleCards[index] ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
              }`}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-red-500 opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-red-600/20"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Veja mais avaliações no Google</p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-bold text-xl">4.8</span>
            <span className="text-gray-400">(127 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

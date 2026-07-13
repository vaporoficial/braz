"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

const galleryItems = [
  { type: "image", src: "/cardapio/costela.jpg", title: "Costela Premium" },
  { type: "image", src: "/cardapio/fraldinha.jpg", title: "Fraldinha Especial" },
  { type: "image", src: "/cardapio/frango-recheado.jpg", title: "Frango Recheado" },
  { type: "image", src: "/cardapio/costelinha.jpg", title: "Costelinha Pururuca" },
  { type: "video", src: "/videos/churrasco.mp4", title: "Processo de Preparo" },
  { type: "image", src: "/cardapio/cupim.jpg", title: "Cupim Assado" },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Nossa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Galeria</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Veja nossos pratos e o cuidado no preparo de cada especialidade
          </p>
        </div>

        {/* Main Gallery */}
        <div
          className={`relative mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Card className="relative h-96 lg:h-[500px] overflow-hidden bg-gray-800 border-gray-700">
            {galleryItems[currentIndex].type === "image" ? (
              <Image
                src={galleryItems[currentIndex].src || "/placeholder.svg"}
                alt={galleryItems[currentIndex].title}
                fill
                className="object-cover"
              />
            ) : (
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={galleryItems[currentIndex].src} type="video/mp4" />
              </video>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Title */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-2">{galleryItems[currentIndex].title}</h3>
              {galleryItems[currentIndex].type === "video" && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Play className="h-4 w-4" />
                  <span className="text-sm">Vídeo</span>
                </div>
              )}
            </div>

            {/* Navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-gray-600 text-white hover:bg-black/70"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-gray-600 text-white hover:bg-black/70"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Card>
        </div>

        {/* Thumbnails */}
        <div
          className={`flex gap-4 justify-center overflow-x-auto pb-4 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? "border-red-500 scale-110" : "border-gray-600 hover:border-gray-400"
              }`}
            >
              {item.type === "image" ? (
                <Image src={item.src || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <Play className="h-6 w-6 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

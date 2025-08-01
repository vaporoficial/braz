"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, ShoppingCart, Sparkles } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import Image from "next/image"

interface MenuItemProps {
  id: string
  name: string
  description: string
  price: number
  unit: string
  image: string
  options?: string[]
}

export function MenuItem({ id, name, description, price, unit, image, options }: MenuItemProps) {
  const [quantity, setQuantity] = useState(unit === "kg" ? 1 : 1)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [isAdding, setIsAdding] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const cardRef = useRef<HTMLDivElement>(null)

  const step = unit === "kg" ? 0.5 : 1
  const min = unit === "kg" ? 0.5 : 1

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(min, quantity + delta)
    setQuantity(newQuantity)
  }

  const handleAddToCart = async () => {
    setIsAdding(true)

    const itemName = selectedOption ? `${name} (${selectedOption})` : name
    addToCart({
      id: selectedOption ? `${id}-${selectedOption}` : id,
      name: itemName,
      price,
      quantity,
      unit,
    })

    // Create sparkle effect
    createSparkleEffect()

    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  const createSparkleEffect = () => {
    const card = cardRef.current
    if (!card) return

    for (let i = 0; i < 6; i++) {
      const sparkle = document.createElement("div")
      sparkle.className = "absolute pointer-events-none z-50"
      sparkle.innerHTML = "✨"
      sparkle.style.fontSize = "20px"
      sparkle.style.left = Math.random() * 100 + "%"
      sparkle.style.top = Math.random() * 100 + "%"
      sparkle.style.animation = "sparkle-burst 1s ease-out forwards"

      card.appendChild(sparkle)

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle)
        }
      }, 1000)
    }
  }

  return (
    <Card
      ref={cardRef}
      className={`group overflow-hidden transition-all duration-700 border-stone-200 hover:border-red-200 hover:shadow-2xl relative ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
      } ${isHovered ? "animate-card-glow" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: `${Math.random() * 0.3}s`,
        transform: isHovered ? "translateY(-8px) scale(1.02)" : undefined,
      }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 via-orange-50/0 to-yellow-50/0 group-hover:from-red-50/30 group-hover:via-orange-50/20 group-hover:to-yellow-50/30 transition-all duration-500" />

      <div className="flex relative z-10">
        {/* Image with Enhanced Hover Effects */}
        <div className="flex-shrink-0 w-32 h-32 relative overflow-hidden cursor-pointer group">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-125 group-hover:rotate-2"
          />

          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* Floating Price Badge */}
          <div className="absolute top-2 right-2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
            <Badge className="bg-red-600 text-white font-bold animate-pulse-slow">R$ {price.toFixed(2)}</Badge>
          </div>
        </div>

        {/* Content with Staggered Animations */}
        <CardContent className="flex-1 p-4 flex flex-col">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3 group-hover:text-gray-800 transition-colors duration-300">
              {description}
            </p>

            <div className="flex items-center justify-between mb-3">
              <Badge
                variant="secondary"
                className="bg-red-100 text-red-700 font-bold text-base px-3 py-1 animate-price-glow"
              >
                R$ {price.toFixed(2)} {unit === "kg" ? "kg" : "un"}
              </Badge>
            </div>

            {/* Options with Animation */}
            {options && (
              <div className="flex flex-wrap gap-2 mb-3">
                {options.map((option, index) => (
                  <Button
                    key={option}
                    variant={selectedOption === option ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedOption(selectedOption === option ? "" : option)}
                    className={`text-xs transition-all duration-300 transform hover:scale-105 ${
                      selectedOption === option
                        ? "bg-yellow-500 hover:bg-yellow-600 text-black animate-selected-option"
                        : "hover:bg-red-50 hover:border-red-300 animate-option-hover"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}

            {/* Quantity Control with Enhanced Animation */}
            <div className="flex items-center gap-3 mb-3 p-3 bg-gradient-to-r from-stone-50 to-amber-50 rounded-xl border border-stone-200 group-hover:border-red-200 transition-all duration-300 group-hover:shadow-inner">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-red-300 hover:bg-red-50 bg-transparent transition-all duration-300 hover:scale-110 hover:rotate-12"
                onClick={() => handleQuantityChange(-step)}
                disabled={quantity <= min}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 min-w-[3rem] text-center text-lg animate-quantity-pulse">
                  {quantity}
                </span>
                <span className="text-sm text-red-600 font-medium animate-unit-bounce">
                  {unit === "kg" ? "kg" : "un"}
                </span>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-red-300 hover:bg-red-50 bg-transparent transition-all duration-300 hover:scale-110 hover:-rotate-12"
                onClick={() => handleQuantityChange(step)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button with Fire Effect */}
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:from-red-700 hover:via-orange-600 hover:to-yellow-600 text-white font-bold py-3 rounded-full shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden ${
              isAdding ? "animate-fire-burst scale-105" : "hover:animate-button-glow"
            }`}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 animate-shimmer" />

            <div className="relative z-10 flex items-center justify-center">
              {isAdding ? (
                <>
                  <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                  Adicionando...
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Adicionar ao Carrinho
                </>
              )}
            </div>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}

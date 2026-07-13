"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Minus, Plus, ShoppingCart, Check } from "lucide-react"
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
  const [quantity, setQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [isAdding, setIsAdding] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { addToCart } = useCart()
  const cardRef = useRef<HTMLDivElement>(null)

  const step = unit === "kg" ? 0.5 : 1
  const min = unit === "kg" ? 0.5 : 1

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const handleQuantityChange = (delta: number) => {
    setQuantity((q) => Math.max(min, Math.round((q + delta) * 10) / 10))
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    const itemName = selectedOption ? `${name} (${selectedOption})` : name
    addToCart({
      id: selectedOption ? `${id}-${selectedOption}` : id,
      name: itemName,
      price,
      quantity,
      unit,
    })
    setTimeout(() => setIsAdding(false), 1200)
  }

  return (
    <Card
      ref={cardRef}
      className={`group overflow-hidden border-border hover:border-primary/40 hover:shadow-lg transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex">
        {/* Image */}
        <div className="flex-shrink-0 w-28 sm:w-32 relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <CardContent className="flex-1 p-4 flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="font-heading font-bold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                {name}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>

            <div className="mb-3">
              <span className="font-heading text-lg font-extrabold text-primary">R$ {price.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground font-medium">/{unit === "kg" ? "kg" : "un"}</span>
            </div>

            {options && (
              <div className="flex flex-wrap gap-2 mb-3">
                {options.map((option) => (
                  <Button
                    key={option}
                    variant={selectedOption === option ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedOption(selectedOption === option ? "" : option)}
                    className="text-xs h-7 rounded-full"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2 bg-secondary rounded-full p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-background"
                  onClick={() => handleQuantityChange(-step)}
                  disabled={quantity <= min}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-bold text-foreground min-w-[3rem] text-center text-sm">
                  {quantity} {unit === "kg" ? "kg" : "un"}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-background"
                  onClick={() => handleQuantityChange(step)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full transition-transform hover:-translate-y-0.5"
          >
            {isAdding ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Adicionado!
              </>
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Adicionar
              </>
            )}
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}

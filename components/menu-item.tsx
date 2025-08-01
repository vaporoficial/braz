"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, ShoppingCart } from "lucide-react"
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
  const { addToCart } = useCart()

  const step = unit === "kg" ? 0.5 : 1
  const min = unit === "kg" ? 0.5 : 1

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

    // Visual feedback
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 border-stone-200 hover:border-red-200">
      <div className="flex">
        {/* Image */}
        <div className="flex-shrink-0 w-32 h-32 relative overflow-hidden cursor-pointer">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <CardContent className="flex-1 p-4 flex flex-col">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>

            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary" className="bg-red-100 text-red-700 font-bold text-base px-3 py-1">
                R$ {price.toFixed(2)} {unit === "kg" ? "kg" : "un"}
              </Badge>
            </div>

            {/* Options */}
            {options && (
              <div className="flex flex-wrap gap-2 mb-3">
                {options.map((option) => (
                  <Button
                    key={option}
                    variant={selectedOption === option ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedOption(selectedOption === option ? "" : option)}
                    className={`text-xs ${
                      selectedOption === option
                        ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                        : "hover:bg-red-50 hover:border-red-300"
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}

            {/* Quantity Control */}
            <div className="flex items-center gap-3 mb-3 p-2 bg-stone-50 rounded-lg border border-stone-200">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-red-300 hover:bg-red-50 bg-transparent"
                onClick={() => handleQuantityChange(-step)}
                disabled={quantity <= min}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 min-w-[3rem] text-center">{quantity}</span>
                <span className="text-sm text-red-600 font-medium">{unit === "kg" ? "kg" : "un"}</span>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-red-300 hover:bg-red-50 bg-transparent"
                onClick={() => handleQuantityChange(step)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:from-red-700 hover:via-orange-600 hover:to-yellow-600 text-white font-bold py-2 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 ${
              isAdding ? "animate-pulse scale-105" : ""
            }`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {isAdding ? "Adicionando..." : "Adicionar ao Carrinho"}
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}

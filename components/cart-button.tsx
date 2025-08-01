"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { CartModal } from "@/components/cart-modal"

export function CartButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsModalOpen(true)}
        className="relative bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white border-none font-semibold"
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Carrinho
        {totalItems > 0 && <Badge className="ml-2 bg-yellow-400 text-black font-bold">{totalItems}</Badge>}
      </Button>

      <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

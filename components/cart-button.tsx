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
        size="icon"
        className="relative bg-transparent border-border"
        onClick={() => setIsModalOpen(true)}
      >
        <span className="sr-only">Abrir carrinho</span>
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs min-w-[20px] h-5 flex items-center justify-center p-0">
            {totalItems}
          </Badge>
        )}
      </Button>

      <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

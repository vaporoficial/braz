"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { CartButton } from "@/components/cart-button"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white shadow-2xl rounded-full px-6 py-3 font-semibold transition-all transform hover:scale-105 hover:shadow-3xl"
        onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        <span className="hidden sm:inline">Pedir pelo WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </Button>

      <div className="flex justify-end">
        <CartButton />
      </div>
    </div>
  )
}

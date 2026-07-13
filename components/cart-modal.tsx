"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react"
import { useCart } from "@/components/cart-provider"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart()

  const handleWhatsAppOrder = () => {
    if (items.length === 0) {
      alert("Seu carrinho está vazio!")
      return
    }

    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n"

    items.forEach((item) => {
      const itemTotal = item.price * item.quantity
      message += `• ${item.name}: ${item.quantity} x R$ ${item.price.toFixed(2)} = R$ ${itemTotal.toFixed(2)}\n`
    })

    message += `\n*Total: R$ ${totalPrice.toFixed(2)}*\n\nObrigado!`

    const whatsappUrl = `https://wa.me/5541988738707?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    clearCart()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-bold text-primary">Seu Carrinho</DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
            <Button onClick={onClose} variant="outline">
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    R$ {item.price.toFixed(2)} por {item.unit}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity - (item.unit === "kg" ? 0.5 : 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <span className="font-semibold min-w-[3rem] text-center">{item.quantity}</span>

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-transparent"
                      onClick={() => updateQuantity(item.id, item.quantity + (item.unit === "kg" ? 0.5 : 1))}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Badge variant="secondary" className="bg-secondary text-primary font-bold">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </Badge>

                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 text-primary hover:bg-secondary bg-transparent"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <span className="sr-only">Remover item</span>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total:</span>
                <span className="font-heading text-2xl font-bold text-primary">R$ {totalPrice.toFixed(2)}</span>
              </div>

              <Button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] hover:bg-[#1fb959] text-white font-bold py-3 text-lg rounded-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Finalizar Pedido no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

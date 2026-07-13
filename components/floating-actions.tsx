"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronUp } from "lucide-react"
import { CartButton } from "@/components/cart-button"

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className={`fixed bottom-6 right-6 flex flex-col gap-3 z-50 transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      {/* Scroll to Top */}
      {showScrollTop && (
        <Button
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 text-white shadow-2xl rounded-full transition-all transform hover:scale-110"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      {/* WhatsApp */}
      <Button
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white shadow-2xl rounded-full px-6 py-3 font-semibold transition-all transform hover:scale-110 animate-whatsapp-pulse"
        onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>

      {/* Cart */}
      <CartButton />
    </div>
  )
}

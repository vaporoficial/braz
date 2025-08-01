"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronUp } from "lucide-react"
import { CartButton } from "@/components/cart-button"

export function FloatingButtons() {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-6 right-6 flex flex-col gap-3 z-50 transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="icon"
          className="bg-gray-800 hover:bg-gray-700 text-white shadow-2xl rounded-full p-3 transition-all duration-300 transform hover:scale-110 animate-slide-up"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5 animate-bounce-slow" />
        </Button>
      )}

      {/* WhatsApp Button with Enhanced Animation */}
      <Button
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white shadow-2xl rounded-full px-6 py-3 font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-3xl animate-whatsapp-pulse relative overflow-hidden"
        onClick={() => window.open("https://wa.me/5541988738707", "_blank")}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 animate-pulse-wave" />

        <div className="relative z-10 flex items-center">
          <MessageCircle className="mr-2 h-5 w-5 animate-message-bounce" />
          <span className="hidden sm:inline animate-text-glow">Pedir pelo WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </div>

        {/* Notification Dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      </Button>

      {/* Cart Button with Animation */}
      <div className="animate-cart-float">
        <CartButton />
      </div>
    </div>
  )
}

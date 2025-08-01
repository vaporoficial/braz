"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Mascot() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 1000)
  }

  return (
    <div
      className={`fixed bottom-40 right-8 z-40 hidden lg:block transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      <div
        className={`relative cursor-pointer transition-all duration-500 ${
          isClicked ? "animate-mascot-celebration" : "animate-mascot-float"
        }`}
        onClick={handleClick}
      >
        {/* Glowing Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400 animate-spin-slow opacity-30 scale-110" />

        {/* Main Image */}
        <Image
          src="/mascote.png"
          alt="Mascote do Braz Grill Assados"
          width={120}
          height={120}
          className="rounded-full border-4 border-red-600 shadow-2xl hover:scale-110 transition-transform relative z-10"
        />

        {/* Notification Pulse */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full animate-ping" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold animate-bounce">!</span>
        </div>

        {/* Floating Hearts */}
        {isClicked && (
          <>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-heart-float pointer-events-none"
                style={{
                  left: `${50 + (i - 3) * 20}%`,
                  top: `${50 + (i % 2) * 20}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                ❤️
              </div>
            ))}
          </>
        )}

        {/* Speech Bubble */}
        <div className="absolute -top-16 -left-20 bg-white rounded-lg p-2 shadow-lg border-2 border-red-200 animate-speech-bubble opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-xs font-semibold text-red-600 whitespace-nowrap">Clique em mim! 🔥</div>
          <div className="absolute bottom-0 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform translate-y-full" />
        </div>
      </div>
    </div>
  )
}

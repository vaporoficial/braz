"use client"

import Image from "next/image"

export function Mascot() {
  return (
    <div className="fixed bottom-40 right-8 z-40 hidden lg:block">
      <div className="relative animate-bounce">
        <Image
          src="/mascote.png"
          alt="Mascote do Braz Grill Assados"
          width={120}
          height={120}
          className="rounded-full border-4 border-red-600 shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full animate-pulse" />
      </div>
    </div>
  )
}

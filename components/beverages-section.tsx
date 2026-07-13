"use client"

import Image from "next/image"

const beverages = [
  { name: "Água", image: "/bebidas/agua.jpg" },
  { name: "Coca-Cola", image: "/bebidas/coca.jpg" },
  { name: "Tubaína", image: "/bebidas/tubaina.jpg" },
  { name: "Cervejas", image: "/bebidas/cervejas.jpg" },
]

export function BeveragesSection() {
  return (
    <section id="bebidas" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Para acompanhar
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4 text-balance">
            Bebidas
          </h2>
          <span className="mx-auto block w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-lg text-muted-foreground mt-5">
            Complete o seu assado com nossas bebidas geladas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {beverages.map((beverage) => (
            <div
              key={beverage.name}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="aspect-square relative">
                <Image
                  src={beverage.image || "/placeholder.svg"}
                  alt={beverage.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <h4 className="absolute bottom-4 left-0 right-0 text-white font-heading font-bold text-lg text-center drop-shadow">
                  {beverage.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

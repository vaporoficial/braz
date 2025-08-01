import Image from "next/image"

const beverages = [
  {
    name: "Água",
    image: "/bebidas/agua.jpg",
  },
  {
    name: "Coca-Cola",
    image: "/bebidas/coca.jpg",
  },
  {
    name: "Tubaina",
    image: "/bebidas/tubaina.jpg",
  },
  {
    name: "Cervejas",
    image: "/bebidas/cervejas.jpg",
  },
]

export function BeveragesSection() {
  return (
    <section id="bebidas" className="py-20 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4 relative inline-block">
            Bebidas
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 rounded-full shadow-lg" />
          </h2>
          <p className="text-lg text-gray-600">Acompanhe seu Assado com nossas bebidas selecionadas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {beverages.map((beverage, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="aspect-square relative">
                <Image
                  src={beverage.image || "/placeholder.svg"}
                  alt={beverage.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-lg text-center">{beverage.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

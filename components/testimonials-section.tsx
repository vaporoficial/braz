import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    text: "Melhor Assado de Curitiba! As carnes são sempre frescas e muito bem preparadas. A costelinha pururuca é simplesmente incrível!",
    author: "João Silva",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    text: "Atendimento excepcional e comida de altíssima qualidade. A maionese caseira é um diferencial que faz toda a diferença!",
    author: "Maria Oliveira",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    text: "Ambiente acolhedor e carnes no ponto perfeito. Recomendo o frango recheado, é uma delícia! Sempre volto.",
    author: "Carlos Souza",
    avatar: "/avatars/avatar3.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4 relative inline-block">
            Comentários no Google Maps
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 rounded-full shadow-lg" />
          </h2>
          <p className="text-lg text-gray-600">Veja o que nossos clientes estão dizendo sobre nós no Google Maps!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-stone-200"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`Foto de ${testimonial.author}`}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-red-200"
                  />
                  <span className="font-semibold text-red-600">{testimonial.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { MenuCategory } from "@/components/menu-category"

const beefItems = [
  {
    id: "costela",
    name: "Costela de Boi Sem Osso",
    description:
      "Uma costela suculenta, assada lentamente em papel celofane para reter todos os sabores. O resultado é uma carne tão macia que desmancha na boca.",
    price: 68.0,
    unit: "kg",
    image: "/cardapio/costela.jpg",
  },
  {
    id: "fraldinha",
    name: "Fraldinha",
    description:
      "Corte nobre e saboroso, a fraldinha é assada em papel celofane até ficar perfeitamente macia e desfiável. Cada pedaço é uma explosão de suculência e aroma.",
    price: 78.0,
    unit: "kg",
    image: "/cardapio/fraldinha.jpg",
  },
  {
    id: "cupim",
    name: "Cupim",
    description:
      "O cupim é assado no papel celofane até atingir uma textura incrivelmente macia e um sabor rico e marcante.",
    price: 78.0,
    unit: "kg",
    image: "/cardapio/cupim.jpg",
  },
]

const chickenItems = [
  {
    id: "frango-recheado",
    name: "Frango com ou sem Recheio",
    description:
      "Frango inteiro, recheado com uma farofa de milho artesanal ou servido simples. Assado até a pele ficar dourada e suculenta.",
    price: 45.0,
    unit: "unidade",
    image: "/cardapio/frango-recheado.jpg",
    options: ["Com Farofa", "Sem Farofa"],
  },
  {
    id: "meio-frango",
    name: "Meio Frango",
    description:
      "Metade de um frango assado, com a pele crocante e a carne suculenta, ideal para quem deseja uma refeição rápida e deliciosa.",
    price: 22.0,
    unit: "unidade",
    image: "/cardapio/meio-frango.jpg",
  },
  {
    id: "coxa-sobrecoxa",
    name: "Coxa com Sobrecoxa",
    description: "Coxa com sobrecoxa assadas até ficarem douradas e suculentas.",
    price: 38.0,
    unit: "kg",
    image: "/cardapio/coxa-sobrecoxa.jpg",
  },
  {
    id: "medalhao-frango",
    name: "Medalhão de Frango",
    description:
      "Peito de frango envolto em fatias de bacon, assado até ficar com uma crosta caramelizada e o interior macio e saboroso.",
    price: 75.0,
    unit: "kg",
    image: "/cardapio/medalhao-frango.jpg",
  },
]

const porkItems = [
  {
    id: "costelinha",
    name: "Costelinha Pururuca",
    description:
      "Costelinha de porco assada até a pele ficar estaladiça (pururuca), com a carne tão macia que se solta do osso.",
    price: 68.0,
    unit: "kg",
    image: "/cardapio/costelinha.jpg",
  },
  {
    id: "copa-lombo",
    name: "Copa Lombo",
    description: "Corte suíno suculento e saboroso, assado lentamente para garantir maciez e um sabor inigualável.",
    price: 68.0,
    unit: "kg",
    image: "/cardapio/copa-lombo.jpg",
  },
  {
    id: "paleta",
    name: "Paleta Suína",
    description:
      "Paleta de porco preparada no estilo pururuca, com a pele crocante e a carne desfiável, repleta de temperos especiais.",
    price: 49.0,
    unit: "kg",
    image: "/cardapio/paleta.jpg",
  },
  {
    id: "joelho",
    name: "Joelho Eisbein",
    description:
      "Joelho suíno assado até a pele ficar crocante e a carne macia, uma combinação perfeita de texturas e sabores.",
    price: 49.0,
    unit: "kg",
    image: "/cardapio/joelho.jpg",
  },
  {
    id: "linguica",
    name: "Linguiça de Pernil e Lombo",
    description:
      "Linguiça artesanal feita com cortes nobres de pernil e lombo, sem conservantes, ideal para churrasco.",
    price: 38.0,
    unit: "kg",
    image: "/cardapio/linguica.jpg",
  },
  {
    id: "medalhao-suino",
    name: "Medalhão Suíno",
    description:
      "Copa lombo envolta em bacon, assada até ficar com uma crosta dourada e o interior suculento e cheio de sabor.",
    price: 75.0,
    unit: "kg",
    image: "/cardapio/medalhao-suino.jpg",
  },
]

const accompaniments = [
  {
    id: "maionese",
    name: "Maionese Caseira",
    description:
      "Nossa maionese artesanal é feita com leite fresco, batata e óleo de qualidade, resultando em um creme leve e saboroso que combina perfeitamente com todos os nossos assados.",
    price: 8.0,
    unit: "unidade",
    image: "/cardapio/maionese.jpg",
  },
  {
    id: "farofa",
    name: "Farofa de Paçoca de Carne",
    description:
      "Farofa crocante preparada com toucinho de porco e carne seca, uma receita tradicional que traz um toque especial ao seu prato.",
    price: 10.0,
    unit: "unidade",
    image: "/cardapio/farofa.jpg",
  },
  {
    id: "linguica-frescal",
    name: "Linguiça Artesanal Frescal de Lombo e Pernil",
    description:
      "Linguiça frescal artesanal, preparada com cortes selecionados de lombo e pernil, temperada com ervas naturais, perfeita como acompanhamento para seu assado ou churrasco.",
    price: 20.0,
    unit: "kg",
    image: "/cardapio/linguica-frescal.jpg",
  },
]

export function MenuSection() {
  return (
    <section id="cardapio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-600 mb-4 relative inline-block">
            Nosso Cardápio
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 rounded-full shadow-lg" />
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Todos os nossos pratos são preparados diariamente com ingredientes frescos e selecionados
          </p>
        </div>

        <div className="space-y-16">
          <MenuCategory
            id="carnes-bovinas"
            title="Carnes Bovinas"
            description="Costela, fraldinha e cupim feitos no ponto perfeito."
            items={beefItems}
          />

          <MenuCategory
            id="frangos"
            title="Frangos"
            description="Frango recheado, meio frango, coxa com sobrecoxa e medalhão temperados com carinho."
            items={chickenItems}
          />

          <MenuCategory
            id="carnes-suinas"
            title="Carnes Suínas"
            description="Costelinha, copa lombo e joelho Eisbein com pururuca crocante."
            items={porkItems}
          />

          <div
            id="acompanhamentos"
            className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-3xl p-8 border border-amber-200 shadow-lg"
          >
            <MenuCategory
              title="Acompanhamentos Especiais"
              description="Complementos perfeitos para realçar o sabor dos nossos assados."
              items={accompaniments}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

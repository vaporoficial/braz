"use client"

import { MenuItem } from "@/components/menu-item"

interface MenuCategoryProps {
  id?: string
  title: string
  description: string
  items: Array<{
    id: string
    name: string
    description: string
    price: number
    unit: string
    image: string
    options?: string[]
  }>
}

export function MenuCategory({ id, title, description, items }: MenuCategoryProps) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="mb-8">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

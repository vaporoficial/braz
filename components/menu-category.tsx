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
    <div id={id} className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-red-600 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

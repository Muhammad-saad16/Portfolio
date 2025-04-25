"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardHoverEffectProps {
  items: {
    title: string
    description: string
    icon?: React.ReactNode
  }[]
  className?: string
}

export function CardHoverEffect({ items, className }: CardHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title + idx}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="card-hover-effect h-full p-6 flex flex-col">
            <div className="flex items-center mb-4">
              {item.icon && <div className="mr-3 p-2 rounded-lg bg-primary/10 text-primary">{item.icon}</div>}
              <h3 className="text-lg font-medium">{item.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
            <div className="spotlight" />
          </div>

          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 -z-10 blur-sm"
            />
          )}
        </div>
      ))}
    </div>
  )
}

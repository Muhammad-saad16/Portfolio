"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverCardEffectProps {
  items: {
    title: string
    description: string
    image: string
    link?: string
    tags?: string[]
  }[]
  className?: string
}

export function HoverCardEffect({ items, className }: HoverCardEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <a
          key={item.title + idx}
          href={item.link || "#"}
          className="group relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="hover-card aspect-[4/3]">
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="hover-card-image" />
            <div className="hover-card-content">
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-white/80 mb-3">{item.description}</p>
              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tech-pill text-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 -z-10 blur-sm"
            />
          )}
        </a>
      ))}
    </div>
  )
}

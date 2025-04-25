"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MovingCardsProps {
  items: {
    quote: string
    name: string
    title: string
    image?: string
  }[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

export function MovingCards({ items, direction = "left", speed = "normal", className }: MovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  const speedMap = {
    slow: 50,
    normal: 35,
    fast: 20,
  }

  return (
    <div ref={containerRef} className={cn("overflow-hidden relative", className)}>
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [-containerWidth, 0] : [0, -containerWidth],
        }}
        transition={{
          duration: speedMap[speed],
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {items.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="testimonial-card flex-shrink-0 w-[350px]">
            <div className="flex flex-col h-full">
              <p className="text-muted-foreground mb-4 flex-grow">"{item.quote}"</p>
              <div className="flex items-center">
                {item.image && (
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

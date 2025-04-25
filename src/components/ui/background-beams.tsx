"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function BackgroundBeams({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={ref} className={cn("pointer-events-none fixed inset-0 z-0 h-full overflow-hidden", className)} {...props}>
      <div className="relative h-full w-full">
        <motion.div
          animate={{
            x: mousePosition.x > 0 ? mousePosition.x - 200 : 0,
            y: mousePosition.y > 0 ? mousePosition.y - 200 : 0,
          }}
          transition={{ type: "spring", mass: 0.1, stiffness: 50, damping: 20 }}
          className="absolute inset-0 opacity-[0.15]"
          style={{
            background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 60%)",
            width: "400px",
            height: "400px",
          }}
        />
      </div>
    </div>
  )
}

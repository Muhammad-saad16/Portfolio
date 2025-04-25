"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface SpotlightProps {
  children: React.ReactNode
  className?: string
}

export function Spotlight({ children, className = "" }: SpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPosition({ x, y })
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="spotlight"
        style={
          {
            "--x": `${position.x}%`,
            "--y": `${position.y}%`,
          } as React.CSSProperties
        }
      />
      {children}
    </motion.div>
  )
}

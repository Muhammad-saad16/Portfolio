"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleCount?: number
  particleColor?: string
  particleOffsetX?: number
  particleOffsetY?: number
}

export const SparklesCore = ({
  id,
  className,
  background,
  minSize = 0.4,
  maxSize = 1,
  particleCount = 20,
  particleColor = "#3b82f6",
  particleOffsetX = 0,
  particleOffsetY = 0,
}: SparklesProps) => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      speed: number
      opacity: number
    }>
  >([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    contextRef.current = context
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || !entries.length) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    resizeObserver.observe(document.body)

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width + particleOffsetX,
      y: Math.random() * canvas.height + particleOffsetY,
      size: Math.random() * (maxSize - minSize) + minSize,
      speed: Math.random() * 0.2 + 0.1,
      opacity: Math.random(),
    }))

    setParticles(newParticles)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      resizeObserver.disconnect()
    }
  }, [maxSize, minSize, particleCount, particleOffsetX, particleOffsetY])

  useEffect(() => {
    if (!contextRef.current || !canvasRef.current) return

    const animate = () => {
      if (!contextRef.current || !canvasRef.current) return

      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          if (!contextRef.current || !canvasRef.current) return particle

          // Update particle position
          const newY = particle.y - particle.speed
          const newOpacity = particle.opacity + (Math.random() * 0.1 - 0.05)

          // Draw particle
          contextRef.current.beginPath()
          contextRef.current.arc(particle.x, newY, particle.size, 0, Math.PI * 2)
          contextRef.current.fillStyle = `${particleColor}${Math.floor(newOpacity * 255).toString(16)}`
          contextRef.current.fill()

          // Reset particle if it goes off screen
          if (newY < -10) {
            return {
              ...particle,
              y: canvasRef.current.height + 10,
              x: Math.random() * canvasRef.current.width,
              opacity: Math.random(),
            }
          }

          // Return updated particle
          return {
            ...particle,
            y: newY,
            opacity: Math.max(0, Math.min(1, newOpacity)),
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles, particleColor])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
      style={{
        background: background || "transparent",
      }}
    />
  )
}

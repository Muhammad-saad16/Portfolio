"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TechIcon {
  icon: string
  alt: string
  color?: string
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techIcons: TechIcon[]
  link: string
  className?: string
}

export function ProjectCard({ title, description, image, techIcons, link, className }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-xl overflow-hidden bg-[#0a0c16] border border-border/40 project-card-container",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="h-full"
        animate={{
          rotateX: isHovered ? `-${mousePosition.y * 10}deg` : "0deg",
          rotateY: isHovered ? `${mousePosition.x * 15}deg` : "0deg",
          scale: isHovered ? 1.03 : 1,
          z: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        <div className="aspect-[16/9] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-6 line-clamp-2">{description}</p>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {techIcons.map((tech, index) => (
                <div
                  key={index}
                  className="tech-icon"
                  style={{ backgroundColor: tech.color || "rgba(10, 12, 22, 0.8)" }}
                >
                  <img src={tech.icon || "/placeholder.svg"} alt={tech.alt} />
                </div>
              ))}
            </div>

            <a href={link} className="check-it-out" target="_blank" rel="noopener noreferrer">
              <span>Check It Out</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-30 pointer-events-none"
          />
        )}

        {isHovered && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full border border-primary/30">
            Click Here!
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

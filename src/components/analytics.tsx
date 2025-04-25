"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Analytics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <button
        className="bg-secondary/80 backdrop-blur-sm text-xs rounded-full px-3 py-1.5 flex items-center space-x-1 hover:bg-secondary transition-colors duration-300"
        onClick={() => window.open("https://github.com/muhammadsaad", "_blank")}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-muted-foreground">Available for work</span>
      </button>
    </motion.div>
  )
}

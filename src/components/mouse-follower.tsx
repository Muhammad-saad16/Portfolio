"use client"

import { useEffect, useState } from "react"

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isGrowing, setIsGrowing] = useState(false)

  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.classList.add("mouse-follower")
    document.body.appendChild(cursor)

    const links = document.querySelectorAll("a, button")

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const growCursor = () => {
      setIsGrowing(true)
      cursor.classList.add("grow")
    }

    const shrinkCursor = () => {
      setIsGrowing(false)
      cursor.classList.remove("grow")
    }

    window.addEventListener("mousemove", moveCursor)
    links.forEach((link) => {
      link.addEventListener("mouseenter", growCursor)
      link.addEventListener("mouseleave", shrinkCursor)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      links.forEach((link) => {
        link.removeEventListener("mouseenter", growCursor)
        link.removeEventListener("mouseleave", shrinkCursor)
      })
      document.body.removeChild(cursor)
    }
  }, [])

  return null
}

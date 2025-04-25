import type { ReactNode } from "react"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export interface Skill {
  name: string
  level: string
  icon: ReactNode
}

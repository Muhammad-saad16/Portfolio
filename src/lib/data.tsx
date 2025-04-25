import { Code, Database, FileCode, Globe, Layout, Palette, Server, Smartphone } from 'lucide-react'
import type { Project, Skill } from "./types"

export const skills: Skill[] = [
  {
    name: "React",
    level: "Expert",
    icon: <FileCode className="h-6 w-6" />,
  },
  {
    name: "Next.js",
    level: "Expert",
    icon: <Server className="h-6 w-6" />,
  },
  {
    name: "TypeScript",
    level: "Advanced",
    icon: <Code className="h-6 w-6" />,
  },
  {
    name: "JavaScript",
    level: "Expert",
    icon: <Code className="h-6 w-6" />,
  },
  {
    name: "HTML/CSS",
    level: "Expert",
    icon: <Layout className="h-6 w-6" />,
  },
  {
    name: "Tailwind CSS",
    level: "Expert",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    name: "Responsive Design",
    level: "Expert",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    name: "SQL/NoSQL",
    level: "Intermediate",
    icon: <Database className="h-6 w-6" />,
  },
  {
    name: "Vue.js",
    level: "Intermediate",
    icon: <FileCode className="h-6 w-6" />,
  },
  {
    name: "GraphQL",
    level: "Intermediate",
    icon: <Database className="h-6 w-6" />,
  },
  {
    name: "Web Performance",
    level: "Advanced",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    name: "UI/UX Design",
    level: "Intermediate",
    icon: <Palette className="h-6 w-6" />,
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "E-Commerce",
    featured: true,
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "A modern social media platform with real-time messaging, post sharing, and user interactions.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web Apps",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web Apps",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A beautiful weather application with 7-day forecasts, location-based weather, and interactive maps.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Redux", "OpenWeather API", "Mapbox"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web Apps",
    featured: false,
  },
]
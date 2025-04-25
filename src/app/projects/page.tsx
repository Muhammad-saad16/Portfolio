"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../../components/ui/button"
import { TextReveal } from "../../components/ui/text-reveal"
import { ProjectCard } from "../../components/ui/project-card"

const categories = ["All", "Websites", "E-Commerce" ]

// Tech stack icons
const techIcons = {
  react: "/images/tech/react.svg",
  node: "/images/tech/node.svg",
  js: "/images/tech/javascript.svg",
  ts: "/images/tech/typescript.svg",
  mongo: "/images/tech/mongodb.svg",
  unity: "/images/tech/unity.svg",
  csharp: "/images/tech/csharp.svg",
  python: "/images/tech/python.svg",
  matlab: "/images/tech/matlab.svg",
  firebase: "/images/tech/firebase.svg",
  nextjs: "/images/tech/nextjs.svg",
}

const projects = [
  
  {
    title: "A Scholar Website",
    description:
      "An educational platform designed for students and researchers, offering tools, resources, and interactive features to support academic growth and scholarly collaboration.",
    image: "/umair.png",
    category: "Websites",
    techIcons: [
      { icon: techIcons.js, alt: "Matlab", color: "#2D3034" },
      { icon: techIcons.nextjs, alt: "Python", color: "#2D3034" },
    ],
    link: "https://drumairsiddiqui.com/",
  },
  {
    title: "City of Knowledge Islamic Research Centre",
    description:
      "A dynamic website built for an Islamic research centre, offering access to religious articles, research papers, event details, and educational resources to promote Islamic knowledge and community engagement.",
    image: "/cok.png?height=400&width=600",
    category: "Websites",
    techIcons: [
      { icon: techIcons.react, alt: "React Native", color: "#2D3034" },
      { icon: techIcons.js, alt: "JavaScript", color: "#2D3034" },
      { icon: techIcons.node, alt: "Node.js", color: "#2D3034" },
      { icon: techIcons.mongo, alt: "MongoDB", color: "#2D3034" },
    ],
    link: "https://cokiri.net/",
  },
  {
    title: "Job Interview Application",
    description:
      "A web application designed to help candidates prepare for job interviews by offering mock interview simulations, question banks, performance tracking, and personalized feedback.",
    image: "/Interview.png?height=400&width=600",
    category: "Websites",
    techIcons: [
      { icon: techIcons.react, alt: "React", color: "#2D3034" },
      { icon: techIcons.ts, alt: "TypeScript", color: "#2D3034" },
      { icon: techIcons.python, alt: "Python", color: "#2D3034" },
      { icon: techIcons.firebase, alt: "Firebase", color: "#2D3034" },
    ],
    link: "https://job-interview-application.vercel.app/",
  },
  {
    title: "E-Commerce Camera Website",
    description:
      "A feature-rich e-commerce platform dedicated to selling cameras and photography gear, offering a seamless shopping experience, detailed product displays, and secure checkout for photography enthusiasts and professionals.",
    image: "/E-comerce.png?height=400&width=600", 
    category: "E-Commerce",
    techIcons: [
      { icon: techIcons.nextjs, alt: "Next.js", color: "#2D3034" },
      { icon: techIcons.ts, alt: "TypeScript", color: "#2D3034" },
      { icon: techIcons.mongo, alt: "MongoDB", color: "#2D3034" },
    ],
    link: "https://hashmicameras.pk/",
  },
  
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="pt-20 relative">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">
            A small selection of recent projects
          </h1>
          <TextReveal
            text="Explore my portfolio of web applications, mobile apps, and UI/UX designs"
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`${activeCategory === category ? "bg-primary/20 text-primary border-primary" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              techIcons={project.techIcons}
              link={project.link}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-gradient">Want to see more?</h2>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/Muhammad-saad16" target="_blank" rel="noopener noreferrer">
              <Button className="group">View All Projects</Button>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

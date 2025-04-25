"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Laptop, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/ui/text-reveal"
import { Spotlight } from "@/components/ui/spotlight"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const skills = [
    {
      title: "Frontend Development",
      description:
        "Expert in React, Next.js, and modern JavaScript frameworks with a focus on performance and accessibility.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with attention to detail and user experience principles.",
      icon: <Laptop className="h-5 w-5" />,
    },
    {
      title: "Backend Integration",
      description: "Seamless integration with various backend technologies and APIs for full-stack applications.",
      icon: <Server className="h-5 w-5" />,
    },
  ]

  return (
    <main className="relative">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="container relative z-10 mt-20">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-sm md:text-base uppercase tracking-wider text-muted-foreground">
                WELCOME TO MY PORTFOLIO!
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Driven by </span>
              <span className="text-gradient-purple glow-text">Hard Work,</span>
              <br />
              <span className="text-gradient-purple glow-text">Dedication, Passion &</span>
              <br />
              <span className="text-gradient-purple glow-text">Creativity</span>
            </motion.h1>

            <TextReveal
              text="Hello! I'm Muhammad Saad, a Senior Frontend Developer specializing in creating modern, responsive web experiences."
              className="text-xl md:text-2xl mb-10 max-w-3xl text-muted-foreground"
              delay={0.4}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/projects">
                <Button className="button-glow group bg-primary/20 border border-primary/50 hover:bg-primary/30 text-foreground">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Career Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Spotlight className="card-hover-effect p-8 h-full">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-gradient">I started my career as a freelance developer</h2>
                <p className="text-muted-foreground mb-6">
                  Delivering high-quality solutions to clients worldwide, I've built a reputation for creating
                  exceptional web experiences that combine aesthetics with functionality.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
                  <img
                    src="/laptop-web.webp?height=400&width=600"
                    alt="Laptop showing website"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30" />
                </div>
                <Link href="/about">
                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Spotlight>

            <Spotlight className="card-hover-effect p-8 h-full">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 text-gradient">I've collaborated with clients worldwide</h2>
                <p className="text-muted-foreground mb-6">
                  Working with businesses across various industries, I've helped transform ideas into reality through
                  innovative web solutions and cutting-edge technologies.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {["Brand 1", "Brand 2", "Brand 3", "Brand 4"].map((brand, index) => (
                    <div
                      key={brand}
                      className="flex items-center justify-center h-16 bg-secondary/50 rounded-lg border border-border"
                    >
                      <span className="text-sm font-medium text-muted-foreground">{brand}</span>
                    </div>
                  ))}
                </div>
                <Link href="/testimonials">
                  <Button variant="outline" className="group">
                    View Testimonials
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Spotlight>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">My tech stack</h2>
            <p className="section-subheading">
              I constantly try to improve my skills and stay up-to-date with the latest technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "GraphQL", "Framer Motion"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-card flex items-center justify-center h-24"
                >
                  <span className="text-lg font-medium">{tech}</span>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-heading">I'm passionate about data and web development</h2>
              <p className="text-muted-foreground mb-6">
                With a strong foundation in frontend technologies and a keen eye for design, I create web experiences
                that are not only visually appealing but also highly functional and user-friendly.
              </p>
              <p className="text-muted-foreground mb-8">
                My approach combines technical expertise with creative problem-solving to deliver solutions that exceed
                expectations and drive business growth.
              </p>
              <Link href="/about">
                <Button className="button-glow group">
                  More About Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm p-1">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/Muhammad-Saad.jpg?height=600&width=600"
                    alt="Muhammad Saad"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 -z-10 w-full h-full bg-gradient-to-br from-primary to-purple-500/40 rounded-2xl blur-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 -z-10 w-full h-full bg-gradient-to-tr from-primary to-purple-500/40 rounded-2xl blur-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <Spotlight className="max-w-3xl mx-auto card-hover-effect p-8 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Do you want to start a project together?</h2>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <Link href="/contact">
                <Button className="button-glow group">
                  Get My Email
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Spotlight>
        </div>
      </section>

      {/* Skills Cards */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">What I Do</h2>
            <p className="section-subheading">Specialized services I offer to help bring your digital vision to life</p>
          </div>

          <CardHoverEffect items={skills} />
        </div>
      </section>
    </main>
  )
}

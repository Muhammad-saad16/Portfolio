"use client"

import { motion } from "framer-motion"
import { FileCode, Laptop, Lightbulb, Rocket, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Spotlight } from "../../components/ui/spotlight"
import { TextReveal } from "../../components/ui/text-reveal"

export default function AboutPage() {
  return (
    <main className="pt-20 relative">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">About Me</h1>

          <div className="space-y-8">
            <Spotlight className="card-hover-effect p-8">
              <TextReveal
                text="I'm Muhammad Saad, a Senior Frontend Developer with over 5 years of experience crafting exceptional digital experiences. My journey in web development began with a fascination for creating interactive interfaces that not only look stunning but also provide seamless user experiences."
                className="text-lg mb-4"
              />
              <TextReveal
                text="I specialize in modern JavaScript frameworks and libraries, with a particular focus on React, Next.js, and the broader frontend ecosystem. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations."
                className="text-lg"
                delay={0.2}
              />
            </Spotlight>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gradient">My Philosophy</h2>
              <Spotlight className="card-hover-effect p-8">
                <p className="text-lg mb-4">
                  I believe that great frontend development is about more than just writing code—it's about creating
                  experiences that resonate with users. Every project I undertake is guided by three core principles:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <div className="p-2 rounded-lg bg-primary/10 mr-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Innovation</h3>
                      <p className="text-muted-foreground">
                        Pushing boundaries to find creative solutions to complex problems, always staying ahead of the
                        curve with emerging technologies and trends.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 rounded-lg bg-primary/10 mr-4">
                      <Laptop className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Craftsmanship</h3>
                      <p className="text-muted-foreground">
                        Writing clean, maintainable code that stands the test of time, with attention to detail that
                        ensures quality at every level.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-2 rounded-lg bg-primary/10 mr-4">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Performance</h3>
                      <p className="text-muted-foreground">
                        Optimizing for speed and efficiency without compromising on quality, ensuring smooth user
                        experiences across all devices.
                      </p>
                    </div>
                  </li>
                </ul>
              </Spotlight>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gradient">Technical Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Spotlight className="card-hover-effect p-8 h-full">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 mr-3">
                      <FileCode className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium">Frontend Development</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      React & Next.js
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      TypeScript & JavaScript
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      CSS, Tailwind, Styled Components
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Responsive & Adaptive Design
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Animation & Micro-interactions
                    </li>
                  </ul>
                </Spotlight>

                <Spotlight className="card-hover-effect p-8 h-full">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 mr-3">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium">Backend Integration</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      RESTful APIs
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      GraphQL
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Authentication Systems
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Serverless Functions
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      Database Integration
                    </li>
                  </ul>
                </Spotlight>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gradient">Education & Certifications</h2>
              <Spotlight className="card-hover-effect p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-medium">Intermidiate in Humities</h3>
                  <p className="text-muted-foreground">Government College, 2015-2019</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Advanced React & Next.js Certification</h3>
                  <p className="text-muted-foreground">Frontend Masters, 2021</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">UI/UX Design Fundamentals</h3>
                  <p className="text-muted-foreground">Interaction Design Foundation, 2020</p>
                </div>
              </Spotlight>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center gap-4 pt-6"
            >
              <Link href="/experience">
                <Button className="button-glow group">
                  View My Experience
                  <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="group">
                  Get In Touch
                  <Laptop className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

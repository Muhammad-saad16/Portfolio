"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { TextReveal } from "@/components/ui/text-reveal"
import { Spotlight } from "@/components/ui/spotlight"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
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
            Impressed by the projects and skills showcased here?
          </h1>
          <TextReveal
            text="Let's connect and discuss how I can contribute to your team."
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Spotlight className="card-hover-effect p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:contact@muhammadsaad.dev"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      saadfreelancer16@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +92 333 2858292
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Federal B Area, Karachi</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-medium mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Muhammad-saad16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary/50 p-3 rounded-full hover:bg-secondary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="www.linkedin.com/in/muhammad-saad-raza-6aa58b2b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary/50 p-3 rounded-full hover:bg-secondary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  
                </div>
              </div>
            </Spotlight>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Spotlight className="card-hover-effect p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Let's get in touch</h2>
              <ContactForm />
            </Spotlight>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

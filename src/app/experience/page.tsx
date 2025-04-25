"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"
import { TextReveal } from "../../components/ui/text-reveal"
import { Spotlight } from "../../components/ui/spotlight"

// const hackathons = [
//   {
//     title: "Hermes CyberSecurity Hackathon",
//     description:
//       "Developed a Tower Defense Game using Unity and C# for the Hermes CyberSecurity Hackathon. The game was designed to educate users on the importance of cybersecurity and the various ways to protect their data.",
//     icon: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     title: 'IT Creativity Contest "Severin Bumbaru" - Web Design',
//     description:
//       "Participated in three editions of the contest, winning a place on the podium each time. I developed various websites based on the contest theme.",
//     icon: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     title: "ACIEE - HACKATHON",
//     description:
//       "Managed the group, taking on the role of group leader, and successfully coordinated the development of a complex Matlab project using image processing technologies.",
//     icon: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     title: "CloudFlight Contest",
//     description:
//       "Participated in two editions of the contest, completing the tasks in the shortest time possible and gaining valuable experience.",
//     icon: "/placeholder.svg?height=100&width=100",
//   },
// ]

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Technova",
    period: "2024 - Present",
    description: [
      "Led the development of the company's flagship product, resulting in a 40% increase in user engagement",
      "Architected and implemented a component library used across multiple projects",
      "Mentored junior developers and conducted code reviews to ensure high-quality standards",
      "Collaborated with design and product teams to create intuitive user interfaces",
    ],
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "City Of Knowledge ISlamic Research Centre",
    period: "2023 - Present",
    description: [
      "Developed and maintained multiple client websites and web applications",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Optimized application performance and loading times",
      "Integrated third-party APIs and services",
    ],
    technologies: ["React", "JavaScript", "Next.js", "REST APIs"],
    type: "work",
  },
  {
    title: "Junior Frontend Developer",
    company: "Web & Media Agency",
    period: "2022 - 2023",
    description: [
      "Completed comprehensive training in user interface and experience design principles",
      "Created wireframes, prototypes, and user flows for various applications",
      "Conducted user research and usability testing",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
    type: "education",
  },
]

export default function ExperiencePage() {
  return (
    <main className="pt-20 relative">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-text">Experience & Education</h1>
          <TextReveal
            text="My professional journey and educational background"
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[42px] p-2 rounded-full bg-background border-2 border-primary/30">
                  {experience.type === "work" ? (
                    <Briefcase className="h-5 w-5 text-primary" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-primary" />
                  )}
                </div>

                <Spotlight className="experience-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-primary">{experience.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-0">{experience.period}</p>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Spotlight>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center text-gradient">Hackathons & Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Spotlight className="card-hover-effect p-6 h-full">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                      <img
                        src={hackathon.icon || "/placeholder.svg"}
                        alt={hackathon.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{hackathon.title}</h3>
                      <p className="text-muted-foreground text-sm">{hackathon.description}</p>
                    </div>
                  </div>
                </Spotlight>
              </motion.div>
            ))}
          </div>
        </div> */}
      </section>
    </main>
  )
}

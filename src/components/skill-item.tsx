"use client"

import { motion } from "framer-motion"
import type { Skill } from "@/lib/types"

interface SkillItemProps {
  skill: Skill
  index: number
}

export default function SkillItem({ skill, index }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center"
    >
      <div className="w-12 h-12 flex items-center justify-center mb-4 bg-primary/10 rounded-lg text-primary">
        {skill.icon}
      </div>
      <h3 className="font-medium mb-1">{skill.name}</h3>
      <p className="text-sm text-muted-foreground">{skill.level}</p>
    </motion.div>
  )
}

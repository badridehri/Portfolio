"use client"

import { motion } from "framer-motion"
import SkillBar from "./skill-bar"

export default function Skills() {
  const skills = [
    { name: "HTML5", percentage: 99 },
    { name: "CSS3", percentage: 99 },
    { name: "JavaScript", percentage: 92 },
    { name: "React", percentage: 90 },
    { name: "Vue.js", percentage: 90 },
    { name: "Node.js", percentage: 90 },
    { name: "Django", percentage: 85 },
    { name: "Firebase", percentage: 95 },
    { name: "Python", percentage: 90 },
    { name: "Next.js", percentage: 75 },
    { name: "Git", percentage: 90 },
    { name: "GitHub", percentage: 95 },
    { name: "Vercel", percentage: 90 },
    { name: "Linux", percentage: 82 },
    { name: "MongoDB", percentage: 85 },
    { name: "MySQL", percentage: 80 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-[#1e1e1e]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-[#15803D]">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#15803D] to-[#22c55e]"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillBar skill={skill.name} percentage={skill.percentage} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

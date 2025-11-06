"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const icons: Record<string, string> = {
  HTML5: "/html5.png",
  CSS3: "css.png", // ✅ corrigé ici
  JavaScript: "/js.png",
  React: "/react.png",
  "Vue.js": "/vuejs.png",
  "Node.js": "/nodejs.png",
  Django: "/django.png",
  Firebase: "/firebase.png",
  Python: "/python.png",
  "Next.js": "/nextjs.png",
  Git: "/git.png",
  GitHub: "/github.png",
  Vercel: "/vercel.png",
  Linux: "/linux.png",
  MongoDB: "/mongodb.png",
  MySQL: "/mysql.png",
}

interface SkillBarProps {
  skill: string
  percentage: number
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="mb-6"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {/* ✅ Remplacement par image */}
          {icons[skill] ? (
            <Image
              src={icons[skill]}
              alt={skill}
              width={28}
              height={28}
              className="object-contain"
            />
          ) : (
            <span>💻</span>
          )}
          <span className="text-lg font-semibold text-gray-100">{skill}</span>
        </div>

        <motion.span
          className="text-[#15803D] font-bold"
          animate={{ scale: isHovered ? 1.2 : 1 }}
        >
          {percentage}%
        </motion.span>
      </div>

      <div className="w-full h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#15803D] to-[#22c55e]"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="group bg-[#1e1e1e] rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#15803D]/50 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-[#2a2a2a]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-[#15803D]/20 text-[#15803D] rounded-full border border-[#15803D]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-2 px-4 bg-gradient-to-r from-[#15803D] to-[#22c55e] text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-[#15803D]/50 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Voir plus
        </motion.a>
      </div>
    </motion.div>
  )
}

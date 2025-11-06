"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const roles = ["Je suis Badri", "Développeur Web", "Développeur App", "Designer"]

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timer = setTimeout(() => {
        setDisplayedRole((prev) => prev + roles[roleIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setDisplayedRole("")
        setCharIndex(0)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [charIndex, roleIndex])

  // 🔗 scroll fluide vers une section spécifique
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image / Côté gauche */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg bg-[#0a0a0a]">
              <Image
                src="/professional-developer-portrait.png"
                alt="Logo de Badri"
                width={256}
                height={256}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Texte / Côté droit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="min-h-24">
              <div className="text-2xl md:text-4xl font-bold text-gray-300 mb-8">
                <span className="text-[#15803D]">{displayedRole}</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>

            <motion.p
              className="text-gray-400 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Je crée des expériences web modernes, performantes et innovantes. Passionné par le code, le design et
              l'UX, je transforme des idées en solutions digitales exceptionnelles.
            </motion.p>

            {/* Boutons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => scrollToSection("projects")} // 👈 section projets
                className="px-8 py-3 bg-[#15803D] text-white rounded-lg hover:bg-[#15803D]/80 transition-colors font-semibold"
              >
                Voir mon travail
              </button>

              <button
                onClick={() => scrollToSection("contact")} // 👈 section contact
                className="px-8 py-3 border border-[#15803D] text-[#15803D] rounded-lg hover:bg-[#15803D]/10 transition-colors font-semibold"
              >
                Me contacter
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

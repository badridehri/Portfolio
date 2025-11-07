"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/dist/client/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#2a2a2a]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" passHref>
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-[#15803D] to-[#22c55e] bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Badridev
        </motion.div>
      </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-[#15803D] transition-colors"
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#1e1e1e] border-t border-[#2a2a2a] px-4 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-300 hover:text-[#15803D] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

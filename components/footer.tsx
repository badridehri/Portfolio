"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "/github.png", // place ton image ici
      url: "https://github.com/badridehri",
    },
    {
      name: "Instagram",
      icon: "/instagram.png",
      url: "https://www.instagram.com/badriidev/",
    },
    {
      name: "Email",
      icon: "/gmail.png",
      url: "mailto:badridehrigo@gmail.com",
    },
  ]

  return (
    <motion.footer
      className="bg-[#0a0a0a] border-t border-[#15803D]/40 py-10 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <motion.div
            className="text-center md:text-left text-[#F0FDF4]/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm">© 2025 Badri | Tous droits réservés</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                <div className="absolute inset-0 rounded-full blur-lg bg-[#15803D]/40 opacity-0 group-hover:opacity-100 transition-all"></div>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 h-8 relative z-10 object-contain"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-2 border border-[#15803D] text-[#F0FDF4] rounded-lg hover:bg-[#15803D]/20 transition-all font-semibold text-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Haut de page
          </motion.button>
        </div>
      </div>
    </motion.footer>
  )
}

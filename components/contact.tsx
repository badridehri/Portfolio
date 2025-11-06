"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("https://formspree.io/f/mnnoezvk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        alert("Erreur lors de l’envoi du message.")
      }
    } catch (err) {
      console.error(err)
      alert("Impossible d’envoyer le message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#1e1e1e]/50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#15803D]">Contactez</span>-moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#15803D] to-[#22c55e]"></div>
        </motion.div>

        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div whileHover={{ y: -2 }}>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#15803D] transition-colors"
              placeholder="Votre nom"
            />
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#15803D] transition-colors"
              placeholder="votre@email.com"
            />
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#15803D] transition-colors resize-none"
              placeholder="Votre message..."
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-gradient-to-r from-[#15803D] to-[#22c55e] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#15803D]/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            {loading ? "Envoi..." : "Envoyer"}
          </motion.button>

          {submitted && (
            <motion.div
              className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Message envoyé avec succès !
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

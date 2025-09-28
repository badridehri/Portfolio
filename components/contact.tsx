"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  // Remplace l'URL ci-dessous par l'endpoint que tu obtiens sur Formspree
  const FORMSPREE_URL = "https://formspree.io/f/mldpgoal"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus("Message envoyé avec succès !")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("Une erreur est survenue. Réessayez.")
      }
    } catch (error) {
      setStatus("Erreur de connexion. Réessayez.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-primary">Contactez-moi</h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 font-serif text-foreground">Parlons de votre projet</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Je suis toujours intéressé par de nouveaux défis et opportunités. N'hésitez pas à me contacter pour
                discuter de votre projet ou simplement pour échanger sur les technologies web.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg border-2 border-transparent hover:border-primary/50 hover:shadow-lg hover:-translate-x-2 transition-all duration-300 cursor-pointer group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-muted-foreground">badri.dehrigo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border-2 border-transparent hover:border-primary/50 hover:shadow-lg hover:-translate-x-2 transition-all duration-300 cursor-pointer group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    Téléphone
                  </h4>
                  <p className="text-muted-foreground">+213 5 58 64 69 92</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border-2 border-transparent hover:border-primary/50 hover:shadow-lg hover:-translate-x-2 transition-all duration-300 cursor-pointer group">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    Localisation
                  </h4>
                  <p className="text-muted-foreground">Algérie, Alger</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-card-foreground font-serif">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-200"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>

                {status && <p className="text-center mt-2 text-sm">{status}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

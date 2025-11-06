"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Montre de Luxe – Boutique Élegante & Moderne",
      description: "Montre de Luxe est une plateforme e-commerce raffinée dédiée aux montres haut de gamme. Le site offre une expérience utilisateur fluide, moderne et immersive, permettant de découvrir et admirer chaque modèle avec des visuels de haute qualité. Conçu avec React et Tailwind CSS, il allie performance, design responsive et navigation intuitive.",
      image: "/modern-ecommerce-interface.png",
      tags: ["Html", "TailwindCss", "JavaScript" ,"FireBase"],
      link: "https://montre-de-luxe.vercel.app/ ",
    },
    {
      id: 2,
      title: "TLB Express – Site de Promotion et Présentation Produits",
      description: "TLB Express est notre site web dédié à la promotion et à la publicité de nos produits. Il permet de découvrir facilement notre gamme complète, de rester informé des nouveautés et offres spéciales, et de mettre en avant notre savoir-faire auprès de nos clients et partenaires.²",
      image: "/task-management-kanban.png",
      tags: ["Html", "Css", "JavaScript", "EmailJS"],
      link: "https://tlb-express-france.fr/",
    },
    {
      id: 3,
      title: "Nad's Press",
      description: "Site vitrine moderne et élégant pour un salon d’onglerie, présentant les services (manucure, pédicure, nail art), une galerie photo, les tarifs et un formulaire de réservation en ligne.",
      image: "/blog-cms-admin-dashboard.png",
      tags: ["Html", "TailwindCss", "EmailJS"],
      link: "https://nad-s-press-8cqn.vercel.app/",
    },
    {
      id: 4,
      title: "Brioch Art – Site Vitrine Artistique & Élégant",
      description: "Brioch Art est un site vitrine moderne réalisé en HTML, CSS, Tailwind et JavaScript. Il met en valeur les créations artisanales et artistiques de la marque avec une présentation soignée, des animations douces et une interface responsive. Le site permet de découvrir les œuvres, la galerie et les informations de contact dans une ambiance visuelle raffinée.",
      image: "/project4.png",
      tags: ["Html", "TailwindCss", "JavaScript"],
      link: "https://brioch-art1.vercel.app/",
    },
    {
      id: 5,
      title: "Showroom Voiture – Galerie Interactive de Véhicules",
      description: "Showroom Voiture est un site vitrine dynamique dédié à la présentation de modèles automobiles. Développé en HTML, CSS (Tailwind) et JavaScript, il met en avant les véhicules avec une interface fluide et responsive, privilégiant l’expérience visuelle et l’engagement utilisateur.",
      image: "/api-docs-social-interface.png",
      tags: ["React", "D3.js", "Node.js"],
      link: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Site portfolio personnel avec animations fluides et transitions élégantes, mettant en avant les projets, compétences et expériences professionnelles de manière interactive et visuellement attrayante.",
      image: "/E86729D2-7D35-4EFC-AC5F-108190FE64AB.png",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      link: "#",
    },
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-[#15803D]">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#15803D] to-[#22c55e]"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Plateforme E-commerce Complète & Moderne",
    description:
      "Cette plateforme e-commerce offre une expérience utilisateur fluide et efficace. Interface utilisateur moderne et responsive : développée avec React et stylisée avec Tailwind CSS pour un design épuré et ergonomique.",

    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js","Tailwind CSS"],
    liveUrl: "https://e-commercesite-zeta.vercel.app/",
    githubUrl: "https://e-commercesite-zeta.vercel.app/",
  },
  {
    title: "TLB Express – Site de Promotion et Présentation Produits",
  description:
  "TLB Express est notre site web dédié à la promotion et à la publicité de nos produits. Il permet de découvrir facilement notre gamme complète, de rester informé des nouveautés et offres spéciales, et de mettre en avant notre savoir-faire auprès de nos clients et partenaires.",
   image: "/task-management-kanban.png",
   technologies: ["Html", "Css", "Javascript", "Node.js"],
   liveUrl: "https://tlb-express-france.fr/",
   githubUrl: "https://tlb-express-france.fr/",


  },
{
  title: "Nad's Press",
  description:
    "Site vitrine moderne et élégant pour un salon d’onglerie, présentant les services (manucure, pédicure, nail art), une galerie photo, les tarifs et un formulaire de réservation en ligne.",
  image: "/blog-cms-admin-dashboard.png",
  technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "EmailJS"],
  liveUrl: "https://nad-s-press-8cqn.vercel.app",
  githubUrl: "https://github.com/tonprofil/nail-studio",
},
{
  title: "Snake Game",
  description:
    "Jeu Snake classique revisité pour le web, avec contrôles fluides, score en temps réel et design responsive.",
  image: "/preview/project4.png",
  technologies: ["HTML", "CSS", "JavaScript"],
  liveUrl: "https://snake-game-dun-five.vercel.app",
  githubUrl: "https://github.com/example/snake-game",
},
{
  title: "Calculatrice",
  description:
    "Application web de calculatrice simple et responsive, prenant en charge les opérations de base avec une interface moderne et intuitive.",
  image: "/api-docs-social-interface.png",
  technologies: ["HTML", "CSS", "JavaScript"],
  liveUrl: "https://calculatrice-theta.vercel.app",
  githubUrl: "https://github.com/example/calculatrice",
},

{
  title: "To-Do List",
  description:
    "Application web de gestion des tâches avec ajout, suppression et validation des tâches. Design moderne, responsive et simple à utiliser.",
  image: "/portfolio-generator-interface.png",
  technologies: ["HTML", "CSS", "JavaScript"],
  liveUrl: "https://todolist-tau-navy.vercel.app",
  githubUrl: "https://github.com/example/todolist",
},

]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-primary">Mes Projets</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-border hover:border-primary/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-card-foreground font-serif group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    asChild
                    className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

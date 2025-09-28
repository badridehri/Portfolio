import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const skills = [
  {
    category: "Front-end",
    technologies: [
      { name: "HTML5", level: 99, icon: "/logos/html5.png" },
      { name: "CSS3", level: 99, icon: "/logos/css.png" },
      { name: "JavaScript", level: 92, icon: "/logos/js.png" },
      { name: "React", level: 90, icon: "/logos/react.png" },
      { name: "Vue.js", level: 85, icon: "/logos/vuejs.png" },
      { name: "Next.JS", level: 75, icon: "/logos/nextjs.png" },
    ],
  },
  {
    category: "Back-end",
    technologies: [
      { name: "Node.js", level: 90, icon: "/logos/nodejs.png" },
      { name: "Django", level: 85, icon: "/logos/django.png" },
      { name: "Firebase", level: 95, icon: "/logos/firebase.png" },
      { name: "Python", level: 90, icon: "/logos/python.png" },
    ],
  },
  {
    category: "Base de données",
    technologies: [
      { name: "MongoDB", level: 85, icon: "/logos/mongodb.png" },
      { name: "Firebase Firestore", level: 95, icon: "/logos/firebase.png" },
      { name: "MySQL", level: 80, icon: "/logos/mysql.png" },
    ],
  },
  {
    category: "Outils & DevOps",
    technologies: [
      { name: "Git", level: 90, icon: "/logos/git.png" },
      { name: "GitHub", level: 95, icon: "/logos/github.png" },
      { name: "Vercel", level: 90, icon: "/logos/vercel.png" },
      { name: "Linux", level: 82, icon: "/logos/linux.png" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-primary">
          Mes Compétences
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-card-foreground font-serif group-hover:text-primary transition-colors duration-300">
                  {skillCategory.category}
                </h3>

                <div className="space-y-4">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm font-medium">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                          {tech.name}
                        </span>
                        <span className="text-xs text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out group-hover:bg-accent"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

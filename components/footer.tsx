import { Github, Instagram, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">BadriDev</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Développeur full-stack passionné par la création d'applications web modernes et performantes.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/badridehri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/badriidev/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:badri.dehrigo@gmail.com"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Fait avec <Heart className="h-4 w-4 text-red-400" /> par un développeur passionné
          </p>
          <p className="text-primary-foreground/60 text-sm mt-2">
            &copy; {new Date().getFullYear()} Badridev. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

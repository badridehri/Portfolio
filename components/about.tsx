export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-primary">À propos de moi</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/developer-computer-setup.png"
                alt="Développeur au travail"
                className="rounded-lg shadow-lg w-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Développeur full-stack passionné avec plus de 2 ans d'expérience dans la création d'applications web
                modernes et performantes. Je maîtrise l'ensemble de la chaîne de développement, du front-end au
                back-end.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon expertise couvre les technologies JavaScript modernes comme React et Node.js, ainsi que Python avec
                Django. J'aime créer des interfaces utilisateur intuitives et des architectures back-end robustes.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-card p-4 rounded-lg border-2 border-transparent hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    Front-end
                  </h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, Vue.js</p>
                </div>
                <div className="bg-card p-4 rounded-lg border-2 border-transparent hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    Back-end
                  </h3>
                  <p className="text-sm text-muted-foreground">Node.js, Django, Firebase</p>
                </div>
                <div className="bg-card p-4 rounded-lg border-2 border-transparent hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    Base de données
                  </h3>
                  <p className="text-sm text-muted-foreground">MySQL, MongoDB</p>
                </div>
                <div className="bg-card p-4 rounded-lg border-2 border-transparent hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    DevOps
                  </h3>
                  <p className="text-sm text-muted-foreground">Linux, Git, Vercel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

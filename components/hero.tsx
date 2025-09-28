"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Instagram, Mail } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Suspense } from "react"
import Image from "next/image"

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#10b981"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
      />
    </Sphere>
  )
}

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 pt-20 relative overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80 z-0"></div>

      {/* Canvas 3D */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: "transparent" }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.6}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up backdrop-blur-sm bg-background/20 rounded-3xl p-8 border border-white/10 shadow-xl">
          {/* Avatar */}
          <div className="mb-8">
            <Image
              src="/professional-developer-portrait.png"
              alt="Photo de profil"
              width={128}
              height={128}
              priority
              className="rounded-full mx-auto mb-6 shadow-lg animate-float border-4 border-primary/30"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            <span className="text-foreground">Développeur</span>
            <br />
            <span className="text-primary">Full-Stack</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Passionné par la création d&apos;applications web modernes avec React, Node.js, Django et les
            dernières technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Voir mes projets
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Me contacter
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              aria-label="GitHub"
              href="https://github.com/badridehri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/badriidev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              aria-label="Email"
              href="mailto:badri.dehrigo@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll down arrow */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}

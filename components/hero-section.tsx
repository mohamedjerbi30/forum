"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const carouselTexts = ["Forum ENIT Entreprise", "Connectez-vous avec les leaders", "Découvrez les opportunités"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % carouselTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden video-overlay">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Carousel Text */}
          <h1 className="carousel-text text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">
            {carouselTexts[currentText]}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty">
            Soyez les bienvenus le 20 novembre à l&apos;ENIT
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 h-auto">
            <Link href="/inscription">S&apos;inscrire</Link>
          </Button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

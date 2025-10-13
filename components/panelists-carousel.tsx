"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PanelistsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const panelists = [
    {
      name: "Dr. Ahmed Ben Salem",
      position: "Directeur Général - TechCorp Tunisia",
      image: "/business-executive-portrait.png",
    },
    {
      name: "Mme. Leila Mansour",
      position: "DRH - Innovation Industries",
      image: "/professional-business-woman-portrait.png",
    },
    {
      name: "M. Karim Trabelsi",
      position: "CEO - StartUp Hub",
      image: "/professional-entrepreneur-portrait.png",
    },
    {
      name: "Dr. Sonia Gharbi",
      position: "Directrice Innovation - Global Tech",
      image: "/professional-tech-leader.png",
    },
    {
      name: "M. Youssef Amri",
      position: "Directeur Technique - Digital Solutions",
      image: "/tech-executive-portrait.png",
    },
    {
      name: "Mme. Nadia Khelifi",
      position: "Responsable Marketing - Future Corp",
      image: "/marketing-executive-portrait.png",
    },
  ]

  // Fonctions de navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % panelists.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + panelists.length) % panelists.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 4000) // Change every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="py-16 md:py-24 overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-primary">Nos Panélistes</h2>
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto text-pretty">
            Rencontrez les leaders qui partageront leur expertise et leur vision
          </p>
        </div>

        {/* Modern 3D Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* 3D Carousel */}
          <div className="relative w-full h-full flex items-center justify-center">
            {panelists.map((panelist, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + panelists.length) % panelists.length
              const isNext = index === (currentIndex + 1) % panelists.length
              const isSecondPrev = index === (currentIndex - 2 + panelists.length) % panelists.length
              const isSecondNext = index === (currentIndex + 2) % panelists.length
              
              let transform = 'translateX(1000px) rotateY(90deg) scale(0.7)'
              let zIndex = 0
              let opacity = 0
              
              if (isActive) {
                transform = 'translateX(0) rotateY(0deg) scale(1)'
                zIndex = 10
                opacity = 1
              } else if (isPrev) {
                transform = 'translateX(-120px) rotateY(45deg) scale(0.85)'
                zIndex = 5
                opacity = 0.8
              } else if (isNext) {
                transform = 'translateX(120px) rotateY(-45deg) scale(0.85)'
                zIndex = 5
                opacity = 0.8
              } else if (isSecondPrev) {
                transform = 'translateX(-220px) rotateY(60deg) scale(0.7)'
                zIndex = 2
                opacity = 0.5
              } else if (isSecondNext) {
                transform = 'translateX(220px) rotateY(-60deg) scale(0.7)'
                zIndex = 2
                opacity = 0.5
              }
              
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => goToSlide(index)}
                >
                  {/* Card with 3D Effect */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl w-72 h-96 relative group">
                    {/* Image */}
                    <div className="h-3/4 relative overflow-hidden">
                      <img
                        src={panelist.image || "/placeholder.svg"}
                        alt={panelist.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="h-1/4 p-4 relative bg-white">
                      <h3 className="font-bold text-lg text-primary leading-tight mb-1 line-clamp-2">{panelist.name}</h3>
                      <p className="text-sm text-primary/70 leading-tight line-clamp-2">{panelist.position}</p>
                    </div>
                    
                    {/* 3D Shadow/Reflection */}
                    <div 
                      className="absolute -bottom-2 left-2 right-2 h-4 bg-black/10 rounded-xl blur-sm"
                      style={{ transform: 'scaleX(0.9)' }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {panelists.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

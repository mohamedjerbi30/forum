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
      color: "#FCCD11"
    },
    {
      name: "Mme. Leila Mansour",
      position: "DRH - Innovation Industries",
      image: "/professional-business-woman-portrait.png",
      color: "#00ADB5"
    },
    {
      name: "M. Karim Trabelsi",
      position: "CEO - StartUp Hub",
      image: "/professional-entrepreneur-portrait.png",
      color: "#FCCD11"
    },
    {
      name: "Dr. Sonia Gharbi",
      position: "Directrice Innovation - Global Tech",
      image: "/professional-tech-leader.png",
      color: "#00ADB5"
    },
    {
      name: "M. Youssef Amri",
      position: "Directeur Technique - Digital Solutions",
      image: "/tech-executive-portrait.png",
      color: "#FCCD11"
    },
    {
      name: "Mme. Nadia Khelifi",
      position: "Responsable Marketing - Future Corp",
      image: "/marketing-executive-portrait.png",
      color: "#00ADB5"
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
    <section className="py-16 md:py-24 overflow-hidden" style={{ perspective: '1500px' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">
            Nos <span className="text-[#FCCD11]">Panélistes</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Rencontrez les leaders qui partageront leur expertise et leur vision
          </p>
        </div>

        {/* Modern 3D Carousel Container */}
        <div 
          className="relative max-w-7xl mx-auto h-[550px] flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 w-14 h-14 bg-[#FCCD11] hover:bg-[#FCCD11]/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 w-14 h-14 bg-[#00ADB5] hover:bg-[#00ADB5]/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>

          {/* 3D Carousel */}
          <div className="relative w-full h-full flex items-center justify-center">
            {panelists.map((panelist, index) => {
              const isActive = index === currentIndex
              const isPrev = index === (currentIndex - 1 + panelists.length) % panelists.length
              const isNext = index === (currentIndex + 1) % panelists.length
              const isSecondPrev = index === (currentIndex - 2 + panelists.length) % panelists.length
              const isSecondNext = index === (currentIndex + 2) % panelists.length
              
              let transform = 'translateX(1000px) rotateY(90deg) scale(0.65)'
              let zIndex = 0
              let opacity = 0
              
              if (isActive) {
                transform = 'translateX(0) rotateY(0deg) scale(1.1)'
                zIndex = 10
                opacity = 1
              } else if (isPrev) {
                transform = 'translateX(-200px) rotateY(40deg) scale(0.85)'
                zIndex = 5
                opacity = 0.7
              } else if (isNext) {
                transform = 'translateX(200px) rotateY(-40deg) scale(0.85)'
                zIndex = 5
                opacity = 0.7
              } else if (isSecondPrev) {
                transform = 'translateX(-350px) rotateY(55deg) scale(0.65)'
                zIndex = 2
                opacity = 0.4
              } else if (isSecondNext) {
                transform = 'translateX(350px) rotateY(-55deg) scale(0.65)'
                zIndex = 2
                opacity = 0.4
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
                  <div 
                    className="bg-white rounded-2xl overflow-hidden shadow-2xl w-80 h-[450px] relative group border-4"
                    style={{ borderColor: panelist.color }}
                  >
                    {/* Image */}
                    <div className="h-3/4 relative overflow-hidden">
                      <img
                        src={panelist.image || "/placeholder.svg"}
                        alt={panelist.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient Overlay with brand color */}
                      <div 
                        className="absolute inset-0 opacity-30"
                        style={{ 
                          background: `linear-gradient(to top, ${panelist.color}, transparent)` 
                        }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="h-1/4 p-5 relative bg-white">
                      <h3 
                        className="font-bold text-xl leading-tight mb-1 line-clamp-2"
                        style={{ color: panelist.color }}
                      >
                        {panelist.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-tight line-clamp-2">{panelist.position}</p>
                    </div>
                    
                    {/* 3D Shadow/Reflection with brand color */}
                    <div 
                      className="absolute -bottom-3 left-3 right-3 h-5 rounded-xl blur-md"
                      style={{ 
                        backgroundColor: panelist.color,
                        opacity: 0.2,
                        transform: 'scaleX(0.9)' 
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {panelists.map((panelist, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-10'
                  : 'w-2 opacity-50 hover:opacity-80'
              }`}
              style={{ 
                backgroundColor: index === currentIndex ? panelist.color : '#ffffff'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
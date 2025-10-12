"use client"

import { useState, useEffect, useRef } from "react"

export function PanelistsCarousel() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

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

  const duplicatedPanelists = [...panelists, ...panelists, ...panelists]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let isAutoScrolling = true
    let animationId: number
    const speed = isHovered ? 0.3 : 0.8
    
    const autoScroll = () => {
      if (isAutoScrolling && scrollContainer) {
        scrollContainer.scrollLeft += speed
        
        // Reset à la fin
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(autoScroll)
    }
    
    // Démarrer l'auto-scroll
    animationId = requestAnimationFrame(autoScroll)
    
    // Pause l'auto-scroll quand l'utilisateur interagit
    let pauseTimeout: NodeJS.Timeout
    const handleUserInteraction = () => {
      isAutoScrolling = false
      clearTimeout(pauseTimeout)
      pauseTimeout = setTimeout(() => {
        isAutoScrolling = true
      }, 2000) // Reprend après 2 secondes
    }
    
    // Écouter les interactions utilisateur
    scrollContainer.addEventListener('touchstart', handleUserInteraction)
    scrollContainer.addEventListener('mousedown', handleUserInteraction)
    scrollContainer.addEventListener('wheel', handleUserInteraction)
    
    return () => {
      cancelAnimationFrame(animationId)
      clearTimeout(pauseTimeout)
      scrollContainer.removeEventListener('touchstart', handleUserInteraction)
      scrollContainer.removeEventListener('mousedown', handleUserInteraction) 
      scrollContainer.removeEventListener('wheel', handleUserInteraction)
    }
  }, [isHovered])

  return (
    <section className="py-16 md:py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">Nos Panélistes</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Rencontrez les leaders qui partageront leur expertise et leur vision
          </p>
        </div>

        {/* Container moderne avec effets */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Bouton gauche */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40">
            <button
              className="group/left w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              onClick={() => {
                const container = scrollRef.current
                if (container) {
                  container.scrollBy({ left: -300, behavior: 'smooth' })
                }
              }}
            >
              <div className="opacity-0 group-hover/left:opacity-100 transition-all duration-300 bg-white/25 hover:bg-white/35 rounded-full p-2.5 backdrop-blur-sm shadow-xl">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
          </div>
          
          {/* Bouton droite */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-40">
            <button
              className="group/right w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              onClick={() => {
                const container = scrollRef.current
                if (container) {
                  container.scrollBy({ left: 300, behavior: 'smooth' })
                }
              }}
            >
              <div className="opacity-0 group-hover/right:opacity-100 transition-all duration-300 bg-white/25 hover:bg-white/35 rounded-full p-2.5 backdrop-blur-sm shadow-xl">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
          
          {/* Overlay dégradé gauche - plus subtil */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10 pointer-events-none" />
          
          {/* Overlay dégradé droite - plus subtil */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary via-primary/90 to-transparent z-10 pointer-events-none" />
          
          {/* Container de scroll moderne */}
          <div 
            ref={scrollRef} 
            className="flex gap-6 pb-8 px-2 overflow-x-auto scroll-smooth"
            style={{ 
              maskImage: "linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 60px, black calc(100% - 60px), transparent 100%)",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {duplicatedPanelists.map((panelist, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
                    <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                      <img
                        src={panelist.image || "/placeholder.svg"}
                        alt={panelist.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                        <h3 className="font-bold text-2xl mb-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{panelist.name}</h3>
                        <p className="text-secondary font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{panelist.position}</p>
                      </div>
                    </div>
                  </div>

                  {/* Reflection effect */}
                  <div
                    className="absolute -bottom-6 left-0 right-0 h-24 rounded-2xl opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-60"
                    style={{
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
                      transform: "scaleY(-1)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicateur subtil de scroll (optionnel - peut être enlevé) */}
        <div className="flex justify-center mt-6">
          <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white/60 rounded-full animate-pulse" style={{
              width: isHovered ? '30%' : '100%',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>
    </section>
  )
}

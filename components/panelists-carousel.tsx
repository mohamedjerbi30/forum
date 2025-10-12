"use client"

import { useState, useEffect, useRef } from "react"

export function PanelistsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
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

  const duplicatedPanelists = [...panelists, ...panelists]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    let scrollAmount = 0
    const scrollSpeed = 1 // pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollAmount += scrollSpeed
        scrollContainer.scrollLeft = scrollAmount

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
          scrollContainer.scrollLeft = 0
        }
      }
      requestAnimationFrame(scroll)
    }

    const animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section className="py-16 md:py-24 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">Nos Panélistes</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Rencontrez les leaders qui partageront leur expertise et leur vision
          </p>
        </div>

        <div ref={scrollRef} className="flex gap-8 overflow-x-hidden pb-8" style={{ scrollBehavior: "auto" }}>
          {duplicatedPanelists.map((panelist, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 group cursor-pointer"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                  <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                    <img
                      src={panelist.image || "/placeholder.svg"}
                      alt={panelist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="font-bold text-2xl mb-2 text-white">{panelist.name}</h3>
                      <p className="text-secondary font-semibold text-lg">{panelist.position}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 left-0 right-0 h-24 rounded-2xl opacity-40 blur-xl"
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
    </section>
  )
}

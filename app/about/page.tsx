"use client"

import { useState } from "react"
import { ForumInfoSection } from "@/components/forum-info-section"
import { Clock } from "lucide-react"
import { PlasmaBackgroundCSS } from "@/components/plasma-background"
import { ServicesScrollStack } from "@/components/services-scroll-stack"
import WhoWeAreSection from "@/components/who-we-are-section"
import { OurAxesSection } from "@/components/our-axes-section"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"exposants" | "panel" | "formations">("exposants")

  const panelists = [
    { name: "Dr. Ahmed Ben Salem", position: "CEO TechCorp", image: "/business-executive-portrait.png" },
    { name: "Mme. Leila Mansour", position: "Directrice Innovation", image: "/professional-business-woman-portrait.png" },
    { name: "M. Karim Trabelsi", position: "Expert Digital", image: "/professional-entrepreneur-portrait.png" },
  ]

  const formations = [
    { time: "09:00 - 10:30", title: "Leadership et Management", location: "Salle A" },
    { time: "11:00 - 12:30", title: "Innovation et Entrepreneuriat", location: "Salle B" },
    { time: "14:00 - 15:30", title: "Transformation Digitale", location: "Salle C" },
    { time: "16:00 - 17:30", title: "Soft Skills pour Ingénieurs", location: "Salle D" },
  ]

  return (
    <div
      className="min-h-screen pt-28" // <-- espace ajouté sous la navbar
      style={{
        backgroundImage:
          "linear-gradient(180deg, #4F6B82 0%, #3F576A 40%, #2D4455 100%)", // <-- même dégradé, plus clair
      }}
    >
      <ForumInfoSection />

      <section className="py-16 md:py-24 bg-white/10 backdrop-blur-sm rounded-2xl mx-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {["exposants", "panel", "formations"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-secondary text-primary shadow-lg"
                      : "bg-card border border-border hover:shadow-md"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Contenu */}
            <div className="bg-card/80 border border-border rounded-2xl p-8 md:p-12 shadow-lg">
              {activeTab === "exposants" && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Plan des Exposants</h2>
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                    <img
                      src="/exhibition-floor-plan-layout-stands.jpg"
                      alt="Plan des exposants"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {activeTab === "panel" && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Panel Discussion</h2>
                  <div className="flex items-center gap-2 text-secondary mb-6">
                    <Clock size={20} />
                    <span className="font-semibold">14:00 - Amphithéâtre Principal</span>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-white">Panélistes</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {panelists.map((panelist, index) => (
                      <div key={index} className="text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-secondary">
                          <img
                            src={panelist.image || "/placeholder.svg"}
                            alt={panelist.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-lg text-white">{panelist.name}</h4>
                        <p className="text-white/70">{panelist.position}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "formations" && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-white">Planning des Formations</h2>
                  <div className="space-y-4">
                    {formations.map((formation, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white/10 rounded-xl border border-border text-white"
                      >
                        <div className="flex items-center gap-2 text-secondary font-semibold min-w-[140px]">
                          <Clock size={18} />
                          {formation.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{formation.title}</h3>
                          <p className="text-sm text-white/70">{formation.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Les autres sections */}
      <section className="snap-start h-screen flex items-center justify-center relative">
        <PlasmaBackgroundCSS variant="fluid" intensity={0.6} />
        <div className="w-full max-h-screen overflow-y-auto relative z-10">
          <OurAxesSection />
        </div>
      </section>

      <section className="snap-start h-screen flex items-center justify-center relative">
        <PlasmaBackgroundCSS variant="plasma" intensity={0.4} />
        <div className="w-full max-h-screen overflow-y-auto relative z-10">
          <ServicesScrollStack />
        </div>
      </section>

      <section className="snap-start h-screen flex items-center justify-center">
        <div className="w-full max-h-screen overflow-y-auto">
          <WhoWeAreSection />
        </div>
      </section>
    </div>
  )
}

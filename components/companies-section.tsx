"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function CompaniesSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const companies = [
    { name: "TechCorp Tunisia", sector: "Technologies de l'information", logo: "/tech-company-logo.jpg" },
    { name: "Innovation Industries", sector: "Industrie & Manufacturing", logo: "/industry-company-logo.jpg" },
    { name: "Global Tech", sector: "Intelligence Artificielle", logo: "/ai-company-logo.png" },
    { name: "StartUp Hub", sector: "Incubateur & Accélérateur", logo: "/startup-hub-logo.jpg" },
    { name: "Energy Solutions", sector: "Énergies Renouvelables", logo: "/energy-company-logo.jpg" },
    { name: "Digital Bank", sector: "Services Financiers", logo: "/abstract-bank-logo.png" },
    { name: "Pharma Plus", sector: "Pharmaceutique", logo: "/pharma-company-logo.png" },
    { name: "Auto Engineering", sector: "Automobile", logo: "/automotive-company-logo.png" },
  ]

  const displayedCompanies = isExpanded ? companies : companies.slice(0, 6)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Entreprises Présentes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez les entreprises qui participeront au forum
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displayedCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all group"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img src={company.logo || "/placeholder.svg"} alt={company.name} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-bold text-base mb-2">{company.name}</h3>
              <p className="text-xs text-muted-foreground">{company.sector}</p>
            </div>
          ))}
        </div>

        {companies.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {isExpanded ? "Voir moins" : "Voir plus d'entreprises"}
              <ChevronDown className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

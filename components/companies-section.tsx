"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { companiesData, type Company } from "@/lib/companies-data"
import { CompanyModal } from "@/components/company-modal"

export function CompaniesSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const displayedCompanies = isExpanded ? companiesData : companiesData.slice(0, 12)

  const handleCompanyClick = (company: Company) => {
    setSelectedCompany(company)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCompany(null)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-primary">Entreprises Présentes</h2>
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto text-pretty">
            Découvrez les entreprises qui participeront au forum
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {displayedCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition-all group cursor-pointer hover:scale-105"
              onClick={() => handleCompanyClick(company)}
            >
              <div className="w-20 h-20 rounded-lg bg-white border border-primary/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-sm">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <h3 className="font-semibold text-sm mb-1 line-clamp-2 text-primary">{company.name}</h3>
              <p className="text-xs text-primary/70 line-clamp-1">{company.sector}</p>
            </div>
          ))}
        </div>

        {companiesData.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {isExpanded ? "Voir moins" : `Voir tous les ${companiesData.length} exposants`}
              <ChevronDown className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} size={20} />
            </button>
          </div>
        )}
      </div>
      
      <CompanyModal 
        company={selectedCompany}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

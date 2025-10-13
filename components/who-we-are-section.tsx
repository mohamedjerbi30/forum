"use client"

import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"
import { useEffect, useState, useRef } from "react"
import { Sparkles, Users, Trophy, Target } from "lucide-react"

export function WhoWeAreSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentSection = sectionRef.current
    if (!currentSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, 200)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(currentSection)

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden relative">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/10 rotate-45 transform origin-center"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary/5 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-accent/20 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-primary/5 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform -translate-y-12'
          }`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Qui sommes-nous ?
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ENIT Junior
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Entreprise
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              La première Junior Entreprise en Tunisie, pionnier de l'innovation et de l'excellence académique
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story Section */}
            <div className={`transition-all duration-1200 ease-out delay-300 ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-8'
            }`}>
              <div className="relative">
                {/* Geometric accent */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg transform rotate-45"></div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-3 shadow-lg">
                        <Image
                          src="/img/img/Primary logo - Colored.png"
                          alt="ENIT Junior Entreprise Logo"
                          width={40}
                          height={30}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Notre Histoire</h3>
                      <p className="text-white/60">Depuis notre création</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-white/90 leading-relaxed">
                        <strong className="text-white">L'ENIT Junior Entreprise</strong> est la première Junior Entreprise en Tunisie, 
                        marquant une <strong className="text-secondary">valeur ajoutée</strong> significative dans 
                        l'<strong className="text-accent">écosystème entrepreneurial</strong> grâce à la diversité des compétences de nos étudiants.
                      </p>
                    </div>
                    
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-2 w-2 h-2 bg-secondary rounded-full"></div>
                      <p className="text-white/90 leading-relaxed">
                        Organisation à <strong className="text-white">but non lucratif</strong> à vocation 
                        <strong className="text-accent">pédagogique et économique</strong>, nous préparons nos étudiants à la 
                        <strong className="text-secondary">vie professionnelle</strong> dès le début de leurs études.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutions & Visual */}
            <div className={`transition-all duration-1200 ease-out delay-600 ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-8'
            }`}>
              <div className="relative">
                {/* Geometric accent */}
                <div className="absolute -top-4 -right-4 w-12 h-12 border-2 border-accent/30 rounded-full"></div>
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-2">Nos Institutions Partenaires</h4>
                  <p className="text-white/60">Excellence académique reconnue</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {/* UTM */}
                  <div className="group relative">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className="aspect-square bg-white rounded-2xl p-4 mb-4 shadow-lg">
                        <Image
                          src="/img/img/utm-header.png"
                          alt="Université de Tunis El Manar"
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <h5 className="font-bold text-white text-sm mb-1">UTM</h5>
                      <p className="text-white/60 text-xs">Université de Tunis El Manar</p>
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  {/* ENIT */}
                  <div className="group relative">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className="aspect-square bg-white rounded-2xl p-4 mb-4 shadow-lg">
                        <Image
                          src="/img/img/LOGO_ENIT_300 (1).png"
                          alt="École Nationale d'Ingénieurs de Tunis"
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <h5 className="font-bold text-white text-sm mb-1">ENIT</h5>
                      <p className="text-white/60 text-xs">École Nationale d'Ingénieurs</p>
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Cards - Modern Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, value: "1ère", label: "Junior Entreprise en Tunisie", color: "from-yellow-500 to-orange-500", delay: 900 },
              { icon: Target, value: 4, label: "Secteurs d'expertise", color: "from-blue-500 to-purple-500", delay: 1100 },
              { icon: Sparkles, value: 27, label: "Éditions du Forum", color: "from-green-500 to-teal-500", delay: 1300 },
              { icon: Users, value: 2000, suffix: "+", label: "Participants attendus", color: "from-pink-500 to-red-500", delay: 1500 }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: `${stat.delay}ms` }}
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Icon */}
                    <div className={`inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Value */}
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {typeof stat.value === 'number' ? (
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      ) : (
                        stat.value
                      )}
                    </div>
                    
                    {/* Label */}
                    <div className="text-white/70 text-sm font-medium">
                      {stat.label}
                    </div>
                    
                    {/* Geometric accent */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${stat.color} rounded-lg rotate-45 opacity-0 group-hover:opacity-70 transition-all duration-300`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
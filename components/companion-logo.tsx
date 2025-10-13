"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface CompanionLogoProps {
  className?: string
}

export function CompanionLogo({ className = "" }: CompanionLogoProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Positions du logo pour chaque section (en pourcentage)
  const logoPositions = [
    { top: "15%", right: "10%", rotate: 0 },      // Hero Section
    { top: "80%", left: "15%", rotate: 15 },      // Countdown Timer
    { top: "20%", left: "5%", rotate: -10 },      // Who We Are
    { top: "75%", right: "8%", rotate: 25 },      // Services
    { top: "25%", right: "12%", rotate: -15 },    // Our Axes
    { top: "70%", left: "10%", rotate: 20 },      // Forum Info
    { top: "30%", left: "8%", rotate: -5 },       // Reserve Stand
    { top: "85%", right: "15%", rotate: 10 },     // Panelists
    { top: "40%", right: "6%", rotate: -20 },     // Companies
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.snap-y.snap-mandatory')
      if (!scrollContainer) return

      const scrollTop = scrollContainer.scrollTop
      const containerHeight = scrollContainer.clientHeight
      const sectionIndex = Math.round(scrollTop / containerHeight)
      
      const clampedIndex = Math.max(0, Math.min(sectionIndex, logoPositions.length - 1))
      
      if (clampedIndex !== currentSection) {
        // Petit effet de fade pendant la transition
        setIsVisible(false)
        setTimeout(() => {
          setCurrentSection(clampedIndex)
          setIsVisible(true)
        }, 200)
      }
    }

    const scrollContainer = document.querySelector('.snap-y.snap-mandatory')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [currentSection, logoPositions.length])

  const currentPosition = logoPositions[currentSection]

  return (
    <div
      className={`fixed z-40 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-80 scale-100' : 'opacity-30 scale-95'
      } ${className}`}
      style={{
        top: currentPosition.top,
        left: currentPosition.left,
        right: currentPosition.right,
        transform: `rotate(${currentPosition.rotate}deg) ${!isVisible ? 'scale(0.95)' : 'scale(1)'}`,
        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Container du logo avec design harmonisé homepage */}
      <div className="relative group cursor-pointer">
        {/* Effet de glow avec nuances de bleu transparent */}
        <div 
          className="absolute inset-0 rounded-lg blur-xl scale-110 group-hover:scale-125 transition-all duration-500" 
          style={{
            background: `linear-gradient(135deg, rgba(40, 56, 77, 0.3) 0%, rgba(40, 56, 77, 0.5) 50%, rgba(255, 205, 17, 0.2) 100%)`,
            opacity: '0.6'
          }}
        />
        
        {/* Container principal avec glassmorphism du site */}
        <div className="relative glass-effect rounded-lg p-3 group-hover:bg-white/5 transition-all duration-300" style={{
          backgroundColor: 'rgba(40, 56, 77, 0.2)',
          border: '1px solid rgba(40, 56, 77, 0.3)'
        }}>
          {/* Logo ENIT Junior Entreprise */}
          <Image
            src="/img/img/Primary logo - White.png"
            alt="ENIT Junior Entreprise"
            width={52}
            height={52}
            className="w-13 h-13 object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Indicateur de progression avec couleurs de marque */}
        <div 
          className="absolute -bottom-1 -right-1 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-xl"
          style={{
            background: `linear-gradient(135deg, rgba(40, 56, 77, 0.9) 0%, rgba(255, 205, 17, 0.8) 100%)`,
            fontFamily: 'var(--font-montserrat)'
          }}
        >
          <span className="text-[10px] text-white font-bold">{currentSection + 1}</span>
          <span className="text-[8px] text-white opacity-80">/9</span>
        </div>

        {/* Effet de halo au hover avec nuances de bleu */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {/* Particules bleues principales */}
          <div 
            className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full animate-pulse" 
            style={{ backgroundColor: 'rgba(40, 56, 77, 0.8)' }}
          />
          <div 
            className="absolute bottom-1 left-1 w-1 h-1 rounded-full animate-ping animation-delay-200" 
            style={{ backgroundColor: 'rgba(40, 56, 77, 0.6)' }}
          />
          
          {/* Particules jaune accent */}
          <div 
            className="absolute top-3 left-1 w-0.5 h-0.5 rounded-full animate-pulse animation-delay-400" 
            style={{ backgroundColor: 'rgba(255, 205, 17, 0.7)' }}
          />
          <div 
            className="absolute -top-2 left-1/2 w-0.5 h-0.5 rounded-full animate-bounce" 
            style={{ 
              backgroundColor: 'rgba(255, 205, 17, 0.6)',
              animationDelay: '0.3s' 
            }}
          />
          <div 
            className="absolute -right-2 top-1/2 w-0.5 h-0.5 rounded-full animate-bounce" 
            style={{ 
              backgroundColor: 'rgba(40, 56, 77, 0.7)',
              animationDelay: '0.6s' 
            }}
          />
          
          {/* Particules blanches subtiles */}
          <div className="absolute top-4 right-3 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  )
}
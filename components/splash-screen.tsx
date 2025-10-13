"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showWelcome, setShowWelcome] = useState(false)
  const [isCompleting, setIsCompleting] = useState(false)
  const [currentPhase, setCurrentPhase] = useState(0) // 0: loading, 1: preparing, 2: welcome

  useEffect(() => {
    // Phase 1: Initial loading (0-80%) - moderate pace
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 80 && currentPhase === 0) {
          // Pause at 80% for dramatic effect
          setCurrentPhase(1)
          setTimeout(() => {
            // Phase 2: Final loading (80-100%) - slower for drama
            const finalInterval = setInterval(() => {
              setProgress(prevProgress => {
                if (prevProgress >= 100) {
                  clearInterval(finalInterval)
                  setIsCompleting(true)
                  setCurrentPhase(2)
                  // Shorter pause before welcome
                  setTimeout(() => setShowWelcome(true), 500)
                  // Reduced welcome message duration
                  setTimeout(() => onComplete(), 4000)
                  return 100
                }
                return prevProgress + 0.5
              })
            }, 120)
          }, 800) // Shorter pause at 80%
          return prev
        }
        
        if (currentPhase === 0) {
          return prev + 1.2 // Faster initial progress
        }
        return prev
      })
    }, 80)

    return () => clearInterval(progressInterval)
  }, [onComplete, currentPhase])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Dramatic background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-primary opacity-90" />
      
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!showWelcome ? (
          <motion.div
            key="loading"
            className="text-center relative z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                FORUM
                <span className="block text-secondary mt-2">ENIT</span>
              </h1>
              <motion.div
                className="h-1 w-24 bg-secondary mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ 
                  width: 96,
                  opacity: currentPhase === 1 ? [1, 0.3, 1] : 1
                }}
                transition={{ 
                  width: { duration: 1, delay: 1 },
                  opacity: { duration: 0.8, repeat: currentPhase === 1 ? Infinity : 0 }
                }}
              />
              <p className="text-xl md:text-2xl font-medium text-white/70 tracking-wide">
                ENTREPRISE 2025
              </p>
              <p className="text-lg text-secondary/80 mt-4 font-medium">
                19 Novembre 2025
              </p>
            </motion.div>

            {/* Loading Progress */}
            {!isCompleting && (
              <motion.div
                className="w-full max-w-sm mx-auto px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <div className="mb-6">
                  <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="h-full bg-gradient-to-r from-secondary to-secondary/60 rounded-full shadow-lg shadow-secondary/20"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <motion.p
                  className="text-center text-white/50 text-sm tracking-widest uppercase font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {currentPhase === 0 && progress < 50 && "Initialisation..."}
                  {currentPhase === 0 && progress >= 50 && progress < 80 && "Préparation de l'expérience..."}
                  {currentPhase === 1 && "Finalisation..."}
                  {currentPhase === 2 && "Prêt!"}
                  {" "}{Math.round(progress)}%
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="welcome"
            className="text-center relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 tracking-wide">
                BIENVENUE
              </h2>
              <motion.div
                className="h-1 w-16 bg-secondary mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              
              <motion.div
                className="mt-8"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-2xl text-secondary">✦</div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
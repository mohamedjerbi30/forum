"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-11-19T09:00:00").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const TimerCircle = ({ value, label }: { value: number; label: string }) => {
    const circumference = 2 * Math.PI * 45
    const progress = (value / (label === "Jours" ? 365 : label === "Heures" ? 24 : 60)) * circumference

    return (
      <div className="flex flex-col items-center gap-2 ">
        <div className="timer-circle relative w-28 h-28 md:w-32 md:h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle cx="50" cy="50" r="45" className="stroke-[#00ADB5]" strokeWidth="3" />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-[#28384D]"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-bold text-[#28384D]">{value}</span>
          </div>
        </div>
        <span className="text-sm md:text-base font-medium ">{label}</span>
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-[#00ADB5]">
            Le compte à rebours a commencé
          </h2>
          <p className="text-lg md:text-xl text-[#F2F2F2] text-pretty">
            Ne manquez pas le plus grand événement de l&apos;année
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <TimerCircle value={timeLeft.days} label="Jours" />
          <TimerCircle value={timeLeft.hours} label="Heures" />
          <TimerCircle value={timeLeft.minutes} label="Minutes" />
          <TimerCircle value={timeLeft.seconds} label="Secondes" />
        </div>
      </div>
    </section>
  )
}

import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { ForumInfoSection } from "@/components/forum-info-section"
import WhoWeAreSection from "@/components/who-we-are-section"
import { ReserveStandSection } from "@/components/reserve-stand-section"
import { CompaniesSection } from "@/components/companies-section"
import { PanelistsCarousel } from "@/components/panelists-carousel"
import { ScrollDots } from "@/components/scroll-dots"
import { PlasmaBackgroundCSS } from "@/components/plasma-background"
import { CompaniesSectionCarousel } from "@/components/companies-section-carousel"

export default function HomePage() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen flex items-center justify-center">
          <div className="w-full max-h-screen overflow-hidden">
            <HeroSection />
          </div>
        </section>
        
        {/* Gradient going left to right */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <CountdownTimer />
          </div>
        </section>

        {/* Gradient going right to left (reversed) */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 scale-x-[-1]">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          </div>
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <ForumInfoSection />
          </div>
        </section>

        {/* WHO WE ARE - Gradient going left to right */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <WhoWeAreSection />
          </div>
        </section>
        
        {/* Gradient going right to left (reversed) */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 scale-x-[-1]">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          </div>
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <ReserveStandSection />
          </div>
        </section>
        
        {/* COMPANIES - Gradient going left to right */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <CompaniesSection />
          </div>
        </section>
        
        {/* PANELISTS - Gradient going right to left (reversed) */}
        <section className="snap-start h-screen flex items-center justify-center relative">
          <div className="absolute inset-0 scale-x-[-1]">
            <PlasmaBackgroundCSS variant="aurora" intensity={0.9} />
          </div>
          <div className="w-full max-h-screen overflow-hidden relative z-10">
            <PanelistsCarousel />
          </div>
        </section>
      </div>
      
      {/* Indicateurs de navigation */}
      <ScrollDots />
      <CompaniesSectionCarousel />
    </>
  )
}
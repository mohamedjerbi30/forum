import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { ServicesScrollStack } from "@/components/services-scroll-stack"
import { OurAxesSection } from "@/components/our-axes-section"
import { ForumInfoSection } from "@/components/forum-info-section"
import { ReserveStandSection } from "@/components/reserve-stand-section"
import { PanelistsCarousel } from "@/components/panelists-carousel"
import { CompaniesSection } from "@/components/companies-section"
import { ScrollDots } from "@/components/scroll-dots"
import { CompanionLogo } from "@/components/companion-logo"
import { PlasmaBackgroundCSS } from "@/components/plasma-background"

export default function HomePage() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen flex items-center justify-center">
          <div className="w-full max-h-screen overflow-hidden">
            <HeroSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="plasma" intensity={0.7} />
          <div className="w-full max-h-screen overflow-hidden flex items-center justify-center relative z-10">
            <CountdownTimer />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center">
          <div className="w-full max-h-screen overflow-y-auto">
            <WhoWeAreSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="plasma" intensity={0.4} />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <ServicesScrollStack />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="fluid" intensity={0.6} />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <OurAxesSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="fluid" intensity={0.6} />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <ForumInfoSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.7} />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <ReserveStandSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="aurora" intensity={0.9} />
          <div className="w-full max-h-screen overflow-hidden relative z-10">
            <PanelistsCarousel />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center relative">
          <PlasmaBackgroundCSS variant="plasma" intensity={0.5} />
          <div className="w-full max-h-screen overflow-y-auto relative z-10">
            <CompaniesSection />
          </div>
        </section>
      </div>
      
      {/* Logo compagnon qui accompagne l'utilisateur */}
      <CompanionLogo />
      
      {/* Indicateurs de navigation */}
      <ScrollDots />
    </>
  )
}

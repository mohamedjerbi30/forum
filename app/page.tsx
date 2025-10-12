import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { ServicesSection } from "@/components/services-section"
import { OurAxesSection } from "@/components/our-axes-section"
import { ForumInfoSection } from "@/components/forum-info-section"
import { ReserveStandSection } from "@/components/reserve-stand-section"
import { PanelistsCarousel } from "@/components/panelists-carousel"
import { CompaniesSection } from "@/components/companies-section"
import { ScrollDots } from "@/components/scroll-dots"

export default function HomePage() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen flex items-center justify-center">
          <div className="w-full max-h-screen overflow-hidden">
            <HeroSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center bg-muted">
          <div className="w-full max-h-screen overflow-hidden flex items-center justify-center">
            <CountdownTimer />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center">
          <div className="w-full max-h-screen overflow-y-auto">
            <WhoWeAreSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center bg-muted">
          <div className="w-full max-h-screen overflow-y-auto">
            <ServicesSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center">
          <div className="w-full max-h-screen overflow-y-auto">
            <OurAxesSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center bg-muted">
          <div className="w-full max-h-screen overflow-y-auto">
            <ForumInfoSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center">
          <div className="w-full max-h-screen overflow-y-auto">
            <ReserveStandSection />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center bg-muted">
          <div className="w-full max-h-screen overflow-hidden">
            <PanelistsCarousel />
          </div>
        </section>
        
        <section className="snap-start h-screen flex items-center justify-center">
          <div className="w-full max-h-screen overflow-y-auto">
            <CompaniesSection />
          </div>
        </section>
      </div>
      
      {/* Indicateurs de navigation */}
      <ScrollDots />
    </>
  )
}

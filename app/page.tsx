import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { ForumInfoSection } from "@/components/forum-info-section"
import { ReserveStandSection } from "@/components/reserve-stand-section"
import { PanelistsCarousel } from "@/components/panelists-carousel"
import { CompaniesSection } from "@/components/companies-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CountdownTimer />
      <ForumInfoSection />
      <ReserveStandSection />
      <PanelistsCarousel />
      <CompaniesSection />
    </>
  )
}

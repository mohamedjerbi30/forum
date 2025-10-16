import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ReserveStandSection() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-white">
            <span className="text-[#00ADB5]">Réservez votre</span> <span className="text-[#FCCD11]">stand</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Choisissez l&apos;emplacement idéal pour votre entreprise et maximisez votre visibilité
          </p>
        </div>

        {/* Stand Plan Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-white border-2 border-[#FCCD11] shadow-xl shadow-[#FCCD11]/20">
            <img
              src="/plan-stands.png"
              alt="Plan des stands"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8 text-center">
            
            <Button
    asChild
    size="lg"
    className="rounded-full bg-[#FCCD11] hover:bg-[#FCCD11]/90 text-white text-lg font-bold py-6 px-8"
  >
    <Link href="/inscription">Réserver maintenant</Link>
  </Button>
          </div>
        </div>

        {/* Stand Types */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FCCD11] rounded-xl p-6 text-center hover:bg-[#FCCD11]/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-[#FCCD11] mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#FCCD11]">Pack Bronze</h3>
            <p className="text-white text-sm">Hall Indus</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border-2 border-[#00ADB5] rounded-xl p-6 text-center hover:bg-[#00ADB5]/3 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-[#00ADB5] mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#00ADB5]">Pack Silver</h3>
            <p className="text-white text-sm">Hall Indus</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border-2 border-[#FCCD11] rounded-xl p-6 text-center hover:bg-[#FCCD11]/10 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-[#FCCD11]  mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <h3 className="font-bold text-xl mb-2 bg-[#FCCD11]  bg-clip-text text-transparent">Pack Gold</h3>
            <p className="text-white text-sm">Hall Principale</p>
          </div>
        </div>
      </div>
    </section>
  )
}
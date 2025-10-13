import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ReserveStandSection() {
  return (
    <section className="py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-balance text-primary">Réservez votre stand</h2>
          <p className="text-sm md:text-base text-primary/80 max-w-xl mx-auto text-pretty">
            Choisissez l&apos;emplacement idéal pour votre entreprise
          </p>
        </div>

        {/* Layout: Types de stands à gauche, Image à droite */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Types de stands - À gauche */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4 text-primary">Types de stands disponibles</h3>
              
              {/* Stand Standard */}
              <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-primary mb-1">Stand Standard</h4>
                <p className="text-xl font-bold text-secondary">9m²</p>
              </div>
              
              {/* Stand Premium */}
              <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-primary mb-1">Stand Premium</h4>
                <p className="text-xl font-bold text-secondary">12m²</p>
              </div>
              
              {/* Stand VIP */}
              <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg text-primary mb-1">Stand VIP</h4>
                <p className="text-xl font-bold text-secondary">18m²</p>
              </div>
              
              {/* Bouton de réservation */}
              <div className="pt-4">
                <Button asChild size="lg" className="rounded-full w-full">
                  <Link href="/inscription">Réserver maintenant</Link>
                </Button>
              </div>
            </div>
            
            {/* Image du plan - À droite */}
            <div className="">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm border border-primary/20 shadow-lg">
                <img 
                  src="/exhibition-floor-plan-layout-stands.jpg" 
                  alt="Plan des stands" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-center text-sm text-primary/70 mt-3">
                Plan de l&apos;espace d&apos;exposition
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

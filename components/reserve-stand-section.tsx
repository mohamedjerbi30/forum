import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ReserveStandSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Réservez votre stand</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choisissez l&apos;emplacement idéal pour votre entreprise et maximisez votre visibilité
          </p>
        </div>

        {/* Stand Plan Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-card border-2 border-border shadow-xl">
            <img src="/exhibition-floor-plan-layout-stands.jpg" alt="Plan des stands" className="w-full h-full object-cover" />
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/inscription">Réserver maintenant</Link>
            </Button>
          </div>
        </div>

        {/* Stand Types */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Stand Standard</h3>
            <p className="text-muted-foreground text-sm">9m² - Emplacement standard</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Stand Premium</h3>
            <p className="text-muted-foreground text-sm">12m² - Emplacement privilégié</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl mb-2">Stand VIP</h3>
            <p className="text-muted-foreground text-sm">18m² - Emplacement premium</p>
          </div>
        </div>
      </div>
    </section>
  )
}

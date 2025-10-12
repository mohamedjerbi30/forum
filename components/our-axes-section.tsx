import Image from "next/image"

export function OurAxesSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance">
              Nos axes
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Les piliers stratégiques de l'ENIT Junior Entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Axe Formation */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/axes/formation.png"
                  alt="Formation"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Axe Formation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Formation et développement des compétences techniques et professionnelles des étudiants ingénieurs.
              </p>
            </div>
            
            {/* Axe Projet */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/axes/projet.png"
                  alt="Projet"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Axe Projet</h3>
              <p className="text-muted-foreground leading-relaxed">
                Réalisation de prestations de services et projets pour les entreprises et organismes partenaires.
              </p>
            </div>
            
            {/* Axe Événement */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mb-6 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/img/axes/event.png"
                  alt="Événement"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Axe Événement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organisation d'événements et contribution au développement de l'écosystème entrepreneurial tunisien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

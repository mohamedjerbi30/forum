import Image from "next/image"
import { AnimatedCounter } from "@/components/animated-counter"

export function WhoWeAreSection() {
  return (
    <section className="py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-balance">
              Qui sommes-nous ?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto text-pretty">
              Découvrez l'ENIT Junior Entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 items-center mb-4">
            {/* Content Side */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white border border-border rounded-lg p-2 shadow-sm">
                  <Image
                    src="/img/img/Primary logo - Colored.png"
                    alt="ENIT Junior Entreprise Logo"
                    width={60}
                    height={45}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">ENIT Junior Entreprise</h3>
              </div>
              
              <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Depuis la fondation de <strong>l'ENIT Junior Entreprise</strong>, la première Junior Entreprise en Tunisie, 
                  les élèves de l'<strong>ENIT</strong> ont marqué une certaine <strong>valeur ajoutée</strong> auprès de 
                  l'<strong>écosystème entrepreneurial</strong> vu la diversité de leurs compétences.
                </p>
                <p>
                  <strong>L'ENIT Junior Entreprise</strong> est un organisme à but <strong>non lucratif</strong>. 
                  C'est une association à <strong>vocation pédagogique et économique</strong>, 
                  incitant les étudiants à la <strong>vie professionnelle</strong> dès l'aube de leurs études.
                </p>
              </div>
            </div>
            
            {/* Logos Side */}
            <div className="space-y-4">
              {/* Institution Logos */}
              <div className="text-center">
                <h4 className="text-lg font-bold mb-3 text-foreground">Nos Institutions</h4>
                <div className="grid grid-cols-2 gap-4">
                  {/* UTM Logo */}
                  <div className="bg-card border border-border rounded-lg p-3 hover:shadow-lg transition-shadow">
                    <Image
                      src="/img/img/utm-header.png"
                      alt="Université de Tunis El Manar"
                      width={100}
                      height={80}
                      className="object-contain mx-auto mb-2"
                    />
                    <p className="text-xs font-medium text-muted-foreground">Université de Tunis El Manar</p>
                  </div>
                  
                  {/* ENIT Logo */}
                  <div className="bg-card border border-border rounded-lg p-3 hover:shadow-lg transition-shadow">
                    <Image
                      src="/img/img/LOGO_ENIT_300 (1).png"
                      alt="École Nationale d'Ingénieurs de Tunis"
                      width={80}
                      height={80}
                      className="object-contain mx-auto mb-2"
                    />
                    <p className="text-xs font-medium text-muted-foreground">École Nationale d'Ingénieurs de Tunis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-card border border-border rounded-lg p-3 text-center hover:shadow-lg transition-shadow">
              <div className="text-xl md:text-2xl font-bold text-foreground mb-1">1ère</div>
              <div className="text-xs text-muted-foreground">Junior Entreprise en Tunisie</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-3 text-center hover:shadow-lg transition-shadow">
              <div className="text-xl md:text-2xl font-bold text-foreground mb-1">
                <AnimatedCounter end={4} />
              </div>
              <div className="text-xs text-muted-foreground">Secteurs d'expertise</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-3 text-center hover:shadow-lg transition-shadow">
              <div className="text-xl md:text-2xl font-bold text-foreground mb-1">
                <AnimatedCounter end={27} />
              </div>
              <div className="text-xs text-muted-foreground">Éditions du Forum</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-3 text-center hover:shadow-lg transition-shadow">
              <div className="text-xl md:text-2xl font-bold text-foreground mb-1">
                <AnimatedCounter end={2000} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground">Participants attendus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
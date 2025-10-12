import { Users, Building2, Award, Calendar } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"

export function ForumInfoSection() {
  const stats = [
    { icon: Building2, value: 50, suffix: "+", label: "Entreprises" },
    { icon: Users, value: 2000, suffix: "+", label: "Participants" },
    { icon: Award, value: 15, suffix: "+", label: "Panélistes" },
    { icon: Calendar, value: 1, suffix: "", label: "Jour" },
  ]

  return (
    <section className="py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-balance">
              Qu&apos;est-ce que le Forum ENIT Entreprise ?
            </h2>
            <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Le Forum ENIT Entreprise est l&apos;événement annuel incontournable qui réunit les entreprises leaders
                et les futurs ingénieurs de l&apos;École Nationale d&apos;Ingénieurs de Tunis.
              </p>
              <p>
                C&apos;est une plateforme unique d&apos;échange, de networking et de recrutement qui permet aux
                entreprises de présenter leurs opportunités et aux étudiants de découvrir leur futur professionnel.
              </p>
              <p>
                Avec des conférences, des ateliers, des stands d&apos;exposition et des sessions de recrutement, le
                forum offre une expérience complète pour tous les participants.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              <img
                src="/business-forum-networking-event-professional.jpg"
                alt="Forum ENIT Entreprise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4 border-2 border-secondary/20">
                  <Icon size={28} strokeWidth={2.5} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

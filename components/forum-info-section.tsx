import { Users, Building2, Award, Calendar } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"

export function ForumInfoSection() {
  const stats = [
    { icon: Building2, value: 30, suffix: "+", label: "Entreprises", color: "#006b75" },
    { icon: Users, value: 2000, suffix: "+", label: "Participants", color: "#00ADB5" },
    { icon: Award, value: 8, suffix: "+", label: "Panélistes", color: "#006b75" },
    { icon: Calendar, value: 1, suffix: "", label: "Jour", color: "#00ADB5" },
  ]

  return (
    <section className="py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-bold mb-6">
            <div className="text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest">
               FORUM <span className="text-[#ffcd11]">ENIT</span>
             </div>
            <div className="text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest mt-2">
               ENTREPRISE
             </div>
            <div className="text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wider mt-2 pr-12 md:pr-25 flex items-baseline justify-end">
              <span className="text-[#ffcd11] text-xl md:text-2xl lg:text-3xl font-bold">27</span>
              <span className="text-white text-sm md:text-base lg:text-lg font-extralight relative top-[-0.3em] mx-1">ÈME</span>
             <span className="text-white text-lg md:text-xl lg:text-2xl font-extralight ml-2">ÉDITION</span>
            </div>
</h2>

            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Le Forum ENIT Entreprise est l&apos;événement annuel phare qui se tient au sein de l&apos;École Nationale d&apos;Ingénieurs de Tunis.
              </p>
              <p>
                Il réunit les entreprises leaders et les futurs ingénieurs autour d&apos;un espace d&apos;échange, de networking et de recrutement . 
              </p>
              
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#00ADB5] shadow-lg shadow-[#00ADB5]/20">
              <img
                src="/panel.jpg"
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
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-2"
                style={{ borderColor: stat.color }}
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 border-2"
                  style={{ 
                    backgroundColor: `${stat.color}20`,
                    borderColor: stat.color
                  }}
                >
                  <Icon size={28} strokeWidth={2.5} style={{ color: stat.color }} />
                </div>
                <div 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Forum ENIT Entreprise</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Le rendez-vous annuel qui connecte les entreprises et les talents de demain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/programme" className="text-background/80 hover:text-background transition-colors">
                  Programme
                </Link>
              </li>
              <li>
                <Link href="/exposants" className="text-background/80 hover:text-background transition-colors">
                  Exposants
                </Link>
              </li>
              <li>
                <Link href="/participants" className="text-background/80 hover:text-background transition-colors">
                  Participants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-background/80">ENIT, Tunis, Tunisie</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a
                  href="mailto:contact@forumenit.tn"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  contact@forumenit.tn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span className="text-background/80">+216 XX XXX XXX</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Forum ENIT Entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-8 mb-6">
            <Image
              src="/img/img/Primary logo - White.png"
              alt="ENIT Junior Entreprise"
              width={150}
              height={100}
              className="object-contain"
            />
            <Image
              src="/img/img/00adb5 on white.png"
              alt="Proficiency is our currency"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="text-lg font-semibold text-yellow-400 mb-2">ENIT Junior Entreprise</p>
          <p className="text-gray-300">La première Junior Entreprise en Tunisie</p>
        </div>
        
        <h3 className="text-2xl font-bold mb-6">Contactez-nous</h3>
        <p className="text-lg mb-4">
          <a href="mailto:contact@enitje.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            contact@enitje.com
          </a>
        </p>
        <p className="text-lg mb-8">Suivez-nous sur les réseaux sociaux</p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.facebook.com/juniorenit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-yellow-400 transition-colors"
          >
            📘 Facebook
          </a>
          <a 
            href="https://www.instagram.com/enit.juniorentreprise/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-yellow-400 transition-colors"
          >
            📷 Instagram
          </a>
          <a 
            href="https://www.linkedin.com/company/enitjuniorentreprise" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-yellow-400 transition-colors"
          >
            💼 LinkedIn
          </a>
        </div>
        
        <p className="mt-8 text-gray-400">&copy; {new Date().getFullYear()} ENIT Junior Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

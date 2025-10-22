"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@forumenit.tn",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+216 XX XXX XXX",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "École Nationale d'Ingénieurs de Tunis, BP 37, Le Belvédère 1002 Tunis, Tunisie",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
  }

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/Screenshot 2025-10-21 235702.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        
        {/* ESPACEMENT AJOUTÉ ICI - Espace avant le titre Contactez-nous */}
        <div className="mb-16"></div>
        
        {/* Titre et sous-titre */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6 text-white">
            <span style={{color: '#ffcd11'}}>Contactez</span>-nous
          </h1>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-yellow-400" style={{backgroundColor: '#ffcd11'}}></div>
          </div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Vous avez une question ? Une suggestion ? N'hésitez pas à nous contacter, notre équipe dévouée vous répondra dans les plus brefs délais.
          </p>
        </div>

        {/* Section Info Contact en haut */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                className="bg-slate-800/40 backdrop-blur border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Icon className="text-cyan-400" size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-white">{info.title}</h3>
                </div>
                <p className="text-gray-300 text-sm ml-16">{info.content}</p>
              </div>
            )
          })}
        </div>

        {/* Section principale */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Texte accroche gauche */}
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prenez contact avec nous
            </h2>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              Nous vous encourageons à partager vos questions, suggestions et préoccupations. Notre équipe dévouée est prête à vous assister et à fournir les informations dont vous avez besoin.
            </p>
            
            {/* Social Media - Positionné un peu plus haut comme demandé */}
            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4 text-white">Suivez-nous</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 transition-all duration-300 flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 transition-all duration-300 flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 transition-all duration-300 flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 transition-all duration-300 flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-slate-800/50 backdrop-blur border border-cyan-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-2 text-white">Envoyez-nous un message</h2>
            <p className="text-gray-400 mb-6">Remplissez le formulaire ci-dessous</p>
            
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-200 font-semibold text-sm">Prénom *</label>
                  <input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ahmed" 
                    required 
                    className="w-full px-4 py-2 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-200 font-semibold text-sm">Nom *</label>
                  <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Ben Salem" 
                    required 
                    className="w-full px-4 py-2 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-200 font-semibold text-sm">Email *</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="ahmed@example.com" 
                  required 
                  className="w-full px-4 py-2 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-200 font-semibold text-sm">Sujet *</label>
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Demande d'information" 
                  required 
                  className="w-full px-4 py-2 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-200 font-semibold text-sm">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..." 
                  rows={5} 
                  required 
                  className="w-full px-4 py-2 bg-slate-700/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none transition-all"
                />
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full py-3 rounded-full text-gray-900 font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{backgroundColor: '#ffcd11'}}
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
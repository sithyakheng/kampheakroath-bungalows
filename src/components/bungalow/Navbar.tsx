'use client'

import { useState, useEffect } from 'react'

const translations = {
  en: {
    nav: ["About", "Gallery", "Amenities", "Location", "Contact"],
    heroTitle: "Escape to Nature",
    heroSubtitle: "Bungalow resort in Kampot, Cambodia",
    heroBtn: "WhatsApp Us",
    aboutTitle: "About Us",
    aboutText: "A peaceful riverside retreat nestled in the lush greenery of Kampot. Kampheakroath Bungalows offers an authentic Cambodian natural experience with modern comforts.",
    rating: "Reviews",
    galleryTitle: "Photo Gallery",
    amenitiesTitle: "Amenities",
    locationTitle: "Location",
    address: "Unnamed Road, Traeuy Kaoh, Kampot, Cambodia",
    checkout: "Check-out time: 12:00 PM",
    contactTitle: "Contact Us",
    contactSubtitle: "We'd love to hear from you",
    whatsapp: "WhatsApp Us",
    facebook: "Facebook",
    telegram: "Telegram",
    footerText: "Kampot, Cambodia"
  },
  km: {
    nav: ["អំពីយើង", "រូបភាព", "សេវាកម្ម", "ទំនាក់ទំនង", "ទំនាក់ទំនង"],
    heroTitle: "គេចចេញពីធម្មជាតិ",
    heroSubtitle: "រមណីយដ្ឋានបឹងហ្គាឡូ នៅខេត្តកំពត ប្រទេសកម្ពុជា",
    heroBtn: "ទំនាក់ទំនងតាម WhatsApp",
    aboutTitle: "អំពីយើង",
    aboutText: "កន្លែងសម្រាកស្ងប់ស្ងាត់ក្បែរទន្លេ ដែលព័ទ្ធជុំវិញដោយព្រៃបៃតងនៅខេត្តកំពត ប្រទេសកម្ពុជា កុម្ភៈរ័ត្ន បឹងភាពស្រួលទំនើប។",
    rating: "មតិយោបល់",
    galleryTitle: "វិចិត្រសាលរូបភាព",
    amenitiesTitle: "សេវាកម្ម",
    locationTitle: "ទីតាំង",
    address: "ផ្លូវគ្មានឈ្មោះ ត្រែយកោ ខេត្តកំពត ប្រទេសកម្ពុជា",
    checkout: "ម៉ោងចេញ: ១២:០០ ថ្ងៃត្រង់",
    contactTitle: "ទំនាក់ទំនងយើង",
    contactSubtitle: "យើងរីករាយទទួលបានការទំនាក់ទំនងពីអ្នក",
    whatsapp: "ទំនាក់ទំនងតាម WhatsApp",
    facebook: "ហ្វេសប៊ុក",
    telegram: "តេឡេក្រាម",
    footerText: "ខេត្តកំពត ប្រទេសកម្ពុជា"
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState<'en' | 'km'>('en')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'km' : 'en')
  }

  const t = translations[language]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-green-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">
            Kampheakroath Bungalows
          </h1>
          
          <div className="hidden md:flex items-center space-x-8">
            {t.nav.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:bg-yellow-600 transition-colors duration-200 capitalize font-medium"
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
            >
              EN | ខ្មែរ
            </button>
          </div>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

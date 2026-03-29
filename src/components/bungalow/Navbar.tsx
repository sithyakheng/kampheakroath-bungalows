'use client'

import { useState, useEffect } from 'react'

const translations = {
  en: {
    nav: ["About", "Gallery", "Amenities", "Location", "Contact"],
    heroTitle: "Escape to Nature",
    heroSubtitle: "Bungalow resort in Kampot, Cambodia",
    heroBtn: "WhatsApp Us",
    aboutTitle: "About Kampheakroath Bungalows",
    aboutText: "A peaceful riverside retreat nestled in the lush greenery of Kampot. Kampheakroath Bungalows offers an authentic Cambodian natural experience with modern comforts.",
    rating: "86 Reviews (Google)",
    galleryTitle: "Photo Gallery",
    gallerySubtitle: "Discover the beauty of our riverside retreat",
    amenitiesTitle: "Amenities",
    amenitiesSubtitle: "Everything you need for a comfortable stay",
    wifi: "Free Wi-Fi",
    wifiDesc: "High-speed internet available throughout the property",
    parking: "Free Parking",
    parkingDesc: "Secure parking space for all our guests",
    pool: "Outdoor Pool",
    poolDesc: "Refreshing pool surrounded by tropical gardens",
    restaurant: "Restaurant on site",
    restaurantDesc: "Delicious local and international cuisine",
    laundry: "Laundry Service",
    laundryDesc: "Convenient laundry service available",
    breakfast: "Paid Breakfast",
    breakfastDesc: "Start your day with a delicious breakfast",
    locationTitle: "Location",
    locationSubtitle: "Find us in the heart of Kampot, Cambodia",
    address: "Unnamed Road, Traeuy Kaoh, Kampot, Cambodia",
    checkout: "12:00 PM",
    contactTitle: "Contact Us",
    contactSubtitle: "We would love to hear from you",
  },
  km: {
    nav: ["អំពីយើង", "រូបភាព", "សេវាកម្ម", "ទីតាំង", "ទំនាក់ទំនង"],
    heroTitle: "គេចចេញទៅរកធម្មជាតិ",
    heroSubtitle: "រមណីយដ្ឋានបឹងហ្គាឡូ នៅខេត្តកំពត ប្រទេសកម្ពុជា",
    heroBtn: "ទំនាក់ទំនងតាម WhatsApp",
    aboutTitle: "អំពីកុម្ភៈរ័ត្ន បឹងហ្គាឡូ",
    aboutText: "កន្លែងសម្រាកស្ងប់ស្ងាត់ក្បែរទន្លេ ដែលព័ទ្ធជុំវិញដោយព្រៃបៃតងនៅខេត្តកំពត។ កុម្ភៈរ័ត្ន បឹងហ្គាឡូ ផ្តល់នូវបទពិសោធន៍ធម្មជាតិខ្មែរពិតប្រាកដ ជាមួយនឹងភាពស្រួលទំនើប។",
    rating: "៨៦ មតិយោបល់ (Google)",
    galleryTitle: "វិចិត្រសាលរូបភាព",
    gallerySubtitle: "រកឃើញភាពស្រស់ស្អាតនៃរមណីយដ្ឋានក្បែរទន្លេរបស់យើង",
    amenitiesTitle: "សេវាកម្ម",
    amenitiesSubtitle: "អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវការសម្រាប់ការស្នាក់នៅស្រួល",
    wifi: "វ៉ាយហ្វាយឥតគិតថ្លៃ",
    wifiDesc: "អ៊ីនធឺណិតល្បឿនលឿនគ្រប់ទីកន្លែងក្នុងអចលនទ្រព្យ",
    parking: "ចំណតឥតគិតថ្លៃ",
    parkingDesc: "ចំណតមានសុវត្ថិភាពសម្រាប់ភ្ញៀវទាំងអស់",
    pool: "អាងហែលទឹកខាងក្រៅ",
    poolDesc: "អាងហែលទឹកស្រស់ស្រាយព័ទ្ធជុំវិញដោយសួនច្បារត្រូពិក",
    restaurant: "ភោជនីយដ្ឋាននៅក្នុងបរិវេណ",
    restaurantDesc: "អាហារក្នុងស្រុក និងអន្តរជាតិឆ្ងាញ់",
    laundry: "សេវាបោកគក់",
    laundryDesc: "សេវាបោកគក់ងាយស្រួល",
    breakfast: "អាហារពេលព្រឹក (មានថ្លៃ)",
    breakfastDesc: "ចាប់ផ្តើមថ្ងៃរបស់អ្នកជាមួយអាហារពេលព្រឹកឆ្ងាញ់",
    locationTitle: "ទីតាំង",
    locationSubtitle: "រកឃើញយើងនៅចំកណ្តាលខេត្តកំពត ប្រទេសកម្ពុជា",
    address: "ផ្លូវគ្មានឈ្មោះ ត្រែយកោ ខេត្តកំពត ប្រទេសកម្ពុជា",
    checkout: "១២:០០ ថ្ងៃត្រង់",
    contactTitle: "ទំនាក់ទំនងយើង",
    contactSubtitle: "យើងរីករាយទទួលបានការទំនាក់ទំនងពីអ្នក",
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

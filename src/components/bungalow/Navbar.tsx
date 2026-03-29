'use client'

import { useState, useEffect } from 'react'
import { NavbarProps } from '@/types/translations'
import { Home, Images, Star, MapPin, Phone } from 'lucide-react'
import { Dock } from '@/components/ui/dock-two'

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'km' : 'en')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { icon: Home, label: t.nav[0], onClick: () => scrollToSection('about') },
    { icon: Images, label: t.nav[1], onClick: () => scrollToSection('gallery') },
    { icon: Star, label: t.nav[2], onClick: () => scrollToSection('amenities') },
    { icon: MapPin, label: t.nav[3], onClick: () => scrollToSection('location') },
    { icon: Phone, label: t.nav[4], onClick: () => scrollToSection('contact') },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-green-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          <h1 className="font-serif text-xl md:text-3xl font-bold text-white">
            Kampheakroath Bungalows
          </h1>
          
          {/* Desktop Navigation */}
          <Dock items={navItems} className="hidden md:flex" />

          {/* Mobile Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded-full text-xs md:text-sm font-medium transition-colors duration-200"
            >
              EN | ខ្មែរ
            </button>
            
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-1"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-900 border-t border-green-800">
            <div className="container-max py-4">
              <div className="flex flex-col space-y-3">
                {t.nav.map((section, index) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-white hover:bg-yellow-600 transition-colors duration-200 capitalize font-medium text-base w-full text-left py-2 px-4"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

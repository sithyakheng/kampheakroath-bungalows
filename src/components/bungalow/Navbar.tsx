'use client'

import { useState, useEffect } from 'react'
import { Props } from '@/types/translations'

export default function Navbar({ lang, setLang, t }: Props) {
  const [scrolled, setScrolled] = useState(false)

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
    setLang(lang === 'en' ? 'km' : 'en')
  }

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

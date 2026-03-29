'use client'

import { Props } from '@/types/translations'

export default function Contact({ t }: Props) {
  return (
    <section id="contact" className="py-12 md:py-20 bg-[#f5f0e8]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a2a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {t.contactTitle}
        </h2>
        <p className="text-gray-600 mb-8 md:mb-12">{t.contactSubtitle}</p>
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <a href="https://wa.me/855016890403" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 md:px-8 py-4 rounded-full text-white font-semibold w-full md:w-64 justify-center"
            style={{ backgroundColor: '#25D366' }}>
            WhatsApp Us
          </a>

          <a href="https://www.facebook.com/kampheakroath/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 md:px-8 py-4 rounded-full text-white font-semibold w-full md:w-64 justify-center"
            style={{ backgroundColor: '#1877F2' }}>
            Facebook
          </a>

          <a href="https://t.me/kampeakroath" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 md:px-8 py-4 rounded-full text-white font-semibold w-full md:w-64 justify-center"
            style={{ backgroundColor: '#229ED9' }}>
            Telegram
          </a>

          <p className="mt-6 md:mt-8 text-[#1a3a2a] font-medium text-base md:text-lg"> 016 890 403</p>
          <a href="mailto:kampheakroath@gmail.com" className="text-[#c8860a] hover:underline text-base md:text-lg">
            kampheakroath@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

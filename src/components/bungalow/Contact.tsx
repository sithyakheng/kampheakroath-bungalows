'use client'

interface ContactProps {
  translations: {
    contactTitle: string
    contactSubtitle: string
  }
}

export default function Contact({ translations }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-[#f5f0e8]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {translations.contactTitle}
        </h2>
        <p className="text-gray-600 mb-12">{translations.contactSubtitle}</p>
        <div className="flex flex-col items-center gap-4">
          <a href="https://wa.me/855016890403" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold w-64 justify-center"
            style={{ backgroundColor: '#25D366' }}>
            WhatsApp Us
          </a>

          <a href="https://www.facebook.com/kampheakroath/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold w-64 justify-center"
            style={{ backgroundColor: '#1877F2' }}>
            Facebook
          </a>

          <a href="https://t.me/kampeakroath" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold w-64 justify-center"
            style={{ backgroundColor: '#229ED9' }}>
            Telegram
          </a>

          <p className="mt-6 text-[#1a3a2a] font-medium">📞 016 890 403</p>
          <a href="mailto:kampheakroath@gmail.com" className="text-[#c8860a] hover:underline">
            kampheakroath@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

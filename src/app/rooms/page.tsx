'use client'

import { useState } from 'react'
import Link from 'next/link'

const translations = {
  en: {
    title: "Our Rooms & Villas",
    back: "← Back to Home",
    callBtn: "Call to Book",
    telegramBtn: "Telegram",
    ac: "AC",
    riverView: "River View",
    woodenHouse: "Wooden House",
  },
  km: {
    title: "បន្ទប់ និងវីឡារបស់យើង",
    back: "← ត្រឡប់ទៅទំព័រដើម",
    callBtn: "ហៅដើម្បីកក់",
    telegramBtn: "តេឡេក្រាម",
    ac: "ម៉ាស៊ីនត្រជាក់",
    riverView: "ទិដ្ឋភាពទន្លេ",
    woodenHouse: "ផ្ទះឈើ",
  }
}

const rooms = [
  {
    name: "Villa Twin",
    nameKm: "វីឡា ទ្វីន",
    cover: "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/villatwin.jpg",
    photos: [
      "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/villatwin1.jpg",
      "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/villatwin2.jpg",
    ],
    features: ["AC", "4 Beds"],
    featuresKm: ["ម៉ាស៊ីនត្រជាក់", "៤ គ្រែ"],
  },
  {
    name: "Villa Family",
    nameKm: "វីឡា គ្រួសារ",
    cover: "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-05.jpg",
    photos: [
      "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-07.jpg",
      "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-09.jpg",
      "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-11.jpg",
      "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-14.jpg",
    ],
    features: ["3 Rooms", "6 Beds"],
    featuresKm: ["៣ បន្ទប់", "៦ គ្រែ"],
  },
  {
    name: "House Villa",
    nameKm: "ផ្ទះវីឡា",
    cover: "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_15-01-57.jpg",
    photos: [
      "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_15-03-49.jpg",
    ],
    features: ["River View", "Wooden House"],
    featuresKm: ["ទិដ្ឋភាពទន្លេ", "ផ្ទះឈើ"],
  },
  {
    name: "Villa V.I.P",
    nameKm: "វីឡា វី អាយ ភី",
    cover: "https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_15-05-09.jpg",
    photos: [],
    features: [],
    featuresKm: [],
  },
]

export default function RoomsPage() {
  const [lang, setLang] = useState<'en' | 'km'>('en')
  const t = translations[lang]

  return (
    <main style={{ backgroundColor: '#f5f0e8', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <Link href="/" style={{ color: '#1a3a2a', fontWeight: 'bold', textDecoration: 'none' }}>
            {t.back}
          </Link>
          <button
            onClick={() => setLang(lang === 'en' ? 'km' : 'en')}
            style={{ backgroundColor: '#c8860a', color: 'white', border: 'none', borderRadius: '9999px', padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 'bold' }}>
            {lang === 'en' ? 'ខ្មែរ' : 'EN'}
          </button>
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#1a3a2a', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          {t.title}
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {rooms.map((room) => (
            <div key={room.name} style={{ backgroundColor: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <img src={room.cover} alt={room.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#1a3a2a', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {lang === 'en' ? room.name : room.nameKm}
                </h2>
                {(lang === 'en' ? room.features : room.featuresKm).map((f) => (
                  <span key={f} style={{ display: 'inline-block', backgroundColor: '#e8d5b0', color: '#1a3a2a', borderRadius: '9999px', padding: '0.25rem 0.75rem', marginRight: '0.5rem', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    {f}
                  </span>
                ))}
                {room.photos.length > 0 && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '1rem' }}>
                    {room.photos.map((photo, i) => (
                      <img key={i} src={photo} alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                    ))}
                  </div>
                )}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  <a href="tel:+16143534055" style={{ flex: 1, backgroundColor: '#1a3a2a', color: 'white', textAlign: 'center', padding: '0.75rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>
                    {t.callBtn}
                  </a>
                  <a href="https://t.me/kampeakroath" target="_blank" rel="noopener noreferrer" style={{ flex: 1, backgroundColor: '#229ED9', color: 'white', textAlign: 'center', padding: '0.75rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>
                    {t.telegramBtn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

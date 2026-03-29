export type TranslationKeys = {
  nav: string[]
  heroTitle: string
  heroSubtitle: string
  heroBtn: string
  aboutTitle: string
  aboutText: string
  rating: string
  galleryTitle: string
  gallerySubtitle: string
  amenitiesTitle: string
  amenitiesSubtitle: string
  wifi: string
  wifiDesc: string
  parking: string
  parkingDesc: string
  pool: string
  poolDesc: string
  restaurant: string
  restaurantDesc: string
  laundry: string
  laundryDesc: string
  breakfast: string
  breakfastDesc: string
  locationTitle: string
  locationSubtitle: string
  address: string
  checkout: string
  contactTitle: string
  contactSubtitle: string
}

export type Props = {
  t: TranslationKeys
  lang?: string
  setLang?: (lang: 'en' | 'km') => void
}

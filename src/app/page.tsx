'use client'
import { useState } from 'react'
import Navbar from '@/components/bungalow/Navbar'
import Hero from '@/components/bungalow/Hero'
import About from '@/components/bungalow/About'
import Gallery from '@/components/bungalow/Gallery'
import Amenities from '@/components/bungalow/Amenities'
import Location from '@/components/bungalow/Location'
import Contact from '@/components/bungalow/Contact'
import Footer from '@/components/bungalow/Footer'

const translations = {
  en: {
    nav: ["About", "Gallery", "Amenities", "Location", "Contact"],
    heroTitle: "Escape to Nature",
    heroSubtitle: "Bungalow resort in Kampot, Cambodia",
    heroBtn: "Call Now",
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
    fishing: "Fishing",
    fishingDesc: "Enjoy fishing in the nearby river",
    locationTitle: "Location",
    locationSubtitle: "Find us in the heart of Kampot, Cambodia",
    address: "Unnamed Road, Fish Island, Kampot, Cambodia",
    checkout: "11:00 AM",
    contactTitle: "Contact Us",
    contactSubtitle: "We would love to hear from you",
  },
  km: {
    nav: ["អំពីយើង", "រូបភាព", "សេវាកម្ម", "ទីតាំង", "ទំនាក់ទំនង"],
    heroTitle: "គេចចេញទៅរកធម្មជាតិ",
    heroSubtitle: "រមណីយដ្ឋានបឹងហ្គាឡូ នៅខេត្តកំពត ប្រទេសកម្ពុជា",
    heroBtn: "ហៅឥឡូវ",
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
    laundry: "Laundry Service",
    laundryDesc: "សេវាបោកគក់ងាយស្រួល",
    breakfast: "អាហារពេលព្រឹក (មានថ្លៃ)",
    breakfastDesc: "ចាប់ផ្តើមថ្ងៃរបស់អ្នកជាមួយអាហារពេលព្រឹកឆ្ងាញ់",
    fishing: "នេសាទ",
    fishingDesc: "រីករាយនេសាទនៅតាមដងទន្លេជិតខាង",
    locationTitle: "ទីតាំង",
    locationSubtitle: "រកឃើញយើងនៅចំកណ្តាលខេត្តកំពត ប្រទេសកម្ពុជា",
    address: "ផ្លូវគ្មានឈ្មោះ ត្រែយកោះត្រី ខេត្តកំពត ប្រទេសកម្ពុជា",
    checkout: "១១:០០ ព្រឹក",
    contactTitle: "ទំនាក់ទំនងយើង",
    contactSubtitle: "យើងរីករាយទទួលបានការទំនាក់ទំនងពីអ្នក",
  }
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'km'>('en')
  const t = translations[lang]

  return (
    <main className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Gallery t={t} />
      <Amenities t={t} />
      <Location t={t} />
      <Contact t={t} />
      <Footer />
    </main>
  )
}

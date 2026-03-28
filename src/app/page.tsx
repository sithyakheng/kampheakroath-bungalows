import Navbar from '@/components/bungalow/Navbar'
import Hero from '@/components/bungalow/Hero'
import About from '@/components/bungalow/About'
import Gallery from '@/components/bungalow/Gallery'
import Amenities from '@/components/bungalow/Amenities'
import Location from '@/components/bungalow/Location'
import Contact from '@/components/bungalow/Contact'
import Footer from '@/components/bungalow/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}

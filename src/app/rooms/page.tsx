'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      {/* Header */}
      <div className="bg-green-900 text-white shadow-lg">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">
              Our Rooms & Villas
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-max py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Villa Twin Card */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Cover Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/villatwin.jpg"
                  alt="Villa Twin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-3xl md:text-4xl font-bold text-green-900 mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Villa Twin
                </motion.h2>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    AC
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    4 Beds
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Experience luxury and comfort in our spacious Villa Twin, perfect for families or groups seeking a premium riverside retreat with modern amenities and stunning views.
                </p>

                {/* Photo Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <img
                    src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/villatwin1.jpg"
                    alt="Villa Twin Interior 1"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/villatwin2.jpg"
                    alt="Villa Twin Interior 2"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/855016890403"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#c8860a' }}
                >
                  WhatsApp to Book
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-.465-.302-.534-.018-.168-.032-.297-.032-.465 0-.467.01-.517.018-.601.041-.708.12-.826.154-.943.186-1.124.275-1.269.34-.396.472-.565.58-.707.859-1.099.153-.563.349-.945.368-1.491.067-.336.095-.621.095-.992 0-.755-.099-1.414-.099-2.047v-4.590h1.884c.822 0 1.359.545 1.359 1.248 0 1.063.472 1.561 1.414 2.047 0 1.468-.099 2.113-.099 2.635 0 1.452-.099 2.113-.726 2.113-1.977v-4.590c0-1.455-.545-2.113-1.452-2.113h-1.884c-.822 0-1.359-.545-1.359-1.248 0-1.063-.472-1.561-1.414-2.047 0-1.468.099-2.113.099-2.635 0-1.452.099-2.113.726-2.113 1.977v4.590z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          {/* More Rooms Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-green-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                More Rooms Coming Soon
              </h3>
              <p className="text-gray-600 text-lg">
                We're constantly expanding our accommodation options. Check back soon for more room types and special offers.
              </p>
            </div>
          </motion.div>

          {/* Villa Family Card */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Cover Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-05.jpg"
                  alt="Villa Family"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-3xl md:text-4xl font-bold text-green-900 mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Villa Family
                </motion.h2>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    3 Rooms
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    6 Beds
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Perfect for larger families or groups, our Villa Family offers spacious accommodation with multiple rooms and ample sleeping arrangements, ideal for extended stays.
                </p>

                {/* Photo Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <img
                    src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-07.jpg"
                    alt="Villa Family Interior 1"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-09.jpg"
                    alt="Villa Family Interior 2"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-11.jpg"
                    alt="Villa Family Interior 3"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_14-55-14.jpg"
                    alt="Villa Family Interior 4"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/855016890403"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: '#c8860a' }}
                >
                  WhatsApp to Book
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-.465-.302-.534-.018-.168-.032-.297-.032-.465 0-.467.01-.517.018-.601.041-.708.12-.826.154-.943.186-1.124.275-1.269.34-.396.472-.565.58-.707.859-1.099.153-.563.349-.945.368-1.491.067-.336.095-.621.095-.992 0-.755-.099-1.414-.099-2.047v-4.590h1.884c.822 0 1.359.545 1.359 1.248 0 1.063.472 1.561 1.414 2.047 0 1.468-.099 2.113-.099 2.635 0-1.452.099-2.113.726-2.113 1.977v4.590z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

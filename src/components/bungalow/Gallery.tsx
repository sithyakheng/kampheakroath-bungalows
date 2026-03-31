'use client'

import { motion } from 'framer-motion'
import { Props } from '@/types/translations'

export default function Gallery({ t }: Props) {
  return (
    <section id="gallery" className="section-padding bg-green-900">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            {t.galleryTitle}
          </h2>
          <p className="text-yellow-100 text-base md:text-lg">
            {t.gallerySubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-45-21.jpg"
              alt="Kampheakroath Bungalows Gallery 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-45-30.jpg"
              alt="Kampheakroath Bungalows Gallery 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-45-53.jpg"
              alt="Kampheakroath Bungalows Gallery 3"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-45-57.jpg"
              alt="Kampheakroath Bungalows Gallery 4"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-46-00.jpg"
              alt="Kampheakroath Bungalows Gallery 5"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-46-09.jpg"
              alt="Kampheakroath Bungalows Gallery 6"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-46-12.jpg"
              alt="Kampheakroath Bungalows Gallery 7"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-45-07.jpg"
              alt="Kampheakroath Bungalows Gallery 9"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_15-09-13.jpg"
              alt="Kampheakroath Bungalows Gallery 10"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_15-09-14.jpg"
              alt="Kampheakroath Bungalows Gallery 11"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-30_15-09-19.jpg"
              alt="Kampheakroath Bungalows Gallery 12"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-31_14-20-14.jpg"
              alt="Kampheakroath Bungalows Gallery 13"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-31_14-20-45.jpg"
              alt="Kampheakroath Bungalows Gallery 14"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-31_14-20-47.jpg"
              alt="Kampheakroath Bungalows Gallery 15"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-31_14-26-51.jpg"
              alt="Kampheakroath Bungalows Gallery 16"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-31_14-28-49.jpg"
              alt="Kampheakroath Bungalows Gallery 17"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

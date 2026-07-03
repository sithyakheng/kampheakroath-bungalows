'use client'

import { motion } from 'framer-motion'
import { Props } from '@/types/translations'
import { useState } from 'react'

export default function Hero({ t }: Props) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-44-25.jpg"
        alt="Kampheakroath Bungalows - Riverside Resort"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-16 right-0 text-white text-3xl font-bold hover:text-yellow-400 transition-colors"
            >
              ✕
            </button>
            <video
              src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/IMG_2966.MP4"
              controls
              autoPlay
              className="w-full rounded-lg aspect-video"
            />
          </div>
        </div>
      )}
      
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-center px-4 md:px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl w-full">
          <motion.h1 
            className="font-serif text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t.heroTitle}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t.heroSubtitle}
          </motion.p>
          
          <motion.a
            href="tel:+16143534055"
            className="btn-primary inline-block w-full md:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.heroBtn}
          </motion.a>
          
          <motion.a
            href="/rooms"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto justify-center mt-3"
            style={{ backgroundColor: '#c8860a' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Rooms
          </motion.a>
          
          <motion.button
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full text-white font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto justify-center mt-3"
            style={{ backgroundColor: '#1a3a2a' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tour Video
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

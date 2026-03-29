'use client'

import { motion } from 'framer-motion'
import { Props } from '@/types/translations'

export default function Hero({ t }: Props) {
  return (
    <section className="relative h-screen overflow-hidden">
      <img
        src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-44-25.jpg"
        alt="Kampheakroath Bungalows - Riverside Resort"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t.heroTitle}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t.heroSubtitle}
          </motion.p>
          
          <motion.a
            href="https://wa.me/855016890403"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.heroBtn}
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

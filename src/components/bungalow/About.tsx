'use client'

import { motion } from 'framer-motion'
import { Props } from '@/types/translations'

export default function About({ t }: Props) {
  return (
    <section id="about" className="section-padding py-12 md:py-20 bg-yellow-50">
      <div className="container-max">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-green-900 mb-4 text-center md:text-left">
              {t.aboutTitle}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              {t.aboutText}
            </p>
            
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md inline-block">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold text-gray-800">4.5</span>
              <span className="text-gray-600">·</span>
              <span className="text-gray-600 text-sm md:text-base">{t.rating}</span>
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://qsktgiqdraezgysyjolk.supabase.co/storage/v1/object/public/imge/photo_2026-03-28_16-46-15.jpg"
                alt="Kampheakroath Bungalows Resort"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

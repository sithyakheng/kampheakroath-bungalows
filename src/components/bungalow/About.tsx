'use client'

import { motion } from 'framer-motion'

type Props = {
  t: Record<string, string | string[]>
  lang?: string
  setLang?: (lang: 'en' | 'km') => void
}

export default function About({ t }: Props) {
  return (
    <section id="about" className="section-padding bg-yellow-50">
      <div className="container-max">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-6">
              About Kampheakroath Bungalows
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A peaceful riverside retreat nestled in the lush greenery of Kampot. Kampheakroath Bungalows offers an authentic Cambodian natural experience with modern comforts.
            </p>
            
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md inline-block">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold text-gray-800">4.5</span>
              <span className="text-gray-600">·</span>
              <span className="text-gray-600">86 Reviews</span>
              <span className="text-sm text-gray-500">(Google)</span>
            </div>
          </motion.div>
          
          <motion.div
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

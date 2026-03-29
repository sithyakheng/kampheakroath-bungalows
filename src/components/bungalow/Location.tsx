'use client'

import { motion } from 'framer-motion'

type Props = {
  t: Record<string, string | string[]>
  lang?: string
  setLang?: (lang: 'en' | 'km') => void
}

export default function Location({ t }: Props) {
  return (
    <section id="location" className="section-padding bg-yellow-50">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Location
          </h2>
          <p className="text-gray-700 text-lg">
            Find us in the heart of Kampot, Cambodia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.5!2d104.1734879!3d10.5700122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310837d5ea43f8b7%3A0x1f77beb8e8af347b!2sKampheakroath%20Bungalows!5e0!3m2!1sen!2skh!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            className="mt-8 bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                <p className="text-gray-600">
                  Unnamed Road, Traeuy Kaoh, Kampot, Cambodia
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Check-out Time</h4>
                <p className="text-gray-600">12:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

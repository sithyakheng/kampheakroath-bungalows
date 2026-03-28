'use client'

import { motion } from 'framer-motion'
import { Wifi, Car, Waves, Utensils, Shirt, Coffee } from 'lucide-react'

const amenities = [
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet available throughout the property'
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure parking space for all our guests'
  },
  {
    icon: Waves,
    title: 'Outdoor Pool',
    description: 'Refreshing pool surrounded by tropical gardens'
  },
  {
    icon: Utensils,
    title: 'Restaurant on site',
    description: 'Delicious local and international cuisine'
  },
  {
    icon: Shirt,
    title: 'Laundry Service',
    description: 'Convenient laundry service available'
  },
  {
    icon: Coffee,
    title: 'Paid Breakfast',
    description: 'Start your day with a delicious breakfast'
  }
]

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding bg-yellow-100">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Amenities
          </h2>
          <p className="text-gray-700 text-lg">
            Everything you need for a comfortable stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-green-900 p-3 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-green-900">
                    {amenity.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {amenity.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

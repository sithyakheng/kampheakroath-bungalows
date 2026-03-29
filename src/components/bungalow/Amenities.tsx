'use client'

import { motion } from 'framer-motion'
import { Wifi, Car, Waves, Utensils, Shirt, Coffee } from 'lucide-react'
import { Props } from '@/types/translations'

export default function Amenities({ t }: Props) {
  const amenities = [
    {
      icon: Wifi,
      title: t.wifi || 'Free Wi-Fi',
      description: t.wifiDesc || 'High-speed internet available throughout the property'
    },
    {
      icon: Car,
      title: t.parking || 'Free Parking',
      description: t.parkingDesc || 'Secure parking space for all our guests'
    },
    {
      icon: Waves,
      title: t.pool || 'Outdoor Pool',
      description: t.poolDesc || 'Refreshing pool surrounded by tropical gardens'
    },
    {
      icon: Utensils,
      title: t.restaurant || 'Restaurant on site',
      description: t.restaurantDesc || 'Delicious local and international cuisine'
    },
    {
      icon: Shirt,
      title: t.laundry || 'Laundry Service',
      description: t.laundryDesc || 'Convenient laundry service available'
    },
    {
      icon: Coffee,
      title: t.breakfast || 'Paid Breakfast',
      description: t.breakfastDesc || 'Start your day with a delicious breakfast'
    }
  ]

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
            {t.amenitiesTitle || 'Amenities'}
          </h2>
          <p className="text-gray-700 text-lg">
            {t.amenitiesSubtitle || 'Everything you need for a comfortable stay'}
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

'use client'

import { motion } from 'framer-motion'
import { Wifi, Car, Waves, Utensils, Shirt, Coffee, Fish, Truck } from 'lucide-react'
import { Props } from '@/types/translations'

export default function Amenities({ t }: Props) {
  const amenities = [
    {
      icon: Wifi,
      title: t.wifi || 'Free Wi-Fi',
      description: t.wifiDesc || 'High-speed internet available throughout the property'
    },
    {
      icon: Truck,
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
    },
    {
      icon: Fish,
      title: t.fishing || 'Fishing',
      description: t.fishingDesc || 'Enjoy fishing in the nearby river'
    },
    {
      icon: Truck,
      title: t.pickup || 'Free Pickup (3+ Nights)',
      description: t.pickupDesc || 'Free pickup service for stays of 3 nights or more'
    }
  ]

  return (
    <section id="amenities" className="section-padding py-12 md:py-20 bg-yellow-100">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-green-900 mb-4">
            {t.amenitiesTitle}
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            {t.amenitiesSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={index}
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-green-900">
                    {amenity.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
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

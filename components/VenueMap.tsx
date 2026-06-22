'use client'

import { motion } from 'framer-motion'
import { Navigation } from 'lucide-react'

const MAPS_EMBED = 'https://maps.google.com/maps?q=Seetha+Banquet+Halls+Pilimathalawa+Sri+Lanka&output=embed'
const MAPS_LINK = 'https://www.google.com/maps/search/Seetha+Banquet+Halls+Pilimathalawa+Sri+Lanka'

export default function VenueMap() {
  return (
    <section className="bg-champagne px-5 py-10">
      <motion.div
        className="text-center mb-7"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}
      >
        <p className="text-[8px] tracking-[4px] uppercase text-gold mb-1">
          ✦ &nbsp; Find Us &nbsp; ✦
        </p>
        <h2 className="font-serif font-semibold italic text-2xl text-espresso">
          Venue & Directions
        </h2>
      </motion.div>

      <div className="max-w-sm mx-auto">
        {/* Map */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg mb-4 h-48 border border-[#e8d5a3]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <iframe
            title="Seetha Banquet Halls location"
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Venue info card */}
        <motion.div
          className="bg-white rounded-2xl px-5 py-4 mb-4 shadow-md"
          style={{ boxShadow: '0 4px 20px rgba(61,43,26,0.08)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Gold top rule */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-3" />
          <p className="font-serif font-semibold text-base text-espresso mb-0.5">
            Seetha Banquet Halls
          </p>
          <p className="text-[10px] text-[#8a6a3a]">
            The Grand Ballroom, Pilimathalawa, Sri Lanka
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-3" />
        </motion.div>

        {/* CTA — shimmer on hover */}
        <motion.a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 text-white text-[10px] tracking-[3px] uppercase font-medium rounded-xl animate-shimmer-btn shadow-[0_4px_20px_rgba(200,147,10,0.4)]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Navigation size={13} strokeWidth={2} />
          Get Directions
        </motion.a>
      </div>
    </section>
  )
}

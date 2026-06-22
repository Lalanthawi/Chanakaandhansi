'use client'

import { motion } from 'framer-motion'
import { CalendarDays, Building2, Gem } from 'lucide-react'

const details = [
  {
    Icon: CalendarDays,
    label: 'Date & Time',
    value: 'Thursday, July 23, 2026',
    sub: 'Poruwa Ceremony begins at 10.00 AM',
  },
  {
    Icon: Building2,
    label: 'Venue',
    value: 'Seetha Banquet Halls',
    sub: 'The Grand Ballroom · Pilimathalawa',
  },
  {
    Icon: Gem,
    label: 'Dress Code',
    value: 'Formal / Traditional',
    sub: 'Traditional Sri Lankan attire welcome',
  },
]

export default function EventDetails() {
  return (
    <section className="bg-ivory px-5 py-10">
      <motion.div
        className="text-center mb-7"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}
      >
        <p className="text-[8px] tracking-[4px] uppercase text-gold mb-1">
          ✦ &nbsp; The Celebration &nbsp; ✦
        </p>
        <h2 className="font-serif font-semibold italic text-2xl text-espresso">
          Event Details
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        {details.map(({ Icon, label, value, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(200,147,10,0.15)' }}
            className="bg-white rounded-2xl shadow-md px-5 py-4 flex items-center gap-4 cursor-default"
            style={{ boxShadow: '0 4px 20px rgba(61,43,26,0.08)' }}
          >
            {/* Icon badge */}
            <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-md">
              <Icon size={18} className="text-white" strokeWidth={1.5} />
            </div>

            {/* Thin gold separator */}
            <div className="w-px self-stretch bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

            <div className="min-w-0">
              <p className="text-[7px] tracking-[2px] uppercase text-gold mb-0.5">{label}</p>
              <p className="font-serif font-semibold text-sm text-espresso leading-snug">{value}</p>
              <p className="text-[9px] text-[#8a6a3a] mt-0.5">{sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

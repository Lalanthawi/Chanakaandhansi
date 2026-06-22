'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'

const SPRING: [number, number, number, number] = [0.22, 1, 0.36, 1]

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.85, delay, ease: SPRING },
})

const fade = (delay = 0) => ({
  initial: { opacity: 0 } as const,
  animate: { opacity: 1 } as const,
  transition: { duration: 1, delay },
})

function LotusDecor() {
  return (
    <div className="flex items-end justify-center gap-3 my-3 select-none" aria-hidden>
      {/* Left petal */}
      <svg viewBox="0 0 40 50" className="w-7 h-9 petal-l" fill="none">
        <ellipse cx="20" cy="33" rx="7" ry="16" fill="#c8930a" opacity="0.22" transform="rotate(-20 20 33)"/>
        <ellipse cx="20" cy="30" rx="5" ry="12" fill="#c8930a" opacity="0.42" transform="rotate(-10 20 30)"/>
        <ellipse cx="20" cy="28" rx="3.5" ry="10" fill="#e8a820" opacity="0.7"/>
        <circle cx="20" cy="21" r="2.5" fill="#c8930a"/>
      </svg>
      {/* Centre lotus */}
      <svg viewBox="0 0 52 60" className="w-10 h-12 petal-c" fill="none">
        <ellipse cx="26" cy="40" rx="10" ry="20" fill="#c8930a" opacity="0.18" transform="rotate(-16 26 40)"/>
        <ellipse cx="26" cy="40" rx="10" ry="20" fill="#c8930a" opacity="0.18" transform="rotate(16 26 40)"/>
        <ellipse cx="26" cy="38" rx="6.5" ry="16" fill="#c8930a" opacity="0.48"/>
        <ellipse cx="26" cy="34" rx="4" ry="13" fill="#e8a820" opacity="0.85"/>
        <circle cx="26" cy="25" r="4.5" fill="#3d2b1a"/>
        <circle cx="26" cy="25" r="2.2" fill="#c8930a"/>
      </svg>
      {/* Right petal */}
      <svg viewBox="0 0 40 50" className="w-7 h-9 petal-r" fill="none">
        <ellipse cx="20" cy="33" rx="7" ry="16" fill="#c8930a" opacity="0.22" transform="rotate(20 20 33)"/>
        <ellipse cx="20" cy="30" rx="5" ry="12" fill="#c8930a" opacity="0.42" transform="rotate(10 20 30)"/>
        <ellipse cx="20" cy="28" rx="3.5" ry="10" fill="#e8a820" opacity="0.7"/>
        <circle cx="20" cy="21" r="2.5" fill="#c8930a"/>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-ivory via-[#fdf0d5] to-champagne text-center overflow-hidden">
      <motion.div
        className="floral-border h-7 border-b border-[#e8d5a3]"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      />

      <div className="px-5 pt-6 pb-0">
        <motion.p {...up(0.15)} className="text-[8px] tracking-[4px] uppercase text-[#8a6a3a] mb-1">
          Together with their families
        </motion.p>
        <motion.p {...up(0.28)} className="text-[10px] italic text-[#5a3e1b] mb-5 leading-relaxed">
          We are delighted to invite you<br />to celebrate the wedding of
        </motion.p>

        {/* Couple photo */}
        <motion.div
          className="couple-frame relative w-52 h-52 mx-auto mb-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.05, ease: SPRING }}
        >
          <Image
            src="/couple-illustration.png"
            alt="Hansi and Chanaka"
            fill
            sizes="208px"
            className="object-contain rounded-full"
            style={{ backgroundColor: '#ffffff' }}
            priority
          />
        </motion.div>

        <motion.div {...fade(0.6)}><LotusDecor /></motion.div>

        {/* Names — staggered */}
        <motion.h1 className="font-script text-gold leading-none mb-3">
          <motion.span
            className="text-5xl block"
            initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: SPRING }}
          >Hansi</motion.span>
          <motion.span
            className="text-3xl text-[#8a6a3a] block leading-none my-0.5"
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >&amp;</motion.span>
          <motion.span
            className="text-5xl block"
            initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >Chanaka</motion.span>
        </motion.h1>

        <motion.p {...up(1.05)} className="text-[8px] tracking-[3px] uppercase text-[#5a3e1b] mb-3">
          Request the honour of your presence
        </motion.p>

        <motion.div {...fade(1.15)} className="gold-divider mx-5 mb-3">✦</motion.div>

        <motion.p {...up(1.2)} className="font-serif font-semibold text-sm tracking-[4px] uppercase text-espresso mb-4">
          Save the Date
        </motion.p>

        {/* Date */}
        <motion.div {...up(1.3)} className="flex items-center justify-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0 shadow-md">
            <CalendarDays size={18} className="text-white" strokeWidth={1.5} />
          </div>
          <div className="text-left">
            <p className="text-[8px] tracking-[2px] uppercase text-[#8a6a3a]">Thursday</p>
            <p className="font-serif font-semibold text-sm text-espresso">July 23, 2026</p>
            <p className="text-[9px] text-[#6b4c2a]">Poruwa Ceremony · 10.00 AM</p>
          </div>
        </motion.div>

        <motion.div {...fade(1.4)} className="gold-divider mx-5 mb-3">·</motion.div>

        {/* Venue */}
        <motion.div {...up(1.45)} className="flex items-start justify-center gap-3 mb-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0 shadow-md">
            <MapPin size={18} className="text-white" strokeWidth={1.5} />
          </div>
          <div className="text-left">
            <p className="text-[7px] tracking-[2px] uppercase text-[#8a6a3a]">Venue</p>
            <p className="font-serif font-semibold text-sm text-espresso">Seetha Banquet Halls</p>
            <p className="text-[9px] text-[#6b4c2a]">The Grand Ballroom · Pilimathalawa</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="floral-border h-7 border-t border-[#e8d5a3] mt-5"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
      />
    </section>
  )
}

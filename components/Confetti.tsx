'use client'

import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { motion, AnimatePresence } from 'framer-motion'

export default function Confetti() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)

      // Gold & ivory confetti burst
      const colors = ['#c8930a', '#e8a820', '#fdf6e3', '#f5ece0', '#fff']

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { x: 0.5, y: 0.55 },
        colors,
        shapes: ['circle', 'square'],
        scalar: 1.1,
      })

      // Side cannons with delay
      setTimeout(() => {
        confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0, y: 0.65 }, colors })
        confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1, y: 0.65 }, colors })
      }, 300)

      // Hide banner after 4 s
      setTimeout(() => setShow(false), 4000)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        >
          <div className="px-10 py-7 bg-dark/95 backdrop-blur-sm border border-gold/40 rounded-3xl shadow-[0_12px_60px_rgba(200,147,10,0.45)] text-center mx-6 max-w-xs w-full">
            <p className="text-[8px] tracking-[5px] uppercase text-gold/70 mb-2">✦ &nbsp; You Are &nbsp; ✦</p>
            <p className="font-script text-5xl text-gold leading-tight drop-shadow-[0_2px_12px_rgba(200,147,10,0.7)] mb-2">
              Invited!
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent my-3" />
            <p className="font-serif italic text-[10px] text-[#c8930a]/80 tracking-wide">
              Hansi &amp; Chanaka · July 23, 2026
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

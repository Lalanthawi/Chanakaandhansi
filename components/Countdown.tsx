'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const WEDDING_DATE = new Date('2026-07-23T10:00:00+05:30')

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) { return String(n).padStart(2, '0') }

type TimeLeft = ReturnType<typeof getTimeLeft>

function FlipUnit({ value, label }: { value: string; label: string }) {
  const prev = useRef(value)
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (prev.current !== value) {
      prev.current = value
      setFlip(true)
      const t = setTimeout(() => setFlip(false), 500)
      return () => clearTimeout(t)
    }
  }, [value])

  return (
    <div className="flex-1 max-w-[70px] flex flex-col items-center">
      <div className="relative w-full bg-gradient-to-b from-[#3a2810] to-[#1e0f04] border border-gold/30 rounded-xl px-2 pt-3 pb-2.5 text-center shadow-[inset_0_1px_0_rgba(200,147,10,0.15)]">
        {/* shine line */}
        <div className="absolute inset-x-3 top-1.5 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <span
          key={value}
          className={`font-sans font-semibold text-[2rem] leading-none text-ivory block tracking-tight ${flip ? 'cd-flip' : ''}`}
        >
          {value}
        </span>
      </div>
      <span className="text-[7px] text-gold/70 tracking-[3px] uppercase mt-1.5">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days',  value: time === null ? '--' : String(time.days) },
    { label: 'Hours', value: time === null ? '--' : pad(time.hours) },
    { label: 'Mins',  value: time === null ? '--' : pad(time.mins)  },
    { label: 'Secs',  value: time === null ? '--' : pad(time.secs)  },
  ]

  return (
    <motion.section
      className="bg-dark diagonal-pattern py-8 px-5 text-center"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="text-[8px] tracking-[4px] uppercase text-gold mb-1"
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
      >
        ✦ &nbsp; Counting Down to the Big Day &nbsp; ✦
      </motion.p>
      <motion.p
        className="font-serif italic text-[#8a6a3a] text-xs mb-5"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
      >
        July 23, 2026
      </motion.p>

      <div className="flex justify-center items-start gap-2">
        {units.map((unit, i) => (
          <React.Fragment key={unit.label}>
            <motion.div
              className="flex-1 max-w-[70px]"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <FlipUnit value={unit.value} label={unit.label} />
            </motion.div>
            {i < units.length - 1 && (
              <span className="text-gold/60 text-2xl font-light self-start pt-2.5 mx-[-4px]">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  )
}

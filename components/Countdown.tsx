'use client'

import React, { useEffect, useState } from 'react'

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

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Mins', value: time.mins },
    { label: 'Secs', value: time.secs },
  ]

  return (
    <section className="bg-dark diagonal-pattern py-6 px-5 text-center">
      <p className="text-[8px] tracking-[4px] uppercase text-gold mb-4">
        ✦ &nbsp; Counting Down to the Big Day &nbsp; ✦
      </p>
      <div className="flex justify-center items-stretch gap-1">
        {units.map((unit, i) => (
          <React.Fragment key={unit.label}>
            <div
              className="flex-1 max-w-[64px] bg-gold/10 border border-gold/30 rounded-lg px-2 pt-2.5 pb-1.5 text-center"
            >
              <span className="font-serif font-semibold text-3xl text-ivory block leading-none">
                {unit.label === 'Days' ? time.days : pad(unit.value)}
              </span>
              <span className="text-[6px] text-gold tracking-[2px] uppercase block mt-1">
                {unit.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span key={`sep-${i}`} className="text-gold text-xl font-bold self-center pb-3 mx-[-2px]">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

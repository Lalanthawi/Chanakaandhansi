'use client'

import { useEffect, useRef, useState } from 'react'
import { Music } from 'lucide-react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/song.mp3')
    audio.loop = true
    audio.volume = 0.4
    audioRef.current = audio

    audio.play().then(() => {
      setPlaying(true)
    }).catch(() => {
      const startOnGesture = () => {
        audio.play().then(() => setPlaying(true)).catch(() => {})
        document.removeEventListener('click', startOnGesture)
        document.removeEventListener('touchstart', startOnGesture)
        document.removeEventListener('scroll', startOnGesture)
        document.removeEventListener('keydown', startOnGesture)
      }
      document.addEventListener('click', startOnGesture)
      document.addEventListener('touchstart', startOnGesture)
      document.addEventListener('scroll', startOnGesture)
      document.addEventListener('keydown', startOnGesture)
    })

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  async function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      try {
        await audio.play()
        setPlaying(true)
      } catch {}
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-dark border-2 border-gold shadow-[0_4px_20px_rgba(200,147,10,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_28px_rgba(200,147,10,0.6)]"
    >
      <Music
        size={18}
        className={`text-gold transition-all ${playing ? 'animate-spin-slow' : ''}`}
        strokeWidth={1.5}
      />
      {playing && (
        <span className="absolute inset-0 rounded-full border border-gold animate-ping opacity-25" />
      )}
    </button>
  )
}

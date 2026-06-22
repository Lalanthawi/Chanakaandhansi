'use client'

import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/song.mp3')
    audio.loop = true
    audio.volume = 0.4
    audioRef.current = audio

    // Try autoplay immediately — works in some browsers/contexts
    audio.play().then(() => {
      setPlaying(true)
    }).catch(() => {
      // Browser blocked autoplay — start on first user interaction anywhere
      const startOnGesture = () => {
        audio.play().then(() => {
          setPlaying(true)
        }).catch(() => {})
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
      } catch {
        // play() rejected — shouldn't happen after first gesture but handle gracefully
      }
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={playing ? 'Pause music' : 'Play background music'}
      className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-dark border-2 border-gold shadow-[0_4px_20px_rgba(200,147,10,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_28px_rgba(200,147,10,0.6)]"
    >
      {playing ? (
        <span className="flex gap-[3px] items-center">
          <span className="w-[3px] h-4 bg-gold rounded-sm block" />
          <span className="w-[3px] h-4 bg-gold rounded-sm block" />
        </span>
      ) : (
        <span className="text-gold text-xl leading-none select-none">♪</span>
      )}
      {playing && (
        <span className="absolute inset-0 rounded-full border border-gold animate-ping opacity-30" />
      )}
    </button>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const audio = new Audio('/song.mp3')
    audio.loop = true
    audio.volume = 0.4
    audio.addEventListener('canplaythrough', () => setReady(true))
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
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
        /* Pause bars */
        <span className="flex gap-[3px] items-center">
          <span className="w-[3px] h-4 bg-gold rounded-sm block" />
          <span className="w-[3px] h-4 bg-gold rounded-sm block" />
        </span>
      ) : (
        /* Music note */
        <span className="text-gold text-xl leading-none select-none">♪</span>
      )}
      {/* Pulse ring when playing */}
      {playing && (
        <span className="absolute inset-0 rounded-full border border-gold animate-ping opacity-30" />
      )}
    </button>
  )
}

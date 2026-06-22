import { Phone } from 'lucide-react'
import RSVP from '@/components/RSVP'
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import EventDetails from '@/components/EventDetails'
import VenueMap from '@/components/VenueMap'
import MusicPlayer from '@/components/MusicPlayer'
import Confetti from '@/components/Confetti'

function Footer() {
  return (
    <footer className="bg-near-black py-5 text-center">
      <p className="font-script text-3xl text-gold mb-1">Hansi &amp; Chanaka</p>
      <p className="text-[8px] tracking-[3px] uppercase text-gold/70 mb-2">
        23 · 07 · 2026
      </p>
      <p className="text-gold text-sm mb-4">♥</p>
      <a
        href="tel:+94716343550"
        className="inline-flex items-center gap-2 text-[9px] tracking-[2px] uppercase text-gold/60 hover:text-gold transition-colors"
      >
        <Phone size={11} strokeWidth={1.5} />
        071 634 3550
      </a>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="max-w-lg mx-auto">
      <Hero />
      <Countdown />
      <EventDetails />
      <VenueMap />
      <RSVP />
      <Footer />
      <MusicPlayer />
      <Confetti />
    </main>
  )
}

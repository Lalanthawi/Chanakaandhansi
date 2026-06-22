import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import EventDetails from '@/components/EventDetails'
import VenueMap from '@/components/VenueMap'
import MusicPlayer from '@/components/MusicPlayer'

function Footer() {
  return (
    <footer className="bg-near-black py-5 text-center">
      <p className="font-script text-3xl text-gold mb-1">Hansi &amp; Chanaka</p>
      <p className="text-[8px] tracking-[3px] uppercase text-gold/70 mb-2">
        23 · 07 · 2026
      </p>
      <p className="text-gold text-sm">♥</p>
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
      <Footer />
      <MusicPlayer />
    </main>
  )
}

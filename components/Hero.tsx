import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-ivory to-champagne text-center">
      {/* Top floral border */}
      <div className="floral-border h-7 border-b border-[#e8d5a3]" />

      <div className="px-5 pt-5 pb-0">
        {/* Eyebrow */}
        <p className="text-[8px] tracking-[4px] uppercase text-[#8a6a3a] mb-1.5">
          Together with their families
        </p>
        <p className="text-[10px] italic text-[#5a3e1b] mb-4 leading-relaxed">
          We are delighted to invite you<br />to celebrate the wedding of
        </p>

        {/* Couple photo in double gold ring */}
        <div className="couple-frame relative w-48 h-48 mx-auto mb-3">
          <Image
            src="/couple.jpg"
            alt="Hansi and Chanaka"
            fill
            className="object-cover object-top rounded-full"
            priority
          />
        </div>

        {/* Floral spray */}
        <p className="text-2xl -tracking-wider mb-3 text-gold opacity-70">🌸 🌼 🌸</p>

        {/* Names */}
        <h1 className="font-script text-gold leading-tight mb-3">
          <span className="text-5xl block mb-1">Hansi</span>
          <span className="text-3xl text-[#8a6a3a] block leading-none mb-1">&amp;</span>
          <span className="text-5xl block">Chanaka</span>
        </h1>

        <p className="text-[8px] tracking-[3px] uppercase text-[#5a3e1b] mb-3">
          Request the honour of your presence
        </p>

        {/* Gold divider */}
        <div className="gold-divider mx-5 mb-3">✦</div>

        <p className="font-serif font-semibold text-sm tracking-[4px] uppercase text-espresso mb-3">
          Save the Date
        </p>

        {/* Date row */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-md bg-gold flex items-center justify-center text-white text-base shrink-0">
            📅
          </div>
          <div className="text-left">
            <p className="text-[8px] tracking-[2px] uppercase text-[#8a6a3a]">Thursday</p>
            <p className="font-serif font-semibold text-sm text-espresso">July 23, 2026</p>
            <p className="text-[9px] text-[#6b4c2a]">Poruwa Ceremony · 10.00 AM</p>
          </div>
        </div>

        {/* Thin divider */}
        <div className="gold-divider mx-5 mb-3">·</div>

        {/* Venue row */}
        <div className="flex items-start justify-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-white text-xs shrink-0 mt-0.5">
            📍
          </div>
          <div className="text-left">
            <p className="text-[7px] tracking-[2px] uppercase text-[#8a6a3a]">Venue</p>
            <p className="font-serif font-semibold text-sm text-espresso">Seetha Banquet Halls</p>
            <p className="text-[9px] text-[#6b4c2a]">The Grand Ballroom · Pilimathalawa</p>
          </div>
        </div>
      </div>

      {/* Bottom floral border */}
      <div className="floral-border h-7 border-t border-[#e8d5a3] mt-4" />
    </section>
  )
}

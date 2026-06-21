const MAPS_EMBED = 'https://maps.google.com/maps?q=Seetha+Banquet+Halls+Pilimathalawa+Sri+Lanka&output=embed'
const MAPS_LINK = 'https://www.google.com/maps/search/Seetha+Banquet+Halls+Pilimathalawa+Sri+Lanka'

export default function VenueMap() {
  return (
    <section className="bg-champagne px-5 py-7">
      <p className="text-[8px] tracking-[4px] uppercase text-gold text-center mb-1">
        ✦ &nbsp; Find Us &nbsp; ✦
      </p>
      <h2 className="font-serif font-semibold italic text-2xl text-espresso text-center mb-5">
        Venue & Directions
      </h2>

      <div className="max-w-sm mx-auto">
        {/* Map iframe */}
        <div className="rounded-xl overflow-hidden border-2 border-[#e8d5a3] shadow-md mb-4 h-48">
          <iframe
            title="Seetha Banquet Halls location"
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Venue info card */}
        <div className="bg-white rounded-xl border border-[#e8d5a3] shadow-sm px-4 py-3.5 mb-4">
          <p className="font-serif font-semibold text-base text-espresso mb-0.5">
            Seetha Banquet Halls
          </p>
          <p className="text-[10px] text-[#6b4c2a]">
            The Grand Ballroom, Pilimathalawa, Sri Lanka
          </p>
        </div>

        {/* Directions CTA */}
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 text-center text-white text-[10px] tracking-[3px] uppercase font-medium rounded-md bg-gradient-to-r from-gold to-gold-light shadow-[0_4px_16px_rgba(200,147,10,0.35)] hover:opacity-90 transition-opacity"
        >
          Get Directions →
        </a>
      </div>
    </section>
  )
}

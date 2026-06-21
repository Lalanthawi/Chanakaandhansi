const details = [
  {
    icon: '🗓',
    label: 'Date & Time',
    value: 'Thursday, July 23, 2026',
    sub: 'Poruwa Ceremony begins at 10.00 AM',
  },
  {
    icon: '🏛',
    label: 'Venue',
    value: 'Seetha Banquet Halls',
    sub: 'The Grand Ballroom · Pilimathalawa',
  },
  {
    icon: '👗',
    label: 'Dress Code',
    value: 'Formal / Traditional',
    sub: 'Traditional Sri Lankan attire welcome',
  },
]

export default function EventDetails() {
  return (
    <section className="bg-ivory px-5 py-7">
      <p className="text-[8px] tracking-[4px] uppercase text-gold text-center mb-1">
        ✦ &nbsp; The Celebration &nbsp; ✦
      </p>
      <h2 className="font-serif font-semibold italic text-2xl text-espresso text-center mb-5">
        Event Details
      </h2>

      <div className="flex flex-col gap-3 max-w-sm mx-auto">
        {details.map((d) => (
          <div
            key={d.label}
            className="flex items-start gap-3.5 bg-white rounded-xl border-l-[3px] border-gold shadow-sm px-3.5 py-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-lg shrink-0">
              {d.icon}
            </div>
            <div>
              <p className="text-[7px] tracking-[2px] uppercase text-gold mb-0.5">{d.label}</p>
              <p className="font-serif font-semibold text-sm text-espresso leading-snug">{d.value}</p>
              <p className="text-[9px] text-[#6b4c2a] mt-0.5">{d.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

# Wedding Website — Hansi & Chanaka — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first, single-page Sri Lankan wedding website for Hansi & Chanaka using Next.js 14 App Router and Tailwind CSS.

**Architecture:** Single page (`app/page.tsx`) renders five sections top-to-bottom: Hero, Countdown, EventDetails, VenueMap, Footer. Each section is its own component file. The Countdown is the only client component (needs `setInterval`). Everything else is server components / pure HTML.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, TypeScript, Google Fonts (Great Vibes, Cormorant Garant, Inter)

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `app/layout.tsx` | Create | Root layout: fonts, metadata, viewport |
| `app/page.tsx` | Create | Composes all sections |
| `app/globals.css` | Create | Tailwind directives + CSS custom properties |
| `tailwind.config.ts` | Create | Custom colors, font families |
| `next.config.js` | Create | Static export config |
| `components/Hero.tsx` | Create | Top section: photo, names, date, venue |
| `components/Countdown.tsx` | Create | Live countdown timer (client component) |
| `components/EventDetails.tsx` | Create | 3 detail cards |
| `components/VenueMap.tsx` | Create | Google Maps iframe + directions CTA |
| `public/couple.jpg` | Copy | Invitation couple photo |

---

## Task 1: Scaffold Next.js project with Tailwind

**Files:**
- Creates: project scaffold in `/Users/lalantha/Desktop/chanakaandhansi`

- [ ] **Step 1: Scaffold the project**

Run inside `~/Desktop` (the directory already exists, so use `--yes` and target the folder):

```bash
cd ~/Desktop && npx create-next-app@14 chanakaandhansi \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --yes
```

Expected: project files created in `~/Desktop/chanakaandhansi/`.

- [ ] **Step 2: Verify dev server starts**

```bash
cd ~/Desktop/chanakaandhansi && npm run dev
```

Expected: "ready - started server on 0.0.0.0:3000". Open http://localhost:3000 — see default Next.js page. Stop with Ctrl+C.

- [ ] **Step 3: Copy couple photo to public/**

```bash
cp ~/Downloads/PHOTO-2026-06-15-20-48-09.jpg ~/Desktop/chanakaandhansi/public/couple.jpg
```

Expected: file exists at `public/couple.jpg`.

- [ ] **Step 4: Remove boilerplate files**

```bash
cd ~/Desktop/chanakaandhansi
rm -f app/page.tsx app/globals.css app/layout.tsx
rm -rf public/next.svg public/vercel.svg
```

- [ ] **Step 5: Commit scaffold**

```bash
cd ~/Desktop/chanakaandhansi
git add -A
git commit -m "chore: scaffold Next.js 14 + Tailwind, add couple photo"
```

---

## Task 2: Configure Tailwind, fonts, and global styles

**Files:**
- Create: `tailwind.config.ts`
- Create: `app/globals.css`
- Create: `next.config.js`

- [ ] **Step 1: Write `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#fdf6e3',
        champagne: '#f5ece0',
        gold: '#c8930a',
        'gold-light': '#e8a820',
        espresso: '#3d2b1a',
        dark: '#2c1f0e',
        'near-black': '#1a0f06',
      },
      fontFamily: {
        script: ['var(--font-great-vibes)', 'cursive'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Write `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-ivory text-espresso font-sans;
  }
}

@layer utilities {
  .floral-border {
    background-image:
      radial-gradient(circle at 10% 50%, rgba(200,147,10,0.27) 12px, transparent 12px),
      radial-gradient(circle at 25% 50%, rgba(200,147,10,0.2) 8px, transparent 8px),
      radial-gradient(circle at 42% 50%, rgba(200,147,10,0.27) 10px, transparent 10px),
      radial-gradient(circle at 58% 50%, rgba(200,147,10,0.27) 10px, transparent 10px),
      radial-gradient(circle at 75% 50%, rgba(200,147,10,0.2) 8px, transparent 8px),
      radial-gradient(circle at 90% 50%, rgba(200,147,10,0.27) 12px, transparent 12px);
  }

  .diagonal-pattern {
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(200,147,10,0.03) 10px,
      rgba(200,147,10,0.03) 20px
    );
  }

  .gold-divider {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #c8930a;
    font-size: 0.625rem;
  }

  .gold-divider::before,
  .gold-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c8930a, transparent);
  }

  .couple-frame {
    position: relative;
  }

  .couple-frame::before {
    content: '';
    position: absolute;
    inset: -6px;
    border: 2px solid #c8930a;
    border-radius: 9999px;
    z-index: 10;
    pointer-events: none;
  }

  .couple-frame::after {
    content: '';
    position: absolute;
    inset: -13px;
    border: 1px solid rgba(200,147,10,0.35);
    border-radius: 9999px;
    z-index: 10;
    pointer-events: none;
  }
}
```

- [ ] **Step 3: Write `next.config.js`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

module.exports = nextConfig
```

- [ ] **Step 4: Commit config**

```bash
cd ~/Desktop/chanakaandhansi
git add tailwind.config.ts app/globals.css next.config.js
git commit -m "chore: configure Tailwind custom palette, global CSS, static export"
```

---

## Task 3: Root layout with fonts and metadata

**Files:**
- Create: `app/layout.tsx`

- [ ] **Step 1: Write `app/layout.tsx`**

```tsx
import type { Metadata, Viewport } from 'next'
import { Great_Vibes, Cormorant_Garant, Inter } from 'next/font/google'
import './globals.css'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
})

const cormorant = Cormorant_Garant({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hansi & Chanaka — July 23, 2026',
  description: 'You are warmly invited to the wedding of Hansi & Chanaka on Thursday, July 23, 2026 at Seetha Banquet Halls, Pilimathalawa.',
  openGraph: {
    title: 'Hansi & Chanaka — Wedding Invitation',
    description: 'Thursday, July 23, 2026 · Seetha Banquet Halls, Pilimathalawa',
    images: ['/couple.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c8930a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd ~/Desktop/chanakaandhansi && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add root layout with Google Fonts and OpenGraph metadata"
```

---

## Task 4: Hero component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create components directory and write Hero**

```tsx
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
        <h1 className="font-script text-5xl text-gold leading-tight mb-1">
          Hansi
        </h1>
        <p className="font-script text-3xl text-[#8a6a3a] leading-none mb-1">&</p>
        <h1 className="font-script text-5xl text-gold leading-tight mb-3">
          Chanaka
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
```

- [ ] **Step 2: Wire hero into page to verify it renders**

Write `app/page.tsx`:

```tsx
import Hero from '@/components/Hero'

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  )
}
```

- [ ] **Step 3: Run dev server and visually verify hero**

```bash
cd ~/Desktop/chanakaandhansi && npm run dev
```

Open http://localhost:3000. Check:
- Couple photo shows in circular gold-ring frame
- Names render in cursive Great Vibes font
- Floral borders top and bottom visible
- Date and venue rows aligned

Stop server with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section with couple photo, names, date, venue"
```

---

## Task 5: Countdown component

**Files:**
- Create: `components/Countdown.tsx`

- [ ] **Step 1: Write `components/Countdown.tsx`**

```tsx
'use client'

import { useEffect, useState } from 'react'

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
          <>
            <div
              key={unit.label}
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
          </>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Countdown to page**

Update `app/page.tsx`:

```tsx
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'

export default function Page() {
  return (
    <main>
      <Hero />
      <Countdown />
    </main>
  )
}
```

- [ ] **Step 3: Run dev and verify countdown**

```bash
npm run dev
```

Open http://localhost:3000. Check:
- Dark espresso section appears below hero
- 4 gold-bordered boxes with Days / Hours / Mins / Secs
- Seconds are ticking live

Stop with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add components/Countdown.tsx app/page.tsx
git commit -m "feat: add live countdown timer to wedding date"
```

---

## Task 6: Event Details component

**Files:**
- Create: `components/EventDetails.tsx`

- [ ] **Step 1: Write `components/EventDetails.tsx`**

```tsx
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
```

- [ ] **Step 2: Add to page**

Update `app/page.tsx`:

```tsx
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import EventDetails from '@/components/EventDetails'

export default function Page() {
  return (
    <main>
      <Hero />
      <Countdown />
      <EventDetails />
    </main>
  )
}
```

- [ ] **Step 3: Run dev and verify**

```bash
npm run dev
```

Check: 3 white cards with gold left border, icon circles, label + value + sub text. Stop with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add components/EventDetails.tsx app/page.tsx
git commit -m "feat: add Event Details section with date, venue, dress code cards"
```

---

## Task 7: Venue & Map component

**Files:**
- Create: `components/VenueMap.tsx`

- [ ] **Step 1: Write `components/VenueMap.tsx`**

```tsx
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
```

- [ ] **Step 2: Add to page**

Update `app/page.tsx`:

```tsx
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import EventDetails from '@/components/EventDetails'
import VenueMap from '@/components/VenueMap'

export default function Page() {
  return (
    <main>
      <Hero />
      <Countdown />
      <EventDetails />
      <VenueMap />
    </main>
  )
}
```

- [ ] **Step 3: Run dev and verify**

```bash
npm run dev
```

Check: map iframe loads (may show Google Maps UI), venue info card appears, gold gradient button present. Stop with Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add components/VenueMap.tsx app/page.tsx
git commit -m "feat: add Venue & Map section with Google Maps embed and directions link"
```

---

## Task 8: Footer and final page assembly

**Files:**
- Modify: `app/page.tsx` — add inline Footer, finalize composition

- [ ] **Step 1: Update `app/page.tsx` with Footer inline**

```tsx
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import EventDetails from '@/components/EventDetails'
import VenueMap from '@/components/VenueMap'

function Footer() {
  return (
    <footer className="bg-near-black py-5 text-center">
      <p className="font-script text-3xl text-gold mb-1">Hansi &amp; Chanaka</p>
      <p className="text-[8px] tracking-[3px] uppercase text-[#6b4c2a] mb-2">
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
    </main>
  )
}
```

- [ ] **Step 2: Run dev and do a full visual pass**

```bash
npm run dev
```

Open http://localhost:3000. Scroll through the entire page and verify:
- [ ] Hero: couple photo in gold circular frame, Great Vibes names, date row, venue row, floral borders
- [ ] Countdown: dark background, 4 ticking boxes
- [ ] Event Details: 3 gold-bordered cards
- [ ] Venue: map iframe, info card, gold CTA button
- [ ] Footer: script names, date, gold heart

Stop with Ctrl+C.

- [ ] **Step 3: Run production build to confirm no errors**

```bash
cd ~/Desktop/chanakaandhansi && npm run build
```

Expected: `Export successful`. No TypeScript errors, no build errors.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Footer, finalize page composition — all sections complete"
```

---

## Task 9: Git remote and push

**Files:** none (git ops only)

- [ ] **Step 1: Set remote and push**

```bash
cd ~/Desktop/chanakaandhansi
git remote add origin git@github.com:Lalanthawi/Chanakaandhansi.git
git branch -M master
git push -u origin master
```

Expected: all commits pushed to `https://github.com/Lalanthawi/Chanakaandhansi`.

- [ ] **Step 2: Confirm on GitHub**

Open https://github.com/Lalanthawi/Chanakaandhansi in a browser and verify commits are there.

---

## Self-Review

| Spec requirement | Task |
|-----------------|------|
| Hero: photo, names, date, venue, floral borders | Task 4 |
| Countdown: live timer to July 23 2026 10AM IST | Task 5 |
| Event Details: 3 cards with date/venue/dresscode | Task 6 |
| Venue & Map: iframe + directions CTA | Task 7 |
| Footer: script names, date, heart | Task 8 |
| Tailwind custom palette (ivory/gold/espresso) | Task 2 |
| Great Vibes + Cormorant Garant + Inter fonts | Task 3 |
| Static export (`output: 'export'`) | Task 2 |
| Git remote `git@github.com:Lalanthawi/Chanakaandhansi.git` | Task 9 |
| Mobile-first, max-w-lg centered | Task 8 |
| couple.jpg in public/ | Task 1 |

All requirements covered. No TBDs. No placeholders.

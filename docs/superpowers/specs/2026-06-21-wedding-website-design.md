---
name: wedding-website-chanaka-hansi
description: Design spec for Hansi & Chanaka's Sri Lankan wedding website — Next.js, mobile-first, ivory/gold theme
metadata:
  type: project
---

# Wedding Website — Hansi & Chanaka

## Overview

A mobile-first, single-page wedding website for Hansi & Chanaka's Sri Lankan wedding. Built with Next.js 14 App Router and Tailwind CSS. Deployed as a static site. Git remote: `git@github.com:Lalanthawi/Chanakaandhansi.git`

## Wedding Details

| Field | Value |
|-------|-------|
| Couple | Hansi & Chanaka |
| Date | Thursday, July 23, 2026 |
| Time | 10:00 AM (Poruwa Ceremony) |
| Venue | Seetha Banquet Halls, The Grand Ballroom |
| Location | Pilimathalawa, Sri Lanka |
| Dress Code | Formal / Traditional (Sri Lankan attire welcome) |

## Design System

### Palette
| Name | Hex | Usage |
|------|-----|-------|
| Ivory | `#fdf6e3` | Page background, hero |
| Champagne | `#f5ece0` | Section alternates |
| Gold | `#c8930a` | Accents, borders, CTAs |
| Gold Light | `#e8a820` | Gradient partner for gold |
| Espresso | `#3d2b1a` | Body text |
| Dark | `#2c1f0e` | Countdown section bg |
| Near Black | `#1a0f06` | Footer bg |

### Typography
- **Names / Script**: `Great Vibes` (Google Fonts) — used only for couple names
- **Headings / Subheadings**: `Cormorant Garant` (Google Fonts) — italic, elegant serif
- **Body / Labels**: `Inter` — lightweight, readable

### Motifs
- Floral ornaments via emoji/CSS (🌸 🌼) and CSS radial-gradient dot patterns
- Gold rule dividers (`linear-gradient` lines with `✦` center ornament)
- Double-ring oval frame for the couple photo
- Letter-spacing uppercase labels (`7–8px`, `letter-spacing: 3–4px`)

## Architecture

```
chanakaandhansi/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, viewport
│   ├── page.tsx            # Single page, renders all sections
│   └── globals.css         # Tailwind base + custom CSS variables
├── components/
│   ├── Hero.tsx            # Full hero with photo, names, date, venue
│   ├── Countdown.tsx       # Live countdown timer (client component)
│   ├── EventDetails.tsx    # Date/venue/dresscode cards
│   └── VenueMap.tsx        # Google Maps embed + venue info card
├── public/
│   └── couple.jpg          # Invitation couple illustration photo
└── tailwind.config.ts      # Custom colors + font families
```

## Sections (top to bottom)

### 1. Hero
- Top floral border (CSS dot pattern, gold)
- "Together with their families" uppercase eyebrow
- "We are delighted to invite you to celebrate the wedding of"
- **Couple photo** (`couple.jpg`) in circular frame with double gold border ring
- Floral spray row (CSS/emoji)
- Names in **Great Vibes** script: "Hansi" / "&" / "Chanaka"
- "Request the honour of your presence" in small caps
- Gold rule divider
- "Save the Date" in Cormorant Garant
- Date row: gold calendar icon + "Thursday / July 23, 2026 / Poruwa Ceremony · 10.00 AM"
- Gold rule divider
- Venue row: gold pin icon + "Seetha Banquet Halls / The Grand Ballroom · Pilimathalawa"
- Bottom floral border

### 2. Countdown (`'use client'`)
- Dark espresso background with subtle diagonal pattern
- Gold eyebrow: "✦ Counting Down to the Big Day ✦"
- 4 gold-bordered boxes: Days / Hours / Mins / Secs
- Live `setInterval` updating every second from `new Date()` to `new Date('2026-07-23T10:00:00+05:30')`

### 3. Event Details
- Ivory background
- Gold eyebrow + "Event Details" heading in Cormorant Garant italic
- 3 cards (white, gold left-border, drop shadow):
  1. 🗓 Date & Time — "Thursday, July 23, 2026" / "Poruwa Ceremony begins at 10.00 AM"
  2. 🏛 Venue — "Seetha Banquet Halls" / "The Grand Ballroom · Pilimathalawa"
  3. 👗 Dress Code — "Formal / Traditional" / "Traditional Sri Lankan attire welcome"

### 4. Venue & Map
- Champagne background
- Google Maps iframe embed for "Seetha Banquet Halls, Pilimathalawa"
- Venue info card (white, gold border)
- Gold gradient "Get Directions →" CTA button (links to Google Maps)

### 5. Footer
- Near-black background
- Names in Great Vibes gold script
- "23 · 07 · 2026" uppercase label
- Gold heart ♥

## Key Implementation Notes

- **Mobile-first**: all layouts designed for 375px+, desktop just widens gracefully
- **No RSVP**: not requested, omit entirely
- **Couple photo**: `public/couple.jpg` — copy from invitation image
- **Google Maps embed**: use free embed URL, no API key required for basic iframe
- **Static export**: `output: 'export'` in `next.config.js` for simple hosting
- **Git remote**: `git@github.com:Lalanthawi/Chanakaandhansi.git`, branch `master`

## **Why:** Celebrate Chanaka & Hansi's wedding with a beautiful digital invitation guests can open on their phones.
## **How to apply:** Keep the ivory/gold palette strict — no blue or grey. Every section should feel like the physical invitation card.

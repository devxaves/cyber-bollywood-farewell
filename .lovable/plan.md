
# Hasta La Vista 2025 — TMSL Farewell Site

An immersive, cinematic "Cyber-Bollywood" farewell experience: deep crimson + gold + cornsilk on near-black, Playfair/Cinzel/Lora typography, 3D particles, smooth scroll, hover-parallax cards, and full content for students, teachers, and the Goodbye Gang team.

## Stack adaptation (important)

Your project runs on **TanStack Start (not Next.js)**. The brief assumes Next 14 App Router. I'll faithfully implement the same design, content, and behavior, swapping framework primitives:

- `app/page.tsx` → `src/routes/index.tsx`
- `app/team/page.tsx` → `src/routes/team.tsx`
- `app/gallery/page.tsx` → `src/routes/gallery.tsx`
- `app/contact/page.tsx` → `src/routes/contact.tsx`
- `next/dynamic` → `React.lazy` + `Suspense`, with Three.js components rendered client-only (guarded by mounted check) since this app supports SSR
- `next/image` → standard `<img>` with `loading="lazy"`
- Global providers/cursor/navbar live in `src/routes/__root.tsx`

All visual design, palette, typography, animations, and content from the brief are preserved.

## Pages

1. **Home (`/`)** — Scroll-expand hero, animated marquee ribbons, stats strip, "Wheel of Vibes" section, Four Pillars cinematic panels, Teachers hover-parallax cards, footer.
2. **Team (`/team`)** — Zoom parallax hero, Executive spotlight (Samyak, Abhishikta, Sagnik), then film-reel horizontal scrollers per department (Technical, Finance & Sponsorship, Management & Resources, Creative & Logistics, Media & Photography) with all named members.
3. **Gallery (`/gallery`)** — Zoom parallax hero, masonry grid with golden frame hover + lightbox, "Our Beloved Seniors" tribute banner.
4. **Contact (`/contact`)** — Velvet-curtain reveal, film-credits contact details (email, phone, location), glassmorphism form with magnetic submit, social icon row.

## Design system

- Colors only: `#8B0000`, `#B22222`, `#DAA520`, `#FFF8DC`, `#1A0A0A`, gold glow `rgba(218,165,32,0.6)`. Wired into `src/styles.css` as semantic tokens (background, primary, accent, etc.) so Tailwind utilities stay on-palette.
- Fonts: Playfair Display (display), Cinzel Decorative (ornamental), Lora (body), Tiro Devanagari Hindi (accent) — loaded via Google Fonts in `__root.tsx` head.
- Gold→white→gold gradient text utility, ornamental SVG flourishes, lotus dividers, spinning mandala backgrounds.
- Dark-mode only (no white flash); body locked to `#1A0A0A` / cornsilk text.

## Components

`src/components/`
- `layout/Navbar.tsx` — frosted glass, scroll progress bar, gold underline links
- `layout/MarqueeRibbon.tsx` — CSS infinite-scroll ribbon (forward + reverse variants)
- `layout/CustomCursor.tsx` — gold marigold dot + trailing ring (desktop only)
- `layout/Footer.tsx` — "Made with ❤️ by the Goodbye Gang" with spinning marigolds
- `three/ParticleField.tsx` — 2000 gold/crimson particles, mouse-magnetic, drift upward; lazy + client-only; mobile reduces to 500
- `sections/HeroSection.tsx` — scroll-expand cinematic hero with title "Hasta La Vista", subtitle, CTA
- `sections/StatsStrip.tsx` — 600+ Students, 6+ Events, 50+ Team Members, count-up on inView, ornamental SVG borders, gold burst on completion
- `sections/VibeSection.tsx` — radial "Wheel of Vibes" (Music, Dancing, Shayri, Food, Instrumental, Pictures, Fun Games, More) with rotating mandala center; falls back to Bollywood-poster grid on mobile
- `sections/PillarsSection.tsx` — four full-bleed story panels (Photo Booth, Cultural Performances, Heartfelt Messages, Awards) with diagonal gold slash
- `sections/TeachersSection.tsx` — masonry/honeycomb layout of 6 hover-parallax teacher cards
- `cards/HoverParallaxCard.tsx` — 3D tilt with Framer Motion springs, double gold border, initials avatar, quote, star row, subtle per-teacher accent
- `cards/MemberCard.tsx` — Bollywood credit-block style for team members
- `effects/MagneticButton.tsx` — magnetic CTA
- `effects/RevealOnScroll.tsx` — fade/blur/translate on inView
- `effects/TextGradient.tsx` — gold→cream→gold clip-text
- `effects/SplitHeading.tsx` — GSAP letter-stagger headings (manual split, no SplitText premium)

## Content (all preserved verbatim)

- 6 teachers with names + quotes (Arpita Biswas, Nairanjana Chowdhury, Prof. Poulami Dutta, Utpal Das, Mrinal Kanti Nath, Dr. Tapan Chowdhury)
- All Goodbye Gang members across Executive / Technical / Finance & Sponsorship / Management & Resources / Creative & Logistics / Media & Photography
- Contact: hastalavista.tmsl@gmail.com, +91 97759 48268, Techno Main Salt Lake
- Slogans, hashtags, pillar copy, vibe items — all kept

## Libraries to install

`three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`, `gsap`, `@studio-freight/lenis`. shadcn primitives already present.

## Performance & responsiveness

- Three.js + Lenis only initialize after mount (SSR-safe)
- Particle count and 3D tilt disabled below 768px; mobile gets hamburger nav, stacked sections, simplified vibe grid
- Heavy sections in `Suspense`; images lazy-loaded; `will-change: transform` only on active elements

## Signature touches

Cinema-reel page transition, "Scroll to Begin" letters fly apart on hero expand, per-teacher accent tint, gold-particle burst on stat completion, ornamental footer with spinning marigolds.

## Out of scope (ask if you want these added)

- Working form submission backend (form will validate + show success toast; no email send)
- Real photographs (using the Unsplash URLs from the brief as placeholders)
- Auth / registration backend for the "Get Started" CTA (scrolls to a section instead)

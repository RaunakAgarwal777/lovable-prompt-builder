# Visual Refresh: Fonts & Colors

Since you left the styling calls to me, I'm going with a warm, playful OLIPOP-style direction that keeps the peach/masala feel the brand already has, but makes it richer and more deliberate.

## Direction

**Palette — Warm Masala Pop**
- Base: warm peach/cream backgrounds (kept, but layered — each section gets its own tint instead of one flat wash)
- Accents: saffron orange, chili red, deep spice green, electric cyan (from the cans)
- Ink: deep espresso brown instead of near-black, so text feels warm rather than harsh
- Section rhythm: peach → cream → mint-cream → saffron → deep green, so scrolling feels like a journey instead of one long beige page

**Typography — friendlier, punchier**
- Headings: Fraunces (a warm, slightly quirky display serif with real personality — replaces Playfair's formal-wedding tone)
- Body/UI: Plus Jakarta Sans (rounder, more modern and legible than Poppins at small sizes)
- Tighter heading leading, larger size jumps between heading levels, and uppercase micro-labels with wider letter spacing for the eyebrow/feature rows

**Polish passes**
- Hero: fix the excessive top gap so the headline and can lineup sit centered on first load; add a soft radial glow and subtle grain behind the product shot
- Buttons: pill buttons get a soft colored shadow and a lift-on-hover; secondary button gets a solid warm outline instead of the washed-out grey
- Cards (RUSHMORE cans + POPSI bottles): deeper rounded corners, colored soft shadows matching each flavor, price badge restyled as a clean solid chip
- Feature/stat rows: replace raw emoji (some render as boxes) with Lucide icons in accent-colored circles
- Swipe hint: styled as a proper pill with an animated arrow instead of pulsing grey text
- Waitlist + footer: richer contrast, bolder headline, better-spaced form

## Technical notes

- All colors added as HSL tokens in `src/index.css` and mapped in `tailwind.config.ts` (new tokens: section tints, ink, soft shadows, gradients). No hardcoded hex left in components — the current `bg-[#FDEBD3]` / `bg-[#FFF3E0]` literals in `HeroSection` and `WhyTurboSection` get replaced with tokens.
- Google Fonts link in `index.html` swapped to Fraunces + Plus Jakarta Sans; `font-display` / `font-body` utilities and `fontFamily` config updated so every existing usage picks up the new fonts automatically.
- Emoji-to-icon swap touches `WhyTurboSection`, `HeroSection` feature row, and the flavor card icon rows.
- Radius stays at the 24px+ minimum; shadows defined as reusable CSS variables.
- Copy, prices, product data, images, and section order are untouched.

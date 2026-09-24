# Visual Spec — Capsule Landing Hero

## 1. Reference viewport
Single desktop screenshot, approx. **1200 × 665px**. No mobile reference provided; responsive behavior below is a conservative extrapolation of the same composition.

## 2. Overall layout
Full-bleed sky-blue gradient background with a soft cloud texture, no card/panel container this time (unlike a typical bordered layout, the whole viewport IS the backdrop). A floating pill-shaped nav bar sits centered at the top over the sky. All hero content is centered underneath it.

## 3. Section structure
```
sky (full-bleed gradient + clouds)
└─ content
   ├─ header
   │  └─ nav-pill (glassy rounded bar)
   │     ├─ logo (overlapping-circles mark + wordmark), left
   │     ├─ nav links (Pricing / Company ▾ / Help ▾), middle
   │     └─ "Log in" pill button, right
   └─ hero (centered column)
      ├─ h1 headline (3 lines, 3rd line fades into background)
      ├─ fan of cards: left card, a 2-layer "ticket stack" in the
      │    middle, right card — overlapping the bottom of the headline
      ├─ 3-line supporting paragraph
      └─ single CTA: white pill "Download for iOS" with Apple mark
```

## 4. Dimensions (approx, desktop)
- Nav pill: ~370px wide, ~48px tall, fully rounded, floating with margin from top.
- Headline block: centered, no fixed max-width beyond viewport padding, 3 lines.
- Card fan container: ~640px wide × ~230px tall, slightly overlapping the headline's last line.
- Card A (left, "Manage your flights"): ~195 × 150px, ~20px radius.
- Card B back (Norway sliver): ~150 × 190px.
- Card B front (black boarding pass): ~168 × 190px, layered in front of/below the back card.
- Card C (right, "New Jersey / California"): ~172 × 172px.

## 5. Typography
- Typeface: a rounded, geometric sans with soft, friendly terminals and a fairly heavy default weight. Substituted with **Poppins** (Google Fonts) as the closest widely-available equivalent — see comment in `index.html`.
- Logo wordmark: ~16px, bold (700), white.
- Nav links: ~13.5px, medium (500), white at ~90% opacity.
- H1: ~68px, semibold (600), line-height ~1.12, center-aligned, white; the third line ("and documents") is rendered with a top-to-bottom white-to-transparent gradient (via `background-clip: text`) so it visually fades toward the cards below it, matching the reference.
- Subtext paragraph: ~16px, medium (500), white at ~88% opacity, three explicit short lines, center-aligned.
- Card copy: small (~11–14px), dark navy (`#1b2033`) on white cards, white on the black ticket card.
- CTA button label: ~14px, semibold (600).

## 6. Colors
- Sky gradient: light sky blue top-left (`#74bdf5`) deepening to a rich blue (`#0d3fb8`) toward the bottom-right, plus a soft white highlight glow in the upper-left.
- Cloud texture: soft white/light-blue blurred blob shapes at partial opacity, scattered along the edges (heavier at left/right/bottom, thinner center).
- Nav pill: translucent white (`rgba(255,255,255,0.16)`) with a blurred backdrop and a faint white border, glass/frosted effect.
- "Log in" button: slightly more opaque translucent white pill.
- Card text (white cards): near-navy `#1b2033`.
- Ticket "back" card: warm off-white/cream (`#f4f1e9`).
- Ticket "front" card: near-black (`#14161d`), white text.
- Accent blue used for small labels/times: `#2745c9`.
- Primary action pills on cards: solid navy/black fill, white text.
- Main "Download for iOS" CTA: solid white pill, navy text, small Apple glyph.

## 7. Cards / components
- Three "slots" fanned left-to-right, each independently rotated (left ≈ -7°, middle stack ≈ -5°/+3°, right ≈ +7°), echoing a hand-of-cards/boarding-pass composition, all overlapping the bottom edge of the headline.
- **Left card**: white, contains a short two-sentence description with two small inline icons (plane, phone) and a dark pill button "+ Add your stuff".
- **Middle**: two tickets stacked — a cream "Norway" ticket peeking out from behind, and a black "USA / WE1786" boarding-pass-style ticket in front, showing flight code, country, a large "25 Days" counter, a date, and a small plane glyph.
- **Right card**: white, a simple two-leg itinerary ("New Jersey ↗" / "California ↘") with times in blue/muted grey, and a dark pill button "Check it live".
- All cards share the same corner radius (~20px) and a soft drop shadow consistent with floating above the sky background.

## 8. Spacing
- Nav pill sits ~26px from the top edge.
- Headline starts ~60px below the header.
- Card fan overlaps up into the headline's last line by roughly -34px (negative margin), so cards visually sit "on top of" the fading third line.
- Subtext paragraph ~40px below the card fan; CTA button ~26px below that.

## 9. Responsive behavior
Not shown in the reference (desktop-only screenshot). Conservative interpretation implemented:
- ≤900px: headline scales down.
- ≤760px: nav pill wraps if needed; headline shrinks further; the card fan is uniformly scaled down (`transform: scale()`) rather than restructured, preserving the same fan composition; subtext line breaks are dropped so text reflows naturally.
- ≤480px: nav links are hidden (logo + login remain), headline shrinks further, card fan scales down more.
No new layout pattern is invented beyond scaling/wrapping the existing composition.

## 10. Animation / interaction observations
The reference is a static screenshot — no motion, transitions, or interaction states are visible. No animation was added beyond default browser link/button affordances. This matches the "no invented functionality" instruction.

## 11. Assets
No image assets were extracted from the source. The sky/cloud backdrop is fully CSS-generated (layered radial + linear gradients, blurred). The logo mark (two overlapping circles) is a simple inline SVG approximation of the reference's abstract "capsule" mark, since the exact original mark can't be reproduced. Country flags on the ticket cards use standard Unicode flag emoji (🇳🇴 / 🇺🇸) as the closest lightweight, non-proprietary stand-in for the small flag chips in the reference. No files were placed in `assets/` — everything is CSS/SVG/emoji-based to keep the prototype self-contained and easy to port.

## 12. Important implementation details
- Layout uses normal flow (flexbox for header/nav/subtext) except for the card fan, which uses `position: absolute` inside a `position: relative` container — the one place the reference genuinely requires free-floating, overlapping, rotated, layered elements.
- The fading third headline line uses a CSS gradient text-clip rather than an opacity trick on the whole line, so the fade reads as part of the sky rather than washed-out text.
- Colors and type scale are defined as CSS custom properties / literal values at the top of `styles.css` for easy porting to a design-token system.
- Class names are semantic and structural (`.hero-heading`, `.cards-fan`, `.card-a`, `.card-b-back`, `.card-b-front`, `.card-c`) rather than presentational, so the markup ports cleanly to a component-based framework.

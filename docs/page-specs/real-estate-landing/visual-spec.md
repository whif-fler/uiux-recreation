# Visual Specification — Brickwise Landing Page

## Reference
- Single reference screenshot, `919 × 1256px`, appears to be a desktop viewport (no responsive nav collapse, 2-column feature grid, decorative map markers all visible).
- Full page capture from top of header through the bottom of the "Reason to choose us" feature grid. No footer visible in the source.
- Reference likely represents a real design tool export (Figma/Framer) at this exact width rather than a live-browser screenshot — treated as the literal target width for pass 1.

## Overall layout
- Single column page, all sections centered within a shared horizontal padding of **60px** (left/right) at this reference width.
- Sections top→bottom: Header → Hero (search + map + featured listing card) → Stats bar → Features (2-column: copy left / card grid right).
- No sticky header observed; static assumption made (deliverable page keeps it static).

## Dimensions (estimated, px, at 919 reference width)
- Header height: 68px.
- Hero top padding ~36px, search bar ~332–380px from top, featured card ~380–650px (incl. drop-shadow), pin marker centered ~660px.
- Stats bar: ~75px vertical padding block, full-bleed 1px top/bottom hairline borders.
- Features section: ~68px top/bottom padding.
- Property card: **208px wide**, image block 100px tall, body padding ~10–11px.
- Small map avatar markers: **32px diameter**, white 2px ring, drop shadow.
- Feature cards (top row): ~190px wide each, ~150px tall, 24px corner radius.
- Wide feature card ("Invest Where it Matters"): full right-column width (~390px), **160px tall**.

## Typography
- Display/heading font: geometric, rounded-terminal grotesque (closest open equivalent: **Plus Jakarta Sans**, weight 700). Used for: nav logo, H1, stat numbers, card titles, feature titles.
- Body font: **Inter** (400/500/600) — paragraph copy, nav links, field labels, meta text.
- H1 ("Easily Invest in Real Estate to Grow [icon] Your Future"): ~46px / 1.12 line-height / -0.02em tracking, centered, wraps to exactly 2 lines with the icon inline mid-second-line.
- Section heading ("Discover the value..."): ~34px/1.25, left aligned, wraps to 3 lines within a ~380px measure.
- Body copy: 14–16px, #555 secondary gray, sentence case, no uppercase eyebrow-label tricks except the genuinely small "TOTAL INVESTED" style stat captions (11px, uppercase, letter-spaced, muted gray — this one is a real visual treatment in the source, not invented).
- Stat numbers: ~34px bold, tight tracking, paired inline with a 2-line uppercase caption.

## Colors
| Token | Approx value | Usage |
|---|---|---|
| `--color-text` | `#111111` | headings, primary text, buttons |
| `--color-text-secondary` | `#555555` | paragraph copy |
| `--color-text-muted` | `#9a9a9a` | field labels, stat captions, meta |
| `--color-accent` | `#e05a3d` | play-button dot, "Reason to choose us" eyebrow, $147 price pill |
| `--color-green` | `#3fa24b` | price delta "(10.8%)" |
| `--color-surface` | `#f6f6f6` | feature-card backgrounds |
| `--color-border` | `#ebebeb` | hairlines, dividers |
| Background | `#ffffff` | page background throughout |

No gradients, glassmorphism or colored shadows in the source beyond a soft neutral drop-shadow under the floating property card and photo stack.

## Components
- **Nav**: logo mark (4-bar bar-chart glyph) + wordmark, 4 text links (first is active/underlined), pill "Login" button (outlined) + pill "Join Now" button (solid black, trailing chevron icon).
- **Eyebrow pill**: small orange circular play-icon + "What is Arrived?" label, centered above H1.
- **Search bar**: single pill-shaped white bar with 3 label/value fields separated by hairline dividers, terminated by a circular black icon button.
- **Map backdrop**: a very faint, decorative city-map texture behind the hero (street grid + place labels in the source). Recreated here as a light abstract grid pattern (see Assets) rather than a real map tile, per the "no cheating / no screenshot slicing" constraint — closest faithful non-copyrighted substitute.
- **Map avatar markers**: 6 small circular photo pins scattered across the map, plus one dark circular "count" pin (value "20") hanging below the property card like a map-pin teardrop.
- **Featured property card**: image (with "New" pill badge + carousel dots) → title → location row (pin icon) → meta row (area / bed / bath icons, pipe-separated) → price + delta (green) row with an "Invest Now" pill button.
- **Stats bar**: 4 stat groups, big bold number + small 2-line uppercase caption, separated by vertical hairline dividers, evenly spaced across the container.
- **Features — left column**: small orange eyebrow, 3-line headline, body paragraph pinned near the bottom, dark pill CTA "Find the best for you →".
- **Features — right column**: 2 small square cards (Smart Suggestions w/ search pill icon; 99% Trusted Investor w/ black rounded-square shield-check badge) + 1 wide card (Invest Where it Matters) combining a dotted map texture, an orange "$147" pill, a dashed curved arrow, and 2 stacked rotated photo cards (one with a visible caption "Modern Architectural Mar…", "Catonsville, MD").

## Spacing
- Section-to-section vertical rhythm is generous (~68–90px) with hairline borders marking the stats-bar boundaries only; other sections use whitespace alone, no borders.
- Card internal padding is tight and consistent (~18–20px) across the 3 lower feature cards.
- Search-bar fields use ~22px horizontal padding between label groups with slim 1px/34px-tall dividers.

## Responsive behavior
- Reference only supplies the ~919px desktop view. Implemented adaptation:
  - **≥760px**: full layout as designed (2-col features, all map markers visible, unwrapped search bar).
  - **560–760px**: features collapse to 1 column, map markers hidden (decorative, non-essential), search bar wraps onto multiple rows, stats wrap 2×2.
  - **≤560px**: nav links hidden (logo + CTA only), feature card row stacks to 1 column, wide card content stacks (text above visual).
- No radical mobile redesign — same section order and visual language preserved throughout, per brief.

## Assets
- **Hero map background**: recreated as a non-photographic decorative grid tint (`repeating-linear-gradient` + radial fade mask) — deliberately abstract rather than a copied map tile/screenshot.
- **Featured property photo**: no licensed photo available; recreated as an SVG "dusk glass-house" illustration (gradient sky, silhouette massing, warm interior-glow window blocks) approximating the composition, tone and warm/cool palette of the source photo. Swap for a licensed photo in production.
- **Small "Modern Architectural…" photo**: same approach, a simpler SVG forest-house illustration.
- **6 map avatar markers**: flat color-fill circles standing in for the source's small circular photo thumbnails (color chosen per marker only for visual variety, not semantic).
- **Icons**: all hand-built inline SVG (chevron, search, pin/location, area, bed, bath, shield-check, arrow) at matching stroke-width (~1.6–2px) and visual weight.

## Motion (for the future Framer Motion port)
- No animation is visible in the static reference. Reasonable, restrained opportunities:
  - Search bar fields: subtle focus/hover state (background tint) on each field.
  - "Invest Now" / "Join Now" / "Find the best for you": standard button hover (slight scale or background shift).
  - Featured property card: gentle entrance (fade + 8px slide-up) on hero load — a single orchestrated moment, not per-section scroll reveals.
  - Carousel dots on the property card imply a real image carousel — left as static in this HTML prototype, flagged for interactive behavior in the React port.
  - Dashed arrow / $147 pill in the "Invest Where it Matters" card could gently pulse or draw-on once, on scroll-into-view, as the single "memorable" motion moment for the features section.

## Important visual details
- The inline icon inside the H1 ("...to Grow [icon] Your Future") is a small circular photo/illustration (dark navy sky over a tan/wood plane with a white upward arrow) — recreated as an SVG badge, not a font glyph or emoji.
- The property-card carousel dots (5 dots, first active/pill-shaped) indicate multiple photos per listing.
- The black diamond "20" pin beneath the card is a rotated-square (45°) pin shape, not a plain circle — its label text is counter-rotated to stay upright.
- Stat captions use two stacked short lines ("TOTAL / INVESTED") rather than one wrapped line — line breaks are deliberate, not incidental wrapping.
- The wide feature card's dotted "map" texture, price pill and dashed arrow all sit in the card's upper-left, independent of and behind the photo stack, which is anchored to the right edge and bleeds slightly outside the card's implied padding.

## Known uncertainties
- Exact font family cannot be verified from a raster image; Plus Jakarta Sans / Inter are close visual substitutes for the rounded-grotesque display face and the plain-grotesque body face seen in the source.
- Exact hex values for the accent orange, greens and grays are estimated from pixel sampling on a compressed `.webp` and may be off by a few units; treat as a close approximation, not a certified brand palette.
- The real map backdrop and both listing photographs are unknown/unlicensed source images — placeholders are used and flagged above.
- Hover/active/focus states, real carousel behavior, and any header scroll behavior are not visible in a single static screenshot and are therefore only inferred, not confirmed.

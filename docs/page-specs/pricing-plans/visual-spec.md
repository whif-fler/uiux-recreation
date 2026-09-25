# Visual specification

## Reference
- Source: supplied 1025 × 814 screenshot, aspect ratio approximately 1.259:1.
- The screenshot shows the upper portion of a pricing page. The bottom edges of both pricing cards are cropped by the viewport.
- Estimated reference viewport: 1025 × 814 CSS pixels at 1× scale.
- No conventional logo or full navigation bar is visible. The only header control is a top-right “Schedule a Call” text link with a thin right arrow.

## Overall layout
- Page background: very light warm-neutral gray.
- Header occupies approximately 108 px of vertical space.
- Hero copy begins at x ≈ 107 px. The hero text block is approximately 790 px wide.
- Pricing cards begin at y ≈ 493 px, with 51 px outer page margins and an 18 px inter-card gap.
- Each card is approximately 455 px wide at the reference viewport.
- The composition is intentionally left-weighted in the hero and nearly full-width in the cards.

## Important dimensions
- Header link: top ≈ 67 px; right ≈ 80 px.
- Eyebrow: x ≈ 107 px; y ≈ 114 px; height ≈ 15 px.
- Headline top: y ≈ 165 px.
- Headline font size: ≈ 57 px; line height ≈ 66–67 px.
- Creative-tool tile group: ≈ 161 × 58 px, inserted inline on headline line two.
- Annual toggle artwork: ≈ 105 × 52 px.
- Pricing grid top: ≈ 493 px.
- Card top radius: ≈ 25 px.
- Card internal padding: ≈ 23–25 px.
- Plan icon outer tile: ≈ 64 × 64 px.
- CTA field: full card content width; height ≈ 73 px; radius ≈ 18 px.

## Typography
- Practical font: Arial/Helvetica system sans, selected to approximate the neutral grotesk appearance without external dependencies.
- Headline: 57 px, regular 400; highlighted words 600; line height 1.17; letter spacing about -3.35 px.
- Headline muted text: #9c9c9c. Highlighted text: #050505.
- Eyebrow: 10 px, regular, compact line height, uppercase, thin gray border.
- Header action: 16 px; gray intro text with darker “Call”.
- Plan titles: 29 px, semibold, tight tracking.
- Prices: 27 px; amount dark, “/month” gray.
- CTA labels: 16 px; lead word gray, emphasized word dark.
- Feature copy: 14 px, gray.
- Headline line breaks are forced at the same visual points as the supplied reference.

## Colors
- Page background: `#f1f1f1`.
- Card background: translucent/off-white near `#fbfbfb`.
- Primary ink: `#050505`.
- Headline muted gray: `#9c9c9c`.
- Secondary copy: `#717171` to `#888888`.
- Hairline borders: approximately `#e6e6e6`.
- Toggle gradient: cyan/blue through purple to pink.
- Tool accents: pink Dribbble-like ball, blue Bē text, black abstract mark. These are generic recreated symbols, not protected logos.

## Components
### Header action
- A simple text link aligned high and right.
- Thin horizontal arrow, drawn as inline SVG.

### Hero
- Small outlined pricing label.
- Four-line oversized headline with exact visual line breaks.
- Three overlapping, individually rotated white tool tiles interrupt line two.
- A colorful pill-shaped toggle interrupts line four.

### Pricing cards
- Two equal-width cards in a two-column grid.
- Large round-corner top edges; bottom is outside the reference crop.
- Each card has a dark app icon tile, plan name, right-aligned price, bordered CTA row, and ticked feature list.
- Free plan contains one visible feature; Personal contains three visible features.

## Spacing
- Hero left offset: 107 px.
- Eyebrow-to-headline gap: about 32 px.
- Hero-to-card region gap: about 73–75 px from final baseline area to card top.
- Pricing grid side margins: 51 px.
- Card gap: 18 px.
- Card heading-to-CTA gap: 22 px.
- CTA-to-feature-list gap: 21 px.

## Responsive behavior
- Above 780 px, preserve the two-column cards and reference proportions.
- At 780 px and below, reduce hero side margins to 24 px and stack cards.
- Headline type scales with `clamp()` and can wrap conservatively where the fixed desktop line lengths no longer fit.
- Decorative inline assets keep their proportions and shrink slightly rather than being removed.
- At narrow phone widths, card typography and icon spacing tighten while retaining the same hierarchy.

## Assets
- No raster assets are required by the implementation.
- All visible icons and decorative elements are recreated with CSS and inline SVG.
- `assets/` is intentionally empty because using the screenshot or screenshot-derived slices is prohibited.

## Motion and interaction
- The static screenshot does not prove any animation.
- Conservative opportunities for a later React/Framer Motion port: extremely subtle hover lift on the three tool tiles, arrow translation on the scheduling link, and minor CTA border darkening. These are opportunities only, not implemented behavior required by the reference.
- No entrance animation, carousel, parallax, or continuous motion is inferred.

## Important visual details
- The creative-tool tiles have slightly different rotations and overlap order.
- The white knob in the annual toggle sits near the right edge and casts a small shadow.
- The card icons use an outer pale shell plus an inset black rounded-square tile.
- Pricing card surfaces are almost white but remain distinguishable from the page gray.
- Borders and shadows are deliberately subtle and should not be replaced by stronger generic presets.

## Known uncertainties
- Exact original font family is not identifiable from the screenshot alone.
- The screenshot does not reveal card bottoms, page footer, hover states, or behavior below the fold.
- The exact brand identities of the three inline tool marks are visually suggestive but not required for faithful layout; generic SVG/CSS recreations are used.
- Blur kernels and shadow values are estimated from the raster reference.

## Final audit and self-critique
- Largest remaining uncertainty: exact glyph metrics of the original typeface.
- Second: exact tool-tile logo geometry.
- Third: exact card surface opacity and shadow softness.
- Fourth: minor anti-aliasing differences between rendering engines.
- Fifth: content below the viewport is unavailable and therefore deliberately not invented.
- No screenshot background, screenshot slice, canvas reconstruction, extra section, or invented illustration is used.

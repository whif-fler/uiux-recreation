# Visual Specification

## Reference
- Source: supplied 1282 x 754 screenshot of a single above-the-fold portfolio marketplace landing page.
- Estimated viewport: 1282 x 754 CSS pixels, 1:1 screenshot scale.
- Visible crop: complete header and hero; the lower edge ends immediately after the primary calls to action.
- Background is a very light warm gray with a subtle brighter center, not pure white.

## Overall layout
- Full-width header, approximately 88 px high.
- Brand sits 43 px from the left. Navigation is a compact horizontal run in the upper-right half. Two circular utility controls sit at the far right.
- Hero is centered. Headline begins near y=137 and is split into exactly two lines.
- Artwork is an overlapping, slightly irregular row of seven square-ish cards centered beneath the headline.
- Supporting copy and two calls to action are centered under the artwork.

## Dimensions and positioning
- Header: 1282 x 88 px; horizontal inset 43 px.
- Brand mark: about 28 x 28 px; label roughly 20 px.
- Headline: max width about 820 px; 71 px font; 75 px line height.
- Art stage: 930 x 298 px; starts roughly 38 px below heading.
- Cards: nominally 184 x 192 px, 13 px corner radius. Horizontal overlap is substantial, with rotations from about -10 degrees to +10 degrees.
- Handles: approximately 92 x 35 px and 101 x 35 px, speech-tail included.
- Description: 14 px type, 22 px line height.
- Primary button: 143 x 38 px, fully pill-shaped.

## Typography
- Closest practical local family: Arial/Helvetica sans-serif. The reference resembles a neutral modern grotesk.
- Brand: 20 px, 700, slightly tight tracking, black.
- Navigation: 12 px, 600, compact tracking, black.
- Hero title: 71 px, 500, 1.06 line height, -4.5 px letter spacing, black. Forced line break after “your”.
- Supporting copy: 14 px, 400, 22 px line height, slight negative tracking. Reference wraps into two centered lines.
- Buttons: 12 px, 400.

## Colors
- Page field: `#f7f7f6` with a subtle radial lift toward white.
- Primary text and primary CTA: approximately `#0d0d0d` / `#111111`.
- Brand mint: approximately `#77c8c0`.
- Left name tag: approximately `#2467dc`.
- Right name tag: approximately `#5aaf91`.
- Card art uses red, blue, yellow, orange, green, cream, black and white with deliberately varied saturation.

## Components
### Header
- Custom three-part mint mark and bold wordmark.
- Six text navigation links. “Create strategy” contains a small dark circular glyph.
- Account and sun/theme controls are thin-stroke inline SVGs in white circular surfaces.

### Hero
- Two-line title with unusually tight tracking.
- Seven original SVG art cards. Art is intentionally mismatched and poster-like to preserve the reference’s marketplace-gallery character without copying protected works.
- Cards overlap and are individually rotated. Outer cards lean outward, central cards are nearly vertical.
- Two floating creator handles appear above the card row, each with a triangular speech tail.

### Calls to action
- Solid black pill for the paid join action.
- Borderless text-only secondary action.

## Spacing
- Header brand top alignment centers at about y=49.
- Hero top padding after header: about 42 px.
- Headline-to-art gap: 38 px.
- Artwork stage to body copy: visually near-zero because the stage includes its own vertical extent and drop shadow.
- Copy-to-buttons gap: 23 px.
- Button gap: 28 px.

## Responsive behavior
- Reference viewport remains the primary fidelity target.
- Below 900 px, navigation is hidden conservatively while brand and utility controls remain. Headline scales with `clamp()`. The intact card composition scales down as a grouped artwork rather than being redesigned.
- Below 640 px, the card group scales further. Body copy loses the forced line break. The secondary theme control is hidden to avoid collision.
- No radically different mobile content or invented sections are introduced.

## Assets
- `assets/art-1.svg` through `assets/art-7.svg`: original poster/collage artwork used as actual image elements.
- Brand and utility icons are inline SVG.
- No screenshot regions, screenshot backgrounds, canvas painting, remote images, or protected logos are used.

## Motion and interactions
- The screenshot provides no direct evidence of animation. No entrance or floating motion is implemented.
- Conservative future opportunities: 120–180 ms opacity change on navigation hover, 150 ms button color change, and a very small 1–2 px card lift on hover. These are not active in the prototype because the strict reference does not show them.

## Important visual details
- The art row is not geometrically uniform; overlap, z-order, and rotation are intentionally uneven.
- The stage shadow is broad, soft, and mostly visible beneath the row.
- The right handle is rotated clockwise and the left handle is nearly level.
- Corner radii are modest, not oversized.
- The cursor visible in the source screenshot is not recreated because it is capture-state chrome, not interface content.

## Known uncertainties
- Exact source font is unavailable; Arial/Helvetica is the closest deterministic system fallback.
- Original card artworks are not available. The implementation uses newly created SVG compositions with matching palette, density, dimensions and cropping behavior.
- Fine-grained color sampling can vary due to screenshot compression and anti-aliasing.
- Header navigation center is visually offset right; the implementation reproduces that relation rather than mathematically centering navigation across the viewport.

## Final self-critique
The largest unavoidable differences are the exact artwork contents, exact proprietary font metrics, tiny anti-aliasing differences, some card overlap contours, and the source screenshot’s precise soft-light texture. Measurements most dependent on estimation are individual card x offsets, card rotations, and the precise navigation anchor. No visible section was added or removed.

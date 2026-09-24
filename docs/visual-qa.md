# Visual QA Checklist

Reusable checklist for every screen. A page must not be marked visually complete
until every applicable item below has been checked against the reference image at
the appropriate viewport sizes.

Record per check: reference value vs. actual value, and whether it matches.

## Setup

| Item | Reference | Actual | Match |
| --- | --- | --- | --- |
| Reference viewport (width × height) | | | |
| Actual viewport (width × height) | | | |
| Device pixel ratio / zoom | | | |
| Reference image opened | | | |

## Layout

- [ ] Overall composition matches the reference
- [ ] Container width matches
- [ ] Section dimensions match
- [ ] Spacing between sections matches
- [ ] Padding (page and component) matches
- [ ] Alignment matches (edges, baselines, centers)
- [ ] Grid/flex structure matches the reference structure

## Typography

- [ ] Font family matches
- [ ] Font size matches
- [ ] Font weight matches
- [ ] Line height matches
- [ ] Letter spacing matches
- [ ] Text hierarchy matches (headline / subtitle / body / label order)
- [ ] Text content matches the reference exactly

## Color and surface

- [ ] Background colors match
- [ ] Text colors match
- [ ] Gradients match (direction, stops, opacity)
- [ ] Borders match (color, thickness, style)
- [ ] Border radius matches
- [ ] Shadows match (offset, blur, spread, color, opacity)

## Assets

- [ ] Images/assets present and correct
- [ ] Image sizing and cropping match
- [ ] Icons match in style, size, and weight
- [ ] Logos and avatars match

## Layering

- [ ] Layering / z-index matches (overlaps, stacking order)
- [ ] No unintended overflow or clipping

## Interaction and motion

- [ ] Responsive behavior matches at mobile width
- [ ] Desktop layout is not merely shrunk on mobile
- [ ] Hover/focus/active states present where the design implies them
- [ ] Animation matches the reference feel and timing
- [ ] Reduced-motion preference respected where practical

## Accessibility

- [ ] Semantic HTML landmarks present
- [ ] Interactive elements are real, focusable elements
- [ ] Accessible names/labels present for icon-only controls
- [ ] Color contrast acceptable for text
- [ ] Keyboard navigation works

## Health

- [ ] No console errors
- [ ] No runtime errors
- [ ] No failed network requests for assets
- [ ] Production build succeeds for the route

## Sign-off

| Screen | Viewport | Checked by | Date | Result |
| --- | --- | --- | --- | --- |
| | | | | |

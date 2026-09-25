# Visual Specification

## Reference
The reference is a monochrome/light-gray landing-page hero for a product named “Stage.” The screenshot measures **1200 × 666 px** (aspect ratio about **1.802:1**) and appears to represent a desktop browser viewport of the same CSS dimensions. The image crops the phone at the bottom edge, so only the phone’s upper approximately 460 px are visible in the screenshot. No footer or below-fold section is visible.

## Overall layout
- Off-white page background, approximately `#fafafa`.
- Centered desktop content width: approximately **1014 px**, leaving about **93 px** on each side at 1200 px.
- Header: approximately **88 px** tall.
- Hero begins immediately below the header and occupies the remaining screenshot height.
- Left text column starts at x≈93 px and y≈214 px.
- Phone artwork starts at x≈710 px and y≈204 px, partly cropped by the bottom viewport edge.
- Two very large, low-contrast circular outlines sit behind the phone and extend beyond the viewport.

## Dimensions and positioning
- Header brand baseline area: x≈93 px, y≈42 px.
- Navigation starts x≈193 px; links separated by approximately 40–44 px.
- Header controls end around x≈1106 px.
- Hero headline: x≈93 px, y≈216 px, width≈520 px, two fixed lines.
- Description: y≈320 px, three lines, line-height≈27 px.
- CTA row: y≈419 px; controls approximately 84×35 px and 168×35 px.
- Social proof label: y≈526 px.
- First logo row begins around y≈565 px; second row begins around y≈620 px.
- Phone outer shell: approximately 300 px wide, with 40–42 px top corner radii.
- Visible phone screen content inset: approximately 33 px from each side.
- Avatar: approximately 52×52 px.
- Theme button: approximately 35×35 px.

## Typography
- Practical local stack: `Arial, Helvetica, sans-serif`. This is intentionally dependency-free. The reference resembles a neutral modern grotesk; Arial gives close metrics without network loading.
- Brand: 18 px, 700, normal line-height, black.
- Header links: 12 px, 400, dark gray.
- Headline: 36 px, 500, 1.13 line-height, -1.2 px tracking, black. Explicit line break after “portfolio,” preserves the reference wrap.
- Hero body: 15.5 px, 400, 1.72 line-height, `#555`; desktop-only line breaks preserve the three-line composition.
- Buttons: 12 px; dark primary uses white text and a near-black fill.
- Social-proof label: 12 px, 700.
- Phone title: 20 px, 700, 1.32 line-height, approximately -0.55 px tracking, fixed three-line wrap.
- Phone body: 14 px, 400, 1.43 line-height, `#555`.

## Colors and effects
- Page: `#fafafa`.
- Phone screen: `#ffffff`.
- Primary ink: `#111111`.
- Body text: `#555555`.
- Partner marks/icons: approximately `#777777` to `#9b9b9b`.
- Button: `#212121`.
- Borders: `#d5d5d5` to `#efefef`.
- Orbit strokes: gray at about 25% opacity.
- Effects are restrained: button shadows are 1–4 px and phone side shadows are wide but extremely faint. No glass effect is used.

## Components
### Navigation
A single flex row with brand, three plain navigation links, and two right-aligned controls. The Contact control is outlined; Sign up is filled.

### Hero
A desktop left/right composition. The left side remains in normal document flow. The phone and circular artwork are positioned layers because the reference contains deliberate overlaps and viewport cropping.

### Buttons
Rounded rectangles with about 7 px radius. The secondary CTA contains a 20 px outlined circular play icon.

### Social proof
Two rows of muted logo-like wordmarks. Since exact third-party logo assets were not supplied, the implementation uses non-image typographic approximations rather than copying protected logo artwork.

### Phone artwork
A layered HTML/CSS phone shell with side controls, top notch, speaker, white screen, floating theme button, custom abstract SVG portrait, text, and four inline SVG social icons.

## Spacing
- Header horizontal page inset: 93 px at the reference width.
- Header brand-to-nav gap: about 55 px.
- Headline-to-description: 24 px.
- Description-to-actions: 26 px.
- Actions-to-social-proof: 70 px.
- Social proof label-to-first logo row: 24 px.
- Logo row gap: about 22 px vertically.
- Phone content top inset: about 96 px beneath the screen top.
- Avatar-to-phone-title: 27 px.
- Phone-title-to-body: 20 px.

## Responsive behavior
- Above 900 px, the reference desktop composition is retained.
- Below 900 px, navigation links are hidden, the hero becomes a vertical stack, and the phone moves into normal flow below the copy. This is a conservative adaptation rather than a redesigned mobile experience.
- Below 520 px, the Contact control is hidden, typography reduces slightly, logos wrap, and the phone is reduced modestly while retaining its proportions.

## Assets
- `assets/avatar.svg`: custom, non-branded abstract portrait used for the visible circular profile image.
- All interface icons are inline SVG.
- Partner marks are text treatments because exact brand files were neither supplied nor required to reproduce the role and visual mass.

## Motion and interaction
The static screenshot does not demonstrate motion. The prototype therefore has no animation. For a later Framer Motion implementation, only restrained hover opacity/color transitions on links and buttons are reasonable. The phone should not float, rotate, or parallax without additional evidence.

## Important visual details
- The phone is intentionally cropped at the lower screenshot boundary.
- Large circular outlines pass behind both the phone and the left-side whitespace.
- The phone notch is pale gray and overlaps the white screen.
- The theme toggle shadow is stronger than the other shadows but remains soft.
- The phone body uses a slight neutral gradient to suggest its rim without introducing a decorative gradient into the page.

## Known uncertainties
- The exact source font cannot be proven from the screenshot.
- Exact original partner-logo artwork is unavailable and intentionally not copied.
- The profile photograph in the reference is replaced with a custom abstract SVG portrait.
- Only one viewport is supplied, so responsive behavior is inferred conservatively.
- The screenshot does not reveal the phone’s bottom edge or any below-fold page content.

## Validation notes
The implementation was checked at 1200×666. The key alignment targets were headline x/y position, header baseline, phone width and top position, circular-outline placement, CTA dimensions, phone typography, and bottom cropping. The largest unavoidable differences are exact font metrics, precise portrait content, exact partner logos, some phone hardware highlights, and subpixel antialiasing.

BRICKWISE — HTML/CSS RECREATION PROTOTYPE
==========================================

WHAT THIS IS
------------
A plain HTML/CSS recreation of the supplied reference screenshot
(a real-estate investing landing page, "Brickwise"), built as a visual
and structural blueprint for a later Next.js + TypeScript + Tailwind +
Framer Motion implementation.

Reference viewport: 919px wide (the exact width of the supplied
screenshot). The layout was built and pixel-checked against that
width first, then given conservative responsive behavior for other
sizes. See visual-spec.md for full measurement notes.

FILES
-----
index.html        Semantic markup: header, hero, stats bar, features.
styles.css        All styling. CSS custom properties for the shared
                   design tokens (colors, fonts, radii) live at the
                   top of the file under :root.
visual-spec.md     Full forensic breakdown of the reference: layout,
                   dimensions, type, color, components, spacing,
                   responsive plan, assets, motion opportunities, and
                   explicitly-flagged uncertainties. Read this before
                   porting — it explains *why* things are sized the
                   way they are, not just what the CSS says.
assets/            Hand-built SVG placeholders:
                     - property-hero.svg   (main listing card image)
                     - property-small.svg  (small stacked-photo image)
                     - marker-house-1..5.svg (map avatar pins)

HOW TO VIEW
-----------
Open index.html directly in a browser — no build step, no server,
no dependencies beyond two Google Fonts loaded via <link> tags
(Plus Jakarta Sans, Inter).

WHAT'S REAL vs. PLACEHOLDER
----------------------------
- Layout, spacing, type scale, color values, component structure,
  and icon shapes were reconstructed directly from the reference
  image (see visual-spec.md for the pixel measurements used).
- The two property photographs and the hero's faint city-map
  backdrop are NOT the original assets — no licensed photography or
  map tiles were available, and the brief explicitly disallows
  slicing/embedding the source screenshot as a fake asset. They are
  replaced with:
    - simple SVG illustrations (dusk glass-house silhouette, forest
      house silhouette) approximating the tone/composition of the
      originals — swap these for licensed photography in production.
    - a decorative CSS-gradient "map" texture standing in for a real
      map tile/screenshot.
- The 6 small circular map markers are flat-color placeholder SVGs
  standing in for the source's small circular photo thumbnails.

PORTING NOTES FOR THE NEXT AGENT
---------------------------------
- All color, spacing and radius values are expressed as CSS custom
  properties at the top of styles.css — map these directly to
  Tailwind theme tokens.
- The property card, feature cards, and the "Invest Where it
  Matters" wide card each use only one shared border-radius/shadow
  language — keep that consistency when converting to components.
- Layout is flexbox/grid throughout except the hero's map markers,
  the featured property card's absolute "20" pin, and the wide
  feature card's internal photo-stack/price-pill/dot-map layer,
  which are intentionally absolutely positioned to reproduce the
  reference's overlapping/floating composition — see visual-spec.md
  "Layout structure" notes before "fixing" these into normal flow.
- Motion is NOT implemented here (plain HTML/CSS, no animation
  library). See visual-spec.md's "Motion" section for concrete,
  restrained Framer Motion opportunities identified during review —
  a single entrance moment for the hero card, standard button hover
  states, and one small orchestrated moment in the features section,
  rather than per-section scroll-reveal animations everywhere.
- Text content (copy, numbers, labels) is reproduced verbatim from
  the reference; treat it as real content, not lorem ipsum.

VALIDATION PERFORMED
---------------------
This prototype was rendered at 919×1256 with a headless browser and
compared side-by-side against the reference screenshot multiple
times during development, with layout, spacing, and type sizes
adjusted each pass based on pixel-grid measurements taken directly
from the source image (not estimated by eye). Remaining known
discrepancies are listed under "Known uncertainties" in
visual-spec.md.

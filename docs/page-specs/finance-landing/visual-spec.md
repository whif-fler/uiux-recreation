# Visual Spec — FinSuite Landing Page

## 1. Reference viewport
Single tall desktop screenshot, approx. **640 × 914px** capture (scales to a standard ~1200px+ desktop layout). No mobile reference provided.

## 2. Overall layout
A white-background marketing page built from five stacked full-width sections, each with an inner max-width content wrap (~1160px): header, hero, a light-grey trust bar, a centered heading, and a light-grey rounded feature panel. No outer card/frame — sections run edge-to-edge with alternating white/light-grey backgrounds to separate them.

## 3. Section structure
```
body
├─ header (white, bottom hairline border)
│  logo | nav links | Log In + Get Started
├─ hero (white)
│  ├─ left: badge, 3-line heading (one word linked/underlined),
│  │        subtext, "Get Started" button
│  └─ right: dashboard mockup card (traffic-light dots, 2 subscription
│             mini-cards, balance block, mini bar chart w/ tooltip)
├─ trust-bar (light grey band)
│  "Trusted by users across the platform" + 3 rating rows
├─ empower (white)
│  centered 2-line heading, one word in blue
└─ feature (white, contains one big light-grey rounded panel)
   panel: green balance-card mockup (left) + heading/subtext/
          divider/2x2 checklist (right)
```

## 4. Dimensions (approx, desktop / 1200px content width)
- Header height: ~70px, bottom border.
- Hero: two-column grid, left ~46%, right ~54%, large gap.
- Dashboard mockup card: max-width ~280–320px, ~20px corner radius.
- Trust bar: ~40px vertical padding.
- Empower heading block: ~78px top padding, heading max-width ~520px.
- Feature panel: full content width, ~24px corner radius, ~44px internal padding, two-column grid (~45/55 split).
- Green balance card inside panel: rounded ~18px, fills its column.

## 5. Typography
- Typeface: bold geometric-grotesk sans for headings, lighter matching sans for body (visually close to "General Sans"/"Satoshi" — not on Google Fonts). Substituted with **Inter** as the closest widely available equivalent.
- Logo wordmark: ~16px, bold (700).
- Nav links: ~13.5px, medium.
- Hero H1: ~44px, extra-bold (800), line-height ~1.16, three explicit short lines; the word "Financial" is styled as a blue underlined link-like word within an otherwise black headline.
- Hero subtext: ~14px, regular, muted grey, max-width constrained (~380px).
- "Empower…" H2: ~32px, bold, centered, two lines; "Empower" in blue, rest black.
- Feature heading: ~27px, bold; the word "Analytics" in blue.
- Small dashboard labels ("My Balance", axis labels, action-icon captions): 8–12px, medium, muted grey.
- Balance amount: ~24px, extra-bold.
- Trust numbers (4.8 / 4.9 / 4.8): ~20px, bold.

## 6. Colors
- Background (page): `#ffffff`
- Section band (trust bar / feature wrap background): light grey `#f5f6f8`
- Feature panel fill: slightly darker light grey `#f1f2f5`
- Primary text: near-black `#14161a`
- Muted/body text: `#6b7280`
- Accent blue (links, "Financial", "Empower", "Analytics", highlighted chart bar): `#2f6bf0`
- Badge pill: background `#f1ecfd`, text `#8a5cf6` (soft lavender/purple)
- Primary button: solid near-black fill, white text, fully rounded
- Spotify mini-card: blue gradient (`#4f7cff` → `#2f57e0`), white text
- Netflix mini-card: white with red "N" badge (`#e50914`)
- Green balance card: lime-green gradient (`#c7ef5c` → `#a9e14a`)
- Chart highlight bar: purple-to-blue gradient (`#7c5cff` → `#2f6bf0`)
- Rating stars: gold (`#f5b400`) for Chrome store, orange-red (`#e0522e`) for Producthunt, green (`#00b67a`) for Trustpilot
- Checklist check icons: green circle (`#22c55e`), white glyph

## 7. Cards / components
- **Dashboard mockup** (hero): a bordered white card containing three traffic-light dots (top-left, decorative), two side-by-side subscription "mini cards" (Netflix: white/bordered, small red badge, price; Spotify: blue-gradient, circular white icon badge, larger price, white check badge bottom-right), a "My Balance" block with a large amount, three circular action icons (Send/Receive/Convert) to its right, a small muted sub-line, and a small bar chart with a highlighted gradient bar carrying a dark tooltip pill above it and faint Y-axis labels at left.
- **Trust row items**: score number + brand glyph (Chrome/Producthunt/Trustpilot) + name + a row of colored star glyphs, three of these centered in a row.
- **Feature panel**: one large light-grey rounded container holding two children — a green balance-card (visually a bigger, greener variant of the hero dashboard's balance+chart block, with more Y-axis ticks and a taller highlighted bar) and a text column with heading, subtext, a horizontal divider, and a 2×2 checklist grid with green circular check icons.

## 8. Spacing
- Consistent section rhythm: hero top padding ~64px; trust bar ~60px margin-top from hero; empower section ~78px top / ~46px bottom padding; feature panel sits directly below with generous internal padding (~44px).
- Hero left column content stacks with ~18–26px gaps between badge → heading → subtext → button.
- Feature checklist uses a 2-column grid with ~14px row gap / ~30px column gap.

## 9. Responsive behavior
Not shown in the reference (single desktop capture). Conservative interpretation implemented:
- ≤900px: hero grid stacks to one column (visual mockup moves above the copy, copy becomes centered); feature panel grid stacks to one column.
- ≤760px: nav links hidden; heading sizes reduced; feature panel padding reduced; checklist collapses to a single column.
- ≤480px: "Log In" link hidden to save space; further heading size reduction; trust items wrap to full width, centered.
No new layout pattern is invented beyond stacking/reflowing the existing grid structure.

## 10. Animation / interaction observations
The reference is a static screenshot — no motion, transitions, or interaction states are visible. No animation was added beyond default browser link/button affordances. This matches the "no invented functionality" instruction.

## 11. Assets
No image assets were extracted from the source. The logo mark, Netflix "N" badge, Spotify icon, Chrome/Producthunt/Trustpilot glyphs, and all chart bars/icons are recreated with inline SVG or simple CSS shapes rather than the original brand logos, to avoid reproducing protected marks while preserving the overall visual read (color + rough shape). No files were placed in `assets/` — everything is CSS/SVG/text-based to keep the prototype self-contained and easy to port.

## 12. Important implementation details
- Layout uses CSS Grid for the two true two-column regions (hero, feature panel) and normal flexbox everywhere else (header, mini-cards row, action icons, trust row, chart bars) — no absolute-positioning hacks were needed for this page, unlike the fanned-card hero patterns in earlier recreations.
- The two "balance + chart" blocks (hero dashboard and the green feature card) intentionally share the same underlying markup/CSS pattern (`.balance-block`, `.chart-block`) with a green-specific override class, mirroring how the reference reuses the same component in two color variants.
- Colors and type scale are defined as CSS custom properties at the top of `styles.css` for easy porting to a design-token system.
- Class names are semantic and structural (`.hero-heading`, `.dashboard-card`, `.feature-panel`, `.feature-checklist`) rather than presentational, so the markup ports cleanly to a component-based framework.

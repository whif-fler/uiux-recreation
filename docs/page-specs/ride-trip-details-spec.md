# Ride-Share Trip Details — Visual Specification
**Screen 1 of 7 | Route: `/ride-trip-details` | Source: mobile reference screenshot**

> **Audit note — superseded values.** This spec came from a low-fidelity pass;
> the measured reference contradicts it in several places. The authority is
> `app/ride-trip-details/AGENTS.md`. Known corrections: stepper is **4
> segments, 3rd active, ~4px tall** (not 3 / middle / 2–3px); Call button is a
> **stadium 63×46** (not circular 56×56); card fill `#F7F7F7` (not `#F4F4F5`);
> Join Ride `#3E3E3E` (not `#1F2024`); badge text `#4080B6` / `#47B272` (not
> `#2F6FED` / `#16A34A`); "Trip Info" ≈13px (not 16–17); badge pills h 36 (not
> 32–34); fare gradient is a radial `#D1F1DF → #E9F5EE → #F7F7F7` from
> top-centre (not flat `#E8F8EE → #FFF`); reminder has no bell icon (correctly
> noted below). Reference mapping: `docs/references/ride-trip-details.webp` is
> the original content-cropped at same scale — **original image = webp +
> (323, 214)**.

---

## 1. Reference Information

- **Screenshot dimensions (approx.):** 1200 × 1500 px canvas, with the phone frame occupying roughly 540 × 1280 px of usable screen content inside it.
- **Viewport aspect ratio:** ~9:19.5 (standard modern iPhone notch-less/Dynamic Island frame, similar to iPhone 14/15).
- **Complete vs. cropped:** This is a full viewport capture — status bar to bottom home-indicator bar are both visible, so it represents one complete mobile screen.
- **Major visible sections (top to bottom):**
  1. Status bar (time, signal, wifi, battery)
  2. App header (logo + close icon) with a segmented progress indicator below it
  3. Driver card
  4. Verification badges row
  5. "Trip Info" section label
  6. Trip stops timeline
  7. Fare Split card
  8. Set Reminder row
  9. Bottom action bar (Call + Join Ride)
  10. Home-indicator bar

---

## 2. Overall Layout

- **Page structure top to bottom:** Status bar → Header (logo/close) → thin progress/stepper bar → Driver card → Badges row → "Trip Info" label → Timeline → Fare Split card → Reminder row → Sticky bottom action bar → home indicator.
- **Main container width:** Content spans edge-to-edge within phone frame with consistent horizontal padding; effective content width ≈ 520 px (in the 540 px screen simulation).
- **Horizontal padding:** ~24–28 px on both left and right, held constant throughout all sections.
- **Vertical spacing between sections:** ~20–24 px between major blocks (card → badges → trip info label → timeline → fare card → reminder). Spacing feels slightly tighter (~16 px) between the "Trip Info" label and the timeline start.
- **Alignment:** All content left-aligned except numeric time values and price, which are right-aligned or centered within their own containers (times in timeline are right-aligned; fare amount is centered).
- **Relative proportions:** Driver card and Fare Split card are similar in visual weight (both full-width, rounded, padded blocks). Timeline is the tallest single section. Bottom action bar is the smallest but highest-contrast element (dark button against white).
- **Fixed vs. flowing elements:** Header and status bar behave as fixed/pinned in typical implementations (though this screenshot shows them scrolled to top); bottom action bar (Call + Join Ride) reads as fixed/sticky to the bottom of the viewport. Everything between (driver card through reminder row) is flowing/scrollable content.
- **Overlapping elements:** None significant — this is a stacked, non-overlapping layout. The only "layered" feel is the timeline's connecting line running behind/between the circular stop indicators.
- **Z-index/layering:** Bottom action bar sits above scrollable content (elevated layer). Timeline dots sit above the connecting line. No modals/overlays present.

---

## 3. Header / Navigation

- **Height:** ~56–64 px (excluding status bar).
- **Left content:** Wordmark logo — a small rabbit/bunny icon glyph followed by bold text "HopOn" (stylized with a lowercase "p" mid-word appearing slightly raised/offset as a playful logo treatment).
- **Right content:** A simple "X" (close) icon, medium-thick stroke, no background/button treatment — just the glyph.
- **Icon size:** Logo mark ≈ 28×28 px; close icon ≈ 22×22 px.
- **Text:** "HopOn" wordmark, bold weight, ~20–22 px font size, black/near-black color, tight letter spacing.
- **Spacing:** Logo icon and wordmark separated by ~6–8 px; header content padded ~24 px from screen edges.
- **Background:** White/transparent, no fill.
- **Borders:** None on header itself.
- **Shadow:** None.
- **Radius:** N/A (no card container).
- **Secondary element below header:** A thin horizontal progress/stepper bar made of 3 segments — two light-gray inactive segments and one solid black active segment (middle segment), each ~2–3 px tall, rounded ends, separated by small gaps. This indicates step progress in a larger flow.

---

## 4. Driver Card

- **Approximate width × height:** Full content width (~520 px) × ~110–120 px.
- **Avatar/image:** No photo — a circular placeholder avatar icon (generic person silhouette) on a pink/magenta circular background. Avatar diameter ≈ 40–44 px.
- **Name typography:** "Lara Larsson" — semibold/bold, ~17–18 px, near-black.
- **Secondary text (left column):** Rating line below name — a small blue star icon + "4.9" (bold/semibold, blue) + " · (120 rides)" (regular weight, gray) — font size ~14 px.
- **Secondary text (right column):** "Tesla Model X • Gray" (regular, gray, ~14 px) on first line; "Plate: ABC 432 KJ" (regular, dark gray/black, ~14 px, "Plate:" label lighter weight than the plate number) on second line — right-aligned.
- **Badge placement:** Badges (Verified ID / Safe Driver) are NOT inside this card — they appear as a separate row directly below the card.
- **Card padding:** ~16–18 px on all sides.
- **Border radius:** ~16–18 px (soft rounded rectangle).
- **Border:** None visible, or an extremely subtle 1 px light-gray border.
- **Shadow:** None to very minimal (card is distinguished mainly by a light gray/off-white fill against the white page background).
- **Background:** Very light gray (#F4F4F5 / #F5F5F6 approx.).
- **Spacing between elements:** Avatar to name text ≈ 10–12 px gap; name to rating line ≈ 4–6 px vertical gap; left column to right column separated by flexible space (space-between layout).

---

## 5. Verification / Safety Badges

**Badge 1 — "Verified ID"**
- Icon: Blue circular checkmark/shield-check icon, ~16 px.
- Icon size: ~16×16 px.
- Font size: ~14 px, semibold/medium.
- Font weight: 600.
- Text color: Blue (~#2F6FED / royal blue).
- Background: Very light blue (~#E6F0FF / #EAF2FF).
- Border: None, or a barely visible 1px lighter blue border.
- Radius: Fully rounded / pill shape (999 px).
- Padding: ~8 px vertical, ~14 px horizontal.
- Spacing: Icon-to-text gap ≈ 6 px.
- Position: First badge, left-aligned, directly below driver card.

**Badge 2 — "Safe Driver"**
- Icon: Green filled circle/dot or shield icon, ~14–16 px.
- Icon size: ~14×14 px.
- Font size: ~14 px, semibold/medium.
- Font weight: 600.
- Text color: Green (~#1D9A56 / #16A34A).
- Background: Very light green (~#E8FBEF / #EAFBF0).
- Border: None or subtle light-green border.
- Radius: Fully rounded / pill shape.
- Padding: ~8 px vertical, ~14 px horizontal.
- Spacing: Icon-to-text gap ≈ 6 px; gap between Badge 1 and Badge 2 ≈ 10–12 px horizontal.
- Position: Second badge, immediately right of "Verified ID," same row.

---

## 6. Trip Timeline

- **Orientation:** Vertical.
- **Stop/point indicators:** Circular ring markers (hollow circles with colored stroke), one per stop, aligned along a single vertical axis on the left side of the timeline.
- **Connecting line:** A single vertical line running through the center of each circular indicator, connecting consecutive stops.
- **Line thickness:** ~2–3 px.
- **Indicator dimensions:** ~16–18 px diameter circles; the first (Pickup) indicator appears larger/emphasized (~20 px) and solid blue ring with white/blue fill; the final (Dropoff) indicator has a distinct filled/target-style appearance (dot inside ring) versus the plain hollow rings used for intermediate stops.
- **Colors:**
  - Active/current segment (Pickup to Passenger 2): solid blue line and blue-ringed indicators (~#3B82F6 / #2F6FED).
  - Remaining/upcoming segment (Passenger 2 downward to Dropoff): light gray line and gray/hollow indicators (~#D1D5DB).
- **Stop names:** Two-line structure per stop — a small gray label line (e.g., "Pickup," "Passenger 2," "Passenger 3," "Dropoff") above a bold/dark location name (e.g., "Main Street Bus Stop").
- **Time formatting:** 12-hour clock with AM suffix (e.g., "08:15 AM"), right-aligned opposite each stop's text block; bold/semibold black for the clock time.
- **Secondary time annotations:** Small gray parenthetical notes under some times — "(in 5 mins)" under Pickup time, "(Estimated arrival)" under Dropoff time — right-aligned, smaller font.
- **Typography hierarchy:** Label (gray, small, regular) → Location name (black, medium, semibold) on the left column; Time (black, bold, medium-large) → annotation (gray, small, regular) on the right column.
- **Spacing between stops:** ~40–48 px vertical gap between each stop block, enough to accommodate the two-line text plus line segment.
- **Relationship between times and labels:** Each stop is a horizontal row: left side = indicator + label/name text; right side = time + optional annotation, vertically centered against the same row midpoint as the location name.

---

## 7. Fare Split Card

- **Card dimensions:** Full content width (~520 px) × ~130–140 px.
- **Layout:** Centered, vertically stacked content (heading, price, sub-line) — unlike the driver card, this one is center-aligned rather than left/right split.
- **Heading:** "Fare Split" — small, gray/muted, regular weight, ~14 px, centered at top of card.
- **Price/amount styling:** "$4.20" in large bold black text (~32–36 px) immediately followed by "/seat" in smaller, lighter-weight gray text (~16 px) on the same baseline.
- **Supporting information:** "× 3 riders" displayed as a small pill/chip below the price — light gray background, rounded, small text (~13 px), centered.
- **Dividers:** None within the card.
- **Icons:** None visible in this card.
- **Padding:** ~20–24 px all sides.
- **Radius:** ~16–18 px, matching driver card.
- **Border:** None visible.
- **Shadow:** None to minimal.
- **Background:** Soft gradient fill — light green/mint transitioning to very light gray/white (diagonal or radial gradient, subtle), distinguishing this card from the neutral gray driver card.
- **Alignment:** Fully centered (text-align: center) for all three lines of content.

---

## 8. Reminder Row

- **Icon:** None clearly visible within this row itself (the row relies on text hierarchy rather than a leading icon); if present, would be a small bell icon — not clearly rendered in this reference.
- **Text (primary):** "Set Reminder" — bold/semibold, ~16 px, black.
- **Secondary text:** "Get notified 10 minutes before pickup so you're ready on time." — two-line wrapped, regular weight, gray, ~13–14 px, max width constrained to leave room for the button on the right.
- **Alignment:** Text block left-aligned; "Set" button right-aligned; row uses space-between horizontal layout, vertically centered.
- **Height:** ~56–64 px (driven by the two-line secondary text).
- **Background:** Transparent/white (matches page background, no card container).
- **Border/divider:** None visible above/below (relies on surrounding whitespace for separation).
- **Padding:** Matches page horizontal padding (~24 px); ~12–16 px vertical breathing room above/below.
- **Spacing:** ~8–12 px gap between action button and edge of text block.
- **Button ("Set"):** Small pill-shaped button, light gray background (~#EDEDEF), black/dark text, ~14 px medium weight, padding ~8 px vertical / ~18–20 px horizontal, fully rounded corners.

---

## 9. Bottom Actions (Call + Join Ride)

- **Call button dimensions:** Circular, ~56×56 px.
- **Join Ride button dimensions:** Pill/rounded rectangle, height ~56 px, width filling remaining horizontal space (flex-grow), i.e., roughly 78–82% of the row width with Call button taking the remaining ~18–22%.
- **Width relationship:** Call button is fixed-width (square/circular); Join Ride button is flexible and takes up the bulk of the row.
- **Height:** Both buttons share the same height (~56 px), for visual alignment.
- **Radius:** Call button — fully circular (radius = half of height/width). Join Ride button — fully rounded pill (radius ≈ 28 px, matching half its height).
- **Background:** Call button — light gray (~#EDEDEF), matching the "Set" button style. Join Ride button — solid dark charcoal/near-black (~#1F2024 / #212124).
- **Border:** None on either button.
- **Text:** "Join Ride" — white, bold/semibold, centered, ~17–18 px. Call button has no text, icon-only.
- **Icon:** Call button contains a black phone-handset icon (~20–22 px), centered.
- **Spacing:** ~12–14 px gap between Call button and Join Ride button.
- **Fixed/sticky behavior:** This row reads as a sticky/fixed bottom action bar, sitting just above the home-indicator safe area, consistently padded from the bottom edge (~16–20 px above the home indicator).
- **Bottom safe-area padding:** Additional ~20–24 px of bottom padding below the buttons to clear the iOS home-indicator gesture bar; home-indicator bar itself is a thin dark rounded pill centered at the very bottom (~134×5 px), separate from the app's own UI.

---

## 10. Typography

**Likely font family:** A clean, rounded/geometric sans-serif — visually consistent with system fonts such as **SF Pro (iOS default)**, or a close web alternative like **Inter**, **Manrope**, or **General Sans**. Numerals appear tabular/monospaced-leaning for the clock times and price (common in SF Pro Rounded / Inter tabular figures).
**Closest practical implementation choice:** `Inter` (or `SF Pro Display/Text` if targeting native-feeling web) as the base family, with `font-variant-numeric: tabular-nums` for times and prices.

| Text Role | Font Size | Weight | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|
| Page/app wordmark ("HopOn") | ~20–22px | Bold (700) | 1.2 | Tight (-0.5px) | #111111 |
| Section title ("Trip Info") | ~16–17px | Bold/Semibold (600–700) | 1.3 | Normal | #111111 |
| Driver name | ~17–18px | Semibold (600) | 1.3 | Normal | #111111 |
| Secondary labels (rating, car info) | ~13–14px | Regular/Medium (400–500) | 1.4 | Normal | #6B7280 (gray) |
| Timeline stop label (e.g. "Pickup") | ~13px | Regular (400) | 1.3 | Normal | #9CA3AF (light gray) |
| Timeline location name | ~15–16px | Semibold (600) | 1.3 | Normal | #111111 |
| Timeline time value | ~15–16px | Bold/Semibold (600–700) | 1.3 | Normal, tabular | #111111 |
| Timeline annotation (e.g. "in 5 mins") | ~12–13px | Regular (400) | 1.3 | Normal | #9CA3AF |
| Fare price ("$4.20") | ~32–36px | Bold/Extrabold (700–800) | 1.1 | Tight | #111111 |
| Fare "/seat" suffix | ~15–16px | Regular (400) | 1.1 | Normal | #6B7280 |
| Button text ("Join Ride") | ~17–18px | Semibold/Bold (600–700) | 1.2 | Normal | #FFFFFF |
| Badge text | ~14px | Semibold (600) | 1.2 | Normal | Blue / Green (badge-specific) |

---

## 11. Color Palette

| Purpose | Approx. Hex |
|---|---|
| Page background | #FFFFFF |
| Card background (driver card, neutral) | #F4F4F6 |
| Card background (fare split, gradient) | #E8F8EE → #FFFFFF (mint-to-white gradient) |
| Primary text | #111111 / #1A1A1A |
| Secondary text | #6B7280 |
| Muted/tertiary text | #9CA3AF |
| Borders (if any) | #E5E7EB |
| Accent / verified badge blue | #2F6FED |
| Verified badge background | #E9F1FF |
| Success / safe driver green | #16A34A |
| Safe driver badge background | #E8FBEF |
| Timeline active (blue) | #3B82F6 |
| Timeline inactive (gray) | #D1D5DB |
| Primary button (Join Ride) background | #1F2024 |
| Primary button text | #FFFFFF |
| Secondary button (Call, Set) background | #EDEDEF |
| Secondary button icon/text | #1A1A1A |
| Rating star icon | #2F6FED (blue star, not yellow — notable deviation from typical star color conventions) |
| Avatar background (placeholder) | #F472B6 (pink/magenta) |

---

## 12. Component Dimensions Table

| Element | Width | Height | Radius | Notes |
|---|---:|---:|---:|---|
| Header | Full width | ~56–64px | 0 | Logo left, close icon right |
| Progress stepper bar | Full width | ~3px | pill | 3 segments, middle active |
| Driver card | ~520px (full) | ~110–120px | ~16–18px | Light gray fill, no shadow |
| Avatar | 40–44px | 40–44px | 50% (circle) | Pink bg, silhouette icon |
| Badge (each) | Auto (hug content) | ~32–34px | pill (999px) | Icon + text, colored bg |
| Timeline indicator (standard) | ~16–18px | ~16–18px | 50% (circle) | Hollow ring |
| Timeline indicator (pickup) | ~20px | ~20px | 50% (circle) | Emphasized, solid blue ring |
| Timeline connecting line | ~2–3px | Variable (per gap) | pill | Blue (active) / gray (upcoming) |
| Fare split card | ~520px (full) | ~130–140px | ~16–18px | Gradient bg, centered content |
| Set button (reminder) | Auto (hug) | ~32–36px | pill | Light gray bg |
| Call button | ~56px | ~56px | 50% (circle) | Light gray bg, phone icon |
| Join Ride button | Flexible (~78–82% of row) | ~56px | ~28px (pill) | Dark bg, white bold text |
| Home indicator bar | ~134px | ~5px | pill | iOS system element, not app UI |

---

## 13. Responsive Interpretation (Desktop)

Conservative adaptation only — no redesign:

- **Remain fixed:** Header height/content, badge styling, button heights, typography scale for labels/badges, bottom action bar's internal proportions (Call button stays compact/circular).
- **Become wider (constrained, not full-bleed):** The entire content column should be constrained to a max-width (e.g., ~480–560px, matching the mobile card width) and centered horizontally on the page — treat it like a persistent "phone-width panel" centered in a wider desktop viewport, rather than stretching cards edge-to-edge across a wide screen. This is the most conservative interpretation consistent with the mobile-first design.
- **Move into columns:** Not indicated by this design — no evidence of a multi-column intent. Keep single-column stacked layout at all breakpoints; do not introduce sidebars.
- **Change alignment:** None required — center the fixed-width column within the viewport on desktop; internal alignment (left-aligned driver info, centered fare card) stays the same.
- **Change spacing:** Slightly increased outer margins (space around the centered panel) on desktop; internal spacing between sections should stay as close to the mobile values as possible.
- **Change button layout:** Bottom action bar can remain fixed/sticky to the bottom of the centered panel (or become inline/static at the bottom of content on desktop, since there's no mobile thumb-reach constraint) — but Call + Join Ride should keep their same relative proportions (compact circular + flexible pill) rather than becoming two equal-width buttons.

---

## 14. Motion / Interaction Opportunities

Consistent with the existing design, not inventing new patterns:

- **Screen entrance:** Simple fade + slight upward slide (~12–16px) for the whole content column on mount.
- **Card entrance:** Driver card and Fare Split card can stagger in with a short fade/slide (~150–250ms, slight delay offset between cards).
- **Badge reveal:** Verified ID / Safe Driver badges can pop in with a subtle scale (0.9 → 1) + fade, staggered slightly after the driver card.
- **Timeline reveal:** The connecting line can animate as a vertical "draw-in" (scaleY from 0 to 1, top-to-bottom) as the screen loads; each stop indicator can fade/scale in sequentially, top to bottom.
- **Button interaction:** Standard press/tap scale-down (~0.97) on Join Ride and Call buttons; subtle background darken on hover for desktop.
- **Reminder "Set" button:** Small scale/opacity feedback on press; could morph label (e.g., to a checkmark) on activation, but this is speculative since only the default state is shown — flag as an assumption if implemented.

---

## 15. Assets

| Asset | Description | Approx. Dimensions | Style | Recreatable? |
|---|---|---|---|---|
| "HopOn" logo mark | Small stylized rabbit/bunny head icon, line-art style | ~28×28px | Simple black line icon | Replace with an original placeholder mark (`BrandMark`, abstract hop trajectory) — never copy or trace the reference logo; keep ~28–32px size, placement, spacing and visual weight |
| Close (X) icon | Simple X glyph | ~22×22px | Line icon, medium stroke | Yes — standard icon library (e.g., Lucide/Feather "x") |
| Driver avatar placeholder | Generic person silhouette on colored circle | ~40–44px | Flat icon, pink circular bg | Yes — standard "user" icon library glyph + CSS circle bg |
| Verified ID badge icon | Circular checkmark/shield-check | ~16px | Filled blue icon | Yes — icon library (e.g., "badge-check," "shield-check") |
| Safe Driver badge icon | Filled dot or shield | ~14–16px | Filled green icon | Yes — icon library (e.g., "shield," "check-circle") |
| Rating star icon | Star glyph, filled | ~14px | Blue filled star (non-standard color) | Yes — icon library star glyph, custom blue fill |
| Timeline indicators | Circular ring markers, plain geometric shapes | ~16–20px | CSS-drawable | Yes — pure CSS (border-radius circles + border color), no image asset needed |
| Call icon | Phone handset glyph | ~20–22px | Filled/line icon | Yes — standard icon library (e.g., "phone") |
| Status bar icons (signal/wifi/battery) | iOS system UI | Standard iOS sizing | System glyphs | Not part of app — exclude from implementation (browser/OS chrome) |

No photographic assets, no copyrighted logos, no real-brand imagery are present. All visual elements are icon-based or CSS-drawable and can be fully recreated with an icon library (e.g., Lucide) plus a custom SVG for the wordmark's brand glyph — an original placeholder, never a copy or trace of the reference's logo.

---

## 16. Visual Hierarchy

1. **First:** The dark, high-contrast "Join Ride" button at the bottom — largest area of solid dark color on the page, naturally draws the eye as the primary call-to-action, reinforced by its position at the thumb-reach bottom zone.
2. **Second:** The driver's name and the bold "$4.20" fare figure — both are the largest/boldest text elements in the content area and anchor the two main informational cards.
3. **Third:** The colored verification badges (blue/green pills) and the timeline's blue "active" segment — these draw attention through color contrast against an otherwise neutral gray/white palette, signaling trust and current progress.

Supporting/lower-priority elements (gray secondary text, muted timeline labels, the reminder row) recede visually and are read only after the above three levels are absorbed.

---

## 17. Implementation Warnings

- **Blue star icon:** The rating star is blue, not the conventional yellow/gold — easy to default incorrectly; must be explicitly styled.
- **Two-column driver card:** The card packs a left info column (name/rating) and right info column (vehicle/plate) using a space-between layout — a naive single-column stack would misrepresent the design.
- **Fare card gradient:** The mint-to-white gradient is subtle and easy to flatten into a solid color by mistake; should be implemented as an actual gradient, not a flat fill.
- **Timeline color split:** The line and indicators are NOT uniformly colored — only the segment from Pickup to the next active stop is blue; everything beyond is gray. This two-tone state must be preserved, not just decorative.
- **Asymmetric button widths:** Call and Join Ride buttons are intentionally unequal width (compact circle + flexible pill) — do not default to two equal-width buttons.
- **Sticky bottom bar vs. safe area:** Padding below the button row must account for the iOS home-indicator safe area; insufficient bottom padding will cause the buttons to look cramped against the indicator.
- **Card radius consistency:** Driver card and Fare Split card should share the same corner radius (~16–18px) for visual consistency — easy to accidentally diverge.
- **Dropoff indicator distinct style:** The final timeline stop's indicator is visually distinct (target/dot-in-ring) from the plain hollow rings used at intermediate stops — don't render all four indicators identically.
- **Reminder row lacks a card container:** Unlike the driver/fare cards, this row has no background fill — it's easy to accidentally wrap it in a card treatment by mistake.
- **Progress stepper is easy to overlook:** The thin 3-segment bar beneath the header is a small but functionally meaningful element (indicates step position) and could be missed on a quick pass.

---

## 18. Final Specification Summary

**1. Page Structure**
Single-column, vertically stacked mobile screen: Header → Progress stepper → Driver card → Verification badges → "Trip Info" label → Vertical timeline (4 stops) → Fare Split card → Reminder row → Sticky bottom action bar (Call + Join Ride).

**2. Dimensions**
Content column ~520px wide (mobile), ~24px horizontal padding throughout. Cards ~110–140px tall with ~16–18px radius. Bottom buttons 56px tall. See full table in Section 12.

**3. Typography**
Clean geometric sans-serif (Inter/SF Pro-style). Bold headline treatment for name/price/button text; regular/light gray for secondary and muted text; tabular numerals for times and price. Full scale in Section 10.

**4. Colors**
White page background; light neutral gray cards; blue accent (#2F6FED) for verification/active states; green accent (#16A34A) for safety confirmation; dark charcoal (#1F2024) primary button; full palette in Section 11.

**5. Components**
Driver card (two-column info + avatar), two pill badges, 4-stop vertical timeline with two-tone (active/upcoming) styling, centered gradient fare card, plain reminder row with pill "Set" button, asymmetric Call/Join Ride button pair.

**6. Responsive Behavior**
Keep single-column, phone-width (~480–560px max-width) content panel centered on desktop; do not introduce multi-column layouts; preserve all internal proportions and alignment exactly as in mobile.

**7. Motion**
Subtle entrance fades/slides for screen and cards, staggered badge pop-ins, top-to-bottom timeline draw/reveal, standard press-scale feedback on buttons — nothing beyond what the static design already implies.

**8. Assets**
All icon-based/CSS-drawable (logo mark, close icon, avatar placeholder, badge icons, star, phone icon, timeline circles). No photographic or copyrighted assets present; recreate wordmark icon as an original simple line-art glyph.

**9. Important Visual Details**
Blue (not yellow) rating star; two-tone timeline coloring; gradient (not flat) fare card background; asymmetric bottom button widths; distinct dropoff indicator styling; card radius consistency between driver and fare cards.

**10. Potential Pitfalls**
Flattening the fare card gradient; defaulting the star to yellow; making both bottom buttons equal width; losing the two-column layout inside the driver card; treating the reminder row as a card when it has no background; misjudging bottom safe-area padding around the sticky action bar.

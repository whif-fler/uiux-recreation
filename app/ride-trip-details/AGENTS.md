# AGENTS.md — /ride-trip-details

Route: `/ride-trip-details`

## Rules

- The reference image is the source of truth for this screen.
- Recreate the reference. Do not redesign it.
- Preserve all milestone-required content for this screen.
- Follow the page specification for this route once one exists in `docs/`.
- Validate visually against the reference before declaring the page complete.
- Do not invent missing design details without evidence from the reference.

## Reference status (read first)

- `docs/references/ride-trip-details.webp` (549×1095) is the **original
  reference content-cropped at identical pixel scale** — proven this session
  by landmark matching (content width 522 vs 521; timeline label tops within
  ±4; buttons y+214 = 1232 vs 1230; crop y0 sits 5 img below the original's
  status bar, which is why no status bar appears). **Mapping:
  original-image = webp + (323, 214).** To diff: crop the 1200×1499
  screenshot at (323, 214, 549×1095) and compare directly. Do not use its
  naive full-image aspect (the crop drops status bar, home indicator and the
  grey canvas) — that was the basis of the old "do not derive geometry"
  warning, which the offset mapping supersedes.
- The geometry below was measured from the original 1200×1499 reference and
  re-verified against the webp crop during the audit pass: every landmark
  matches within ±1 image px after the rhythm fixes (see accepted-deltas
  section for the applied fix list).
- Verification state (latest audit pass): all milestone-2 content; desktop
  (1200×1499) and mobile (393×850) rendered and visually inspected;
  same-method landmark diff vs reference ≤ ±1 img everywhere except the
  placeholder glyph's ink top (−3 img, by design); mean abs pixel diff 10.4,
  dominated by font-shape rows; `npm run build`, `tsc --noEmit` and lint
  clean; zero console messages on both viewports.

## Framing / responsive

- `<md`: full-bleed white app screen, `h-dvh`, no page chrome.
- `md`–`lg`: centred 393×850 phone panel, radius 63, on `#DEDEDE` canvas.
- `>=lg`: same panel with `zoom: 1.448` so the phone matches the reference
  image's scale at a 1200×1499 viewport (phone ≈ x316..884, content column
  x340..861; CSS→image scale ×1.4452).

## Verified layout facts

Units are mixed historically; each line states its unit below. "img" = image
px @ 1200×1499 (CSS→image ×1.4452); unmarked sizes are CSS px as coded.

- Status bar (CSS): h 52, pl 41, pr 34; time 17/600; icon widths 19/17/27.
- Header: original placeholder brand mark 32×33 (`BrandMark` — abstract
  hop-trajectory glyph that replaces the reference's logo; never copy or
  trace the original); "HoᵖOn" Poppins 700 26px with `scaleX(0.9)`;
  close-X glyph ≈ 24×24 centred at (828.5, 246.5) — lucide `X` needs
  `size-[27px]` to reach that glyph size; stepper 4 segments (CSS: mx 30,
  gap 8, **h 4** — reference is 6 img tall, audit-corrected from the old
  "h 6" entry; mt 25 above it), 3rd active black, rest `#F7F7F7`.
- Driver card: y336..439, radius 18, bg `#F7F7F7`; avatar pink `#F472B6`;
  name 14/600; star `#3A8AF2` + "4.9" `#4080B6` + gray rides text
  `#767676`; right column 13px, plate number 700 black.
- Badges: reference pills y ≈ 464..516 img (h 52 img = 36 CSS, `h-9`;
  x30 corner scan reads 468..511), pill widths 150/149 img, inter-pill gap
  11 img (≈ 8 CSS, `gap-2`), `mt-[14px]` above (audit-corrected); bgs
  `#ECF2FE` / `#EBFBF1`, text `#4080B6` / `#47B272`.
- Timeline — non-obvious rule: rows **with** a note (1 and 4) align the time
  with the label line and the note with the name line; rows **without** a
  note (2 and 3) vertically centre the time on the whole row
  (`items-stretch` row + `justify-center` right column). Label ink tops:
  590 / 673 / 769 / 851 (uneven rhythm, gaps ≈ 83 / 96 / 82). Ring/line
  geometry lives in `TRACK` / `SEGMENTS` / `RINGS` constants.
- Fare card: **true top y937 img** (centre-green edge; the old "y950" was
  where the white-ish gradient corner becomes visible), radius 18, green
  radial gradient sampled `#D0F3E0 → #E5F4ED → #F7F7F7`; `mt-[22px]` above
  (audit-corrected); title 13/500 `#314B39`; price 37/700 tabular; "/seat"
  15.5px; chip "× 3 riders" h 26, bg `#E7ECE8`.
- Reminder: `mt-[13px]` above (audit-corrected); title 14/600; body
  11.5/14.5 `#737373`, max-w 210, wraps to 2 lines; Set pill w 84, h 40,
  bg `#F0F0F0` (reference 121×57 img — exact match).
- Bottom: call pill w 63, h 46, gap 10, Join Ride flex-1, h 46, bg
  `#3E3E3E`; buttons row y1230..1296 img (reference: call gray x17..108,
  gap white x109..123, join x124..537 — re-verified ±2 img); home
  indicator w 93, h 4, `#DDD`, y ≈ 1349.

## Known accepted deltas (do not "fix" without re-measuring)

- The reference face renders ≈8–12% narrower than Inter at equal cap heights;
  some strings run up to ~15 image px wider in our render. A global
  letter-spacing pass was considered and deliberately **not** applied after
  user review.
- Sub-3px offsets (reminder pill −3, timeline labels −1..−3, Set text
  slightly wide, badge pill width ~14) were reviewed and accepted.
- Badge pills render **+14 img (Verified ID) and +18 img (Safe Driver)**
  wider than the reference. Anatomy (fresh measurement): our text 14px vs
  reference ≈ 12.5–13, `gap-6` vs ≈4, `px-10` vs ≈8, icon 17 vs ≈19 CSS.
  Same class as the accepted "~14" delta — re-measured during the audit
  pass and deliberately left unfixed.
- The placeholder `BrandMark`'s ink starts ≈3 img higher in the same 32×33
  box than the reference glyph (its ring reaches the box top; the reference
  ears are inset). Ink density was matched (0.31); the box position is
  identical — do not move the box to "fix" this.
- First approved fix scope (4 items): timeline time centring, home
  indicator size, close-X size, Set button width — verified ±1 img.
- Audit-pass fix scope (fresh same-method measurement vs the webp crop,
  applied and verified): stepper `mt-[21→25px]` + `h-[6→4px]`, badges
  `mt-3→mt-[14px]`, fare `mt-5→mt-[22px]`, reminder `mt-4→mt-[13px]`,
  call `w-[61→63px]`, action gap `14→10px`. Result: landmark drift of
  −3..−8 img eliminated (all ≤ ±1 img), mean pixel diff 12.5 → 10.4.
- Reopen scope only with fresh measurements and user approval.

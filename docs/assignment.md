# Assignment

Recreation of seven provided UI/UX reference designs as a single web project.

The reference images are the source of truth. The goal is high visual fidelity and
pixel-consistent recreation, not redesign.

## Delivery requirements

- Desktop layouts are required.
- Mobile layouts are required.
- Both are compulsory for every screen; neither is optional.
- Public deployment is required.
- The project uses one deployment with separate routes (a single Next.js app, one
  URL per screen).
- The public deployment link must be placed in `README.md`.
- Total assignment score: **100 points**.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- Lucide React

No unnecessary libraries. Prefer native browser/CSS capabilities over adding
dependencies.

## Required routes

| Route | Screen |
| --- | --- |
| `/ride-trip-details` | Ride-Share Trip Details |
| `/art-showcase` | Art Showcase Landing |
| `/travel-landing` | Travel App Landing |
| `/finance-landing` | Finance Dashboard Landing |
| `/real-estate-landing` | Real Estate Investment Landing |
| `/pricing-plans` | Pricing Plans |
| `/developer-portfolio` | Developer Portfolio Landing |

## Milestones

### Milestone 1 — Repository & Live Deployment (16 points)

- [ ] Create repository
- [ ] Connect repository
- [ ] Deploy publicly
- [ ] Put the public deployment link in `README.md`

### Milestone 2 — Ride-Share Trip Details (12 points)

Route: `/ride-trip-details`

Required content:

- Driver card
- Verified ID badge
- Safe Driver badge
- Trip stops timeline
- Stop times
- Fare-split card
- Reminder row
- Call button
- Join Ride button

### Milestone 3 — Art Showcase Landing (12 points)

Route: `/art-showcase`

Required content:

- Top navigation
- Large headline
- Fanned artwork cards
- `@name` tags
- Subtitle
- Two buttons

### Milestone 4 — Travel App Landing (12 points)

Route: `/travel-landing`

Required content:

- Sky-blue hero
- Pill navigation
- Huge fading headline
- Overlapping ticket/booking cards
- Subtitle
- Download for iOS button

### Milestone 5 — Finance Dashboard Landing (12 points)

Route: `/finance-landing`

Required content:

- Hero headline
- Balance dashboard mock
- Subscription cards
- Ratings strip
- Analytics feature section

### Milestone 6 — Real Estate Investment Landing (12 points)

Route: `/real-estate-landing`

Required content:

- Hero
- Search filters
- Map
- Property pins
- Featured property card
- Stats row
- Why choose us section

### Milestone 7 — Pricing Plans (12 points)

Route: `/pricing-plans`

Required content:

- Large mixed-weight headline
- App icons
- Gradient toggle
- Free plan card
- Personal plan card
- Feature lists

### Milestone 8 — Developer Portfolio Landing (12 points)

Route: `/developer-portfolio`

Required content:

- Split hero
- Headline
- Supporting text
- Buttons
- Phone mockup
- Profile
- Company logo strip

## Score summary

| Milestone | Points |
| --- | --- |
| 1 — Repository & Live Deployment | 16 |
| 2 — Ride-Share Trip Details | 12 |
| 3 — Art Showcase Landing | 12 |
| 4 — Travel App Landing | 12 |
| 5 — Finance Dashboard Landing | 12 |
| 6 — Real Estate Investment Landing | 12 |
| 7 — Pricing Plans | 12 |
| 8 — Developer Portfolio Landing | 12 |
| **Total** | **100** |

## Workflow

Reference image → visual analysis → page specification → page-specific
`AGENTS.md` → implementation → browser verification → screenshot comparison →
corrections → responsive QA → motion QA → final completion.

Do not skip the reference-analysis and visual-validation stages.

## Related documents

- `docs/progress.md` — milestone and screen tracking
- `docs/visual-qa.md` — reusable visual QA checklist
- `docs/page-spec-template.md` — template copied into per-page specifications
- `AGENTS.md` — permanent project instruction set

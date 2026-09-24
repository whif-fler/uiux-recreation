# UI/UX Recreation

Recreation of seven provided UI/UX reference designs as a single Next.js
application. The supplied reference images are the source of truth: the goal is
high visual fidelity and pixel-consistent recreation, not redesign.

Each screen is its own route on one deployment, implemented for desktop and
mobile.

## Live Demo

- [Home](https://uiux-recreation.vercel.app/)
- [Ride-Share Trip Details](https://uiux-recreation.vercel.app/ride-trip-details)
- [Art Showcase](https://uiux-recreation.vercel.app/art-showcase)
- [Travel App](https://uiux-recreation.vercel.app/travel-landing)
- [Finance Dashboard](https://uiux-recreation.vercel.app/finance-landing)
- [Real Estate Investment](https://uiux-recreation.vercel.app/real-estate-landing)
- [Pricing Plans](https://uiux-recreation.vercel.app/pricing-plans)
- [Developer Portfolio](https://uiux-recreation.vercel.app/developer-portfolio)

## Tech stack

- Next.js
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint

## Routes

| Route | Screen |
| --- | --- |
| `/ride-trip-details` | Ride-Share Trip Details |
| `/art-showcase` | Art Showcase Landing |
| `/travel-landing` | Travel App Landing |
| `/finance-landing` | Finance Dashboard Landing |
| `/real-estate-landing` | Real Estate Investment Landing |
| `/pricing-plans` | Pricing Plans |
| `/developer-portfolio` | Developer Portfolio Landing |

All seven routes currently render plain placeholders. Implementation happens one
route at a time, driven by the reference image for that screen.

## Local development

Requirements: Node.js 20.9+ (Node 24 recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run lint
npm run build
npm start
```

`npm run build` produces the optimized production build used for deployment.

## Deployment

The project is intended for deployment on [Vercel](https://vercel.com/) as a
single Next.js app.

Deployment URL: TBD

## Project structure

```
app/
  ride-trip-details/    page.tsx, AGENTS.md
  art-showcase/         page.tsx, AGENTS.md
  travel-landing/       page.tsx, AGENTS.md
  finance-landing/      page.tsx, AGENTS.md
  real-estate-landing/  page.tsx, AGENTS.md
  pricing-plans/        page.tsx, AGENTS.md
  developer-portfolio/  page.tsx, AGENTS.md
  layout.tsx            root layout
  globals.css           global styles
components/
  shared/               shared components (added when real reuse exists)
docs/
  assignment.md         assignment and milestone requirements
  progress.md           milestone tracking
  visual-qa.md          reusable visual QA checklist
  page-spec-template.md template for per-page specifications
public/                 static assets
AGENTS.md               project instruction set for contributors and AI agents
README.md               this file
```

## Assignment requirements (summary)

Seven screens must be recreated from reference designs, each with:

- a dedicated route on a single public deployment
- a desktop layout and a mobile layout (both compulsory)
- accurate composition, spacing, typography, color, components, and motion

The assignment is worth 100 points across 8 milestones: repository and live
deployment (16 points), plus 12 points for each of the seven screens. The full
breakdown lives in [`docs/assignment.md`](docs/assignment.md).

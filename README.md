# UI/UX Recreation

Recreation of seven provided UI/UX reference designs as a single Next.js application. The supplied reference designs are the source of truth, with the goal of achieving high visual fidelity and consistent recreation rather than redesigning the original concepts.

Each screen is implemented as its own route within a single deployment, with responsive layouts for desktop and mobile.

## Live Demo

* [Home](https://uiux-recreation.vercel.app/)
* [Ride-Share Trip Details](https://uiux-recreation.vercel.app/ride-trip-details)
* [Art Showcase](https://uiux-recreation.vercel.app/art-showcase)
* [Travel App](https://uiux-recreation.vercel.app/travel-landing)
* [Finance Dashboard](https://uiux-recreation.vercel.app/finance-landing)
* [Real Estate Investment](https://uiux-recreation.vercel.app/real-estate-landing)
* [Pricing Plans](https://uiux-recreation.vercel.app/pricing-plans)
* [Developer Portfolio](https://uiux-recreation.vercel.app/developer-portfolio)

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React
* ESLint

## Routes

| Route                  | Screen                         |
| ---------------------- | ------------------------------ |
| `/ride-trip-details`   | Ride-Share Trip Details        |
| `/art-showcase`        | Art Showcase Landing           |
| `/travel-landing`      | Travel App Landing             |
| `/finance-landing`     | Finance Dashboard Landing      |
| `/real-estate-landing` | Real Estate Investment Landing |
| `/pricing-plans`       | Pricing Plans                  |
| `/developer-portfolio` | Developer Portfolio Landing    |

All seven screens are implemented within the same Next.js application and deployment.

## Local Development

### Requirements

* Node.js 20.9+
* Node.js 24 recommended

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open http://localhost:3000.

## Production Build

Run the production checks and build:

```bash
npm run lint
npm run build
npm start
```

The production build is the same build used for deployment.

## Deployment

The project is deployed as a single Next.js application on Vercel.

**Deployment URL:** https://uiux-recreation.vercel.app

## Project Structure

```text
app/
├── ride-trip-details/
├── art-showcase/
├── travel-landing/
├── finance-landing/
├── real-estate-landing/
├── pricing-plans/
├── developer-portfolio/
├── _components/
├── layout.tsx
├── globals.css
└── page.tsx

components/
└── shared/

public/
└── static assets

README.md
.gitignore
package.json
package-lock.json
next.config.ts
tsconfig.json
eslint.config.mjs
postcss.config.mjs
```

## Assignment Requirements

The project recreates seven provided UI/UX reference designs.

Each screen includes:

* A dedicated route within one public deployment
* Responsive desktop and mobile layouts
* High-fidelity recreation of the reference composition
* Matching typography, spacing, colors, components, and visual details
* Motion and interaction where appropriate

The assignment is evaluated across eight milestones:

* Repository and live deployment
* Seven individual screen recreations

Each screen contributes to the overall visual recreation score, with emphasis on design understanding, visual accuracy, responsive behavior, and motion.

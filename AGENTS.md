<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Project Instruction Set

This file is the permanent instruction set for this repository. It applies to every
route and every change.

## Mission

This repository recreates seven provided UI/UX reference designs as accurately as
possible, as one Next.js deployment with seven routes.

The supplied reference images are the SOURCE OF TRUTH.

The goal is high visual fidelity and pixel-consistent recreation, not redesign.

## Core rule

RECREATE, DO NOT REDESIGN.

The reference images are the source of truth.

Never:

- modernize the design
- improve the design according to personal taste
- replace unusual layouts with cleaner layouts
- add unnecessary sections
- invent visual patterns
- introduce unrelated UI components
- turn the design into a generic SaaS/AI-looking interface
- simplify the design just because it is easier to implement

When uncertain, use the reference image and page specification as the authority.

## Logo and brand marks

Preserve the reference's branding layout and hierarchy, but replace any
recognizable logo mark with an original placeholder. Never copy or trace a
reference logo. Keep the placeholder's approximate size, placement, spacing
and visual weight consistent with the reference.

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

Each route directory contains its own `AGENTS.md` with route-scoped rules. Read the
root `AGENTS.md` and the route `AGENTS.md` together before touching a route.

## Visual priority

Prioritize, in order:

1. Overall composition
2. Layout proportions
3. Spacing
4. Typography
5. Colors
6. Images/assets
7. Components
8. Borders and radius
9. Shadows and gradients
10. Responsive behavior
11. Motion

## Responsive rules

Every screen must work on desktop and mobile.

Do not simply shrink desktop into mobile.

Responsive behavior should be intentionally implemented based on the reference.

## Code quality

Use:

- Strict TypeScript
- Semantic HTML
- Accessible interactive elements
- Clear naming
- Focused components
- Reusable components only where actual reuse exists
- Minimal dependencies
- Maintainable code

Avoid:

- `any` unless genuinely unavoidable
- Giant components
- Excessive abstraction
- Duplicated code
- Dead code
- Unused dependencies
- Unnecessary configuration
- Unnecessary rewrites of working code

## Layout rules

Prefer:

- Flexbox
- CSS Grid
- Max-width containers
- Gap
- Margin
- Padding
- Responsive breakpoints

Use absolute positioning only when the design actually requires overlapping or
floating elements.

Do not build entire pages as fixed-position screenshot canvases.

## Motion rules

Use Framer Motion where appropriate.

Animation should:

- feel intentional
- support the design
- match the visual style
- not introduce unrelated movement
- not negatively affect responsive behavior
- respect reduced-motion preferences where practical

Do not add animation just to make the page look "fancier."

## Visual QA

A page is NOT considered complete merely because it:

- compiles
- loads
- has the required text
- passes TypeScript

A page should eventually be compared against the reference at the appropriate
viewport sizes, using the checklist in `docs/visual-qa.md`.

Check:

- layout
- spacing
- typography
- colors
- sizing
- imagery
- cards
- buttons
- layering
- responsive behavior
- motion
- console/runtime errors

Do not claim visual accuracy without visual verification.

## AI implementation behavior

Before making substantial changes:

1. Inspect the relevant page specification in `docs/`.
2. Inspect the existing implementation.
3. Inspect the reference image when available.
4. Identify what is actually different or missing.
5. Make the smallest appropriate change.
6. Verify the result.

Do not rewrite working sections unnecessarily.

## Future workflow

Every route follows this process, in order:

1. Reference image
2. Visual analysis
3. Page specification (`docs/page-spec-template.md` copied into `docs/`)
4. Page-specific `AGENTS.md` updated with the analyzed details
5. Implementation
6. Browser verification
7. Screenshot comparison
8. Corrections
9. Responsive QA
10. Motion QA
11. Final completion

Do not skip the reference-analysis and visual-validation stages.

## Scope control

This is a frontend recreation project. Only build what is needed for the assignment.

Do not add: UI component libraries, state management, databases, authentication,
APIs, a CMS, global abstractions, fake content systems, or animation systems that
the assignment does not require.

## Completion tracking

Update `docs/progress.md` as milestones are completed. Do not mark an item complete
unless it is actually complete.

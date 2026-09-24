STRICT UI RECREATION PROTOTYPE

Files:
- index.html: semantic page structure
- styles.css: all visual styling and responsive rules
- visual-spec.md: measurements, implementation notes, responsive behavior, uncertainties, and final audit
- assets/: intentionally empty; artwork is recreated with CSS and inline SVG

Run:
Open index.html directly in a modern browser, or serve this folder with any static server.
For example:
  python3 -m http.server 8000
Then visit:
  http://localhost:8000

Reference viewport:
Set the browser viewport to 1025 x 814 CSS pixels for the closest comparison.

Implementation constraints honored:
- Plain HTML and CSS
- No React, Tailwind, Bootstrap, component frameworks, or JavaScript
- No screenshot background, screenshot slices, canvas tracing, or full-interface image
- Responsive adaptation included

# Naturally Coffee

Landing page for **Naturally Coffee** — a brand selling ethically sourced coffee beans. Built with React 19 and Vite 6 (JavaScript).

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with HMR        |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Lint the codebase with oxlint        |

## Structure

```
src/
  components/
    Navbar.jsx        Sticky navbar with mobile menu
    Hero.jsx          Headline, tagline, CTA, animated visual
    Products.jsx      Featured coffee products grid
    About.jsx         Our Story / sustainability section
    Testimonials.jsx  Customer reviews
    Newsletter.jsx    Email signup form
    Footer.jsx        Social links and contact info
    BeanIcon.jsx      Shared coffee-bean SVG icon
  index.css           Design tokens, layout, animations
```

## Design

Warm, earthy palette (espresso browns, cream, muted sage greens) defined as CSS custom properties in `src/index.css`. Fully responsive with smooth scrolling, scroll-aware navbar, and subtle float/fade animations (respects `prefers-reduced-motion`).

> Note: Vite is pinned to v6 because this machine runs Node 20.12; Vite 7+ requires Node 20.19+.

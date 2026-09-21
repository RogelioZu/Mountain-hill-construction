# Mountain Hill Construction

Marketing site for a licensed general contractor in Big Bear City, CA.
Vite + React + TypeScript + React Router.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview
npm run typecheck
```

## Where things live

| Path | What it holds |
|---|---|
| `PRODUCT.md` | Product truth: users, positioning, confirmed business facts, what must never be fabricated. |
| `DESIGN.md` | Internal design documentation: tokens, named rules, and component specs. Never expose it as a public route. |
| `.impeccable/design.json` | Machine-readable sidecar — tonal ramps, shadows, motion, component snippets. |
| `src/styles/tokens.css` | Every design token, plus the direction contract. |
| `src/styles/app.css` | System styles. Every rule traces to `DESIGN.md`. |
| `src/data/site.ts` | Single source of truth for business facts. Edit here, not in components. |
| `src/brand/BrickMark.tsx` | The logo as exact vector geometry. |
| `assets/` | Original brand artwork (source of truth for colour and type). |
| `legacy/` | The previous static HTML/CSS site, kept for reference. |

## The system in one paragraph

The logo is a masonry bond, not a mountain. Rotated back to axis-aligned it resolves to an
exact modular grid — a 33-unit field, bars 6 units thick, gaps of 1 unit, arms 19 units
long, four arms pinwheeled. Every colour is measured off `assets/logo.jpg`, then extended
into perceptual ramps in OKLCH. Structural indigo carries the deep bands; fired brick is
the only colour the visitor is ever invited to press. Corners are square everywhere and
nothing in the system blurs. See `DESIGN.md`.

## Before this goes live

Two things are deliberately unfinished and are the owner's to resolve:

1. **The contact form has no backend.** `src/routes/Contact.tsx` validates properly and
   hands the message to the visitor's mail client with everything prefilled, which actually
   delivers — but it should POST to a form service (Formspree, Netlify Forms, Web3Forms).
   The `TODO(owner)` marks the spot.
2. **No social proof exists yet.** There are no testimonials, review counts, project totals,
   or years-in-business figures anywhere in this repo, and none were invented. If you want
   them on the site, supply the real ones.

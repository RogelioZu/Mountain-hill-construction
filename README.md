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
| `DESIGN.md` | The design system: tokens, named rules, component specs. Normative. |
| `.impeccable/design.json` | Machine-readable sidecar — tonal ramps, shadows, motion, component snippets. |
| `src/styles/tokens.css` | Every design token, plus the direction contract. |
| `src/styles/app.css` | System styles. Every rule traces to `DESIGN.md`. |
| `src/data/site.ts` | Single source of truth for business facts. Edit here, not in components. |
| `src/brand/BrickMark.tsx` | The logo as exact vector geometry. |
| `src/routes/Foundations.tsx` | `/foundations` — the living design-system reference. |
| `assets/` | Original brand artwork, plus the owner's source photos and video. Source of truth; never served directly. |
| `public/media/` | Web-ready hero footage and posters, derived from `assets/videos/`. |
| `legacy/` | The previous static HTML/CSS site, kept for reference. |

## The system in one paragraph

The logo is a masonry bond, not a mountain. Rotated back to axis-aligned it resolves to an
exact modular grid — a 33-unit field, bars 6 units thick, gaps of 1 unit, arms 19 units
long, four arms pinwheeled. Every colour is measured off `assets/logo.jpg`, then extended
into perceptual ramps in OKLCH. Structural indigo carries the deep bands; fired brick is
the only colour the visitor is ever invited to press. Corners are square everywhere and
nothing in the system blurs. See `DESIGN.md`.

## The hero footage

`public/media/hero-foundation*.{mp4,jpg}` is derived from
`assets/videos/2023-01-16_timelapse-construccion-cimentacion_CndsVshp8vj.mp4` (48.8 MB,
2:12, 1276x720, with audio). The pipeline, if it needs rebuilding:

1. Take 18s-26s and slow it 1.5x, so the timelapse reads as a deliberate drift rather than
   a frantic one.
2. Cross-fade the last 1.5s over the first 1.5s to make the loop seamless (measured seam
   RMSE 0.051, against 0.271 for an arbitrary cut).
3. Grade with a highlight rolloff so peak luminance lands near 200, not 255. This is what
   makes the type legible; see The Graded Plate Rule in `DESIGN.md`.
4. Strip the audio, 24fps, encode wide (1276px, ~1.5 Mbps) and small (854px, ~700 kbps),
   and cut posters from frame 0 of each.

Total shipped: 3.0 MB, from 48.8 MB.

## Before this goes live

Three things are deliberately unfinished and are the owner's to resolve:

1. **The contact form has no backend.** `src/routes/Contact.tsx` validates properly and
   hands the message to the visitor's mail client with everything prefilled, which actually
   delivers — but it should POST to a form service (Formspree, Netlify Forms, Web3Forms).
   The `TODO(owner)` marks the spot.
2. **Project photography is hot-linked** from `mountainhillconstruction.com` and
   `business.bigbearchamber.com`. Download the images into `public/work/` and update
   `src/data/site.ts`; third-party origins can break or throttle at any time.
3. **No social proof exists yet.** There are no testimonials, review counts, project totals,
   or years-in-business figures anywhere in this repo, and none were invented. If you want
   them on the site, supply the real ones.

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: property owners in the Big Bear / San Bernardino Mountains area who need a
licensed general contractor for a build or remodel. They are usually evaluating two or
three local contractors at once, often on a phone, and the decision turns on whether the
contractor looks legitimate (license, insurance, real finished work) and whether they will
actually answer the phone.

Two recurring situations:

- **Homeowner / cabin owner** planning a remodel, addition, ADU, deck, or roof. Many are
  second-home owners who live down the hill and need someone they can trust on site
  without them.
- **Insurance restoration** after fire, water, or storm damage. This visitor arrives
  urgently and needs to know the contractor responds fast and documents for the carrier.

Commercial tenants and owners needing build-outs and tenant improvements are a real but
secondary audience.

## Product Purpose

The site exists to turn a search for a Big Bear contractor into a phone call, an email, or
a quote request. Success is a qualified inbound lead. It is not a portfolio, a storefront,
or a self-serve tool — every page is in service of contact.

**The site must look as professional as possible, because that is itself the argument.**
Confirmed 2026-09-20. A visitor comparing three local contractors cannot inspect anyone's
framing or flashing, so they read the website as a proxy for how the company runs a job: if
the site is careless, the assumption is that the work is too. Perceived quality of the site
is therefore not decoration on top of the offer — it is evidence for it, and it is what
earns the call from a homeowner who has never met this crew.

This raises the bar on execution rather than on ornament. Sharp real photography and
footage of actual crews outrank stock imagery and illustration; correct alignment,
consistent rhythm, and fast loads outrank effects.

## Positioning

Mountain Hill Construction builds *at altitude*. Snow load, freeze–thaw cycling, ice dams,
and steep or difficult sites are the constraints their work is engineered around, and
that is the claim a down-the-hill contractor cannot truthfully copy. Supporting facts:
in-house crews, vetted local subcontractors, and a dedicated project manager per job.

## Operating Context

- Discovery is overwhelmingly local organic search and referral; the site is usually the
  second or third thing a visitor checks after a map listing.
- Mobile-first in the strict sense: many visitors are standing on the property, outdoors,
  in daylight, on a phone, with mountain-grade cell service.
- The license number is a real verification path — visitors do look up CSLB numbers.
- Seasonality is sharp: snow load and restoration work spike in winter; decks, additions,
  and exterior work concentrate in summer.

## Capabilities and Constraints

Confirmed services:

Residential Construction · Commercial Construction · Kitchen Remodel · Bathroom Remodel ·
ADU Construction · Deck & Outdoor · Roofing & Windows · Insurance Restoration

Confirmed business facts (must be preserved exactly):

- CSLB License **#1024711**
- Phone **(909) 648-8760**, email **Rafael@mountainhillconstruction.com**
- Office **7563 Hwy 18, Big Bear City, CA 92314**
- Hours **Daily 7:00 AM – 7:00 PM**
- Service area: Big Bear Lake, Big Bear City, Fawnskin, Lake Arrowhead, Running Springs

Constraints:

- **Language: English only.** Confirmed 2026-09-20. No i18n layer for now.
- Static site. No backend, no CMS, no authentication.
- **The contact form has no working backend.** It validates client-side and hands the
  completed message to the visitor's mail client, which does deliver — but a form service
  (Formspree / Netlify Forms / Web3Forms) must still be chosen before launch. The previous
  site's `action="mailto:"` form failed silently and has been replaced.
- **Project photography is self-hosted** in `public/projects/`, with responsive WebP variants.
  Original source photography remains in `assets/` for future selection and reprocessing.

## Brand Commitments

- Name: **Mountain Hill Construction**.
- The logo is binding and is the source of the visual identity. Two assets exist:
  `assets/logo.jpg` (mark only) and `assets/logo_with_name.jpeg` (mark + wordmark).
- The mark's two colors, measured from the asset, are brand truth: brick red `#AB1D2E`
  and indigo `#3D3894`, with a steel-blue rule `#465D89`.
- The wordmark is set in **Futura Extra Bold**.
- Voice: plain, concrete, technical. It names materials and methods (helical piers, ice-dam
  prevention, waterproof membranes, snow loads) instead of adjectives. Keep it that way.
- **"Full Service" above the home headline is the client's copy and stays.** Confirmed
  2026-09-20 after it was removed once to satisfy a general styling rule against label text
  above a heading. That was the wrong call: a styling convention does not outrank the
  client's own words. Any future pass that wants to restructure the hero moves this line —
  it does not delete it.

## Evidence on Hand

- 15 selected project photographs are self-hosted, including 7 used in the home-page carousel.
- Credentials claimed on the existing site: CSLB #1024711, General Liability & Workers'
  Compensation, EPA Lead-Safe Certified, BBB A+, Big Bear Chamber member.

**Inherited claims that need the owner's confirmation.** These came from the previous site
(`legacy/`) and were carried over rather than invented, but they are not independently
confirmed and should be checked before launch:

- *"We respond within one business day"* — a response-time promise, currently on four pages.
- The `whyUs` list: *transparent pricing and clear schedules*, *dedicated project manager*,
  *clean jobsites, respectful crews*, *permits & inspections handled*. These are adjective
  claims and sit against Principle 2 below; either back them with something concrete or cut
  them.
- The three legacy project titles (Summit A-Frame, Fox Farm Kitchen, Lakeview Deck) remain
  unverified and are kept only in `legacy/`; the live site uses descriptive photo labels.

**Absences that must not be fabricated:** there are no testimonials, no client names, no
pricing, no project counts, no years-in-business figure, and no completion-time claims. Do
not invent any of these. If a layout wants social proof, it ships as a clearly marked
placeholder on the owner's replacement list.

## Product Principles

1. **Contact is never more than one action away.** Phone and quote are persistent, not
   parked on a single page.
2. **Proof over adjectives.** A license number, a named credential, and a photograph of
   finished work outrank any claim about quality.
3. **Altitude is the differentiator.** Where a generic contractor says "quality work," this
   site says snow load, freeze–thaw, ice dams, steep sites.
4. **Built for a phone, outdoors, in daylight.** Contrast, tap targets, and legibility are
   correctness requirements, not polish.
5. **Never fabricate credibility.** Missing proof stays missing and gets flagged to the
   owner.

## Accessibility & Inclusion

WCAG 2.2 AA as the floor, with body text targeting AAA where the palette allows. The
outdoor-daylight-on-a-phone scene makes high contrast and generous tap targets functional
requirements rather than compliance checkboxes.

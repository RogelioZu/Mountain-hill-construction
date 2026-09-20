---
name: Mountain Hill Construction
description: A masonry-bond design system built from the logo's interlocking pinwheel — square corners, structural indigo, and brick red reserved for action.
colors:
  brick-600: "#AB1D2E"
  brick-700: "#8E031E"
  brick-500: "#BE494D"
  brick-100: "#FDE0DE"
  indigo-700: "#3D3894"
  indigo-800: "#2E277C"
  indigo-900: "#201562"
  indigo-500: "#7277BC"
  indigo-100: "#E6E9F9"
  steel-500: "#465D89"
  steel-400: "#778AAD"
  steel-200: "#CCD5E4"
  bone-50: "#FBFAF7"
  bone-100: "#F7F4EF"
  bone-200: "#EEEBE6"
  bone-300: "#E2DFDB"
  bone-400: "#D2CFCA"
  ink-900: "#13141D"
  ink-700: "#2D2E37"
  ink-500: "#55565F"
  ink-400: "#6E6F78"
typography:
  display:
    fontFamily: "'Jost Variable', Jost, Futura, 'Century Gothic', sans-serif"
    fontSize: "clamp(3rem, 9vw, 6.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  display-film:
    fontFamily: "'Jost Variable', Jost, Futura, 'Century Gothic', sans-serif"
    fontSize: "clamp(2.75rem, 6.2vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "'Barlow Semi Condensed', 'Barlow', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
  meta:
    fontFamily: "'Barlow Semi Condensed', 'Barlow', sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  unit: "4px"
  course: "8px"
  band: "24px"
  section: "clamp(4rem, 9vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.brick-600}"
    textColor: "{colors.bone-50}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.brick-700}"
    textColor: "{colors.bone-50}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.indigo-700}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
    typography: "{typography.label}"
  button-secondary-hover:
    backgroundColor: "{colors.indigo-700}"
    textColor: "{colors.bone-50}"
  card:
    backgroundColor: "{colors.bone-50}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.none}"
    padding: "32px"
  input:
    backgroundColor: "{colors.bone-50}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  chip:
    backgroundColor: "{colors.indigo-100}"
    textColor: "{colors.indigo-800}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
    typography: "{typography.label}"
---

# Design System: Mountain Hill Construction

## Overview

**Creative North Star: "The Bond Pattern"**

The logo is not a picture of a mountain. It is a *bond* — the interlocking basket-weave
pattern a mason uses when courses have to carry load in two directions at once. Measured
off the asset, it resolves to an exact modular grid: a 33×33 field, bars 6 units thick,
gaps of 1 unit, arms 19 units long, four arms pinwheeled so that no two bars ever overlap.
That ratio and that geometry are the system. Everything here is derived from it rather
than decorated with it.

The result is a world of laid courses and struck lines. Sections stack like masonry
courses on a consistent rhythm. A steel-blue datum line — the rule that runs behind the
mark in the original artwork — is struck across the page to set each course, exactly as a
mason snaps a line before laying the first brick. Corners are square everywhere, because
the mark has no curve anywhere in it and a softened corner would be the first lie the
system tells. Depth comes from tonal layering and hard offsets, never from a blur.

Indigo is the structure: it owns the header, the footer, and the deep bands, carrying
roughly thirty percent of any page. Brick red is load-bearing in a different sense — it is
the only color the visitor is ever invited to press, and it appears nowhere else. Against a
warm bone ground the two brand colors stay separated by role rather than fighting for the
same surface, which is what keeps a red-and-blue palette from reading as a flag.

**Key Characteristics:**

- Zero border-radius. Every corner in the system is 90°.
- No blurred shadows. Depth is tonal layering plus hard 6px offsets on the weave axis.
- Futura-lineage geometric caps (Jost) for display only; a warm signage grotesque (Barlow) for everything else.
- A struck steel-blue datum line as the recurring structural device.
- Brick red is an action color exclusively; it never decorates.
- Pattern geometry is always the logo's real 6:1 bar-to-gap ratio, never an approximation.

## Colors

A masonry palette: warm mineral ground, deep structural indigo, and a single fired-clay red
held in reserve for action.

### Primary

- **Structural Indigo** (`indigo-700`): the load-bearing color, lifted directly from the
  mark's blue bars. It owns the hero, deep full-bleed bands, the footer, the header's
  closing bar, and display headings on light ground. This is the color the site is *built* from — expect it on
  25–35% of any page's area. Knockout text on it is `bone-50` at 9.15:1.
- **Deep Indigo** (`indigo-800`, `indigo-900`): stacked bands and the footer floor, used to
  layer depth beneath `indigo-700` without introducing a shadow.

### Secondary

- **Fired Brick** (`brick-600`): the mark's red bars, and the single action color. Primary
  buttons, the phone number, and the active nav marker. Nothing else. 6.80:1 on bone, and
  6.83:1 for `bone-50` knockout text on it. `/foundations` computes these live from the
  tokens; that table is the authority if this line ever drifts.
- **Kiln Brick** (`brick-700`): the pressed and hovered state of every brick surface.

### Tertiary

- **Struck Steel** (`steel-500`): the datum line. Lifted from the horizontal rule in the
  original artwork, where it runs behind the mark and breaks around it. Used for section
  rules, dividers, meta text on light ground, and the ruled edge of quiet containers. It is
  the connective tissue between indigo and neutral and must never be promoted to an action
  color.
- **Pale Steel** (`steel-200`): hairline dividers and input borders at rest.

### Neutral

- **Bone** (`bone-50`, `bone-100`): the page ground. A warm mineral white at chroma 0.0074,
  hue 80.7 — limestone, not cream. It is warm enough to separate from the cool indigo and
  restrained enough that it never reads as parchment.
- **Mortar** (`bone-200`, `bone-300`, `bone-400`): sunken surfaces, course dividers, and
  disabled fills.
- **Ink** (`ink-900`): body text. An indigo-tinted graphite (hue 280, chroma 0.0175), not a
  neutral black, so text sits inside the indigo world rather than beside it. 16.7:1 on bone.
- **Ink Secondary / Muted** (`ink-500`, `ink-400`): lead paragraphs and meta text. Both
  clear AA on bone at 6.95:1 and 4.76:1.

### Named Rules

**The 60/30/10 Bond.** Every page resolves to roughly 60% neutral ground, 30% structural
indigo, 10% everything else. If indigo has dropped below a quarter of the page the design
has drifted toward a generic light template; if it has passed half the page it has stopped
being structure and become a mood.

**The Brick Is Never Decoration Rule.** Brick red appears only where the visitor can act:
primary buttons, the tel: link, the active nav marker, and the drawer's leading edge. It
never fills a background, never tints an icon, never underlines a heading, and it is not
the focus ring — list bullets, section rules and figure captions all take `steel-500`
instead. Its rarity is exactly what
makes a quote button unmissable on a phone in daylight. Audit test: count the brick
elements in a viewport. More than three and one of them is decoration.

**The Two-Bar Rule.** When indigo and brick appear in the same component they appear as
separated bars, never as a gradient, a blend, or adjacent fills sharing an edge. The mark's
arms never touch; neither do ours.

## Typography

**Display Font:** Jost Variable (with Futura, Century Gothic, sans-serif)
**Body Font:** Barlow (with Helvetica Neue, Arial, sans-serif)
**Label Font:** Barlow Semi Condensed

**Character:** The wordmark is set in Futura Extra Bold — confirmed by the pointed `M`
vertex that descends to the baseline, the geometrically circular `O`, and the straight
splayed leg on the `R`. Jost is a Futura revival and is the system's licensed-free stand-in,
so the page's largest type is literally the logo's type. Against it, Barlow is a warm
Californian signage grotesque: squarer, slightly softened, built to be read at a glance
from a truck. The pairing is a drafted title block above a highway sign — geometry for the
name, legibility for the work.

### Hierarchy

- **Display** (Jost 800, `clamp(3rem, 9vw, 6.5rem)`, line-height 0.9, tracking -0.02em,
  uppercase): `h1` only, one per page. Set in uppercase because the wordmark is uppercase
  and Futura's lowercase would break the lockup's voice.
- **Display over footage** (Jost 800, `clamp(2.75rem, 6.2vw, 5.25rem)`, uppercase): the
  `h1` when it sits on the film hero. One step down from Display, because at full size the
  line outruns the type plate and spills into the open field, and because over moving
  footage the type no longer has to carry the viewport alone.
- **Headline** (Barlow 700, `clamp(2rem, 4.5vw, 3rem)`, line-height 1.08, tracking
  -0.015em): `h2`, section openers. Sentence case.
- **Title** (Barlow 600, 1.375rem, line-height 1.25): `h3`, card and service headings.
- **Body** (Barlow 400, 1.0625rem/17px, line-height 1.65, max 68ch): all running text. 17px
  rather than 16px because the primary reading scene is outdoors on a phone.
- **Lead** (Barlow 400, 1.1875rem/19px, line-height 1.6, max 60ch, `ink-500`): the single
  paragraph that follows a display or headline. One per section; a second lead in the same
  course means neither is leading.
- **Label** (Barlow Semi Condensed 600, 0.8125rem, tracking 0.12em, uppercase): eyebrows,
  nav, buttons, credentials, figure captions. Barlow Semi Condensed ships at weight 600
  only — do not specify another weight for it, because it will silently render as 600.
- **Meta** (Barlow Semi Condensed 600, 0.625rem, tracking 0.1em, uppercase): one use only —
  the licence line inside the brand lockup, where it must sit under the wordmark without
  competing with it. Do not reach for this step anywhere else.

### Named Rules

**The Wordmark Rule.** Jost is display-only. It sets `h1` and the wordmark and nothing
else — never a paragraph, never a button, never a nav item. Futura at text sizes has a
tiny x-height and poor legibility at a glance, which is precisely the failure mode this
site cannot afford.

**The Uppercase Pair Rule.** Only two things are uppercase: the display line and the label
role. A `h2` or a body string set in caps breaks the hierarchy, because caps is how this
system signals "structural," not "important."

**The 6:1 Tracking Rule.** Label tracking (0.12em) and rule weights derive from the mark's
6:1 bar-to-gap ratio rather than from taste. Where the system needs a new spacing or
stroke relationship, derive it from 6:1 before inventing one.

## Layout

A course-based grid. The container is `min(100% - 3rem, 1200px)`. The page is built on a 4px base unit, with the
meaningful rhythm at 8px (`course`) and 24px (`band`); section padding is
`clamp(4rem, 9vw, 7.5rem)`.

Sections stack as courses and alternate ground: bone, then bone-sunken, then a full-bleed
indigo band, in a repeating pattern that keeps the 60/30/10 bond true down the whole page.
A course never runs more than two screens without a change of ground.

Vertical rhythm follows the standard heading relationship: more space above a heading than
below it — `band × 2` above, `course × 2` below — so headings bind to the content they
introduce rather than floating between blocks.

Responsive behavior collapses by course, not by card. Multi-column course content goes to
a single column at 900px; the nav collapses to a full-height drawer at 860px. Tap targets
are 48px minimum throughout, which is a correctness requirement given the outdoor phone
scene, not a comfort setting. The persistent contact bar is fixed to the bottom of the
viewport below 860px so the phone number is never more than one thumb-reach away.

### Named Rules

**The Datum Rule.** Every major section opens with a struck steel-blue rule running the
full container width, broken by the section's eyebrow label exactly as the logo's rule is
broken by the mark. This one device does the work that borders, cards, and shadows do in a
generic template, and it is the fastest way to tell whether a new page belongs to this
system.

## Elevation & Depth

**There are no blurred shadows in this system.** Depth is built three ways, in order of
preference: tonal layering (bone → bone-200 → indigo-700 → indigo-900), a struck steel
rule, and a hard offset block.

The hard offset is the signature. A raised surface casts a solid, un-blurred 6px offset in
`indigo-700` along the weave's down-right axis — the same axis the mark's red arm runs on.
It reads as a physical block sitting proud of the page rather than as a floating card.

### Shadow Vocabulary

- **Offset Block** (`box-shadow: 6px 6px 0 <indigo-700>`): interactive surfaces at rest —
  featured project figures and gallery items. Static panels stay flat; only something the
  visitor can press earns the offset.
- **Offset Block Pressed** (`box-shadow: 2px 2px 0 <indigo-700>` with
  `translate(4px, 4px)`): the hover and active state. The surface moves *into* the page
  along the offset axis, closing the gap rather than lifting.
- **Focus Ring** (`outline: 3px solid <bone-50>; outline-offset: 2px` plus
  `box-shadow: 0 0 0 8px <ink-900>`): every focusable element. Two-tone, because no single
  colour clears 3:1 against bone, indigo *and* brick at once — a brick ring on a brick
  button measures 1.00:1. The shadow has zero blur, so it stays inside the No-Blur Rule.

### Named Rules

**The No-Blur Rule.** No `box-shadow` carries a blur radius, and no surface glows. Masonry
does not glow; if a surface needs separation, change its tone or strike a rule.

**The One Glass Rule.** Amended 2026-09-20 at the owner's direction, which previously
banned `backdrop-filter` outright. Blur is now permitted in exactly one place and for one
reason: the hero's type plate is glass, so the footage behind it reads as movement and mass
without competing with the type. It is a material with something real behind it, not a
decorative frosting applied to a flat ground — which is the distinction the old blanket ban
was protecting. A second glass surface anywhere on the site breaks this rule; so does glass
over anything that is not moving imagery.

## Shapes

`border-radius: 0` everywhere, without exception — buttons, cards, inputs, images, chips,
the drawer, the focus ring. The mark contains eight rectangles and not one curve, and the
square corner is the single cheapest signal that a new component belongs to this system.

The recurring silhouette is the **bar**: a rectangle whose short side is 6 units and whose
long side is 19, or a simple multiple. Eyebrow rules, the nav's active marker, chips,
dividers, and the loading state are all expressions of the same bar. Where the system needs
ornament it uses the weave — four arms of two bars, pinwheeled — at low opacity on indigo
ground, never as a busy repeating tile.

Borders are 1px `steel-200` at rest and 2px `indigo-700` when a container is meaningful.
A 6px `brick-600` bar on the leading edge marks the single most important block on a page,
and there is only ever one.

## Components

### Buttons

- **Shape:** square (0px radius), 48px minimum height, label typography, uppercase.
- **Primary:** fired brick fill (`brick-600`) with bone text, 16px/32px padding. One per
  viewport region.
- **Hover / Focus:** fill deepens to `brick-700` over 160ms; focus shows the brick outline
  ring at 3px offset 3px. No lift, no scale, no blur.
- **Secondary:** transparent with a 2px `indigo-700` border and indigo label; on hover the
  fill floods to `indigo-700` and the label knocks out to bone.
- **Ghost:** label-only in `steel-500` with a 2px transparent bottom bar that becomes
  `brick-600` on hover. Used inside dense course content only.

### Chips

- **Style:** `indigo-100` fill, `indigo-800` label text, square, 8px/14px padding, no border.
- **State:** chips in this system are static taxonomy markers (service categories), not
  filters. A selected state would need a new variant; do not repurpose the resting one.

### Cards / Containers

- **Corner Style:** square (0px).
- **Background:** `bone-50` on a `bone-200` sunken course; `indigo-800` on an `indigo-700`
  band.
- **Shadow Strategy:** flat at rest. Only figures and the quote panel take the Offset Block;
  see Elevation & Depth.
- **Border:** 1px `steel-200`, or a 6px `brick-600` leading-edge bar on the one primary
  block per page.
- **Internal Padding:** 32px desktop, 24px below 700px.

### Inputs / Fields

- **Style:** `bone-50` fill, 1px `steel-200` border, square, 14px/16px padding, 48px min
  height, body typography at 17px so iOS never zooms on focus.
- **Focus:** border becomes 2px `indigo-700` and the brick focus ring appears. The label
  above turns `indigo-700`.
- **Error:** border 2px `brick-600` with the message in `brick-700` label type below the
  field. Never color-only — the message text is required.

### Navigation

- **Style:** a `bone-50` plate, full width, 72px tall, sticky, closed by a 6px `indigo-700`
  bar along its bottom edge. Wordmark left, label-type links right, brick primary button at
  the far right. The header is light so the mark renders in its true artwork colours; the
  indigo bar is both the edge the deep hero hangs from and the separator against bone
  content scrolling underneath.
- **States:** links are `ink-600` at rest and `indigo-700` on hover; the current route
  carries a 6px `brick-600` bar beneath it — the only brick in the header besides the
  button.
- **Mobile:** below 860px the links move into a full-height `bone-50` drawer with a 6px
  `brick-600` leading edge, sliding in along the weave axis. The drawer is modal: the page
  behind it locks its scroll and goes `inert`. A fixed bottom bar pins Call and Quote to the
  viewport.

### The Datum Rule (signature component)

A full-width 1px `steel-500` line with the section's uppercase label sitting in a bone-
colored gap struck through it, offset 32px from the left container edge. It opens every
major section and is the system's most recognizable device. The gap is what makes it read
as the logo's broken rule rather than as a generic `<hr>`.

### The Film Hero (signature component)

The home hero's ground is an aerial timelapse of a foundation being formed on a steep
mountain site. It is the one claim the site cannot make in words — a real crew, at real
altitude — and the formwork's timber grid rhymes with the bond the system is built from.

The field is divided into two zones by a hard edge, never a gradient:

- **The type plate** (left): `indigo-800` glass — 22% tint over a 16px backdrop blur at
  desktop, 34% over 14px on the phone — carrying the display line, tagline, credentials and
  both actions. At 22% the tint alone no longer makes the plate read as indigo, so the
  footage beneath it is recoloured to `indigo-700` with `mix-blend-mode: color`, which takes
  the brand hue while keeping the footage's own luminance and detail. Brand identity there
  costs no transparency. Its width is the bond's own proportion, the 19u arm over the 33u field
  (`calc(19 / 33 * 100%)`), so the hero is divided the way the mark is divided rather than
  on a ratio picked by eye. Its trailing edge is a 6px `steel-500` bar: the datum rule,
  running vertically here, which is the only place in the system it does. That hard edge is
  what keeps the glass reading as a plate instead of a fade.
- **The open field** (right): the footage under `indigo-900` at 0.16 — enough to own it as
  brand, light enough that the crew and the formwork read clearly, because a visitor who
  cannot see the work gets nothing from the footage being there at all.

Under 860px a vertical split has no room: the glass covers the whole field, denser and less
blurred, because that is both the outdoor-daylight case and the expensive one to composite.

**The Measured Tint Rule.** The glass tint is set by measurement, not by eye. Sweep it, and
take the most transparent value that still clears contrast against the *brightest* pixel
under each text block, not the average. Re-sweep whenever the footage changes — the right
tint is a property of the clip, not a constant.

**Blur is a legibility lever and a visibility lever at once, pulling opposite ways.** More
blur averages the bright pixels and raises worst-case contrast; less blur shows the footage.
Measured on the graded clip at 22% tint, the credential row runs 5.69:1 at 48px down to
4.86:1 at 6px — so the whole usable range clears AA, and the choice is compositional, not
mechanical. 48px hides the footage completely; 16px is where the formwork reads as structure
while the plate still reads as frosted glass; below about 10px it stops looking like glass
and starts looking like soft-focus video.

**The order the levers actually work in.** Learned the hard way going from 58% to 22% tint.
At 22% over the then-current grade the credential row measured 3.47:1, a clear fail. Blur
was tried first and is the weakest lever: it averages the bright pixels but cannot move the
mean, and even 120px only reached 4.22:1 — still failing, at a radius too expensive to
composite. What worked was the encode: a harder highlight roll-off (peak luma 255 → 152)
took the same 22% tint to 6.00:1. So when glass has to get more transparent, grade the clip
down first, raise blur second, and touch the tint last. The cost is a darker open field, so
drop `--wash-field` when the grade takes over its job.

**The cost of glass, recorded so it is not rediscovered.** Glass requires the footage to run
full-bleed behind the plate. An opaque plate does not, which allows a native-height square
crop of the source rather than the whole frame scaled across the viewport — worth 2.36× the
bits per pixel in the open field. Glass was chosen over that sharpness deliberately. If the
open field ever needs to be sharper than the plate needs to be transparent, that is the
trade to revisit.

**The Graded Footage Rule.** Grade the clip in the encode rather than veiling it in CSS.
This was first learned the hard way: under the earlier semi-transparent plate, raw footage
measured 1.74:1 at its brightest pixel under the display line, and a highlight roll-off in
the encode took the same wash to 8.49:1. The plate is opaque now, so legibility no longer
depends on the grade — but the grade stays, gentler, because it keeps the open field from
blowing out and keeps it inside the indigo world. Piling on opacity until raw highlights
submit produces a dead grey field and throws away the reason for using film.

**The Earned Playback Rule.** The poster paints immediately and is the complete experience
on its own. The video mounts only when the visitor's situation can afford it: never under
`prefers-reduced-motion`, never under Save-Data or a 2G/3G effective connection, and at a
smaller encode below 861px. PRODUCT.md's operating context is explicit that visitors stand
on properties outdoors on mountain-grade cell service; a 1.9 MB autoplay is a bad trade for
them. Video is always muted, looping, `playsInline`, and cross-faded into a seamless loop
so there is no visible cut. Playback starts after the initial page load; `preload="metadata"`
is only a browser hint, and playback itself still downloads the film. A visible, keyboard-
reachable Pause/Play control freezes and resumes the current frame. Changing the motion
or data-saving preference removes the video and restores the poster immediately.

### The Brick Mark (signature component)

The logo reproduced as exact vector geometry rather than as the source JPEG: a 33×33 field
with eight bars — four brick, four indigo — arranged as a pinwheel and rotated 45°. Bars
are 6 units thick with 1-unit gaps and 19-unit arms. It renders crisply at 24px and at
2000px, and replaces the unrelated orange mountain-triangle SVG the previous site used as
a placeholder.

Three variants: `color` on light grounds, which is the artwork exactly and is what the
header uses; `knockout` on deep indigo grounds, where the indigo arm reverses to
`--mark-secondary` (bone) so the mark does not vanish into its background — the footer's
case; and `mono`, which inherits `currentColor`.

**The True Mark Rule.** Wherever the layout can afford a light surface under the mark, use
it and render `color`. Knockout is a concession to a deep ground, never a preference: the
site's identity is strongest where the logo is simply itself.

## Do's and Don'ts

### Do:

- **Do** keep `border-radius: 0` on every surface without exception.
- **Do** reserve `brick-600` for things the visitor can act on, and audit each viewport for the three-element ceiling.
- **Do** open every major section with the struck steel datum rule and its broken label gap.
- **Do** set `h1` in Jost 800 uppercase and everything else in Barlow.
- **Do** build depth with tonal layering and the 6px hard Offset Block on the down-right axis.
- **Do** hold body copy to 68ch and set it at 17px, for the outdoor-phone reading scene.
- **Do** derive new spacing and stroke relationships from the mark's 6:1 ratio.
- **Do** render the logo from the vector `BrickMark` component, never from `assets/logo.jpg`, at any size under 400px.
- **Do** grade footage so its highlights roll off before relying on a wash for legibility, and measure the result against the brightest pixel rather than the average.
- **Do** ship a poster that stands on its own, and treat autoplay as a privilege the connection has to earn.

### Don't:

- **Don't** use any `box-shadow` with a blur radius, or a glow of any kind. `backdrop-filter` is permitted only on the hero's glass plate — see The One Glass Rule.
- **Don't** let indigo and brick share an edge, blend, or appear in a gradient together.
- **Don't** set Jost below 2rem or use it for body, nav, or button text — the brand lockup's wordmark at 17px is the single exception. The one exception is
  the brand lockup's name (17px), which is the wordmark rather than running type.
- **Don't** introduce a third brand hue. The palette's tertiary slot is filled by `steel-500` and it is closed.
- **Don't** use pure white `#FFFFFF` as a page ground; the ground is `bone-50`.
- **Don't** set `h2` or body copy in uppercase — caps is reserved for display and label roles.
- **Don't** add a gradient or a rounded "pill" badge; both are outside this world. Glass is allowed once, on the hero plate, and nowhere else.
- **Don't** fabricate testimonials, star ratings, project counts, or years-in-business figures to fill a layout. See PRODUCT.md — that evidence does not exist yet.
- **Don't** put a gradient scrim under type on footage. This world divides tone with hard edges; a soft fade is the category's default and belongs to a different system.
- **Don't** autoplay video with sound, without a poster, or without a `prefers-reduced-motion` escape.

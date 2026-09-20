import { BondWatermark, BrickMark } from '../brand/BrickMark';
import { Course } from '../components/Primitives';

/* --- live contrast, so the numbers on this page can never go stale --------- */

function channel(c: number) {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string) {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function grade(ratio: number, large = false) {
  const aaa = large ? 4.5 : 7;
  const aa = large ? 3 : 4.5;
  if (ratio >= aaa) return 'AAA';
  if (ratio >= aa) return 'AA';
  return 'FAIL';
}

/* --- the ramps, mirrored from tokens.css ---------------------------------- */

type Ramp = { name: string; role: string; brand: string; steps: [string, string][] };

const RAMPS: Ramp[] = [
  {
    name: 'Fired Brick',
    role: 'Action only — buttons, phone, active marker',
    brand: '600',
    steps: [
      ['50', '#fff1f0'],
      ['100', '#fde0de'],
      ['200', '#f6c6c4'],
      ['300', '#eaa6a4'],
      ['400', '#d37171'],
      ['500', '#be494d'],
      ['600', '#ab1d2e'],
      ['700', '#8e031e'],
      ['800', '#700115'],
      ['900', '#55000e'],
      ['950', '#380006'],
    ],
  },
  {
    name: 'Structural Indigo',
    role: 'Header, footer, deep bands — ~30% of every page',
    brand: '700',
    steps: [
      ['50', '#f4f5fd'],
      ['100', '#e6e9f9'],
      ['200', '#d1d5f0'],
      ['300', '#b6bae3'],
      ['400', '#9499d1'],
      ['500', '#7277bc'],
      ['600', '#5556a7'],
      ['700', '#3d3894'],
      ['800', '#2e277c'],
      ['900', '#201562'],
      ['950', '#130449'],
    ],
  },
  {
    name: 'Struck Steel',
    role: 'Datum rules, dividers, meta text',
    brand: '500',
    steps: [
      ['100', '#e3e8f2'],
      ['200', '#ccd5e4'],
      ['300', '#afbbd2'],
      ['400', '#778aad'],
      ['500', '#465d89'],
      ['600', '#32476f'],
      ['700', '#223458'],
      ['800', '#152545'],
    ],
  },
  {
    name: 'Bone',
    role: 'Page ground and sunken courses',
    brand: '50',
    steps: [
      ['50', '#fbfaf7'],
      ['100', '#f7f4ef'],
      ['200', '#eeebe6'],
      ['300', '#e2dfdb'],
      ['400', '#d2cfca'],
      ['500', '#bdbbb6'],
      ['600', '#a19e9a'],
    ],
  },
  {
    name: 'Ink',
    role: 'Body copy — indigo-tinted graphite, never neutral black',
    brand: '900',
    steps: [
      ['300', '#8a8b93'],
      ['400', '#6e6f78'],
      ['500', '#55565f'],
      ['600', '#3f4049'],
      ['700', '#2d2e37'],
      ['800', '#20212a'],
      ['900', '#13141d'],
      ['950', '#0a0a13'],
    ],
  },
];

const PAGE = '#fbfaf7';

const CONTRAST_CHECKS: [string, string, string, string, boolean][] = [
  ['Body copy', 'Ink 900', '#13141d', PAGE, false],
  ['Lead paragraph', 'Ink 500', '#55565f', PAGE, false],
  ['Meta / hint text', 'Ink 400', '#6e6f78', PAGE, false],
  ['Display heading', 'Indigo 700', '#3d3894', PAGE, true],
  ['Datum label', 'Steel 600', '#32476f', PAGE, false],
  ['Primary button', 'Bone 50 on Brick 600', '#fbfaf7', '#ab1d2e', false],
  ['Header nav link', 'Indigo 100 on Indigo 700', '#e6e9f9', '#3d3894', false],
  ['Deep band body', 'Indigo 200 on Indigo 700', '#d1d5f0', '#3d3894', false],
];

function Ramp({ ramp }: { ramp: Ramp }) {
  return (
    <div className="ramp">
      <div className="ramp__bar">
        {ramp.steps.map(([step, hex]) => (
          <div
            key={step}
            className="ramp__step"
            style={{ background: hex }}
            data-brand={step === ramp.brand}
            title={`${ramp.name} ${step} — ${hex.toUpperCase()}`}
          />
        ))}
      </div>
      <div className="ramp__meta">
        <strong style={{ color: 'var(--text-primary)' }}>{ramp.name}</strong>
        <span>
          {ramp.steps.find(([s]) => s === ramp.brand)?.[1].toUpperCase()} · step {ramp.brand}
        </span>
      </div>
      <p className="field__hint" style={{ margin: 0 }}>
        {ramp.role}
      </p>
    </div>
  );
}

function Spec({
  role,
  face,
  detail,
  children,
}: {
  role: string;
  face: string;
  detail: string;
  children: React.ReactNode;
}) {
  return (
    <div className="spec">
      <div className="spec__meta">
        <strong>{role}</strong>
        <span>{face}</span>
        <span>{detail}</span>
      </div>
      <div className="spec__sample">{children}</div>
    </div>
  );
}

export function Foundations() {
  return (
    <>
      <section className="page-head on-deep">
        <BondWatermark />
        <div className="container">
          <span className="label">The Bond Pattern</span>
          <h1>Design System</h1>
          <p className="lead">
            Every value below is measured from the logo artwork, then extended in OKLCH so the
            steps are even to the eye. Nothing here was picked by taste alone.
          </p>
        </div>
      </section>

      {/* --- THE MARK --------------------------------------------------- */}
      <Course label="The mark">
        <div className="stack stack--loose">
          <div className="stack">
            <h2>A masonry bond, not a mountain</h2>
            <p className="lead">
              Rotated back to axis-aligned, the logo resolves to an exact modular grid: a 33-unit
              field, bars 6 units thick, gaps of 1 unit, arms 19 units long. Four arms,
              pinwheeled, no two bars overlapping. The whole system is derived from that 6:1
              ratio.
            </p>
          </div>

          <div className="mark-row">
            <figure style={{ margin: 0 }}>
              <BrickMark size={168} />
              <figcaption>Color · the artwork</figcaption>
            </figure>
            <figure className="mark-row__deep" style={{ margin: 0 }}>
              <BrickMark size={96} variant="knockout" />
              <figcaption>Knockout · deep ground</figcaption>
            </figure>
            <figure style={{ margin: 0, color: 'var(--indigo-700)' }}>
              <BrickMark size={96} variant="mono" />
              <figcaption>Mono · currentColor</figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <BrickMark size={38} />
              <figcaption>38px · header</figcaption>
            </figure>
            <figure style={{ margin: 0 }}>
              <BrickMark size={24} />
              <figcaption>24px · favicon floor</figcaption>
            </figure>
          </div>

          <div className="panel">
            <h3>The True Mark Rule</h3>
            <p>
              Wherever the layout can afford a light surface under the mark, use it and
              render the colour variant — that is the artwork exactly, and it is why the
              header is bone. Knockout is a concession to a deep ground, never a preference.
              The identity is strongest where the logo is simply itself.
            </p>
          </div>

          <ul className="chips">
            <li className="chip">Field 33u</li>
            <li className="chip">Bar 6u</li>
            <li className="chip">Gap 1u</li>
            <li className="chip">Arm 19u</li>
            <li className="chip">Rotation 45°</li>
          </ul>
        </div>
      </Course>

      {/* --- COLOR ------------------------------------------------------- */}
      <Course tone="sunken" label="Color">
        <div className="stack stack--loose">
          <div className="stack">
            <h2>Five ramps, two of them brand</h2>
            <p className="lead">
              The white notch marks the step measured directly off the artwork. Everything
              above and below it is generated, holding hue constant and tapering chroma so
              tints never go neon and shades never go muddy.
            </p>
          </div>

          <div className="swatches">
            {RAMPS.map((ramp) => (
              <Ramp key={ramp.name} ramp={ramp} />
            ))}
          </div>

          <div className="panel">
            <h3>The 60/30/10 Bond</h3>
            <p>
              Roughly 60% neutral ground, 30% structural indigo, 10% everything else. Brick red
              appears only where the visitor can act — never as a background, never as
              decoration. Count the brick elements in a viewport: more than three and one of
              them is decoration.
            </p>
          </div>
        </div>
      </Course>

      {/* --- CONTRAST ---------------------------------------------------- */}
      <Course label="Contrast">
        <div className="stack">
          <h2>Measured, not assumed</h2>
          <p className="lead">
            Computed live in the browser from the tokens themselves. The reading scene is a
            phone, outdoors, in daylight, so body copy targets AAA rather than AA.
          </p>
          <table className="contrast-table">
            <thead>
              <tr>
                <th scope="col">Use</th>
                <th scope="col">Pair</th>
                <th scope="col">Grade</th>
                <th scope="col">Ratio</th>
              </tr>
            </thead>
            <tbody>
              {CONTRAST_CHECKS.map(([use, pair, fg, bg, large]) => {
                const ratio = contrast(fg, bg);
                return (
                  <tr key={use}>
                    <th scope="row" style={{ fontFamily: 'var(--font-body)', textTransform: 'none', letterSpacing: 'normal', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>
                      {use}
                    </th>
                    <td>{pair}</td>
                    <td>
                      <span className="pass" data-grade={grade(ratio, large)}>
                        {grade(ratio, large)}
                      </span>
                    </td>
                    <td>{ratio.toFixed(2)}:1</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Course>

      {/* --- TYPE -------------------------------------------------------- */}
      <Course tone="sunken" label="Typography">
        <div className="stack stack--loose">
          <div className="stack">
            <h2>Jost for the name, Barlow for the work</h2>
            <p className="lead">
              The wordmark is Futura Extra Bold — the pointed <em>M</em> vertex on the baseline,
              the circular <em>O</em>, the straight splayed leg on the <em>R</em>. Jost is a
              Futura revival, so the page’s largest type is literally the logo’s type. Barlow
              is a Californian signage grotesque: squarer, warmer, built to be read at a glance.
            </p>
          </div>

          <div>
            <Spec role="Display" face="Jost 800 · uppercase" detail="clamp(3rem, 9vw, 6.5rem) / 0.9 / −0.02em">
              {/* Display type, not a second h1 — one h1 per page. */}
              <p className="specimen-display">General Contractor</p>
            </Spec>

            <Spec role="Headline" face="Barlow 700" detail="clamp(2rem, 4.5vw, 3rem) / 1.08 / −0.015em">
              <h2>Residential &amp; commercial construction</h2>
            </Spec>

            <Spec role="Title" face="Barlow 600" detail="1.375rem / 1.25">
              <h3>Insurance Restoration</h3>
            </Spec>

            <Spec role="Body" face="Barlow 400" detail="1.0625rem / 1.65 · max 68ch">
              <p>
                Built for altitude, snow load, and durability. We manage design coordination,
                permits, and construction, and our crews are in-house so the people on your site
                on day one are the same people there at final inspection.
              </p>
            </Spec>

            <Spec role="Label" face="Barlow Semi Condensed 600" detail="0.8125rem · 0.12em · uppercase">
              <span className="label" style={{ color: 'var(--steel-600)' }}>
                CSLB #1024711 · Licensed &amp; Insured
              </span>
            </Spec>
          </div>

          <div className="panel panel--quiet">
            <h3>The Wordmark Rule</h3>
            <p>
              Jost is display-only. It sets <code>h1</code> and the wordmark and nothing else —
              never a paragraph, never a button, never a nav item. Futura at text sizes has a
              tiny x-height and poor glance legibility, which is exactly the failure this site
              cannot afford.
            </p>
          </div>
        </div>
      </Course>

      {/* --- COMPONENTS -------------------------------------------------- */}
      <Course label="Components">
        <div className="stack stack--loose">
          <div className="stack">
            <h2>Square corners, hard offsets, no blur</h2>
            <p className="lead">
              The mark contains eight rectangles and not one curve. A softened corner would be
              the first lie the system tells.
            </p>
          </div>

          <div className="grid-2">
            <div className="stack">
              <span className="label" style={{ color: 'var(--steel-600)' }}>
                Buttons
              </span>
              <div className="btn-row">
                <button className="btn btn--primary" type="button">
                  Get a Free Quote
                </button>
                <button className="btn btn--secondary" type="button">
                  View Projects
                </button>
                <button className="btn btn--primary" type="button" disabled>
                  Sending…
                </button>
              </div>
            </div>

            <div className="stack">
              <span className="label" style={{ color: 'var(--steel-600)' }}>
                Chips
              </span>
              <ul className="chips">
                <li className="chip">Residential</li>
                <li className="chip">ADU</li>
                <li className="chip">Roofing</li>
              </ul>
            </div>

            <div className="stack">
              <span className="label" style={{ color: 'var(--steel-600)' }}>
                Field · rest
              </span>
              <div className="field" style={{ margin: 0 }}>
                <label htmlFor="demo-ok">Phone</label>
                <input id="demo-ok" type="tel" defaultValue="(909) 648-8760" />
              </div>
            </div>

            <div className="stack">
              <span className="label" style={{ color: 'var(--steel-600)' }}>
                Field · error
              </span>
              <div className="field field--error" style={{ margin: 0 }}>
                <label htmlFor="demo-bad">Email</label>
                <input id="demo-bad" type="email" defaultValue="rafael@" aria-invalid />
                <span className="field__error">
                  Check this email address — it looks incomplete.
                </span>
              </div>
            </div>
          </div>

          <div className="stack">
            <span className="label" style={{ color: 'var(--steel-600)' }}>
              The offset block — depth without a shadow
            </span>
            <div className="grid-3">
              <figure className="figure">
                <div
                  style={{
                    aspectRatio: '4 / 3',
                    background: 'var(--bone-300)',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <BrickMark size={64} />
                </div>
                <figcaption>At rest · 6px offset</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Course>

      <Course tone="deep">
        <div className="stack">
          <h2>The rules, in short</h2>
          <ul className="ticks" style={{ maxWidth: '68ch' }}>
            <li>Zero border-radius. Every corner is 90°.</li>
            <li>No blurred shadows, no glass, no glow. Depth is tone and hard offset.</li>
            <li>Brick red only where the visitor can act.</li>
            <li>Jost above 2rem only; Barlow everywhere else.</li>
            <li>Indigo and brick never share an edge or blend.</li>
            <li>Body copy at 17px, held to 68ch.</li>
          </ul>
        </div>
      </Course>
    </>
  );
}

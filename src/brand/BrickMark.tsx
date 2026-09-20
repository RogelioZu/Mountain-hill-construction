/**
 * The Brick Mark — exact vector reconstruction of the Mountain Hill logo.
 *
 * Measured off assets/logo.jpg by rotating the artwork back to axis-aligned and
 * reading the eight bar rectangles. The geometry resolves to a clean modular
 * grid with no fudge factors:
 *
 *   field 33u · bar 6u · gap 1u · arm 19u      (6:1 bar-to-gap)
 *   33 = 19 (arm) + 1 (gap) + 13 (paired bars)
 *
 * Four arms, pinwheeled, no two bars overlapping — a masonry basket-weave bond.
 * The whole field is then rotated 45°, which is why the logo reads as a diamond.
 *
 * This replaces the raster JPEG at every size under ~400px, and replaces the
 * orange mountain-triangle placeholder the previous site shipped.
 */

const BAR = 6;
const GAP = 1;
const ARM = 19;
const FIELD = 33;

/** Half-diagonal of the rotated field, used to size the viewBox. */
const DIAG = FIELD * Math.SQRT2;
const PAD = (DIAG - FIELD) / 2;

type Bar = { x: number; y: number; w: number; h: number };

/** Top-left arm: two horizontal bars. Top-right arm: two vertical bars. */
const BRICK_BARS: Bar[] = [
  { x: 0, y: 0, w: ARM, h: BAR },
  { x: 0, y: BAR + GAP, w: ARM, h: BAR },
  { x: ARM + GAP, y: 0, w: BAR, h: ARM },
  { x: ARM + GAP + BAR + GAP, y: 0, w: BAR, h: ARM },
];

/** Bottom-left arm: two vertical bars. Bottom-right arm: two horizontal bars. */
const INDIGO_BARS: Bar[] = [
  { x: 0, y: FIELD - ARM, w: BAR, h: ARM },
  { x: BAR + GAP, y: FIELD - ARM, w: BAR, h: ARM },
  { x: FIELD - ARM, y: FIELD - ARM + BAR, w: ARM, h: BAR },
  { x: FIELD - ARM, y: FIELD - BAR, w: ARM, h: BAR },
];

export type BrickMarkProps = {
  /** Rendered edge length in px. Omit to let CSS size the mark. */
  size?: number;
  /**
   * `color` on light grounds. `knockout` on deep indigo grounds, where the
   * indigo bars would otherwise vanish into the background — the blue arm
   * reverses to bone and the brick arm stays brick. `mono` inherits
   * currentColor for single-colour contexts.
   */
  variant?: 'color' | 'knockout' | 'mono';
  /** Accessible name. Omit for decorative use — the mark is then hidden. */
  title?: string;
  className?: string;
};

export function BrickMark({ size, variant = 'color', title, className }: BrickMarkProps) {
  const brick = variant === 'mono' ? 'currentColor' : 'var(--brick-600)';
  const indigo =
    variant === 'mono'
      ? 'currentColor'
      : variant === 'knockout'
        ? 'var(--mark-secondary)'
        : 'var(--indigo-700)';
  const decorative = !title;

  return (
    <svg
      className={className}
      width={size ?? undefined}
      height={size ?? undefined}
      viewBox={`0 0 ${DIAG.toFixed(3)} ${DIAG.toFixed(3)}`}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <g transform={`translate(${PAD.toFixed(3)} ${PAD.toFixed(3)}) rotate(45 16.5 16.5)`}>
        {BRICK_BARS.map((b, i) => (
          <rect key={`b${i}`} x={b.x} y={b.y} width={b.w} height={b.h} fill={brick} />
        ))}
        {INDIGO_BARS.map((b, i) => (
          <rect key={`i${i}`} x={b.x} y={b.y} width={b.w} height={b.h} fill={indigo} />
        ))}
      </g>
    </svg>
  );
}

/**
 * One oversized mark, bled off the edge of a deep band, as a watermark.
 * Replaces an earlier tiling pattern that competed with the display line.
 */
export function BondWatermark() {
  return (
    <div className="bond-watermark" aria-hidden="true">
      <BrickMark variant="mono" />
    </div>
  );
}

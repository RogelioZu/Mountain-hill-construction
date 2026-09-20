import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * The Datum Rule — this system's signature section opener.
 *
 * A struck steel line broken by the section label, mirroring the rule that runs
 * behind the mark in the original artwork. It is the page's one authored motion
 * moment: the line snaps across on entry the way a mason snaps a chalk line,
 * from an already-visible default (only the rule moves; content never hides).
 */
export function Datum({ label }: { label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [struck, setStruck] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setStruck(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStruck(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`datum${label ? '' : ' datum--blank'}${struck ? ' is-struck' : ''}`}
    >
      {label ? <span className="label">{label}</span> : null}
    </div>
  );
}

type CourseProps = {
  /** Ground for this course. Sections alternate to hold the 60/30/10 bond. */
  tone?: 'page' | 'sunken' | 'deep' | 'deepest';
  label?: string;
  id?: string;
  children: ReactNode;
};

/** A section, laid as a masonry course. */
export function Course({ tone = 'page', label, id, children }: CourseProps) {
  const toneClass =
    tone === 'sunken'
      ? ' course--sunken'
      : tone === 'deep'
        ? ' course--deep on-deep'
        : tone === 'deepest'
          ? ' course--deep course--deepest on-deep'
          : '';

  return (
    <section id={id} className={`course${toneClass}`}>
      <div className="container">
        {label !== undefined ? <Datum label={label} /> : null}
        {children}
      </div>
    </section>
  );
}

/**
 * A service row. Laid as a course with a bond bar on its leading edge, rather
 * than as one more identical icon-heading-text card.
 */
export function CourseRow({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="courses__row">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

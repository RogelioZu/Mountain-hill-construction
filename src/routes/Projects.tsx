import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BondWatermark } from '../brand/BrickMark';
import { Course } from '../components/Primitives';
import { business, gallery } from '../data/site';

export function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  return (
    <>
      <section className="page-head on-deep">
        <BondWatermark />
        <div className="container">
          <span className="label">Our work</span>
          <h1>Our Projects</h1>
          <p className="lead">
            A selection of recent work in Big Bear, CA. Select any photo to enlarge it.
          </p>
        </div>
      </section>

      <Course label="Recent builds">
        <div className="gallery">
          {gallery.map((project, i) => (
            <button key={project.src} type="button" onClick={() => setActive(i)}>
              <span className="visually-hidden">
                Enlarge {project.title}, photograph {i + 1} of {gallery.length}
              </span>
              <img
                src={project.src}
                srcSet={`${project.srcSmall} 900w, ${project.src} 1600w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                alt=""
                loading="lazy"
              />
              <span className="gallery__caption" aria-hidden="true">
                <strong>{project.title}</strong>
                <span>{project.category}</span>
              </span>
            </button>
          ))}
        </div>
      </Course>

      <dialog
        className="lightbox"
        aria-label="Project photograph"
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setActive(null);
        }}
      >
        {active !== null ? (
          <>
            <img
              src={gallery[active].src}
              srcSet={`${gallery[active].srcSmall} 900w, ${gallery[active].src} 1600w`}
              sizes="96vw"
              alt={gallery[active].alt}
            />
            <div className="lightbox__bar">
              <span>
                {gallery[active].title} · {active + 1} / {gallery.length}
              </span>
              <button
                className="lightbox__close"
                type="button"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
          </>
        ) : null}
      </dialog>

      <Course tone="deep">
        <div className="stack">
          <h2>Want work like this?</h2>
          <p>Tell us about your site, scope, and timeline.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" to="/contact">
              Get a Free Quote
            </Link>
            <a className="btn btn--secondary" href={business.phoneHref}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </Course>
    </>
  );
}

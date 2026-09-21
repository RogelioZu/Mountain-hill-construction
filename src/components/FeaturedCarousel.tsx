import { useEffect, useRef, useState } from 'react';
import { featured } from '../data/site';

const AUTOPLAY_DELAY = 5200;

export function FeaturedCarousel() {
  const [active, setActive] = useState(0);
  const [autoDirection, setAutoDirection] = useState<1 | -1>(1);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocusWithin, setHasFocusWithin] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const dragStart = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const isPaused = isHovered || hasFocusWithin || isDragging || pageHidden || reduceMotion;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageHidden(document.visibilityState !== 'visible');
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => {
        if (current === featured.length - 1) {
          setAutoDirection(-1);
          return current - 1;
        }
        if (current === 0 && autoDirection === -1) {
          setAutoDirection(1);
          return current + 1;
        }
        return current + autoDirection;
      });
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [autoDirection, isPaused]);

  const showPrevious = () => {
    setAutoDirection(-1);
    setActive((current) => Math.max(0, current - 1));
  };

  const showNext = () => {
    setAutoDirection(1);
    setActive((current) => Math.min(featured.length - 1, current + 1));
  };

  const finishDrag = (clientX: number) => {
    if (dragStart.current === null) return;
    const distance = clientX - dragStart.current;
    const width = viewportRef.current?.clientWidth ?? 1;
    const threshold = Math.min(96, width * 0.16);

    if (distance > threshold && active > 0) showPrevious();
    if (distance < -threshold && active < featured.length - 1) showNext();

    dragStart.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section
      className="project-carousel"
      aria-label="Featured projects"
      aria-roledescription="carousel"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocusWithin(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasFocusWithin(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showPrevious();
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          showNext();
        }
      }}
    >
      <div
        className="project-carousel__viewport"
        id="featured-projects-track"
        ref={viewportRef}
        onPointerDown={(event) => {
          if (event.pointerType === 'mouse' && event.button !== 0) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          dragStart.current = event.clientX;
          setIsDragging(true);
        }}
        onPointerMove={(event) => {
          if (dragStart.current === null) return;
          let distance = event.clientX - dragStart.current;
          const atLeadingEdge = active === 0 && distance > 0;
          const atTrailingEdge = active === featured.length - 1 && distance < 0;
          if (atLeadingEdge || atTrailingEdge) distance *= 0.28;
          setDragOffset(distance);
        }}
        onPointerUp={(event) => {
          finishDrag(event.clientX);
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={(event) => {
          dragStart.current = null;
          setDragOffset(0);
          setIsDragging(false);
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
      >
        <div
          className={`project-carousel__track${isDragging ? ' is-dragging' : ''}`}
          style={{
            transform: `translate3d(calc(-${active * 100}% + ${dragOffset}px), 0, 0)`,
          }}
        >
          {featured.map((project, index) => (
            <figure
              className="project-carousel__slide"
              key={project.src}
              aria-hidden={index !== active}
              aria-label={`${index + 1} of ${featured.length}`}
            >
              <img
                src={project.src}
                srcSet={`${project.srcSmall} 900w, ${project.src} 1600w`}
                sizes="(max-width: 900px) 100vw, 1200px"
                alt={project.alt}
                loading="lazy"
                draggable="false"
              />
              <figcaption>
                <span>
                  <span className="label">{project.category}</span>
                  <strong>{project.title}</strong>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <ul className="project-carousel__bars" aria-hidden="true">
        {featured.map((project, index) => (
          <li key={project.src} className={index === active ? 'is-active' : ''} />
        ))}
      </ul>

      <p
        className="visually-hidden"
        aria-live={isPaused ? 'polite' : 'off'}
        aria-atomic="true"
      >
        Showing {featured[active].title}, project {active + 1} of {featured.length}
      </p>
    </section>
  );
}

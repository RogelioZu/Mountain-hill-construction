import { useEffect, useRef, useState } from 'react';

/**
 * The hero's moving ground: an aerial timelapse of a foundation being formed.
 *
 * The footage is not decoration. It is the one claim this site cannot make with
 * words — a real crew, on a real steep mountain site, at real altitude — and the
 * formwork's timber grid happens to rhyme with the bond the whole system is
 * built from.
 *
 * Playback is earned, not assumed. The poster paints immediately and is the
 * complete experience on its own; the video mounts only when the visitor's
 * situation can afford it. PRODUCT.md's operating context is explicit that many
 * visitors are standing on a property, outdoors, on mountain-grade cell service,
 * and a 1.9 MB autoplay is a bad trade for them.
 */

// Square, native-height crops of the source. The plate is opaque, so the
// footage only ever has to fill the open field — which is why these can be a
// 1:1 crop at the source's full 720 height instead of the whole frame scaled.
const WIDE = { video: '/media/hero-field.mp4', poster: '/media/hero-field.jpg' };
const SMALL = {
  video: '/media/hero-field-small.mp4',
  poster: '/media/hero-field-small.jpg',
};

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };

function canAutoplay(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  const connection = (navigator as Navigator & { connection?: Connection }).connection;
  if (connection?.saveData) return false;
  if (connection?.effectiveType && /(^|-)2g$|^3g$/.test(connection.effectiveType)) return false;

  return true;
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [source, setSource] = useState<typeof WIDE | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Chosen once, on the client. The poster below is what renders until then.
  const wide = typeof window !== 'undefined' && window.innerWidth >= 861;
  const poster = wide ? WIDE.poster : SMALL.poster;

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const update = () => {
      if (!canAutoplay()) {
        videoRef.current?.pause();
        setSource(null);
        setRevealed(false);
      } else if (document.readyState === 'complete') {
        // Let the page, poster and preloaded fonts finish before fetching film.
        setSource(window.innerWidth >= 861 ? WIDE : SMALL);
      }
    };
    update();
    window.addEventListener('load', update);
    motion.addEventListener('change', update);
    connection?.addEventListener('change', update);
    return () => {
      window.removeEventListener('load', update);
      motion.removeEventListener('change', update);
      connection?.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !source) return;

    // Autoplay can still be refused (low power mode, per-site settings). The
    // poster stays as the fallback rather than leaving a frozen first frame.
    let cancelled = false;
    video.play().catch(() => {
      if (!cancelled) setRevealed(false);
    });
    return () => {
      cancelled = true;
      video.pause();
    };
  }, [source]);

  return (
    <div className="hero__media" aria-hidden="true">
      <img className="hero__frame" src={poster} alt="" width={1276} height={720} fetchPriority="high" />
      {source ? (
        <video
          ref={videoRef}
          className={`hero__frame hero__frame--video${revealed ? ' is-playing' : ''}`}
          src={source.video}
          poster={source.poster}
          muted
          loop
          playsInline
          preload="metadata"
          width={1276}
          height={720}
          onPlaying={() => setRevealed(true)}
          onError={() => {
            setSource(null);
            setRevealed(false);
          }}
        />
      ) : null}
    </div>
  );
}

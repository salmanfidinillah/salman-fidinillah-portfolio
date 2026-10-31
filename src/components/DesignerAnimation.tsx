import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import type { AnimationItem } from 'lottie-web';

/** IconScout artwork supplied by the portfolio owner. Load the player only when visible. */
export default function DesignerAnimation({ className = '' }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let animation: AnimationItem | undefined;
    let disposed = false;
    let visible = false;
    let loading = false;

    const observer = new IntersectionObserver(async ([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) { animation?.pause(); return; }
      if (animation) { if (!reducedMotion) animation.play(); return; }
      if (loading) return;
      loading = true;
      try {
        const { default: lottie } = await import('lottie-web/build/player/lottie_light');
        if (disposed) return;
        animation = lottie.loadAnimation({
          container: element,
          renderer: 'svg',
          loop: !reducedMotion,
          autoplay: false,
          path: '/animations/designer-building-website.json',
          rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
        });
        animation.addEventListener('DOMLoaded', () => {
          if (reducedMotion) animation?.goToAndStop(60, true);
          else if (visible) animation?.play();
        });
      } catch {
        loading = false;
      }
    }, { rootMargin: '80px' });
    observer.observe(element);
    return () => { disposed = true; observer.disconnect(); animation?.destroy(); };
  }, [reducedMotion]);

  return <div ref={container} className={`designer-animation ${className}`} aria-hidden="true" />;
}

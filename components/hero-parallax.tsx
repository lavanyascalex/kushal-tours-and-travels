"use client";

import { useEffect, useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

type HeroParallaxProps = {
  children: ReactNode;
};

export default function HeroParallax({ children }: HeroParallaxProps) {
  const heroRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;

    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    event.currentTarget.style.setProperty("--hero-shift-x", `${x * -22}px`);
    event.currentTarget.style.setProperty("--hero-shift-y", `${y * -14}px`);
  }

  function handlePointerLeave(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--hero-shift-x", "0px");
    event.currentTarget.style.setProperty("--hero-shift-y", "0px");
  }

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let frame = 0;

    const updateScrollPosition = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();

        // Keep the effect limited to the hero's passage through the viewport.
        const progress = (window.innerHeight - rect.top) /
          (window.innerHeight + rect.height);

        const clampedProgress = Math.max(0, Math.min(1, progress));
        const shift = -(clampedProgress - 0.5) * 44;

        hero.style.setProperty("--hero-scroll-y", `${shift}px`);
      });
    };

    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition, { passive: true });
    window.addEventListener("resize", updateScrollPosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollPosition);
      window.removeEventListener("resize", updateScrollPosition);
    };
  }, []);

  const style = {
    "--hero-shift-x": "0px",
    "--hero-shift-y": "0px",
    "--hero-scroll-y": "0px",
  } as CSSProperties;

  return (
    <section
      ref={heroRef}
      className="reference-hero"
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { person } from "@/lib/content";
import asset from "@/lib/asset";

export default function Hero() {
  const portraitRef = useRef(null);

  // Gentle pointer parallax on the portrait (desktop only, transform-based).
  useEffect(() => {
    const el = portraitRef.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 16;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const toMemories = () =>
    document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="hero section" id="home">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">🎂 {person.heroKicker}</p>

          <h1 className="hero__title">
            <span>Happy</span>
            <span className="l2">Birthday</span>
          </h1>

          <p className="hero__name">{person.name}</p>

          <p className="hero__line">{person.heroLine}</p>

          <button className="hero__cta" onClick={toMemories}>
            See the memories
            <i aria-hidden="true">↓</i>
          </button>
        </div>

        <div className="hero__stage">
          <span className="hero__arch" aria-hidden="true" />
          <span className="hero__ring" aria-hidden="true" />
          <span className="hero__square" aria-hidden="true" />
          <span className="hero__dots" aria-hidden="true" />
          <img
            ref={portraitRef}
            className="hero__portrait"
            src={asset(person.heroPhoto)}
            alt={`Portrait of ${person.name}`}
            fetchPriority="high"
          />
          <span className="hero__tag">{person.name}</span>
        </div>
      </div>
    </header>
  );
}

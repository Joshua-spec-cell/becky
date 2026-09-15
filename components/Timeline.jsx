"use client";
import { useEffect, useRef } from "react";
import { timeline } from "@/lib/content";
import asset from "@/lib/asset";
import useReveal from "./useReveal";

export default function Timeline() {
  const wrapRef = useRef(null);
  const fillRef = useRef(null);
  useReveal(".tl__item");

  // The spine fills in as the section scrolls past.
  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    if (!wrap || !fill) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fill.style.setProperty("--draw", "100%");
      return;
    }

    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const pct = (vh * 0.75 - r.top) / (r.height || 1);
        fill.style.setProperty("--draw", `${Math.max(0, Math.min(1, pct)) * 100}%`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="section" id="timeline">
      <div className="shell">
        <div className="head">
          <h2 className="head__title">The Moments Along the Way</h2>
          <p className="head__sub">A few stops on the road to this birthday.</p>
        </div>

        <div className="tl" ref={wrapRef}>
          <div className="tl__spine" aria-hidden="true">
            <i ref={fillRef} />
          </div>

          {timeline.map((t, i) => (
            <article className="tl__item" data-i={i} key={t.year + i}>
              <span className="tl__dot" aria-hidden="true" />
              <div className="tl__card">
                <img src={asset(t.image)} alt={`${t.year} — ${t.title}`} loading="lazy" />
                <p className="tl__year">{t.year}</p>
                <h3 className="tl__ttl">{t.title}</h3>
                <p className="tl__txt">{t.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

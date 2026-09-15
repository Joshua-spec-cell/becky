"use client";
import { useEffect } from "react";

/**
 * Adds .is-in to every element matching `selector` once it scrolls into view.
 * Elements are staggered slightly by their order within their parent.
 */
export default function useReveal(selector = "[data-reveal]", stagger = 90) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(selector));
    if (!nodes.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const i = Number(el.dataset.i || 0);
          el.style.transitionDelay = `${(i % 4) * stagger}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [selector, stagger]);
}

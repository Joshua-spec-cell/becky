"use client";
import { useEffect, useRef } from "react";

const COLORS = ["#ff1f7a", "#ff7a18", "#ffc93c", "#00c2a8", "#7b2ff7"];

/**
 * Site-wide living background: three drifting colour blobs (pure CSS)
 * plus a lightweight confetti canvas. Capped particle count and a single
 * rAF loop so mid-range Android phones stay smooth.
 */
export default function Backdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    let raf;
    let w = 0;
    let h = 0;
    let bits = [];

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const seed = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = w < 700 ? 22 : 42;
      bits = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: 4 + Math.random() * 7,
        vy: 0.18 + Math.random() * 0.5,
        vx: -0.25 + Math.random() * 0.5,
        rot: Math.random() * Math.PI,
        vr: (-0.5 + Math.random()) * 0.02,
        c: COLORS[(Math.random() * COLORS.length) | 0],
        round: Math.random() > 0.55,
        a: 0.35 + Math.random() * 0.4,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const b of bits) {
        b.y += b.vy;
        b.x += b.vx;
        b.rot += b.vr;
        if (b.y - b.s > h) {
          b.y = -b.s;
          b.x = Math.random() * w;
        }
        if (b.x < -20) b.x = w + 20;
        if (b.x > w + 20) b.x = -20;

        ctx.save();
        ctx.globalAlpha = b.a;
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rot);
        ctx.fillStyle = b.c;
        if (b.round) {
          ctx.beginPath();
          ctx.arc(0, 0, b.s / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2);
        }
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };

    seed();
    tick();

    let t;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(seed, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
        <canvas ref={canvasRef} />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  );
}

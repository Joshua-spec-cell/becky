"use client";
import { useEffect, useRef } from "react";
import asset from "@/lib/asset";

export default function Lightbox({ items, index, onIndex, onClose }) {
  const closeRef = useRef(null);
  const touch = useRef({ x: 0, y: 0 });

  const next = () => onIndex((index + 1) % items.length);
  const prev = () => onIndex((index - 1 + items.length) % items.length);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items.length]);

  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? next() : prev();
    }
  };

  const item = items[index];

  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="lb__bar">
        <span className="lb__count">
          {index + 1} / {items.length}
        </span>
        <button ref={closeRef} className="icon-btn" onClick={onClose} aria-label="Close viewer">
          ✕
        </button>
      </div>

      <div className="lb__stage">
        <img key={item.image} src={asset(item.image)} alt={item.caption} />
      </div>

      <div className="lb__foot">
        <button className="icon-btn" onClick={prev} aria-label="Previous photo">
          ‹
        </button>
        <p className="lb__cap">{item.caption}</p>
        <button className="icon-btn" onClick={next} aria-label="Next photo">
          ›
        </button>
      </div>
    </div>
  );
}

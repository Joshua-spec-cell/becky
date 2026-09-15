"use client";
import { useState } from "react";
import { randomMemories } from "@/lib/content";
import asset from "@/lib/asset";

export default function MemoryBox() {
  const [shown, setShown] = useState(null);
  const [seed, setSeed] = useState(0);

  const shuffle = () => {
    let i = Math.floor(Math.random() * randomMemories.length);
    if (shown !== null && randomMemories.length > 1) {
      while (i === shown) i = Math.floor(Math.random() * randomMemories.length);
    }
    setShown(i);
    setSeed((s) => s + 1);
  };

  const item = shown === null ? null : randomMemories[shown];

  return (
    <div className="mbox">
      <div>
        <h3 className="mbox__title">Want another memory?</h3>
        <p className="mbox__hint">
          Tap the box. A different photo and a different thought each time.
        </p>
        <button className="mbox__btn" onClick={shuffle}>
          {shown === null ? "Show me one" : "Another one"}
        </button>
      </div>

      <div
        className="mbox__stage"
        onClick={shuffle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), shuffle())}
        aria-live="polite"
        aria-label="Reveal a random memory"
      >
        {item ? (
          <figure className="mbox__shot" key={seed}>
            <img src={asset(item.image)} alt={item.text} loading="lazy" />
            <figcaption>
              <p>{item.text}</p>
            </figcaption>
          </figure>
        ) : (
          <p className="mbox__empty">🎁 Tap here</p>
        )}
      </div>
    </div>
  );
}

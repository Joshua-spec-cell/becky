"use client";
import { useState } from "react";
import { memories } from "@/lib/content";
import asset from "@/lib/asset";
import useReveal from "./useReveal";
import Lightbox from "./Lightbox";
import MemoryBox from "./MemoryBox";

export default function Gallery() {
  const [openAt, setOpenAt] = useState(null);
  useReveal(".card");

  return (
    <section className="section" id="memories">
      <div className="shell">
        <div className="head">
          <h2 className="head__title">A Collection of Moments</h2>
          <p className="head__sub">
            Some moments deserve more than a place in the camera roll.
          </p>
        </div>

        <div className="gallery">
          {memories.map((m, i) => (
            <button
              key={m.image + i}
              className="card"
              data-i={i}
              style={{ "--tilt": `${m.tilt ?? 0}deg` }}
              onClick={() => setOpenAt(i)}
              aria-label={`Open photo ${i + 1}: ${m.caption}`}
            >
              <div className="card__frame">
                <img
                  src={asset(m.image)}
                  alt={m.caption}
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span className="card__badge">Tap to enlarge</span>
              </div>
              <p className="card__caption">{m.caption}</p>
            </button>
          ))}
        </div>

        <MemoryBox />
      </div>

      {openAt !== null && (
        <Lightbox
          items={memories}
          index={openAt}
          onIndex={setOpenAt}
          onClose={() => setOpenAt(null)}
        />
      )}
    </section>
  );
}

"use client";
import { wish, finale } from "@/lib/content";
import useReveal from "./useReveal";

export default function Finale() {
  useReveal(".reveal");

  const replay = () => {
    document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("becky:replay-music"));
  };

  return (
    <>
      <section className="section wish" id="wish">
        <div className="shell">
          <div className="head head--loud reveal" style={{ marginInline: "auto", textAlign: "center" }}>
            <h2 className="head__title">{wish.heading}</h2>
          </div>
          <p className="wish__main reveal">{wish.main}</p>
          <p className="wish__personal reveal">{wish.personal}</p>
          <p className="wish__sign reveal">{wish.signoff}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="finale reveal">
            <h2 className="finale__title">{finale.headline} 🎂</h2>
            <p className="finale__sub">{finale.sub}</p>
            <button className="finale__btn" onClick={replay}>
              {finale.button}
            </button>
          </div>
        </div>
        <p className="footer">{finale.footer}</p>
      </section>
    </>
  );
}

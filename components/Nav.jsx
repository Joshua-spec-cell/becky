"use client";
import { useEffect, useState } from "react";
import { navItems, person } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-20% 0px -45% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Sections">
      <button className="nav__mark" onClick={() => go("home")} aria-label="Back to top">
        {person.initials}
      </button>

      <ul className="nav__links" id="nav-links">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className="nav__link"
              onClick={() => go(item.id)}
              aria-current={active === item.id}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="nav__burger"
        aria-expanded={open}
        aria-controls="nav-links"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
      </button>
    </nav>
  );
}

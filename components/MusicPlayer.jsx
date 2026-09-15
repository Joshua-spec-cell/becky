"use client";
import { useEffect, useRef, useState } from "react";
import { music } from "@/lib/content";
import asset from "@/lib/asset";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = music.volume;

    let unlocked = false;

    const tryPlay = () =>
      el
        .play()
        .then(() => {
          setPlaying(true);
          unlocked = true;
        })
        .catch(() => {
          /* blocked — we wait for a gesture */
        });

    // 1. attempt autoplay
    tryPlay();

    // 2. fall back to the first interaction
    const onFirst = () => {
      if (unlocked) return;
      tryPlay();
    };
    const opts = { once: false };
    ["pointerdown", "keydown", "touchstart"].forEach((ev) =>
      window.addEventListener(ev, onFirst, opts)
    );

    // "Replay the memories" restarts the track from the top
    const onReplay = () => {
      el.currentTime = 0;
      tryPlay();
    };
    window.addEventListener("becky:replay-music", onReplay);

    return () => {
      ["pointerdown", "keydown", "touchstart"].forEach((ev) =>
        window.removeEventListener(ev, onFirst, opts)
      );
      window.removeEventListener("becky:replay-music", onReplay);
    };
  }, []);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={asset(music.src)} loop preload="auto" />
      <button
        className={`music ${playing ? "music--on" : "music--off"}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Turn music off" : "Turn music on"}
      >
        <span className="music__eq" aria-hidden="true">
          <b /><b /><b /><b />
        </span>
        <span className="music__label">{playing ? "Music on" : "Music off"}</span>
      </button>
    </>
  );
}

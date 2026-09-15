"use client";
import { messages } from "@/lib/content";
import useReveal from "./useReveal";

const MARKS = ["🎈", "✨", "🎉", "🎂", "💫", "🎁"];

export default function Messages() {
  useReveal(".msg", 120);

  return (
    <section className="section" id="messages">
      <div className="shell">
        <div className="head">
          <h2 className="head__title">A Few Words For You</h2>
          <p className="head__sub">They weren't enough words hahaha</p>
        </div>

        <div className="msgs">
          {messages.map((m, i) => (
            <article className="msg" data-i={i} key={i}>
              <i aria-hidden="true">{MARKS[i % MARKS.length]}</i>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

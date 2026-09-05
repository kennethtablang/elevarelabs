"use client";

import { useEffect } from "react";

/* Progressive enhancement, in this direction on purpose:
   the drawings are fully visible in CSS by default, and this component adds
   data-motion="on" which is what *hides* them so they can be drawn in. So if
   JS never runs, or the visitor asked for reduced motion, the page renders
   finished and static rather than blank. Never invert this. */
export default function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const root = document.documentElement;
    root.dataset.motion = "on";

    /* The appendix sheets carry no drawings, so there is nothing here to
       hide and un-hide — but data-motion="on" is still what turns on the
       scroll-driven reveals for the sheet itself, and the preference can
       still change mid-session. So set the flag and keep the listener; only
       the observer and its failsafe are conditional on there being figures. */
    const targets = Array.from(document.querySelectorAll("[data-animate]"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // play once, never rewind
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));

    /* Safety net. Hiding something and waiting for a callback to un-hide it is
       a bet, and the cost of losing is a permanently blank drawing. If anything
       stops the observer firing — a page opened in a background tab that never
       gets focused, an observer that never delivers — reveal everything anyway
       after a few seconds. Losing the animation is fine; losing the drawing is
       not. */
    const failsafe = targets.length
      ? window.setTimeout(() => {
          targets.forEach((el) => el.classList.add("in-view"));
          observer.disconnect();
        }, 5000)
      : 0;

    /* If someone turns on reduced motion mid-session, stop hiding anything. */
    const onPrefChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        delete root.dataset.motion;
        observer.disconnect();
      }
    };
    reduced.addEventListener("change", onPrefChange);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
      reduced.removeEventListener("change", onPrefChange);
    };
  }, []);

  return null;
}

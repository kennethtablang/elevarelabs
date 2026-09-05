"use client";

import { useEffect } from "react";

/* Progressive enhancement, same direction as Motion.tsx: the resting CSS
   renders the case as a brief, a plain numbered list of steps and a finished
   drawing — readable top to bottom with no JS at all. This component adds
   .case-steps-on, and only then does the drawing pin and the steps start
   dimming. Never invert this: if the class is the thing that *hides* content,
   a failed script leaves a blank case.

   It also only turns on above the fold width, because the effect needs two
   columns to make sense — below that the drawing sits under the prose and
   there is nothing to pin it against. */

const FOLD = "(min-width:1360px)";

export default function CaseSteps() {
  useEffect(() => {
    const cases = Array.from(
      document.querySelectorAll<HTMLElement>("[data-steps]")
    ).filter((el) => el.querySelectorAll(".case-step").length > 0);
    if (cases.length === 0) return;

    const wide = window.matchMedia(FOLD);
    let observers: IntersectionObserver[] = [];

    const teardown = () => {
      observers.forEach((o) => o.disconnect());
      observers = [];
      for (const el of cases) {
        el.classList.remove("case-steps-on");
        delete el.dataset.step;
      }
    };

    const setup = () => {
      for (const el of cases) {
        const steps = Array.from(
          el.querySelectorAll<HTMLElement>(".case-step")
        );
        if (steps.length === 0) continue;

        el.classList.add("case-steps-on");
        el.dataset.step = steps[0].dataset.at ?? "1";

        /* A band across the middle of the viewport, so the active step is the
           one you are actually reading rather than whichever touched the edge
           first.

           What gets observed is .case-step-in, not the step. The step block is
           most of a screen tall and overlaps the band for most of its length,
           including the whole stretch after its own text has scrolled off the
           top — observe that and the drawing stays a step behind the reader.
           The inner block is the text itself, so the band means what it looks
           like it means. Between two of them nothing is in the band and the
           last one stays lit, which is the behaviour we want anyway. */
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const step = entry.target.closest<HTMLElement>(".case-step");
              if (!step?.dataset.at) continue;
              el.dataset.step = step.dataset.at;
              steps.forEach((s) => s.classList.toggle("is-on", s === step));
            }
          },
          { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );

        steps.forEach((s) => {
          const inner = s.querySelector(".case-step-in");
          if (inner) observer.observe(inner);
        });
        observers.push(observer);
      }
    };

    if (wide.matches) setup();

    const onChange = (e: MediaQueryListEvent) => {
      teardown();
      if (e.matches) setup();
    };
    wide.addEventListener("change", onChange);

    return () => {
      wide.removeEventListener("change", onChange);
      teardown();
    };
  }, []);

  return null;
}

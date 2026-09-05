"use client";

import { useEffect } from "react";

/* Glide, not grip.

   A mouse wheel is a ratchet: it hands the page a stack of discrete shoves,
   and the page jumps by one shove each time. This puts a weight between the
   wheel and the page — the wheel moves a target, the page eases toward it —
   so a click of the wheel is a push off, and what follows is a coast.

   It moves the real scroll position rather than transforming a wrapper. That
   is the whole design constraint and it is not negotiable here: this page
   leans on position:sticky for FIG. 05's pinned figure and on scroll-driven
   animations for everything else, and both of those read the actual scroll
   offset. Fake it with a transform and the pinned figure stops pinning and
   every drawing on the site stops drawing.

   What it deliberately does not touch:
   - Anchor links and keyboard scrolling. `html{scroll-behavior:smooth}` in
     globals.css already glides those, in the browser's own implementation,
     with focus and history handled correctly. Re-implementing that in here
     would be worse in every way that matters.
   - Touch. Phones and trackpads on touch devices have momentum from the OS
     already, and hijacking it is how scroll-jacking earns its reputation.
   - Anything with its own scrollbar.

   Progressive enhancement, same rule as the rest of the site: if this never
   runs, scrolling is exactly what the browser does. Nothing here is required
   for the page to work — it only changes how it feels. */

/* Rate of approach, per second. The page closes this fraction of the gap to
   the target every second, so the feel is set by the time constant 1/λ rather
   than by a per-frame step — which means it is identical at 60Hz and 144Hz.
   A wheel click gets the long coast; a trackpad, which is already sending a
   smooth stream and only needs the edges taken off, gets a much shorter one,
   because stacking a slow ease on top of the OS's own momentum reads as lag
   rather than as glide. */
const GLIDE_WHEEL = 6.5;
const GLIDE_PAD = 14;

/* A shove carries slightly further than the wheel asked for. This is the
   skate: you push once and travel a little more than the push. */
const PUSH = 1.12;

export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");

    let target = window.scrollY;
    let current = target;
    let glide = GLIDE_WHEEL;
    let raf = 0;
    let last = 0;
    let attached = false;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    /* If the pointer is over something that scrolls on its own, the wheel
       belongs to that, not to the page. */
    const ownsWheel = (node: EventTarget | null) => {
      let el = node instanceof Element ? node : null;
      while (el && el !== document.body && el !== document.documentElement) {
        const oy = getComputedStyle(el).overflowY;
        if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    };

    const put = (y: number) => {
      // 'instant' so the CSS smooth-scroll above doesn't ease our own easing.
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
    };

    const frame = (now: number) => {
      // Clamped so a backgrounded tab doesn't resume with one enormous step.
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60;
      last = now;

      const gap = target - current;
      if (Math.abs(gap) < 0.4) {
        current = target;
        raf = 0;
        last = 0;
        put(current);
        return;
      }

      current += gap * (1 - Math.exp(-glide * dt));
      put(current);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey) return; // pinch-zoom
      if (ownsWheel(e.target)) return;

      let d = e.deltaY;
      if (e.deltaMode === 1) d *= 16; // lines
      else if (e.deltaMode === 2) d *= window.innerHeight; // pages

      /* Discrete shoves in the tens or hundreds of pixels are a wheel; a
         dense stream of small ones is a trackpad. The test is per-event
         because people plug a mouse into a laptop mid-session. */
      glide = e.deltaMode !== 0 || Math.abs(d) >= 50 ? GLIDE_WHEEL : GLIDE_PAD;

      e.preventDefault();
      target = Math.max(0, Math.min(target + d * PUSH, maxScroll()));
      start();
    };

    /* Anything that moves the page without us — the scrollbar, a keypress, an
       anchor's own smooth scroll, focus following a Tab — becomes the new
       resting position rather than something to fight. While our own loop is
       running it owns the offset, so there is nothing to reconcile. */
    const onScroll = () => {
      if (raf) return;
      current = target = window.scrollY;
    };

    const onResize = () => {
      target = Math.max(0, Math.min(target, maxScroll()));
    };

    const attach = () => {
      if (attached) return;
      attached = true;
      current = target = window.scrollY;
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
    };

    const detach = () => {
      if (!attached) return;
      attached = false;
      stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };

    /* Re-decided live, so plugging in a mouse or turning on reduced motion
       mid-session lands where it should without a reload.

       document.hidden is in here for a reason worth stating, because it looks
       like a pointless optimisation and is not. The handler cancels the
       wheel's native scroll and then hands the movement to a rAF loop — and a
       hidden document does not run rAF. Cancel the scroll with nothing able to
       replace it and the page is simply unscrollable by mouse, silently, until
       it is looked at again. Detaching while hidden means the wheel keeps the
       browser's own behaviour in exactly the case where we cannot supply our
       own. Never preventDefault something you are not certain you can do
       instead. */
    const decide = () => {
      if (!reduced.matches && fine.matches && !document.hidden) attach();
      else detach();
    };

    decide();
    reduced.addEventListener("change", decide);
    fine.addEventListener("change", decide);
    document.addEventListener("visibilitychange", decide);

    return () => {
      reduced.removeEventListener("change", decide);
      fine.removeEventListener("change", decide);
      document.removeEventListener("visibilitychange", decide);
      detach();
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/* Reads the theme the inline script in layout.tsx already resolved, so the
   button label is correct on first paint. Writing a choice stamps <html> and
   stores it; there is deliberately no "system" position in the UI — the
   default IS system, and the toggle only appears once someone overrides it. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stamped = document.documentElement.dataset.theme as Theme | undefined;
    if (stamped) {
      setTheme(stamped);
      return;
    }
    // No stamp means we're following the OS — read what that resolved to.
    const dark = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(dark.matches ? "dark" : "light");

    // Keep in step if the OS flips while the page is open and the visitor
    // hasn't chosen for themselves.
    const onChange = (e: MediaQueryListEvent) => {
      if (!document.documentElement.dataset.theme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    dark.addEventListener("change", onChange);
    return () => dark.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    /* Read what is actually on screen rather than trusting React state. If the
       two ever drift the button would otherwise "flip" to the theme already
       showing, and the first click would appear to do nothing. */
    const el = document.documentElement;
    const current: Theme =
      (el.dataset.theme as Theme | undefined) ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next: Theme = current === "dark" ? "light" : "dark";
    el.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode, or storage disabled — the theme still applies for this
         page view, it just won't be remembered. Not worth surfacing. */
    }
    setTheme(next);
  }

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true">
        <circle
          cx="10" cy="10" r="7.5"
          fill="none" stroke="currentColor" strokeWidth="1.6"
        />
        {/* the filled half flips with the theme, so the control reads as state */}
        <path
          d={
            theme === "dark"
              ? "M10 2.5a7.5 7.5 0 0 1 0 15z"
              : "M10 2.5a7.5 7.5 0 0 0 0 15z"
          }
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

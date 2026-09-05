"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Mark } from "./drawings";
import ThemeToggle from "./ThemeToggle";

/* The only interactive component on the page, so the only client bundle.
   Everything else renders on the server as static HTML. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  /* Mark the section currently in view. Rootmargin pulls the trigger line
     down past the sticky nav so a section counts as "active" once its
     heading is actually readable, not when its top edge grazes the bar. */
  useEffect(() => {
    const ids = site.nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Escape closes the mobile menu. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="nav">
      <a className="brand" href="#top">
        <Mark />
        <b>{site.name}</b>
      </a>

      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="navLinks"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <ul id="navLinks" className={open ? "nav-links open" : "nav-links"}>
        {site.nav.map((item) => {
          const id = item.href.slice(1);
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <ThemeToggle />

      <a className="btn btn--primary btn--sm" href={site.bookingUrl}>
        {site.hero.primaryCta}
      </a>
    </nav>
  );
}

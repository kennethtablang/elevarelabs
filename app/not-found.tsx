import type { Metadata } from "next";
import { site } from "@/content/site";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Mark } from "@/components/drawings";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Part not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <div className="frame">
        <nav className="nav">
          <a className="brand" href="/">
            <Mark />
            <b>{site.name}</b>
          </a>
          <ThemeToggle />
          <a className="btn btn--primary btn--sm" href="/">
            Back to the sheet
          </a>
        </nav>

        <main>
          <Section id="notfound" fig="FIG. 404 — PART NOT FOUND">
            <div className="notfound">
              <span className="label label--red">Error 404</span>
              <h2>This part isn&rsquo;t on the drawing.</h2>
              <p className="lede">
                The page you asked for doesn&rsquo;t exist — either it moved, or the link
                that sent you here was wrong. Nothing is broken on your end.
              </p>

              <svg
                className="dwg nf-dwg"
                viewBox="0 0 320 130"
                role="img"
                aria-label="A dimension line measuring an empty space, annotated: part missing."
              >
                <line className="dim" x1="30" y1="34" x2="30" y2="84" />
                <line className="dim" x1="290" y1="34" x2="290" y2="84" />
                <line className="dimline" x1="30" y1="60" x2="120" y2="60" />
                <line className="dimline" x1="200" y1="60" x2="290" y2="60" />
                <line className="dimline" x1="30" y1="54" x2="30" y2="66" />
                <line className="dimline" x1="290" y1="54" x2="290" y2="66" />
                <rect
                  x="124" y="44" width="72" height="32"
                  fill="none" stroke="var(--load)" strokeWidth="1.4" strokeDasharray="5 4"
                />
                <text className="t-red" x="160" y="64" textAnchor="middle">MISSING</text>
                <text className="t-dim" x="160" y="104" textAnchor="middle">
                  REFER TO SHEET 01 FOR THE FULL ASSEMBLY
                </text>
              </svg>

              <div className="hero-btns">
                <a className="btn btn--primary" href="/">
                  Back to the homepage
                </a>
                <a className="btn btn--ghost" href={`mailto:${site.email}`}>
                  Tell us what you were looking for
                </a>
              </div>
            </div>
          </Section>
        </main>
      </div>
      <Footer />
    </>
  );
}

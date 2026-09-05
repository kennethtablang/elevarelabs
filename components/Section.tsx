import type { ReactNode } from "react";

/* The drafting-sheet skeleton: a numbered rail on the left, content on the
   right. Keep the FIG numbers sequential when you add sections — that
   numbering is the whole conceit of the direction. */
export default function Section({
  id,
  fig,
  className = "",
  children,
}: {
  id: string;
  fig: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`sec ${className}`.trim()} id={id}>
      <div className="sec-rail">
        <span className="tick" />
        <span className="fig">{fig}</span>
      </div>
      <div className="sec-main">{children}</div>
    </section>
  );
}

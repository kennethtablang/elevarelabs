/* ===========================================================================
   Every drawing on the site. These are the direction — the moment they get
   swapped for stock icons, "Fulcrum" collapses into a generic SaaS page.
   Colours come from the CSS classes in globals.css (.dwg .blue, .red, etc.)
   so the drawings stay in step with the palette.
   =========================================================================== */

export function Mark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 46 46" aria-hidden="true">
      <line
        className="mark-bar"
        x1="6" y1="30" x2="40" y2="18"
        stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"
      />
      <polygon points="23,26 30,39 16,39" fill="currentColor" />
      <rect x="32" y="9" width="9" height="9" fill="var(--datum)" />
    </svg>
  );
}

/* ------------------------------------------------------------- FIG. 01 --- */
export function LeverDrawing() {
  return (
    <svg
      className="dwg lever"
      viewBox="0 0 560 340"
      data-animate="lever"
      role="img"
      aria-label="A lever resting on a fulcrum: a small effort applied over a long arm lifts a much larger load."
    >
      <rect className="thin d-fade lv-frame" x="8" y="8" width="544" height="324" />

      {/* ground */}
      <line className="thin d-draw lv-ground" pathLength="1" x1="30" y1="250" x2="530" y2="250" />
      <line className="thin d-draw lv-ground" pathLength="1" x1="30" y1="254" x2="530" y2="254" />

      <polygon className="gf d-fade lv-fulcrum" points="350,175 375,246 325,246" />

      {/* The arm pivots on the fulcrum apex (350,175). It starts level and
          swings to this resting position, which lifts the load. */}
      <g className="lv-arm">
        <line className="st-h d-draw lv-bar" pathLength="1" x1="60" y1="233" x2="520" y2="141" />
        <g transform="rotate(-11.3 513 130)">
          <rect className="bluef d-fade lv-load" x="486" y="118" width="54" height="24" />
        </g>
      </g>

      {/* effort vector */}
      <g className="d-fade lv-effort">
        <line className="red" x1="90" y1="150" x2="90" y2="204" />
        <polygon className="redf" points="90,215 83,199 97,199" />
      </g>

      {/* extension + dimension lines */}
      <g className="d-fade lv-dims">
        <line className="dim" x1="60" y1="240" x2="60" y2="262" />
        <line className="dim" x1="350" y1="250" x2="350" y2="262" />
        <line className="dim" x1="520" y1="150" x2="520" y2="262" />
        <line className="dimline" x1="60" y1="268" x2="520" y2="268" />
        <line className="dimline" x1="60" y1="262" x2="60" y2="274" />
        <line className="dimline" x1="350" y1="262" x2="350" y2="274" />
        <line className="dimline" x1="520" y1="262" x2="520" y2="274" />
      </g>

      {/* annotation */}
      <g className="d-fade lv-notes">
        <text className="t-red" x="66" y="140">EFFORT</text>
        <text className="t-blue" x="352" y="104">LOAD · THE MANUAL PROCESS</text>
        <text x="386" y="228">FULCRUM · THE STEP</text>
        <text x="386" y="240">WE CHANGE FIRST</text>
        <text className="t-dim" x="205" y="286" textAnchor="middle">
          EFFORT ARM · SIX WEEKS OF BUILD
        </text>
        <text className="t-dim" x="435" y="286" textAnchor="middle">
          LOAD ARM · YEARS OF MANUAL WORK
        </text>
      </g>

      {/* title block */}
      <g className="d-fade lv-title">
        <rect className="thin sheetf" x="312" y="296" width="240" height="36" />
        <line className="thin" x1="476" y1="296" x2="476" y2="332" />
        <text className="t-dim" x="320" y="311">FIG. 01 · LEVER, CL. 1</text>
        <text className="t-dim" x="320" y="324">ELEVARE FOUNDRY</text>
        <text className="t-dim" x="484" y="311">SCALE</text>
        <text className="t-dim" x="484" y="324">NTS</text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------- FIG. 03 --- */
export type AssemblyIconName = "quoting" | "dispatch" | "approvals" | "dashboard";

export function AssemblyIcon({ name }: { name: AssemblyIconName }) {
  const common = { width: 56, height: 56, viewBox: "0 0 56 56", className: "dwg", "aria-hidden": true } as const;

  if (name === "quoting") {
    return (
      <svg {...common}>
        <rect className="st" x="5" y="8" width="26" height="34" />
        <line className="thin" x1="11" y1="17" x2="25" y2="17" />
        <line className="thin" x1="11" y1="24" x2="25" y2="24" />
        <line className="thin" x1="11" y1="31" x2="20" y2="31" />
        <line className="blue" x1="34" y1="25" x2="47" y2="25" />
        <polygon className="bluef" points="51,25 44,21 44,29" />
        <rect className="blue" x="34" y="34" width="17" height="14" />
      </svg>
    );
  }
  if (name === "dispatch") {
    return (
      <svg {...common}>
        <rect className="st" x="6" y="10" width="34" height="30" />
        <line className="thin" x1="6" y1="19" x2="40" y2="19" />
        <line className="thin" x1="17" y1="19" x2="17" y2="40" />
        <line className="thin" x1="29" y1="19" x2="29" y2="40" />
        <line className="thin" x1="6" y1="30" x2="40" y2="30" />
        <rect className="bluef" x="18" y="20" width="10" height="9" />
        <path className="blue" d="M44 16v22a6 6 0 0 1-6 6H24" />
        <circle className="bluef" cx="24" cy="44" r="3" />
      </svg>
    );
  }
  if (name === "approvals") {
    return (
      <svg {...common}>
        <rect className="st" x="7" y="7" width="30" height="22" />
        <rect className="st" x="13" y="17" width="30" height="22" />
        <polyline className="blue" points="19,29 25,35 39,21" strokeWidth="2.6" />
        <line className="dim" x1="7" y1="46" x2="49" y2="46" />
        <line className="thin" x1="7" y1="43" x2="7" y2="49" />
        <line className="thin" x1="49" y1="43" x2="49" y2="49" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <line className="thin" x1="7" y1="44" x2="49" y2="44" />
      <rect className="gf" x="10" y="32" width="8" height="12" />
      <rect className="gf" x="22" y="25" width="8" height="19" />
      <rect className="bluef" x="34" y="14" width="8" height="30" />
      <polyline className="blue" points="10,28 22,21 34,10 46,6" />
      <circle className="bluef" cx="46" cy="6" r="3" />
    </svg>
  );
}

/* ------------------------------------------------------------- FIG. 04 --- */
export function MethodTimeline() {
  return (
    <svg
      className="dwg timeline"
      viewBox="0 0 720 118"
      data-animate="timeline"
      role="img"
      aria-label="Timeline: mapping in weeks 0 to 1, prototype to week 3, first release at week 6, then ongoing support."
    >
      <rect className="bluef d-grow" x="20" y="30" width="126" height="13" opacity=".35" />
      <rect className="bluef d-grow" x="152" y="30" width="174" height="13" opacity=".62" />
      <rect className="bluef d-grow" x="332" y="30" width="284" height="13" />
      <rect className="blue d-grow" x="622" y="30" width="78" height="13" strokeDasharray="4 3" />

      <g className="d-fade tl-marks">
      <line className="dim" x1="20" y1="46" x2="20" y2="60" />
      <line className="dim" x1="150" y1="46" x2="150" y2="60" />
      <line className="dim" x1="330" y1="46" x2="330" y2="60" />
      <line className="dim" x1="620" y1="46" x2="620" y2="60" />

      <text className="t-dim" x="20" y="72">WK 0</text>
      <text className="t-dim" x="150" y="72">WK 1</text>
      <text className="t-dim" x="330" y="72">WK 3</text>
      <text className="t-dim" x="620" y="72">WK 6</text>

      <line className="dimline" x1="20" y1="94" x2="620" y2="94" />
      <line className="dimline" x1="20" y1="88" x2="20" y2="100" />
      <line className="dimline" x1="620" y1="88" x2="620" y2="100" />
      <text className="t-dim" x="320" y="112" textAnchor="middle">
        TYPICAL FIRST RELEASE · SIX WEEKS FROM KICK-OFF
      </text>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------- FIG. 05 --- */
export function CaseSchematic() {
  return (
    <svg
      className="dwg schematic"
      viewBox="0 0 720 240"
      data-animate="schematic"
      role="img"
      aria-label="Before: six steps connected by tangled paths, taking eleven days across two systems of record. After: four steps in a single line, taking four hours in one system."
    >
      <defs>
        <marker id="arRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path className="redf" d="M0 0 L10 5 L0 10 z" />
        </marker>
        <marker id="arBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path className="bluef" d="M0 0 L10 5 L0 10 z" />
        </marker>
      </defs>

      <text className="t-red d-fade sc-label" x="20" y="16">BEFORE</text>
      <text className="t-blue d-fade sc-label sc-label--after" x="392" y="16">AFTER</text>
      <line className="dim d-fade sc-divider" x1="360" y1="24" x2="360" y2="200" />

      {/* BEFORE — the tangle */}
      <g className="red d-fade sc-tangle" markerEnd="url(#arRed)">
        <path className="d-draw" pathLength="1" d="M98 54 L146 48" />
        <path className="d-draw" pathLength="1" d="M228 48 L244 68" />
        <path className="d-draw" pathLength="1" d="M246 88 C182 104 140 112 108 130" />
        <path className="d-draw" pathLength="1" d="M62 148 C64 168 96 168 146 166" />
        <path className="d-draw" pathLength="1" d="M228 166 L246 146" />
      </g>
      <path className="red d-fade sc-loop" d="M286 122 L286 100" strokeDasharray="4 3" markerEnd="url(#arRed)" />
      <text className="t-red d-fade sc-loop" x="294" y="112">×3</text>

      <g className="st d-fade sc-before">
        <rect className="sheetf" x="22" y="40" width="76" height="28" />
        <rect className="sheetf" x="150" y="34" width="76" height="28" />
        <rect className="sheetf" x="248" y="70" width="76" height="28" />
        <rect className="sheetf" x="24" y="118" width="76" height="28" />
        <rect className="sheetf" x="150" y="152" width="76" height="28" />
        <rect className="sheetf" x="248" y="122" width="76" height="28" />
      </g>
      <g textAnchor="middle" className="d-fade sc-before">
        <text x="60" y="58">EMAIL IN</text>
        <text x="188" y="52">RE-KEY</text>
        <text x="286" y="88">SHEET v7</text>
        <text x="62" y="136">PRINT</text>
        <text x="188" y="170">SIGN</text>
        <text x="286" y="140">RE-KEY</text>
      </g>

      <g className="d-fade sc-before-dim">
      <line className="dimline" x1="22" y1="205" x2="324" y2="205" />
      <line className="dimline" x1="22" y1="199" x2="22" y2="211" />
      <line className="dimline" x1="324" y1="199" x2="324" y2="211" />
      <text className="t-red" x="173" y="226" textAnchor="middle">
        11 DAYS · 4 HANDOFFS · 2 SYSTEMS OF RECORD
      </text>
      </g>

      {/* AFTER — one line */}
      <g className="blue d-fade sc-flow" markerEnd="url(#arBlue)">
        <path className="d-draw" pathLength="1" d="M464 103 L474 103" />
        <path className="d-draw" pathLength="1" d="M548 103 L558 103" />
        <path className="d-draw" pathLength="1" d="M632 103 L642 103" />
      </g>
      <g className="blue d-fade sc-after">
        <rect className="sheetf" x="392" y="88" width="72" height="30" />
        <rect className="sheetf" x="476" y="88" width="72" height="30" />
        <rect className="sheetf" x="560" y="88" width="72" height="30" />
        <rect className="sheetf" x="644" y="88" width="72" height="30" />
      </g>
      <g textAnchor="middle" className="t-blue d-fade sc-after">
        <text x="428" y="107">ORDER</text>
        <text x="512" y="107">QUEUE</text>
        <text x="596" y="107">APPROVE</text>
        <text x="680" y="107">LEDGER</text>
      </g>

      <g className="d-fade sc-after-dim">
      <line className="dimline" x1="392" y1="205" x2="716" y2="205" />
      <line className="dimline" x1="392" y1="199" x2="392" y2="211" />
      <line className="dimline" x1="716" y1="199" x2="716" y2="211" />
      <text className="t-blue" x="554" y="226" textAnchor="middle">
        4 HOURS · 1 HANDOFF · 1 SYSTEM OF RECORD
      </text>
      </g>
    </svg>
  );
}

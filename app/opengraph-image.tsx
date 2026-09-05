import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { site } from "@/content/site";

/* Generated at build time, so the social preview can never drift out of sync
   with the headline. Fonts are read from node_modules rather than fetched, so
   a network hiccup can't break the build. Satori reads .woff (not .woff2). */
export const alt = `${site.name} — ${site.hero.heading}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/@fontsource/chivo/files");
const chivoBlack = readFileSync(join(fontDir, "chivo-latin-900-normal.woff"));
const chivoRegular = readFileSync(join(fontDir, "chivo-latin-400-normal.woff"));

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#E7EAE4",
          padding: "56px 64px",
          fontFamily: "Chivo",
          position: "relative",
        }}
      >
        {/* datum bar — the system we install */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 14,
            backgroundColor: "#2242C6",
            display: "flex",
          }}
        />

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="42" height="42" viewBox="0 0 46 46">
            <line x1="6" y1="30" x2="40" y2="18" stroke="#171A17" strokeWidth="3" strokeLinecap="round" />
            <polygon points="23,26 30,39 16,39" fill="#171A17" />
            <rect x="32" y="9" width="9" height="9" fill="#2242C6" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 25,
              fontWeight: 900,
              letterSpacing: 1,
              color: "#171A17",
            }}
          >
            ELEVARE FOUNDRY
          </div>
        </div>

        {/* headline + drawing */}
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <div
            style={{
              display: "flex",
              width: 640,
              fontSize: 60,
              fontWeight: 900,
              lineHeight: 1.03,
              letterSpacing: -2.4,
              color: "#171A17",
            }}
          >
            We build the system your spreadsheets are pretending to be.
          </div>

          <svg width="392" height="250" viewBox="0 0 560 340">
            <line x1="30" y1="250" x2="530" y2="250" stroke="#B9BFB4" strokeWidth="3" />
            <polygon points="350,175 375,246 325,246" fill="#171A17" />
            <line
              x1="60" y1="233" x2="520" y2="141"
              stroke="#171A17" strokeWidth="11" strokeLinecap="round"
            />
            <g transform="rotate(-11.3 513 130)">
              <rect x="486" y="112" width="58" height="30" fill="#2242C6" />
            </g>
            <line x1="90" y1="146" x2="90" y2="200" stroke="#CE452A" strokeWidth="5" />
            <polygon points="90,218 79,196 101,196" fill="#CE452A" />
          </svg>
        </div>

        {/* footer rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #B9BFB4",
            paddingTop: 22,
            fontSize: 19,
            fontWeight: 400,
            letterSpacing: 1.6,
            color: "#636A5F",
          }}
        >
          <div style={{ display: "flex" }}>OPERATIONS SOFTWARE, BUILT TO FIT</div>
          <div style={{ display: "flex", color: "#2242C6" }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Chivo", data: chivoBlack, weight: 900, style: "normal" },
        { name: "Chivo", data: chivoRegular, weight: 400, style: "normal" },
      ],
    }
  );
}

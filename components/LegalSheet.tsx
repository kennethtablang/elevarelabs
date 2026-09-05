import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import type { LegalDoc } from "@/content/legal";

/* The supporting documents are drawn as appendices to the same set — same
   rail, same FIG numbering, same title block. A privacy notice set in a
   different typeface on a white page reads as something bolted on by a
   lawyer; this one should read as part of the drawing.

   Server component. There is nothing interactive on these pages beyond the
   nav, so nothing here ships JavaScript. */
export default function LegalSheet({ doc }: { doc: LegalDoc }) {
  return (
    <div className="frame">
      <Nav />

      <main id="main">
        <Section id="doc" fig={doc.fig}>
          <div className="sec-head">
            <span className="label">{doc.eyebrow}</span>
            <h1>{doc.title}</h1>
            <p className="lede">{doc.summary}</p>
          </div>

          {/* The title block, in the corner of the sheet where a drawing
              puts its revision and status. */}
          <dl className="doc-block">
            <div>
              <dt>Revised</dt>
              <dd>
                <time dateTime={doc.updated}>{formatDate(doc.updated)}</time>
              </dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{doc.status}</dd>
            </div>
            <div>
              <dt>Applies to</dt>
              <dd>This website</dd>
            </div>
          </dl>

          <div className="doc">
            {doc.sections.map((s) => (
              <section className="doc-sec" key={s.n} id={s.n.toLowerCase()}>
                <span className="pn">{s.n}</span>
                <div>
                  <h2>{s.heading}</h2>
                  {s.body.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                  {s.list && (
                    <ul>
                      {s.list.map((li) => (
                        <li key={li.slice(0, 32)}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          <p className="dwg-cap">
            {doc.fig} · revised {formatDate(doc.updated)} · Elevare Foundry
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

/* Explicit month name and a fixed locale: "05/09/2026" means two different
   days depending on who is reading it, and a legal document is the last place
   to be ambiguous about a date. */
function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

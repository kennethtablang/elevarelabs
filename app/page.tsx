import { site } from "@/content/site";
import Nav from "@/components/Nav";
import Motion from "@/components/Motion";
import CaseSteps from "@/components/CaseSteps";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import {
  LeverDrawing,
  MethodTimeline,
  CaseSchematic,
  AssemblyIcon,
} from "@/components/drawings";

export default function Home() {
  const { hero, load, assemblies, method, cases, pricing, about, book } = site;

  return (
    <>
      <Motion />
      <CaseSteps />
      <a className="skip" href="#main">Skip to content</a>

      <div className="frame">
        <Nav />

        <main id="main">
          {/* ============================================= 01 · HERO ==== */}
          <Section id="top" fig={hero.fig} className="hero">
            <div className="hero-grid">
              <div>
                <h1>{hero.heading}</h1>
                <p className="lede">
                  {hero.lede} <span className="mono">{hero.ledeMono}</span>.
                </p>
                <div className="hero-btns">
                  <a className="btn btn--primary" href={site.bookingUrl}>
                    {hero.primaryCta}
                  </a>
                  <a className="btn btn--ghost" href="#method">
                    {hero.secondaryCta}
                  </a>
                </div>
                <p className="hero-note">{hero.note}</p>
              </div>

              <div>
                <LeverDrawing />
              </div>
            </div>

            <div className="stats">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <b className="tnum">{s.figure}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ==================================== 02 · LOAD ANALYSIS ==== */}
          <Section id="load" fig={load.fig}>
            <div className="sec-head">
              <span className="label label--red">{load.eyebrow}</span>
              <h2>{load.heading}</h2>
              <p className="lede">{load.lede}</p>
            </div>

            <ul className="loads">
              {load.items.map((item) => (
                <li key={item.pn}>
                  <span className="pn">{item.pn}</span>
                  <span className="sym">
                    {item.symptom} <em>{item.detail}</em>
                  </span>
                  <span className="cost">{item.cost}</span>
                </li>
              ))}
            </ul>

            <p className="dwg-cap">{load.footnote}</p>
          </Section>

          {/* =============================== 03 · STANDARD ASSEMBLIES === */}
          <Section id="build" fig={assemblies.fig}>
            <div className="sec-head">
              <span className="label label--blue">{assemblies.eyebrow}</span>
              <h2>{assemblies.heading}</h2>
              <p className="lede">{assemblies.lede}</p>
            </div>

            <div className="parts">
              {assemblies.items.map((part) => (
                <div className="part" key={part.title}>
                  <AssemblyIcon name={part.icon} />
                  <h3>{part.title}</h3>
                  <p>{part.body}</p>
                  <span className="spec">{part.spec}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* =========================================== 04 · METHOD ==== */}
          <Section id="method" fig={method.fig}>
            <div className="sec-head">
              <span className="label">{method.eyebrow}</span>
              <h2>{method.heading}</h2>
              <p className="lede">{method.lede}</p>
            </div>

            <MethodTimeline />

            <div className="steps">
              {method.steps.map((step) => (
                <div className="step" key={step.title}>
                  <span className="wk">{step.week}</span>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                  <span className="need">{step.need}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ======================================= 05 · CASE FILES ==== */}
          <Section id="cases" fig={cases.fig}>
            <div className="sec-head">
              <span className="label">{cases.eyebrow}</span>
              <h2>{cases.heading}</h2>
              <p className="lede">{cases.lede}</p>
            </div>

            {cases.items.map((c) => (
              <article className="case" key={c.id} data-steps={c.steps.length || undefined}>
                <div className="case-head">
                  <span className="id">{c.id}</span>
                  <h3>{c.title}</h3>
                  <span className="meta">{c.meta}</span>
                </div>
                <div className="case-body">
                  {c.schematic ? (
                    /* The drawing is the widest thing on the sheet. Past the
                       fold width it sits beside the brief instead of under it,
                       so a 1920 panel doesn't end in half a metre of blank
                       paper to the right of the figure — and once there is
                       enough to scroll past, it pins while the steps walk
                       through it. */
                    <div className="case-fold">
                      <div className="case-note">
                        <p className="case-brief">{c.body}</p>

                        {c.steps.length > 0 && (
                          <ol className="case-steps">
                            {c.steps.map((s) => (
                              <li className="case-step" key={s.at} data-at={s.at}>
                                {/* The step block is most of a screen tall, but
                                    what the reader is looking at is this — so
                                    this is what decides when the step is on. */}
                                <div className="case-step-in">
                                  <span className="n">{s.n}</span>
                                  <p>{s.body}</p>
                                </div>
                              </li>
                            ))}
                          </ol>
                        )}

                        <p className="dwg-cap">{c.caption}</p>
                      </div>
                      <div className="case-plate">
                        <CaseSchematic />
                      </div>
                    </div>
                  ) : (
                    <p className="case-brief">{c.body}</p>
                  )}

                  <div className="case-figures">
                    {c.figures.map((f) => (
                      <div key={f.label}>
                        <b className={`${f.tone} tnum`}>{f.value}</b>
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </Section>

          {/* ================================ 06 · ENGAGEMENT SHAPES ==== */}
          <Section id="pricing" fig={pricing.fig}>
            <div className="sec-head">
              <span className="label label--blue">{pricing.eyebrow}</span>
              <h2>{pricing.heading}</h2>
              <p className="lede">{pricing.lede}</p>
            </div>

            <div className="tiers">
              {pricing.tiers.map((tier) => (
                <div className={tier.lead ? "tier tier--lead" : "tier"} key={tier.n}>
                  <span className="n">{tier.n}</span>
                  <span className="amt">
                    {tier.amount}
                    <small>{tier.terms}</small>
                  </span>
                  <ul>
                    {tier.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* ============================================ 07 · ABOUT ==== */}
          <Section id="about" fig={about.fig}>
            <div className="sec-head">
              <span className="label">{about.eyebrow}</span>
              <h2>{about.heading}</h2>
            </div>

            <div className="about">
              <div>
                {about.paragraphs.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
                <p>{about.etymology}</p>
              </div>
              <div className="plate">
                <dl>
                  {about.facts.map((fact) => (
                    <div key={fact.term} style={{ display: "contents" }}>
                      <dt>{fact.term}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Section>

          {/* ============================================= 08 · BOOK ==== */}
          <Section id="book" fig={book.fig} className="book">
            <div className="book-grid">
              <div>
                <span className="label">{book.eyebrow}</span>
                <h2>{book.heading}</h2>
                <p className="lede">{book.lede}</p>
                <div className="hero-btns">
                  <a className="btn btn--primary" href={site.bookingUrl}>
                    {book.primaryCta}
                  </a>
                  <a className="btn btn--ghost" href={`mailto:${site.email}`}>
                    {book.secondaryCta}
                  </a>
                </div>
              </div>
              <ul className="book-list">
                {book.steps.map((step, i) => (
                  <li key={step}>
                    <span className="n">{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </main>
      </div>

      <Footer />
    </>
  );
}

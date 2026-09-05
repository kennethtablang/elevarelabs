import { site } from "@/content/site";
import { Mark } from "./drawings";

/* Laid out as a drawing sheet's title block: labelled cells carrying real
   facts, then the sitemap, then the legal strip. Same visual language as the
   figures on the page, so the footer belongs to the drawing rather than
   sitting under it. */
export default function Footer() {
  const f = site.footer;

  return (
    <footer className="foot">
      {/* the plate — facts a buyer checks before writing to you.
          A <dl>, because that is what a list of term/value pairs is; the
          inner <div> per pair is the one wrapper HTML5 allows there. */}
      <dl className="foot-plate">
        {f.plate.map((cell) => (
          <div key={cell.term}>
            <dt>{cell.term}</dt>
            <dd>{cell.value}</dd>
          </div>
        ))}
      </dl>

      <div className="foot-main">
        <div className="foot-brand">
          <a className="brand" href="#top">
            <Mark size={28} />
            <b>{site.name}</b>
          </a>
          <p className="foot-tag">{site.tagline}</p>
          <p className="foot-blurb">{f.blurb}</p>

          {/* Renders only when there is something to render, so the list
              stays empty until there is a real profile to point at. */}
          {f.social.length > 0 && (
            <ul className="foot-social">
              {f.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {f.columns.map((col) => (
          <nav className="foot-col" key={col.title} aria-label={col.title}>
            <h2 className="foot-h">{col.title}</h2>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="foot-col foot-contact">
          <h2 className="foot-h">{f.contact.heading}</h2>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={f.contact.phoneHref}>{f.contact.phone}</a>
            </li>
          </ul>

          <address>
            {f.contact.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>

          <a className="btn btn--primary btn--sm" href={site.bookingUrl}>
            {site.hero.primaryCta}
          </a>
        </div>
      </div>

      <div className="foot-legal">
        <span>
          © {new Date().getFullYear()} {f.legal.entity}
        </span>
        {f.legal.registration && <span>{f.legal.registration}</span>}
        {f.legal.tin && <span>{f.legal.tin}</span>}
        <ul>
          {f.legal.links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

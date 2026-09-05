# Elevare Foundry — website

Next.js 15 (App Router, TypeScript). The homepage is **fully static** — it
prerenders to HTML at build time, so crawlers get the complete page with no
JavaScript execution required.

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # production build
npm start        # serve the production build
```

> **Never run `npm run build` while `npm run dev` is running.** They share the
> `.next` directory and corrupt each other. The symptom is `npm start` failing
> with `Cannot find module './431.js'` or a 500 on every route. The fix is
> `rm -rf .next` and rebuild.

## Layout

```
app/
  layout.tsx           fonts, metadata, JSON-LD structured data
  page.tsx             the eight sections, composed
  not-found.tsx        branded 404
  opengraph-image.tsx  social card, generated at build
  globals.css          the "Fulcrum" design system
  sitemap.ts           /sitemap.xml
  robots.ts            /robots.txt
components/
  Nav.tsx              the only client component (menu + active section)
  Footer.tsx            the large footer, laid out as a title block
  Section.tsx          the numbered drafting-sheet rail
  drawings.tsx         every SVG on the site
content/
  site.ts              ← all copy and figures live here
public/
  favicon.svg
```

**Edit `content/site.ts`, not the components.** One source of truth for every
word and number — which is also the thing we sell.

## SEO

Already wired:

- Per-page metadata via the Next Metadata API, with a title template
- Canonical URL, Open Graph and Twitter card tags
- JSON-LD `@graph`: `Organization`, `WebSite`, and a `ProfessionalService`
  whose offer catalogue is generated from the four assemblies
- `/sitemap.xml` and `/robots.txt` generated at build
- Social card generated at build by `app/opengraph-image.tsx`, using the real
  headline and Chivo 900 read from `node_modules` — no network fetch, so a
  bad connection can't break the build
- Fonts self-hosted through `next/font` — no render-blocking request to
  Google, no layout shift (helps LCP and CLS)
- Semantic heading order, real `aria-label`s on every drawing, skip link

Still to do:

- Set `site.url` in `content/site.ts` to the real domain — canonical, sitemap,
  structured data and the social card all read from it
- Add Google Search Console verification once the domain is live

## Accessibility

Every ink colour clears WCAG AA (4.5:1) against `--sheet`, the lightest ground
any of them sits on — measured, not eyeballed. The ratios are noted beside each
token in `globals.css`. **If you change one, re-measure it.**

Two reds exist on purpose: `--load` (`#CE452A`) is for strokes and arrows in
drawings, where the 3:1 graphics threshold applies; `--load-ink` (`#B93B23`) is
the same red darkened for small text. Don't use `--load` for type.

## Motion

The drawings draw themselves, the way a plotter would, and then the mechanism
works: the lever starts level, the effort vector strikes, and the arm swings up
to lift the load. That is the whole pitch, animated once. The case schematic
draws the tangle in red, pauses, then replaces it with the clean blue line --
the gap between the two is the argument.

**No body text animates.** Nothing you need to read is ever hidden waiting on a
scroll position. Only linework moves.

### The rule that keeps this safe

Motion is **additive**, and the direction matters:

- The resting CSS renders every drawing **finished and visible**.
- `Motion.tsx` sets `data-motion="on"`, and *that* is what hides things so they
  can be drawn in.
- No JS, or `prefers-reduced-motion: reduce` -> nothing is ever hidden.

Never invert this. If the hidden state were the default and JS had to un-hide
it, any failure would leave a blank drawing on the page.

There is also a 5-second failsafe in `Motion.tsx` that reveals everything if the
IntersectionObserver has not fired -- a page opened in a background tab, for
instance, where observers and rAF are suspended. Losing the animation is fine;
losing the drawing is not.

Every keyframe ends on exactly the value the static design already has
(`rotate(0)`, `stroke-dashoffset: 0`, `opacity: 1`, `scaleX(1)`) with
`animation-fill-mode: forwards`, so the animated and static renderings are
identical once settled.

### Adding motion to a new drawing

1. Put `data-animate="<name>"` on the SVG.
2. Tag elements `d-draw` (linework; needs `pathLength="1"`), `d-fade`, or
   `d-grow`.
3. Add `animation-delay` rules under
   `:root[data-motion="on"] .<name>.in-view` in `globals.css`.

`d-draw` only goes on `<line>`, `<path>` and `<polyline>` -- `pathLength` is not
reliable on `<rect>`, so fade those instead.

## The design direction: Fulcrum

The site is a **drafting sheet**. Two working colours carry all the meaning:

| Colour | Hex | Means |
|---|---|---|
| Datum Blue | `#2242C6` | the system we install |
| Load Red | `#CE452A` | the manual process we remove |
| Graphite | `#171A17` | text and structure |
| Drafting | `#E7EAE4` | the sheet |
| Sheet | `#F5F6F2` | panels, nav, cards |
| Rule | `#B9BFB4` | hairlines and dimension lines |

Type: **Chivo 900** headlines, **IBM Plex Sans** body, **IBM Plex Mono** for
every label, figure number and annotation.

Layout: a `26px` grid module (`--unit`) sets all spacing. Each section carries
a `FIG. NN` number in its left rail — keep that sequential when you add
sections, it is the whole conceit.

## Light and dark

Dark mode is a **cyanotype, not an inversion**. White lines on a dark blue
ground is the older drafting convention, so the brand survives the switch
instead of just going grey. Every dark value clears AA against `--sheet`.

The viewer has three states, and the CSS handles all three:

| `<html>` | Means | Wins because |
|---|---|---|
| no `data-theme` | follow the OS | `@media (prefers-color-scheme: dark)` |
| `data-theme="light"` | chose light | media query is guarded with `:not([data-theme="light"])` |
| `data-theme="dark"` | chose dark | its own `:root[data-theme="dark"]` block |

**Only ever redefine tokens inside those blocks — never style a component
there.** A colour whose only definition sits behind `[data-theme]` will not
apply in the un-stamped state, which renders one theme's text on the other
theme's ground.

The inline script in `layout.tsx` applies a stored choice before the body
paints, so returning visitors never see a flash of the wrong theme. That script
also mutates `<html>` before React hydrates, which is the second reason
`suppressHydrationWarning` sits on that element.

`ThemeToggle.tsx` reads the live DOM on click rather than React state, so the
button always flips what is actually on screen.

### The one rule that keeps this direction alive

Every new page needs a **real drawing** — an annotated schematic of an actual
process, with dimension lines and mono callouts. The moment stock illustrations
or generic icons go in, the direction collapses into an ordinary SaaS page. If
nobody on the team will keep drawing, switch directions rather than half-run
this one.

## ⚠ Before you launch — replace these

Everything below is invented placeholder content. Search `content/site.ts` for
`PLACEHOLDER`.

- [ ] **`site.url`** — currently `https://elevarefoundry.com`
- [ ] **`site.email`** and **`site.bookingUrl`** — the primary CTA points at
      `#book` until you set a real calendar link
- [ ] **Hero stat strip** (FIG. 01) — three numbers, currently made up
- [ ] **Both case studies** (FIG. 05) — the situations are realistic, the
      clients and figures are invented. Replace with real engagements, with
      client permission
- [ ] **All pricing** (FIG. 06) — every peso figure is a guess at your range
- [ ] **About plate** (FIG. 07) — `[YEAR]`, `[CITY]`, `[N]` engineers

### Footer — all of it is placeholder

Everything lives under `footer` in `content/site.ts`. Anything in [brackets] or
pointing at `"#"` needs replacing.

- [ ] **Plate** — office city, opening hours, response time, and the
      availability line (`Taking new work for [Q0 20XX]`). This one goes stale;
      either keep it current or delete the cell
- [ ] **Phone** — `contact.phone` *and* the matching `contact.phoneHref`
      (`tel:` links need the bare international number, no spaces or brackets)
- [ ] **Address** — `contact.addressLines`, the registered office
- [ ] **Social** — all four hrefs. **Delete any account you do not have**; an
      empty profile costs more trust than a missing link
- [ ] **Legal entity** — registered name, SEC registration number, TIN
- [ ] **Careers, Field notes, Frequently asked** — currently `"#"`; either
      build the pages or remove the links
- [ ] **Privacy policy and Terms** — currently `"#"`. A privacy policy stops
      being optional the moment the booking flow collects anything, so treat
      this as a launch blocker rather than a nice-to-have

## Later

- Give each case file its own route (`app/cases/[slug]/page.tsx`), opening with
  its schematic. That is where the organic search traffic will land.
- A `/process-map` page for the ₱85k entry offer will convert cold traffic
  better than sending it to the homepage.
- Add `generateMetadata` per case-study page once those routes exist.

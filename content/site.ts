/* ===========================================================================
   One source of truth for every word and number on the site.
   Edit here, not in the components.

   Anything marked  ⚠ PLACEHOLDER  is invented and must be replaced with real,
   verifiable figures before launch. See README.md for the full checklist.
   =========================================================================== */

export const site = {
  name: "Elevare Foundry",
  /** ⚠ PLACEHOLDER — set to your real production domain (no trailing slash). */
  url: "https://elevarefoundry.com",
  tagline: "Your operations, one floor up.",
  email: "elevarefoundry@gmail.com",
  /** ⚠ PLACEHOLDER — your real booking link (Cal.com, Calendly, etc.). */
  bookingUrl: "#book",

  seo: {
    title: "Elevare Foundry — Operations software, built to fit",
    titleTemplate: "%s · Elevare Foundry",
    description:
      "Elevare Foundry designs and builds the internal software a business runs on — quoting, scheduling, approvals and reporting — replacing the spreadsheets, group chats and manual handoffs. Fixed scope, fixed price, working software in six weeks.",
    keywords: [
      "custom business software",
      "business process automation",
      "internal tools development",
      "operations software",
      "workflow automation",
      "spreadsheet replacement",
      "quoting and order management system",
      "scheduling and dispatch software",
    ],
    /* The social card is generated from this content at build time by
       app/opengraph-image.tsx — nothing to add here. */
    locale: "en_PH",
  },

  nav: [
    { label: "What we build", href: "#build" },
    { label: "How we work", href: "#method" },
    { label: "Case files", href: "#cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ],

  /* -------------------------------------------------------------- FIG. 01 */
  hero: {
    fig: "FIG. 01 — MECHANICAL ADVANTAGE",
    heading: "We build the system your spreadsheets are pretending to be.",
    lede: "Elevare Foundry designs and builds the internal software a business actually runs on — quoting, scheduling, approvals, reporting — so the work stops living in inboxes, group chats and a file called",
    ledeMono: "final_v7.xlsx",
    primaryCta: "Book a walkthrough",
    secondaryCta: "See how we work",
    note: "30 minutes · we map one of your processes on the call · no deck",
    /** ⚠ PLACEHOLDER — replace all three with your own measured results. */
    stats: [
      { figure: "4 hrs", label: "Invoice cycle, was 11 days" },
      { figure: "1", label: "Source of truth, not nine tabs" },
      { figure: "6 wks", label: "To first working release" },
    ],
  },

  /* -------------------------------------------------------------- FIG. 02 */
  load: {
    fig: "FIG. 02 — LOAD ANALYSIS",
    eyebrow: "The load",
    heading: "Here's what we usually find",
    lede: "Before writing anything, we map how work actually moves through the business — including the workarounds nobody admits to. These five findings come up almost every time.",
    items: [
      {
        pn: "L-01",
        symptom: "Quotes live in one person's inbox.",
        detail: "When they're on leave, the pipeline stops.",
        cost: "≈ 6 hrs / week",
      },
      {
        pn: "L-02",
        symptom: "The real numbers are in a spreadsheet nobody else opens.",
        detail: "Two people disagree about revenue and both have evidence.",
        cost: "≈ 2 days / month",
      },
      {
        pn: "L-03",
        symptom: "The same data gets typed in three times.",
        detail: "Once in the order form, once in the sheet, once in accounting.",
        cost: "≈ 1 full-time role",
      },
      {
        pn: "L-04",
        symptom: "Approvals happen in a group chat.",
        detail: "Nothing is auditable, and nobody can say what's pending right now.",
        cost: "Unmeasured",
      },
      {
        pn: "L-05",
        symptom: "Month-end takes a week.",
        detail: "Because closing the books means reconstructing what happened.",
        cost: "≈ 5 days / month",
      },
    ],
    footnote:
      "None of these need a platform migration or a new ERP. They need one system, correctly placed.",
  },

  /* -------------------------------------------------------------- FIG. 03 */
  assemblies: {
    fig: "FIG. 03 — STANDARD ASSEMBLIES",
    eyebrow: "What we build",
    heading: "Four systems we build most",
    lede: '"Custom software" is not a product. These are. Each one is built to fit how you already work, not to make you work like the software.',
    items: [
      {
        icon: "quoting" as const,
        title: "Quoting & orders",
        body: "One form, one number, one status. Quotes go out from a controlled template, get versioned, and become an order without anyone retyping a line.",
        spec: "Typical build · 4–6 weeks",
      },
      {
        icon: "dispatch" as const,
        title: "Scheduling & dispatch",
        body: "Who is doing what, where, today. Jobs assigned against real capacity, with the field team looking at the same board as the office.",
        spec: "Typical build · 6–8 weeks",
      },
      {
        icon: "approvals" as const,
        title: "Approvals & compliance",
        body: "Requests with a route, a record and a deadline. Every decision timestamped and attributable, so audits stop being an archaeology project.",
        spec: "Typical build · 3–5 weeks",
      },
      {
        icon: "dashboard" as const,
        title: "Operations dashboard",
        body: "The five numbers you actually run on, computed from the source instead of assembled by hand every Monday morning.",
        spec: "Typical build · 3–4 weeks",
      },
    ],
  },

  /* -------------------------------------------------------------- FIG. 04 */
  method: {
    fig: "FIG. 04 — METHOD",
    eyebrow: "How we work",
    heading: "Fixed scope. Fixed price. Working software in six weeks.",
    lede: "You see it running at the end of every phase, not at the end of the project. If we are wrong about something, you find out in week two, while it is still cheap to fix.",
    steps: [
      {
        week: "WEEK 0–1",
        title: "Map the process",
        body: "We sit with the people doing the work and draw what actually happens, workarounds included. You keep the drawing whether or not you hire us.",
        need: "We need · 3 hrs from 2–3 staff",
      },
      {
        week: "WEEK 1–3",
        title: "Prototype the fix",
        body: "A clickable version of the new process with your real data in it. This is where we find out what we got wrong, while changing it costs a conversation.",
        need: "We need · one decision-maker, weekly",
      },
      {
        week: "WEEK 3–6",
        title: "Ship the first release",
        body: "The narrowest useful version, in production, with your team trained on it. Not a pilot — the real thing, doing real work, on day one.",
        need: "We need · a named owner on your side",
      },
      {
        week: "ONGOING",
        title: "Support & extend",
        body: "We stay on for changes and new modules as the business shifts. Or we hand over the code and documentation and you take it in-house.",
        need: "Your call · retainer or handover",
      },
    ],
  },

  /* -------------------------------------------------------------- FIG. 05 */
  cases: {
    fig: "FIG. 05 — CASE FILES",
    eyebrow: "Case files",
    heading: "Two builds, drawn",
    lede: "Every engagement ends with a schematic of what changed. Red is what we removed. Blue is what we installed.",
    /** ⚠ PLACEHOLDER — the situations are realistic, the clients and figures
     *  are invented. Replace with real engagements, with client permission. */
    items: [
      {
        id: "CASE 01",
        title: "An 11-day invoice cycle, cut to four hours",
        meta: "Distribution · 40 staff · 9 weeks",
        body: "Orders arrived by email, were re-keyed into a shared spreadsheet, printed for approval, then re-keyed again into accounting. Nobody could say what was unbilled without opening four files and asking two people.",
        schematic: true,
        caption:
          "Fig. 05a — Order-to-invoice path, before and after. Drawn from the client's own process map.",
        /** The stepped read of the schematic. Each step pins the drawing and
         *  lights the part of it being described, so the figure is read in the
         *  order the work actually happened. `at` matches data-at on the node
         *  groups in CaseSchematic — keep the two in step if you redraw it.
         *  ⚠ PLACEHOLDER — same caveat as the case itself. */
        steps: [
          {
            at: "1",
            n: "01 · Intake",
            body: "It starts in an inbox. Orders arrive as email, in whatever shape the customer felt like sending them, and the queue is whoever happens to be reading.",
          },
          {
            at: "2",
            n: "02 · Re-key",
            body: "Someone retypes each one into a shared spreadsheet. There are seven versions of that file, and the live one is whichever was opened last.",
          },
          {
            at: "3",
            n: "03 · Paper approval",
            body: "Approval is printed, signed by hand, and walked back to a desk. The only record that a decision happened is the piece of paper it happened on.",
          },
          {
            at: "4",
            n: "04 · Re-key, again",
            body: "Then the same numbers are typed a second time into accounting, by a different person, into a different system. This is where the two systems of record start to disagree.",
          },
          {
            at: "5",
            n: "05 · The build",
            body: "Six steps become four, in one system. An order becomes a queued job, gets approved in place, and lands in the ledger without anyone retyping anything.",
          },
        ],
        figures: [
          { value: "11 days", label: "Invoice cycle, before", tone: "was" as const },
          { value: "4 hours", label: "Invoice cycle, after", tone: "now" as const },
          { value: "0", label: "Re-keyed fields", tone: "now" as const },
          { value: "₱1.4M", label: "Unbilled revenue found in month one", tone: "now" as const },
        ],
      },
      {
        id: "CASE 02",
        title: "One board for an office and eleven field crews",
        meta: "Field services · 60 staff · 7 weeks",
        body: "Dispatch ran on a whiteboard that was photographed each morning and posted to a group chat. Reschedules reached crews late or not at all, and the office learned a job was finished the following day — if someone remembered to say so.",
        schematic: false,
        caption: "",
        steps: [],
        figures: [
          { value: "Next day", label: "Job status visibility, before", tone: "was" as const },
          { value: "Live", label: "Job status visibility, after", tone: "now" as const },
          { value: "+18%", label: "Jobs completed per crew, per week", tone: "now" as const },
          { value: "1", label: "Board, seen by everyone", tone: "now" as const },
        ],
      },
    ],
  },

  /* -------------------------------------------------------------- FIG. 06 */
  pricing: {
    fig: "FIG. 06 — ENGAGEMENT SHAPES",
    eyebrow: "Pricing",
    heading: "What it costs",
    lede: "Published, because you shouldn't have to sit through a sales call to find out whether we're in your range.",
    /** ⚠ PLACEHOLDER — every figure below is a guess at your range. */
    tiers: [
      {
        n: "01 · Process map",
        amount: "₱85,000",
        terms: "Fixed · 2 weeks",
        lead: false,
        includes: [
          "A drawn schematic of one process, end to end",
          "The load analysis, quantified in hours and pesos",
          "A build plan with scope, sequence and price",
          "Yours to keep — including if you build it elsewhere",
        ],
      },
      {
        n: "02 · First release",
        amount: "₱450,000 – ₱900,000",
        terms: "Fixed scope · 6–8 weeks",
        lead: true,
        includes: [
          "Everything in the process map",
          "A working system in production, not a pilot",
          "Data migrated out of your existing spreadsheets",
          "Your team trained, with written runbooks",
          "30 days of changes included after launch",
        ],
      },
      {
        n: "03 · Ongoing",
        amount: "₱60,000 / month",
        terms: "Retainer · rolling, 30 days notice",
        lead: false,
        includes: [
          "New modules and changes as the business shifts",
          "Monitoring, backups and updates",
          "A standing half-day each month with your ops lead",
          "Code and documentation handed over whenever you ask",
        ],
      },
    ],
  },

  /* -------------------------------------------------------------- FIG. 07 */
  about: {
    fig: "FIG. 07 — WHO YOU'D WORK WITH",
    eyebrow: "About",
    heading: "A small team, on purpose",
    paragraphs: [
      "Elevare Foundry is small enough that the person who maps your process is the person who builds it. There is no account manager, no discovery team handing notes to a squad you never meet, and no version of this where you explain your business twice.",
      "We work with businesses between roughly 20 and 200 staff — big enough that the manual process is genuinely expensive, small enough that one well-placed system changes how the whole company runs.",
    ],
    etymology:
      "The name is Latin. Elevāre, to lift, from levāre — to make light. Taking the weight off is the entire job description.",
    /** ⚠ PLACEHOLDER — fill in the bracketed values. */
    facts: [
      { term: "Founded", value: "2025" },
      { term: "Based", value: "Mandaluyong City" },
      { term: "Team", value: "Three software engineers" },
      { term: "Stack", value: "Boring, documented, and chosen to outlive us" },
      { term: "Code", value: "You own it. Repository handed over on request." },
    ],
  },

  /* -------------------------------------------------------------- FIG. 08 */
  book: {
    fig: "FIG. 08 — NEXT STEP",
    eyebrow: "Next step",
    heading: "Book the walkthrough",
    lede: "Thirty minutes. Bring the process that annoys you most — we'll map it on the call and tell you straight whether software is the answer.",
    primaryCta: "Book a walkthrough",
    secondaryCta: "Email us instead",
    steps: [
      "You describe one process. We draw it live on the call.",
      "We tell you what we would build, roughly what it costs, and how long it takes.",
      "You get the drawing by email either way. No obligation, no follow-up sequence.",
    ],
  },

  /* --------------------------------------------------------------- FOOTER
     Almost everything here is a placeholder. Anything wrapped in [brackets]
     or pointing at "#" must be filled in before launch — see README.md. */
  footer: {
    blurb:
      "We design and build the internal software that businesses of 20 to 200 people actually run on. Fixed scope, fixed price, working software in six weeks.",

    columns: [
      {
        title: "What we build",
        links: [
          { label: "Quoting & orders", href: "#build" },
          { label: "Scheduling & dispatch", href: "#build" },
          { label: "Approvals & compliance", href: "#build" },
          { label: "Operations dashboard", href: "#build" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "How we work", href: "#method" },
          { label: "Case files", href: "#cases" },
          { label: "Pricing", href: "#pricing" },
          { label: "About", href: "#about" },
          /** ⚠ PLACEHOLDER — no page yet */
          { label: "Careers", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Book a walkthrough", href: "#book" },
          { label: "The process map", href: "#pricing" },
          /** ⚠ PLACEHOLDER — no pages yet */
          { label: "Field notes", href: "#" },
          { label: "Frequently asked", href: "#" },
        ],
      },
    ],

    contact: {
      heading: "Talk to us",
      phone: "+63 992 572 4664",
      phoneHref: "tel:+639925724664",
      /** ⚠ INCOMPLETE — city only. Add unit, street and barangay before
       *  launch: a contact block that cannot be posted to reads as evasive. */
      addressLines: [
        "Mandaluyong City",
        "Metro Manila, Philippines",
      ],
    },

    /* No social accounts listed on purpose. The footer renders this list
       only when it has something in it, so adding a real profile here is
       the whole change — nothing to un-hide. */
    social: [] as { label: string; href: string }[],

    /* The title-block plate. Real, checkable facts a buyer wants before they
       write to you — not decoration. Keep it honest and keep it current. */
    plate: [
      { term: "Office", value: "Mandaluyong City, Philippines" },
      { term: "Hours", value: "Mon–Fri · 09:00–18:00 PHT" },
      { term: "Response", value: "Within one business day" },
      { term: "Availability", value: "Taking new work for [Q0 20XX]" },
    ],

    legal: {
      /** ⚠ PLACEHOLDER — registered entity name and numbers */
      entity: "[Elevare Foundry Inc.]",
      /* Left empty on purpose. The legal strip renders each of these only
         when it has a value, so filling one in is the whole change. Worth
         putting back once the company is registered — a Philippine buyer
         doing due diligence looks for them. */
      registration: "",
      tin: "",
      /** ⚠ PLACEHOLDER — these pages do not exist yet. A privacy policy
       *  is a legal requirement once the booking form collects anything. */
      links: [
        { label: "Privacy policy", href: "#" },
        { label: "Terms of service", href: "#" },
        { label: "Accessibility", href: "#" },
      ],
    },
  },
};

export type Site = typeof site;

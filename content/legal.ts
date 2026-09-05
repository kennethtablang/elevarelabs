/* ===========================================================================
   The three supporting documents, as data. Same rule as site.ts: edit here,
   not in the components.

   ⚠ READ THIS BEFORE LAUNCH. These are drafts written against what this
   website verifiably does — the privacy notice in particular describes the
   actual code: no analytics, no forms, no cookies, one localStorage entry.
   That part is true and checkable. The parts that turn on facts about the
   company rather than the site — the registered entity, the hosting provider
   and its log retention, the venue clause — are marked ⚠ and are guesses in
   the right shape. None of this has been reviewed by a lawyer, and it should
   be before it goes live. A privacy notice is a legal undertaking under the
   Data Privacy Act, not copy.

   If you change what the site does, change the notice in the same commit.
   The moment the booking link points at a real scheduler, or an analytics
   script lands, section A-05 and A-07 stop being true.
   =========================================================================== */

export type DocSection = {
  n: string;
  heading: string;
  body: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  fig: string;
  eyebrow: string;
  title: string;
  summary: string;
  /** Shown in the title block, and as dateModified. ISO, so it sorts. */
  updated: string;
  /** One-line honest statement of how finished this document is. */
  status: string;
  sections: DocSection[];
  metaTitle: string;
  metaDescription: string;
};

const UPDATED = "2026-09-05";

/* ------------------------------------------------------------- APPENDIX A */
export const privacy: LegalDoc = {
  slug: "privacy",
  fig: "APPX. A — PRIVACY NOTICE",
  eyebrow: "Privacy",
  title: "What this site knows about you",
  summary:
    "Almost nothing, and we would rather tell you exactly what than reassure you in general terms. This site sets no cookies, runs no analytics and has no forms.",
  updated: UPDATED,
  status: "Describes the site as built. Not yet reviewed by counsel.",
  sections: [
    {
      n: "A-01",
      heading: "What this covers",
      body: [
        "This notice covers this website. It does not cover what happens inside an engagement — if we work together, how we handle your business data is set out in the agreement we both sign, which is a more specific document than this one and takes precedence over it.",
      ],
    },
    {
      n: "A-02",
      heading: "What we collect here: nothing",
      body: [
        "There is no analytics on this site. No Google Analytics, no Meta pixel, no Hotjar, no session recording, no A/B testing tool, no tag manager. There are no forms, no accounts and no logins. Nothing you do on these pages is sent to us, because there is nothing here that sends it.",
        "This is checkable rather than something you have to take on faith: open your browser's network panel and load any page on this site. Every request goes to this domain. There is no third-party call to block.",
      ],
    },
    {
      n: "A-03",
      heading: "The one thing your browser stores",
      body: [
        "If you use the light/dark toggle, we save your choice in your browser's local storage under the key “theme”, with the value “light” or “dark”. That is the entire contents.",
        "It is not a cookie, so it is never attached to a request and never reaches our server or anyone else's. It stays on the device you set it on. Clearing your site data removes it, and the site then follows your operating system's appearance setting instead. We do not consider this personal data and it is not used to identify or count anyone.",
      ],
    },
    {
      n: "A-04",
      heading: "Fonts and other people's servers",
      body: [
        "The typefaces are compiled into this site at build time and served from this domain. Your browser makes no request to Google Fonts or any other font host, so no third party learns your IP address from reading this page. There are no embedded videos, maps, chat widgets or social buttons for the same reason.",
      ],
    },
    {
      n: "A-05",
      heading: "Server logs",
      body: [
        "Our hosting provider records standard access logs when a page is served — IP address, timestamp, the path requested, the browser's user-agent string. This is ordinary web server behaviour and we use it only to keep the site up and to investigate abuse. We do not build profiles from it, cross-reference it or share it.",
        "⚠ This section needs the hosting provider named and its actual retention period stated before launch.",
      ],
    },
    {
      n: "A-06",
      heading: "When you email us",
      body: [
        "The email address on this site is a Google Workspace mailbox. If you write to us, Google processes and stores that message as our email provider, on the same terms as any business mailbox.",
        "We keep correspondence for as long as the enquiry is live, and for as long as we have a working relationship after that. If you would like your correspondence deleted, ask and we will delete it, unless we are required to keep a record for tax or legal reasons.",
      ],
    },
    {
      n: "A-07",
      heading: "Booking a walkthrough",
      body: [
        "⚠ The booking link is not yet connected. When it points at a scheduling service, that service will collect whatever you type into it — typically your name, email address and chosen time — under its own privacy policy, not ours. This section must name that service and link its policy before the link goes live.",
      ],
    },
    {
      n: "A-08",
      heading: "Your rights",
      body: [
        "The Data Privacy Act of 2012 (Republic Act No. 10173) gives you rights over personal data we hold about you. In practice, for this website, the only personal data we are likely to hold is an email you sent us. You have the right to:",
      ],
      list: [
        "be told what we hold and why",
        "get a copy of it",
        "have it corrected if it is wrong",
        "object to how we are using it",
        "have it erased or blocked",
        "receive it in a portable format",
        "be compensated for damage caused by its mishandling",
      ],
    },
    {
      n: "A-09",
      heading: "Asking us anything about this",
      body: [
        "Write to the email address in the footer and say what you want. There is no form and no ticket number. We are a team of three and one of us will answer.",
        "If you are not satisfied with how we have handled a request, you can complain to the National Privacy Commission at privacy.gov.ph.",
      ],
    },
    {
      n: "A-10",
      heading: "Changes",
      body: [
        "If we change what this site does, we change this notice in the same release. The date in the title block is the date of the last change, and it is not decorative — if the site starts collecting something, that date will move.",
      ],
    },
  ],
  metaTitle: "Privacy notice",
  metaDescription:
    "This site sets no cookies, runs no analytics and has no forms. What your browser stores, what our host logs, and your rights under the Data Privacy Act.",
};

/* ------------------------------------------------------------- APPENDIX B */
export const terms: LegalDoc = {
  slug: "terms",
  fig: "APPX. B — TERMS OF SERVICE",
  eyebrow: "Terms",
  title: "Terms for using this site",
  summary:
    "The rules for the website itself. Actual engagements run on a separate signed agreement — nothing here creates one, and nothing here is a quotation.",
  updated: UPDATED,
  status: "Draft. Must be reviewed by counsel before launch.",
  sections: [
    {
      n: "B-01",
      heading: "Who this is between",
      body: [
        "These terms are between you, as a visitor to this website, and Elevare Foundry, a software company based in Mandaluyong City, Metro Manila, Philippines.",
        "⚠ The registered entity name and registration number need to be stated here once the company is registered.",
      ],
    },
    {
      n: "B-02",
      heading: "What this site is",
      body: [
        "It describes work we do and roughly what it costs. It is marketing material. Reading it, emailing us, or booking a call does not create a contract, a client relationship or any obligation on either side.",
        "If we end up working together, that is governed by a separate agreement we both sign, which sets out scope, price, timeline and everything else. Where that agreement and this page disagree, that agreement wins.",
      ],
    },
    {
      n: "B-03",
      heading: "Prices and figures on this site",
      body: [
        "Published prices are indicative ranges to tell you whether we are in your budget without a sales call. They are not quotations and are not held open. A real price comes from a real scope, in writing.",
        "⚠ The case studies currently on the site are illustrative placeholders and are marked as such in the source. This clause is written for the real ones: figures in case studies are drawn from actual engagements and published with the client's permission. Your results will differ, because your business does.",
      ],
    },
    {
      n: "B-04",
      heading: "Using the site",
      body: [
        "Read it, quote it, send it to a colleague, print it. What you may not do is misuse it: no attempting to break, overload or gain unauthorised access to it, no automated scraping at a rate that degrades it for anyone else, and nothing unlawful.",
      ],
    },
    {
      n: "B-05",
      heading: "What belongs to whom",
      body: [
        "The words, the drawings, the layout and the code of this site are ours. The technical drawings in particular are original work, not stock. You may quote or reference the site with attribution; you may not republish it wholesale or present it as your own.",
        "Trade marks and company names belonging to other people remain theirs.",
      ],
    },
    {
      n: "B-06",
      heading: "Links to other sites",
      body: [
        "Where we link out, we are not responsible for what is on the other end. A link is not an endorsement, and other sites have their own terms and their own privacy practices.",
      ],
    },
    {
      n: "B-07",
      heading: "No warranty",
      body: [
        "We try to keep this site accurate and available, but it is provided as it is. We do not promise it will be uninterrupted, error-free, or that anything on it is fit for a particular purpose. Nothing here is professional advice for your specific situation.",
      ],
    },
    {
      n: "B-08",
      heading: "Limits on liability",
      body: [
        "To the extent the law allows, we are not liable for loss arising from your use of this website — including lost profit, lost data or business interruption. Nothing in these terms limits liability for fraud, death or personal injury caused by negligence, or anything else that cannot lawfully be limited.",
        "⚠ Counsel should set the liability cap and confirm this against Philippine consumer law.",
      ],
    },
    {
      n: "B-09",
      heading: "Governing law",
      body: [
        "These terms are governed by the laws of the Republic of the Philippines, and the courts of Mandaluyong City, Metro Manila have exclusive jurisdiction over any dispute about them.",
        "⚠ Venue should be confirmed by counsel against the registered office.",
      ],
    },
    {
      n: "B-10",
      heading: "Changes",
      body: [
        "We may update these terms. The date in the title block is the date of the current version, and the version you agreed to is the one that was published when you used the site.",
      ],
    },
  ],
  metaTitle: "Terms of service",
  metaDescription:
    "Terms for using the Elevare Foundry website. Engagements run on a separate signed agreement; published prices are indicative, not quotations.",
};

/* ------------------------------------------------------------- APPENDIX C */
export const accessibility: LegalDoc = {
  slug: "accessibility",
  fig: "APPX. C — ACCESSIBILITY",
  eyebrow: "Accessibility",
  title: "How this site is built to be read",
  summary:
    "We aim at WCAG 2.2 level AA. This page says what is actually built in, what we know is not done, and how to tell us when we have got it wrong.",
  updated: UPDATED,
  status: "Self-assessed. No independent audit has been carried out.",
  sections: [
    {
      n: "C-01",
      heading: "The standard we are aiming at",
      body: [
        "The Web Content Accessibility Guidelines 2.2, level AA. We are claiming an aim, not a certification: this is a self-assessment by the people who built the site, and it has not been audited by anyone else.",
      ],
    },
    {
      n: "C-02",
      heading: "What is built in",
      body: ["Specifically, and all of it verifiable by inspecting the page:"],
      list: [
        "A skip link, first in the tab order, that jumps past the navigation to the main content",
        "One visible focus style everywhere — a two-pixel outline in the brand blue, offset three pixels, on anything you can reach with a keyboard",
        "Real landmarks: a single main region, a navigation region, a footer, and headings in order",
        "The menu button reports its own open state, and the current section is marked in the navigation, so a screen reader announces where you are",
        "Every technical drawing carries a text description of the argument it is making, not just a label naming it",
        "Decorative marks are hidden from assistive technology rather than read out as noise",
        "The page is declared as English, so screen readers pronounce it correctly",
        "It works with JavaScript switched off — the drawings render finished and every link works",
      ],
    },
    {
      n: "C-03",
      heading: "Colour and contrast",
      body: [
        "Both themes were designed on their own terms rather than one being an inversion of the other, and every text colour was checked against the surface it sits on. Body text measures 14.5:1 on the light theme and 15.4:1 on the dark one. The blue used for links and actions measures 6.5:1 and 7.2:1. AA asks for 4.5:1.",
        "Colour is never the only way information is carried. In the case-file drawings, the before and after paths are distinguished by position, label and line style as well as by red and blue.",
      ],
    },
    {
      n: "C-04",
      heading: "Motion",
      body: [
        "This site animates a good deal: drawings that draw themselves as you scroll, a figure that pins while a narrative steps through it, and eased scrolling on a mouse wheel.",
        "All of it is decorative and all of it is switched off by your system's “reduce motion” setting. With that on, every animation and transition is disabled, the wheel scrolls normally, and the drawings render in their finished state. Nothing is hidden behind an animation, so nothing is lost by turning it off.",
      ],
    },
    {
      n: "C-05",
      heading: "What we know is not done",
      body: [
        "Stating this plainly is more useful to you than a conformance badge:",
      ],
      list: [
        "No independent accessibility audit has been carried out, and no testing with assistive-technology users. Everything above is our own assessment",
        "The stepped read of the case-file drawing is a visual device. The same information is in the text beside it and in the drawing's description, but the highlighting itself is not announced",
        "Some of the technical drawings are dense, and their text alternatives summarise the argument rather than describing every element",
        "Third-party pages we link to are outside our control and may not meet this standard",
      ],
    },
    {
      n: "C-06",
      heading: "Telling us we have got something wrong",
      body: [
        "Email the address in the footer. Tell us the page, what you were trying to do, and what your browser and assistive technology are if you know. You will get a person, not an autoresponder, and we aim to reply within one business day.",
        "If something is blocking you from getting information you need, say so and we will send it to you in a format that works while we fix the page.",
      ],
    },
  ],
  metaTitle: "Accessibility",
  metaDescription:
    "Elevare Foundry aims at WCAG 2.2 AA. What is built in, the measured contrast ratios, how reduced motion is handled, and what we know is not done yet.",
};

export const legalDocs = [privacy, terms, accessibility];

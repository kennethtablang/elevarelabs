import type { Metadata, Viewport } from "next";
import { Chivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/content/site";
import Motion from "@/components/Motion";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

/* next/font self-hosts these at build time: no render-blocking request to
   Google, no layout shift, and the font files are served from our own origin. */
const chivo = Chivo({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-chivo",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  /* No `images` key on either of these: app/opengraph-image.tsx generates the
     card at build time and Next wires it up automatically. Setting `images`
     here would override that. */
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
    locale: site.seo.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E7EAE4" },
    { media: "(prefers-color-scheme: dark)", color: "#101720" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* Runs before the body paints, so a returning visitor never sees a flash of
   the wrong theme. No stored choice means no stamp, which leaves the OS
   preference in charge via the media query in globals.css. Kept as a string
   so it ships minified and unparsed by React. */
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t}}catch(e){}})();`;

/* Structured data. Organization + WebSite establish the entity; the service
   catalogue lets the four assemblies appear as distinct offerings. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      slogan: site.tagline,
      description: site.seo.description,
      logo: { "@type": "ImageObject", url: `${site.url}/favicon.svg` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}#website`,
      url: site.url,
      name: site.name,
      description: site.seo.description,
      publisher: { "@id": `${site.url}#organization` },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}#service`,
      name: site.name,
      url: site.url,
      provider: { "@id": `${site.url}#organization` },
      serviceType: "Custom business process software development",
      description:
        "Design and build of internal business software — quoting and orders, scheduling and dispatch, approvals and compliance, and operations dashboards.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Standard assemblies",
        itemListElement: site.assemblies.items.map((a) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: a.title, description: a.body },
        })),
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* suppressHydrationWarning applies to THIS ELEMENT'S OWN attributes only —
       it is not inherited by the tree, so real hydration bugs in the page still
       surface normally. It is here because browser extensions (QuillBot,
       Grammarly, dark-mode toggles) stamp attributes like `data-qb-installed`
       onto <html> before React loads, which React then reports as a mismatch
       against the server HTML. That is the user's browser, not our markup, and
       nothing we render can prevent it. Do not add this to other elements to
       quiet a warning — fix the cause there instead. */
    <html
      lang="en"
      className={`${chivo.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {/* JSON-LD is built from our own static content, and `<` is escaped so
            a stray "</script>" in a future string can never break out. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {/* Both live here rather than on the home page, because scrolling and
            revealing are properties of the site, not of one route. The
            appendix sheets are long documents and were the pages that most
            wanted an eased wheel; they were also the only ones arriving
            fully finished. Neither ships anything to look at — see the
            components for what happens when JS never runs. */}
        <Motion />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

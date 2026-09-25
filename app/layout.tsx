import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UI/UX Recreation",
    template: "%s | UI/UX Recreation",
  },
  description:
    "Recreation of seven provided UI/UX reference designs as a single Next.js application.",
};

/** `viewport-fit=cover` lets the art-showcase header reserve
 *  `env(safe-area-inset-top)` on notched phones; env() is 0 elsewhere, so
 *  desktop/Android rendering is unaffected. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Restore the saved theme before first paint (no flash). Runs while
            the HTML is still parsing; try/catch covers blocked localStorage.
            Key + attribute are shared with components/shared/theme-toggle.tsx. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
        {/* /art-showcase element scale (`--k`) BEFORE first paint — there is NO
            container scaling on this route (user: "instead of scaling the whole
            container … increase the size of the individual elements, that way
            it'll not interfere when we change width"). Every desktop-visible
            size in the components is `calc(<reference px> * var(--k, 1))`, and
            this script writes the unitless `--k` while the head still parses
            (CSS alone can't derive a number from viewport height — calc() can't
            divide a length by a length):
              ≥1283   → h/754      elements fill any large screen's HEIGHT like
                                   the reference frame (grows above 754, shrinks
                                   below → never scrolls)
              641–1282 → min(1, h/754)  reference-exact at 1282×754 (`--k` 1),
                                   shrink-only in short windows (1280×720 →
                                   0.954907 — same as the old "short" fit)
              ≤640    → 1          the mobile comp owns its sizing
            `--k` never depends on width INSIDE a band, so dragging the window's
            width doesn't resize a single element — the layout re-centres and
            clips (the native+clip desktop regime). Between 641 and 1282 the
            stage/headline overflow clips at the centred edges (user: "keep
            overall size and everything same … allow the cards to be clipped").
            Re-applies on resize, exposes itself for client-side route mounts,
            and clears itself on every other route (--k absent → `1` fallback). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
var R=document.documentElement;
function artElementScale(){
if(location.pathname==="/art-showcase"){
var w=innerWidth,h=innerHeight,k=1;
if(w>=641){k=Math.min(1,h/754);}
if(w>=1283){k=h/754;}
R.style.setProperty("--k",String(k));
}
else{R.style.removeProperty("--k");}
}
window.__artElementScale=artElementScale;
artElementScale();
addEventListener("resize",artElementScale);
}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

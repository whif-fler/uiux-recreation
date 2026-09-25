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
            container … increase the size of the individual elements"). Every
            desktop-visible size is `calc(<reference px> * var(--k, 1))`, and
            this script writes the unitless `--k` while the head still parses
            (CSS alone can't derive a number from viewport height — calc() can't
            divide a length by a length):
              ≥641 → h/754
            The reference frame is 1282×754, so HEIGHT alone preserves the
            reference's proportions: at any laptop window the cards keep
            192/754 of the height, the bottom gap keeps 57/754, and the
            content is exactly viewport height — the design fills the frame the
            way the reference does, with nothing cut off and no scrollbar
            (user: "render the demo window in full laptop screen size and you'll
            be able to match the proper card and overall ui/ux design and
            sizes"; also "i don't want scroll to appear"). WIDTH never enters
            the formula, so changing the width resizes nothing (user: "when the
            width is decreased i want all the elements to be fixed size") — the
            layout re-centres and clips instead (native+clip). No `max(1, …)`
            floor: on a short window (1366×625 viewport → `--k` 0.829) flooring
            at 1 would cut the bottom 72px and take the CTA row with it.
            ≤640 stays 1 (the mobile comp owns its sizing).
            Re-applies on resize, exposes itself for client-side route mounts,
            and clears itself on every other route (--k absent → `1` fallback). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
var R=document.documentElement;
function artElementScale(){
if(location.pathname==="/art-showcase"){
var w=innerWidth,h=innerHeight,k=1;
if(w>=641){k=h/754;}
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

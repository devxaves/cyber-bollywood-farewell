import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeRibbon } from "@/components/layout/MarqueeRibbon";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ParticleFieldClient } from "@/components/three/ParticleFieldClient";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A0A0A] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl italic text-gradient-gold">404</h1>
        <h2 className="mt-4 font-ornament text-xl uppercase tracking-[0.3em] text-[#FFF8DC]">Page Not Found</h2>
        <p className="mt-2 font-body text-sm text-[#FFF8DC]/70">
          This story doesn't exist — but the goodbye lives on.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center border border-[#DAA520] bg-[#8B0000]/40 px-5 py-3 font-ornament text-xs uppercase tracking-[0.3em] text-[#DAA520] hover:bg-[#DAA520] hover:text-[#1A0A0A]">
            ✦ Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hasta La Vista 2025 — TMSL Farewell" },
      { name: "description", content: "An immersive farewell experience for the legends of Techno Main Salt Lake. Where goodbyes turn into beautiful stories." },
      { name: "author", content: "The Goodbye Gang · TMSL" },
      { property: "og:title", content: "Hasta La Vista 2025 — TMSL Farewell" },
      { property: "og:description", content: "Where goodbyes turn into beautiful stories. A cinematic farewell for TMSL." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700;1,900&family=Cinzel+Decorative:wght@400;700;900&family=Lora:ital,wght@0,400;0,500;1,400&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#1A0A0A] text-[#FFF8DC] overflow-x-hidden font-body">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <ParticleFieldClient />
      <Navbar />
      <main className="relative">
        <MarqueeRibbon />
        <Outlet />
        <MarqueeRibbon reverse />
      </main>
      <Footer />
    </>
  );
}

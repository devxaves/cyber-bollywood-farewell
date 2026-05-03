import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { galleryImages } from "@/data/content";
import { LotusDivider } from "@/components/effects/Ornaments";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Best Moments Captured — Hasta La Vista 2025" },
      { name: "description", content: "Memories from the legends of TMSL — every frame, a story. Every click, a goodbye preserved." },
      { property: "og:title", content: "Best Moments Captured · TMSL Farewell" },
      { property: "og:description", content: "Every frame, a story." },
      { property: "og:image", content: galleryImages[0] },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="pt-32">
      <section className="relative px-6 py-12 text-center">
        <p className="font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
          ✦ Best Moments Captured ✦
        </p>
        <h1 className="mt-4 font-display text-6xl italic text-gradient-gold md:text-8xl">
          The Memory Vault
        </h1>
        <LotusDivider className="mt-8" />
        <p className="mx-auto mt-6 max-w-2xl font-body text-[#FFF8DC]/75">
          Frozen seconds. Stolen smiles. The kind of pictures you keep returning to, just to feel that night again.
        </p>
      </section>

      <section className="px-6 py-16">
        <div
          className="mx-auto max-w-7xl"
          style={{ columnGap: "1rem", columnCount: 1 }}
        >
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryImages.map((src, i) => (
              <motion.figure
                key={src}
                layoutId={`img-${i}`}
                onClick={() => setActive(src)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: (i % 6) * 0.05, duration: 0.6 }}
                className="group relative mb-4 cursor-pointer overflow-hidden break-inside-avoid border border-[#DAA520]/30"
              >
                <img
                  src={src}
                  alt="TMSL farewell moment"
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
                />
                {/* Bollywood gold frame on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-2 border-2 border-[#DAA520]" />
                  <div className="absolute inset-4 border border-[#DAA520]/60" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A0A0A] to-transparent p-6 text-left">
                    <span className="font-ornament text-[10px] uppercase tracking-[0.3em] text-[#DAA520]">
                      #CaptureTheMoment
                    </span>
                    <p className="mt-1 font-display text-xl italic text-[#FFF8DC]">❤ A moment kept forever</p>
                  </div>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A0A0A]/95 p-6 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              alt="Gallery moment"
              className="max-h-[85vh] max-w-[90vw] border-2 border-[#DAA520] gold-glow"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beloved seniors banner */}
      <section className="relative my-20 overflow-hidden border-y-2 border-[#DAA520]/50 py-24 text-center"
        style={{ background: "linear-gradient(135deg, #8B0000 0%, #1A0A0A 50%, #8B0000 100%)" }}>
        <p className="font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
          ✦ A Tribute ✦
        </p>
        <h2 className="mt-4 font-display text-5xl italic text-gradient-gold md:text-8xl">
          Goodbye, Legends
        </h2>
        <p className="mt-6 font-body text-lg italic text-[#FFF8DC]/80 md:text-xl">
          To our beloved seniors — the world is luckier with you in it.
        </p>
      </section>
    </div>
  );
}

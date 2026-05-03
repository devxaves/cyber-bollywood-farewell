import { motion } from "framer-motion";
import { pillars } from "@/data/content";
import { LotusDivider } from "@/components/effects/Ornaments";

export function PillarsSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
          ✦ Four Pillars ✦
        </p>
        <h2 className="mt-4 font-display text-5xl italic text-gradient-gold md:text-7xl">
          The Story Unfolds
        </h2>
        <LotusDivider className="mt-6" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2">
        {pillars.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative h-[60vh] min-h-[420px] overflow-hidden border border-[#DAA520]/30"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,10,10,0.2) 0%, rgba(26,10,10,0.95) 80%)" }} />

            {/* Diagonal gold slash */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="70" x2="100" y2="55" stroke="#DAA520" strokeWidth="0.4" opacity="0.7" />
              <line x1="0" y1="73" x2="100" y2="58" stroke="#DAA520" strokeWidth="0.2" opacity="0.5" />
            </svg>

            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
              <div className="text-5xl mb-3">{p.icon}</div>
              <h3 className="font-display text-3xl italic leading-tight md:text-5xl" style={{ color: p.accentColor }}>
                {p.title}
              </h3>
              <p className="mt-3 max-w-md font-body text-sm text-[#FFF8DC]/80 md:text-base">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {p.hashtags.map((h) => (
                  <span key={h} className="font-ornament text-[10px] uppercase tracking-[0.3em] text-[#DAA520]">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

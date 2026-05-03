import { motion } from "framer-motion";
import { vibes } from "@/data/content";
import { Mandala, LotusDivider } from "@/components/effects/Ornaments";

export function VibeSection() {
  return (
    <section id="vibe" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
          ✦ The Experience ✦
        </p>
        <h2 className="mt-4 font-display text-5xl italic text-gradient-gold md:text-7xl">
          What Can You Expect?
        </h2>
        <LotusDivider className="mt-6" />
      </div>

      {/* Desktop: radial wheel */}
      <div className="relative mx-auto mt-20 hidden h-[640px] w-[640px] md:block">
        <Mandala className="absolute inset-0 spin-slow opacity-40" size={640} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="font-display text-2xl italic text-gradient-gold">A Night to</p>
          <p className="font-display text-4xl italic text-gradient-crimson">Remember</p>
        </div>
        {vibes.map((v, i) => {
          const angle = (i / vibes.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 250;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.12 }}
              className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center rounded-full glass-panel"
              style={{ transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))` }}
            >
              <div className="text-3xl">{v.icon}</div>
              <div className="mt-2 font-ornament text-[10px] uppercase tracking-[0.3em] text-[#DAA520]">
                {v.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: poster grid */}
      <div className="mx-auto mt-16 grid max-w-md grid-cols-2 gap-4 md:hidden">
        {vibes.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-panel flex aspect-square flex-col items-center justify-center"
          >
            <div className="text-3xl">{v.icon}</div>
            <div className="mt-2 font-ornament text-[10px] uppercase tracking-[0.3em] text-[#DAA520]">
              {v.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

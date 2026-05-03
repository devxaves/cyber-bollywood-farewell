import { motion } from "framer-motion";
import { teachers } from "@/data/content";
import { HoverParallaxCard } from "@/components/cards/HoverParallaxCard";
import { LotusDivider } from "@/components/effects/Ornaments";

export function TeachersSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
          ✦ Words From Our Mentors ✦
        </p>
        <h2 className="mt-4 font-display text-5xl italic text-gradient-gold md:text-7xl">
          Voices That Shaped Us
        </h2>
        <LotusDivider className="mt-6" />
        <p className="mt-6 font-body text-[#FFF8DC]/70">
          The teachers who turned classrooms into cathedrals of learning.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3">
        {teachers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className={i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-10"}
          >
            <HoverParallaxCard teacher={t} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

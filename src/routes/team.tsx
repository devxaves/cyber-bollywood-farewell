import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { teams } from "@/data/content";
import { MemberCard } from "@/components/cards/MemberCard";
import { LotusDivider } from "@/components/effects/Ornaments";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Goodbye Gang — Hasta La Vista 2025" },
      { name: "description", content: "Meet the team behind TMSL's Hasta La Vista 2025 farewell — convenors, technical, finance, creative, and media leads." },
      { property: "og:title", content: "The Goodbye Gang — TMSL Farewell 2025" },
      { property: "og:description", content: "The faces behind the farewell." },
    ],
  }),
  component: TeamPage,
});

const departments = [
  teams.technical,
  teams.finance,
  teams.management,
  teams.creative,
  teams.media,
];

function TeamPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="relative px-6 py-16 text-center">
        <p className="font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
          ✦ The Architects of the Night ✦
        </p>
        <h1 className="mt-4 font-display text-6xl italic text-gradient-gold md:text-8xl lg:text-9xl">
          The Goodbye Gang
        </h1>
        <LotusDivider className="mt-8" />
        <p className="mx-auto mt-6 max-w-2xl font-body text-[#FFF8DC]/75">
          Fifty hearts. One mission. To turn this farewell into a memory worth telling your grandchildren about.
        </p>
      </section>

      {/* Executive spotlight */}
      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
            ✦ {teams.executive.label} ✦
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {teams.executive.members.map((m, i) => (
              <RevealOnScroll key={m.name} index={i}>
                <MemberCard name={m.name} role={m.role} highlight />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Departments — film reel scrollers */}
      {departments.map((dept, di) => (
        <section key={dept.label} className="relative overflow-hidden py-16">
          <div className="mx-auto flex max-w-7xl items-center gap-8 px-6">
            <h2
              className="hidden shrink-0 font-display text-3xl italic text-gradient-gold md:block lg:text-5xl"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {dept.label}
            </h2>
            <h2 className="md:hidden font-display text-3xl italic text-gradient-gold">
              {dept.label}
            </h2>
            <div className="relative flex-1 overflow-x-auto">
              <div className="flex gap-6 pb-4">
                {dept.members.map((m, i) => (
                  <motion.div
                    key={m.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + di * 0.05, duration: 0.5 }}
                  >
                    <MemberCard name={m.name} role={m.role} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-7xl px-6">
            <LotusDivider />
          </div>
        </section>
      ))}
    </div>
  );
}

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export type Teacher = {
  name: string;
  initials: string;
  quote: string;
  accent: string;
};

export function HoverParallaxCard({ teacher }: { teacher: Teacher }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 });
  const glareX = useTransform(x, [-0.5, 0.5], ["20%", "80%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["20%", "80%"]);

  const handle = (e: MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
      className="group relative cursor-pointer"
    >
      <div
        className="relative overflow-hidden p-1"
        style={{
          background: `linear-gradient(135deg, ${teacher.accent}, #8B0000, ${teacher.accent})`,
          boxShadow: `0 20px 60px -10px ${teacher.accent}55`,
        }}
      >
        <div className="relative bg-[#1A0A0A] p-8" style={{ border: "1px solid rgba(218,165,32,0.5)" }}>
          {/* Glare */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) =>
                  `radial-gradient(circle at ${gx} ${gy}, rgba(218,165,32,0.25), transparent 50%)`,
              ) as unknown as string,
            }}
          />

          {/* Avatar */}
          <div
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full font-display text-3xl italic"
            style={{
              background: `radial-gradient(circle, ${teacher.accent}, #1A0A0A)`,
              border: `2px solid ${teacher.accent}`,
              color: "#FFF8DC",
              boxShadow: `0 0 30px ${teacher.accent}80`,
            }}
          >
            {teacher.initials}
          </div>

          {/* Name */}
          <h3 className="mt-6 text-center font-display text-2xl italic text-gradient-gold">
            {teacher.name}
          </h3>

          {/* Divider */}
          <div className="my-4 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-[#DAA520]/60" />
            <span className="text-[#DAA520]">✦</span>
            <span className="h-px w-12 bg-[#DAA520]/60" />
          </div>

          {/* Quote */}
          <p className="text-center font-body text-sm italic text-[#FFF8DC]/85">
            "{teacher.quote}"
          </p>

          {/* Stars */}
          <div className="mt-6 flex justify-center gap-2 text-[#DAA520]">
            <span>✦</span><span>✦</span><span>✦</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

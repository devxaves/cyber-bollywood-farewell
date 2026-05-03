import { LotusDivider } from "@/components/effects/Ornaments";
import { contactInfo } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative border-t border-[#DAA520]/30 bg-[#1A0A0A]/95 px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <LotusDivider />
        <h3 className="mt-8 font-display text-3xl italic text-gradient-gold md:text-5xl">
          Hasta La Vista, 2025
        </h3>
        <p className="mt-4 font-body text-sm text-[#FFF8DC]/60 md:text-base">
          A farewell to remember · Where every goodbye is the start of a beautiful story
        </p>

        <div className="mt-10 grid gap-3 font-body text-sm text-[#FFF8DC]/70 sm:grid-cols-3">
          <p>📧 {contactInfo.email}</p>
          <p>📞 {contactInfo.phone}</p>
          <p>📍 {contactInfo.address}</p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <Marigold />
          <p className="font-ornament text-xs uppercase tracking-[0.4em] text-[#DAA520]">
            Made with ❤ by the Goodbye Gang · TMSL 2025
          </p>
          <Marigold />
        </div>
      </div>
    </footer>
  );
}

function Marigold() {
  return (
    <svg className="spin-slow" width="36" height="36" viewBox="0 0 40 40">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="10"
          rx="3"
          ry="8"
          fill="#DAA520"
          opacity="0.85"
          transform={`rotate(${i * 45} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="3" fill="#8B0000" />
    </svg>
  );
}

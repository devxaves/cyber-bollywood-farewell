export function MemberCard({ name, role, highlight = false }: { name: string; role: string; highlight?: boolean }) {
  return (
    <div
      className={`relative flex shrink-0 flex-col items-center justify-center px-8 py-10 text-center ${
        highlight ? "min-w-[260px]" : "min-w-[220px]"
      }`}
      style={{
        background: highlight
          ? "linear-gradient(160deg, rgba(139,0,0,0.5), rgba(26,10,10,0.9))"
          : "linear-gradient(160deg, rgba(218,165,32,0.08), rgba(26,10,10,0.7))",
        border: `1px solid ${highlight ? "#DAA520" : "rgba(218,165,32,0.35)"}`,
        boxShadow: highlight ? "0 0 30px rgba(218,165,32,0.4)" : undefined,
      }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full font-display text-xl italic text-[#FFF8DC]"
        style={{ background: "radial-gradient(circle, #8B0000, #1A0A0A)", border: "1px solid #DAA520" }}
      >
        {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
      </div>
      <h4 className="mt-4 font-display text-xl italic text-gradient-gold">{name}</h4>
      <p className="mt-2 font-ornament text-[10px] uppercase tracking-[0.3em] text-[#FFF8DC]/70">
        {role}
      </p>
    </div>
  );
}

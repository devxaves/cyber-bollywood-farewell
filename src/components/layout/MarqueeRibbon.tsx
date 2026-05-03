import { slogans } from "@/data/content";

export function MarqueeRibbon({ reverse = false }: { reverse?: boolean }) {
  const items = [...slogans, ...slogans, ...slogans];
  return (
    <div
      className="relative w-full overflow-hidden border-y border-[#DAA520]/40 py-3"
      style={{
        background: "linear-gradient(135deg, #8B0000, #1A0A0A 50%, #8B0000)",
      }}
    >
      <div className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        {items.map((s, i) => (
          <span
            key={i}
            className="font-ornament whitespace-nowrap px-8 text-sm uppercase tracking-[0.3em] text-[#DAA520]"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

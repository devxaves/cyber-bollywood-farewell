export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 78 L2 30 Q2 2 30 2 L78 2" stroke="#DAA520" strokeWidth="1" />
      <path d="M10 70 L10 34 Q10 10 34 10 L70 10" stroke="#DAA520" strokeWidth="0.5" opacity="0.6" />
      <circle cx="14" cy="14" r="2" fill="#DAA520" />
      <path d="M22 14 Q30 6 38 14" stroke="#DAA520" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

export function LotusDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-16 sm:w-32 bg-gradient-to-r from-transparent via-[#DAA520] to-[#DAA520]" />
      <svg width="44" height="20" viewBox="0 0 44 20" fill="none">
        <path d="M22 2 L26 10 L22 18 L18 10 Z" fill="#DAA520" opacity="0.9" />
        <path d="M6 10 L18 10" stroke="#DAA520" strokeWidth="0.8" />
        <path d="M26 10 L38 10" stroke="#DAA520" strokeWidth="0.8" />
        <circle cx="6" cy="10" r="2" fill="#B22222" stroke="#DAA520" strokeWidth="0.5" />
        <circle cx="38" cy="10" r="2" fill="#B22222" stroke="#DAA520" strokeWidth="0.5" />
      </svg>
      <span className="h-px w-16 sm:w-32 bg-gradient-to-l from-transparent via-[#DAA520] to-[#DAA520]" />
    </div>
  );
}

export function Mandala({ className = "", size = 200 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" stroke="#DAA520" strokeWidth="0.5" opacity="0.6" />
      <circle cx="100" cy="100" r="70" stroke="#DAA520" strokeWidth="0.4" opacity="0.4" />
      <circle cx="100" cy="100" r="50" stroke="#DAA520" strokeWidth="0.4" opacity="0.4" />
      <circle cx="100" cy="100" r="30" stroke="#DAA520" strokeWidth="0.4" opacity="0.4" />
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="40"
          rx="6"
          ry="22"
          fill="none"
          stroke="#DAA520"
          strokeWidth="0.6"
          opacity="0.7"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={`p${i}`}
          cx="100"
          cy="60"
          rx="4"
          ry="14"
          fill="#B22222"
          opacity="0.35"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="5" fill="#DAA520" />
    </svg>
  );
}

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

export function MagneticButton({
  children,
  className = "",
  onClick,
  as = "button",
  href,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handle = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - r.left - r.width / 2) * 0.35, y: (e.clientY - r.top - r.height / 2) * 0.35 });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.4 }}
      className="block"
    >
      {children}
    </motion.span>
  );

  return (
    <div ref={ref} onMouseMove={handle} onMouseLeave={reset} className="inline-block">
      {as === "a" ? (
        <a href={href} onClick={onClick} className={className}>{inner}</a>
      ) : (
        <button type="button" onClick={onClick} className={className}>{inner}</button>
      )}
    </div>
  );
}

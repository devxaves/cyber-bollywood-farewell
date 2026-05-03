import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setHover(true);
    const out = () => setHover(false);
    window.addEventListener("mousemove", move);
    const els = document.querySelectorAll("button, a, [data-cursor]");
    els.forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] h-2 w-2 rounded-full"
        style={{ background: "#DAA520", boxShadow: "0 0 12px #DAA520" }}
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hover ? 1.8 : 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 28, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full border"
        style={{ borderColor: "#DAA520", width: 32, height: 32 }}
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: hover ? 1.6 : 1,
          opacity: hover ? 0.9 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/effects/MagneticButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/team", label: "The Gang" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled ? "bg-[#1A0A0A]/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-ornament text-2xl font-bold text-gradient-gold">HLV</span>
          <span className="hidden font-body text-xs uppercase tracking-[0.4em] text-[#DAA520]/80 sm:block">
            Hasta La Vista · 2025
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative font-body text-sm uppercase tracking-[0.25em] text-[#FFF8DC]/70 transition-colors hover:text-[#FFF8DC]"
              activeProps={{ className: "text-[#DAA520]" }}
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#DAA520] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton
            as="a"
            href="#register"
            className="inline-block border border-[#DAA520] px-5 py-2 font-ornament text-xs uppercase tracking-[0.3em] text-[#DAA520] transition-colors hover:bg-[#DAA520] hover:text-[#1A0A0A]"
          >
            ✦ Register
          </MagneticButton>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded border border-[#DAA520]/50 p-2 text-[#DAA520]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <motion.div
        style={{ scaleX: progress, transformOrigin: "left" }}
        className="h-px w-full bg-[#DAA520]"
      />

      {open && (
        <div className="md:hidden border-t border-[#DAA520]/30 bg-[#1A0A0A]/95 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-5 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-ornament text-sm uppercase tracking-[0.3em] text-[#FFF8DC]/80"
                activeProps={{ className: "text-[#DAA520]" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { LotusDivider, Mandala } from "@/components/effects/Ornaments";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1.4]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 1]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scrollLetterSpread = useTransform(scrollYProgress, [0, 0.5], [0, 60]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const scrollText = "✦ Scroll to Begin the Journey ✦";

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,0,0,0.5) 0%, #1A0A0A 70%)",
          }}
        />
        <Mandala
          className="absolute -right-40 -top-40 spin-slow opacity-10"
          size={600}
        />
        <Mandala
          className="absolute -bottom-40 -left-40 spin-slow opacity-10"
          size={600}
        />

        {/* Expanding hero image */}
        <motion.div
          style={{ scale, opacity: imgOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[60vh] w-[80vw] cinema-vignette overflow-hidden rounded-2xl border border-[#DAA520]/40 md:h-[70vh] md:w-[60vw]"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1800&q=85)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow:
                "0 0 80px rgba(218,165,32,0.3), inset 0 0 200px rgba(26,10,10,0.95)",
            }}
          />
        </motion.div>

        {/* Hero text */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          <p className="font-ornament mb-6 text-xs uppercase tracking-[0.6em] text-[#DAA520]">
            ✦ Techno Main Salt Lake ✦
          </p>
          <h1 className="font-display text-5xl italic leading-[0.95] sm:text-7xl md:text-8xl lg:text-[10rem]">
            <span className="text-gradient-gold">Hasta</span>{" "}
            <span className="text-[#FFF8DC]">La</span>{" "}
            <span className="text-gradient-crimson">Vista</span>
          </h1>
          <p className="font-deva mt-4 text-2xl text-[#FFF8DC]/80 md:text-3xl">
            नया ज़माना · पुरानी शान
          </p>
          <LotusDivider className="my-8" />
          <p className="max-w-2xl font-body text-base text-[#FFF8DC]/80 md:text-lg">
            New Year, Same Fun! A farewell to remember for the legends of TMSL.
            Where goodbyes turn into beautiful stories.
          </p>

          <div className="mt-10">
            <MagneticButton
              as="a"
              href="#vibe"
              className="inline-block border-2 border-[#DAA520] bg-[#8B0000]/40 px-10 py-4 font-ornament text-sm uppercase tracking-[0.4em] text-[#DAA520] backdrop-blur-md transition-all hover:bg-[#DAA520] hover:text-[#1A0A0A] gold-glow"
            >
              ✦ Get Started ✦
            </MagneticButton>
          </div>
        </motion.div>

        <ScrollHint
          text={scrollText}
          spread={scrollLetterSpread}
          opacity={scrollOpacity}
        />
      </div>
    </section>
  );
}

function ScrollHint({
  text,
  spread,
  opacity,
}: {
  text: string;
  spread: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  const letters = text.split("");
  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-10 left-0 right-0 flex justify-center"
    >
      <p className="flex font-ornament text-xs uppercase text-[#FFF8DC]/70">
        {letters.map((c, i) => (
          <Letter key={i} char={c} index={i - letters.length / 2} spread={spread} />
        ))}
      </p>
    </motion.div>
  );
}

function Letter({
  char,
  index,
  spread,
}: {
  char: string;
  index: number;
  spread: MotionValue<number>;
}) {
  const x = useTransform(spread, (v) => v * index * 0.1);
  return (
    <motion.span style={{ x }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

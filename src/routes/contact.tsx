import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react";
import { contactInfo } from "@/data/content";
import { LotusDivider } from "@/components/effects/Ornaments";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get In Touch — Hasta La Vista 2025" },
      { name: "description", content: "Reach the Goodbye Gang — registration, sponsorship, or just to say hello." },
      { property: "og:title", content: "Contact · TMSL Farewell 2025" },
      { property: "og:description", content: "The curtain rises. Step in." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has reached the Goodbye Gang ✦", {
      description: "We'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative pt-32 pb-24">
      <Toaster />
      {/* Curtains */}
      <motion.div
        initial={{ x: "-50%" }}
        animate={{ x: "-90%" }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-1/2"
        style={{ background: "linear-gradient(90deg, #8B0000, #4B0000)", boxShadow: "inset -30px 0 60px #1A0A0A" }}
      />
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: "90%" }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="pointer-events-none absolute right-0 top-0 z-0 h-full w-1/2"
        style={{ background: "linear-gradient(270deg, #8B0000, #4B0000)", boxShadow: "inset 30px 0 60px #1A0A0A" }}
      />

      <section className="relative z-10 px-6 text-center">
        <p className="font-ornament text-xs uppercase tracking-[0.5em] text-[#DAA520]">
          ✦ The Curtain Rises ✦
        </p>
        <h1 className="mt-4 font-display text-6xl italic text-gradient-gold md:text-8xl">
          Get In Touch
        </h1>
        <LotusDivider className="mt-8" />
      </section>

      <section className="relative z-10 mx-auto mt-16 grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        {/* Film credits */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <p className="font-ornament text-xs uppercase tracking-[0.4em] text-[#DAA520]/70">— Email —</p>
            <a href={`mailto:${contactInfo.email}`} className="mt-2 flex items-center gap-3 font-display text-2xl italic text-gradient-gold hover:underline">
              <Mail size={20} className="text-[#DAA520]" /> {contactInfo.email}
            </a>
          </div>
          <div>
            <p className="font-ornament text-xs uppercase tracking-[0.4em] text-[#DAA520]/70">— Phone —</p>
            <a href={`tel:${contactInfo.phone}`} className="mt-2 flex items-center gap-3 font-display text-2xl italic text-gradient-gold hover:underline">
              <Phone size={20} className="text-[#DAA520]" /> {contactInfo.phone}
            </a>
          </div>
          <div>
            <p className="font-ornament text-xs uppercase tracking-[0.4em] text-[#DAA520]/70">— Location —</p>
            <p className="mt-2 flex items-center gap-3 font-display text-2xl italic text-gradient-gold">
              <MapPin size={20} className="text-[#DAA520]" /> {contactInfo.address}
            </p>
          </div>

          <div className="flex gap-4 pt-6">
            {[Instagram, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DAA520] text-[#DAA520] transition-all hover:bg-[#DAA520] hover:text-[#1A0A0A] hover:gold-glow"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="glass-panel p-8 md:p-10">
          <h2 className="font-display text-3xl italic text-gradient-gold">Send a Message</h2>
          <div className="mt-8 space-y-6">
            {[
              { key: "name", label: "Your Name", type: "text" },
              { key: "email", label: "Your Email", type: "email" },
            ].map((f) => (
              <FloatingInput
                key={f.key}
                label={f.label}
                type={f.type}
                value={form[f.key as "name" | "email"]}
                onChange={(v) => setForm((s) => ({ ...s, [f.key]: v }))}
              />
            ))}
            <FloatingTextarea
              label="Your Message"
              value={form.message}
              onChange={(v) => setForm((s) => ({ ...s, message: v }))}
            />
            <MagneticButton
              as="button"
              className="block w-full border-2 border-[#DAA520] bg-[#8B0000]/40 px-6 py-4 font-ornament text-sm uppercase tracking-[0.4em] text-[#DAA520] transition-all hover:bg-[#DAA520] hover:text-[#1A0A0A] gold-glow"
            >
              ✦ Send Message ✦
            </MagneticButton>
          </div>
        </form>
      </section>
    </div>
  );
}

function FloatingInput({ label, type, value, onChange }: { label: string; type: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="relative block">
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full border-b border-[#DAA520]/40 bg-transparent px-1 pb-2 pt-5 font-body text-[#FFF8DC] outline-none transition-colors focus:border-[#DAA520]"
      />
      <span className="pointer-events-none absolute left-1 top-4 font-ornament text-xs uppercase tracking-[0.3em] text-[#FFF8DC]/50 transition-all peer-focus:-translate-y-3 peer-focus:text-[10px] peer-focus:text-[#DAA520] peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-[10px]">
        {label}
      </span>
    </label>
  );
}

function FloatingTextarea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="relative block">
      <textarea
        required
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full resize-none border-b border-[#DAA520]/40 bg-transparent px-1 pb-2 pt-5 font-body text-[#FFF8DC] outline-none transition-colors focus:border-[#DAA520]"
      />
      <span className="pointer-events-none absolute left-1 top-4 font-ornament text-xs uppercase tracking-[0.3em] text-[#FFF8DC]/50 transition-all peer-focus:-translate-y-3 peer-focus:text-[10px] peer-focus:text-[#DAA520] peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-[10px]">
        {label}
      </span>
    </label>
  );
}

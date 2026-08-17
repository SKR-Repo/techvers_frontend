import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "max-w-7xl mt-4 px-5 sm:px-7 py-3"
            : "max-w-[1400px] mt-0 px-6 sm:px-10 py-5"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div className="grid h-12 w-40 place-items-center rounded-lg">
            <img src="/techverse_logo.png" alt="techverse_logo" />
          </div>
          {/* <div
            className="grid h-10 w-10 place-items-center rounded-lg border backdrop-blur"
            style={{ borderColor: "oklch(0.82 0.15 200 / 0.35)", background: "oklch(0.82 0.15 200 / 0.10)" }}
          >
            <Hexagon size={18} style={{ color: "oklch(0.82 0.15 200)" }} strokeWidth={1.8} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">TechVers</div>
            <div className="font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color: "oklch(0.82 0.15 200)" }}>
              Digital Innovation
            </div>
          </div> */}
        </a>

        {/* Pill nav */}
        <nav
          className={`hidden md:flex items-center gap-1 rounded-full transition-all duration-500 ${
            scrolled
              ? "border border-white/10 bg-background/70 backdrop-blur-2xl px-2 py-1.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "bg-transparent px-2 py-1.5"
          }`}
        >
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "linear-gradient(135deg, oklch(0.82 0.15 200), oklch(0.65 0.20 250))" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>
                  {l.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 rounded-full text-sm font-semibold text-white transition-all duration-500 ${
            scrolled
              ? "px-5 py-2.5 shadow-[0_8px_30px_-8px_oklch(0.65_0.20_250/0.55)] hover:shadow-[0_12px_40px_-6px_oklch(0.65_0.20_250/0.7)]"
              : "px-6 py-3 hover:scale-[1.03]"
          }`}
          style={{ background: "linear-gradient(135deg, oklch(0.82 0.15 200), oklch(0.65 0.20 250))" }}
        >
          Book a Demo
        </a>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-background/60 backdrop-blur"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 rounded-3xl border border-white/10 bg-background/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm text-muted-foreground hover:text-foreground border-b border-white/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, oklch(0.82 0.15 200), oklch(0.65 0.20 250))" }}
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { MessageCircle, ArrowRight, Award, Code2, Users, Clock } from "lucide-react";

const filters = ["All Services", "Web Development", "Mobile Apps", "AI Solutions", "Automation", "WhatsApp", "Consulting"];
const stats = [
  { icon: Award, value: "500+", label: "Projects Delivered" },
  { icon: Code2, value: "10+", label: "Website Experts" },
  { icon: Users, value: "1,000+", label: "Smart Contracts" },
  { icon: Clock, value: "10+", label: "Years Experience" },
];

export default function Hero() {
  const titleRef = useRef(null);
  const activeFilter = "All Services";

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".w");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.1,
        delay: 0.25,
      },
    );
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-36 pb-20 bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Cyan/blue ambient glows */}
      <motion.div
        className="sphere"
        style={{ width: 560, height: 560, left: "-10%", top: "10%" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="sphere"
        style={{ width: 480, height: 480, right: "-8%", bottom: "5%", background: "radial-gradient(circle at 30% 30%, oklch(0.82 0.15 200 / 0.35), transparent 70%)" }}
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-3 rounded-full border border-cyan/40 bg-cyan/5 px-6 py-2.5 backdrop-blur"
          style={{ borderColor: "oklch(0.82 0.15 200 / 0.4)", background: "oklch(0.82 0.15 200 / 0.06)" }}
        >
          <span className="text-base">✦</span>
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: "oklch(0.82 0.15 200)" }}>
            Full-Service Tech Agency
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="mt-10 font-display text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-tight"
        >
          <span className="block overflow-hidden">
            <span className="w inline-block">Enterprise-Grade</span>
          </span>
          <span className="block overflow-hidden">
            <span className="w inline-block text-gradient-cyan">Digital Innovation</span>
          </span>
          <span className="block overflow-hidden">
            <span className="w inline-block text-gradient-cyan">Services</span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          End-to-end software solutions for startups and enterprises. From custom
          web & mobile apps to AI automation — we build the future of business.
        </motion.p>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {filters.map((f) => {
            const isActive = f === activeFilter;
            return (
              <button
                key={f}
                className={`rounded-full px-5 py-2 text-xs font-medium transition-all ${
                  isActive
                    ? "text-white shadow-[0_8px_30px_-6px_oklch(0.82_0.15_200/0.55)]"
                    : "border border-white/10 bg-white/[0.03] text-muted-foreground hover:text-foreground hover:border-white/25"
                }`}
                style={isActive ? { background: "linear-gradient(135deg, oklch(0.82 0.15 200), oklch(0.65 0.20 250))" } : {}}
              >
                {f}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="group btn-cyan inline-flex items-center justify-center gap-3 rounded-xl px-9 py-4 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wa.me/919661253409"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-9 py-4 text-sm font-bold uppercase tracking-wider text-foreground backdrop-blur transition hover:bg-white/[0.08] hover:border-white/30"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </motion.div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-16 w-full max-w-5xl rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="text-center">
                  <div
                    className="mx-auto grid h-12 w-12 place-items-center rounded-xl"
                    style={{ background: "oklch(0.82 0.15 200 / 0.12)", color: "oklch(0.82 0.15 200)" }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="mt-4 font-display text-3xl md:text-4xl font-black text-foreground">{s.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
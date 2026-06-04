import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, Cpu, Clock, Code2 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security-First",
    desc: "Every line of code reviewed and stress-tested before deployment.",
    color: "oklch(0.78 0.18 155)",
  },
  {
    icon: Award,
    title: "Battle-Tested",
    desc: "10M+ users served across live platforms in production.",
    color: "oklch(0.65 0.20 250)",
  },
  {
    icon: Cpu,
    title: "Full-Stack",
    desc: "From infra to polished frontend — one team, end-to-end ownership.",
    color: "oklch(0.65 0.22 305)",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Dedicated maintenance and rapid-response SLA after launch.",
    color: "oklch(0.75 0.18 65)",
  },
];

const bars = [
  { label: "Web Development",    value: 12, color: "oklch(0.78 0.18 155)" },
  { label: "Mobile Apps",        value: 8,  color: "oklch(0.65 0.20 250)" },
  { label: "AI & Automation",    value: 10, color: "oklch(0.75 0.18 65)"  },
  { label: "Infrastructure",     value: 6,  color: "oklch(0.65 0.22 305)" },
  { label: "WhatsApp Solutions", value: 7,  color: "oklch(0.82 0.15 200)" },
  { label: "Consulting",         value: 5,  color: "oklch(0.70 0.22 25)"  },
];

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full blur-[140px] radial-cyan opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8" style={{ background: "oklch(0.82 0.15 200)" }} />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "oklch(0.82 0.15 200)" }}>
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-display text-5xl md:text-6xl font-black leading-[1.02] tracking-tight"
          >
            We Don't Just Build —<br />
            <span className="text-gradient-cyan">We Partner.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-md text-muted-foreground leading-relaxed"
          >
            7+ years of engineering experience. We've delivered production-ready
            platforms used by millions of users worldwide.
          </motion.p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              const tint = f.color.replace(")", " / 0.14)");
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur p-5 transition hover:border-[oklch(0.82_0.15_200/0.35)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl shrink-0" style={{ background: tint, color: f.color }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold">{f.title}</h3>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Stats card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/10 bg-card/30 backdrop-blur-xl p-8 md:p-10"
        >
          {/* Floating top badge */}
          <div
            className="absolute -top-6 left-6 flex items-center gap-3 rounded-xl border border-white/10 bg-background/95 backdrop-blur px-4 py-3 shadow-xl"
          >
            <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "oklch(0.82 0.15 200 / 0.18)", color: "oklch(0.82 0.15 200)" }}>
              <Shield size={16} />
            </div>
            <div>
              <div className="font-display text-sm font-bold leading-tight">500+ Projects</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Zero Critical Issues</div>
            </div>
          </div>

          <div className="mt-4 space-y-5">
            {bars.map((b, i) => {
              const max = 12;
              return (
                <div key={b.label}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-foreground">{b.label}</div>
                    <div className="font-mono text-sm font-bold" style={{ color: b.color }}>{b.value}</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(b.value / max) * 100}%` } : { width: 0 }}
                      transition={{ duration: 1.1, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${b.color}, ${b.color.replace(")", " / 0.6)")})` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating bottom-right badge */}
          <div
            className="absolute -bottom-5 right-6 flex items-center gap-3 rounded-xl border border-white/10 bg-background/95 backdrop-blur px-4 py-3 shadow-xl"
          >
            <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "oklch(0.78 0.18 155 / 0.18)", color: "oklch(0.78 0.18 155)" }}>
              <Code2 size={16} />
            </div>
            <div>
              <div className="font-display text-sm font-bold leading-tight">10M+ Users</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Live Platforms</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
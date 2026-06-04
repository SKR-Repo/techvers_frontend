import { motion } from "framer-motion";
import { Target, Network, Code2, ShieldCheck, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  { icon: Target,      title: "Discovery",     desc: "Deep-dive into requirements and technical feasibility assessment.", color: "oklch(0.78 0.18 155)" },
  { icon: Network,     title: "Architecture",  desc: "Design scalable, secure infrastructure tailored to your needs.",    color: "oklch(0.65 0.20 250)" },
  { icon: Code2,       title: "Development",   desc: "Agile sprints with continuous testing and code reviews.",           color: "oklch(0.65 0.22 305)" },
  { icon: ShieldCheck, title: "Quality Audit", desc: "Comprehensive audit and formal verification of all features.",      color: "oklch(0.75 0.18 65)"  },
  { icon: Rocket,      title: "Deployment",    desc: "Production launch with ongoing monitoring and dedicated support.",  color: "oklch(0.82 0.15 200)" },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative">
        <SectionHeader
          eyebrow="Our Process"
          title="How We"
          accent="Deliver Excellence"
          description="A battle-tested workflow that ensures quality, clarity, and on-time delivery every time."
        />

        <div className="mx-auto mt-16 max-w-7xl px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const tint = s.color.replace(")", " / 0.12)");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur p-6 pt-7 transition hover:border-white/25"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
                />
                <span
                  className="absolute bottom-2 right-4 font-display text-7xl font-black leading-none select-none opacity-[0.08]"
                  style={{ color: s.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: tint, color: s.color }}
                >
                  <Icon size={20} />
                </div>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: s.color }}>
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}